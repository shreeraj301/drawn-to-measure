import { useEffect, useState } from "react";
import { useGraphStore } from "@/state/store";

/**
 * A short title over the drawing. It does not take pointer events,
 * so the sheet can be used while it is up. A key skips it.
 */
export function Intro() {
  const done = useGraphStore((s) => s.introDone);
  const reduced = useGraphStore((s) => s.reducedMotion);
  const setDone = useGraphStore((s) => s.setIntroDone);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (useGraphStore.getState().introDone || reduced) {
      setDone(true);
      return;
    }
    const timers = [
      window.setTimeout(() => setPhase(1), 280),
      window.setTimeout(() => setPhase(2), 700),
      window.setTimeout(() => setDone(true), 2600),
    ];
    const skip = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      timers.forEach((t) => window.clearTimeout(t));
      setDone(true);
    };
    window.addEventListener("keydown", skip);
    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("keydown", skip);
    };
  }, [reduced, setDone]);

  if (done) return null;

  return (
    <div className="sn-intro">
      <div className={`sn-intro-card ${phase >= 1 ? "is-on" : ""}`}>
        <p className="sn-intro-line">A drawing of one person</p>
        <h1 className={phase >= 2 ? "is-on" : ""}>Shreeraj Narwade, drawn to measure</h1>
        <p className="sn-intro-skip">Press any key to skip</p>
      </div>
    </div>
  );
}
