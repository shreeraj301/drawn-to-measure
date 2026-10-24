/**
 * The layout is about 19.5 units across. Dividing by 2.4 fits that cloud
 * inside the home camera [14, 9, 22] → [0, 1.5, 0] at fov 38, with paper
 * left around it, and lets the fog stay at 30–70 without washing the drawing out.
 */
export const GRAPH_SCALE = 1 / 2.4;
