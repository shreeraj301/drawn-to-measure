import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Color,
  type InstancedMesh,
  Object3D,
  SphereGeometry,
} from "three";
import { communityColor, nodeRadius } from "@/lib/graph/colors";
import { DEGREE, LINKS, MAX_DEGREE, NODES, POSITIONS } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";
import { geometryFor } from "./marks";

const KINDS = [
  "Project",
  "Skill/Tool",
  "Poem/Writing",
  "Person",
  "Place",
  "Program/University",
  "Bot/Agent",
  "Theme",
  "Goal/Career path",
  "Channel",
  "Education",
  "Preference/Value",
  "Experience",
] as const;

function yawOf(id: string): number {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 628) / 100;
}

const dummy = new Object3D();
const colorScratch = new Color();

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

/** Which node indexes are hidden by the current filters. Written each frame by Nodes. */
export const hiddenFlags = new Uint8Array(NODES.length);

function kindHidden(kind: string, kinds: Record<string, boolean>): boolean {
  return kinds[kind] === false;
}

export function Nodes() {
  const groups = useMemo(() => {
    const map = new Map<string, number[]>();
    NODES.forEach((n, i) => {
      const k = KINDS.includes(n.kind as (typeof KINDS)[number]) ? n.kind : "Experience";
      const list = map.get(k) ?? [];
      list.push(i);
      map.set(k, list);
    });
    return map;
  }, []);

  const meshes = useRef<Map<string, InstancedMesh>>(new Map());
  const shadowRef = useRef<InstancedMesh>(null);
  const yaws = useMemo(() => NODES.map((n) => yawOf(n.id)), []);
  const hovered = useGraphStore((s) => s.hoveredId);
  const selected = useGraphStore((s) => s.selectedId);
  const communityFocus = useGraphStore((s) => s.communityFocus);
  const kinds = useGraphStore((s) => s.kinds);
  const introDone = useGraphStore((s) => s.introDone);
  const reduced = useGraphStore((s) => s.reducedMotion);

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

  const geos = useMemo(() => {
    const g = new Map<string, ReturnType<typeof geometryFor>>();
    for (const k of groups.keys()) g.set(k, geometryFor(k));
    return g;
  }, [groups]);

  useEffect(() => {
    return () => {
      for (const g of geos.values()) g.dispose();
    };
  }, [geos]);

  // Community spring targets.
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
    const cx = members.reduce((a, i) => a + (POSITIONS[NODES[i].id]?.[0] ?? 0), 0) / Math.max(1, members.length);
    const cz = members.reduce((a, i) => a + (POSITIONS[NODES[i].id]?.[2] ?? 0), 0) / Math.max(1, members.length);
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

  const colors = useMemo(() => NODES.map((n) => communityColor(n.community)), []);
  const baseScale = useMemo(
    () => NODES.map((n) => nodeRadius(DEGREE.get(n.id) || 1, MAX_DEGREE) / 0.18),
    [],
  );

  const introT = useRef(reduced ? 1 : 0);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);
    if (!reduced && !introDone) introT.current = Math.min(1, introT.current + dt * 0.55);
    else introT.current = 1;

    const focusId = hovered || selected;
    const hasFocus = Boolean(focusId);
    const kSpring = communityFocus == null ? 10 : 7;

    for (let i = 0; i < NODES.length; i++) {
      const n = NODES[i];
      const live = livePositions[i];
      if (!n || !live) continue;
      const hidden = kindHidden(n.kind, kinds);
      hiddenFlags[i] = hidden ? 1 : 0;

      const dimCommunity = communityFocus != null && n.community !== communityFocus;
      const inRing = !hasFocus || neighborSet.has(i);
      const targetScale = hidden ? 0.001 : inRing && !dimCommunity ? (neighborSet.has(i) && hasFocus ? 1.12 : 1) : 0.72;
      const hoverBoost = hovered === n.id ? 1.15 : selected === n.id ? 1.08 : 1;
      live.ts = targetScale * hoverBoost;
      live.s += (live.ts - live.s) * (1 - Math.exp(-dt * 14));

      const liftTarget = hovered === n.id || selected === n.id ? 0.22 : 0;
      live.lift += (liftTarget - live.lift) * (1 - Math.exp(-dt * 10));

      live.x += (live.tx - live.x) * (1 - Math.exp(-dt * kSpring));
      live.y += (live.ty - live.y) * (1 - Math.exp(-dt * kSpring));
      live.z += (live.tz - live.z) * (1 - Math.exp(-dt * kSpring));
    }

    for (const [kind, indexes] of groups) {
      const mesh = meshes.current.get(kind);
      if (!mesh) continue;
      indexes.forEach((nodeIndex, instance) => {
        const n = NODES[nodeIndex];
        const live = livePositions[nodeIndex];
        if (!n || !live) return;
        const hidden = hiddenFlags[nodeIndex] === 1;
        const hasFocus = Boolean(hovered || selected);
        const inRing = !hasFocus || neighborSet.has(nodeIndex);
        const dimCommunity = communityFocus != null && n.community !== communityFocus;
        let intro = 1;
        if (introT.current < 1 && n.id !== "shreeraj") {
          const delay = (n.community / 13) * 0.45;
          intro = Math.max(0, Math.min(1, (introT.current - delay) / 0.4));
        }
        const sc = baseScale[nodeIndex] * live.s * (hidden ? 0 : intro);
        const yLift =
          introT.current < 1 && n.id !== "shreeraj"
            ? (intro - 1) * 1.4
            : 0;
        dummy.position.set(live.x, live.y + live.lift + yLift + 0.02, live.z);
        dummy.scale.setScalar(Math.max(0.0001, sc * 1.05));
        dummy.rotation.set(0, yaws[nodeIndex] ?? 0, 0);
        dummy.updateMatrix();
        mesh.setMatrixAt(instance, dummy.matrix);
        const dim = hidden || (hasFocus && !inRing) || dimCommunity ? 0.28 : 1;
        mesh.setColorAt(instance, colorScratch.set(colors[nodeIndex]).multiplyScalar(0.55 + 0.45 * dim));
      });
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }

    const shadow = shadowRef.current;
    if (shadow) {
      for (let i = 0; i < NODES.length; i++) {
        const live = livePositions[i];
        if (!live) continue;
        const hidden = hiddenFlags[i] === 1;
        const sc = (baseScale[i] ?? 1) * live.s;
        dummy.position.set(live.x, 0.012, live.z);
        dummy.rotation.set(-Math.PI / 2, 0, 0);
        const s = hidden ? 0.0001 : Math.max(0.2, sc * 0.9);
        dummy.scale.set(s, s, s);
        dummy.updateMatrix();
        shadow.setMatrixAt(i, dummy.matrix);
      }
      shadow.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group>
      {[...groups.entries()].map(([kind, indexes]) => (
        <instancedMesh
          key={kind}
          ref={(el) => {
            if (el) meshes.current.set(kind, el);
          }}
          args={[geos.get(kind), undefined, indexes.length]}
          frustumCulled={false}
          castShadow
        >
          <meshStandardMaterial roughness={0.62} metalness={0.08} />
        </instancedMesh>
      ))}
      <instancedMesh
        ref={shadowRef}
        args={[undefined, undefined, NODES.length]}
        frustumCulled={false}
      >
        <circleGeometry args={[0.55, 16]} />
        <meshBasicMaterial color="#14191A" transparent opacity={0.14} depthWrite={false} />
      </instancedMesh>
      <HitProxies />
    </group>
  );
}

/** Invisible pick spheres so hover stays accurate when the visible mesh is thin. */
function HitProxies() {
  const ref = useRef<InstancedMesh>(null);
  const geo = useMemo(() => new SphereGeometry(0.34, 8, 6), []);
  useLayoutEffect(() => {
    const mesh = ref.current;
    if (!mesh) return;
    NODES.forEach((n, i) => {
      const p = POSITIONS[n.id] ?? [0, 0, 0];
      dummy.position.set(p[0], p[1] + 0.05, p[2]);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  }, []);

  useFrame(() => {
    const mesh = ref.current;
    if (!mesh) return;
    for (let i = 0; i < NODES.length; i++) {
      const live = livePositions[i];
      if (!live) continue;
      const hidden = hiddenFlags[i] === 1;
      dummy.position.set(live.x, live.y + live.lift + 0.05, live.z);
      dummy.scale.setScalar(hidden ? 0.0001 : 1);
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

