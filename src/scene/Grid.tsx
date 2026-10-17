import { useMemo } from "react";
import { TRACE } from "@/lib/graph/colors";

/** Drafting rules on the sheet. Fog, not a solid plane, dissolves the edges. */
export function DraftingGrid() {
  const minor = useMemo(() => {
    const size = 80;
    const divisions = 80;
    return { size, divisions };
  }, []);

  return (
    <group position={[0, -0.02, 0]}>
      <gridHelper args={[minor.size, minor.divisions, TRACE, TRACE]} position={[0, 0, 0]} />
      <gridHelper args={[80, 16, "#848D8B", "#848D8B"]} position={[0, 0.001, 0]} />
    </group>
  );
}
