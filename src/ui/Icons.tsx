/** Small ink marks that match the instruments on the sheet. */
import type { ReactNode } from "react";

export function KindIcon({ kind, className }: { kind: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <Mark kind={kind} />
    </svg>
  );
}

function Mark({ kind }: { kind: string }) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
  };
  switch (kind) {
    case "Project":
      return (
        <g {...p}>
          <path d="M4 16h14v3H4zM6 12.5h13v3H6zM8 9h12v3H8z" />
        </g>
      );
    case "Skill/Tool":
      return (
        <g {...p}>
          <path d="M12 5l-6 13M12 5l6 13" />
          <circle cx="12" cy="5" r="1.4" />
          <path d="M5 20h14" />
        </g>
      );
    case "Poem/Writing":
      return (
        <g {...p}>
          <path d="M7 3.5h10v17H7z" />
          <path d="M9 8h6M9 11.5h6M9 15h4" />
        </g>
      );
    case "Person":
      return (
        <g {...p}>
          <circle cx="12" cy="8" r="2.4" />
          <path d="M7 19c.6-3 2.4-4.5 5-4.5s4.4 1.5 5 4.5" />
        </g>
      );
    case "Place":
      return (
        <g {...p}>
          <path d="M12 21s6-5.2 6-9.5A6 6 0 0 0 6 11.5C6 15.8 12 21 12 21z" />
          <circle cx="12" cy="11.5" r="1.6" />
        </g>
      );
    case "Program/University":
      return (
        <g {...p}>
          <path d="M3 10l9-5 9 5-9 5-9-5z" />
          <path d="M7 12v5c2 1.4 4 1.4 10 0v-5" />
        </g>
      );
    case "Bot/Agent":
      return (
        <g {...p}>
          <rect x="6" y="7" width="12" height="10" rx="2" />
          <circle cx="9.5" cy="11.5" r="1" />
          <circle cx="14.5" cy="11.5" r="1" />
          <path d="M12 4v3" />
        </g>
      );
    case "Theme":
      return (
        <g {...p}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
        </g>
      );
    case "Goal/Career path":
      return (
        <g {...p}>
          <path d="M5 19l14-8" />
          <path d="M15 7l4 4-4 1" />
        </g>
      );
    case "Channel":
      return (
        <g {...p}>
          <path d="M5 9h10v6H5z" />
          <path d="M15 11l4-2v6l-4-2" />
        </g>
      );
    case "Education":
      return (
        <g {...p}>
          <path d="M4 7h7v12H4zM13 7h7v12h-7z" />
          <path d="M11 7v12" />
        </g>
      );
    case "Preference/Value":
      return (
        <g {...p}>
          <circle cx="12" cy="10" r="4" />
          <path d="M9 14l-1 6 4-2 4 2-1-6" />
        </g>
      );
    default:
      return (
        <g {...p}>
          <path d="M5 6h14v12H5z" />
          <path d="M8 10h8M8 13h6" />
        </g>
      );
  }
}

const ink = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      {children}
    </svg>
  );
}

export function IconPlan() {
  return (
    <Glyph>
      <rect x="4" y="4" width="16" height="16" {...ink} />
    </Glyph>
  );
}
export function IconElevation() {
  return (
    <Glyph>
      <path d="M4 18V7M4 18h16M8 18V11M12 18V8M16 18V13" {...ink} />
    </Glyph>
  );
}
export function IconAxo() {
  return (
    <Glyph>
      <path d="M12 4l8 4.5v7L12 20l-8-4.5v-7zM12 12l8-3.5M12 12v8M12 12L4 8.5" {...ink} />
    </Glyph>
  );
}
export function IconPerspective() {
  return (
    <Glyph>
      <path d="M4 16l8-10 8 10M8 16l4-5 4 5" {...ink} />
    </Glyph>
  );
}
export function IconSearch() {
  return (
    <Glyph>
      <circle cx="11" cy="11" r="5.2" {...ink} />
      <path d="M15.2 15.2L20 20" {...ink} />
    </Glyph>
  );
}
export function IconFilter() {
  return (
    <Glyph>
      <path d="M4 6h16M7 12h10M10 18h4" {...ink} />
    </Glyph>
  );
}
export function IconLayers() {
  return (
    <Glyph>
      <path d="M4 8l8-4 8 4-8 4zM4 13l8 4 8-4" {...ink} />
    </Glyph>
  );
}
export function IconRoute() {
  return (
    <Glyph>
      <circle cx="6" cy="7" r="2" {...ink} />
      <circle cx="18" cy="17" r="2" {...ink} />
      <path d="M8 8c4 0 4 8 8 8" {...ink} />
    </Glyph>
  );
}
export function IconHelp() {
  return (
    <Glyph>
      <circle cx="12" cy="12" r="8" {...ink} />
      <path d="M9.5 9.5a2.5 2.5 0 114 2c-.8.6-1.5 1-1.5 2.2" {...ink} />
    </Glyph>
  );
}
export function IconSoundOn() {
  return (
    <Glyph>
      <path d="M5 10h3l4-3v10l-4-3H5zM16 9.5a4 4 0 010 5" {...ink} />
    </Glyph>
  );
}
export function IconSoundOff() {
  return (
    <Glyph>
      <path d="M5 10h3l4-3v10l-4-3H5zM16 10l4 4M20 10l-4 4" {...ink} />
    </Glyph>
  );
}
export function IconClose() {
  return (
    <Glyph>
      <path d="M6 6l12 12M18 6L6 18" {...ink} />
    </Glyph>
  );
}
export function IconPlay() {
  return (
    <Glyph>
      <path d="M8 6l11 6-11 6z" {...ink} />
    </Glyph>
  );
}
export function IconPause() {
  return (
    <Glyph>
      <path d="M8 6v12M16 6v12" {...ink} />
    </Glyph>
  );
}
export function IconPrev() {
  return (
    <Glyph>
      <path d="M15 6l-7 6 7 6" {...ink} />
    </Glyph>
  );
}
export function IconNext() {
  return (
    <Glyph>
      <path d="M9 6l7 6-7 6" {...ink} />
    </Glyph>
  );
}
export function IconMenu() {
  return (
    <Glyph>
      <path d="M4 7h16M4 12h16M4 17h16" {...ink} />
    </Glyph>
  );
}
export function IconNight() {
  return (
    <Glyph>
      <path d="M14 4.5A7 7 0 1019 16 5.5 5.5 0 0114 4.5z" {...ink} />
    </Glyph>
  );
}
export function IconPaper() {
  return (
    <Glyph>
      <circle cx="12" cy="12" r="4" {...ink} />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" {...ink} />
    </Glyph>
  );
}

export function IconLink() {
  return (
    <Glyph>
      <path d="M10 14a4 4 0 01-1-6l2-2M14 10a4 4 0 011 6l-2 2M9 15l6-6" {...ink} />
    </Glyph>
  );
}


