import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

// PLACEHOLDER: the auth app (/signup, /login) is out of scope for this marketing
// site. These pages exist so CTAs resolve instead of 404-ing.
export function AuthShell({
  title,
  subtitle,
  cta,
  alt,
}: {
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  alt: { text: string; label: string; href: string };
}) {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-aurora px-5 py-20">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-sm">
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-400">
          <Icon name="fingerprint" className="h-6 w-6" />
        </span>
        <h1 className="mt-6 font-display text-3xl text-white">{title}</h1>
        <p className="mt-3 text-sm text-slate-300">{subtitle}</p>
        <Button href={cta.href} size="lg" className="mt-7 w-full" withArrow>
          {cta.label}
        </Button>
        <p className="mt-5 text-sm text-slate-400">
          {alt.text}{" "}
          <Link href={alt.href} className="font-medium text-teal-400 hover:text-teal-300">
            {alt.label}
          </Link>
        </p>
      </div>
    </section>
  );
}
