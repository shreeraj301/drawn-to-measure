import { create } from "zustand";
import { KINDS } from "@/lib/graph/model";

export type NodeStyle = "instruments" | "stamps";

export type CameraView = "perspective" | "plan" | "elevation" | "axonometric";

export type FocusRequest = {
  id: number;
  nodeId: string | null;
  /** When set, frame these nodes (selection plus neighbours). */
  frameIds?: string[];
  view?: CameraView;
};

type GraphState = {
  selectedId: string | null;
  hoveredId: string | null;
  history: string[];
  historyIndex: number;

  kinds: Record<string, boolean>;
  showExtracted: boolean;
  showInferred: boolean;
  minConfidence: number;

  view: CameraView;
  focus: FocusRequest;
  focusSeq: number;

  communityFocus: number | null;
  reducedMotion: boolean;
  introDone: boolean;
  idle: boolean;

  paletteOpen: boolean;
  sideTab: "filters" | "communities" | "tours" | null;
  helpOpen: boolean;

  pathFrom: string | null;
  pathTo: string | null;
  pathNodes: string[] | null;
  pathHop: number;

  tourId: string | null;
  tourStep: number;
  tourPlaying: boolean;

  soundOn: boolean;
  mobile: boolean;
  nodeStyle: NodeStyle;
  /** Bumps while community springs are sliding, so edges can follow. */
  motionTick: number;

  select: (id: string | null, opts?: { push?: boolean; frameIds?: string[] }) => void;
  hover: (id: string | null) => void;
  historyBack: () => void;
  historyForward: () => void;

  toggleKind: (kind: string) => void;
  setShowExtracted: (v: boolean) => void;
  setShowInferred: (v: boolean) => void;
  setMinConfidence: (v: number) => void;

  setView: (view: CameraView) => void;
  requestFocus: (nodeId: string | null, frameIds?: string[]) => void;
  setCommunityFocus: (id: number | null) => void;
  setReducedMotion: (v: boolean) => void;
  setIntroDone: (v: boolean) => void;
  setIdle: (v: boolean) => void;

  setPaletteOpen: (v: boolean) => void;
  setSideTab: (v: "filters" | "communities" | "tours" | null) => void;
  setHelpOpen: (v: boolean) => void;

  setPathFrom: (id: string | null) => void;
  setPathTo: (id: string | null) => void;
  setPath: (nodes: string[] | null) => void;
  setPathHop: (i: number) => void;

  startTour: (id: string) => void;
  setTourStep: (i: number) => void;
  setTourPlaying: (v: boolean) => void;
  stopTour: () => void;

  setSoundOn: (v: boolean) => void;
  setMobile: (v: boolean) => void;
  setNodeStyle: (v: NodeStyle) => void;
  bumpMotion: () => void;

  touchActivity: () => void;
  lastActivity: number;
};

const kindsOn = Object.fromEntries(KINDS.map((k) => [k, true]));

export const useGraphStore = create<GraphState>((set, get) => ({
  selectedId: null,
  hoveredId: null,
  history: [],
  historyIndex: -1,

  kinds: kindsOn,
  showExtracted: true,
  showInferred: true,
  minConfidence: 0,

  view: "perspective",
  focus: { id: 0, nodeId: null },
  focusSeq: 0,

  communityFocus: null,
  reducedMotion: false,
  introDone: false,
  idle: false,

  paletteOpen: false,
  sideTab: null,
  helpOpen: false,

  pathFrom: null,
  pathTo: null,
  pathNodes: null,
  pathHop: 0,

  tourId: null,
  tourStep: 0,
  tourPlaying: false,

  soundOn: false,
  mobile: false,
  nodeStyle: "instruments",
  motionTick: 0,
  lastActivity: 0,

  select: (id, opts) => {
    const push = opts?.push !== false;
    const state = get();
    let history = state.history;
    let historyIndex = state.historyIndex;
    if (push && id && id !== state.selectedId) {
      history = history.slice(0, historyIndex + 1);
      history.push(id);
      if (history.length > 40) history = history.slice(history.length - 40);
      historyIndex = history.length - 1;
    }
    const seq = state.focusSeq + 1;
    set({
      selectedId: id,
      history,
      historyIndex,
      focusSeq: seq,
      focus: { id: seq, nodeId: id, frameIds: opts?.frameIds },
      idle: false,
      lastActivity: performance.now(),
    });
  },
  hover: (id) => set({ hoveredId: id }),
  historyBack: () => {
    const { history, historyIndex } = get();
    if (historyIndex <= 0) return;
    const next = historyIndex - 1;
    const id = history[next] ?? null;
    const seq = get().focusSeq + 1;
    set({
      historyIndex: next,
      selectedId: id,
      focusSeq: seq,
      focus: { id: seq, nodeId: id },
    });
  },
  historyForward: () => {
    const { history, historyIndex } = get();
    if (historyIndex >= history.length - 1) return;
    const next = historyIndex + 1;
    const id = history[next] ?? null;
    const seq = get().focusSeq + 1;
    set({
      historyIndex: next,
      selectedId: id,
      focusSeq: seq,
      focus: { id: seq, nodeId: id },
    });
  },

  toggleKind: (kind) =>
    set((s) => ({ kinds: { ...s.kinds, [kind]: !s.kinds[kind] }, lastActivity: performance.now() })),
  setShowExtracted: (v) => set({ showExtracted: v }),
  setShowInferred: (v) => set({ showInferred: v }),
  setMinConfidence: (v) => set({ minConfidence: v }),

  setView: (view) => {
    const seq = get().focusSeq + 1;
    set({
      view,
      focusSeq: seq,
      focus: { ...get().focus, id: seq, view },
      idle: false,
      lastActivity: performance.now(),
    });
  },
  requestFocus: (nodeId, frameIds) => {
    const seq = get().focusSeq + 1;
    set({ focusSeq: seq, focus: { id: seq, nodeId, frameIds }, idle: false });
  },
  setCommunityFocus: (id) =>
    set({ communityFocus: id, idle: false, lastActivity: performance.now() }),
  setReducedMotion: (v) => set({ reducedMotion: v, introDone: v ? true : get().introDone }),
  setIntroDone: (v) => set({ introDone: v }),
  setIdle: (v) => set({ idle: v }),

  setPaletteOpen: (v) => set({ paletteOpen: v }),
  setSideTab: (v) => set({ sideTab: v, helpOpen: false, paletteOpen: false }),
  setHelpOpen: (v) => set({ helpOpen: v, sideTab: v ? null : get().sideTab }),

  setPathFrom: (id) => set({ pathFrom: id }),
  setPathTo: (id) => set({ pathTo: id }),
  setPath: (nodes) => set({ pathNodes: nodes, pathHop: 0 }),
  setPathHop: (i) => set({ pathHop: i }),

  startTour: (id) =>
    set({
      tourId: id,
      tourStep: 0,
      tourPlaying: true,
      sideTab: null,
      communityFocus: null,
      idle: false,
      lastActivity: performance.now(),
    }),
  setTourStep: (i) => set({ tourStep: i, tourPlaying: true }),
  setTourPlaying: (v) => set({ tourPlaying: v }),
  stopTour: () => set({ tourId: null, tourStep: 0, tourPlaying: false }),

  setSoundOn: (v) => set({ soundOn: v }),
  setMobile: (v) => set({ mobile: v }),
  setNodeStyle: (v) => set({ nodeStyle: v }),
  bumpMotion: () => set((s) => ({ motionTick: (s.motionTick + 1) % 100000 })),
  touchActivity: () => set({ idle: false, lastActivity: performance.now() }),
}));
