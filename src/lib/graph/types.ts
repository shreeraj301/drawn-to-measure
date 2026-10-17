export type NodeKind =
  | "Skill/Tool"
  | "Project"
  | "Poem/Writing"
  | "Bot/Agent"
  | "Place"
  | "Theme"
  | "Channel"
  | "Program/University"
  | "Goal/Career path"
  | "Person"
  | "Education"
  | "Preference/Value"
  | "Experience";

export type GraphSource = {
  key?: string;
  label?: string;
  file?: string;
  url?: string;
};

export type GraphNode = {
  id: string;
  label: string;
  kind: NodeKind | string;
  community: number;
  community_name: string;
  description: string;
  source_file?: string | null;
  source_url?: string | null;
  sources?: GraphSource[];
};

export type GraphLink = {
  source: string;
  target: string;
  relation: string;
  confidence: "EXTRACTED" | "INFERRED" | string;
  confidence_score: number;
  source_file?: string | null;
  why?: string;
};

export type Hyperedge = {
  id: string;
  label: string;
  nodes: string[];
  relation?: string;
  confidence?: string;
  confidence_score?: number;
  source_file?: string;
};

export type GraphData = {
  nodes: GraphNode[];
  links: GraphLink[];
  hyperedges: Hyperedge[];
};

export type Vec3 = [number, number, number];
