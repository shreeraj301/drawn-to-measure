import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  type InstancedMesh,
  Object3D,
  ShaderMaterial,
  SphereGeometry,
  BufferGeometry,
  Float32BufferAttribute,
  Points,
  LineSegments,
} from "three";
import { DEGREE, LINKS, NODES, POSITIONS } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";
import { nodeAtlas } from "./atlas";

const dummy = new Object3D();

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

export const livePositions: Live[] = NODES.map((n) => {
  const p = POSITIONS[n.id] ?? [0, 0, 0];
  return { x: p[0], y: p[1], z: p[2], tx: p[0], ty: p[1], tz: p[2], s: 1, ts: 1, lift: 0 };
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

const maxOther = Math.max(1, ...NODES.filter((n) => n.id !== "shreeraj").map((n) => DEGREE.get(n.id) || 1));

export function discRadius(id: string, degree: number): number {
  if (id === "shreeraj") return 1.15;
  const t = Math.sqrt(degree / maxOther);
  return Math.min(0.72, 0.2 + t * 0.48);
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

export function Nodes() {
  const pointsRef = useRef<Points>(null);
  const shadowRef = useRef<InstancedMesh>(null);
  const plumbRef = useRef<LineSegments>(null);
  const atlas = useMemo(() => nodeAtlas(), []);
  const geo = useMemo(() => {
    const g = new BufferGeometry();
    const pos = new Float32Array(NODES.length * 3);
    const uv = atlas.uv;
    const scale = new Float32Array(NODES.length);
    const tint = new Float32Array(NODES.length * 3);
    NODES.forEach((n, i) => {
      const p = POSITIONS[n.id] ?? [0, 0, 0];
      pos[i * 3] = p[0];
      pos[i * 3 + 1] = p[1];
      pos[i * 3 + 2] = p[2];
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
    () => NODES.map((n) => discRadius(n.id, DEGREE.get(n.id) || 1) * 2.15),
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
    g.setAttribute("position", new Float32BufferAttribute(new Float32Array(NODES.length * 6), 3));
    return g;
  }, []);

  useLayoutEffect(() => {
    if (communityFocus == null) {
      NODES.forEach((n, i) => {
        const p = POSITIONS[n.id] ?? [0, 0, 0];
        const live = livePositions[i];
        if (!live) return;
        live.tx = p[0];
        live.ty = p[1];
        live.tz = p[2];
      });
      return;
    }
    const members: number[] = [];
    NODES.forEach((n, i) => {
      if (n.community === communityFocus) members.push(i);
    });
    const cx = members.reduce((a, i) => a + (POSITIONS[NODES[i]!.id]?.[0] ?? 0), 0) / Math.max(1, members.length);
    const cz = members.reduce((a, i) => a + (POSITIONS[NODES[i]!.id]?.[2] ?? 0), 0) / Math.max(1, members.length);
    members.forEach((i, k) => {
      const ang = (k / members.length) * Math.PI * 2;
      const rad = 1.15 + (k % 5) * 0.18;
      const live = livePositions[i];
      if (!live) return;
      live.tx = cx * 0.25 + Math.cos(ang) * rad;
      live.ty = 0.15;
      live.tz = cz * 0.25 + Math.sin(ang) * rad;
    });
    NODES.forEach((n, i) => {
      if (n.community === communityFocus) return;
      const p = POSITIONS[n.id] ?? [0, 0, 0];
      const live = livePositions[i];
      if (!live) return;
      live.tx = p[0];
      live.ty = p[1] - 0.35;
      live.tz = p[2];
    });
  }, [communityFocus]);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);
    if (!reduced && !introDone) introT.current = Math.min(1, introT.current + dt * 0.55);
    else introT.current = 1;

    const focusId = hovered || selected;
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
      const hidden = kindHidden(n.kind, kinds);
      hiddenFlags[i] = hidden ? 1 : 0;
      const dimCommunity = communityFocus != null && n.community !== communityFocus;
      const inRing = !hasFocus || neighborSet.has(i);
      const targetScale = hidden ? 0.001 : inRing && !dimCommunity ? 1 : 0.62;
      const hoverBoost = hovered === n.id || selected === n.id ? 1.08 : 1;
      live.ts = targetScale * hoverBoost;
      live.s += (live.ts - live.s) * (1 - Math.exp(-dt * 12));
      const liftTarget = hovered === n.id || selected === n.id ? 0.55 : 0;
      live.lift += (liftTarget - live.lift) * (1 - Math.exp(-dt * (reduced ? 40 : 8)));
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
        const sh = hidden ? 0.0001 : Math.max(0.15, sc * 0.85 * (1 + live.lift));
        dummy.position.set(live.x, 0.02, live.z);
        dummy.rotation.set(-Math.PI / 2, 0, 0);
        dummy.scale.set(sh, sh, 1);
        dummy.updateMatrix();
        shadow.setMatrixAt(i, dummy.matrix);
      }

      const o = i * 6;
      const plumb = plumbGeo.getAttribute("position") as Float32BufferAttribute;
      const arr = plumb.array as Float32Array;
      arr[o] = live.x;
      arr[o + 1] = 0.03;
      arr[o + 2] = live.z;
      arr[o + 3] = live.x;
      arr[o + 4] = Math.max(0.05, y - sc * 0.35);
      arr[o + 5] = live.z;
    }
    posAttr.needsUpdate = true;
    scaleAttr.needsUpdate = true;
    tintAttr.needsUpdate = true;
    if (shadowRef.current) shadowRef.current.instanceMatrix.needsUpdate = true;
    const plumb = plumbGeo.getAttribute("position") as Float32BufferAttribute;
    plumb.needsUpdate = true;
    plumbRef.current?.computeLineDistances();
  });

  return (
    <group>
      <points ref={pointsRef} geometry={geo} material={mat} frustumCulled={false} renderOrder={2} />
      <instancedMesh ref={shadowRef} args={[undefined, undefined, NODES.length]} frustumCulled={false}>
        <circleGeometry args={[0.55, 20]} />
        <meshBasicMaterial color="#3c2c1c" transparent opacity={0.22} depthWrite={false} />
      </instancedMesh>
      <lineSegments ref={plumbRef} geometry={plumbGeo} frustumCulled={false}>
        <lineDashedMaterial color="#7A6C58" transparent opacity={0.45} dashSize={0.12} gapSize={0.08} />
      </lineSegments>
      <HitProxies baseScale={baseScale} />
    </group>
  );
}

function HitProxies({ baseScale }: { baseScale: number[] }) {
  const ref = useRef<InstancedMesh>(null);
  const geo = useMemo(() => new SphereGeometry(0.5, 8, 6), []);
  useFrame(() => {
    const mesh = ref.current;
    if (!mesh) return;
    for (let i = 0; i < NODES.length; i++) {
      const live = livePositions[i];
      if (!live) continue;
      const hidden = hiddenFlags[i] === 1;
      dummy.position.set(live.x, live.y + live.lift, live.z);
      const s = hidden ? 0.0001 : (baseScale[i] ?? 0.4) * live.s * 0.55;
      dummy.scale.setScalar(s);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh
      ref={ref}
      args={[geo, undefined, NODES.length]}
      frustumCulled={false}
      onClick={(e) => {
        e.stopPropagation();
        const id = e.instanceId;
        if (id == null) return;
        const node = NODES[id];
        if (!node || hiddenFlags[id] === 1) return;
        useGraphStore.getState().select(node.id);
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
