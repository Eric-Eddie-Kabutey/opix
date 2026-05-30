import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { badgeVariants, type BadgeVariant } from "@/lib/theme";

// Badge styles are centralized in src/lib/theme.ts (badgeVariants). Edit there.
export function Badge({
  variant = "neutral",
  className,
  children,
}: {
  variant?: BadgeVariant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "type-badge inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
