import { CanvasTexture, SRGBColorSpace } from "three";
import { COBALT_WASH, INK, communityWash } from "@/lib/graph/colors";
import { DEGREE, NODES } from "@/lib/graph/model";

const CELL = 128;
const COLS = 16;
const SIZE = COLS * CELL;

const MAX_OTHER = Math.max(1, ...NODES.filter((n) => n.id !== "shreeraj").map((n) => DEGREE.get(n.id) || 0));
const HUB_DEG = new Map<number, number>();
for (const n of NODES) {
  if (n.id === "shreeraj") continue;
  const d = DEGREE.get(n.id) || 0;
  HUB_DEG.set(n.community, Math.max(HUB_DEG.get(n.community) || 0, d));
}

/** Ring radius as a fraction of the point sprite (cell is 128, ring uses this * 64). */
export function discFrac(id: string, community: number): number {
  if (id === "shreeraj") return 36 / 64;
  const degree = DEGREE.get(id) || 0;
  const isHub = degree > 0 && degree === (HUB_DEG.get(community) || 0);
  if (isHub) return 34 / 64;
  if (degree / MAX_OTHER > 0.18) return 28 / 64;
  return 22 / 64;
}

function hash(id: string): number {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % 2147483646 || 1;
}

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (Math.imul(s, 16807) + 11) % 2147483647;
    return s / 2147483647;
  };
}

function wob(t: number, s: number) {
  return Math.sin(t * 3 + s) * 0.6 + Math.sin(t * 7.1 + s * 2) * 0.3 + Math.sin(t * 13 + s * 3) * 0.1;
}

function hexA(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r},${g},${b},${a})`;
}

function inkStroke(
  g: CanvasRenderingContext2D,
  pts: number[][],
  col: string,
  w0: number,
  w1: number,
  rnd: () => number,
  alpha = 0.9,
) {
  for (let i = 0; i < pts.length - 1; i++) {
    const t = i / (pts.length - 1);
    const p = Math.pow(Math.sin(Math.PI * t), 0.6);
    g.strokeStyle = col;
    g.globalAlpha = alpha * (0.7 + 0.3 * p);
    g.lineWidth = (w0 + (w1 - w0) * p) * (0.85 + 0.3 * rnd());
    g.beginPath();
    const a = pts[i];
    const b = pts[i + 1];
    if (!a || !b) continue;
    g.moveTo(a[0] ?? 0, a[1] ?? 0);
    g.lineTo(b[0] ?? 0, b[1] ?? 0);
    g.stroke();
  }
  g.globalAlpha = 1;
}

function ring(
  g: CanvasRenderingContext2D,
  x: number,
  y: number,
  R: number,
  col: string,
  seed: number,
  rnd: () => number,
  passes = 1,
  w: [number, number] = [1.15, 2.05],
) {
  for (let k = 0; k < passes; k++) {
    const st = rnd() * 6.28;
    const ov = 0.18 + rnd() * 0.16;
    const ox = (rnd() - 0.5) * 1.4;
    const oy = (rnd() - 0.5) * 1.4;
    const pts: number[][] = [];
    for (let i = 0; i <= 72; i++) {
      const t = st + (Math.PI * 2 + ov) * (i / 72);
      const r = R * (1 + 0.028 * wob(t, seed + k)) + (i / 72) * (rnd() - 0.5) * 1.4;
      pts.push([x + ox + Math.cos(t) * r, y + oy + Math.sin(t) * r]);
    }
    inkStroke(g, pts, col, w[0], w[1], rnd, 0.92);
  }
}

function wash(g: CanvasRenderingContext2D, x: number, y: number, R: number, col: string, a: number, rnd: () => number) {
  for (let b = 0; b < 5; b++) {
    const cx = x + (rnd() - 0.5) * R * 0.35;
    const cy = y + (rnd() - 0.5) * R * 0.35;
    const r = R * (0.62 + rnd() * 0.38);
    const grd = g.createRadialGradient(cx, cy, r * 0.05, cx, cy, r);
    grd.addColorStop(0, hexA(col, a));
    grd.addColorStop(1, hexA(col, 0));
    g.fillStyle = grd;
    g.beginPath();
    g.arc(cx, cy, r, 0, Math.PI * 2);
    g.fill();
  }
}

export type Atlas = {
  texture: CanvasTexture;
  uv: Float32Array;
  cell: number;
};

let cached: Atlas | null = null;

export function nodeAtlas(): Atlas {
  if (cached) return cached;
  const canvas = document.createElement("canvas");
  canvas.width = SIZE;
  canvas.height = SIZE;
  const g = canvas.getContext("2d");
  if (!g) throw new Error("canvas");
  g.clearRect(0, 0, SIZE, SIZE);

  const uv = new Float32Array(NODES.length * 2);
  NODES.forEach((n, i) => {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const x0 = col * CELL;
    const y0 = row * CELL;
    uv[i * 2] = x0 / SIZE;
    uv[i * 2 + 1] = 1 - (y0 + CELL) / SIZE;
    const cx = x0 + CELL / 2;
    const cy = y0 + CELL / 2;
    const rnd = rng(hash(n.id));
    const him = n.id === "shreeraj";
    const R = discFrac(n.id, n.community) * 64;
    wash(g, cx, cy, R * 0.92, him ? COBALT_WASH : communityWash(n.community), him ? 0.34 : 0.4, rnd);
    ring(g, cx, cy, R, INK, hash(n.id) % 20, rnd, 1, [1.15, 2.05]);
  });

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  cached = { texture, uv, cell: CELL / SIZE };
  return cached;
}
