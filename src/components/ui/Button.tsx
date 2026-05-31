import Link from "next/link";
import type { ComponentProps } from "react";
import { Icon } from "./Icon";
import { AnimatedShinyText } from "./animated-shiny-text";
import { cn } from "@/lib/utils";
import {
  buttonBase,
  buttonVariants,
  buttonSizes,
  type ButtonVariant,
  type ButtonSize,
} from "@/lib/theme";

// Button styles are centralized in src/lib/theme.ts (buttonVariants / buttonSizes).
// Edit there to restyle every button in the app.
type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  withArrow?: boolean;
  external?: boolean;
  shiny?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<"button">, "ref">;

// Variants with a dark surface (light text) → the shimmer should sweep in white.
const darkSurfaceVariants: ButtonVariant[] = ["primary", "secondary", "brand"];

export function Button({
  variant = "primary",
  size = "md",
  href,
  withArrow,
  external,
  shiny = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const cls = cn(buttonBase, buttonVariants[variant], buttonSizes[size], className);

  const label = shiny ? (
    <AnimatedShinyText
      className={darkSurfaceVariants.includes(variant) ? "text-white/45 via-white" : undefined}
    >
      {children}
    </AnimatedShinyText>
  ) : (
    children
  );

  const inner = (
    <>
      <span>{label}</span>
      {withArrow && (
        <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    const isExternal = external ?? href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
