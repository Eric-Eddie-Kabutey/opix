"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PageBanner } from "./PageBanner";
import { Navbar } from "@/components/navigation/Navbar";

// Header group (banner + navbar) that reveals at the very top and glides up + out
// the instant you scroll (same point the navbar bottom-border appears).
//
// The header is `fixed` (so it reserves NO space when hidden) and is paired with a
// spacer whose height collapses from the real header height → 0 in lockstep with the
// slide — so the content rises to fill the gap instead of leaving an empty band.
const SHOW_BELOW = 6; // basically at the top → reveal
const HIDE_ABOVE = 12; // as soon as the border kicks in → hide upward
const ESTIMATED_HEADER_H = 105; // SSR/first-paint estimate; refined by ResizeObserver

// useLayoutEffect on the client (set spacer before paint), useEffect on the server.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [headerH, setHeaderH] = useState(ESTIMATED_HEADER_H);
  const headerRef = useRef<HTMLDivElement>(null);

  // Keep the spacer height matched to the real header height (banner can wrap).
  useIsoLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setHeaderH(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= SHOW_BELOW) setHidden(false);
      else if (y >= HIDE_ABOVE) setHidden(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      {/* Fixed, animated header — out of flow, so it reserves no space when hidden */}
      <div
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[transform,opacity] duration-200 ease-out motion-reduce:transition-none",
          hidden ? "pointer-events-none -translate-y-full opacity-0" : "translate-y-0 opacity-100"
        )}
      >
        <PageBanner />
        <Navbar />
      </div>

      {/* Spacer collapses as the header leaves, so content rises to fill the space */}
      <div
        aria-hidden
        style={{ height: hidden ? 0 : headerH }}
        className="transition-[height] duration-200 ease-out motion-reduce:transition-none"
      />
    </div>
  );
}
