import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCases, getUseCase } from "@/content/useCases";
import { pageMeta } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CheckList } from "@/components/ui/CheckList";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const uc = getUseCase(slug);
  if (!uc) return {};
  return pageMeta({ title: uc.meta.title, description: uc.meta.description, path: `/use-cases/${slug}` });
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const uc = getUseCase(slug);
  if (!uc) notFound();

  return (
    <>
      <PageHero
        eyebrow="Use Case"
        title={uc.hero.headline}
        subtitle={uc.hero.subheadline}
        primary={{ label: "Talk to Sales", href: "/contact" }}
        secondary={{ label: "See How It Works", href: "/demo" }}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Use Cases", href: "/use-cases" },
          { name: uc.name, href: `/use-cases/${slug}` },
        ]}
      />

      {uc.placeholder && (
        <div className="bg-gold-500/10 py-3 text-center text-sm text-gold-600">
          {/* PLACEHOLDER: dedicated detail content not in source docs. */}
          Expanded {uc.name} resources are coming soon.
        </div>
      )}

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h2 className="font-display text-xl text-navy-900">The challenges</h2>
            <ul className="mt-5 space-y-3">
              {uc.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-danger/70" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-7">
            <h2 className="font-display text-xl text-navy-900">How OPIX solves them</h2>
            <CheckList items={uc.solutions} className="mt-5" />
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeader eyebrow="Outcomes" title="What changes when you build on OPIX." onDark align="center" className="mb-12" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {uc.outcomes.map((o) => (
            <div key={o} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <p className="font-display text-sm leading-snug text-white">{o}</p>
            </div>
          ))}
        </div>
      </Section>

      {uc.caseStudyTeaser && (
        <Section tone="light">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center md:p-12">
            <p className="mx-auto max-w-2xl font-display text-xl text-navy-900 md:text-2xl">{uc.caseStudyTeaser.text}</p>
            <div className="mt-7">
              <Button href={uc.caseStudyTeaser.cta.href} variant="secondary" withArrow>
                {uc.caseStudyTeaser.cta.label}
              </Button>
            </div>
          </div>
        </Section>
      )}

      <CTASection
        headline="Ready to get started?"
        subheadline="Tell us about your use case and we'll tailor a walkthrough."
        primary={{ label: "Schedule a Demo", href: "/demo" }}
        secondary={{ label: "Start for Free", href: "/signup" }}
      />
    </>
  );
}
