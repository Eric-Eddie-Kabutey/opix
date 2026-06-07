import Link from "next/link";
import {
  footerColumns,
  footerIntro,
  footerCompliance,
  footerDisclaimer,
  footerBottom,
} from "@/content/footer";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { FooterCta } from "@/components/layout/FooterCta";
import { Icon } from "@/components/ui/Icon";
import Text3DFlip from "@/components/ui/text-3d-flip";
import { Key } from "lucide-react";

// Light, minimalist footer. The only dark element is the newsletter CTA card. shadow-[0_-30px_60px_-32px_rgba(11,23,36,0.22)]
export function Footer() {
  return (
    <footer className="relative z-20 overflow-hidden bg-secondary text-foreground ">
      <Container className="relative pt-16">
        {/* Newsletter CTA card */}
        <FooterCta />
        {/* Intro + link columns */}
        <div className="mt-16 grid gap-10 grid-cols-[1.4fr_repeat(1,1fr)] sm:grid-cols-[1.4fr_repeat(2,1fr)] md:grid-cols-[1.4fr_repeat(3,1fr)] lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Link
              href="/"
              aria-label="OPIX home"
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              <Text3DFlip
                as="span"
                // inline span = valid inside the <a>; perspective makes the
                // per-letter rotation read as a real 3D flip (not a flat skew).
                className="[perspective:500px]"
                textClassName="text-foreground"
                flipTextClassName="text-accent"
                rotateDirection="top"
              >
                OPIX
              </Text3DFlip>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {footerIntro}
            </p>
          </div>
          {/* grid gap-10 grid-cols-[1.4fr_repeat(1,1fr)] sm:grid-cols-[1.4fr_repeat(2,1fr)] md:grid-cols-[1.4fr_repeat(3,1fr)] lg:grid-cols-[1.4fr_repeat(4,1fr)] */}
          {footerColumns.map((col, index) => (
            
              <nav key={col.heading} aria-label={col.heading}>
                <p className="eyebrow mb-4 text-muted-foreground/70">
                  {col.heading}
                </p>

                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
          ))}
        </div>

        {/* Oversized brand wordmark — full-width, bleeds off the bottom (decorative) */}
        <div className="relative mt-8 select-none" aria-hidden>
          <div className="w-full">
            <svg
              viewBox="0 0 1200 350"
              preserveAspectRatio="xMidYMid meet"
              className="block h-auto"
            >
              {/* <defs>
                <linearGradient id="opix-footer" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#12355b" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#12355b" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#12355b" stopOpacity="0.08" />
                </linearGradient>
              </defs> */}
              <text
                x="600"
                y="336"
                textAnchor="middle"
                lengthAdjust="spacingAndGlyphs"
                fontSize={400}
                // Use CSS (not the SVG attribute) so the --font-wordmark var resolves.
                style={{ fontFamily: "var(--font-wordmark)" ,fill: "var(--color-primary)"}}
              >
                OPIX
              </text>
            </svg>
          </div>
        </div>

        {/* Compliance + disclaimer — full width, stronger lead line */}
        <div className="pt-10">
          <p className="text-center gap-3 text-base font-semibold leading-relaxed text-foreground">
            {/* <Icon name="scale" className="mt-0.5 h-5 w-5 flex-none text-accent" /> */}
            {footerCompliance}
          </p>
          {/* PLACEHOLDER: legal disclaimer — review with counsel before production. */}
          <p className="mt-4 text-sm text-center leading-relaxed text-muted-foreground">
            {footerDisclaimer}
          </p>
        </div>

        {/* Bottom row */}
        <div className="my-12 flex flex-col gap-5 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <a
              href={site.socials.linkedin}
              aria-label="OPIX on LinkedIn"
              className="text-muted-foreground transition-colors hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" className="h-5 w-5" />
            </a>
            <a
              href={site.socials.twitter}
              aria-label="OPIX on X"
              className="text-muted-foreground transition-colors hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="twitter" className="h-5 w-5" />
            </a>
            <a
              href={site.socials.github}
              aria-label="OPIX on GitHub"
              className="text-muted-foreground transition-colors hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" className="h-5 w-5" />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>{footerBottom.copyright}</span>
            <span aria-hidden>·</span>
            <span>{footerBottom.note}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
