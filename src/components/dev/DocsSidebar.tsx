"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type DocsNavSection = { heading: string; links: { label: string; href: string }[] };

export const docsNav: DocsNavSection[] = [
  {
    heading: "Getting Started",
    links: [
      { label: "Overview", href: "/docs" },
      { label: "Quick Start", href: "/docs#quick-start" },
      { label: "Authentication", href: "/docs#auth" },
    ],
  },
  {
    heading: "Guides",
    links: [
      { label: "Java SDK", href: "/docs/java" },
      { label: "Next.js SDK", href: "/docs/nextjs" },
      { label: "Sandbox", href: "/sandbox" },
    ],
  },
  {
    heading: "Reference",
    links: [
      { label: "API Reference", href: "/api-reference" },
      { label: "Changelog", href: "/developers/changelog" },
      { label: "Status", href: "/status" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  return (
    <nav aria-label="Documentation" className="space-y-7">
      {docsNav.map((section) => (
        <div key={section.heading}>
          <p className="eyebrow mb-2.5 text-slate-400">{section.heading}</p>
          <ul className="space-y-0.5 border-l border-slate-200">
            {section.links.map((link) => {
              const active = pathname === link.href.split("#")[0] && !link.href.includes("#");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
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
        </div>
      ))}
    </nav>
  );
}
