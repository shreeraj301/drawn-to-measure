import {
  AudioLines,
  AudioWaveform,
  Box,
  Compass,
  Filter,
  HelpCircle,
  Layers3,
  Route,
  Search,
  Square,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useGraphStore, type CameraView, type NodeStyle } from "@/state/store";

const VIEWS: { id: CameraView; label: string; hint: string; key: string; icon: typeof Square }[] = [
  { id: "plan", label: "Plan", hint: "Top-down", key: "1", icon: Square },
  { id: "elevation", label: "Elevation", hint: "Side view", key: "2", icon: Layers3 },
  { id: "axonometric", label: "Axonometric", hint: "Angled", key: "3", icon: Box },
  { id: "perspective", label: "Perspective", hint: "Camera", key: "4", icon: Compass },
];

export function Toolbar() {
  const view = useGraphStore((s) => s.view);
  const setView = useGraphStore((s) => s.setView);
  const setPalette = useGraphStore((s) => s.setPaletteOpen);
  const paletteOpen = useGraphStore((s) => s.paletteOpen);
  const sideTab = useGraphStore((s) => s.sideTab);
  const setSideTab = useGraphStore((s) => s.setSideTab);
  const helpOpen = useGraphStore((s) => s.helpOpen);
  const setHelp = useGraphStore((s) => s.setHelpOpen);
  const sound = useGraphStore((s) => s.soundOn);
  const setSound = useGraphStore((s) => s.setSoundOn);
  const mobile = useGraphStore((s) => s.mobile);
  const nodeStyle = useGraphStore((s) => s.nodeStyle);
  const setNodeStyle = useGraphStore((s) => s.setNodeStyle);
  const [flying, setFlying] = useState(false);

  useEffect(() => {
    const onFly = (e: Event) => setFlying(Boolean((e as CustomEvent<boolean>).detail));
    window.addEventListener("sn-fly", onFly);
    return () => window.removeEventListener("sn-fly", onFly);
  }, []);

  const toggle = (tab: "filters" | "communities" | "tours") => {
    setSideTab(sideTab === tab ? null : tab);
  };

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
              title={v.hint}
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
        <button type="button" aria-pressed={paletteOpen} onClick={() => setPalette(!paletteOpen)} aria-keyshortcuts="/ Meta+K">
          <Search aria-hidden />
          <span>Search</span>
        </button>
        <button type="button" aria-pressed={sideTab === "filters"} onClick={() => toggle("filters")}>
          <Filter aria-hidden />
          <span>Filters</span>
        </button>
        <button type="button" aria-pressed={sideTab === "communities"} onClick={() => toggle("communities")}>
          <Layers3 aria-hidden />
          <span>Communities</span>
        </button>
        <button type="button" aria-pressed={sideTab === "tours"} onClick={() => toggle("tours")}>
          <Route aria-hidden />
          <span>Tours</span>
        </button>
        <button
          type="button"
          aria-pressed={nodeStyle === "stamps"}
          onClick={() => setNodeStyle(nodeStyle === "instruments" ? "stamps" : "instruments")}
          title={nodeStyle === "instruments" ? "Flat stamps" : "Standing instruments"}
        >
          <span>{nodeStyle === "instruments" ? "Instruments" : "Stamps"}</span>
        </button>
        <button type="button" aria-pressed={helpOpen} onClick={() => setHelp(!helpOpen)} aria-label="Keyboard guide">
          <HelpCircle aria-hidden />
        </button>
        <button type="button" aria-pressed={sound} onClick={() => setSound(!sound)} aria-label={sound ? "Sound on" : "Sound off"}>
          {sound ? <AudioLines aria-hidden /> : <AudioWaveform aria-hidden />}
        </button>
        {!mobile ? (
          <span className="sn-fly-hint" data-on={flying ? "1" : "0"} title="Move through the sheet">
            {flying ? "Fly: WASD, Shift, Esc" : "F to fly through the sheet"}
          </span>
        ) : null}
      </div>
    </header>
  );
}
