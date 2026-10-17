# Drawn to Measure

A three dimensional drawing of Shreeraj Narwade. The graph is the data. Nothing in the scene is invented.

## Run

```
npm install
npm run dev
```

`npm run build` produces the static site.

## Replace the graph

1. Export a new NetworkX node link file from Graphify.
2. Save it as `src/data/graph.json`. Keep `nodes`, `links`, and `hyperedges`.
3. Rebuild the frozen layout:

```
node scripts/build-layout.mjs
```

The layout uses a fixed seed, so the drawing is the same on every load until you run that script again.

## Checks

```
node --experimental-strip-types scripts/check-dashes.ts
```

That script fails if an em dash or en dash appears in a shipped file.

## Keys

- Drag to orbit, right drag to pan, scroll to zoom toward the cursor.
- 1 plan, 2 elevation, 3 axonometric, 4 perspective.
- F to walk through the drawing. WASD moves. Shift is faster. Esc leaves.
- Slash or Cmd K searches. Double click empty sheet returns to the overview.
