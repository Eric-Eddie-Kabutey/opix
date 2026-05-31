import type { Metadata } from "next";
import { sandbox } from "@/content/developers";
import { pageMeta } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { StatsBar } from "@/components/sections/StatsBar";

export const metadata: Metadata = pageMeta({
  title: sandbox.meta.title,
  description: sandbox.meta.description,
  path: "/sandbox",
});

export default function SandboxPage() {
  return (
    <>
      <PageHero
        eyebrow={sandbox.label}
        title={sandbox.headline}
        subtitle={sandbox.intro}
        primary={sandbox.primary}
        secondary={sandbox.secondary}
        crumbs={[{ name: "Home", href: "/" }, { name: "Sandbox", href: "/sandbox" }]}
      />

      <Section tone="white">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
      </Section>

      <Section tone="dark">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl text-white">Instant access. Zero risk.</h2>
            <p className="mt-4 text-slate-300">{sandbox.access}</p>
          </div>
          <StatsBar
            stats={sandbox.stats.map((s) => {
              const parts = s.split(" ");
              return { value: parts[0], label: parts.slice(1).join(" ") };
            })}
            onDark
          />
        </div>
      </Section>

    </>
  );
}
