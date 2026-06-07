"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Generated product illustrations (Nano Banana stills) live in src/public/images/
// products and are statically imported (webpack-resolved + optimized). Keyed by
// product slug; an unknown slug renders nothing extra (graceful).
import kycConnect from "../../public/images/products/kyc-connect.png";
import backgroundVerification from "../../public/images/products/background-verification.png";
import freelancerTrust from "../../public/images/products/freelancer-trust.png";
import escrow from "../../public/images/products/escrow.png";

const illustrations: Record<string, StaticImageData> = {
  "kyc-connect": kycConnect,
  "background-verification": backgroundVerification,
  "freelancer-trust": freelancerTrust,
  escrow,
};

// Renders a product's illustration on a soft branded surface with a gentle,
// looping teal glow + a slow float — bringing the static PNG to life without
// per-image bespoke animation. Respects reduced motion (static, no loop).
export function ProductIllustration({
  slug,
  name,
  className,
}: {
  slug: string;
  name: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const img = illustrations[slug];

  if (!img) return null;

  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden",
        className,
      )}
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0" aria-hidden />

      {/* Drifting teal glow accent */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-12 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full"
        animate={reduce ? undefined : { opacity: [0.5, 0.9, 0.5], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* The illustration — gentle float */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={img}
          alt={`${name} illustration`}
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="h-full w-full object-contain"
          placeholder="blur"
        />
      </motion.div>
    </div>
  );
}
