import Link from "next/link";

// OPIX wordmark + connected-node glyph (the "trust network" motif).
export function Logo({ className = "", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="OPIX home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      {/* Brand mark colors mirror the palette in globals.css §1 */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke={onDark ? "#3e9286" : "#2f7d73"} strokeWidth="1.5" />
        <circle cx="14" cy="7" r="2.2" fill={onDark ? "#3e9286" : "#2f7d73"} />
        <circle cx="8" cy="18" r="2.2" fill={onDark ? "#8fc6bd" : "#256a61"} />
        <circle cx="20" cy="18" r="2.2" fill="#bfa46f" />
        <path
          d="M14 9.2 9 16.2M14 9.2l5 7M9.5 18h9"
          stroke={onDark ? "#8fc6bd" : "#12355b"}
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity={onDark ? 0.7 : 0.55}
        />
      </svg>
      <span
        className={`text-lg font-semibold tracking-tight ${onDark ? "text-white" : "text-foreground"}`}
      >
        OPIX
      </span>
    </Link>
  );
}
