import { communityFamily } from "@/lib/graph/colors";
import { getNode } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";

/** Name card in the chrome. The drawing itself stays unlabeled. */
export function HoverCard() {
  const hovered = useGraphStore((s) => s.hoveredId);
  const selected = useGraphStore((s) => s.selectedId);
  const id = hovered || selected;
  const node = id ? getNode(id) : undefined;
  if (!node) return null;
  return (
    <div className="sn-tooltip" role="status" aria-live="polite">
      <p className="sn-kicker">{hovered ? "Under the pencil" : "Selected"}</p>
      <p className="sn-tooltip-name">{node.label}</p>
      <p className="sn-tooltip-meta">
        {node.kind.replaceAll("/", " / ")} · {node.community_name}
        <span> {communityFamily(node.community)}</span>
      </p>
    </div>
  );
}
