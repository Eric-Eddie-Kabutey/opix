import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Single source of truth for content width. The max-width itself is the CSS var
// --container-max (globals.css §5) consumed by the .container-page utility — change
// it there to resize the whole site. This component just applies that utility.
export function Container({
  as: Tag = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={cn("container-page", className)}>{children}</Tag>;
}
