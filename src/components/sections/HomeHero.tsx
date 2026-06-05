"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { homeHero } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { HeroStatBars } from "./HeroStatBars";
import { HeroGradientBars } from "./HeroGradientBars";
import { ScrollIndicator } from "./ScrollIndicator";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

// Full-screen, centered, light hero. Enterprise-Blue headline, slate body, solid
// brand primary + outline secondary. Decorative gradient bars parallax on scroll;
// stats are shown as value-encoded vertical bars. Tokens only.
export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  // Subheadline + buttons stay hidden until the headline sweep reports complete.
  const [headlineDone, setHeadlineDone] = useState(false);

  // Gated fade-up (or fade-only under reduced motion). `delay` staggers the buttons
  // a beat behind the subheadline once the headline has finished revealing.
  const reveal = (delay: number) =>
    reduce
      ? {
          initial: { opacity: 0 },
          animate: headlineDone ? { opacity: 1 } : { opacity: 0 },
          transition: { duration: 0.25, delay },
        }
      : {
          initial: { opacity: 0, y: 18 },
          animate: headlineDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const, delay },
        };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // bg-hero-light

  return (
    <section
      ref={ref}
      className="relative flex min-h-[calc(100svh-6.5rem)] items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-light opacity-50" aria-hidden />
      <HeroGradientBars progress={scrollYProgress} />

      <Container className="relative flex flex-col items-center py-16 text-center">
        {/* <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-accent-hover animate-fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-status" />
          {homeHero.eyebrow}
        </span> */}

        <h1 className="mt-6 z-30 max-w-4xl type-hero text-primary animate-fade-up [animation-delay:60ms]">
          <DiaTextReveal
            text={homeHero.headline}
            // Final/resting color of the text — must be a real token in this app
            // (Tailwind v4 names them --color-*). Enterprise navy to match the hero.
            textColor="var(--color-primary)"
            // Brand sweep palette (teal → navy → gold) instead of the demo candy colors.
            colors={["var(--color-accent)", "var(--color-primary)", "var(--color-gold-500)"]}
            onComplete={() => setHeadlineDone(true)}
          />
        </h1>

        <motion.p
          {...reveal(0)}
          className="mt-6 max-w-[760px] text-lg leading-relaxed text-foreground/80"
        >
          {homeHero.subheadline}
        </motion.p>

        <motion.div
          {...reveal(0.12)}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            href={homeHero.primary.href}
            variant="secondary"
            size="lg"
            withArrow
          >
            {homeHero.primary.label}
          </Button>
          <Button href={homeHero.secondary.href} variant="outline" size="lg">
            {homeHero.secondary.label}
          </Button>
        </motion.div>

        {/* <HeroStatBars /> */}
      </Container>

      <ScrollIndicator />
    </section>
  );
}
