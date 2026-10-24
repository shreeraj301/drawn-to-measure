import { useEffect, useState } from "react";
import { GraphScene } from "@/scene/GraphScene";
import { readHash, writeHash } from "@/lib/graph/hash";
import { getNode, neighborsOf } from "@/lib/graph/model";
import { tourById } from "@/lib/graph/tours";
import { useGraphStore } from "@/state/store";
import { CommandPalette } from "./CommandPalette";
import { DetailPanel } from "./DetailPanel";
import { Intro } from "./Intro";
import { NodeList } from "./NodeList";
import { SidePanel } from "./SidePanel";
import { TitleBlock } from "./TitleBlock";
import { Toolbar } from "./Toolbar";
import { TourCaption } from "./Tours";
import { DrawingBoundary, DrawingFallback } from "./DrawingFallback";
import { HoverCard } from "./HoverCard";
import { HelpGuide } from "./HelpGuide";
import { SelectionCaption } from "./SelectionCaption";
import { playHover, playSelect } from "./sound";

export function AppShell() {
  const select = useGraphStore((s) => s.select);
  const setView = useGraphStore((s) => s.setView);
  const setReduced = useGraphStore((s) => s.setReducedMotion);
  const setMobile = useGraphStore((s) => s.setMobile);
  const setPalette = useGraphStore((s) => s.setPaletteOpen);
  const paletteOpen = useGraphStore((s) => s.paletteOpen);
  const [webgl] = useState(() => {
    if (typeof document === "undefined") return true;
    try {
      const canvas = document.createElement("canvas");
      return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    const mobileMq = window.matchMedia("(max-width: 760px)");
    const applyM = () => setMobile(mobileMq.matches);
    applyM();
    mobileMq.addEventListener("change", applyM);
    const themeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (themeMq.matches) useGraphStore.getState().setTheme("night");
    const applyTheme = () => {
      document.documentElement.dataset.theme = useGraphStore.getState().theme;
    };
    applyTheme();
    const unsubTheme = useGraphStore.subscribe(applyTheme);

    const hash = readHash(window.location.hash);
    if (hash.view) setView(hash.view);
    if (hash.kindsOff) {
      for (const k of hash.kindsOff) useGraphStore.getState().toggleKind(k);
    }
    if (hash.inferred === false) useGraphStore.getState().setShowInferred(false);
    if (hash.extracted === false) useGraphStore.getState().setShowExtracted(false);
    if (hash.confidence != null) useGraphStore.getState().setMinConfidence(hash.confidence);
    if (hash.path) {
      useGraphStore.getState().setPathFrom(hash.path[0]);
      useGraphStore.getState().setPathTo(hash.path[1]);
    }
    if (hash.node && getNode(hash.node)) {
      useGraphStore.getState().setIntroDone(true);
      useGraphStore.getState().select(hash.node);
    }
    if (hash.tour && tourById(hash.tour)) {
      useGraphStore.getState().setIntroDone(true);
      useGraphStore.getState().startTour(hash.tour);
    }

    return () => {
      mq.removeEventListener("change", apply);
      mobileMq.removeEventListener("change", applyM);
      unsubTheme();
    };
  }, [select, setMobile, setReduced, setView]);

  useEffect(() => {
    let last = window.location.hash;
    let primed = false;
    const timer = window.setTimeout(() => {
      primed = true;
    }, 400);
    const unsub = useGraphStore.subscribe((s) => {
      if (!primed) return;
      const kindsOff = Object.entries(s.kinds)
        .filter(([, on]) => !on)
        .map(([k]) => k);
      const next = writeHash({
        node: s.selectedId ?? undefined,
        view: s.view,
        kindsOff,
        inferred: s.showInferred,
        extracted: s.showExtracted,
        confidence: s.minConfidence,
        tour: s.tourId ?? undefined,
        path: s.pathFrom && s.pathTo ? [s.pathFrom, s.pathTo] : undefined,
      });
      if (next !== last) {
        last = next;
        const url = `${window.location.pathname}${window.location.search}${next}`;
        window.history.replaceState(null, "", url);
      }
    });
    return () => {
      window.clearTimeout(timer);
      unsub();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if ((e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) && !typing) {
        e.preventDefault();
        setPalette(!useGraphStore.getState().paletteOpen);
        return;
      }
      if (e.key === "Escape") {
        const s = useGraphStore.getState();
        if (s.paletteOpen) { s.setPaletteOpen(false); return; }
        if (s.helpOpen) { s.setHelpOpen(false); return; }
        if (s.sideTab) { s.setSideTab(null); return; }
        if (s.selectedId) { s.select(null, { push: false }); return; }
        if (s.tourId) { s.stopTour(); return; }
      }
      if (e.key === "?" && !typing) {
        e.preventDefault();
        useGraphStore.getState().setHelpOpen(!useGraphStore.getState().helpOpen);
        return;
      }
      if (typing) return;
      const viewKeys: Record<string, "plan" | "elevation" | "axonometric" | "perspective"> = {
        Digit1: "plan",
        Digit2: "elevation",
        Digit3: "axonometric",
        Digit4: "perspective",
      };
      if (viewKeys[e.code]) {
        useGraphStore.getState().setView(viewKeys[e.code]);
        return;
      }
      const s = useGraphStore.getState();
      if (s.tourId && (e.code === "Space" || e.key === " ")) {
        e.preventDefault();
        s.setTourPlaying(!s.tourPlaying);
      }
      if (s.tourId && e.code === "ArrowRight") {
        const tour = tourById(s.tourId);
        if (tour) s.setTourStep(Math.min(tour.stops.length - 1, s.tourStep + 1));
      }
      if (s.tourId && e.code === "ArrowLeft") {
        s.setTourStep(Math.max(0, s.tourStep - 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paletteOpen, setPalette]);

  useEffect(() => {
    let prevHover: string | null = null;
    let prevSel: string | null = null;
    return useGraphStore.subscribe((s) => {
      if (s.hoveredId && s.hoveredId !== prevHover) playHover(s.soundOn);
      if (s.selectedId && s.selectedId !== prevSel) playSelect(s.soundOn);
      prevHover = s.hoveredId;
      prevSel = s.selectedId;
    });
  }, []);

  useTourDriver();

  return (
    <div className="sn-app">
      <svg className="sn-rough-defs" width="0" height="0" aria-hidden>
        <filter id="rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="2.2" />
        </filter>
      </svg>
      <a className="sn-skip" href="#node-list">Skip to the list of nodes</a>
      <Toolbar />
      <div className="sn-frame">
        <SidePanel />
        <div className="sn-stage">
          <DrawingBoundary>
            {webgl ? <GraphScene /> : <DrawingFallback reason="This browser cannot draw WebGL." />}
          </DrawingBoundary>
          <HoverCard />
          <SelectionCaption />
          <TitleBlock />
        </div>
        <DetailPanel />
      </div>
      <TourCaption />
      <CommandPalette />
      <HelpGuide />
      <NodeList />
      <Intro />
    </div>
  );
}

function useTourDriver() {
  const tourId = useGraphStore((s) => s.tourId);
  const step = useGraphStore((s) => s.tourStep);
  const playing = useGraphStore((s) => s.tourPlaying);
  const select = useGraphStore((s) => s.select);

  useEffect(() => {
    if (!tourId) return;
    const tour = tourById(tourId);
    const stop = tour?.stops[step];
    if (!stop) return;
    const ids = [stop.nodeId, ...neighborsOf(stop.nodeId).slice(0, 8)];
    select(stop.nodeId, { frameIds: ids });
  }, [tourId, step, select]);

  useEffect(() => {
    if (!tourId || !playing) return;
    if (useGraphStore.getState().reducedMotion) return;
    const tour = tourById(tourId);
    if (!tour) return;
    const timer = window.setInterval(() => {
      const s = useGraphStore.getState();
      if (!s.tourPlaying || s.tourId !== tourId) return;
      if (s.tourStep >= tour.stops.length - 1) {
        s.setTourPlaying(false);
        return;
      }
      s.setTourStep(s.tourStep + 1);
    }, 4600);
    return () => window.clearInterval(timer);
  }, [tourId, playing, step]);
}
