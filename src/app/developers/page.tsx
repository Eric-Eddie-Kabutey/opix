import type { Metadata } from "next";
import {
  devHero,
  techStack,
  quickStart,
  sdks,
  community,
} from "@/content/developers";
import { apiReference, codeExamples } from "@/content/apiReference";
import { pageMeta, softwareAppSchema } from "@/content/seo";
import { Section, SectionHeader, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CheckList } from "@/components/ui/CheckList";
import { StatsBar } from "@/components/sections/StatsBar";
import { CodeBlock } from "@/components/dev/CodeBlock";
import { CodeTabs } from "@/components/dev/CodeTabs";
import { SDKCard } from "@/components/dev/SDKCard";
import { EndpointGroup } from "@/components/dev/Endpoints";
import { DataFlow } from "@/components/dev/ArchitectureDiagram";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMeta({
  title: "Developers | Java APIs, Next.js SDKs & Guides",
  description:
    "Integrate OPIX in minutes. Enterprise-grade Java REST APIs with Spring Boot. Modern Next.js frontend SDKs. Comprehensive docs, interactive sandbox, and code examples.",
  path: "/developers",
});

export default function DevelopersPage() {
  return (
    <>
      <JsonLd data={softwareAppSchema({ name: "OPIX SDKs", description: devHero.subheadline, version: "2.1.0" })} />

      {/* HERO with split code preview */}
      <section className="relative overflow-hidden bg-aurora">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="container-page relative py-16 md:py-24">
          <div className="max-w-3xl">
            <Eyebrow onDark>{devHero.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-white md:text-5xl lg:text-6xl">
              {devHero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{devHero.subheadline}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={devHero.primary.href} size="lg" withArrow>{devHero.primary.label}</Button>
              <Button href={devHero.secondary.href} variant="white" size="lg">{devHero.secondary.label}</Button>
            </div>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <CodeBlock lang="java" filename="Backend.java" code={devHero.javaCode} tone="dark" />
            <CodeBlock lang="tsx" filename="OnboardingPage.tsx" code={devHero.nextCode} tone="dark" />
          </div>

          <p className="mt-8 text-sm text-slate-400">{devHero.trustLine}</p>
          <div className="mt-6">
            <StatsBar stats={devHero.stats} onDark />
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <Section tone="white">
        <SectionHeader eyebrow={techStack.label} title={techStack.headline} intro={techStack.intro} align="center" className="mb-14" />
        <div className="grid gap-6 lg:grid-cols-2">
          <StackCard data={techStack.backend} icon="code" />
          <StackCard data={techStack.frontend} icon="laptop" />
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-primary p-7 text-white">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
              <Icon name="network" className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-semibold">{techStack.middleware.title}</h3>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400">{techStack.middleware.body}</p>
          <div className="mt-6">
            <DataFlow steps={techStack.middleware.flow} />
          </div>
        </div>
      </Section>

      {/* QUICK START */}
      <Section tone="light" id="quick-start">
        <SectionHeader eyebrow={quickStart.label} title={quickStart.headline} intro={quickStart.intro} align="center" className="mb-14" />
        <div className="grid gap-6 lg:grid-cols-2">
          {[quickStart.java, quickStart.next].map((path) => (
            <div key={path.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-full bg-teal-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-teal-700">{path.badge}</span>
                <h3 className="text-lg font-semibold text-navy-900">{path.title}</h3>
              </div>
              <ol className="space-y-5">
                {path.steps.map((step, i) => (
                  <li key={step.title}>
                    <p className="mb-2 flex items-center gap-2 text-sm font-medium text-navy-900">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-white">{i + 1}</span>
                      {step.title}
                    </p>
                    <CodeBlock lang={step.lang} code={step.code} />
                  </li>
                ))}
              </ol>
              <Button href={path.cta.href} variant="ghost" className="mt-6 w-full" withArrow>{path.cta.label}</Button>
            </div>
          ))}
        </div>
      </Section>

      {/* API REFERENCE PREVIEW */}
      <Section tone="white">
        <SectionHeader eyebrow={apiReference.label} title={apiReference.headline} intro={apiReference.intro} align="center" className="mb-12" />
        <div className="grid gap-5 lg:grid-cols-2">
          {apiReference.groups.slice(0, 4).map((g) => (
            <EndpointGroup key={g.name} group={g} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/developers/api-reference" variant="secondary" size="lg" withArrow>Browse Full API Reference</Button>
        </div>
      </Section>

      {/* CODE EXAMPLES */}
      <Section tone="dark">
        <SectionHeader eyebrow="Code Examples" title="Copy, paste, adapt. Real code for real use cases." onDark align="center" className="mb-12" />
        <div className="grid gap-6 lg:grid-cols-3">
          {codeExamples.map((ex) => (
            <div key={ex.title}>
              <h3 className="mb-3 text-sm font-medium text-white">{ex.title}</h3>
              <CodeTabs tabs={ex.tabs} title={ex.title} tone="dark" />
            </div>
          ))}
        </div>
      </Section>

      {/* SDKS */}
      <Section tone="light" id="sdks">
        <SectionHeader eyebrow={sdks.label} title={sdks.headline} intro={sdks.intro} align="center" className="mb-12" />
        <div className="grid gap-5 lg:grid-cols-3">
          {sdks.cards.map((sdk) => (
            <SDKCard key={sdk.name} sdk={sdk} />
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="eyebrow mb-4 text-slate-400">Coming soon</p>
          <ul className="flex flex-wrap gap-2">
            {sdks.comingSoon.map((s) => (
              <li key={s} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600">{s}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* COMMUNITY */}
      <Section tone="white">
        <SectionHeader eyebrow={community.label} title={community.headline} align="center" className="mb-12" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {community.channels.map((c) => (
            <a
              key={c.title}
              href={c.cta.href}
              target={c.cta.href.startsWith("http") ? "_blank" : undefined}
              rel={c.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-navy-900">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy-900">{c.title}</h3>
              <p className="mt-1.5 flex-1 text-sm text-slate-600">{c.body}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal-600">
                {c.cta.label}
                <Icon name="arrow-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
        <div className="mt-10">
          <StatsBar stats={community.stats.map((s) => {
            const [value, ...rest] = s.split(" ");
            return { value, label: rest.join(" ") };
          })} />
        </div>
      </Section>

    </>
  );
}

function StackCard({
  data,
  icon,
}: {
  data: { title: string; tagline: string; features: string[]; performance: string[]; cta: { label: string; href: string } };
  icon: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
        <Icon name={icon} className="h-5.5 w-5.5" width={22} height={22} />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-navy-900">{data.title}</h3>
      <p className="mt-1 text-sm font-medium text-teal-600">{data.tagline}</p>
      <CheckList items={data.features} className="mt-6" />
      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="eyebrow mb-3 text-slate-400">Performance</p>
        <ul className="space-y-1.5">
          {data.performance.map((p) => (
            <li key={p} className="text-xs text-slate-600">{p}</li>
          ))}
        </ul>
      </div>
      <Button href={data.cta.href} variant="ghost" className="mt-6" withArrow>{data.cta.label}</Button>
    </div>
  );
}
