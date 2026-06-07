import type { Metadata } from "next";
import { quickStart, sdks } from "@/content/developers";
import { apiReference } from "@/content/apiReference";
import { pageMeta } from "@/content/seo";
import { DocsLayout } from "@/components/dev/DocsLayout";
import { CodeBlock } from "@/components/dev/CodeBlock";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";

export const metadata: Metadata = pageMeta({
  title: "Documentation | Get Started with OPIX",
  description:
    "OPIX developer documentation. Get your first API call working in under 10 minutes with Java or Next.js. Authentication, quick start, and SDK guides.",
  path: "/developers/docs",
});

export default function DocsPage() {
  return (
    <DocsLayout
      title="Documentation"
      description="Everything you need to integrate identity verification, background checks, and escrow into your product."
      crumbs={[{ name: "Home", href: "/" }, { name: "Developers", href: "/developers" }, { name: "Docs", href: "/developers/docs" }]}
    >
      <section>
        <h2 className="font-display text-2xl text-navy-900">Build with OPIX. Ship in days.</h2>
        <p className="mt-3 text-slate-600">
          Clean APIs. Comprehensive SDKs. A sandbox that actually works. Pick your path below — Java for
          backend integration, Next.js for frontend building, or both.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link href="/developers/docs/java" className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 hover:border-teal-500/40">
            <div>
              <p className="text-sm font-semibold text-navy-900">Java SDK Guide</p>
              <p className="text-xs text-slate-500">Spring Boot, reactive, HSM</p>
            </div>
            <Icon name="arrow-right" className="h-5 w-5 text-teal-600 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link href="/developers/docs/nextjs" className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 hover:border-teal-500/40">
            <div>
              <p className="text-sm font-semibold text-navy-900">Next.js SDK Guide</p>
              <p className="text-xs text-slate-500">App Router, RSC, components</p>
            </div>
            <Icon name="arrow-right" className="h-5 w-5 text-teal-600 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <section id="quick-start">
        <h2 className="font-display text-2xl text-navy-900">Quick start</h2>
        <p className="mt-3 text-slate-600">{quickStart.intro}</p>
        <ol className="mt-6 space-y-4">
          {[
            "Create an account at app.opix.africa",
            "Generate your sandbox API credentials",
            "Make your first call to the hello-world endpoint",
            "Explore endpoints: KYC, verification, escrow, and more",
          ].map((step, i) => (
            <li key={step} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">{i + 1}</span>
              <span className="text-sm text-navy-900">{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <CodeBlock lang="bash" filename="First request" code={`curl -X POST ${apiReference.baseUrl}/v1/kyc/search \\
  -H "Authorization: Bearer YOUR_SANDBOX_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{ "biometric_token": "bt_demo", "purpose": "account_opening" }'`} />
        </div>
      </section>

      <section id="auth">
        <h2 className="font-display text-2xl text-navy-900">Authentication</h2>
        <p className="mt-3 text-slate-600">{apiReference.securityNote}</p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy-900">SDKs</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {sdks.cards.map((s) => (
            <li key={s.name}>
              <Link href={s.docs} className="block rounded-xl border border-slate-200 bg-white p-4 text-sm hover:border-teal-500/40">
                <span className="font-semibold text-navy-900">{s.name}</span>
                <span className="ml-2 font-mono text-xs text-slate-400">{s.version}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Button href="/developers/sandbox" variant="secondary" className="mt-6" withArrow>Try the Sandbox</Button>
      </section>
    </DocsLayout>
  );
}
