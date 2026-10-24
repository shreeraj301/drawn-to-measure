import { getNode } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";

export function SelectionCaption() {
  const id = useGraphStore((s) => s.selectedId);
  const node = id ? getNode(id) : undefined;
  if (!node) return null;
  return (
    <p className="sn-caption" role="status">
      Highlighting connections to {node.label}
    </p>
  );
}
