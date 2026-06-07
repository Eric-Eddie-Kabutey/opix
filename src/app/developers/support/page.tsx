import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { pageMeta } from "@/content/seo";
import { DocsLayout } from "@/components/dev/DocsLayout";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = pageMeta({
  title: "Developer Support | OPIX",
  description:
    "Get help integrating OPIX. Reach our engineering team, check platform status, browse the docs, or see what's changed in the changelog.",
  path: "/developers/support",
});

const channels = [
  {
    icon: "support",
    title: "Email our engineers",
    body: "Integration questions, API behaviour, or anything blocking your build. We read every message.",
    cta: { label: "developers@opix.africa", href: "mailto:developers@opix.africa" },
  },
  {
    icon: "chat",
    title: "Talk to sales",
    body: "Volume pricing, enterprise onboarding, custom SLAs, and procurement.",
    cta: { label: "Contact sales", href: "/contact" },
  },
  {
    icon: "github",
    title: "Community & issues",
    body: "Report SDK bugs, request features, and follow along with other builders.",
    cta: { label: "github.com/opix", href: site.socials.github },
  },
];

const selfServe = [
  { icon: "book", title: "Documentation", body: "Guides, quick start, and SDK references.", href: "/developers/docs" },
  { icon: "check", title: "Platform status", body: "Live service health and uptime.", href: "/developers/status" },
  { icon: "refresh", title: "Changelog", body: "What shipped and what's next.", href: "/developers/changelog" },
];

export default function SupportPage() {
  return (
    <DocsLayout
      title="Support"
      description="We're here to help you ship. Pick the channel that fits, or browse the resources below."
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Developers", href: "/developers" },
        { name: "Support", href: "/developers/support" },
      ]}
    >
      <section>
        <h2 className="font-display text-2xl text-navy-900">Get in touch</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {channels.map((c) => {
            const external = c.cta.href.startsWith("http");
            return (
              <div key={c.title} className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                  <Icon name={c.icon} className="h-5.5 w-5.5" width={22} height={22} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-navy-900">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{c.body}</p>
                <a
                  href={c.cta.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal-600"
                >
                  {c.cta.label}
                  <Icon name="arrow-right" className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy-900">Response times</h2>
        <p className="mt-3 text-slate-600">
          Sandbox and free-tier questions are answered within two business days. Production accounts on a paid plan
          receive priority support, and enterprise customers get a dedicated channel with a contractual SLA.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy-900">Help yourself, faster</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {selfServe.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-teal-500/40"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/5 text-navy-900">
                <Icon name={s.icon} className="h-4.5 w-4.5" width={18} height={18} />
              </span>
              <p className="mt-4 text-sm font-semibold text-navy-900">{s.title}</p>
              <p className="mt-1 flex-1 text-xs text-slate-500">{s.body}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-teal-600">
                Open
                <Icon name="arrow-right" className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </DocsLayout>
  );
}
