import { Color, MeshStandardMaterial } from "three";
import { COMMUNITY_COLORS, INK } from "@/lib/graph/colors";

const cache = new Map<string, MeshStandardMaterial>();

export function matte(hex: string): MeshStandardMaterial {
  let m = cache.get(hex);
  if (!m) {
    m = new MeshStandardMaterial({
      color: new Color(hex),
      roughness: 0.92,
      metalness: 0.0,
      flatShading: false,
    });
    cache.set(hex, m);
  }
  return m;
}

export const communityMaterials = COMMUNITY_COLORS.map((c) => matte(c));

export const inkMaterial = matte(INK);
