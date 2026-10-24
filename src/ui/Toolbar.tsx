import { useEffect, useRef, useState } from "react";
import { useGraphStore, type CameraView } from "@/state/store";
import {
  IconAxo,
  IconElevation,
  IconFilter,
  IconHelp,
  IconLayers,
  IconMenu,
  IconPerspective,
  IconPlan,
  IconRoute,
  IconSearch,
  IconSoundOff,
  IconSoundOn,
} from "./Icons";

const VIEWS: { id: CameraView; label: string; hint: string; key: string; icon: typeof IconPlan }[] = [
  { id: "plan", label: "Plan", hint: "Top-down", key: "1", icon: IconPlan },
  { id: "elevation", label: "Elevation", hint: "Side view", key: "2", icon: IconElevation },
  { id: "axonometric", label: "Axonometric", hint: "Angled", key: "3", icon: IconAxo },
  { id: "perspective", label: "Perspective", hint: "Camera", key: "4", icon: IconPerspective },
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
  const startTour = useGraphStore((s) => s.startTour);
  const [flying, setFlying] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onFly = (e: Event) => setFlying(Boolean((e as CustomEvent<boolean>).detail));
    window.addEventListener("sn-fly", onFly);
    return () => window.removeEventListener("sn-fly", onFly);
  }, []);

  useEffect(() => {
    if (!toolsOpen) return;
    const onDown = (e: PointerEvent) => {
      const el = toolsRef.current;
      if (el && e.target instanceof Node && el.contains(e.target)) return;
      setToolsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setToolsOpen(false);
    };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [toolsOpen]);

  const toggle = (tab: "filters" | "communities" | "tours") => {
    setSideTab(sideTab === tab ? null : tab);
    setToolsOpen(false);
  };

  const takeTour = () => {
    useGraphStore.getState().setIntroDone(true);
    startTour("pivot");
    setToolsOpen(false);
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
              <Icon />
              <span>{v.label}</span>
              <kbd>{v.key}</kbd>
            </button>
          );
        })}
      </nav>
      <div className="sn-toolbar-end">
        <button type="button" className="sn-tour-go" onClick={takeTour}>
          Take the tour
        </button>
        <div className="sn-tools" ref={toolsRef}>
          <button
            type="button"
            aria-expanded={toolsOpen}
            aria-haspopup="menu"
            aria-label="Drawing tools"
            onClick={() => setToolsOpen((v) => !v)}
          >
            <IconMenu />
            <span className="sn-tools-label">Drawing tools</span>
          </button>
          {toolsOpen ? (
            <div className="sn-tools-menu" role="menu">
              {mobile
                ? VIEWS.map((v) => {
                    const Icon = v.icon;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        role="menuitem"
                        aria-pressed={view === v.id}
                        onClick={() => {
                          setView(v.id);
                          setToolsOpen(false);
                        }}
                      >
                        <Icon />
                        <span>{v.label}</span>
                        <kbd>{v.key}</kbd>
                      </button>
                    );
                  })
                : null}
              <button type="button" role="menuitem" aria-pressed={paletteOpen} onClick={() => { setPalette(!paletteOpen); setToolsOpen(false); }}>
                <IconSearch />
                <span>Search</span>
              </button>
              <button type="button" role="menuitem" aria-pressed={sideTab === "filters"} onClick={() => toggle("filters")}>
                <IconFilter />
                <span>Filters</span>
              </button>
              <button type="button" role="menuitem" aria-pressed={sideTab === "communities"} onClick={() => toggle("communities")}>
                <IconLayers />
                <span>Communities</span>
              </button>
              <button type="button" role="menuitem" aria-pressed={sideTab === "tours"} onClick={() => toggle("tours")}>
                <IconRoute />
                <span>Tours</span>
              </button>
              <button type="button" role="menuitem" aria-pressed={helpOpen} onClick={() => { setHelp(!helpOpen); setToolsOpen(false); }}>
                <IconHelp />
                <span>Keyboard guide</span>
              </button>
              <button type="button" role="menuitem" aria-pressed={sound} onClick={() => setSound(!sound)}>
                {sound ? <IconSoundOn /> : <IconSoundOff />}
                <span>{sound ? "Sound on" : "Sound off"}</span>
              </button>
              <p className="sn-tools-note">{flying ? "Fly: WASD, Shift, Esc" : mobile ? "Drag to orbit the sheet" : "F to fly through the sheet"}</p>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
