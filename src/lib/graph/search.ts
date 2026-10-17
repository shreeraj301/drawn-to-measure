import { NODES } from "./model";

export type SearchHit = {
  id: string;
  label: string;
  kind: string;
  community: string;
  description: string;
  score: number;
};

function norm(s: string): string {
  return s.toLowerCase().normalize("NFKD");
}

/** Lightweight fuzzy rank: substring, then token overlap, then character gaps. */
export function searchNodes(query: string, limit = 12): SearchHit[] {
  const q = norm(query.trim());
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  const hits: SearchHit[] = [];
  for (const n of NODES) {
    const label = norm(n.label);
    const desc = norm(n.description || "");
    const kind = norm(n.kind);
    const comm = norm(n.community_name);
    const id = norm(n.id);
    let score = 0;
    if (label === q) score += 120;
    else if (label.startsWith(q)) score += 80;
    else if (label.includes(q)) score += 55;
    else if (id.includes(q)) score += 40;
    if (desc.includes(q)) score += 22;
    if (kind.includes(q)) score += 14;
    if (comm.includes(q)) score += 12;
    let tokenHits = 0;
    for (const t of tokens) {
      if (label.includes(t)) tokenHits += 2;
      else if (desc.includes(t) || id.includes(t) || comm.includes(t)) tokenHits += 1;
    }
    if (tokens.length > 1 && tokenHits > 0) score += tokenHits * 8;
    if (score <= 0 && q.length >= 3) {
      // subsequence
      let i = 0;
      for (const ch of label) {
        if (ch === q[i]) i += 1;
        if (i === q.length) break;
      }
      if (i === q.length) score += 8;
    }
    if (score > 0) {
      hits.push({
        id: n.id,
        label: n.label,
        kind: n.kind,
        community: n.community_name,
        description: n.description,
        score,
      });
    }
  }
  hits.sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
  return hits.slice(0, limit);
}
