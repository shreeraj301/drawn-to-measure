/**
 * Muted architectural colours, one per community.
 * Saturation stays low so the redline accent still reads.
 * Order follows community id 0..12.
 */
export const COMMUNITY_COLORS = [
  "#3E6B5C", // 0 Thesis & the pivot, patina
  "#3A4446", // 1 toolkit, graphite
  "#8A6A3B", // 2 HCI master's, ochre
  "#6E4A3C", // 3 Anagram, brick
  "#4E5A62", // 4 Paper Trail, slate
  "#5C6B4A", // 5 Bots, sage
  "#6A5344", // 6 Europe, warm umber
  "#3F5558", // 7 Making, teal slate
  "#7A6248", // 8 Trust, sand
  "#4A5C52", // 9 Where I play, moss
  "#5A5048", // 10 Portfolio, warm grey
  "#445058", // 11 Linktree, blue slate
  "#6B5E48", // 12 Design guidance, khaki
] as const;

export function communityColor(id: number): string {
  return COMMUNITY_COLORS[id % COMMUNITY_COLORS.length] ?? COMMUNITY_COLORS[0];
}

export const INK = "#14191A";
export const GRAPHITE = "#4A5254";
export const PENCIL = "#5F6769";
export const TRACE = "#C9CFCC";
export const RULE = "#848D8B";
export const VELLUM = "#F3F4F1";
export const SHEET = "#FAFBF9";
export const PATINA = "#0B6B57";
export const PATINA_DEEP = "#08513F";
export const REDLINE = "#B3261E";

/** Node radius from degree. Hub stays readable, never a planet. */
export function nodeRadius(degree: number, maxDegree: number): number {
  const t = Math.sqrt(degree / Math.max(1, maxDegree));
  return 0.18 + t * 0.32;
}
