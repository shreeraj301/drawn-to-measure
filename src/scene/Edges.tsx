import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  DynamicDrawUsage,
  Float32BufferAttribute,
  MathUtils,
  Object3D,
  Vector3,
  type InstancedMesh,
} from "three";
import { COBALT, INK, communityColor } from "@/lib/graph/colors";
import { LINKS, NODES } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";
import { GRAPH_SCALE } from "./scale";
import { hiddenFlags, indexOf, livePositions, nodeWorld } from "./Nodes";

const ROUTE = COBALT;
const col = new Color();
const colB = new Color();
const _dir = new Vector3();
const _side = new Vector3();
const _cam = new Vector3();
const _up = new Vector3(0, 1, 0);

const SEGS = 5;
const SPANS_MAX = 3;
const VERTS_PER_EDGE = SPANS_MAX * (SEGS + 1) * 2;
const IDX_PER_EDGE = SPANS_MAX * SEGS * 6;

function noRaycast() {}

/**
 * Tapered ribbons in chapter colour. Extracted links are solid, inferred links
 * are three dashes. Width is about 2px at the current camera.
 */
export function Edges() {
  const showExtracted = useGraphStore((s) => s.showExtracted);
  const showInferred = useGraphStore((s) => s.showInferred);
  const minConfidence = useGraphStore((s) => s.minConfidence);
  const hovered = useGraphStore((s) => s.hoveredId);
  const selected = useGraphStore((s) => s.selectedId);
  const pathNodes = useGraphStore((s) => s.pathNodes);
  const focus = hovered || selected;

  const pathSet = useMemo(() => {
    const s = new Set<string>();
    if (!pathNodes) return s;
    for (let i = 0; i < pathNodes.length - 1; i++) {
      const a = pathNodes[i];
      const b = pathNodes[i + 1];
      if (!a || !b) continue;
      s.add(`${a}|${b}`);
      s.add(`${b}|${a}`);
    }
    return s;
  }, [pathNodes]);

  const geo = useMemo(() => {
    const g = new BufferGeometry();
    const pos = new Float32BufferAttribute(new Float32Array(LINKS.length * VERTS_PER_EDGE * 3), 3);
    const color = new Float32BufferAttribute(new Float32Array(LINKS.length * VERTS_PER_EDGE * 3), 3);
    pos.setUsage(DynamicDrawUsage);
    color.setUsage(DynamicDrawUsage);
    g.setAttribute("position", pos);
    g.setAttribute("color", color);
    const idx = new BufferAttribute(new Uint32Array(LINKS.length * IDX_PER_EDGE), 1);
    idx.setUsage(DynamicDrawUsage);
    g.setIndex(idx);
    g.setDrawRange(0, 0);
    return g;
  }, []);

  const filter = useRef({ showExtracted, showInferred, minConfidence, focus, pathSet });
  filter.current = { showExtracted, showInferred, minConfidence, focus, pathSet };

  useFrame(({ camera, size }) => {
    const { showExtracted: ex, showInferred: inf, minConfidence: minC, focus: f, pathSet: paths } = filter.current;
    const posAttr = geo.getAttribute("position") as Float32BufferAttribute;
    const colAttr = geo.getAttribute("color") as Float32BufferAttribute;
    const idxAttr = geo.getIndex() as BufferAttribute;
    const pos = posAttr.array as Float32Array;
    const cols = colAttr.array as Float32Array;
    const idx = idxAttr.array as Uint32Array;
    let vi = 0;
    let ii = 0;

    const pushSpan = (
      ax: number,
      ay: number,
      az: number,
      bx: number,
      by: number,
      bz: number,
      t0: number,
      t1: number,
      ca: Color,
      cb: Color,
      half: number,
      bow: number,
    ) => {
      const start = vi;
      for (let s = 0; s <= SEGS; s++) {
        const u = t0 + (t1 - t0) * (s / SEGS);
        const taper = 0.35 + 0.65 * Math.sin(Math.PI * u);
        const hw = half * taper;
        const x = ax + (bx - ax) * u;
        const y = ay + (by - ay) * u + Math.sin(Math.PI * u) * bow;
        const z = az + (bz - az) * u;
        const r = ca.r + (cb.r - ca.r) * u;
        const g = ca.g + (cb.g - ca.g) * u;
        const b = ca.b + (cb.b - ca.b) * u;
        const o = vi * 3;
        pos[o] = x + _side.x * hw;
        pos[o + 1] = y + _side.y * hw;
        pos[o + 2] = z + _side.z * hw;
        cols[o] = r;
        cols[o + 1] = g;
        cols[o + 2] = b;
        pos[o + 3] = x - _side.x * hw;
        pos[o + 4] = y - _side.y * hw;
        pos[o + 5] = z - _side.z * hw;
        cols[o + 3] = r;
        cols[o + 4] = g;
        cols[o + 5] = b;
        vi += 2;
      }
      for (let s = 0; s < SEGS; s++) {
        const a = start + s * 2;
        idx[ii++] = a;
        idx[ii++] = a + 1;
        idx[ii++] = a + 2;
        idx[ii++] = a + 1;
        idx[ii++] = a + 3;
        idx[ii++] = a + 2;
      }
    };

    for (let i = 0; i < LINKS.length; i++) {
      const l = LINKS[i];
      if (!l) continue;
      const inferred = l.confidence === "INFERRED";
      if (inferred && !inf) continue;
      if (!inferred && !ex) continue;
      if (inferred && (l.confidence_score ?? 1) < minC) continue;
      const ia = indexOf(l.source);
      const ib = indexOf(l.target);
      if (ia < 0 || ib < 0) continue;
      if (hiddenFlags[ia] || hiddenFlags[ib]) continue;
      const pa = livePositions[ia];
      const pb = livePositions[ib];
      if (!pa || !pb) continue;
      const ax = pa.x;
      const ay = pa.y + pa.lift;
      const az = pa.z;
      const bx = pb.x;
      const by = pb.y + pb.lift;
      const bz = pb.z;
      _dir.set(bx - ax, by - ay, bz - az);
      if (_dir.lengthSq() < 1e-6) continue;
      const wx = ((ax + bx) * 0.5) * GRAPH_SCALE;
      const wy = ((ay + by) * 0.5) * GRAPH_SCALE;
      const wz = ((az + bz) * 0.5) * GRAPH_SCALE;
      const dist = Math.hypot(camera.position.x - wx, camera.position.y - wy, camera.position.z - wz);
      const worldPerPx = (2 * dist * Math.tan(MathUtils.degToRad(19))) / Math.max(1, size.height);
      const onPath = paths.has(`${l.source}|${l.target}`);
      const isHot = Boolean(f) && (l.source === f || l.target === f);
      const px = onPath || isHot ? 2.6 : 2;
      const half = ((worldPerPx * px) / GRAPH_SCALE) * 0.5;
      camera.getWorldDirection(_cam);
      _side.crossVectors(_dir, _cam);
      if (_side.lengthSq() < 1e-8) _side.crossVectors(_dir, _up);
      _side.normalize();

      const dim = f && !isHot && !onPath ? 0.5 : 1;
      const aNode = NODES[ia];
      const bNode = NODES[ib];
      if (onPath || isHot) {
        col.set(onPath ? ROUTE : INK);
        colB.copy(col);
      } else {
        col.set(l.source === "shreeraj" ? COBALT : communityColor(aNode?.community ?? 0)).multiplyScalar(dim);
        colB.set(l.target === "shreeraj" ? COBALT : communityColor(bNode?.community ?? 0)).multiplyScalar(dim);
      }
      const bow = 0.05 + (i % 5) * 0.02;
      if (inferred && !isHot && !onPath) {
        pushSpan(ax, ay, az, bx, by, bz, 0, 0.28, col, colB, half, bow);
        pushSpan(ax, ay, az, bx, by, bz, 0.4, 0.62, col, colB, half, bow);
        pushSpan(ax, ay, az, bx, by, bz, 0.74, 1, col, colB, half, bow);
      } else {
        pushSpan(ax, ay, az, bx, by, bz, 0, 1, col, colB, half, bow);
      }
    }

    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
    idxAttr.needsUpdate = true;
    geo.setDrawRange(0, ii);
  });

  return (
    <group>
      <mesh geometry={geo} frustumCulled={false} raycast={noRaycast} renderOrder={1}>
        <meshBasicMaterial vertexColors transparent opacity={0.55} depthWrite={false} toneMapped={false} />
      </mesh>
      {selected ? <Travelers nodeId={selected} /> : null}
    </group>
  );
}

const dummy = new Object3D();

function Travelers({ nodeId }: { nodeId: string }) {
  const edges = useMemo(() => {
    const list: { a: number; b: number }[] = [];
    for (const l of LINKS) {
      if (l.source === nodeId) list.push({ a: indexOf(l.source), b: indexOf(l.target) });
      else if (l.target === nodeId) list.push({ a: indexOf(l.target), b: indexOf(l.source) });
    }
    return list.slice(0, 16);
  }, [nodeId]);
  const ref = useRef<InstancedMesh>(null);

  useFrame(({ clock }) => {
    const mesh = ref.current;
    if (!mesh) return;
    const t = clock.elapsedTime;
    edges.forEach((e, i) => {
      const pa = nodeWorld(e.a);
      const pb = nodeWorld(e.b);
      const u = (t * 0.15 + i * 0.11) % 1;
      dummy.position.set(
        pa[0] + (pb[0] - pa[0]) * u,
        pa[1] + (pb[1] - pa[1]) * u + 0.05,
        pa[2] + (pb[2] - pa[2]) * u,
      );
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  });

  if (edges.length === 0) return null;
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, edges.length]} frustumCulled={false} raycast={noRaycast}>
      <sphereGeometry args={[0.045, 8, 6]} />
      <meshBasicMaterial color={COBALT} />
    </instancedMesh>
  );
}
