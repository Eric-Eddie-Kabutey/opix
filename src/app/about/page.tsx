import type { Metadata } from "next";
import { about } from "@/content/company";
import { securitySection } from "@/content/home";
import { pageMeta } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SecurityPillars, TrustBadgeRow } from "@/components/sections/SecurityPillars";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = pageMeta({
  title: about.meta.title,
  description: about.meta.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OPIX"
        title={about.hero.headline}
        subtitle={about.hero.subheadline}
        crumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="font-display text-2xl text-navy-900 md:text-3xl">Our story</h2>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            {about.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="light">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <span className="eyebrow text-teal-600">Mission</span>
            <p className="mt-4 font-display text-xl leading-snug text-navy-900">{about.mission}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <span className="eyebrow text-teal-600">Vision</span>
            <p className="mt-4 font-display text-xl leading-snug text-navy-900">{about.vision}</p>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="Values" title="What we stand for." align="center" className="mb-12" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {about.values.map((v, i) => (
            <div key={v.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="font-display text-2xl text-teal-600">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-sm font-semibold text-navy-900">{v.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Security anchor (linked from nav/footer) */}
      <Section tone="dark" id="security">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader eyebrow={securitySection.label} title={securitySection.headline} intro={securitySection.intro} onDark />
            <div className="mt-8">
              <TrustBadgeRow badges={securitySection.badges} onDark />
            </div>
          </div>
          <SecurityPillars pillars={securitySection.pillars} />
        </div>
      </Section>

      <Section tone="light">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="font-display text-xl text-navy-900">The team</h2>
            <p className="mt-4 text-slate-600">{about.team}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="font-display text-xl text-navy-900">Partners & governance</h2>
            <p className="mt-4 text-slate-600">{about.partners}</p>
          </div>
        </div>
      </Section>

      <CTASection
        headline="Want to help build it?"
        subheadline="We're hiring across engineering, product, compliance, and operations."
        primary={{ label: "View Open Roles", href: "/careers" }}
        secondary={{ label: "Talk to Us", href: "/contact" }}
      />
    </>
  );
}
