"use client";

import { useRef, useState, type ComponentProps } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ScrollIndicator } from "./ScrollIndicator";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

type CTA = { label: string; href: string };
type HeroButton = {
  label: string;
  href: string;
  variant?: ComponentProps<typeof Button>["variant"];
};

// Inner-page hero — mirrors HomeHero: light `bg-hero-light`, centered content,
// decorative parallax gradient bars, a DiaTextReveal title (teal→navy→gold sweep,
// resting in primary navy), and the subtitle + buttons gated behind the title's
// onComplete so they fade up once the sweep finishes. Title + subtitle + buttons
// only. (Legacy `primary`/`secondary` CTAs still fold into the button row.)
export function PageHero({
  title,
  subtitle,
  buttons,
  primary,
  secondary,
}: {
  title: string;
  subtitle?: string;
  buttons?: HeroButton[];
  primary?: CTA;
  secondary?: CTA;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [titleDone, setTitleDone] = useState(false);

  // Gated fade-up (fade-only under reduced motion). `delay` staggers the buttons a
  // beat behind the subtitle once the title has finished revealing.
  const reveal = (delay: number) =>
    reduce
      ? {
          initial: { opacity: 0 },
          animate: titleDone ? { opacity: 1 } : { opacity: 0 },
          transition: { duration: 0.25, delay },
        }
      : {
          initial: { opacity: 0, y: 18 },
          animate: titleDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const, delay },
        };

  // Legacy primary/secondary CTAs fold into the buttons row with light-theme variants.
  const allButtons: HeroButton[] =
    buttons && buttons.length > 0
      ? buttons
      : ([
          primary && { ...primary, variant: "secondary" as const },
          secondary && { ...secondary, variant: "outline" as const },
        ].filter(Boolean) as HeroButton[]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[calc(100svh-6.5rem)] items-center overflow-hidden bg-hero-spotlight"
    >
      <div className="absolute inset-0 bg-grid-light opacity-20" aria-hidden />

      <Container className="relative flex flex-col items-center py-16 text-center">
        {/* Entrance choreographed with the spotlight: the light blooms in (~1.5s),
            the title fades up + sweeps, then subtitle/buttons cascade off its
            completion, and the scroll cue arrives last. */}
        <h1 className="z-30 max-w-4xl type-hero text-primary capitalize animate-fade-up [animation-delay:500ms]">
          <DiaTextReveal
            text={title}
            // Resting color — must be a real token (Tailwind v4 names them --color-*).
            textColor="var(--color-primary)"
            // Brand sweep palette: teal → navy → gold.
            colors={["var(--color-accent)", "var(--color-primary)", "var(--color-gold-500)"]}
            // Wait for the spotlight bloom + title fade before the color sweep runs.
            delay={0.6}
            onComplete={() => setTitleDone(true)}
          />
        </h1>

        {subtitle && (
          <motion.p
            {...reveal(0)}
            className="mt-6 max-w-[760px] text-lg leading-relaxed text-foreground/80"
          >
            {subtitle}
          </motion.p>
        )}

        {allButtons.length > 0 && (
          <motion.div {...reveal(0.12)} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            {allButtons.map((b, i) => (
              <Button
                key={`${b.href}-${b.label}`}
                href={b.href}
                variant={b.variant ?? (i === 0 ? "secondary" : "outline")}
                size="lg"
                withArrow={i === 0}
              >
                {b.label}
              </Button>
            ))}
          </motion.div>
        )}
      </Container>

      {/* Final beat of the cascade: appears once the title has resolved. */}
      <ScrollIndicator show={titleDone} />
    </section>
  );
}
