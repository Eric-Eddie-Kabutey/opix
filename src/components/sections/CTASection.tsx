import { Button } from "@/components/ui/Button";

type CTA = { label: string; href: string };

export function CTASection({
  headline,
  subheadline,
  primary,
  secondary,
}: {
  headline: string;
  subheadline?: string;
  primary: CTA;
  secondary?: CTA;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-aurora px-6 py-16 text-center md:px-12 md:py-20">
          <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl leading-tight text-white md:text-[2.75rem]">{headline}</h2>
            {subheadline && <p className="mt-4 text-lg text-slate-300">{subheadline}</p>}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primary.href} size="lg" withArrow>
                {primary.label}
              </Button>
              {secondary && (
                <Button href={secondary.href} variant="white" size="lg">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
