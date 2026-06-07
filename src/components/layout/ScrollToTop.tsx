"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";

// Floating "back to top" control. Appears once the user has scrolled roughly past
// the hero (≈ one viewport — heroes across the site are all near full-height), on
// every page since it lives in the root layout. Smooth-scrolls to the top, easing
// in/out. Respects reduced motion (instant jump, fade-only reveal).
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return; // coalesce scroll bursts into one rAF tick
      raf = requestAnimationFrame(() => {
        raf = 0;
        setVisible(window.scrollY > window.innerHeight * 0.8);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // sync on mount (e.g. restored scroll position)
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Scroll back to top"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.9 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-primary text-white shadow-[var(--shadow-lift)] transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Icon
            name="chevron-down"
            className="h-5 w-5 rotate-180 transition-transform duration-200 group-hover:-translate-y-0.5"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
