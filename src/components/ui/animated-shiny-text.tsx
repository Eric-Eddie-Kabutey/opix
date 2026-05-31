import type { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";

// magicui AnimatedShinyText — added manually and themed to OPIX tokens (no shadcn
// neutral palette). A muted base text with a brighter band that sweeps across.
// Requires the `animate-shiny-text` utility + `shiny-text` keyframe in globals.css
// (already registered via --animate-shiny-text in @theme).
export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}

export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
  ...props
}: AnimatedShinyTextProps) {
  return (
    <span
      style={{ "--shiny-width": `${shimmerWidth}px` } as CSSProperties}
      className={cn(
        // base (dim) text colour — override via className for dark surfaces.
        // Lower opacity = more contrast against the bright sweeping band.
        "text-foreground/45",
        // the sweeping shimmer
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%]",
        // full-strength shimmer band derived from the brand foreground
        "bg-gradient-to-r from-transparent via-foreground via-50% to-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
