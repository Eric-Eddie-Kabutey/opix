"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Icon } from "@/components/ui/Icon";
import { resolveBanner } from "@/content/banners";

// Slim, route-aware announcement strip directly below the navbar.
// Copy is centralized in src/content/banners.ts.
export function PageBanner() {
  const pathname = usePathname();
  const banner = resolveBanner(pathname);

  return (
    <div className="border-b border-border bg-muted/60">
      <Container>
        <Link
          href={banner.cta.href}
          className="group flex items-center justify-center gap-3 py-2.5 text-center"
        >
          <span className="inline-flex flex-none items-center rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
            {banner.badge}
          </span>
          <span className="truncate text-xs text-foreground sm:text-sm">{banner.text}</span>
          <span className="hidden flex-none items-center gap-1 text-xs font-medium text-primary sm:inline-flex">
            {banner.cta.label}
            <Icon name="arrow-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </Container>
    </div>
  );
}
