import type { Metadata } from "next";
import { apiReference, codeExamples } from "@/content/apiReference";
import { pageMeta } from "@/content/seo";
import { DocsLayout } from "@/components/dev/DocsLayout";
import { EndpointGroup } from "@/components/dev/Endpoints";
import { CodeTabs } from "@/components/dev/CodeTabs";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = pageMeta({
  title: apiReference.meta.title,
  description: apiReference.meta.description,
  path: "/developers/api-reference",
});

export default function ApiReferencePage() {
  return (
    <DocsLayout
      title={apiReference.headline}
      description={apiReference.intro}
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Developers", href: "/developers" },
        { name: "API Reference", href: "/developers/api-reference" },
      ]}
      wide
    >
      {/* Base URL + OpenAPI link + security note */}
      <section>
        <div className="flex flex-wrap items-center gap-3">
          <code className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-sm text-teal-600">
            {apiReference.baseUrl}
          </code>
          <Button href={apiReference.cta.secondary.href} variant="secondary" size="sm">
            {apiReference.cta.secondary.label}
          </Button>
        </div>
        <div className="mt-6 ">
          <p className="text-sm leading-relaxed text-slate-600">{apiReference.securityNote}</p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy-900">Endpoints</h2>
        <div className="mt-5 grid gap-5">
          {apiReference.groups.map((g) => (
            <EndpointGroup key={g.name} group={g} />
          ))}
        </div>
        {/* PLACEHOLDER: full request/response schemas are not provided in the source
            docs. Endpoint signatures + descriptions shown; deeper schemas "coming soon". */}
        <p className="mt-6 text-xs text-slate-400">
          Full request &amp; response schemas are available in the interactive sandbox — schema explorer coming soon.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy-900">Try it in your language</h2>
        <div className="mt-5 grid gap-6">
          {codeExamples.map((ex) => (
            <div key={ex.title} className="min-w-0">
              <h3 className="mb-3 text-sm font-medium text-navy-900">{ex.title}</h3>
              <CodeTabs tabs={ex.tabs} title={ex.title} />
            </div>
          ))}
        </div>
      </section>
    </DocsLayout>
  );
}
