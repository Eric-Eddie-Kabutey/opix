"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { DocsSidebar } from "./DocsSidebar";

// Mobile/tablet (below lg) side drawer for the developers sidebar. A "Developer
// menu" button opens a left-anchored panel that slides in over a dimmed overlay —
// the same DocsSidebar as desktop, just off-canvas. Closes on overlay tap, on the
// close button, on Escape, and on route change; locks body scroll while open.
export function DocsMobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close whenever the route changes (a link inside was tapped).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + wire Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="contents lg:hidden">
      {/* Compact panel-toggle, meant to sit inline beside the breadcrumbs. */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="docs-drawer"
        aria-label="Open developer menu"
        className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-slate-200 bg-white text-navy-900 transition-colors hover:bg-slate-50 lg:hidden"
      >
        <Icon name="menu" className="h-4.5 w-4.5" width={18} height={18} />
      </button>

      {/* Overlay — fades, click closes. pointer-events toggle lets it ignore taps
          when hidden so it never blocks the page. */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-[60] bg-navy-950/40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Left drawer — slides in from off-canvas. */}
      <div
        id="docs-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Developer menu"
        className={`fixed inset-y-0 left-0 z-[70] flex w-[82%] max-w-xs flex-col bg-white shadow-[var(--shadow-lift)] transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <span className="font-display text-base text-navy-900">Developers</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-navy-900"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-6">
          <DocsSidebar onNavigate={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
}
