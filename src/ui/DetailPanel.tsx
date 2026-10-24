import { ADJACENCY, LINKS, getNode, relationLabel } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";
import { IconClose, IconLink, IconNext, IconPrev, KindIcon } from "./Icons";
import { kindLabel } from "./SidePanel";

export function DetailPanel() {
  const id = useGraphStore((s) => s.selectedId);
  const mobile = useGraphStore((s) => s.mobile);
  const select = useGraphStore((s) => s.select);
  const back = useGraphStore((s) => s.historyBack);
  const forward = useGraphStore((s) => s.historyForward);
  const historyIndex = useGraphStore((s) => s.historyIndex);
  const history = useGraphStore((s) => s.history);
  const node = id ? getNode(id) : undefined;
  if (!node) return null;

  const links = (ADJACENCY.get(node.id) || [])
    .map(({ to, linkIndex }) => {
      const link = LINKS[linkIndex];
      const other = getNode(to);
      if (!link || !other) return null;
      return { to, other, link };
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const groups = new Map<string, typeof links>();
  for (const row of links) {
    const key = row.link.relation;
    const list = groups.get(key) ?? [];
    list.push(row);
    groups.set(key, list);
  }

  const sources = uniqueSources(node);

  return (
    <aside
      className={mobile ? "sn-drawer sn-drawer-mobile" : "sn-drawer"}
      role="dialog"
      aria-label={node.label}
    >
      <header className="sn-sheet-head">
        {mobile ? <span className="sn-handle" aria-hidden /> : null}
        <div className="sn-tags">
          <span className="sn-tag">
            <KindIcon kind={node.kind} className="sn-kind-icon" />
            {kindLabel(node.kind)}
          </span>
          <span className="sn-tag sn-tag-quiet">{node.community_name}</span>
        </div>
        <div className="sn-sheet-nav">
          <button type="button" onClick={back} disabled={historyIndex <= 0} aria-label="Previous selection">
            <IconPrev />
          </button>
          <button
            type="button"
            onClick={forward}
            disabled={historyIndex >= history.length - 1}
            aria-label="Next selection"
          >
            <IconNext />
          </button>
          <button type="button" onClick={() => select(null, { push: false })} aria-label="Close detail">
            <IconClose />
          </button>
        </div>
      </header>
      <h2 className="sn-sheet-title">{node.label}</h2>
      <p className="sn-id">{node.id}</p>
      {node.description ? <p className="sn-prose">{node.description}</p> : null}

      {sources.length > 0 ? (
        <section>
          <h3>Sources</h3>
          <ul className="sn-sources">
            {sources.map((s) => (
              <li key={s.key}>
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noreferrer">
                    {s.label}
                    <IconLink />
                  </a>
                ) : (
                  <span>{s.label}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section>
        <h3>Connections</h3>
        {[...groups.entries()].map(([relation, rows]) => (
          <div key={relation} className="sn-rel">
            <p className="sn-rel-name">{relationLabel(relation)}</p>
            <ul>
              {rows.map((row) => (
                <li key={row.link.source + row.link.target + relation}>
                  <button type="button" onClick={() => select(row.other.id)}>
                    <span>{row.other.label}</span>
                    <span className="sn-rel-kind">{kindLabel(row.other.kind)}</span>
                  </button>
                  {row.link.confidence === "INFERRED" ? (
                    <p className="sn-why">
                      {row.link.why ? row.link.why : "Inferred."}{" "}
                      <span className="tabular">{Math.round((row.link.confidence_score ?? 0) * 100)}%</span>
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </aside>
  );
}

function uniqueSources(node: NonNullable<ReturnType<typeof getNode>>): { key: string; label: string; url?: string }[] {
  const out: { key: string; label: string; url?: string }[] = [];
  const seen = new Set<string>();
  const push = (label: string | undefined | null, url?: string | null, file?: string | null) => {
    const name = humanSource(label || file || url);
    if (!name) return;
    const key = `${name}|${url ?? ""}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ key, label: name, url: url || undefined });
  };
  if (node.sources) {
    for (const s of node.sources) push(s.label || s.file, s.url, s.file);
  }
  push(node.source_file, node.source_url, node.source_file);
  return out;
}

function humanSource(raw: string | null | undefined): string | undefined {
  if (!raw) return undefined;
  const map: Record<string, string> = {
    "live-sites-scrape.json": "Live sites",
    "linkedin.json": "LinkedIn",
    "resume.json": "Resume",
    "portfolio.json": "Portfolio",
  };
  const base = raw.split("/").pop() || raw;
  if (map[base]) return map[base];
  if (base.endsWith(".json")) return base.replace(/[-_]/g, " ").replace(".json", "");
  return raw;
}
