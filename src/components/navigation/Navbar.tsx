"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/content/navigation";
import { site } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const open = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const isActive = (item: (typeof primaryNav)[number]) =>
    item.href
      ? pathname === item.href
      : item.groups?.some((g) => g.links.some((l) => pathname.startsWith(l.href.split("#")[0]))) ?? false;

  return (
    <header
      // Positioning + scroll show/hide animation is handled by the SiteHeader
      // wrapper; this stays `relative` so the mega panel anchors correctly.
      className={cn(
        "relative z-40 border-b transition-colors duration-200",
        // Mega panel open → solid card bg so the dropdown reads.
        // Scrolled (the `scrolled` state) → reveal the bottom border.
        // At the very top → seamless, borderless.
        openMenu
          ? "border-border bg-card"
          : scrolled
            ? "border-border bg-background"
            : "border-transparent bg-background"
      )}
      onMouseLeave={scheduleClose}
    >
      <Container as="nav" className="flex h-16 items-center justify-between">
        {/* Left — logo + primary links */}
        <div className="flex items-center gap-14">
          <Logo />
          <ul className="ml-3 hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) => {
              const active = isActive(item);
              const isOpen = openMenu === item.label;
              const pill = "rounded-full px-3.5 py-2 type-nav transition-colors";
              return item.groups ? (
                <li key={item.label} onMouseEnter={() => open(item.label)}>
                  <button
                    className={cn(
                      pill,
                      "flex items-center gap-1",
                      isOpen || active ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-controls={`mega-${item.label}`}
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                  >
                    {item.label}
                    <Icon name="chevron-down" className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")} />
                  </button>
                </li>
              ) : (
                <li key={item.label} onMouseEnter={scheduleClose}>
                  <Link
                    href={item.href!}
                    className={cn(pill, active ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right — auth + CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link href={site.ctas.login.href} className="type-nav rounded-full px-3.5 py-2 text-muted-foreground transition-colors hover:text-foreground">
            {site.ctas.login.label}
          </Link>
          <Button href={site.ctas.getStarted.href} variant="secondary" size="sm" withArrow>
            {site.ctas.getStarted.label}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Icon name={mobileOpen ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </Container>

      {/* Wide mega panel (desktop) */}
      {openMenu && <MegaPanel label={openMenu} onEnter={() => open(openMenu)} />}

      {mobileOpen && <MobileMenu onNavigate={() => setMobileOpen(false)} />}
    </header>
  );
}

function MegaPanel({ label, onEnter }: { label: string; onEnter: () => void }) {
  const item = primaryNav.find((i) => i.label === label);
  if (!item?.groups) return null;

  // running index → staggered "fly-up" of links across the whole panel
  let linkIndex = 0;

  return (
    <div className="absolute inset-x-0 top-full hidden lg:block overflow-hidden rounded-b-2xl border border-t-0 border-border bg-card shadow-[var(--shadow-lift)]" onMouseEnter={onEnter}>
      <Container>
        <div
          id={`mega-${label}`}
          role="menu"
          aria-label={label}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-12 gap-8 py-8">
            {/* Left contextual blurb */}
            <div className="col-span-4 border-r border-border/20 pr-8">
              <h2 className="type-h3 max-w-[14rem] text-foreground">{item.blurb?.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.blurb?.description}</p>
              {item.blurb?.cta && (
                <Link
                  href={item.blurb.cta.href}
                  className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                >
                  {item.blurb.cta.label}
                  <Icon name="arrow-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>

            {/* Right grouped links */}
            <div
              className="col-span-8 grid gap-x-8 gap-y-6"
              style={{ gridTemplateColumns: `repeat(${Math.min(item.groups.length, 3)}, minmax(0,1fr))` }}
            >
              {item.groups.map((group) => (
                <div key={group.heading}>
                  <p className="eyebrow mb-3 text-muted-foreground/70">{group.heading}</p>
                  <ul className="space-y-0.5">
                    {group.links.map((link) => (
                      <li
                        key={link.label}
                        className="animate-fade-up"
                        style={{ animationDelay: `${linkIndex++ * 45}ms` }}
                      >
                        <Link
                          href={link.href}
                          role="menuitem"
                          className="group/link flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/70"
                        >
                          {link.icon && (
                            <span className="mt-0.5 text-primary transition-colors">
                              <Icon name={link.icon} className="h-4 w-4" />
                            </span>
                          )}
                          <span className="min-w-0">
                            <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                              {link.label}
                              <Icon name="arrow-right" className="h-3 w-3 -translate-x-1 text-primary opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                            </span>
                            {/* {link.description && <span className="mt-0.5 block text-xs text-muted-foreground">{link.description}</span>} */}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="lg:hidden">
      <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-card px-5 pb-8 pt-2">
        <ul className="divide-y divide-border/60">
          {primaryNav.map((item) =>
            item.groups ? (
              <li key={item.label} className="py-3">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-base font-semibold text-foreground">
                    {item.label}
                    <Icon name="chevron-down" className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-2 space-y-4 pl-1">
                    {item.groups.map((group) => (
                      <div key={group.heading}>
                        <p className="eyebrow mb-1.5 text-muted-foreground/70">{group.heading}</p>
                        <ul className="space-y-0.5">
                          {group.links.map((link) => (
                            <li key={link.label}>
                              <Link href={link.href} onClick={onNavigate} className="block py-2 text-sm text-muted-foreground">
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              </li>
            ) : (
              <li key={item.label} className="py-3">
                <Link href={item.href!} onClick={onNavigate} className="block text-base font-semibold text-foreground">
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <div className="mt-6 flex flex-col gap-3">
          <Button href={site.ctas.getStarted.href} variant="secondary" size="lg" withArrow onClick={onNavigate}>
            {site.ctas.getStarted.label}
          </Button>
          <Button href={site.ctas.login.href} variant="ghost" size="lg" onClick={onNavigate}>
            {site.ctas.login.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
