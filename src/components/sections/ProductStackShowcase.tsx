"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { Product } from "@/content/products";
import { CheckList } from "@/components/ui/CheckList";
import { Icon } from "@/components/ui/Icon";
import { ProductVisual } from "./Cards";

// Scroll-stacking product showcase — same effect on mobile, tablet, and desktop.
// • Stacking: each card sits in a viewport-tall `sticky` track, so later cards
//   slide up and stack over earlier ones (CSS).
// • Scale in/out: Framer Motion `useScroll` + `useTransform` ease each card up to
//   full size as it enters, then settle it slightly smaller as the next card
//   covers it — a layered "deck" depth.
// • Reduced motion: scaling is disabled (cards render at full size); the sticky
//   stacking still works.

export function ProductStackShowcase({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product, i) => (
        <StackedProductCard
          key={product.slug}
          product={product}
          index={i}
          total={products.length}
          flip={i % 2 === 1}
        />
      ))}
    </div>
  );
}

function StackedProductCard({
  product,
  index,
  total,
  flip,
}: {
  product: Product;
  index: number;
  total: number;
  flip: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Progress across the card's track — 0 when it enters from the bottom, 1 as it
  // reaches its sticky resting position at the top.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Cards lower in the stack settle smaller (the top card stays at 1) → depth.
  const targetScale = 1 - (total - index - 1) * 0.05;
  const scaleMv = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, targetScale]);

  return (
    <div
      ref={ref}
      className="sticky top-0 flex h-full min-h-screen items-center justify-center"
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        // style={{ scale: reduceMotion ? 1 : scaleMv }}
        className="w-full origin-top overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-slate-50 "
      >
        <div className="grid w-full items-center gap-8 p-6 sm:gap-10 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-16">
          {/* Text */}
          <div className={flip ? "lg:order-2" : ""}>
            <span className="eyebrow text-accent-hover">{product.category}</span>
            <h3 className="mt-3 type-h2 text-foreground">{product.tagline}</h3>
            <p className="mt-4 text-muted-foreground">{product.hero.subheadline}</p>
            <CheckList items={product.keyBenefits} className="mt-6" />
            <Link
              href={`/products/${product.slug}`}
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground"
            >
              Learn about {product.name}
              <Icon name="arrow-right" className="h-4 w-4 text-accent-hover transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Visual */}
          <div className={flip ? "lg:order-1" : ""}>
            <ProductVisual name={product.name} />
          </div>
        </div>
      </motion.article>
    </div>
  );
}
