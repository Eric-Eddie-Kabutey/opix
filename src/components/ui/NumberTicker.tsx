"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// magicui-style number ticker — counts up to `value` once it scrolls into view.
// Prefix/suffix are rendered by the caller around it.
export function NumberTicker({
  value,
  decimalPlaces = 0,
  delay = 0,
  className,
}: {
  value: number;
  decimalPlaces?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 60, stiffness: 120 });
  const inView = useInView(ref, { once: true, margin: "0px" });

  const format = (n: number) =>
    Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(Number(n.toFixed(decimalPlaces)));

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      if (ref.current) ref.current.textContent = format(value);
      return;
    }
    const t = setTimeout(() => motionValue.set(value), delay * 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, delay, reduce]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = format(latest);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spring, decimalPlaces]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {reduce ? format(value) : "0"}
    </span>
  );
}
