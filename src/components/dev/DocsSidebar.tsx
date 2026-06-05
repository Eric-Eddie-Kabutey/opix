"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

export type DocsNavLink = { label: string; href: string };
export type DocsNavSection = { heading: string; links: DocsNavLink[] };

// Single source of truth for the Developers section nav. All routes live under
// /developers/* so the whole hub shares one URL hierarchy and this sidebar.
export const docsNav: DocsNavSection[] = [
  {
    heading: "Getting Started",
    links: [
      { label: "Overview", href: "/developers/docs" },
      { label: "Quick Start", href: "/developers/docs#quick-start" },
      { label: "Authentication", href: "/developers/docs#auth" },
    ],
  },
  {
    heading: "SDKs & Guides",
    links: [
      { label: "Java SDK", href: "/developers/docs/java" },
      { label: "Next.js SDK", href: "/developers/docs/nextjs" },
    ],
  },
  {
    heading: "Reference",
    links: [
      { label: "API Reference", href: "/developers/api-reference" },
      { label: "Changelog", href: "/developers/changelog" },
    ],
  },
  {
    heading: "Tools",
    links: [
      { label: "Sandbox", href: "/developers/sandbox" },
      { label: "Status", href: "/developers/status" },
    ],
  },
  {
    heading: "Help",
    links: [{ label: "Support", href: "/developers/support" }],
  },
];

const isActive = (pathname: string, href: string) => {
  const base = href.split("#")[0];
  if (href.includes("#")) return false; // hash links never own the active state
  return pathname === base;
};

// Collapsible section. Auto-opens the group that contains the current route so the
// active link is always visible after navigation.
function Section({
  section,
  pathname,
  onNavigate,
}: {
  section: DocsNavSection;
  pathname: string;
  onNavigate?: () => void;
}) {
  const containsActive = section.links.some((l) => isActive(pathname, l.href));
  const [open, setOpen] = useState(true);
  // Keep a section open if it holds the active route, regardless of manual toggles.
  const expanded = open || containsActive;

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between py-1.5 text-left eyebrow text-slate-400 transition-colors hover:text-slate-600"
      >
        {section.heading}
        <Icon
          name="chevron-down"
          className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {expanded && (
        <ul className="mt-1.5 space-y-0.5 border-l border-slate-200">
          {section.links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                    active
                      ? "border-teal-500 font-medium text-navy-900"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-navy-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function DocsSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Developers" className="space-y-5">
      {docsNav.map((section) => (
        <Section key={section.heading} section={section} pathname={pathname} onNavigate={onNavigate} />
      ))}
    </nav>
  );
}
