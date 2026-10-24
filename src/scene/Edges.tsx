import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Object3D,
  type InstancedMesh,
  LineSegments,
} from "three";
import { COBALT, communityColor } from "@/lib/graph/colors";
import { LINKS, NODES } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";
import { hiddenFlags, indexOf, livePositions, nodeWorld } from "./Nodes";

const ROUTE = COBALT;
const col = new Color();
const colB = new Color();

/**
 * Three line-segment batches: ink, redline dashes, and the hot or route set.
 * Positions update in place. No NaN breaks, no per-edge objects.
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

  const inkGeo = useMemo(() => new BufferGeometry(), []);
  const dashGeo = useMemo(() => new BufferGeometry(), []);
  const hotGeo = useMemo(() => new BufferGeometry(), []);
  const inkPos = useMemo(() => new Float32Array(LINKS.length * 6), []);
  const inkCol = useMemo(() => new Float32Array(LINKS.length * 6), []);
  const dashPos = useMemo(() => new Float32Array(LINKS.length * 6), []);
  const dashCol = useMemo(() => new Float32Array(LINKS.length * 6), []);
  const hotPos = useMemo(() => new Float32Array(LINKS.length * 6), []);

  useLayoutEffect(() => {
    inkGeo.setAttribute("position", new Float32BufferAttribute(inkPos, 3));
    inkGeo.setAttribute("color", new Float32BufferAttribute(inkCol, 3));
    dashGeo.setAttribute("position", new Float32BufferAttribute(dashPos, 3));
    dashGeo.setAttribute("color", new Float32BufferAttribute(dashCol, 3));
    hotGeo.setAttribute("position", new Float32BufferAttribute(hotPos, 3));
    inkGeo.setDrawRange(0, 0);
    dashGeo.setDrawRange(0, 0);
    hotGeo.setDrawRange(0, 0);
  }, [inkGeo, dashGeo, hotGeo, inkPos, inkCol, dashPos, dashCol, hotPos]);

  const dashRef = useRef<LineSegments>(null);

  useFrame(() => {
    let ni = 0;
    let nd = 0;
    let nh = 0;
    const write = (buf: Float32Array, cursor: number, ax: number, ay: number, az: number, bx: number, by: number, bz: number) => {
      const o = cursor * 6;
      buf[o] = ax;
      buf[o + 1] = ay;
      buf[o + 2] = az;
      buf[o + 3] = bx;
      buf[o + 4] = by;
      buf[o + 5] = bz;
      return cursor + 1;
    };
    const writeInk = (
      cursor: number,
      ax: number,
      ay: number,
      az: number,
      bx: number,
      by: number,
      bz: number,
      ca: Color,
      cb: Color,
    ) => {
      const o = cursor * 6;
      inkPos[o] = ax;
      inkPos[o + 1] = ay;
      inkPos[o + 2] = az;
      inkPos[o + 3] = bx;
      inkPos[o + 4] = by;
      inkPos[o + 5] = bz;
      inkCol[o] = ca.r;
      inkCol[o + 1] = ca.g;
      inkCol[o + 2] = ca.b;
      inkCol[o + 3] = cb.r;
      inkCol[o + 4] = cb.g;
      inkCol[o + 5] = cb.b;
      return cursor + 1;
    };
    const writeDash = (
      cursor: number,
      ax: number,
      ay: number,
      az: number,
      bx: number,
      by: number,
      bz: number,
      ca: Color,
      cb: Color,
    ) => {
      const o = cursor * 6;
      dashPos[o] = ax;
      dashPos[o + 1] = ay;
      dashPos[o + 2] = az;
      dashPos[o + 3] = bx;
      dashPos[o + 4] = by;
      dashPos[o + 5] = bz;
      dashCol[o] = ca.r;
      dashCol[o + 1] = ca.g;
      dashCol[o + 2] = ca.b;
      dashCol[o + 3] = cb.r;
      dashCol[o + 4] = cb.g;
      dashCol[o + 5] = cb.b;
      return cursor + 1;
    };

    for (let i = 0; i < LINKS.length; i++) {
      const l = LINKS[i];
      if (!l) continue;
      const inferred = l.confidence === "INFERRED";
      if (inferred && !showInferred) continue;
      if (!inferred && !showExtracted) continue;
      if (inferred && (l.confidence_score ?? 1) < minConfidence) continue;
      const ia = indexOf(l.source);
      const ib = indexOf(l.target);
      if (ia < 0 || ib < 0) continue;
      if (hiddenFlags[ia] || hiddenFlags[ib]) continue;
      const pa = livePositions[ia];
      const pb = livePositions[ib];
      if (!pa || !pb) continue;
      const ax = pa.x;
      const ay = pa.y + pa.lift + 0.03;
      const az = pa.z;
      const bx = pb.x;
      const by = pb.y + pb.lift + 0.03;
      const bz = pb.z;
      const onPath = pathSet.has(`${l.source}|${l.target}`);
      const isHot = Boolean(focus) && (l.source === focus || l.target === focus);
      const dim = focus && !isHot && !onPath ? 0.38 : 1;
      const aNode = NODES[ia];
      const bNode = NODES[ib];
      const himA = l.source === "shreeraj";
      const himB = l.target === "shreeraj";
      col.set(himA ? COBALT : communityColor(aNode?.community ?? 0)).multiplyScalar(dim);
      colB.set(himB ? COBALT : communityColor(bNode?.community ?? 0)).multiplyScalar(dim);
      if (onPath) {
        nh = write(hotPos, nh, ax, ay, az, bx, by, bz);
      } else if (isHot) {
        nh = write(hotPos, nh, ax, ay, az, bx, by, bz);
      } else if (inferred) {
        nd = writeDash(nd, ax, ay, az, bx, by, bz, col, colB);
      } else {
        ni = writeInk(ni, ax, ay, az, bx, by, bz, col, colB);
      }
    }

    const commit = (geo: BufferGeometry, count: number) => {
      const attr = geo.getAttribute("position") as Float32BufferAttribute;
      attr.needsUpdate = true;
      geo.setDrawRange(0, count * 2);
      geo.computeBoundingSphere();
    };
    commit(inkGeo, ni);
    const inkColor = inkGeo.getAttribute("color") as Float32BufferAttribute;
    if (inkColor) inkColor.needsUpdate = true;
    commit(dashGeo, nd);
    const dashColor = dashGeo.getAttribute("color") as Float32BufferAttribute;
    if (dashColor) dashColor.needsUpdate = true;
    commit(hotGeo, nh);
    dashRef.current?.computeLineDistances();
  });

  return (
    <group>
      <lineSegments geometry={inkGeo} frustumCulled={false}>
        <lineBasicMaterial vertexColors transparent opacity={0.72} />
      </lineSegments>
      <lineSegments ref={dashRef} geometry={dashGeo} frustumCulled={false}>
        <lineDashedMaterial vertexColors transparent opacity={0.8} dashSize={0.14} gapSize={0.1} />
      </lineSegments>
      <lineSegments geometry={hotGeo} frustumCulled={false}>
        <lineBasicMaterial color={focus && pathNodes ? ROUTE : "#2A241E"} transparent opacity={0.95} />
      </lineSegments>
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
    <instancedMesh ref={ref} args={[undefined, undefined, edges.length]} frustumCulled={false}>
      <sphereGeometry args={[0.03, 8, 6]} />
      <meshBasicMaterial color={COBALT} />
    </instancedMesh>
  );
}

