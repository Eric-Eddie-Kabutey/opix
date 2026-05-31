"use client";

import { NumberTicker } from "@/components/ui/NumberTicker";

// Hero stats as vertical bars whose HEIGHT encodes the value. The value + label
// are real, readable text (accessible); the bar rectangle is decorative.
type Bar = {
  prefix: string;
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  pct: number; // bar height as % of the track
  fill: string; // gradient (token-based)
};

const bars: Bar[] = [
  { prefix: "<", value: 30, suffix: "s", label: "Average identity verification time", pct: 45, fill: "from-teal-500/30 to-teal-500/[0.06]" },
  { prefix: "60–", value: 80, suffix: "%", label: "Reduction in onboarding costs", pct: 75, fill: "from-navy-800/22 to-navy-800/[0.05]" },
  { prefix: "", value: 100, suffix: "%", label: "Consent-first data sharing", pct: 100, fill: "from-gold-500/30 to-gold-500/[0.06]" },
];

export function HeroStatBars() {
  return (
    <div className="mx-auto mt-14 grid w-full max-w-2xl grid-cols-3 items-end gap-4 sm:gap-8">
      {bars.map((bar) => (
        <div key={bar.label} className="flex flex-col items-center">
          <span className="font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
            {bar.prefix}
            <NumberTicker value={bar.value} decimalPlaces={bar.decimals} />
            {bar.suffix}
          </span>

          <div className="relative mt-3 h-28 w-full sm:h-40" aria-hidden>
            <div
              className={`absolute inset-x-2 bottom-0 rounded-t-xl border-t border-border/60 bg-gradient-to-t sm:inset-x-4 ${bar.fill}`}
              style={{ height: `${bar.pct}%` }}
            />
          </div>

          <span className="mt-3 max-w-[12rem] text-center text-xs leading-snug text-muted-foreground">
            {bar.label}
          </span>
        </div>
      ))}
    </div>
  );
}
