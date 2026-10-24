import { useMemo } from "react";
import { Line } from "@react-three/drei";
import { HYPEREDGES, POSITIONS } from "@/lib/graph/model";
import { GRAPHITE } from "@/lib/graph/colors";
import { livePositions, indexOf } from "./Nodes";
import { useGraphStore } from "@/state/store";

const HULL_COLORS = [GRAPHITE, GRAPHITE, GRAPHITE];

/** Dotted loop around each hyperedge, drawn just above the sheet. */
export function Hulls() {
  const tick = useGraphStore((s) => s.motionTick);
  const loops = useMemo(() => {
    return HYPEREDGES.map((h) => {
      const pts: [number, number, number][] = [];
      for (const id of h.nodes) {
        const i = indexOf(id);
        const live = i >= 0 ? livePositions[i] : undefined;
        const p = live ? [live.x, live.y, live.z] : (POSITIONS[id] ?? [0, 0, 0]);
        pts.push([p[0], 0.04, p[2]]);
      }
      if (pts.length < 3) return null;
      const c = pts.reduce(
        (a, p) => [a[0] + p[0], 0, a[2] + p[2]] as [number, number, number],
        [0, 0, 0] as [number, number, number],
      );
      c[0] /= pts.length;
      c[2] /= pts.length;
      const expanded = pts
        .map((p) => {
          const dx = p[0] - c[0];
          const dz = p[2] - c[2];
          const len = Math.hypot(dx, dz) || 1;
          return [p[0] + (dx / len) * 0.55, 0.05, p[2] + (dz / len) * 0.55] as [number, number, number];
        })
        .sort((a, b) => Math.atan2(a[2] - c[2], a[0] - c[0]) - Math.atan2(b[2] - c[2], b[0] - c[0]));
      expanded.push(expanded[0]!);
      return { id: h.id, label: h.label, points: expanded, center: c };
    }).filter((x): x is NonNullable<typeof x> => Boolean(x));
  }, [tick]);

  return (
    <group>
      {loops.map((loop, i) => (
        <Line
          key={loop.id}
          points={loop.points}
          color={HULL_COLORS[i % HULL_COLORS.length]}
          lineWidth={1}
          dashed
          dashSize={0.12}
          gapSize={0.1}
          transparent
          opacity={0.55}
        />
      ))}
    </group>
  );
}
