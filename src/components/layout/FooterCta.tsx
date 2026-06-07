"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { resolveFooterCta } from "@/content/footerCta";
import { newsletter } from "@/content/footer";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

// Route-aware final CTA at the top of the footer (the only CTA on the page).
// Most routes render two buttons; blog/default render the newsletter field.
// NOTE: newsletter integration is pending — the email field is UI-only.
export function FooterCta() {
  const pathname = usePathname();
  const cta = resolveFooterCta(pathname);

  return (
    <div className="relative overflow-hidden rounded-3xl  px-6 py-16 shadow-[var(--shadow-lift)] sm:px-10 md:px-14 md:py-20">
      {/* Route-aware background image + dark overlay for text legibility */}
      <Image
        src={cta.image}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        placeholder="blur"
        className="absolute inset-0 -z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-primary/70" aria-hidden />

      <div className="relative max-w-xl">
        <h2 className="type-h2 capitalize text-white">{cta.heading}</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-300">{cta.text}</p>

        {cta.newsletter ? (
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder={newsletter.placeholder}
              autoComplete="email"
              className="h-12 w-full rounded-full border border-white/20 bg-white/[0.06] px-5 text-sm text-white placeholder:text-slate-400 focus:border-white/50 focus:bg-white/10 focus:outline-none"
            />
            <button
              type="button"
              className="inline-flex h-12 flex-none items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-navy-900 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {newsletter.button}
              <Icon name="arrow-right" className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {cta.primary && (
              <Button href={cta.primary.href} size="lg" withArrow>
                {cta.primary.label}
              </Button>
            )}
            {cta.secondary && (
              <Button href={cta.secondary.href} variant="white" size="lg">
                {cta.secondary.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
