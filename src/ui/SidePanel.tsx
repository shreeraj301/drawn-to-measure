import { useEffect, useRef } from "react";
import { COMMUNITIES, KINDS } from "@/lib/graph/model";
import { communityColor, communityFamily } from "@/lib/graph/colors";
import { TOURS } from "@/lib/graph/tours";
import { useGraphStore } from "@/state/store";
import { IconClose, KindIcon } from "./Icons";
import { PathFinder } from "./PathFinder";

const TABS = [
  { id: "filters" as const, label: "Filters" },
  { id: "communities" as const, label: "Communities" },
  { id: "tours" as const, label: "Tours" },
];

export function SidePanel() {
  const tab = useGraphStore((s) => s.sideTab);
  const setTab = useGraphStore((s) => s.setSideTab);
  const panel = useRef<HTMLElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!tab) return;
    opener.current = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => {
      panel.current?.querySelector<HTMLElement>("button, input, [tabindex]")?.focus();
    }, 30);
    return () => window.clearTimeout(t);
  }, [tab]);

  useEffect(() => {
    if (tab) return;
    opener.current?.focus();
    opener.current = null;
  }, [tab]);

  if (!tab) return null;

  return (
    <aside className="sn-dock" ref={panel} aria-label="Sheet tools">
      <header className="sn-dock-head">
        <div className="sn-dock-tabs" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={tab === t.id ? "is-on" : ""}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => setTab(null)} aria-label="Close panel">
          <IconClose />
        </button>
      </header>
      <div className="sn-dock-body" role="tabpanel">
        {tab === "filters" ? <FiltersBody /> : null}
        {tab === "communities" ? <CommunitiesBody /> : null}
        {tab === "tours" ? <ToursBody /> : null}
      </div>
    </aside>
  );
}

function FiltersBody() {
  const kinds = useGraphStore((s) => s.kinds);
  const toggleKind = useGraphStore((s) => s.toggleKind);
  const showExtracted = useGraphStore((s) => s.showExtracted);
  const showInferred = useGraphStore((s) => s.showInferred);
  const minConfidence = useGraphStore((s) => s.minConfidence);
  const setShowExtracted = useGraphStore((s) => s.setShowExtracted);
  const setShowInferred = useGraphStore((s) => s.setShowInferred);
  const setMinConfidence = useGraphStore((s) => s.setMinConfidence);

  return (
    <>
      <h2>Kinds</h2>
      <ul>
        {KINDS.map((kind) => (
          <li key={kind}>
            <button
              type="button"
              aria-pressed={kinds[kind] !== false}
              className={kinds[kind] === false ? "is-off" : ""}
              onClick={() => toggleKind(kind)}
            >
              <KindIcon kind={kind} className="sn-kind-icon" />
              <span>{kindLabel(kind)}</span>
            </button>
          </li>
        ))}
      </ul>
      <h2>Edges</h2>
      <div className="sn-edge-toggles">
        <button type="button" aria-pressed={showExtracted} onClick={() => setShowExtracted(!showExtracted)}>
          Extracted
        </button>
        <button type="button" aria-pressed={showInferred} className="is-redline" onClick={() => setShowInferred(!showInferred)}>
          Inferred
        </button>
      </div>
      <label className="sn-slider">
        <span>
          Hide inferred below <span className="tabular">{Math.round(minConfidence * 100)}</span>
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(minConfidence * 100)}
          onChange={(e) => setMinConfidence(Number(e.target.value) / 100)}
        />
      </label>
      <PathFinder />
    </>
  );
}

function CommunitiesBody() {
  const focus = useGraphStore((s) => s.communityFocus);
  const setFocus = useGraphStore((s) => s.setCommunityFocus);
  return (
    <>
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
                title={c.name}
              >
                <i style={{ background: communityColor(c.id) }} aria-hidden />
                <span>
                  {c.name}
                  <small className="sn-family">{communityFamily(c.id)}</small>
                </span>
                <em className="tabular">{c.count}</em>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function ToursBody() {
  const start = useGraphStore((s) => s.startTour);
  return (
    <>
      <h2>Tours</h2>
      <ul>
        {TOURS.map((t) => (
          <li key={t.id}>
            <button type="button" onClick={() => start(t.id)}>
              <strong>{t.title}</strong>
              <span>{t.blurb}</span>
              <em className="tabular">{t.stops.length} stops</em>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export function kindLabel(kind: string): string {
  return kind.replace("/", " / ");
}
