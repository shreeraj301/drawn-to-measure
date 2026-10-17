# Build prompt: "Drawn to Measure", a 3D knowledge graph of Shreeraj Narwade

Paste everything below into Grok and attach `graph.json` (and optionally the current `graph.html` for reference).

---

You are a senior creative developer and interaction designer. Build a production quality, interactive 3D knowledge graph website from the attached `graph.json`. The graph maps one person, Shreeraj Narwade: an architect (B.Arch from SEA Mumbai, 2026) moving into product design and HCI. It should feel like walking through an architect's drawing set in three dimensions: precise, calm, tactile and premium. Think Awwwards Site of the Day, not a dashboard.

## 1. Hard rules

- Use only the data in `graph.json`. Never invent nodes, edges, descriptions, numbers or links. If a field is missing, show nothing rather than placeholder text.
- No em dashes or en dashes anywhere: not in UI copy, labels, tooltips, comments, alt text, the README or the page title. Use commas, colons, periods or the word "to" instead. Add a build step or test that fails if the characters U+2014 or U+2013 appear in any shipped file.
- No emojis as icons. Use SVG icons (Lucide).
- No purple or pink AI gradients, no glassmorphism blobs, no neon glow overload. Restraint is the brand.
- 60fps on a 2020 MacBook Air and a mid range Android phone. If the frame rate drops, degrade gracefully (fewer labels, no post processing) instead of stuttering.
- Respect `prefers-reduced-motion`: no camera flights, instant cuts, no idle drift.
- Fully keyboard accessible, visible focus states, text contrast of at least 4.5:1.

## 2. Tech stack

- Vite + React + TypeScript.
- Three.js through `@react-three/fiber` and `@react-three/drei`.
- `d3-force-3d` for the layout. Precompute the layout at build time (a Node script that writes `layout.json`) with a fixed random seed so the graph looks identical on every load, then allow gentle live relaxation when nodes are dragged.
- `@react-three/postprocessing` for subtle effects only (see section 5).
- GSAP or `maath/easing` for camera tweens; Framer Motion for the 2D UI panels.
- Zustand for state (selection, hover, filters, camera mode).
- Deploy target: Vercel. Static build, no backend.

## 3. Data model (from graph.json)

`graph.json` is NetworkX node link format with `nodes`, `links` and `hyperedges`.

Each node has: `id`, `label`, `kind` (13 types: Skill/Tool, Project, Poem/Writing, Bot/Agent, Place, Theme, Channel, Program/University, Goal/Career path, Person, Education, Preference/Value, Experience), `community` (number), `community_name` (13 clusters such as "Thesis & the pivot", "Shreeraj's toolkit", "HCI master's, 2027", "Paper Trail poems", "Where I play"), `description`, `source_file`, `source_url` and `sources`.

Each link has: `source`, `target`, `relation` (a verb like `alumnus_of`), `confidence` (EXTRACTED or INFERRED), `confidence_score` (0 to 1), `source_file`, and for inferred links a `why` field explaining the reasoning.

`hyperedges` are named groups of nodes (for example "Thesis arc: streets to kit"). Render them as faint translucent hulls or a dotted outline around their members.

The node with id `shreeraj` is the hub (96 edges). Keep it at the world origin.

## 4. Visual language: "Drawn to Measure"

Use these exact design tokens. The world is a sheet of vellum lit softly from above.

```
--sn-vellum: #F3F4F1        (page and scene background)
--sn-sheet: #FAFBF9         (panels, cards)
--sn-indian-ink: #14191A    (primary text, solid edges)
--sn-graphite: #4A5254      (secondary text)
--sn-pencil: #5F6769        (tertiary text, labels at distance)
--sn-trace: #C9CFCC         (hairline borders, grid)
--sn-rule: #848D8B          (strong borders)
--sn-patina: #0B6B57        (accent, selection, focus)
--sn-patina-deep: #08513F   (accent hover)
--sn-patina-wash: #E1ECE7   (accent background)
--sn-redline: #B3261E       (INFERRED edges, markup, annotations)
--sn-redline-wash: #F6E4E1
```

Typography: Archivo for display and UI, Source Serif 4 for descriptions and long text, a monospace (JetBrains Mono or ui-monospace) for ids, coordinates, counts and the title block. Tight tracking on display text, generous line height on serif text.

Scene:
- An infinite drafting grid on the ground plane (minor and major lines in `--sn-trace` at low opacity) that fades into fog with distance. Fog colour matches `--sn-vellum` so the world dissolves at the edges.
- Nodes are small, crisp, matte forms, never shiny spheres. Each `kind` gets its own primitive so type is readable without colour: Project = cube, Skill/Tool = octahedron, Poem/Writing = thin flat disc like a sheet of paper, Person = sphere, Place = cone like a site marker, Program/University = tall prism, Bot/Agent = torus, Theme = icosahedron wireframe, the rest = rounded boxes. Size scales with degree (clamp so the hub is not absurd).
- Each community gets a muted architectural colour drawn from patina, ink, ochre, brick, slate and sage tones. Keep saturation low so the redline accent still pops.
- EXTRACTED edges: solid hairlines in ink at about 25 percent opacity. INFERRED edges: dashed lines in `--sn-redline`. Edge thickness follows `confidence_score`. Use `Line2` / fat lines so they stay crisp at any zoom.
- Labels: HTML or SDF text (troika three text) that fades in by distance and importance. Only the nearest 25 to 40 labels are visible at once; never let labels collide (simple screen space collision culling).
- A fixed drawing "title block" in the bottom right corner in monospace: project name, "Sheet 01 of 01", node and edge counts read live from the data, scale, date, and a north arrow that rotates with the camera.

## 5. Motion design

Everything moves like a well damped camera on a dolly: no bounce, no overshoot except where noted.

- Intro (about 3.5 seconds, skippable with any key or click): the grid draws itself outward from the centre with a stroke animation, then nodes rise from the ground plane in community order with a 20ms stagger, then edges draw from source to target like pen strokes. The camera starts top down (a plan view) and slowly tilts into a three quarter perspective as the graph assembles. Finish on the hub with the title "Shreeraj Narwade, drawn to measure" set in Archivo.
- Idle: very slow orbital drift (one revolution every 4 minutes) that stops the instant the user touches anything and resumes after 12 seconds of inactivity.
- Hover a node: it lifts slightly (scale 1.15, 180ms ease out), its edges brighten, its neighbours get a thin patina outline, everything else dims to 30 percent. A small leader line annotation appears beside it, like a callout on a drawing.
- Click a node: the camera flies to frame that node and its first ring neighbours (900ms, expo in out), unrelated nodes fade and sink slightly, and the detail panel slides in.
- Edge travel: on selection, small particles travel along the selected node's edges from source to target to show direction, slowly, a few at a time.
- Community focus: clicking a community in the legend pulls its nodes into a tight cluster with spring physics (one gentle overshoot is fine here) and fades the rest. Clicking again releases them.
- Every transition is interruptible. A new click mid flight must redirect smoothly from the current camera position, never snap.
- Post processing: subtle SSAO or contact shadows so nodes sit on the sheet, a very gentle depth of field that focuses on the selected node, and light film grain at 3 percent. No bloom except a faint one on the selected node.

## 6. Interaction design

Camera and navigation:
- Orbit with left drag, pan with right drag or two finger drag, zoom with scroll or pinch. Zoom toward the cursor, not the screen centre.
- Fly mode toggle (key `F`): WASD plus mouse look to move through the graph like a walkthrough of a building. Shift to move faster. Esc to exit.
- View presets like architectural drawings, on keys 1 to 4: Plan (top down), Elevation (front), Axonometric (isometric orthographic camera), Perspective (default). Animate between them, including a smooth blend between orthographic and perspective.
- Double click empty space to reset to the overview.

Finding things:
- Command palette on `/` or Cmd K: fuzzy search across labels and descriptions, arrow keys to move, Enter flies the camera to the result.
- Filters panel: toggle node kinds (with their shape icons), toggle EXTRACTED and INFERRED edges, and a confidence slider that hides inferred edges below a threshold.
- Path finder: pick two nodes, show the shortest path as a highlighted route, and let the camera travel along it node by node with the panel narrating each hop using the edge `relation` and `why`.

Detail panel (right side, slides in, sheet colour, hairline border):
- Kind and community as small tags, the label in Archivo, the description in Source Serif 4.
- Sources: every `source_file` and `source_url`, with external links opening in a new tab.
- Connections grouped by relation, each row clickable to fly to that node. Inferred connections show their `why` text in redline italic with the confidence score.
- Prev and next buttons to walk through the selection history.

Guided tours:
- A "Tours" menu with 4 or 5 authored camera paths through the real data, for example: "The pivot" (architecture to product design through the thesis), "Where I play" (the eight Linktree sites), "The road to Georgia Tech", "Paper Trail poems", and "Surprising connections" (only INFERRED edges). Each stop shows a short caption written only from node descriptions. Space to pause, arrow keys to step.

Deep links and sharing:
- The URL hash stores the selected node, camera view and active filters (`#node=ledger&view=axo`). Opening the link restores the exact state.
- A "Save view" button exports a 2x PNG of the current frame with the title block.

Mobile:
- Touch gestures for orbit, pan and pinch zoom. The detail panel becomes a bottom sheet with drag handle and snap points. Fewer labels, no fly mode, lighter post processing. Initial camera frames the whole graph at a readable size, not tiny.

## 7. Sound (optional, off by default)

A muted toggle in the corner. If on: soft pencil tick on hover, a low paper slide on selection, a quiet ambient room tone. All sounds procedural or royalty free, under 40 percent volume. No synthesized voice.

## 8. Project structure and quality

```
src/
  data/graph.json, layout.json
  scene/  Grid, Nodes (instanced meshes per kind), Edges, Labels, Hulls, CameraRig, Effects
  ui/     TitleBlock, DetailPanel, CommandPalette, Filters, Legend, Tours, ViewPresets
  state/  store.ts
  lib/    layout.ts, pathfinding.ts, colors.ts, motion.ts
scripts/  build-layout.ts, check-dashes.ts
```

- Use instanced meshes per node kind and a single merged geometry for edges so 200+ nodes and 400+ edges stay cheap, and the code scales to 2,000 nodes.
- Raycasting through a simplified hit proxy so hover is accurate and fast.
- Lazy load post processing and fonts; show a minimal drafting style loader (a line drawing itself) while assets load.
- Lighthouse performance above 90 on desktop. No console errors.
- A README explaining how to replace `graph.json` with a new export from Graphify and rebuild the layout.

## 9. Acceptance criteria

1. Loads from a fresh clone with `npm install && npm run dev`, builds with `npm run build`.
2. Every node and edge in `graph.json` is rendered and searchable. Counts in the title block match the data.
3. Orbit, pan, zoom to cursor, fly mode, the four view presets, search, filters, path finder, tours and deep links all work.
4. Inferred edges are visually distinct and always show their reason on selection.
5. Smooth 60fps on desktop, no visible jank on camera moves, all transitions interruptible.
6. Reduced motion mode works. Keyboard only navigation works.
7. `scripts/check-dashes.ts` passes: zero em dashes or en dashes in the shipped build.
8. It looks like a premium, editorial, architect's drawing come to life, not a generic force graph demo.

Start by showing me the file structure and the intro sequence, then build the rest in order: scene, interactions, panels, tours, polish.
