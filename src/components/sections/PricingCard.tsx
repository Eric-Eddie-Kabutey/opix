import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";

type Tier = {
  name: string;
  price: string;
  audience: string;
  features: string[];
  cta: { label: string; href: string };
  featured: boolean;
};

export function PricingCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`relative flex flex-col h-full rounded-2xl border p-7 ${
        tier.featured
          ? "border-teal-500/40 bg-primary text-white shadow-[var(--shadow-lift)] lg:-my-3 lg:py-10"
          : "border-slate-200 bg-white text-navy-900"
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-teal-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy-900">
          Most popular
        </span>
      )}
      <h3 className="text-lg font-semibold">{tier.name}</h3>
      <p className={`mt-1 text-sm ${tier.featured ? "text-slate-400" : "text-slate-500"}`}>{tier.audience}</p>
      <p className="mt-5 font-display text-4xl">{tier.price}</p>
      <div className="my-7 h-px w-full bg-current opacity-10" />
      <CheckList items={tier.features} onDark={tier.featured} className="flex-1" />
      <Button
        href={tier.cta.href}
        variant={tier.featured ? "primary" : "ghost"}
        size="lg"
        className="mt-8 w-full"
      >
        {tier.cta.label}
      </Button>
    </div>
  );
}
