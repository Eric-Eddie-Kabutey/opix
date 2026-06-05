import type { Metadata } from "next";
import { sandbox } from "@/content/developers";
import { pageMeta } from "@/content/seo";
import { DocsLayout } from "@/components/dev/DocsLayout";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { StatsBar } from "@/components/sections/StatsBar";

export const metadata: Metadata = pageMeta({
  title: sandbox.meta.title,
  description: sandbox.meta.description,
  path: "/developers/sandbox",
});

export default function SandboxPage() {
  return (
    <DocsLayout
      title={sandbox.headline}
      description={sandbox.intro}
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Developers", href: "/developers" },
        { name: "Sandbox", href: "/developers/sandbox" },
      ]}
    >
      <section>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={sandbox.primary.href} size="lg" withArrow>
            {sandbox.primary.label}
          </Button>
          <Button href={sandbox.secondary.href} variant="secondary" size="lg">
            {sandbox.secondary.label}
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy-900">What you get</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {sandbox.features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                <Icon name={f.icon} className="h-5.5 w-5.5" width={22} height={22} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-navy-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section>
        <h2 className="font-display text-2xl text-navy-900">Instant access. Zero risk.</h2>
        <p className="mt-3 text-slate-600">{sandbox.access}</p>
        <div className="mt-6">
          <StatsBar
            stats={sandbox.stats.map((s) => {
              const parts = s.split(" ");
              return { value: parts[0], label: parts.slice(1).join(" ") };
            })}
          />
        </div>
      </section> */}
    </DocsLayout>
  );
}
