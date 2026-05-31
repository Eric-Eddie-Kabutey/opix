import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/content/seo";
import { footerDisclaimer } from "@/content/footer";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";

// PLACEHOLDER: legal pages. Real policy copy should be supplied by counsel.
const pages: Record<string, { title: string; intro: string }> = {
  terms: { title: "Terms of Service", intro: "The terms governing your use of OPIX products and services." },
  privacy: { title: "Privacy Policy", intro: "How OPIX collects, uses, protects, and shares personal and identity data." },
  cookies: { title: "Cookie Policy", intro: "How OPIX uses cookies and similar technologies." },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return pageMeta({ title: `${page.title} | OPIX`, description: page.intro, path: `/legal/${slug}` });
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={page.title}
        subtitle={page.intro}
        crumbs={[{ name: "Home", href: "/" }, { name: page.title, href: `/legal/${slug}` }]}
      />
      <Section tone="white">
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p className="rounded-lg border border-border bg-muted/40 px-4 py-3 text-xs text-foreground">
            This page is a placeholder. Full {page.title.toLowerCase()} copy will be published before launch.
          </p>
          <p>{footerDisclaimer}</p>
        </div>
      </Section>
    </>
  );
}
