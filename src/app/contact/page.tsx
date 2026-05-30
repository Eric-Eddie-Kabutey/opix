import type { Metadata } from "next";
import { contact } from "@/content/company";
import { pageMeta } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = pageMeta({
  title: contact.meta.title,
  description: contact.meta.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={contact.headline}
        subtitle={contact.subheadline}
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]}
      />
      <Section tone="white">
        <div className="grid gap-5 md:grid-cols-3">
          {contact.channels.map((c) => (
            <a
              key={c.title}
              href={`mailto:${c.action}`}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <h3 className="text-lg font-semibold text-navy-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.body}</p>
              <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal-600">
                {c.action}
                <Icon name="arrow-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </p>
            </a>
          ))}
        </div>
        {/* PLACEHOLDER: no contact form spec in source docs — using direct email channels. */}
      </Section>
    </>
  );
}
