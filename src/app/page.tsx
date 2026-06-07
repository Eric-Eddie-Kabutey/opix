import {
  problem,
  solution,
  howItWorks,
  securitySection,
  testimonials,
  developerTeaser,
} from "@/content/home";
import { products } from "@/content/products";
import { homeHero } from "@/content/home";
import { useCases } from "@/content/useCases";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { HomeHero } from "@/components/sections/HomeHero";
import { HowItWorksCards } from "@/components/sections/HowItWorksCards";
import { CardCarousel } from "@/components/sections/CardCarousel";
import { FeatureCard } from "@/components/sections/FeatureGrid";
import { UseCaseCard } from "@/components/sections/Cards";
import { ProductStackShowcase } from "@/components/sections/ProductStackShowcase";
import {
  SecurityPillars,
  TrustBadgeRow,
} from "@/components/sections/SecurityPillars";
import { TestimonialCard } from "@/components/sections/Testimonials";
import { CodeBlock } from "@/components/dev/CodeBlock";
import { StatsBar } from "@/components/sections/StatsBar";

const showcaseSlugs = [
  "kyc-connect",
  "background-verification",
  "freelancer-trust",
  "escrow",
];

export default function HomePage() {
  const showcase = showcaseSlugs
    .map((s) => products.find((p) => p.slug === s)!)
    .filter(Boolean);

  return (
    <>
      <HomeHero />

      {/* STAT WIDGET */}
      <div className="container-page py-6 md:py-10 bg-white">
        <StatsBar stats={homeHero.stats} onDark />
        <p className="text-center text-sm text-slate-400 pb-6"> {homeHero.trustLine} </p>
      </div>

      {/* PROBLEM */}
      <Section tone="white" stack>
        <SectionHeader
          eyebrow={problem.label}
          title={problem.headline}
          align="center"
          className="mb-14"
        />
        <CardCarousel ariaLabel="Problems OPIX solves">
          {problem.cards.map((card) => (
            <div
              key={card.title}
              // rounded-2xl border border-slate-200
              className="flex h-full flex-col bg-slate-50 p-7"
            >
              <h3 className="text-lg font-semibold text-navy-900">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {card.body}
              </p>
              <p className="mt-6 border-t border-slate-200 pt-5 font-display text-sm leading-snug text-navy-900">
                {card.stat}
              </p>
            </div>
          ))}
        </CardCarousel>
        <p className="mt-12 text-center font-display text-xl text-slate-500">
          {problem.transition}
        </p>
      </Section>

      {/* SOLUTION */}
      <Section tone="light" stack shadow>
        <SectionHeader
          eyebrow={solution.label}
          title={solution.headline}
          intro={solution.intro}
          align="center"
          className="mb-14"
        />
        <CardCarousel ariaLabel="Solution highlights">
          {solution.features.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </CardCarousel>
        <div className="mt-12 text-center">
          <Button
            href={solution.cta.href}
            variant="secondary"
            size="lg"
            withArrow
          >
            {solution.cta.label}
          </Button>
        </div>
      </Section>

      {/* PRODUCT SHOWCASE (not stacked — has its own internal card stack; `relative`
          keeps it in the positioned paint group so it covers the section beneath) */}
      <Section tone="white" className="relative z-10" shadow>
        <SectionHeader
          eyebrow="Our Products"
          title="Everything you need to verify, trust, and transact."
          align="center"
          className="mb-16"
        />
        <ProductStackShowcase products={showcase} />
      </Section>

      {/* USE CASES */}
      <Section tone="light" stack shadow>
        <SectionHeader
          eyebrow="Who We Serve"
          title="Built for the institutions that power Africa's economy."
          align="center"
          className="mb-14"
        />
        <CardCarousel ariaLabel="Who we serve">
          {useCases.slice(0, 4).map((uc) => (
            <UseCaseCard key={uc.slug} useCase={uc} />
          ))}
        </CardCarousel>
      </Section>

      {/* HOW IT WORKS */}
      <Section tone="white" stack shadow>
        <SectionHeader
          eyebrow={howItWorks.label}
          title={howItWorks.headline}
          align="center"
          className="mb-14"
        />
        <HowItWorksCards steps={howItWorks.steps} />
        <div className="mt-12 text-center">
          <Button
            href={howItWorks.cta.href}
            variant="ghost"
            size="lg"
            withArrow
          >
            {howItWorks.cta.label}
          </Button>
        </div>
      </Section>

      {/* SECURITY */}
      <Section tone="dark" id="security" stack shadow>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow={securitySection.label}
              title={securitySection.headline}
              intro={securitySection.intro}
              onDark
            />
            <div className="mt-8">
              <TrustBadgeRow badges={securitySection.badges} onDark />
            </div>
          </div>
          <SecurityPillars pillars={securitySection.pillars} />
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section tone="light" stack shadow>
        <SectionHeader
          eyebrow={testimonials.label}
          title={testimonials.headline}
          align="center"
          className="mb-14"
        />
        <CardCarousel ariaLabel="Customer testimonials">
          {testimonials.items.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </CardCarousel>
      </Section>

      {/* DEVELOPERS */}
      <Section
        // className="shadow-[0_-30px_60px_-32px_rgba(11,23,36,0.1)]"
        tone="white"
        stack
        shadow
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow={developerTeaser.label}
              title={developerTeaser.headline}
              intro={developerTeaser.intro}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={developerTeaser.primary.href}
                variant="secondary"
                withArrow
              >
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
    </>
  );
}
