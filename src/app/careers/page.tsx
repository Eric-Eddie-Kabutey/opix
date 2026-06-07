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
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: careersMeta.title,
  description: careersMeta.description,
  keywords: careersMeta.keywords,
  alternates: { canonical: `${site.url}/careers` },
  openGraph: {
    title: careersMeta.title,
    description: careersMeta.description,
    url: `${site.url}/careers`,
  },
};

export default function CareersPage() {
  return (
    <>
      <JsonLd data={faqSchema(careersFaq)} />
      <PageHero
        title={careersHero.headline}
        subtitle={careersHero.subheadline}
        primary={{
          label: careersHero.primary.label,
          href: careersHero.primary.href,
        }}
        secondary={{
          label: careersHero.secondary.label,
          href: careersHero.secondary.href,
        }}
      />

      {/* STAT WIDGET */}
      <div className="container-page py-6 md:py-10 bg-white">
        <StatsBar stats={careersHero.stats} onDark />
        <p className="text-center text-sm text-slate-400 pb-6"> {careersHero.trustLine} </p>
      </div>

      {/* WHY OPIX */}
      <Section tone="white">
        <SectionHeader
          eyebrow={whyOpix.label}
          title={whyOpix.headline}
          intro={whyOpix.intro}
          align="center"
          className="mb-14"
        />
        <FeatureGrid features={whyOpix.values} columns={3} />
      </Section>

      {/* CULTURE */}
      <Section tone="dark" id="culture">
        <SectionHeader
          eyebrow={culture.label}
          title={culture.headline}
          intro={culture.intro}
          onDark
          className="mb-12"
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {culture.pillars.map((p) => (
            <div key={p.title} className="bg-primary p-7">
              <h3 className="font-display text-xl text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* BENEFITS */}
      <Section tone="light">
        <SectionHeader
          eyebrow={benefits.label}
          title={benefits.headline}
          intro={benefits.intro}
          align="center"
          className="mb-14"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                <Icon
                  name={cat.icon}
                  className="h-5.5 w-5.5"
                  width={22}
                  height={22}
                />
              </span>
              <h3 className="mt-5 text-base font-semibold text-navy-900">
                {cat.title}
              </h3>
              <CheckList items={cat.items} className="mt-4 [&_span]:text-xs" />
            </div>
          ))}
        </div>
      </Section>

      {/* OPEN ROLES */}
      <Section tone="white" id="open-roles">
        <SectionHeader
          eyebrow="Open Roles"
          title="Find your place on the team."
          align="center"
          className="mb-12"
        />
        <RoleExplorer />
      </Section>

      {/* PROCESS */}
      <Section tone="light">
        <SectionHeader
          eyebrow={applicationProcess.label}
          title={applicationProcess.headline}
          intro={applicationProcess.intro}
          align="center"
          className="mb-12"
        />
        <ApplicationProcessTimeline steps={applicationProcess.steps} />
        <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          {applicationProcess.commitments.map((c) => (
            <li
              key={c}
              className="flex items-start gap-2.5 text-sm text-slate-600"
            >
              <Icon
                name="check"
                className="mt-0.5 h-4 w-4 flex-none text-teal-600"
                strokeWidth={2.5}
              />
              {c}
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Common Questions"
          title="What candidates ask us."
          align="center"
          className="mb-12"
        />
        <FAQAccordion faqs={careersFaq} />
      </Section>
    </>
  );
}
