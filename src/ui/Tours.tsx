import { TOURS, tourById } from "@/lib/graph/tours";
import { getNode } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";
import { Pause, Play, X } from "lucide-react";

export function ToursMenu() {
  const open = useGraphStore((s) => s.toursOpen);
  const start = useGraphStore((s) => s.startTour);
  if (!open) return null;
  return (
    <section className="sn-panel sn-tours" aria-label="Guided tours">
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
    </section>
  );
}

export function TourCaption() {
  const tourId = useGraphStore((s) => s.tourId);
  const step = useGraphStore((s) => s.tourStep);
  const playing = useGraphStore((s) => s.tourPlaying);
  const setPlaying = useGraphStore((s) => s.setTourPlaying);
  const setStep = useGraphStore((s) => s.setTourStep);
  const stop = useGraphStore((s) => s.stopTour);
  const tour = tourId ? tourById(tourId) : undefined;
  if (!tour) return null;
  const stopData = tour.stops[step];
  const node = stopData ? getNode(stopData.nodeId) : undefined;
  const caption = stopData?.caption || node?.description || "";

  return (
    <div className="sn-tour" role="status">
      <p className="sn-kicker">
        {tour.title}
        <span className="tabular">
          {" "}
          {step + 1} / {tour.stops.length}
        </span>
      </p>
      {node ? <h2>{node.label}</h2> : null}
      {caption ? <p className="sn-prose">{caption}</p> : null}
      <div className="sn-tour-actions">
        <button type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step <= 0}>
          Back
        </button>
        <button type="button" onClick={() => setPlaying(!playing)} aria-pressed={playing}>
          {playing ? <Pause /> : <Play />}
          {playing ? "Pause" : "Play"}
        </button>
        <button
          type="button"
          onClick={() => setStep(Math.min(tour.stops.length - 1, step + 1))}
          disabled={step >= tour.stops.length - 1}
        >
          Next
        </button>
        <button type="button" onClick={stop} aria-label="End tour">
          <X />
        </button>
      </div>
    </div>
  );
}
