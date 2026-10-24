import { useEffect, useMemo, useRef, useState } from "react";
import { searchNodes } from "@/lib/graph/search";
import { useGraphStore } from "@/state/store";
import { IconSearch, KindIcon } from "./Icons";
import { kindLabel } from "./SidePanel";

export function CommandPalette() {
  const open = useGraphStore((s) => s.paletteOpen);
  const setOpen = useGraphStore((s) => s.setPaletteOpen);
  const select = useGraphStore((s) => s.select);
  const [q, setQ] = useState("");
  const [cursor, setCursor] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const hits = useMemo(() => searchNodes(q, 8), [q]);

  useEffect(() => {
    if (open) {
      opener.current = document.activeElement as HTMLElement | null;
      setQ("");
      setCursor(0);
      const t = window.setTimeout(() => input.current?.focus(), 20);
      return () => window.clearTimeout(t);
    }
    opener.current?.focus();
    opener.current = null;
  }, [open]);

  useEffect(() => setCursor(0), [q]);

  if (!open) return null;

  const go = (id: string) => {
    select(id);
    setOpen(false);
  };

  return (
    <div className="sn-search" role="dialog" aria-label="Search the graph">
      <label className="sn-search-field">
        <IconSearch />
        <input
          ref={input}
          value={q}
          placeholder="Search the drawing"
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
      {q || hits.length > 0 ? (
        <ul role="listbox" aria-label="Results">
          {hits.length === 0 ? (
            <li className="sn-muted">{q ? "Nothing matches." : "Type to search."}</li>
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
                      {kindLabel(h.kind)}
                      <span aria-hidden> · </span>
                      {h.community}
                    </em>
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
