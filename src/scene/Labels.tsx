import { useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { DEGREE, NODES } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";
import { hiddenFlags, nodeWorld } from "./Nodes";

const MAX_LABELS = 32;
const v = new Vector3();

export type LabelSpot = { key: string; label: string; x: number; y: number; hot: boolean };

let spots: LabelSpot[] = [];
const listeners = new Set<() => void>();

function publish(next: LabelSpot[]) {
  spots = next;
  listeners.forEach((l) => l());
}

export function LabelLayer() {
  const items = useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => spots,
    () => spots,
  );
  return (
    <div className="sn-label-layer" aria-hidden>
      {items.map((s) => (
        <span
          key={s.key}
          className={s.hot ? "sn-label is-hot" : "sn-label"}
          style={{ transform: "translate(" + s.x + "px," + s.y + "px)" }}
        >
          {s.label}
        </span>
      ))}
    </div>
  );
}

/**
 * Screen-space labels for the nearest important nodes.
 * Positions are published to the DOM layer so they do not open a second React root.
 */
export function Labels() {
  const { camera, size } = useThree();
  const mobile = useGraphStore((s) => s.mobile);
  const hovered = useGraphStore((s) => s.hoveredId);
  const selected = useGraphStore((s) => s.selectedId);
  const cap = mobile ? 14 : MAX_LABELS;
  const last = useRef("");

  const ranked = useMemo(() => {
    return NODES.map((n, i) => ({ i, deg: DEGREE.get(n.id) || 0, id: n.id })).sort((a, b) => b.deg - a.deg);
  }, []);

  useEffect(() => () => publish([]), []);

  useFrame(() => {
    const w = size.width;
    const h = size.height;
    const placed: { x: number; y: number }[] = [];
    const next: LabelSpot[] = [];
    const focus = hovered || selected;

    const consider = (index: number, force: boolean) => {
      if (hiddenFlags[index]) return;
      const n = NODES[index];
      if (!n) return;
      const p = nodeWorld(index);
      v.set(p[0], p[1] + 0.28, p[2]);
      const projected = v.clone().project(camera);
      if (!force && (projected.z < -1 || projected.z > 1)) return;
      const sx = (projected.x * 0.5 + 0.5) * w;
      const sy = (-projected.y * 0.5 + 0.5) * h;
      if (!force && (sx < -40 || sy < -20 || sx > w + 40 || sy > h + 20)) return;
      v.set(p[0], p[1], p[2]);
      const dist = camera.position.distanceTo(v);
      for (const o of placed) {
        if (Math.abs(o.x - sx) < 78 && Math.abs(o.y - sy) < 16) return;
      }
      if (!force && dist > (mobile ? 16 : 26) && (DEGREE.get(n.id) || 0) < 6) return;
      placed.push({ x: sx, y: sy });
      next.push({
        key: n.id,
        label: n.label,
        x: Math.round(sx),
        y: Math.round(sy),
        hot: n.id === focus,
      });
    };

    if (focus) {
      const i = NODES.findIndex((n) => n.id === focus);
      if (i >= 0) consider(i, true);
    }
    for (const r of ranked) {
      if (next.length >= cap) break;
      if (r.id === focus) continue;
      consider(r.i, false);
    }

    const sig = next.map((s) => s.key + s.x + "," + s.y + (s.hot ? "!" : "")).join("|");
    if (sig !== last.current) {
      last.current = sig;
      publish(next);
    }
  });

  return null;
}
