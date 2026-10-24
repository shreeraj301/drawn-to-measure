import { NODES } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";
import { kindLabel } from "./SidePanel";

export function NodeList() {
  const select = useGraphStore((s) => s.select);
  const selected = useGraphStore((s) => s.selectedId);
  return (
    <section id="node-list" className="sn-nodelist" aria-label="All nodes">
      <h2>All nodes</h2>
      <ul>
        {NODES.map((n) => (
          <li key={n.id}>
            <button
              type="button"
              aria-current={selected === n.id ? "true" : undefined}
              onClick={() => select(n.id)}
            >
              <span>{n.label}</span>
              <em>{kindLabel(n.kind)}</em>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
