/**
 * Warm paper palette and the 13 chapter colours.
 * Wash is the disc fill. Edge is the pencil line, deep enough to read on paper.
 */
export const PAPER = "#E9E0CF";
export const PAPER_SHEET = "#EFE7D8";
export const PAPER_CARD = "#F7F1E6";
export const PAPER_EDGE = "#D9CDB6";
export const INK = "#2A241E";
export const INK_COLD = "#14191A";
export const SLATE = "#665D50";
export const GRAPHITE = "#7A6C58";
export const COBALT = "#3452D6";
export const COBALT_WASH = "#4C6FFF";
export const REDLINE = "#9C3426";
export const SHADOW = "rgba(60,44,28,.55)";

/** Legacy aliases so older scene files keep compiling during the restyle. */
export const VELLUM = PAPER;
export const SHEET = PAPER_CARD;
export const PENCIL = SLATE;
export const TRACE = PAPER_EDGE;
export const RULE = GRAPHITE;
export const PATINA = COBALT;
export const PATINA_DEEP = "#163AA3";

export const CHAPTERS = [
  { id: 0, family: "Architecture", wash: "#C27A4E", edge: "#A0542C" },
  { id: 1, family: "Making", wash: "#C9A055", edge: "#8A6418" },
  { id: 2, family: "HCI", wash: "#8FA584", edge: "#4F7148" },
  { id: 3, family: "Architecture", wash: "#B86E45", edge: "#8E4A2A" },
  { id: 4, family: "Writing", wash: "#B9675A", edge: "#9A4A5C" },
  { id: 5, family: "Bots & social", wash: "#A8936E", edge: "#7A6A5A" },
  { id: 6, family: "Architecture", wash: "#C88A64", edge: "#9A5A3C" },
  { id: 7, family: "Making", wash: "#BE9448", edge: "#7E5A16" },
  { id: 8, family: "HCI", wash: "#84997A", edge: "#46664A" },
  { id: 9, family: "Making", wash: "#D2AA62", edge: "#94661E" },
  { id: 10, family: "HCI", wash: "#9BB08E", edge: "#5A7A50" },
  { id: 11, family: "Bots & social", wash: "#9E8A6A", edge: "#6E6252" },
  { id: 12, family: "Bots & social", wash: "#B09C7C", edge: "#74685E" },
] as const;

export const COMMUNITY_COLORS = CHAPTERS.map((c) => c.edge);

export function communityColor(id: number): string {
  return CHAPTERS[id]?.edge ?? CHAPTERS[0].edge;
}

export function communityWash(id: number): string {
  return CHAPTERS[id]?.wash ?? CHAPTERS[0].wash;
}

export function communityFamily(id: number): string {
  return CHAPTERS[id]?.family ?? CHAPTERS[0].family;
}

export function nodeRadius(degree: number, maxDegree: number): number {
  const t = Math.sqrt(degree / Math.max(1, maxDegree));
  return 0.22 + t * 0.42;
}
