# Contributing

Thanks for looking at the sheet. Small, focused changes are the easiest to review.

## Run it

```bash
npm install && npm run dev
```

Open http://localhost:8080.

## Before a pull request

```bash
npm run typecheck
npm run lint
npm run build
node --experimental-strip-types scripts/check-dashes.ts
```

The dash check fails if an em dash or en dash shows up in the drawing's source or in this README. Use a comma, a colon, or a plain hyphen.

## Replacing the graph

The picture is the data. If you change `src/data/graph.json`, keep `nodes`, `links`, and `hyperedges`, then rebuild the frozen layout:

```bash
node scripts/build-layout.mjs
```

The layout seed is fixed, so the drawing stays put until that script runs again.

## Issues

Use the bug, feature, or question templates. Say which view you were in (plan, elevation, axonometric, or perspective) and what you clicked or typed.

Please do not open a pull request that only reformats the repo.
