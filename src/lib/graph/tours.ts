import { getNode } from "./model";

export type TourStop = {
  nodeId: string;
  /** Optional one-line caption. Falls back to the node's own description. */
  caption?: string;
};

export type Tour = {
  id: string;
  title: string;
  blurb: string;
  stops: TourStop[];
};

function stop(nodeId: string, caption?: string): TourStop {
  return caption ? { nodeId, caption } : { nodeId };
}

/**
 * Camera paths through nodes that exist in the graph.
 * Captions quote the node's own description, never invented biography.
 */
export const TOURS: Tour[] = [
  {
    id: "pivot",
    title: "The pivot",
    blurb: "Architecture school, the thesis, then the turn toward product and HCI.",
    stops: [
      stop("shreeraj"),
      stop("barch_sea"),
      stop("between_the_edges"),
      stop("syntax_of_behavior"),
      stop("th_affordances"),
      stop("goal_product_design"),
      stop("goal_masters"),
    ].filter((s) => getNode(s.nodeId)),
  },
  {
    id: "play",
    title: "Where I play",
    blurb: "The Linktree sites and the work that lives beside the portfolio.",
    stops: [
      stop("ch_linktree"),
      stop("orbital"),
      stop("warp"),
      stop("ashline"),
      stop("resonance"),
      stop("th_play"),
      stop("showreel"),
    ].filter((s) => getNode(s.nodeId)),
  },
  {
    id: "gatech",
    title: "The road to Georgia Tech",
    blurb: "The 2027 HCI shortlist, with Georgia Tech as a named stop.",
    stops: [
      stop("goal_masters"),
      stop("gt_mshci"),
      stop("cmu_mhci"),
      stop("bench"),
      stop("ut_austin"),
      stop("uw_mhcid"),
    ].filter((s) => getNode(s.nodeId)),
  },
  {
    id: "poems",
    title: "Paper Trail poems",
    blurb: "Writing collected under Paper Trail.",
    stops: [
      stop("paper_trail_poems"),
      stop("paper_trail"),
      stop("mood_longing"),
      stop("mood_wonder"),
      stop("th_memory_longing"),
    ].filter((s) => getNode(s.nodeId)),
  },
  {
    id: "inferred",
    title: "Surprising connections",
    blurb: "Links the graph marked as inferred, with the reason written on each edge.",
    stops: [
      stop("site_reels"),
      stop("ch_instagram"),
      stop("ut_austin"),
      stop("ledger"),
      stop("plain_paper"),
    ].filter((s) => getNode(s.nodeId)),
  },
];

export function tourById(id: string): Tour | undefined {
  return TOURS.find((t) => t.id === id);
}
