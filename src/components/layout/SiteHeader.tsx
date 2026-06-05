"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { PageBanner } from "./PageBanner";

// useLayoutEffect on the client (measure before paint), useEffect on the server.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Fixed header (banner + navbar). Top-anchored: shown at the top of the page,
// slides up out of view once you scroll past it, slides back when you return near
// the top.
//
// Why it now flows instead of flickering:
//  • Show/hide is a transform only (GPU, no reflow) — the old version animated a
//    collapsing spacer's HEIGHT every toggle, which jerked the whole page.
//  • The spacer is now CONSTANT (always the header's height). It lives at the very
//    top of the document, so once you've scrolled past the header it's off-screen —
//    a hidden header therefore leaves no visible gap, and nothing reflows.
//  • Position-based threshold with hysteresis (hide past the header, reveal under
//    half of it), rAF-coalesced like ScrollToTop, so state flips once per crossing.
export function SiteHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [headerH, setHeaderH] = useState(105); // SSR estimate; refined on mount

  // On the developer hub the sidebar is `sticky top-28`, so it relies on the header
  // staying put — keep the header pinned (never slides away) on those routes.
  const pinned = pathname?.startsWith("/developers") ?? false;

  // Keep the spacer matched to the real header height (the banner can wrap).
  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setHeaderH(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (pinned) {
      setHidden(false); // always visible on developer routes
      return;
    }
    let raf = 0;
    const onScroll = () => {
      if (raf) return; // coalesce scroll bursts into one rAF tick
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        // Hide after a short scroll; reveal once you're back near the very top.
        // Hysteresis (gap between the two) keeps it from chattering at the edge.
        const HIDE_AT = 48;
        const SHOW_AT = 16;
        setHidden((prev) => {
          if (!prev && y > HIDE_AT) return true; // scrolled a little → hide
          if (prev && y < SHOW_AT) return false; // back near the top → reveal
          return prev; // dead-band → no change (React bails, no re-render)
        });
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // sync to a restored scroll position on mount
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pinned]);

  return (
    <>
      <div
        id="site-header"
        ref={ref}
        className={`fixed inset-x-0 top-0 z-50 transform-gpu transition-transform duration-300 ease-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <PageBanner />
        <Navbar />
      </div>

      {/* Constant spacer — reserves the header's height at the document top so content
          starts below it. It scrolls off-screen once you pass the header, so a hidden
          header never leaves a visible gap, and its fixed height never reflows. */}
      <div aria-hidden style={{ height: headerH }} />
    </>
  );
}
