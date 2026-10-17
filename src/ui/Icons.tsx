/** Silhouettes that match the models on the sheet. Stroke only, no fill blobs. */

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
          <circle cx="12" cy="7" r="2.2" />
          <path d="M8 20c.4-3.2 1.8-5 4-5s3.6 1.8 4 5" />
          <path d="M6 21h12" />
        </g>
      );
    case "Place":
      return (
        <g {...p}>
          <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
          <circle cx="12" cy="11" r="1.6" />
        </g>
      );
    case "Program/University":
      return (
        <g {...p}>
          <path d="M3 10l9-5 9 5-9 5z" />
          <path d="M7 12v5M12 14.5V17M17 12v5M5 18h14" />
        </g>
      );
    case "Bot/Agent":
      return (
        <g {...p}>
          <rect x="6" y="8" width="12" height="9" rx="1.5" />
          <path d="M12 8V5M10 5h4" />
          <path d="M9 12h.01M15 12h.01M9 18v2M15 18v2" />
        </g>
      );
    case "Theme":
      return (
        <g {...p}>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 6v12M6 12h12" />
          <path d="M12 6l2 3h-4z" />
        </g>
      );
    case "Goal/Career path":
      return (
        <g {...p}>
          <path d="M4 12h10" />
          <path d="M12 7l6 5-6 5" />
        </g>
      );
    case "Channel":
      return (
        <g {...p}>
          <path d="M12 20V8" />
          <path d="M8 11a4 4 0 0 1 8 0M6 8a7 7 0 0 1 12 0" />
          <circle cx="12" cy="20" r="1.2" />
        </g>
      );
    case "Education":
      return (
        <g {...p}>
          <path d="M12 6c-2 2-5 3-8 3v9c3 0 6-1 8-3 2 2 5 3 8 3V9c-3 0-6-1-8-3z" />
          <path d="M12 6v12" />
        </g>
      );
    case "Preference/Value":
      return (
        <g {...p}>
          <circle cx="12" cy="13" r="6" />
          <path d="M12 8l1.2 2.4 2.6.2-2 1.8.6 2.6L12 13.8 9.6 15l.6-2.6-2-1.8 2.6-.2z" />
        </g>
      );
    default:
      return (
        <g {...p}>
          <rect x="5" y="7" width="14" height="10" rx="1" />
          <path d="M9 7V5h6v2M10 12h4" />
        </g>
      );
  }
}
