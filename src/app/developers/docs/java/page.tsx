import type { Metadata } from "next";
import { quickStart, techStack } from "@/content/developers";
import { codeExamples } from "@/content/apiReference";
import { pageMeta } from "@/content/seo";
import { DocsLayout } from "@/components/dev/DocsLayout";
import { CodeBlock } from "@/components/dev/CodeBlock";
import { CheckList } from "@/components/ui/CheckList";

export const metadata: Metadata = pageMeta({
  title: "Java SDK Guide | OPIX Docs",
  description:
    "Integrate OPIX with Java and Spring Boot. Add the dependency, configure the client, and verify identity in three steps. Reactive WebFlux and HSM support.",
  path: "/developers/docs/java",
});

export default function JavaDocsPage() {
  const javaExample = codeExamples[0].tabs.find((t) => t.lang === "java")!;

  return (
    <DocsLayout
      title="Java SDK"
      description="Integrate OPIX into your Spring Boot or standalone Java application in minutes."
      crumbs={[{ name: "Home", href: "/" }, { name: "Developers", href: "/developers" }, { name: "Docs", href: "/developers/docs" }, { name: "Java SDK", href: "/developers/docs/java" }]}
    >
      <section>
        <h2 className="font-display text-2xl text-navy-900">Why Java</h2>
        <p className="mt-3 text-slate-600">{techStack.backend.tagline} {techStack.intro}</p>
        <CheckList items={techStack.backend.features.slice(0, 5)} className="mt-5" />
      </section>

      {quickStart.java.steps.map((step, i) => (
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
        <h2 className="font-display text-2xl text-navy-900">Full example: enroll a customer</h2>
        <div className="mt-4">
          <CodeBlock lang="java" filename="KycEnrollment.java" code={javaExample.code} />
        </div>
      </section>
    </DocsLayout>
  );
}
