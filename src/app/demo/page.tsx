import type { Metadata } from "next";
import { demo } from "@/content/company";
import { howItWorks } from "@/content/home";
import { pageMeta } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = pageMeta({
  title: demo.meta.title,
  description: demo.meta.description,
  path: "/demo",
});

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Demo"
        title={demo.headline}
        subtitle={demo.subheadline}
        primary={{ label: "Book a Walkthrough", href: "/contact" }}
        secondary={{ label: "Start for Free", href: "/signup" }}
        crumbs={[{ name: "Home", href: "/" }, { name: "Demo", href: "/demo" }]}
      />

      <Section tone="white">
        {/* PLACEHOLDER: video embed — source docs reference a 2-minute demo, not provided. */}
        <div className="relative grid aspect-video w-full place-items-center overflow-hidden rounded-3xl bg-aurora">
          <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
          <button className="group relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_0_0_8px_rgba(47,125,115,0.18)] transition-transform hover:scale-105">
            <Icon name="play" className="h-7 w-7" />
            <span className="sr-only">Play 2-minute demo</span>
          </button>
          <p className="absolute bottom-6 left-6 font-mono text-xs text-slate-400">opix · 2-minute product tour</p>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeader eyebrow={howItWorks.label} title={howItWorks.headline} align="center" className="mb-12" />
        <div className="grid gap-6 md:grid-cols-3">
          {howItWorks.steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-slate-200 bg-white p-7">
              <span className="font-display text-4xl text-teal-600">{step.number}</span>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/contact" variant="secondary" size="lg" withArrow>
            Book a personalized walkthrough
          </Button>
        </div>
      </Section>
    </>
  );
}
