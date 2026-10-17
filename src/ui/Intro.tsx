import { useEffect, useState } from "react";
import { useGraphStore } from "@/state/store";

/**
 * Plan-to-perspective title. The camera flight lives in CameraRig.
 * Any key or click skips it. Reduced motion skips entirely.
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
      window.setTimeout(() => setPhase(1), 700),
      window.setTimeout(() => setPhase(2), 1500),
      window.setTimeout(() => setDone(true), 8200),
    ];
    const skip = () => {
      timers.forEach((t) => window.clearTimeout(t));
      setDone(true);
    };
    window.addEventListener("pointerdown", skip, { once: true });
    window.addEventListener("keydown", skip, { once: true });
    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
    };
  }, [reduced, setDone]);

  if (done) return null;

  return (
    <div className="sn-intro">
      <div className={`sn-intro-card ${phase >= 1 ? "is-on" : ""}`}>
        <p className="sn-intro-line">A drawing of one person</p>
        <h1 className={phase >= 2 ? "is-on" : ""}>Shreeraj Narwade, drawn to measure</h1>
        <p className="sn-intro-skip">Click or press any key to skip</p>
      </div>
    </div>
  );
}
