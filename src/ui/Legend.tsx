import { COMMUNITIES } from "@/lib/graph/model";
import { communityColor } from "@/lib/graph/colors";
import { useGraphStore } from "@/state/store";

export function Legend() {
  const open = useGraphStore((s) => s.legendOpen);
  const focus = useGraphStore((s) => s.communityFocus);
  const setFocus = useGraphStore((s) => s.setCommunityFocus);
  const mobile = useGraphStore((s) => s.mobile);
  if (!open && !mobile) return null;
  if (mobile && !open) return null;

  return (
    <section className="sn-panel sn-legend" aria-label="Communities">
      <h2>Communities</h2>
      <ul>
        {COMMUNITIES.map((c) => {
          const on = focus === c.id;
          return (
            <li key={c.id}>
              <button
                type="button"
                aria-pressed={on}
                className={on ? "is-on" : ""}
                onClick={() => setFocus(on ? null : c.id)}
              >
                <i style={{ background: communityColor(c.id) }} aria-hidden />
                <span>{c.name}</span>
                <em className="tabular">{c.count}</em>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
