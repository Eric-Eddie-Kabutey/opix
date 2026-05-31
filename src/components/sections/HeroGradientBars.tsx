"use client";

import { motion, useTransform, useReducedMotion, type MotionValue } from "framer-motion";

// Decorative vertical gradient bars along the bottom of the hero. Soft, blurred,
// low-opacity (brand tokens) — "trust infrastructure", not party lights. They
// parallax slightly on scroll. Purely decorative (aria-hidden).
type BgBar = {
  left: string;
  width: string;
  height: string;
  fill: string; // gradient end (token-based)
  blur: string;
  shift: number; // px translated over the scroll range (parallax depth)
};

const bars: BgBar[] = [
  { left: "5%", width: "9%", height: "52%", fill: "to-teal-500/15", blur: "blur-2xl", shift: -48 },
  { left: "19%", width: "7%", height: "34%", fill: "to-navy-800/10", blur: "blur-xl", shift: -84 },
  { left: "32%", width: "11%", height: "64%", fill: "to-gold-500/10", blur: "blur-2xl", shift: -36 },
  { left: "50%", width: "8%", height: "42%", fill: "to-teal-500/10", blur: "blur-xl", shift: -96 },
  { left: "64%", width: "12%", height: "56%", fill: "to-navy-800/10", blur: "blur-2xl", shift: -56 },
  { left: "81%", width: "8%", height: "38%", fill: "to-teal-500/15", blur: "blur-xl", shift: -76 },
];

export function HeroGradientBars({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] overflow-hidden" aria-hidden>
      {bars.map((bar, i) => (
        <GradientBar key={i} bar={bar} progress={progress} />
      ))}
    </div>
  );
}

function GradientBar({ bar, progress }: { bar: BgBar; progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const y = useTransform(progress, [0, 1], [0, bar.shift]);

  return (
    <motion.div
      style={{
        left: bar.left,
        width: bar.width,
        height: bar.height,
        ...(reduce ? {} : { y }),
      }}
      className={`absolute bottom-0 rounded-t-[2.5rem] bg-gradient-to-t from-transparent ${bar.fill} ${bar.blur}`}
    />
  );
}
