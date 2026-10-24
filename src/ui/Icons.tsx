/** Small ink marks that match the instruments on the sheet. */

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
