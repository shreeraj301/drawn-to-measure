import { KINDS } from "./model";
import type { CameraView } from "@/state/store";

export type HashState = {
  node?: string;
  view?: CameraView;
  kindsOff?: string[];
  inferred?: boolean;
  extracted?: boolean;
  confidence?: number;
  tour?: string;
  path?: [string, string];
};

const VIEWS: CameraView[] = ["perspective", "plan", "elevation", "axonometric"];

export function readHash(hash: string): HashState {
  const raw = hash.startsWith("#") ? hash.slice(1) : hash;
  const params = new URLSearchParams(raw);
  const out: HashState = {};
  const node = params.get("node");
  if (node) out.node = node;
  const view = params.get("view");
  if (view && (VIEWS as string[]).includes(view)) out.view = view as CameraView;
  const kinds = params.get("kinds");
  if (kinds) {
    const off = kinds
      .split(",")
      .map((s) => s.trim())
      .filter((s) => KINDS.includes(s));
    if (off.length) out.kindsOff = off;
  }
  if (params.get("inferred") === "0") out.inferred = false;
  if (params.get("extracted") === "0") out.extracted = false;
  const conf = params.get("confidence");
  if (conf != null && conf !== "") {
    const n = Number(conf);
    if (!Number.isNaN(n)) out.confidence = Math.min(1, Math.max(0, n));
  }
  const tour = params.get("tour");
  if (tour) out.tour = tour;
  const path = params.get("path");
  if (path && path.includes(",")) {
    const [a, b] = path.split(",");
    if (a && b) out.path = [a, b];
  }
  return out;
}

export function writeHash(state: HashState): string {
  const params = new URLSearchParams();
  if (state.node) params.set("node", state.node);
  if (state.view && state.view !== "perspective") params.set("view", state.view);
  if (state.kindsOff && state.kindsOff.length) params.set("kinds", state.kindsOff.join(","));
  if (state.inferred === false) params.set("inferred", "0");
  if (state.extracted === false) params.set("extracted", "0");
  if (state.confidence != null && state.confidence > 0) {
    params.set("confidence", String(Math.round(state.confidence * 100) / 100));
  }
  if (state.tour) params.set("tour", state.tour);
  if (state.path) params.set("path", `${state.path[0]},${state.path[1]}`);
  const s = params.toString();
  return s ? `#${s}` : "";
}
