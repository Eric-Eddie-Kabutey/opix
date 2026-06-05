"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// The client half of a `stack` Section. It sizes to its children (no full-height
// floor, so short panels don't leave whitespace) and only *pins* (sticky-stacks)
// while it fits the viewport. A panel taller than the screen falls back to normal
// flow — it scrolls through fully instead of pinning at the top and clipping the
// part below the fold. Re-measures on resize / content changes.
export function StackPanel({
  baseClass,
  className,
  id,
  children,
}: {
  baseClass: string;
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  // Assume it fits (pin) so the stack works on first paint; tall panels un-pin
  // once measured. offsetHeight is identical whether sticky or relative, so
  // toggling the class never changes the measurement → no feedback loop.
  const [pinned, setPinned] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setPinned(el.offsetHeight <= window.innerHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      data-pinned={pinned}
      className={cn(baseClass, "py-20 md:py-24", pinned ? "sticky top-0" : "relative", className)}
    >
      <div className="container-page w-full">{children}</div>
    </section>
  );
}
