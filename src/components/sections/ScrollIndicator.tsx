"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";

// Minimal "scroll for more" cue, centered at the bottom of a hero. A downward
// chevron arrow that bobs gently on a loop. Fades itself out once the user has
// scrolled a little (it has done its job). Reduced motion keeps it static.
// Decorative — aria-hidden.
export function ScrollIndicator() {
  const reduce = useReducedMotion();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-6 flex justify-center transition-opacity duration-500 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-1.5 text-foreground/45">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">Scroll</span>

        {/* Bobbing downward arrow */}
        <motion.span
          className="block"
          animate={reduce ? undefined : { y: [0, 6, 0], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon name="chevron-down" className="h-5 w-5" />
        </motion.span>
      </div>
    </div>
  );
}
