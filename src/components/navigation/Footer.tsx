import Link from "next/link";
import { footerColumns, certificationBadges } from "@/content/navigation";
import { site } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <footer className="bg-aurora text-slate-300">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          {/* Brand */}
          <div className="max-w-xs">
            <Logo onDark />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Africa&apos;s unified digital identity and trust platform. Verify anyone in seconds —
              with consent, every time.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href={site.socials.linkedin} aria-label="OPIX on LinkedIn" className="text-slate-400 transition-colors hover:text-teal-400" target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" className="h-5 w-5" />
              </a>
              <a href={site.socials.twitter} aria-label="OPIX on X" className="text-slate-400 transition-colors hover:text-teal-400" target="_blank" rel="noopener noreferrer">
                <Icon name="twitter" className="h-5 w-5" />
              </a>
              <a href={site.socials.github} aria-label="OPIX on GitHub" className="text-slate-400 transition-colors hover:text-teal-400" target="_blank" rel="noopener noreferrer">
                <Icon name="github" className="h-5 w-5" />
              </a>
            </div>
            <Link
              href="/careers"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1.5 text-xs font-medium text-teal-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-status" />
              We&apos;re hiring
            </Link>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="eyebrow mb-4 text-slate-500">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {certificationBadges.map((b) => (
              <span key={b} className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                {b}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span>© 2026 OPIX. All rights reserved.</span>
            <span aria-hidden>·</span>
            <span>Made with care for Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
