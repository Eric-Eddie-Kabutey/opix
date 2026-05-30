import type { Metadata } from "next";
import { useCases, useCasesIndex } from "@/content/useCases";
import { pageMeta } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { UseCaseCard } from "@/components/sections/Cards";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = pageMeta({
  title: "Use Cases | Who OPIX Serves",
  description:
    "OPIX powers banks, fintechs, employers, freelancers, and regulators across Africa with biometric identity, verification, and trust infrastructure.",
  path: "/use-cases",
});

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow={useCasesIndex.label}
        title={useCasesIndex.headline}
        subtitle={useCasesIndex.intro}
        crumbs={[{ name: "Home", href: "/" }, { name: "Use Cases", href: "/use-cases" }]}
      />
      <Section tone="light">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <UseCaseCard key={uc.slug} useCase={uc} />
          ))}
        </div>
      </Section>
      <CTASection
        headline="Find your fit on the platform."
        primary={{ label: "Talk to Sales", href: "/contact" }}
        secondary={{ label: "Explore Products", href: "/products" }}
      />
    </>
  );
}
