import {
  AudioLines,
  AudioWaveform,
  Box,
  Compass,
  Filter,
  Layers3,
  Route,
  Search,
  Square,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useGraphStore, type CameraView } from "@/state/store";

const VIEWS: { id: CameraView; label: string; key: string; icon: typeof Square }[] = [
  { id: "plan", label: "Plan", key: "1", icon: Square },
  { id: "elevation", label: "Elevation", key: "2", icon: Layers3 },
  { id: "axonometric", label: "Axonometric", key: "3", icon: Box },
  { id: "perspective", label: "Perspective", key: "4", icon: Compass },
];

export function Toolbar() {
  const view = useGraphStore((s) => s.view);
  const setView = useGraphStore((s) => s.setView);
  const setPalette = useGraphStore((s) => s.setPaletteOpen);
  const filtersOpen = useGraphStore((s) => s.filtersOpen);
  const setFilters = useGraphStore((s) => s.setFiltersOpen);
  const toursOpen = useGraphStore((s) => s.toursOpen);
  const setTours = useGraphStore((s) => s.setToursOpen);
  const legendOpen = useGraphStore((s) => s.legendOpen);
  const setLegend = useGraphStore((s) => s.setLegendOpen);
  const sound = useGraphStore((s) => s.soundOn);
  const setSound = useGraphStore((s) => s.setSoundOn);
  const mobile = useGraphStore((s) => s.mobile);
  const [flying, setFlying] = useState(false);

  useEffect(() => {
    const onFly = (e: Event) => setFlying(Boolean((e as CustomEvent<boolean>).detail));
    window.addEventListener("sn-fly", onFly);
    return () => window.removeEventListener("sn-fly", onFly);
  }, []);

  return (
    <header className="sn-toolbar">
      <div className="sn-brand">
        <span className="sn-mark" aria-hidden />
        <div>
          <p className="sn-kicker">Sheet 01</p>
          <p className="sn-brand-name">Drawn to Measure</p>
        </div>
      </div>
      <nav aria-label="View presets">
        {VIEWS.map((v) => {
          const Icon = v.icon;
          const on = view === v.id;
          return (
            <button
              key={v.id}
              type="button"
              aria-pressed={on}
              className={on ? "is-on" : ""}
              onClick={() => setView(v.id)}
            >
              <Icon aria-hidden />
              <span>{v.label}</span>
              <kbd>{v.key}</kbd>
            </button>
          );
        })}
      </nav>
      <div className="sn-toolbar-actions">
        <button type="button" onClick={() => setPalette(true)} aria-keyshortcuts="/ Meta+K">
          <Search aria-hidden />
          <span>Search</span>
        </button>
        <button type="button" aria-pressed={filtersOpen} onClick={() => setFilters(!filtersOpen)}>
          <Filter aria-hidden />
          <span>Filters</span>
        </button>
        <button type="button" aria-pressed={toursOpen} onClick={() => setTours(!toursOpen)}>
          <Route aria-hidden />
          <span>Tours</span>
        </button>
        <button type="button" aria-pressed={legendOpen} onClick={() => setLegend(!legendOpen)}>
          <Layers3 aria-hidden />
          <span>Legend</span>
        </button>
        <button
          type="button"
          aria-pressed={sound}
          onClick={() => setSound(!sound)}
          aria-label={sound ? "Sound on" : "Sound off"}
        >
          {sound ? <AudioLines aria-hidden /> : <AudioWaveform aria-hidden />}
        </button>
        {!mobile ? (
          <span className="sn-fly-hint" data-on={flying ? "1" : "0"}>
            {flying ? "Fly: WASD, Shift, Esc" : "F to fly"}
          </span>
        ) : null}
      </div>
    </header>
  );
}
