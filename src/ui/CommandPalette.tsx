import { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { searchNodes } from "@/lib/graph/search";
import { useGraphStore } from "@/state/store";
import { KindIcon } from "./Icons";

export function CommandPalette() {
  const open = useGraphStore((s) => s.paletteOpen);
  const setOpen = useGraphStore((s) => s.setPaletteOpen);
  const select = useGraphStore((s) => s.select);
  const [q, setQ] = useState("");
  const [cursor, setCursor] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const hits = useMemo(() => searchNodes(q, 10), [q]);

  useEffect(() => {
    if (open) {
      setQ("");
      setCursor(0);
      const t = window.setTimeout(() => input.current?.focus(), 20);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    setCursor(0);
  }, [q]);

  if (!open) return null;

  const go = (id: string) => {
    select(id);
    setOpen(false);
  };

  return (
    <div className="sn-palette-back" role="presentation" onMouseDown={() => setOpen(false)}>
      <div
        className="sn-palette"
        role="dialog"
        aria-label="Search the graph"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <label className="sn-palette-search">
          <Search aria-hidden />
          <input
            ref={input}
            value={q}
            placeholder="Search labels and descriptions"
            aria-label="Search labels and descriptions"
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setCursor((c) => Math.min(hits.length - 1, c + 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setCursor((c) => Math.max(0, c - 1));
              } else if (e.key === "Enter") {
                e.preventDefault();
                const hit = hits[cursor];
                if (hit) go(hit.id);
              } else if (e.key === "Escape") {
                e.preventDefault();
                setOpen(false);
              }
            }}
          />
        </label>
        <ul role="listbox" aria-label="Results">
          {hits.length === 0 ? (
            <li className="sn-palette-empty">{q ? "Nothing matches." : "Type to search the drawing."}</li>
          ) : (
            hits.map((h, i) => (
              <li key={h.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={i === cursor}
                  className={i === cursor ? "is-active" : ""}
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => go(h.id)}
                >
                  <KindIcon kind={h.kind} className="sn-kind-icon" />
                  <span>
                    <strong>{h.label}</strong>
                    <em>
                      {h.kind}
                      <span aria-hidden> · </span>
                      {h.community}
                    </em>
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
