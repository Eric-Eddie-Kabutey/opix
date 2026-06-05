import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/content/products";
import { pageMeta, productSchema, faqSchema } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CheckList } from "@/components/ui/CheckList";
import { Icon } from "@/components/ui/Icon";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMeta({ title: product.meta.title, description: product.meta.description, path: `/products/${slug}` });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const path = `/products/${slug}`;

  return (
    <>
      <JsonLd data={productSchema({ name: product.name, description: product.meta.description, path })} />
      {product.faq && <JsonLd data={faqSchema(product.faq)} />}

      <PageHero
        title={product.hero.headline}
        subtitle={product.hero.subheadline}
        primary={product.hero.cta}
        secondary={{ label: "View all products", href: "/products" }}
      />

      {product.placeholder && (
        <div className="bg-gold-500/10 py-3 text-center text-sm text-gold-600">
          {/* PLACEHOLDER: full detail content for this product is not in the source docs. */}
          Detailed documentation for {product.name} is coming soon.
        </div>
      )}

      {/* Summary + key benefits */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader eyebrow="Overview" title={product.tagline} intro={product.summary} />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <p className="eyebrow mb-4 text-slate-400">Key benefits</p>
            <CheckList items={product.keyBenefits} />
          </div>
        </div>
      </Section>

      {/* How it works */}
      {product.howItWorks && (
        <Section tone="light">
          <SectionHeader eyebrow="How it works" title="From first scan to verified, reusable trust." align="center" className="mb-12" />
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {product.howItWorks.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="font-display text-3xl text-teal-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-base font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {/* Features + use cases */}
      {(product.features || product.useCases) && (
        <Section tone="white">
          <div className="grid gap-12 lg:grid-cols-2">
            {product.features && (
              <div>
                <h2 className="font-display text-2xl text-navy-900">Key features</h2>
                <CheckList items={product.features} className="mt-6" />
              </div>
            )}
            {product.useCases && (
              <div>
                <h2 className="font-display text-2xl text-navy-900">Who it&apos;s for</h2>
                <ul className="mt-6 space-y-2.5">
                  {product.useCases.map((u) => (
                    <li key={u} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-900">
                      <Icon name="arrow-right" className="h-4 w-4 text-teal-600" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Integration + security */}
      {(product.integration || product.security) && (
        <Section tone="dark">
          <div className="grid gap-8 md:grid-cols-2">
            {product.integration && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                  <Icon name="code" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">Integration</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{product.integration}</p>
              </div>
            )}
            {product.security && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                  <Icon name="lock" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">Security & compliance</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{product.security}</p>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* FAQ */}
      {product.faq && (
        <Section tone="light">
          <SectionHeader eyebrow="FAQ" title="Common questions." align="center" className="mb-12" />
          <FAQAccordion faqs={product.faq} />
        </Section>
      )}

    </>
  );
}
