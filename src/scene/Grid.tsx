import { useMemo } from "react";
import { CanvasTexture, SRGBColorSpace } from "three";
import { PAPER_EDGE, PAPER_SHEET } from "@/lib/graph/colors";

function lcg(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

function paperTexture() {
  const size = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const g = canvas.getContext("2d");
  if (!g) return null;
  const rnd = lcg(7);
  g.fillStyle = PAPER_SHEET;
  g.fillRect(0, 0, size, size);
  const img = g.getImageData(0, 0, size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (rnd() - 0.5) * 14;
    d[i] = Math.max(0, Math.min(255, (d[i] ?? 0) + n));
    d[i + 1] = Math.max(0, Math.min(255, (d[i + 1] ?? 0) + n * 0.9));
    d[i + 2] = Math.max(0, Math.min(255, (d[i + 2] ?? 0) + n * 0.7));
  }
  g.putImageData(img, 0, 0);
  g.strokeStyle = "rgba(120,104,82,0.28)";
  g.lineWidth = 1;
  for (let x = 40; x < size; x += 48) {
    g.beginPath();
    g.moveTo(x + (rnd() - 0.5) * 2, 0);
    g.lineTo(x + (rnd() - 0.5) * 2, size);
    g.stroke();
  }
  for (let y = 40; y < size; y += 48) {
    g.beginPath();
    g.moveTo(0, y + (rnd() - 0.5) * 2);
    g.lineTo(size, y + (rnd() - 0.5) * 2);
    g.stroke();
  }
  g.strokeStyle = "rgba(42,36,30,0.55)";
  g.lineWidth = 2.2;
  g.beginPath();
  g.moveTo(48, size / 2);
  g.lineTo(size - 48, size / 2);
  g.stroke();
  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/** Warm sheet under the drawing. One texture, same grain every load. */
export function DraftingGrid() {
  const tex = useMemo(() => paperTexture(), []);
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.04, 0]} raycast={() => undefined}>
        <planeGeometry args={[90, 90]} />
        <meshStandardMaterial map={tex ?? undefined} color={tex ? "#ffffff" : PAPER_SHEET} roughness={1} />
      </mesh>
      <mesh position={[0, -0.12, 0]} raycast={() => undefined}>
        <boxGeometry args={[90, 0.16, 90]} />
        <meshStandardMaterial color={PAPER_EDGE} roughness={1} />
      </mesh>
    </group>
  );
}
