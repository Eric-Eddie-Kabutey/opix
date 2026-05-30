import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cardVariants, cardHover, type CardVariant } from "@/lib/theme";

// Card styles are centralized in src/lib/theme.ts (cardVariants). Edit there.
export function Card({
  variant = "surface",
  hover = false,
  className,
  children,
}: {
  variant?: CardVariant;
  hover?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn(cardVariants[variant], hover && cardHover, "p-6", className)}>{children}</div>;
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("type-h3 text-foreground", className)}>{children}</h3>;
}

export function CardBody({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("mt-2 text-sm leading-relaxed text-muted-foreground", className)}>{children}</p>;
}
