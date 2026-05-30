import type { Metadata } from "next";
import { apiReference, codeExamples } from "@/content/apiReference";
import { pageMeta } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { EndpointGroup } from "@/components/dev/Endpoints";
import { CodeTabs } from "@/components/dev/CodeTabs";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = pageMeta({
  title: apiReference.meta.title,
  description: apiReference.meta.description,
  path: "/api-reference",
});

export default function ApiReferencePage() {
  return (
    <>
      <PageHero
        eyebrow={apiReference.label}
        title={apiReference.headline}
        subtitle={apiReference.intro}
        crumbs={[{ name: "Home", href: "/" }, { name: "API Reference", href: "/api-reference" }]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <code className="rounded-lg border border-white/10 bg-navy-950 px-3 py-1.5 font-mono text-sm text-teal-300">
            {apiReference.baseUrl}
          </code>
          <Button href={apiReference.cta.secondary.href} variant="white" size="sm">
            {apiReference.cta.secondary.label}
          </Button>
        </div>
      </PageHero>

      <Section tone="light">
        {/* Security note */}
        <div className="mb-10 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
          <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-teal-500/10 text-teal-600">
            <Icon name="lock" className="h-4.5 w-4.5" width={18} height={18} />
          </span>
          <p className="text-sm leading-relaxed text-slate-600">{apiReference.securityNote}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {apiReference.groups.map((g) => (
            <EndpointGroup key={g.name} group={g} />
          ))}
        </div>

        {/* PLACEHOLDER: full request/response schemas are not provided in the source
            docs. Endpoint signatures + descriptions shown; deeper schemas "coming soon". */}
        <p className="mt-6 text-center text-xs text-slate-400">
          Full request &amp; response schemas are available in the interactive sandbox — schema explorer coming soon.
        </p>
      </Section>

      <Section tone="dark">
        <h2 className="mb-10 text-center font-display text-3xl text-white">Try it in your language</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {codeExamples.map((ex) => (
            <div key={ex.title}>
              <h3 className="mb-3 text-sm font-medium text-white">{ex.title}</h3>
              <CodeTabs tabs={ex.tabs} title={ex.title} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
