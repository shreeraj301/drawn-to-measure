import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  type InstancedMesh,
  Object3D,
  ShaderMaterial,
  SphereGeometry,
  BufferGeometry,
  Float32BufferAttribute,
  CanvasTexture,
  SRGBColorSpace,
  Points,
  LineSegments,
  Vector3,
  Quaternion,
} from "three";
import { DEGREE, LINKS, NODES, POSITIONS } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";
import { discFrac, nodeAtlas } from "./atlas";
import { GRAPH_SCALE } from "./scale";

const dummy = new Object3D();
const _right = new Vector3();
const _up = new Vector3();
const _q = new Quaternion();

type Live = {
  x: number;
  y: number;
  z: number;
  tx: number;
  ty: number;
  tz: number;
  s: number;
  ts: number;
  lift: number;
};

const maxOther = Math.max(1, ...NODES.filter((n) => n.id !== "shreeraj").map((n) => DEGREE.get(n.id) || 1));

export function discRadius(id: string, degree: number): number {
  if (id === "shreeraj") return 1.15;
  const t = Math.sqrt(degree / maxOther);
  return Math.min(0.72, 0.2 + t * 0.48);
}

/** Local-space radius of the painted disc (before the scene scale). */
export function localDiscRadius(id: string, degree: number, community: number): number {
  return discRadius(id, degree) * 2.15 * discFrac(id, community);
}

const HIM_LOCAL_R = localDiscRadius("shreeraj", 1, 0);
/** Clear the sheet by 0.2 world units once GRAPH_SCALE is applied. */
export const HIM_Y = HIM_LOCAL_R + 0.2 / GRAPH_SCALE;

export const livePositions: Live[] = NODES.map((n) => {
  const p = POSITIONS[n.id] ?? [0, 0, 0];
  const y = n.id === "shreeraj" ? HIM_Y : p[1];
  return { x: p[0], y, z: p[2], tx: p[0], ty: y, tz: p[2], s: 1, ts: 1, lift: 0 };
});

export function nodeWorld(index: number): [number, number, number] {
  const l = livePositions[index];
  return [l?.x ?? 0, (l?.y ?? 0) + (l?.lift ?? 0), l?.z ?? 0];
}

const indexById = new Map(NODES.map((n, i) => [n.id, i]));
export function indexOf(id: string): number {
  return indexById.get(id) ?? -1;
}

export const hiddenFlags = new Uint8Array(NODES.length);

function kindHidden(kind: string, kinds: Record<string, boolean>): boolean {
  return kinds[kind] === false;
}

function placeY(id: string, y: number): number {
  return id === "shreeraj" ? Math.max(y, HIM_Y) : y;
}

const vert = /* glsl */ `
  attribute float aScale;
  attribute vec2 uvOff;
  attribute vec3 aTint;
  varying vec2 vUvOff;
  varying vec3 vCol;
  void main() {
    vUvOff = uvOff;
    vCol = aTint;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aScale * projectionMatrix[1][1] * 900.0 / max(0.2, -mv.z);
  }
`;

const frag = /* glsl */ `
  uniform sampler2D map;
  uniform float cell;
  varying vec2 vUvOff;
  varying vec3 vCol;
  void main() {
    vec2 uv = vUvOff + vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y) * cell;
    vec4 tex = texture2D(map, uv);
    if (tex.a < 0.05) discard;
    gl_FragColor = vec4(tex.rgb * vCol, tex.a);
  }
`;

function noRaycast() {}

let shadowMap: CanvasTexture | null = null;
function contactShadow(): CanvasTexture {
  if (shadowMap) return shadowMap;
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const g = canvas.getContext("2d");
  if (!g) throw new Error("canvas");
  const gr = g.createRadialGradient(64, 64, 4, 64, 64, 62);
  gr.addColorStop(0, "rgba(60,44,28,0.18)");
  gr.addColorStop(1, "rgba(60,44,28,0)");
  g.fillStyle = gr;
  g.fillRect(0, 0, 128, 128);
  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
  shadowMap = tex;
  return tex;
}

export function Nodes() {
  const pointsRef = useRef<Points>(null);
  const shadowRef = useRef<InstancedMesh>(null);
  const plumbRef = useRef<LineSegments>(null);
  const atlas = useMemo(() => nodeAtlas(), []);
  const shadowTex = useMemo(() => contactShadow(), []);
  const geo = useMemo(() => {
    const g = new BufferGeometry();
    const pos = new Float32Array(NODES.length * 3);
    const uv = atlas.uv;
    const scale = new Float32Array(NODES.length);
    const tint = new Float32Array(NODES.length * 3);
    NODES.forEach((n, i) => {
      const live = livePositions[i];
      pos[i * 3] = live?.x ?? 0;
      pos[i * 3 + 1] = live?.y ?? 0;
      pos[i * 3 + 2] = live?.z ?? 0;
      scale[i] = 0.4;
      tint[i * 3] = 1;
      tint[i * 3 + 1] = 1;
      tint[i * 3 + 2] = 1;
    });
    g.setAttribute("position", new Float32BufferAttribute(pos, 3));
    g.setAttribute("uvOff", new Float32BufferAttribute(uv, 2));
    g.setAttribute("aScale", new Float32BufferAttribute(scale, 1));
    g.setAttribute("aTint", new Float32BufferAttribute(tint, 3));
    return g;
  }, [atlas]);
  const mat = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: { map: { value: atlas.texture }, cell: { value: atlas.cell } },
        vertexShader: vert,
        fragmentShader: frag,
        transparent: true,
        depthWrite: false,
        toneMapped: false,
      }),
    [atlas],
  );

  const baseScale = useMemo(
    () => NODES.map((n) => discRadius(n.id, DEGREE.get(n.id) || 1) * 2.15 * GRAPH_SCALE),
    [],
  );

  const hovered = useGraphStore((s) => s.hoveredId);
  const selected = useGraphStore((s) => s.selectedId);
  const communityFocus = useGraphStore((s) => s.communityFocus);
  const kinds = useGraphStore((s) => s.kinds);
  const introDone = useGraphStore((s) => s.introDone);
  const reduced = useGraphStore((s) => s.reducedMotion);
  const introT = useRef(reduced ? 1 : 0);

  const neighborSet = useMemo(() => {
    const focus = hovered || selected;
    const set = new Set<number>();
    if (!focus) return set;
    const i = indexOf(focus);
    if (i >= 0) set.add(i);
    for (const l of LINKS) {
      if (l.source === focus) {
        const j = indexOf(l.target);
        if (j >= 0) set.add(j);
      } else if (l.target === focus) {
        const j = indexOf(l.source);
        if (j >= 0) set.add(j);
      }
    }
    return set;
  }, [hovered, selected]);

  const plumbGeo = useMemo(() => {
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(new Float32Array(4 * 3), 3));
    return g;
  }, []);

  const focusRef = useRef({ communityFocus, kinds, hovered, selected, introDone, reduced });
  focusRef.current = { communityFocus, kinds, hovered, selected, introDone, reduced };

  const laidOut = useRef<number | null>(null);

  useFrame((_, delta) => {
    const { communityFocus: focusComm, kinds: kindOn, hovered: hov, selected: sel, introDone: done, reduced: calm } =
      focusRef.current;
    if (laidOut.current !== focusComm) {
      laidOut.current = focusComm;
      if (focusComm == null) {
        NODES.forEach((n, i) => {
          const p = POSITIONS[n.id] ?? [0, 0, 0];
          const live = livePositions[i];
          if (!live) return;
          live.tx = p[0];
          live.ty = placeY(n.id, p[1]);
          live.tz = p[2];
        });
      } else {
        const members: number[] = [];
        NODES.forEach((n, i) => {
          if (n.community === focusComm) members.push(i);
        });
        const cx = members.reduce((a, i) => a + (POSITIONS[NODES[i]!.id]?.[0] ?? 0), 0) / Math.max(1, members.length);
        const cz = members.reduce((a, i) => a + (POSITIONS[NODES[i]!.id]?.[2] ?? 0), 0) / Math.max(1, members.length);
        members.forEach((i, k) => {
          const ang = (k / members.length) * Math.PI * 2;
          const rad = 1.15 + (k % 5) * 0.18;
          const live = livePositions[i];
          const n = NODES[i];
          if (!live || !n) return;
          live.tx = cx * 0.25 + Math.cos(ang) * rad;
          live.ty = placeY(n.id, 0.15);
          live.tz = cz * 0.25 + Math.sin(ang) * rad;
        });
        NODES.forEach((n, i) => {
          if (n.community === focusComm) return;
          const p = POSITIONS[n.id] ?? [0, 0, 0];
          const live = livePositions[i];
          if (!live) return;
          live.tx = p[0];
          live.ty = placeY(n.id, p[1] - 0.35);
          live.tz = p[2];
        });
      }
    }

    const dt = Math.min(delta, 0.05);
    if (!calm && !done) introT.current = Math.min(1, introT.current + dt * 0.55);
    else introT.current = 1;

    const focusId = hov || sel;
    const hasFocus = Boolean(focusId);
    const posAttr = geo.getAttribute("position") as Float32BufferAttribute;
    const scaleAttr = geo.getAttribute("aScale") as Float32BufferAttribute;
    const tintAttr = geo.getAttribute("aTint") as Float32BufferAttribute;
    const posArr = posAttr.array as Float32Array;
    const scaleArr = scaleAttr.array as Float32Array;
    const tintArr = tintAttr.array as Float32Array;

    for (let i = 0; i < NODES.length; i++) {
      const n = NODES[i];
      const live = livePositions[i];
      if (!n || !live) continue;
      const hidden = kindHidden(n.kind, kindOn);
      hiddenFlags[i] = hidden ? 1 : 0;
      const dimCommunity = focusComm != null && n.community !== focusComm;
      const inRing = !hasFocus || neighborSet.has(i);
      const targetScale = hidden ? 0.001 : inRing && !dimCommunity ? 1 : 0.62;
      const hoverBoost = hov === n.id || sel === n.id ? 1.08 : 1;
      live.ts = targetScale * hoverBoost;
      live.s += (live.ts - live.s) * (1 - Math.exp(-dt * 12));
      const liftTarget = hov === n.id || sel === n.id ? 0.55 : 0;
      live.lift += (liftTarget - live.lift) * (1 - Math.exp(-dt * (calm ? 40 : 8)));
      live.x += (live.tx - live.x) * (1 - Math.exp(-dt * 8));
      live.y += (live.ty - live.y) * (1 - Math.exp(-dt * 8));
      live.z += (live.tz - live.z) * (1 - Math.exp(-dt * 8));

      let intro = 1;
      if (introT.current < 1 && n.id !== "shreeraj") {
        const delay = (n.community / 13) * 0.35;
        intro = Math.max(0, Math.min(1, (introT.current - delay) / 0.45));
      }
      const sc = (baseScale[i] ?? 0.4) * live.s * (hidden ? 0 : intro);
      const y = live.y + live.lift + (introT.current < 1 && n.id !== "shreeraj" ? (intro - 1) * 0.8 : 0);
      posArr[i * 3] = live.x;
      posArr[i * 3 + 1] = y;
      posArr[i * 3 + 2] = live.z;
      scaleArr[i] = sc;
      const dim = hidden || (hasFocus && !inRing) || dimCommunity ? 0.35 : 1;
      tintArr[i * 3] = dim;
      tintArr[i * 3 + 1] = dim;
      tintArr[i * 3 + 2] = dim;

      const shadow = shadowRef.current;
      if (shadow) {
        const localR = sc / GRAPH_SCALE;
        const sh = hidden ? 0.0001 : Math.max(0.2, localR * 1.65);
        dummy.position.set(live.x, 0.012, live.z);
        dummy.rotation.set(-Math.PI / 2, 0, 0);
        dummy.scale.set(sh, sh, 1);
        dummy.updateMatrix();
        shadow.setMatrixAt(i, dummy.matrix);
      }
    }
    posAttr.needsUpdate = true;
    scaleAttr.needsUpdate = true;
    tintAttr.needsUpdate = true;
    if (shadowRef.current) shadowRef.current.instanceMatrix.needsUpdate = true;

    const plumb = plumbGeo.getAttribute("position") as Float32BufferAttribute;
    const arr = plumb.array as Float32Array;
    arr.fill(0);
    const marks = [hov, sel].filter((id, idx, all): id is string => Boolean(id) && all.indexOf(id) === idx);
    marks.forEach((id, k) => {
      const i = indexOf(id);
      const live = livePositions[i];
      const n = NODES[i];
      if (!live || !n || hiddenFlags[i] === 1) return;
      const y = live.y + live.lift;
      const ring = localDiscRadius(n.id, DEGREE.get(n.id) || 1, n.community) * live.s;
      const o = k * 6;
      arr[o] = live.x;
      arr[o + 1] = 0.03;
      arr[o + 2] = live.z;
      arr[o + 3] = live.x;
      arr[o + 4] = Math.max(0.08, y - ring * 0.35);
      arr[o + 5] = live.z;
    });
    plumb.needsUpdate = true;
    plumbGeo.setDrawRange(0, marks.length * 2);
    plumbRef.current?.computeLineDistances();
  });

  return (
    <group>
      <points ref={pointsRef} geometry={geo} material={mat} frustumCulled={false} renderOrder={2} raycast={noRaycast} />
      <instancedMesh ref={shadowRef} args={[undefined, undefined, NODES.length]} frustumCulled={false} raycast={noRaycast}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={shadowTex} transparent opacity={1} depthWrite={false} toneMapped={false} />
      </instancedMesh>
      <lineSegments ref={plumbRef} geometry={plumbGeo} frustumCulled={false} raycast={noRaycast}>
        <lineDashedMaterial color="#7A6C58" transparent opacity={0.55} dashSize={0.12} gapSize={0.08} />
      </lineSegments>
      <HitProxies baseScale={baseScale} />
      <HoverInk />
    </group>
  );
}

function HitProxies({ baseScale }: { baseScale: number[] }) {
  const ref = useRef<InstancedMesh>(null);
  const geo = useMemo(() => new SphereGeometry(0.5, 10, 8), []);
  useFrame(() => {
    const mesh = ref.current;
    if (!mesh) return;
    for (let i = 0; i < NODES.length; i++) {
      const live = livePositions[i];
      if (!live) continue;
      const hidden = hiddenFlags[i] === 1;
      dummy.position.set(live.x, live.y + live.lift, live.z);
      const localR = ((baseScale[i] ?? 0.4) * live.s) / GRAPH_SCALE;
      dummy.scale.setScalar(hidden ? 0.0001 : localR * 2);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  const choose = (instanceId: number | undefined) => {
    if (instanceId == null) return;
    const node = NODES[instanceId];
    if (!node || hiddenFlags[instanceId] === 1) return;
    useGraphStore.getState().select(node.id);
  };

  return (
    <instancedMesh
      ref={ref}
      args={[geo, undefined, NODES.length]}
      frustumCulled={false}
      onPointerDown={(e) => {
        e.stopPropagation();
        choose(e.instanceId);
      }}
      onClick={(e) => {
        e.stopPropagation();
        choose(e.instanceId);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        const id = e.instanceId;
        if (id == null) return;
        const node = NODES[id];
        if (!node || hiddenFlags[id] === 1) return;
        document.body.style.cursor = "pointer";
        useGraphStore.getState().hover(node.id);
      }}
      onPointerOut={() => {
        document.body.style.cursor = "";
        useGraphStore.getState().hover(null);
      }}
    >
      <meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </instancedMesh>
  );
}

const RING_SEGS = 28;

function HoverInk() {
  const { camera } = useThree();
  const geo = useMemo(() => {
    const g = new BufferGeometry();
    const count = 2 * (RING_SEGS * 2 * 2 + 8);
    g.setAttribute("position", new Float32BufferAttribute(new Float32Array(count * 3), 3));
    return g;
  }, []);

  useFrame(() => {
    const hov = useGraphStore.getState().hoveredId;
    const sel = useGraphStore.getState().selectedId;
    const ids = [hov, sel].filter((id, i, all): id is string => Boolean(id) && all.indexOf(id) === i);
    camera.getWorldQuaternion(_q);
    _right.set(1, 0, 0).applyQuaternion(_q);
    _up.set(0, 1, 0).applyQuaternion(_q);
    const attr = geo.getAttribute("position") as Float32BufferAttribute;
    const arr = attr.array as Float32Array;
    arr.fill(0);
    let cursor = 0;
    const put = (x0: number, y0: number, z0: number, x1: number, y1: number, z1: number) => {
      const o = cursor * 3;
      arr[o] = x0;
      arr[o + 1] = y0;
      arr[o + 2] = z0;
      arr[o + 3] = x1;
      arr[o + 4] = y1;
      arr[o + 5] = z1;
      cursor += 2;
    };
    for (const id of ids) {
      const i = indexOf(id);
      const n = NODES[i];
      const live = livePositions[i];
      if (!n || !live || hiddenFlags[i] === 1) continue;
      const ring = localDiscRadius(n.id, DEGREE.get(n.id) || 1, n.community) * live.s;
      const cx = live.x;
      const cy = live.y + live.lift;
      const cz = live.z;
      const at = (ang: number, rad: number) => {
        const c = Math.cos(ang);
        const s = Math.sin(ang);
        return [
          cx + (_right.x * c + _up.x * s) * rad,
          cy + (_right.y * c + _up.y * s) * rad,
          cz + (_right.z * c + _up.z * s) * rad,
        ] as const;
      };
      for (const rad of [ring * 0.72, ring * 1.16]) {
        for (let s = 0; s < RING_SEGS; s++) {
          const a0 = (s / RING_SEGS) * Math.PI * 2;
          const a1 = ((s + 1) / RING_SEGS) * Math.PI * 2;
          const p0 = at(a0, rad);
          const p1 = at(a1, rad);
          put(p0[0], p0[1], p0[2], p1[0], p1[1], p1[2]);
        }
      }
      for (let k = 0; k < 4; k++) {
        const a = (k / 4) * Math.PI * 2;
        const p0 = at(a, ring * 1.22);
        const p1 = at(a, ring * 1.48);
        put(p0[0], p0[1], p0[2], p1[0], p1[1], p1[2]);
      }
    }
    attr.needsUpdate = true;
    geo.setDrawRange(0, cursor);
  });

  return (
    <lineSegments geometry={geo} frustumCulled={false} raycast={noRaycast} renderOrder={3}>
      <lineBasicMaterial color="#2A241E" transparent opacity={0.8} depthWrite={false} />
    </lineSegments>
  );
}
