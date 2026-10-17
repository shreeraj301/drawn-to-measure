import { useEffect, useState } from "react";
import { EDGE_COUNT, NODE_COUNT } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";

const VIEW_LABEL: Record<string, string> = {
  perspective: "Perspective",
  plan: "Plan",
  elevation: "Elevation",
  axonometric: "Axonometric",
};

export function TitleBlock() {
  const view = useGraphStore((s) => s.view);
  const [bearing, setBearing] = useState(0);

  useEffect(() => {
    const on = (e: Event) => {
      const deg = (e as CustomEvent<number>).detail;
      if (typeof deg === "number") setBearing(deg);
    };
    window.addEventListener("sn-bearing", on);
    return () => window.removeEventListener("sn-bearing", on);
  }, []);

  return (
    <aside className="sn-titleblock" aria-label="Drawing title block">
      <div className="sn-titleblock-north" aria-hidden>
        <svg viewBox="0 0 32 40" className="sn-north" style={{ transform: `rotate(${bearing}deg)` }}>
          <path d="M16 2 L20 16 L16 13 L12 16 Z" fill="currentColor" />
          <path d="M16 38 L12 24 L16 27 L20 24 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <text x="16" y="21" textAnchor="middle" fontSize="6" fill="currentColor">
            N
          </text>
        </svg>
      </div>
      <div className="sn-titleblock-body">
        <p className="sn-kicker">Drawn to Measure</p>
        <p className="sn-titleblock-name">Shreeraj Narwade</p>
        <dl>
          <div>
            <dt>Sheet</dt>
            <dd>01 of 01</dd>
          </div>
          <div>
            <dt>Nodes</dt>
            <dd className="tabular">{NODE_COUNT}</dd>
          </div>
          <div>
            <dt>Edges</dt>
            <dd className="tabular">{EDGE_COUNT}</dd>
          </div>
          <div>
            <dt>View</dt>
            <dd>{VIEW_LABEL[view] ?? view}</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>2026.10.17</dd>
          </div>
          <div>
            <dt>Scale</dt>
            <dd>1 : graph</dd>
          </div>
        </dl>
      </div>
    </aside>
  );
}
