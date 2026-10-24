import { CanvasTexture, SRGBColorSpace } from "three";
import { COBALT, COBALT_WASH, INK, communityWash } from "@/lib/graph/colors";
import { DEGREE, NODES } from "@/lib/graph/model";

const CELL = 128;
const COLS = 16;
const SIZE = COLS * CELL;

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
  passes = 2,
  w: [number, number] = [1.3, 2.8],
) {
  for (let k = 0; k < passes; k++) {
    const st = rnd() * 6.28;
    const ov = 0.25 + rnd() * 0.25;
    const ox = (rnd() - 0.5) * 2;
    const oy = (rnd() - 0.5) * 2;
    const pts: number[][] = [];
    for (let i = 0; i <= 72; i++) {
      const t = st + (Math.PI * 2 + ov) * (i / 72);
      const r = R * (1 + 0.03 * wob(t, seed + k)) + (i / 72) * (rnd() - 0.5) * 2;
      pts.push([x + ox + Math.cos(t) * r, y + oy + Math.sin(t) * r]);
    }
    inkStroke(g, pts, col, w[0], w[1], rnd, k ? 0.5 : 0.92);
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

function glyph(g: CanvasRenderingContext2D, kind: string, x: number, y: number, s: number) {
  g.save();
  g.strokeStyle = INK;
  g.fillStyle = INK;
  g.lineWidth = 1.4;
  g.lineCap = "round";
  g.beginPath();
  if (kind === "Project") g.strokeRect(x - s, y - s * 0.7, s * 2, s * 1.4);
  else if (kind === "Place") {
    g.moveTo(x, y - s);
    g.lineTo(x + s, y + s * 0.8);
    g.lineTo(x - s, y + s * 0.8);
    g.closePath();
    g.stroke();
  } else if (kind === "Poem/Writing") {
    g.moveTo(x - s, y);
    g.bezierCurveTo(x - s * 0.3, y - s, x + s * 0.3, y + s, x + s, y);
    g.stroke();
  } else if (kind === "Person") {
    g.arc(x, y - s * 0.35, s * 0.38, 0, Math.PI * 2);
    g.moveTo(x, y);
    g.lineTo(x, y + s);
    g.stroke();
  } else if (kind === "Skill/Tool") {
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      g.moveTo(x, y);
      g.lineTo(x + Math.cos(a) * s, y + Math.sin(a) * s);
    }
    g.stroke();
  } else {
    g.arc(x, y, s * 0.45, 0, Math.PI * 2);
    g.stroke();
  }
  g.restore();
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

  const maxOther = Math.max(1, ...NODES.filter((n) => n.id !== "shreeraj").map((n) => DEGREE.get(n.id) || 0));
  const hub = new Map<number, number>();
  for (const n of NODES) {
    const d = DEGREE.get(n.id) || 0;
    hub.set(n.community, Math.max(hub.get(n.community) || 0, n.id === "shreeraj" ? 0 : d));
  }

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
    const degree = DEGREE.get(n.id) || 0;
    const isHub = !him && degree > 0 && degree === (hub.get(n.community) || 0);
    const R = him ? 46 : isHub ? 34 : degree / maxOther > 0.18 ? 28 : 22;
    wash(g, cx, cy, R * 0.95, him ? COBALT_WASH : communityWash(n.community), him ? 0.5 : 0.42, rnd);
    ring(g, cx, cy, R, him ? COBALT : INK, hash(n.id) % 20, rnd, 2, him ? [2.2, 4.2] : [1.2, 2.6]);
    if (isHub) {
      g.strokeStyle = INK;
      g.lineWidth = 1.2;
      for (const a of [0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2]) {
        g.beginPath();
        g.moveTo(cx + Math.cos(a) * (R + 2), cy + Math.sin(a) * (R + 2));
        g.lineTo(cx + Math.cos(a) * (R + 8), cy + Math.sin(a) * (R + 8));
        g.stroke();
      }
    } else if (degree / maxOther <= 0.18 && !him) {
      ring(g, cx, cy, R * 0.62, INK, 3, rnd, 1, [0.8, 1.4]);
    } else if (!him) {
      g.fillStyle = INK;
      g.beginPath();
      g.arc(cx, cy, 3.2, 0, Math.PI * 2);
      g.fill();
    }
    if (!him && (isHub || degree / maxOther > 0.18)) glyph(g, n.kind, cx, cy, 8);
  });

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  cached = { texture, uv, cell: CELL / SIZE };
  return cached;
}
