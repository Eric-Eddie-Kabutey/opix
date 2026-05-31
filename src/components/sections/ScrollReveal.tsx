"use client";

import { Children, isValidElement, useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export type RevealDirection = "left" | "right" | "top" | "bottom";
export type RevealOrder = "forward" | "reverse";

// Reusable stagger reveal. Each direct child slides in from `direction` when the
// grid enters the viewport. This is a one-shot, timeline-based reveal (NOT scroll-
// scrubbed) so it composes with `position: sticky` stacking sections — a pinned
// section freezes scroll progress, which would otherwise strand a scrubbed reveal
// mid-animation. `order="reverse"` animates the last child first. Respects reduced
// motion. API is unchanged from the previous scroll-linked version.
export function ScrollReveal({
  children,
  className,
  direction = "bottom",
  order = "forward",
  distance = 80,
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  order?: RevealOrder;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Play once when ~a quarter of the grid is visible, then stay put (no revert on
  // scroll) — important inside sticky sections that pin and don't scroll back out.
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const items = Children.toArray(children).filter(isValidElement);
  const horizontal = direction === "left" || direction === "right";
  const from =
    direction === "left" ? -distance : direction === "right" ? distance : direction === "top" ? -distance : distance;

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, staggerDirection: order === "reverse" ? -1 : 1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, ...(horizontal ? { x: from } : { y: from }) },
    show: {
      opacity: 1,
      ...(horizontal ? { x: 0 } : { y: 0 }),
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className, horizontal && "overflow-x-clip")}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {items.map((child, i) => (
        <motion.div key={child.key ?? i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
