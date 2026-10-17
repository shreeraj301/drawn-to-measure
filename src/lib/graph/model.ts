import raw from "@/data/graph.json";
import layout from "@/data/layout.json";
import type { GraphData, GraphLink, GraphNode, Vec3 } from "./types";

const data = raw as unknown as GraphData;

export const NODES: GraphNode[] = data.nodes;
export const LINKS: GraphLink[] = data.links;
export const HYPEREDGES = data.hyperedges ?? [];
export const POSITIONS = layout.positions as unknown as Record<string, Vec3>;
export const LAYOUT_RADIUS = layout.radius as number;

export const NODE_COUNT = NODES.length;
export const EDGE_COUNT = LINKS.length;

const nodeById = new Map(NODES.map((n) => [n.id, n]));
export function getNode(id: string): GraphNode | undefined {
  return nodeById.get(id);
}

export const DEGREE = new Map<string, number>();
for (const n of NODES) DEGREE.set(n.id, 0);
for (const l of LINKS) {
  DEGREE.set(l.source, (DEGREE.get(l.source) || 0) + 1);
  DEGREE.set(l.target, (DEGREE.get(l.target) || 0) + 1);
}

export const MAX_DEGREE = Math.max(...DEGREE.values());

export type CommunityInfo = {
  id: number;
  name: string;
  count: number;
};

const commMap = new Map<number, CommunityInfo>();
for (const n of NODES) {
  const existing = commMap.get(n.community);
  if (existing) existing.count += 1;
  else commMap.set(n.community, { id: n.community, name: n.community_name, count: 1 });
}
export const COMMUNITIES: CommunityInfo[] = [...commMap.values()].sort((a, b) => a.id - b.id);

export const KINDS: string[] = [...new Set(NODES.map((n) => n.kind))].sort();

export function relationLabel(relation: string): string {
  return relation.replaceAll("_", " ");
}

export type Adjacency = Map<string, { to: string; linkIndex: number }[]>;

export const ADJACENCY: Adjacency = new Map();
for (const n of NODES) ADJACENCY.set(n.id, []);
LINKS.forEach((l, i) => {
  ADJACENCY.get(l.source)?.push({ to: l.target, linkIndex: i });
  ADJACENCY.get(l.target)?.push({ to: l.source, linkIndex: i });
});

/** Undirected shortest path. Returns node ids from start to end, or null. */
export function shortestPath(start: string, end: string): string[] | null {
  if (start === end) return [start];
  if (!nodeById.has(start) || !nodeById.has(end)) return null;
  const prev = new Map<string, string | null>();
  const q: string[] = [start];
  prev.set(start, null);
  while (q.length) {
    const cur = q.shift()!;
    const next = ADJACENCY.get(cur) || [];
    for (const { to } of next) {
      if (prev.has(to)) continue;
      prev.set(to, cur);
      if (to === end) {
        const path: string[] = [end];
        let p: string | null = cur;
        while (p) {
          path.push(p);
          p = prev.get(p) ?? null;
        }
        path.reverse();
        return path;
      }
      q.push(to);
    }
  }
  return null;
}

export function linksBetween(path: string[]): number[] {
  const indexes: number[] = [];
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i];
    const b = path[i + 1];
    const hit = LINKS.findIndex(
      (l) => (l.source === a && l.target === b) || (l.source === b && l.target === a),
    );
    if (hit >= 0) indexes.push(hit);
  }
  return indexes;
}

export function neighborsOf(id: string): string[] {
  const set = new Set<string>();
  for (const { to } of ADJACENCY.get(id) || []) set.add(to);
  return [...set];
}
