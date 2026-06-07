// ============================================================================
// THEME — centralized design tokens + reusable component variant maps.
// ----------------------------------------------------------------------------
// Raw color VALUES live in src/app/globals.css (§1 brand palette). This file
// references the resulting Tailwind tokens so components never hardcode styles.
//
//   • Change a COLOR VALUE ......... globals.css §1 / §3
//   • Change a BUTTON look ......... `buttonVariants` / `buttonSizes` below
//   • Change a CARD look ........... `cardVariants` below
//   • Change a BADGE look .......... `badgeVariants` below
//   • Change an INPUT look ......... `inputBase` below
//   • Change SECTION backgrounds ... `sectionTones` below
//
// NOTE ON NAMING: the brand "primary" token is Enterprise Blue, but the primary
// *action* button uses the teal ACCENT — Enterprise Blue lacks contrast on the
// dark Deep-Ink sections, whereas teal is legible on both light and dark. Blue
// is used for the `brand`/`secondary` buttons and structural surfaces.
// ============================================================================

/** Token reference (for docs / JS access — values resolve via CSS variables). */
export const tokens = {
  colors: {
    background: "var(--color-background)",
    foreground: "var(--color-foreground)",
    primary: "var(--color-primary)",
    primaryForeground: "var(--color-primary-foreground)",
    secondary: "var(--color-secondary)",
    secondaryForeground: "var(--color-secondary-foreground)",
    muted: "var(--color-muted)",
    mutedForeground: "var(--color-muted-foreground)",
    accent: "var(--color-accent)",
    accentForeground: "var(--color-accent-foreground)",
    card: "var(--color-card)",
    cardForeground: "var(--color-card-foreground)",
    border: "var(--color-border)",
    ring: "var(--color-ring)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    error: "var(--color-error)",
    info: "var(--color-info)",
  },
  fonts: {
    sans: "var(--font-sans)",
    mono: "var(--font-mono)",
    display: "var(--font-display)",
  },
  // Global content width — value lives in globals.css §5 (--container-max).
  layout: {
    containerMax: "var(--container-max)",
  },
} as const;

// ---- BUTTONS ---------------------------------------------------------------
export const buttonBase =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export const buttonVariants = {
  // Default action — teal accent (legible on light AND dark)
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-hover shadow-[var(--shadow-accent)] focus-visible:outline-accent",
  // Brand button — Enterprise Blue (use on light surfaces)
  secondary:
    "bg-primary text-primary-foreground focus-visible:outline-primary",
  brand:
    "bg-primary text-primary-foreground focus-visible:outline-primary",
  // Quiet, bordered
  ghost:
    "bg-transparent text-foreground ring-1 ring-border hover:ring-muted-foreground/40 hover:bg-card focus-visible:outline-accent",
  // Light surface, Enterprise-Blue text + border (pairs with a solid brand primary)
  outline:
    "bg-card text-primary ring-1 ring-primary/25 hover:ring-primary/50 hover:bg-primary/[0.04] focus-visible:outline-primary",
  // For dark backgrounds
  white: "bg-card text-foreground hover:bg-secondary focus-visible:outline-card",
  // Bordered, for dark backgrounds (footer / dark hero)
  outlineDark:
    "bg-transparent text-white ring-1 ring-white/25 hover:ring-white/45 hover:bg-white/5 focus-visible:outline-white",
} as const;

export const buttonSizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

// ---- CARDS -----------------------------------------------------------------
export const cardVariants = {
  // White elevated card on light backgrounds
  surface: "rounded-2xl border border-border bg-card text-card-foreground",
  // Subtle filled card (muted/secondary)
  muted: "rounded-2xl border border-border bg-secondary/40 text-card-foreground",
  // Accent-tinted highlight
  accent: "rounded-2xl border border-accent/30 bg-accent/5 text-card-foreground",
  // Card for dark sections
  dark: "rounded-2xl border border-white/10 bg-white/[0.03] text-white",
} as const;

export const cardHover =
  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]";

export type CardVariant = keyof typeof cardVariants;

// ---- BADGES ----------------------------------------------------------------
export const badgeVariants = {
  neutral: "bg-secondary text-secondary-foreground",
  accent: "bg-accent/12 text-accent-hover",
  brand: "bg-primary/10 text-primary",
  champagne: "bg-gold-500/15 text-gold-600",
  success: "bg-success/12 text-success",
  outline: "border border-border text-muted-foreground",
} as const;

export type BadgeVariant = keyof typeof badgeVariants;

// ---- INPUTS ----------------------------------------------------------------
export const inputBase =
  "h-11 w-full rounded-lg border border-border bg-card px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus-visible:outline-none";

// ---- SECTION TONES ---------------------------------------------------------
export const sectionTones = {
  light: "bg-background text-foreground",
  white: "bg-card text-foreground",
  muted: "bg-muted/50 text-foreground",
  dark: "bg-primary text-white",
} as const;

export type SectionTone = keyof typeof sectionTones;
