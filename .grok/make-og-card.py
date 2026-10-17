#!/usr/bin/env python3
"""Author the Drawn to Measure share card as a drafting sheet, then leave SVG."""
import math
from pathlib import Path

W, H = 1200, 630
VELLUM = "#F3F4F1"
INK = "#14191A"
PATINA = "#0B6B57"
TRACE = "#C9CFCC"
REDLINE = "#B3261E"

# Sheet border and title-block split.
L, T, R, B = 36, 36, 1164, 594
SPLIT = 400  # title block top

nodes = [
    # id, x, y, shape, r, fill (None = hollow)
    ("a", 188, 168, "circle", 6.5, None),
    ("b", 262, 124, "diamond", 7.5, None),
    ("c", 246, 230, "circle", 5.5, None),
    ("d", 338, 176, "square", 6.5, None),
    ("e", 424, 128, "circle", 5, None),
    ("f", 408, 252, "circle", 6, None),
    ("p", 312, 292, "circle", 4.2, None),
    ("g", 560, 196, "circle", 12.5, PATINA),  # the one accent
    ("h", 652, 126, "diamond", 6.5, None),
    ("i", 678, 248, "square", 6.5, None),
    ("q", 548, 292, "circle", 4.2, None),
    ("j", 760, 184, "circle", 6.5, None),
    ("k", 834, 128, "circle", 5, None),
    ("l", 848, 252, "diamond", 7, None),
    ("r", 748, 304, "circle", 4, None),
    ("m", 934, 188, "circle", 6, None),
    ("n", 1004, 136, "square", 5.2, None),
    ("o", 1016, 256, "circle", 5, None),
]

edges = [
    ("a", "b"), ("a", "c"), ("b", "d"), ("c", "d"), ("c", "p"),
    ("d", "e"), ("d", "f"), ("f", "p"), ("e", "g"), ("f", "g"),
    ("p", "q"), ("d", "g"), ("g", "h"), ("g", "q"), ("h", "j"),
    ("h", "k"), ("i", "j"), ("i", "r"), ("j", "l"), ("k", "n"),
    ("l", "m"), ("l", "r"), ("m", "n"), ("m", "o"), ("j", "g"),
    ("e", "h"), ("f", "i"),
]
# The measured relationship — drawn in redline, not ink.
red_edge = ("g", "i")

by_id = {n[0]: n for n in nodes}

def shape(n):
    _id, x, y, kind, r, fill = n
    stroke = INK
    sw = 1.35
    if fill == PATINA:
        return f'<circle cx="{x}" cy="{y}" r="{r}" fill="{PATINA}"/>'
    if kind == "circle":
        return (
            f'<circle cx="{x}" cy="{y}" r="{r}" fill="{VELLUM}" stroke="{stroke}" stroke-width="{sw}"/>'
            f'<circle cx="{x}" cy="{y}" r="1.15" fill="{INK}"/>'
        )
    if kind == "square":
        return (
            f'<rect x="{x - r}" y="{y - r}" width="{r * 2}" height="{r * 2}" fill="{VELLUM}" '
            f'stroke="{stroke}" stroke-width="{sw}"/>'
        )
    if kind == "diamond":
        pts = f"{x},{y - r} {x + r},{y} {x},{y + r} {x - r},{y}"
        return (
            f'<polygon points="{pts}" fill="{VELLUM}" stroke="{stroke}" stroke-width="{sw}" '
            f'stroke-linejoin="miter"/>'
        )
    raise ValueError(kind)

lines = []
def add(s=""):
    lines.append(s)

add(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">')
add(f'<rect width="{W}" height="{H}" fill="{VELLUM}"/>')

# Fine grid across the whole sheet, then the title block paints over it.
add(f'<g stroke="{TRACE}" fill="none" stroke-width="0.7">')
x = 0
while x <= W:
    major = x % 120 == 0
    add(f'<line x1="{x}" y1="0" x2="{x}" y2="{H}" stroke-width="{"1.05" if major else "0.6"}" opacity="{"0.95" if major else "0.55"}"/>')
    x += 24
y = 0
while y <= H:
    major = y % 120 == 0
    add(f'<line x1="0" y1="{y}" x2="{W}" y2="{y}" stroke-width="{"1.05" if major else "0.6"}" opacity="{"0.95" if major else "0.55"}"/>')
    y += 24
add("</g>")

# Title block ground, opaque, so the grid stops at the block.
add(f'<rect x="{L}" y="{SPLIT}" width="{R - L}" height="{B - SPLIT}" fill="{VELLUM}"/>')

# Centerlines through the hub, drawing field only.
add(
    f'<g stroke="{INK}" stroke-opacity="0.16" fill="none" stroke-width="0.8" stroke-dasharray="1.2 5">'
    f'<line x1="64" y1="196" x2="1136" y2="196"/>'
    f'<line x1="560" y1="58" x2="560" y2="{SPLIT - 16}"/>'
    f"</g>"
)

# Edges
add(f'<g fill="none" stroke="{INK}" stroke-width="0.9" stroke-linecap="square">')
for a, b in edges:
    if (a, b) == red_edge or (b, a) == red_edge:
        continue
    xa, ya = by_id[a][1], by_id[a][2]
    xb, yb = by_id[b][1], by_id[b][2]
    add(f'<line x1="{xa}" y1="{ya}" x2="{xb}" y2="{yb}"/>')
add("</g>")

# Redline: one measured edge, rim to rim, with perpendicular ticks.
gx, gy = by_id["g"][1], by_id["g"][2]
ix, iy = by_id["i"][1], by_id["i"][2]
dx, dy = ix - gx, iy - gy
length = math.hypot(dx, dy)
ux, uy = dx / length, dy / length
px, py = -uy, ux
gr = by_id["g"][4] + 3
ir = by_id["i"][4] + 3
x1, y1 = gx + ux * gr, gy + uy * gr
x2, y2 = ix - ux * ir, iy - uy * ir
add(f'<g stroke="{REDLINE}" fill="none" stroke-width="1.45" stroke-linecap="square">')
add(f'<line x1="{x1:.2f}" y1="{y1:.2f}" x2="{x2:.2f}" y2="{y2:.2f}"/>')
for x, y in ((x1, y1), (x2, y2)):
    add(
        f'<line x1="{x + px * 6.5:.2f}" y1="{y + py * 6.5:.2f}" '
        f'x2="{x - px * 6.5:.2f}" y2="{y - py * 6.5:.2f}"/>'
    )
add("</g>")

# Nodes on top of edges
add("<g>")
for n in nodes:
    add(shape(n))
add("</g>")

# Sheet border: outer rule, and an inner hairline on the drawing field only
# (it must not cut through the title block).
add(
    f'<rect x="{L + 0.5}" y="{T + 0.5}" width="{R - L - 1}" height="{B - T - 1}" '
    f'fill="none" stroke="{INK}" stroke-width="1.6"/>'
)
add(
    f'<path d="M{L + 7} {SPLIT} V{T + 7} H{R - 7} V{SPLIT}" '
    f'fill="none" stroke="{INK}" stroke-width="0.6"/>'
)

# Crop marks just outside the border
def crops():
    arm = 16
    gap = 8
    corners = [(L, T, -1, -1), (R, T, 1, -1), (L, B, -1, 1), (R, B, 1, 1)]
    out = []
    for x, y, sx, sy in corners:
        out.append(
            f'<path d="M{x + sx * gap} {y} h{sx * arm} M{x} {y + sy * gap} v{sy * arm}" '
            f'fill="none" stroke="{INK}" stroke-width="0.9"/>'
        )
    return "\n".join(out)

add(crops())

# Title-block rules
add(f'<line x1="{L}" y1="{SPLIT}" x2="{R}" y2="{SPLIT}" stroke="{INK}" stroke-width="1.6"/>')
NORTH_X = 124
SPEC_X = 888
add(f'<line x1="{NORTH_X}" y1="{SPLIT}" x2="{NORTH_X}" y2="{B}" stroke="{INK}" stroke-width="1.15"/>')
add(f'<line x1="{SPEC_X}" y1="{SPLIT}" x2="{SPEC_X}" y2="{B}" stroke="{INK}" stroke-width="1.15"/>')

# North arrow, centered in the left cell.
add(
    '<g fill="none" stroke-linejoin="miter">'
    f'<path d="M80 444 L94 492 L80 484 L66 492 Z" fill="{PATINA}"/>'
    f'<path d="M80 566 L66 518 L80 526 L94 518 Z" stroke="{INK}" stroke-width="1.5"/>'
    f'<text x="80" y="512" text-anchor="middle" font-family="Liberation Sans" font-size="13" '
    f'font-weight="700" fill="{INK}">N</text>'
    "</g>"
)

# Running header inside the drawing field
add(
    f'<text x="56" y="70" font-family="Liberation Mono" font-size="12" fill="{INK}" '
    f'letter-spacing="2.6">EDITORIAL KNOWLEDGE GRAPH</text>'
)
add(
    f'<text x="1144" y="70" text-anchor="end" font-family="Liberation Mono" font-size="12" '
    f'fill="{INK}" letter-spacing="2.6">AXONOMETRIC  ·  SHEET 01</text>'
)

# Title block lockup — sturdy grotesque, serif name, no edge-hugging.
add(
    f'<text x="152" y="442" font-family="Liberation Mono" font-size="12" fill="{INK}" '
    f'fill-opacity="0.62" letter-spacing="3.1">DRAWING TITLE</text>'
)
add(
    f'<text x="150" y="514" font-family="Liberation Sans" font-size="64" font-weight="700" '
    f'fill="{INK}" letter-spacing="-1.1">Drawn to Measure</text>'
)
add(
    f'<text x="152" y="558" font-family="Liberation Serif" font-size="28" font-style="italic" '
    f'fill="{INK}">Shreeraj Narwade</text>'
)

# Spec column — labels and values share a tight tab, not a stretched table.
specs = [
    ("SHEET", "01 OF 01"),
    ("NODES", "204"),
    ("EDGES", "415"),
    ("VIEW", "AXONOMETRIC"),
    ("SCALE", "1 : GRAPH"),
    ("DATE", "2026.10.17"),
]
spec_top = 442
for i, (label, value) in enumerate(specs):
    yy = spec_top + i * 26
    add(
        f'<text x="912" y="{yy}" font-family="Liberation Mono" font-size="12" fill="{INK}" '
        f'fill-opacity="0.58" letter-spacing="1.6">{label}</text>'
    )
    add(
        f'<text x="1036" y="{yy}" font-family="Liberation Mono" font-size="14" '
        f'fill="{INK}" letter-spacing="0.4">{value}</text>'
    )

add("</svg>")

Path("/workspace/.grok/og-card.svg").write_text("\n".join(lines) + "\n", encoding="utf-8")
print("wrote", len("\n".join(lines)), "chars")
