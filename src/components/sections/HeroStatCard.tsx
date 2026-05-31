"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { NumberTicker } from "@/components/ui/NumberTicker";

// Three hero stat cards (the StatsBar figures) with ticker numbers and heights
// that grow/shrink as you scroll — alternating directions so the column "breathes".
type Stat = { prefix: string; value: number; suffix: string; decimals?: number; label: string };

const stats: Stat[] = [
  { prefix: "<", value: 30, suffix: "s", label: "Average identity verification time" },
  { prefix: "60–", value: 80, suffix: "%", label: "Reduction in onboarding costs" },
  { prefix: "", value: 100, suffix: "%", label: "Consent-first data sharing" },
];

export function HeroStatCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={ref} className="flex flex-row gap-4">
      {stats.map((stat, i) => (
        <StatCard key={stat.label} stat={stat} index={i} progress={scrollYProgress} />
      ))}
    </div>
  );
}

function StatCard({ stat, index, progress }: { stat: Stat; index: number; progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  // Even cards grow as you scroll, odd cards shrink → heights increase & decrease.
  const grows = index % 2 === 0;
  const minHeight = useTransform(progress, [0, 1], grows ? ["8.5rem", "12.5rem"] : ["12.5rem", "8.5rem"]);

  return (
    <motion.div
      style={reduce ? undefined : { minHeight }}
      className="relative flex min-h-36 flex-col justify-center overflow-hidden rounded-3xl border border-white/10 p-6 [background:radial-gradient(120%_120%_at_15%_0%,var(--color-navy-700)_0%,var(--color-navy-900)_45%,var(--color-navy-950)_100%)] shadow-[var(--shadow-lift)]"
    >
      <p className="font-display text-4xl font-semibold leading-none text-white sm:text-5xl">
        {stat.prefix}
        <NumberTicker value={stat.value} decimalPlaces={stat.decimals} />
        {stat.suffix}
      </p>
      <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-slate-300">{stat.label}</p>
      <Icon name="star" className="absolute bottom-5 right-5 h-4 w-4 text-teal-300/70" />
    </motion.div>
  );
}
