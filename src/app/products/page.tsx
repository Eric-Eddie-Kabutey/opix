import type { Metadata } from "next";
import { products, productsIndex } from "@/content/products";
import { pageMeta } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/sections/Cards";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = pageMeta({
  title: "Products | Verify, Trust, and Transact",
  description:
    "Explore the OPIX product suite — biometric KYC, background verification, freelancer trust, escrow payments, invoice verification, and credit intelligence.",
  path: "/products",
});

const categories = ["Identity Verification", "Financial Trust"] as const;

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow={productsIndex.label}
        title={productsIndex.headline}
        subtitle={productsIndex.intro}
        crumbs={[{ name: "Home", href: "/" }, { name: "Products", href: "/products" }]}
        primary={{ label: "Start Building", href: "/signup" }}
        secondary={{ label: "Talk to Sales", href: "/contact" }}
      />
      <Section tone="light">
        <div className="space-y-14">
          {categories.map((cat) => (
            <div key={cat}>
              <h2 className="eyebrow mb-6 text-slate-400">{cat}</h2>
              <div className="grid gap-5 md:grid-cols-3">
                {products
                  .filter((p) => p.category === cat)
                  .map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CTASection
        headline="Ready to build trust at scale?"
        subheadline="Join the institutions and freelancers already using OPIX across Africa."
        primary={{ label: "Start for Free", href: "/signup" }}
        secondary={{ label: "Schedule a Demo", href: "/demo" }}
      />
    </>
  );
}
