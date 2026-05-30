import type { Metadata } from "next";
import { pricing } from "@/content/pricing";
import { pageMeta } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { PricingCard } from "@/components/sections/PricingCard";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = pageMeta({
  title: pricing.meta.title,
  description: pricing.meta.description,
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow={pricing.label}
        title={pricing.headline}
        subtitle={pricing.intro}
        crumbs={[{ name: "Home", href: "/" }, { name: "Pricing", href: "/pricing" }]}
      />
      <Section tone="light">
        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {pricing.tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-slate-500">{pricing.footnote}</p>
      </Section>
      <CTASection
        headline="Not sure which tier fits?"
        subheadline="Tell us your volume and use case and we'll recommend the right plan."
        primary={{ label: "Talk to Sales", href: "/contact" }}
        secondary={{ label: "Start for Free", href: "/signup" }}
      />
    </>
  );
}
