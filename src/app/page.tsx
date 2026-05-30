import {
  problem,
  solution,
  howItWorks,
  securitySection,
  testimonials,
  developerTeaser,
  finalCta,
} from "@/content/home";
import { products } from "@/content/products";
import { useCases } from "@/content/useCases";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { HomeHero } from "@/components/sections/HomeHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProductShowcaseRow, UseCaseCard } from "@/components/sections/Cards";
import { SecurityPillars, TrustBadgeRow } from "@/components/sections/SecurityPillars";
import { TestimonialCard } from "@/components/sections/Testimonials";
import { CodeBlock } from "@/components/dev/CodeBlock";
import { CTASection } from "@/components/sections/CTASection";

const showcaseSlugs = ["kyc-connect", "background-verification", "freelancer-trust", "escrow"];

export default function HomePage() {
  const showcase = showcaseSlugs.map((s) => products.find((p) => p.slug === s)!).filter(Boolean);

  return (
    <>
      <HomeHero />

      {/* PROBLEM */}
      <Section tone="white">
        <SectionHeader eyebrow={problem.label} title={problem.headline} align="center" className="mb-14" />
        <div className="grid gap-5 md:grid-cols-3">
          {problem.cards.map((card) => (
            <div key={card.title} className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-lg font-semibold text-navy-900">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{card.body}</p>
              <p className="mt-6 border-t border-slate-200 pt-5 font-display text-sm leading-snug text-navy-900">
                {card.stat}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center font-display text-xl text-slate-500">{problem.transition}</p>
      </Section>

      {/* SOLUTION */}
      <Section tone="light">
        <SectionHeader eyebrow={solution.label} title={solution.headline} intro={solution.intro} align="center" className="mb-14" />
        <FeatureGrid features={solution.features} columns={4} />
        <div className="mt-12 text-center">
          <Button href={solution.cta.href} variant="secondary" size="lg" withArrow>
            {solution.cta.label}
          </Button>
        </div>
      </Section>

      {/* PRODUCT SHOWCASE */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Our Products"
          title="Everything you need to verify, trust, and transact."
          align="center"
          className="mb-16"
        />
        <div className="space-y-20 lg:space-y-28">
          {showcase.map((product, i) => (
            <ProductShowcaseRow key={product.slug} product={product} flip={i % 2 === 1} />
          ))}
        </div>
      </Section>

      {/* USE CASES */}
      <Section tone="light">
        <SectionHeader
          eyebrow="Who We Serve"
          title="Built for the institutions that power Africa's economy."
          align="center"
          className="mb-14"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.slice(0, 4).map((uc) => (
            <UseCaseCard key={uc.slug} useCase={uc} />
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section tone="white">
        <SectionHeader eyebrow={howItWorks.label} title={howItWorks.headline} align="center" className="mb-14" />
        <div className="grid gap-6 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <span className="font-display text-4xl text-teal-600">{step.number}</span>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
              </div>
              {i < howItWorks.steps.length - 1 && (
                <Icon name="arrow-right" className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-teal-500 md:block" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href={howItWorks.cta.href} variant="ghost" size="lg" withArrow>
            {howItWorks.cta.label}
          </Button>
        </div>
      </Section>

      {/* SECURITY */}
      <Section tone="dark" id="security">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader eyebrow={securitySection.label} title={securitySection.headline} intro={securitySection.intro} onDark />
            <div className="mt-8">
              <TrustBadgeRow badges={securitySection.badges} onDark />
            </div>
          </div>
          <SecurityPillars pillars={securitySection.pillars} />
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section tone="light">
        <SectionHeader eyebrow={testimonials.label} title={testimonials.headline} align="center" className="mb-14" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.items.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </Section>

      {/* DEVELOPERS */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow={developerTeaser.label} title={developerTeaser.headline} intro={developerTeaser.intro} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={developerTeaser.primary.href} variant="secondary" withArrow>
                {developerTeaser.primary.label}
              </Button>
              <Button href={developerTeaser.secondary.href} variant="ghost">
                {developerTeaser.secondary.label}
              </Button>
            </div>
          </div>
          <CodeBlock
            lang="bash"
            filename="POST /v1/kyc/search"
            code={`curl -X POST https://api.opix.africa/v1/kyc/search \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "biometric_token": "bt_abc123...",
    "purpose": "account_opening",
    "institution_id": "bank_001"
  }'

# → 200 OK  { "verified": true, "kyc_level": "L2" }`}
          />
        </div>
      </Section>

      <CTASection
        headline={finalCta.headline}
        subheadline={finalCta.subheadline}
        primary={finalCta.primary}
        secondary={finalCta.secondary}
      />
    </>
  );
}
