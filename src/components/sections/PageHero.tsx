import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

type CTA = { label: string; href: string };

// Shared dark hero for inner pages — deep navy gradient + network grid (design system §3).
export function PageHero({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primary?: CTA;
  secondary?: CTA;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-aurora">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="container-page relative py-16 md:py-24">
        {crumbs && (
          <div className="mb-8">
            <Breadcrumbs items={crumbs} onDark />
          </div>
        )}
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow onDark>{eyebrow}</Eyebrow>}
          <h1 className="mt-4 font-display text-4xl leading-[1.08] text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{subtitle}</p>}
          {(primary || secondary) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primary && (
                <Button href={primary.href} size="lg" withArrow>
                  {primary.label}
                </Button>
              )}
              {secondary && (
                <Button href={secondary.href} variant="white" size="lg">
                  {secondary.label}
                </Button>
              )}
            </div>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}
