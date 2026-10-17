/**
 * Fails if a shipped source file contains an em dash (U+2014) or en dash (U+2013).
 * Graph data is allowed to be scanned too: this corpus has none.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOTS = [
  "src/scene",
  "src/ui",
  "src/state",
  "src/lib/graph",
  "src/routes",
  "src/styles.css",
  "src/router.tsx",
  "scripts/build-layout.mjs",
  "scripts/check-dashes.ts",
  "README.md",
];
const EXTS = new Set([".ts", ".tsx", ".css", ".mjs", ".md", ".json", ".html"]);
const BAD = /[\u2014\u2013]/;

function walk(path: string, out: string[]) {
  let st: ReturnType<typeof statSync>;
  try {
    st = statSync(path);
  } catch {
    return;
  }
  if (st.isFile()) {
    if (EXTS.has(extname(path)) || path.endsWith("README.md")) out.push(path);
    return;
  }
  if (!st.isDirectory()) return;
  for (const name of readdirSync(path)) {
    if (name === "node_modules" || name === "dist" || name === ".git") continue;
    walk(join(path, name), out);
  }
}

const files: string[] = [];
for (const root of ROOTS) walk(root, files);

let failed = 0;
for (const file of files) {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    if (BAD.test(line)) {
      failed += 1;
      console.error(`${file}:${i + 1}: dash character is not allowed`);
    }
  });
}

if (failed) {
  console.error(`check-dashes: ${failed} line(s) failed`);
  process.exit(1);
}
console.log(`check-dashes: clean (${files.length} files)`);
