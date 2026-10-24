import {
  BoxGeometry,
  BufferGeometry,
  ConeGeometry,
  CylinderGeometry,
  SphereGeometry,
  TorusGeometry,
} from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

/**
 * One unique instrument per node.
 * Same kind shares a family of parts, but the count, offset, angle and thickness
 * are seeded from the node id so no two nodes look the same.
 */

function hash(id: string): number {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function box(w: number, h: number, d: number, x: number, y: number, z: number, rz = 0, rx = 0) {
  const g = new BoxGeometry(w, h, d);
  if (rx) g.rotateX(rx);
  if (rz) g.rotateZ(rz);
  g.translate(x, y, z);
  return g;
}

function cyl(rt: number, rb: number, h: number, x: number, y: number, z: number, rx = 0, rz = 0) {
  const g = new CylinderGeometry(rt, rb, h, 14);
  if (rx) g.rotateX(rx);
  if (rz) g.rotateZ(rz);
  g.translate(x, y, z);
  return g;
}

function ball(r: number, x: number, y: number, z: number) {
  const g = new SphereGeometry(r, 12, 10);
  g.translate(x, y, z);
  return g;
}

function ring(r: number, tube: number, x: number, y: number, z: number, rx = Math.PI / 2) {
  const g = new TorusGeometry(r, tube, 6, 12);
  if (rx) g.rotateX(rx);
  g.translate(x, y, z);
  return g;
}

function cone(r: number, h: number, x: number, y: number, z: number, rx = 0) {
  const g = new ConeGeometry(r, h, 10);
  if (rx) g.rotateX(rx);
  g.translate(x, y, z);
  return g;
}

function fuse(parts: BufferGeometry[]): BufferGeometry {
  const merged = mergeGeometries(parts, false);
  for (const p of parts) p.dispose();
  if (!merged) return new BoxGeometry(0.4, 0.4, 0.4);
  merged.computeVertexNormals();
  return merged;
}

function project(r: () => number): BufferGeometry {
  const n = 2 + Math.floor(r() * 3);
  const parts: BufferGeometry[] = [];
  for (let i = 0; i < n; i++) {
    const w = 0.7 + r() * 0.28;
    const d = 0.5 + r() * 0.22;
    const yaw = (r() - 0.5) * 0.4;
    parts.push(box(w, 0.055, d, (r() - 0.5) * 0.08, 0.04 + i * 0.07, (r() - 0.5) * 0.06, yaw));
  }
  if (r() > 0.4) parts.push(box(0.18 + r() * 0.1, 0.03, 0.14, 0.2, 0.04 + n * 0.07, 0.1, r()));
  return fuse(parts);
}

function compass(r: () => number): BufferGeometry {
  const spread = 0.28 + r() * 0.22;
  const len = 0.55 + r() * 0.3;
  const parts = [
    ball(0.08 + r() * 0.04, 0, len + 0.1, 0),
    cyl(0.04, 0.04, len, -spread * 0.4, len * 0.5, 0, 0, 0.3 + r() * 0.3),
    cyl(0.04, 0.04, len, spread * 0.4, len * 0.5, 0, 0, -0.3 - r() * 0.3),
    ball(0.05, -spread, 0.05, 0),
    ball(0.05, spread, 0.05, 0),
    cyl(0.14 + r() * 0.04, 0.14, 0.04, 0, 0.02, 0),
  ];
  return fuse(parts);
}

function sheet(r: () => number): BufferGeometry {
  const lines = 2 + Math.floor(r() * 3);
  const parts: BufferGeometry[] = [
    cyl(0.26 + r() * 0.06, 0.3, 0.05, 0, 0.03, 0),
    box(0.55 + r() * 0.15, 0.75 + r() * 0.15, 0.04, 0, 0.45, 0, 0, (r() - 0.5) * 0.3),
  ];
  for (let i = 0; i < lines; i++) {
    parts.push(box(0.3 + r() * 0.2, 0.012, 0.015, 0, 0.55 + i * 0.1, 0.03));
  }
  return fuse(parts);
}

function person(r: () => number): BufferGeometry {
  return fuse([
    cyl(0.26 + r() * 0.08, 0.3, 0.06, 0, 0.03, 0),
    cyl(0.1 + r() * 0.04, 0.12, 0.32 + r() * 0.1, 0, 0.26, 0),
    ball(0.14 + r() * 0.05, 0, 0.58 + r() * 0.08, 0),
    box(0.28 + r() * 0.1, 0.06, 0.08, 0, 0.36, 0, (r() - 0.5) * 0.4),
  ]);
}

function marker(r: () => number): BufferGeometry {
  return fuse([
    cyl(0.3 + r() * 0.06, 0.32, 0.06, 0, 0.03, 0),
    cone(0.16 + r() * 0.06, 0.5 + r() * 0.18, 0, 0.36, 0),
    ball(0.06, 0, 0.68 + r() * 0.08, 0),
    box(0.02, 0.18, 0.02, 0.12 + r() * 0.08, 0.46, 0),
    box(0.16 + r() * 0.08, 0.1, 0.02, 0.22, 0.52, 0, r() * 0.3),
  ]);
}

function portico(r: () => number): BufferGeometry {
  const cols = 2 + Math.floor(r() * 2);
  const parts: BufferGeometry[] = [
    box(0.9, 0.08, 0.55, 0, 0.04, 0),
    box(0.84, 0.08, 0.5, 0, 0.55, 0),
  ];
  for (let i = 0; i < cols; i++) {
    const x = -0.28 + (i / Math.max(1, cols - 1)) * 0.56;
    parts.push(cyl(0.06, 0.07, 0.42, x, 0.3, 0.1 + (r() - 0.5) * 0.1));
    if (r() > 0.5) parts.push(cyl(0.06, 0.07, 0.42, x, 0.3, -0.1));
  }
  if (r() > 0.3) parts.push(cone(0.42 + r() * 0.1, 0.22, 0, 0.72, 0));
  return fuse(parts);
}

function agent(r: () => number): BufferGeometry {
  return fuse([
    box(0.42 + r() * 0.12, 0.28, 0.34, 0, 0.2, 0),
    box(0.3 + r() * 0.1, 0.24, 0.28, 0, 0.48, 0),
    ball(0.055, -0.07, 0.5, 0.14),
    ball(0.055, 0.07, 0.5, 0.14),
    cyl(0.025, 0.025, 0.18 + r() * 0.08, 0.08, 0.7, 0),
    ball(0.05, 0.08, 0.82 + r() * 0.06, 0),
    cyl(0.05, 0.05, 0.07, -0.12, 0.04, 0),
    cyl(0.05, 0.05, 0.07, 0.12, 0.04, 0),
  ]);
}

function rose(r: () => number): BufferGeometry {
  return fuse([
    ring(0.36 + r() * 0.1, 0.04, 0, 0.07, 0),
    box(0.1, 0.05, 0.65 + r() * 0.15, 0, 0.09, 0, r() * 0.4),
    box(0.65 + r() * 0.15, 0.05, 0.1, 0, 0.09, 0, (r() - 0.5) * 0.3),
    cone(0.1, 0.22 + r() * 0.08, 0, 0.2, -0.22 - r() * 0.06),
    ball(0.06 + r() * 0.03, 0, 0.1, 0),
  ]);
}

function arrow(r: () => number): BufferGeometry {
  return fuse([
    cyl(0.22 + r() * 0.06, 0.26, 0.06, 0, 0.03, 0),
    box(0.12 + r() * 0.06, 0.12, 0.45 + r() * 0.15, 0, 0.16, -0.04),
    cone(0.18 + r() * 0.06, 0.3 + r() * 0.08, 0, 0.16, 0.32 + r() * 0.06, Math.PI / 2),
  ]);
}

function mast(r: () => number): BufferGeometry {
  const rings = 1 + Math.floor(r() * 2);
  const parts: BufferGeometry[] = [
    cyl(0.22 + r() * 0.06, 0.26, 0.06, 0, 0.03, 0),
    cyl(0.04, 0.04, 0.65 + r() * 0.18, 0, 0.4, 0),
    ball(0.06, 0, 0.78 + r() * 0.08, 0),
  ];
  for (let i = 0; i < rings; i++) {
    parts.push(ring(0.16 + i * 0.1 + r() * 0.04, 0.03, 0, 0.28 + i * 0.2, 0));
  }
  return fuse(parts);
}

function book(r: () => number): BufferGeometry {
  const open = 0.4 + r() * 0.3;
  return fuse([
    box(0.4 + r() * 0.1, 0.055, 0.55 + r() * 0.1, -0.2, 0.09, 0, open),
    box(0.4 + r() * 0.1, 0.055, 0.55 + r() * 0.1, 0.2, 0.09, 0, -open),
    cyl(0.045, 0.045, 0.58, 0, 0.07, 0, Math.PI / 2),
  ]);
}

function medal(r: () => number): BufferGeometry {
  return fuse([
    cyl(0.34 + r() * 0.08, 0.34, 0.07, 0, 0.07, 0),
    ring(0.22 + r() * 0.06, 0.04, 0, 0.12, 0),
    cone(0.12 + r() * 0.05, 0.18 + r() * 0.06, 0, 0.22, 0),
    ball(0.055, 0, 0.32 + r() * 0.05, 0),
  ]);
}

function folio(r: () => number): BufferGeometry {
  return fuse([
    box(0.7 + r() * 0.12, 0.42 + r() * 0.1, 0.18 + r() * 0.06, 0, 0.26, 0),
    box(0.6, 0.05, 0.03, 0, 0.38, 0.1),
    ring(0.12 + r() * 0.05, 0.03, 0, 0.55 + r() * 0.08, 0, 0),
    box(0.1, 0.06, 0.03, 0, 0.26, 0.11),
  ]);
}

const builders: Record<string, (r: () => number) => BufferGeometry> = {
  Project: project,
  "Skill/Tool": compass,
  "Poem/Writing": sheet,
  Person: person,
  Place: marker,
  "Program/University": portico,
  "Bot/Agent": agent,
  Theme: rose,
  "Goal/Career path": arrow,
  Channel: mast,
  Education: book,
  "Preference/Value": medal,
  Experience: folio,
};

export function geometryForNode(id: string, kind: string, stamp: boolean): BufferGeometry {
  const seed = hash(id);
  const r = rng(seed);
  const build = builders[kind] ?? folio;
  const g = build(r);
  if (stamp) g.scale(1, 0.22, 1);
  return g;
}
