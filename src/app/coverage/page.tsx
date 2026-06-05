import type { Metadata } from "next";
import { coverage } from "@/content/company";
import { pageMeta } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { CheckList } from "@/components/ui/CheckList";

export const metadata: Metadata = pageMeta({
  title: coverage.meta.title,
  description: coverage.meta.description,
  path: "/coverage",
});

export default function CoveragePage() {
  return (
    <>
      <PageHero
        title={coverage.hero.headline}
      />

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Current */}
          <div className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/15 px-3 py-1 text-xs font-medium text-teal-700">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-status" /> Live now
            </span>
            <h2 className="mt-5 font-display text-2xl text-navy-900">{coverage.current.region}</h2>
            <p className="mt-1 text-sm text-slate-600">{coverage.current.note}</p>
            <CheckList items={coverage.current.items} className="mt-6" />
          </div>

          {/* Roadmap */}
          <div>
            <h2 className="font-display text-2xl text-navy-900">Expansion roadmap</h2>
            <ol className="mt-6 space-y-3">
              {coverage.expansion.map((e) => (
                <li
                  key={e.where}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4"
                >
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-slate-100 text-navy-900">
                    <Icon name="pin" className="h-5 w-5" />
                  </span>
                  <div className="flex flex-1 items-center justify-between">
                    <span className="font-medium text-navy-900">{e.where}</span>
                    <span className="font-mono text-xs text-slate-400">{e.when}</span>
                  </div>
                </li>
              ))}
            </ol>
            {/* PLACEHOLDER: interactive map (MAP_VISUAL §17.2) — static roadmap shown for now. */}
          </div>
        </div>
      </Section>

    </>
  );
}
