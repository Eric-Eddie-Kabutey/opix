import type { Metadata } from "next";
import {
  careersMeta,
  careersHero,
  whyOpix,
  culture,
  benefits,
  applicationProcess,
  careersFaq,
} from "@/content/careers";
import { faqSchema } from "@/content/seo";
import { site } from "@/content/site";
import { Section, SectionHeader, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { StatsBar } from "@/components/sections/StatsBar";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CheckList } from "@/components/ui/CheckList";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ApplicationProcessTimeline } from "@/components/careers/Timeline";
import { RoleExplorer } from "@/components/careers/RoleExplorer";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: careersMeta.title,
  description: careersMeta.description,
  keywords: careersMeta.keywords,
  alternates: { canonical: `${site.url}/careers` },
  openGraph: { title: careersMeta.title, description: careersMeta.description, url: `${site.url}/careers` },
};

export default function CareersPage() {
  return (
    <>
      <JsonLd data={faqSchema(careersFaq)} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-aurora">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="container-page relative py-20 md:py-28">
          <div className="max-w-3xl">
            <Eyebrow onDark>{careersHero.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-[1.06] text-white md:text-5xl lg:text-6xl">
              {careersHero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{careersHero.subheadline}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={careersHero.primary.href} size="lg" withArrow>{careersHero.primary.label}</Button>
              <Button href={careersHero.secondary.href} variant="white" size="lg">{careersHero.secondary.label}</Button>
            </div>
          </div>
          <div className="mt-12">
            <StatsBar stats={careersHero.stats} onDark />
          </div>
          <p className="mt-6 text-sm text-slate-400">{careersHero.trustLine}</p>
        </div>
      </section>

      {/* WHY OPIX */}
      <Section tone="white">
        <SectionHeader eyebrow={whyOpix.label} title={whyOpix.headline} intro={whyOpix.intro} align="center" className="mb-14" />
        <FeatureGrid features={whyOpix.values} columns={3} />
      </Section>

      {/* CULTURE */}
      <Section tone="dark" id="culture">
        <SectionHeader eyebrow={culture.label} title={culture.headline} intro={culture.intro} onDark className="mb-12" />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {culture.pillars.map((p) => (
            <div key={p.title} className="bg-navy-900 p-7">
              <h3 className="font-display text-xl text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BENEFITS */}
      <Section tone="light">
        <SectionHeader eyebrow={benefits.label} title={benefits.headline} intro={benefits.intro} align="center" className="mb-14" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.categories.map((cat) => (
            <div key={cat.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                <Icon name={cat.icon} className="h-5.5 w-5.5" width={22} height={22} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-navy-900">{cat.title}</h3>
              <CheckList items={cat.items} className="mt-4 [&_span]:text-xs" />
            </div>
          ))}
        </div>
      </Section>

      {/* OPEN ROLES */}
      <Section tone="white" id="open-roles">
        <SectionHeader eyebrow="Open Roles" title="Find your place on the team." align="center" className="mb-12" />
        <RoleExplorer />
      </Section>

      {/* PROCESS */}
      <Section tone="light">
        <SectionHeader eyebrow={applicationProcess.label} title={applicationProcess.headline} intro={applicationProcess.intro} align="center" className="mb-12" />
        <ApplicationProcessTimeline steps={applicationProcess.steps} />
        <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          {applicationProcess.commitments.map((c) => (
            <li key={c} className="flex items-start gap-2.5 text-sm text-slate-600">
              <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-teal-600" strokeWidth={2.5} />
              {c}
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <SectionHeader eyebrow="Common Questions" title="What candidates ask us." align="center" className="mb-12" />
        <FAQAccordion faqs={careersFaq} />
      </Section>

      <CTASection
        headline="Ready to build Africa's digital future?"
        subheadline="We're waiting for you."
        primary={{ label: "View Open Roles", href: "#open-roles" }}
        secondary={{ label: "Send a General Application", href: "/careers/apply/general-application" }}
      />
    </>
  );
}
