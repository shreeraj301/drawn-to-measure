/**
 * Precompute a deterministic 3D force layout from graph.json.
 * Fixed seed so every rebuild (and every visitor) sees the same drawing.
 *
 * Usage: node scripts/build-layout.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  forceCollide,
  forceX,
  forceY,
  forceZ,
} = require("d3-force-3d");

const SEED = 20261017;

function mulberry32(seed) {
  let a = seed >>> 0;
  return function rand() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const raw = JSON.parse(readFileSync(new URL("../src/data/graph.json", import.meta.url), "utf8"));

const degree = new Map();
for (const n of raw.nodes) degree.set(n.id, 0);
for (const l of raw.links) {
  degree.set(l.source, (degree.get(l.source) || 0) + 1);
  degree.set(l.target, (degree.get(l.target) || 0) + 1);
}

const communities = [...new Set(raw.nodes.map((n) => n.community))].sort((a, b) => a - b);
const commIndex = new Map(communities.map((c, i) => [c, i]));
const ring = communities.length;

const rand = mulberry32(SEED);
const nodes = raw.nodes.map((n) => {
  const i = commIndex.get(n.community) ?? 0;
  const angle = (i / ring) * Math.PI * 2;
  const radius = n.id === "shreeraj" ? 0 : 2.6 + (i % 3) * 0.35;
  const jitter = () => (rand() - 0.5) * 1.4;
  return {
    id: n.id,
    community: n.community,
    x: n.id === "shreeraj" ? 0 : Math.cos(angle) * radius + jitter(),
    y: n.id === "shreeraj" ? 0 : (rand() - 0.5) * 1.2,
    z: n.id === "shreeraj" ? 0 : Math.sin(angle) * radius + jitter(),
  };
});

const links = raw.links.map((l) => ({ source: l.source, target: l.target }));

const sim = forceSimulation(nodes, 3)
  .randomSource(rand)
  .alpha(1)
  .alphaDecay(0.012)
  .velocityDecay(0.42)
  .force(
    "link",
    forceLink(links)
      .id((d) => d.id)
      .distance((l) => {
        const a = degree.get(l.source.id || l.source) || 1;
        const b = degree.get(l.target.id || l.target) || 1;
        return 0.95 + Math.min(4, Math.sqrt(Math.min(a, b))) * 0.12;
      })
      .strength(0.7),
  )
  .force("charge", forceManyBody().strength(-3.2).distanceMax(10))
  .force("center", forceCenter(0, 0, 0))
  .force(
    "collide",
    forceCollide()
      .radius((d) => (d.id === "shreeraj" ? 0.85 : 0.42))
      .strength(0.85)
      .iterations(2),
  )
  .force(
    "x",
    forceX((d) => {
      if (d.id === "shreeraj") return 0;
      const i = commIndex.get(d.community) ?? 0;
      return Math.cos((i / ring) * Math.PI * 2) * 3.6;
    }).strength((d) => (d.id === "shreeraj" ? 1.4 : 0.16)),
  )
  .force("y", forceY(0).strength((d) => (d.id === "shreeraj" ? 0.6 : 0.04)))
  .force(
    "z",
    forceZ((d) => {
      if (d.id === "shreeraj") return 0;
      const i = commIndex.get(d.community) ?? 0;
      return Math.sin((i / ring) * Math.PI * 2) * 3.6;
    }).strength((d) => (d.id === "shreeraj" ? 1.4 : 0.16)),
  );

for (let i = 0; i < 420; i++) sim.tick();
sim.stop();

const hub = nodes.find((n) => n.id === "shreeraj");
const dx = hub?.x || 0;
const dy = hub?.y || 0;
const dz = hub?.z || 0;

let maxR = 0;
const positions = {};
for (const n of nodes) {
  const x = +(n.x - dx).toFixed(4);
  const y = +(n.y - dy).toFixed(4);
  const z = +(n.z - dz).toFixed(4);
  positions[n.id] = [x, y, z];
  maxR = Math.max(maxR, Math.hypot(x, y, z));
}

const out = {
  seed: SEED,
  ticks: 420,
  hub: "shreeraj",
  radius: +maxR.toFixed(3),
  positions,
};

writeFileSync(new URL("../src/data/layout.json", import.meta.url), JSON.stringify(out));
console.log(`layout: ${Object.keys(positions).length} nodes, radius ${out.radius}`);
