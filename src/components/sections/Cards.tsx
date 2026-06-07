import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { CheckList } from "@/components/ui/CheckList";
import type { Product } from "@/content/products";
import type { UseCase } from "@/content/useCases";

// ProductCard — used in the /products index grid
export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
    >
      <span className="eyebrow text-slate-400">{product.category}</span>
      <h3 className="mt-3 flex items-center gap-2 text-xl font-semibold text-navy-900">
        {product.name}
        <Icon name="arrow-right" className="h-4 w-4 -translate-x-1 text-teal-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
      </h3>
      <p className="mt-1 text-sm font-medium text-teal-600">{product.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{product.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {product.keyBenefits.slice(0, 2).map((b) => (
          <li key={b} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
            {b}
          </li>
        ))}
      </ul>
    </Link>
  );
}

// UseCaseCard — homepage + /use-cases index
export function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <Link
      href={`/use-cases/${useCase.slug}`}
      className="h-full group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
    >
      <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-navy-900">
        <Icon name={useCase.icon} className="h-5.5 w-5.5" width={22} height={22} />
      </span>
      <h3 className="text-lg font-semibold text-navy-900">{useCase.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{useCase.cardBody}</p>
      <p className="mt-5 flex items-center gap-1.5 text-sm font-medium text-teal-600">
        {useCase.stat}
        <Icon name="arrow-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </p>
    </Link>
  );
}

// Alternating product showcase row (homepage §6)
export function ProductShowcaseRow({ product, flip }: { product: Product; flip?: boolean }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={flip ? "lg:order-2" : ""}>
        <span className="eyebrow text-teal-600">{product.category}</span>
        <h3 className="mt-3 font-display text-2xl text-navy-900 md:text-3xl">{product.tagline}</h3>
        <p className="mt-4 text-slate-600">{product.summary}</p>
        <CheckList items={product.keyBenefits} className="mt-6" />
        <Link
          href={`/products/${product.slug}`}
          className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900"
        >
          Learn about {product.name}
          <Icon name="arrow-right" className="h-4 w-4 text-teal-600 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      <div className={flip ? "lg:order-1" : ""}>
        <ProductVisual name={product.name} />
      </div>
    </div>
  );
}

// Abstract product "mockup" — keeps the page image-light (docs perf rules)
export function ProductVisual({ name }: { name: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-aurora p-6 bg-grid">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          <span className="ml-2 text-xs text-slate-400">opix · {name.toLowerCase().replace(/\s+/g, "-")}</span>
        </div>
        <div className="space-y-3">
          <div className="h-2.5 w-2/3 rounded-full bg-white/15" />
          <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
          <div className="flex items-center gap-3 rounded-xl border border-teal-500/30 bg-teal-500/10 p-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/20 text-teal-300">
              <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <div className="space-y-1.5">
              <div className="h-2 w-24 rounded-full bg-white/25" />
              <div className="h-2 w-16 rounded-full bg-white/15" />
            </div>
          </div>
        </div>
        <p className="font-display text-lg text-white/90">{name}</p>
      </div>
    </div>
  );
}
