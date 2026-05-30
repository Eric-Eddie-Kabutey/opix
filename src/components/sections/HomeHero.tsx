import { homeHero } from "@/content/home";
import { trustBadges } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/layout/Container";
import { StatsBar } from "@/components/sections/StatsBar";
import { HeroStatCard } from "@/components/sections/HeroStatCard";

// Light homepage hero (warm-white mesh). Enterprise-Blue headline, slate body,
// solid-blue primary CTA + outline secondary. Tokens only — no hardcoded colors.
export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-hero-light">
      <div className="absolute inset-0 bg-grid-light opacity-60" aria-hidden />
      <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="animate-fade-up">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-accent-hover">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-status" />
            {homeHero.eyebrow}
          </span>
          <h1 className="mt-6 type-hero text-primary">{homeHero.headline}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">{homeHero.subheadline}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={homeHero.primary.href} variant="secondary" size="lg" withArrow>
              {homeHero.primary.label}
            </Button>
            <Button href={homeHero.secondary.href} variant="outline" size="lg">
              {homeHero.secondary.label}
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
            {trustBadges.map((b) => (
              <li key={b} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon name="check" className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <HeroStatCard />
        </div>
      </Container>

      <Container className="relative pb-14 lg:pb-20">
        <StatsBar stats={homeHero.stats} />
      </Container>
    </section>
  );
}
