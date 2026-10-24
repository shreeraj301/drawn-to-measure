import { useMemo, useState } from "react";
import { LINKS, getNode, linksBetween, relationLabel, shortestPath } from "@/lib/graph/model";
import { searchNodes } from "@/lib/graph/search";
import { useGraphStore } from "@/state/store";

export function PathFinder() {
  const from = useGraphStore((s) => s.pathFrom);
  const to = useGraphStore((s) => s.pathTo);
  const path = useGraphStore((s) => s.pathNodes);
  const hop = useGraphStore((s) => s.pathHop);
  const setFrom = useGraphStore((s) => s.setPathFrom);
  const setTo = useGraphStore((s) => s.setPathTo);
  const setPath = useGraphStore((s) => s.setPath);
  const setHop = useGraphStore((s) => s.setPathHop);
  const select = useGraphStore((s) => s.select);

  const narrate = useMemo(() => {
    if (!path || path.length < 2) return [];
    const indexes = linksBetween(path);
    return indexes.map((idx, i) => {
      const link = LINKS[idx];
      const a = path[i];
      const b = path[i + 1];
      return {
        from: a ? getNode(a) : undefined,
        to: b ? getNode(b) : undefined,
        link,
      };
    });
  }, [path]);

  const run = (a: string | null, b: string | null) => {
    if (!a || !b) {
      setPath(null);
      return;
    }
    const found = shortestPath(a, b);
    setPath(found);
    if (found && found[0]) select(found[0]);
  };

  return (
    <section className="sn-path" aria-label="Path finder">
      <h2>Path</h2>
      <NodeField
        label="From"
        value={from}
        onPick={(id) => {
          setFrom(id);
          run(id, to);
        }}
      />
      <NodeField
        label="To"
        value={to}
        onPick={(id) => {
          setTo(id);
          run(from, id);
        }}
      />
      {path && path.length === 0 ? null : null}
      {from && to && path == null ? <p className="sn-muted">No path between these two.</p> : null}
      {path && path.length > 1 ? (
        <ol className="sn-hops">
          {narrate.map((row, i) => (
            <li key={i} className={i === hop ? "is-on" : ""}>
              <button
                type="button"
                onClick={() => {
                  setHop(i);
                  if (row.to) select(row.to.id);
                }}
              >
                <span>
                  {row.from?.label} to {row.to?.label}
                </span>
                {row.link ? (
                  <em>
                    {relationLabel(row.link.relation)}
                    {row.link.confidence === "INFERRED" && row.link.why ? `. ${row.link.why}` : ""}
                  </em>
                ) : null}
              </button>
            </li>
          ))}
        </ol>
      ) : null}
      {path ? (
        <button type="button" className="sn-text-btn" onClick={() => setPath(null)}>
          Clear path
        </button>
      ) : null}
    </section>
  );
}

function NodeField({
  label,
  value,
  onPick,
}: {
  label: string;
  value: string | null;
  onPick: (id: string | null) => void;
}) {
  const [q, setQ] = useState("");
  const hits = q.trim().length > 0 ? searchNodes(q, 5) : [];
  const node = value ? getNode(value) : undefined;
  return (
    <label className="sn-field">
      <span>{label}</span>
      <input
        value={q || node?.label || ""}
        placeholder="Search a node"
        onChange={(e) => {
          setQ(e.target.value);
          if (!e.target.value) onPick(null);
        }}
        onFocus={() => {
          if (node && !q) setQ("");
        }}
      />
      {hits.length > 0 ? (
        <ul className="sn-suggest">
          {hits.map((h) => (
            <li key={h.id}>
              <button
                type="button"
                onClick={() => {
                  onPick(h.id);
                  setQ("");
                }}
              >
                {h.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </label>
  );
}
