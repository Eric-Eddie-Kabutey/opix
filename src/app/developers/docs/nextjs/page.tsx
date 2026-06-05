import type { Metadata } from "next";
import { quickStart, techStack } from "@/content/developers";
import { codeExamples } from "@/content/apiReference";
import { pageMeta } from "@/content/seo";
import { DocsLayout } from "@/components/dev/DocsLayout";
import { CodeBlock } from "@/components/dev/CodeBlock";
import { CheckList } from "@/components/ui/CheckList";

export const metadata: Metadata = pageMeta({
  title: "Next.js SDK Guide | OPIX Docs",
  description:
    "Build customer-facing identity flows with the OPIX Next.js SDK. Install the package, configure the provider, and drop in biometric capture and consent components.",
  path: "/developers/docs/nextjs",
});

export default function NextDocsPage() {
  const nextExample = codeExamples[0].tabs.find((t) => t.lang === "tsx")!;

  return (
    <DocsLayout
      title="Next.js SDK"
      description="Drop-in React components and hooks for identity verification, consent flows, and escrow dashboards. App Router ready."
      crumbs={[{ name: "Home", href: "/" }, { name: "Developers", href: "/developers" }, { name: "Docs", href: "/developers/docs" }, { name: "Next.js SDK", href: "/developers/docs/nextjs" }]}
    >
      <section>
        <h2 className="font-display text-2xl text-navy-900">Why Next.js</h2>
        <p className="mt-3 text-slate-600">{techStack.frontend.tagline}</p>
        <CheckList items={techStack.frontend.features.slice(0, 5)} className="mt-5" />
      </section>

      {quickStart.next.steps.map((step, i) => (
        <section key={step.title}>
          <h2 className="font-display text-2xl text-navy-900">
            <span className="mr-2 font-mono text-base text-teal-600">{String(i + 1).padStart(2, "0")}</span>
            {step.title}
          </h2>
          <div className="mt-4">
            <CodeBlock lang={step.lang} code={step.code} />
          </div>
        </section>
      ))}

      <section>
        <h2 className="font-display text-2xl text-navy-900">Full example: onboarding flow</h2>
        <div className="mt-4">
          <CodeBlock lang="tsx" filename="app/onboarding/page.tsx" code={nextExample.code} />
        </div>
      </section>
    </DocsLayout>
  );
}
