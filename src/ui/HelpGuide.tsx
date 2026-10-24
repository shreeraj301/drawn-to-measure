import { useGraphStore } from "@/state/store";
import { IconClose } from "./Icons";

const ROWS = [
  ["1–4", "Switch view: plan, elevation, axonometric, perspective"],
  ["/", "Search the drawing"],
  ["F", "Fly through the sheet with WASD"],
  ["?", "This guide"],
  ["Esc", "Close the open panel, drawer, or tour"],
];

export function HelpGuide() {
  const open = useGraphStore((s) => s.helpOpen);
  const setOpen = useGraphStore((s) => s.setHelpOpen);
  if (!open) return null;
  return (
    <aside className="sn-help" role="dialog" aria-label="Keyboard guide">
      <header>
        <h2>How to read the sheet</h2>
        <button type="button" onClick={() => setOpen(false)} aria-label="Close guide">
          <IconClose />
        </button>
      </header>
      <ul>
        {ROWS.map(([k, v]) => (
          <li key={k}>
            <kbd>{k}</kbd>
            <span>{v}</span>
          </li>
        ))}
      </ul>
      <p>
        Plan is a top-down view. Elevation is from the side. Axonometric is an angled drawing view. Perspective is a camera looking into the sheet. F lets you move through it.
      </p>
    </aside>
  );
}
