import { Component, type ReactNode } from "react";
import { COMMUNITIES, NODES } from "@/lib/graph/model";
import { communityFamily } from "@/lib/graph/colors";
import { useGraphStore } from "@/state/store";

export function DrawingFallback({ reason }: { reason?: string }) {
  const select = useGraphStore((s) => s.select);
  return (
    <div className="sn-fallback">
      <p className="sn-kicker">Drawn to Measure</p>
      <h1>The drawing, as a list</h1>
      <p>
        {reason ?? "The sheet could not be drawn."} Two hundred and four things, grouped by chapter. Choose one to open it.
      </p>
      <button type="button" className="sn-text-btn" onClick={() => window.location.reload()}>
        Reload drawing
      </button>
      {COMMUNITIES.map((c) => (
        <section key={c.id}>
          <h2>
            {c.name} <span>{communityFamily(c.id)}</span>
          </h2>
          <ul>
            {NODES.filter((n) => n.community === c.id).map((n) => (
              <li key={n.id}>
                <button type="button" onClick={() => select(n.id)}>
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

type BoundaryState = { error: Error | null };

export class DrawingBoundary extends Component<{ children: ReactNode }, BoundaryState> {
  state: BoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): BoundaryState {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (this.state.error) {
      return <DrawingFallback reason="Something on the sheet failed. The list below still works." />;
    }
    return this.props.children;
  }
}
