import { KINDS } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";
import { KindIcon } from "./Icons";

export function Filters() {
  const open = useGraphStore((s) => s.filtersOpen);
  const kinds = useGraphStore((s) => s.kinds);
  const toggleKind = useGraphStore((s) => s.toggleKind);
  const showExtracted = useGraphStore((s) => s.showExtracted);
  const showInferred = useGraphStore((s) => s.showInferred);
  const minConfidence = useGraphStore((s) => s.minConfidence);
  const setShowExtracted = useGraphStore((s) => s.setShowExtracted);
  const setShowInferred = useGraphStore((s) => s.setShowInferred);
  const setMinConfidence = useGraphStore((s) => s.setMinConfidence);
  if (!open) return null;

  return (
    <section className="sn-panel sn-filters" aria-label="Filters">
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
              <span>{kind}</span>
            </button>
          </li>
        ))}
      </ul>
      <h2>Edges</h2>
      <div className="sn-edge-toggles">
        <button type="button" aria-pressed={showExtracted} onClick={() => setShowExtracted(!showExtracted)}>
          Extracted
        </button>
        <button
          type="button"
          aria-pressed={showInferred}
          className="is-redline"
          onClick={() => setShowInferred(!showInferred)}
        >
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
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(minConfidence * 100)}
        />
      </label>
    </section>
  );
}
