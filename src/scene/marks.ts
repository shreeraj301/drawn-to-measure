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
 * One solid per kind, built like a model on a drawing board.
 * Parts stay thick so the silhouette still reads when the node is small.
 * Everything sits on y = 0 and fits in roughly one unit.
 */

function box(w: number, h: number, d: number, x: number, y: number, z: number, rz = 0, rx = 0) {
  const g = new BoxGeometry(w, h, d);
  if (rx) g.rotateX(rx);
  if (rz) g.rotateZ(rz);
  g.translate(x, y, z);
  return g;
}

function cyl(rt: number, rb: number, h: number, x: number, y: number, z: number, rx = 0, rz = 0) {
  const g = new CylinderGeometry(rt, rb, h, 18);
  if (rx) g.rotateX(rx);
  if (rz) g.rotateZ(rz);
  g.translate(x, y, z);
  return g;
}

function ball(r: number, x: number, y: number, z: number) {
  const g = new SphereGeometry(r, 18, 14);
  g.translate(x, y, z);
  return g;
}

function ring(r: number, tube: number, x: number, y: number, z: number, rx = Math.PI / 2) {
  const g = new TorusGeometry(r, tube, 8, 16);
  if (rx) g.rotateX(rx);
  g.translate(x, y, z);
  return g;
}

function cone(r: number, h: number, x: number, y: number, z: number, rx = 0) {
  const g = new ConeGeometry(r, h, 14);
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

function project(): BufferGeometry {
  return fuse([
    box(0.92, 0.06, 0.7, 0, 0.04, 0),
    box(0.84, 0.06, 0.64, 0.02, 0.11, 0.01, 0.06),
    box(0.76, 0.055, 0.56, -0.02, 0.18, -0.01, -0.05),
    box(0.22, 0.03, 0.18, 0.28, 0.23, 0.16, 0.5),
  ]);
}

function compass(): BufferGeometry {
  return fuse([
    ball(0.11, 0, 0.78, 0),
    cyl(0.045, 0.045, 0.72, -0.16, 0.4, 0, 0, 0.42),
    cyl(0.045, 0.045, 0.72, 0.16, 0.4, 0, 0, -0.42),
    ball(0.06, -0.3, 0.06, 0),
    ball(0.06, 0.3, 0.06, 0),
    cyl(0.16, 0.16, 0.04, 0, 0.03, 0),
  ]);
}

function sheet(): BufferGeometry {
  return fuse([
    cyl(0.28, 0.32, 0.06, 0, 0.03, 0),
    box(0.62, 0.86, 0.045, 0, 0.5, 0, 0, -0.12),
    box(0.5, 0.015, 0.02, 0, 0.72, 0.03),
    box(0.5, 0.015, 0.02, 0, 0.6, 0.03),
    box(0.38, 0.015, 0.02, 0, 0.48, 0.03),
  ]);
}

function person(): BufferGeometry {
  return fuse([
    cyl(0.3, 0.34, 0.07, 0, 0.04, 0),
    cyl(0.12, 0.14, 0.38, 0, 0.3, 0),
    ball(0.18, 0, 0.66, 0),
    box(0.36, 0.08, 0.1, 0, 0.4, 0),
  ]);
}

function marker(): BufferGeometry {
  return fuse([
    cyl(0.34, 0.36, 0.07, 0, 0.04, 0),
    cone(0.2, 0.62, 0, 0.4, 0),
    ball(0.07, 0, 0.74, 0),
    box(0.02, 0.22, 0.02, 0.16, 0.5, 0),
    box(0.22, 0.14, 0.025, 0.28, 0.56, 0),
  ]);
}

function portico(): BufferGeometry {
  return fuse([
    box(0.96, 0.1, 0.62, 0, 0.05, 0),
    cyl(0.07, 0.08, 0.48, -0.28, 0.34, 0.12),
    cyl(0.07, 0.08, 0.48, 0.28, 0.34, 0.12),
    cyl(0.07, 0.08, 0.48, -0.28, 0.34, -0.12),
    cyl(0.07, 0.08, 0.48, 0.28, 0.34, -0.12),
    box(0.9, 0.1, 0.58, 0, 0.62, 0),
    cone(0.52, 0.28, 0, 0.82, 0),
  ]);
}

function agent(): BufferGeometry {
  return fuse([
    box(0.5, 0.34, 0.4, 0, 0.24, 0),
    box(0.36, 0.28, 0.32, 0, 0.54, 0),
    ball(0.07, -0.08, 0.56, 0.16),
    ball(0.07, 0.08, 0.56, 0.16),
    cyl(0.03, 0.03, 0.22, 0.1, 0.78, 0),
    ball(0.06, 0.1, 0.92, 0),
    cyl(0.06, 0.06, 0.08, -0.14, 0.05, 0),
    cyl(0.06, 0.06, 0.08, 0.14, 0.05, 0),
  ]);
}

function rose(): BufferGeometry {
  return fuse([
    ring(0.42, 0.045, 0, 0.08, 0),
    box(0.12, 0.06, 0.78, 0, 0.1, 0),
    box(0.78, 0.06, 0.12, 0, 0.1, 0),
    cone(0.12, 0.28, 0, 0.22, -0.28),
    ball(0.08, 0, 0.12, 0),
  ]);
}

function arrow(): BufferGeometry {
  return fuse([
    cyl(0.26, 0.3, 0.07, 0, 0.04, 0),
    box(0.16, 0.16, 0.55, 0, 0.2, -0.05),
    cone(0.22, 0.36, 0, 0.2, 0.38, Math.PI / 2),
  ]);
}

function mast(): BufferGeometry {
  return fuse([
    cyl(0.26, 0.3, 0.07, 0, 0.04, 0),
    cyl(0.045, 0.045, 0.78, 0, 0.44, 0),
    ring(0.2, 0.04, 0, 0.32, 0),
    ring(0.32, 0.035, 0, 0.55, 0),
    ball(0.07, 0, 0.86, 0),
  ]);
}

function book(): BufferGeometry {
  return fuse([
    box(0.46, 0.06, 0.62, -0.24, 0.1, 0, 0.55),
    box(0.46, 0.06, 0.62, 0.24, 0.1, 0, -0.55),
    cyl(0.05, 0.05, 0.64, 0, 0.08, 0, Math.PI / 2),
  ]);
}

function medal(): BufferGeometry {
  return fuse([
    cyl(0.4, 0.4, 0.08, 0, 0.08, 0),
    ring(0.28, 0.05, 0, 0.14, 0),
    cone(0.16, 0.22, 0, 0.24, 0),
    ball(0.07, 0, 0.36, 0),
  ]);
}

function folio(): BufferGeometry {
  return fuse([
    box(0.78, 0.5, 0.22, 0, 0.3, 0),
    box(0.7, 0.06, 0.04, 0, 0.42, 0.12),
    ring(0.16, 0.035, 0, 0.64, 0, 0),
    box(0.12, 0.08, 0.04, 0, 0.3, 0.13),
  ]);
}

const builders: Record<string, () => BufferGeometry> = {
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

export function geometryFor(kind: string): BufferGeometry {
  const build = builders[kind] ?? folio;
  return build();
}
