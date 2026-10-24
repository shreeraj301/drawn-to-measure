import { TOURS, tourById } from "@/lib/graph/tours";
import { getNode } from "@/lib/graph/model";
import { useGraphStore } from "@/state/store";
import { Pause, Play, X } from "lucide-react";

export function ToursMenu() {
  return null;
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
    <div className="sn-tourbar" role="status">
      <div className="sn-tourbar-text">
        <p className="sn-kicker">
          {tour.title}
          <span className="tabular">
            {" "}
            {step + 1} / {tour.stops.length}
          </span>
        </p>
        {node ? <h2>{node.label}</h2> : null}
        {caption ? <p>{caption}</p> : null}
      </div>
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
