import type { Metadata } from "next";
import { pageMeta } from "@/content/seo";
import { FEATURED_ARTICLES, ALL_ARTICLES } from "@/content/blog";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { CardCarousel } from "@/components/sections/CardCarousel";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogArchive } from "@/components/blog/BlogArchive";

export const metadata: Metadata = pageMeta({
  title: "Blog | Insights on Identity, Trust & Africa's Digital Economy",
  description:
    "Insights on digital identity, KYC, financial inclusion, and developer best practices from the OPIX team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Insights on identity, trust, and Africa's digital economy."
        subtitle="Industry trends, developer deep dives, and stories from the teams building on OPIX."
      />

      {/* Featured — coverflow carousel: center card larger, sides smaller, loops */}
      <Section tone="light">
        <div className="mb-8 flex items-center justify-between">
          <p className="eyebrow text-teal-600">Featured</p>
        </div>
        <CardCarousel ariaLabel="Featured articles" itemClassName="w-[88vw] sm:w-[620px] lg:w-[760px]">
          {FEATURED_ARTICLES.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </CardCarousel>
      </Section>

      {/* Archive: search · category filter · paginated list */}
      <Section tone="white">
        <h2 className="mb-8 font-display text-2xl text-navy-900">Latest articles</h2>
        <BlogArchive articles={ALL_ARTICLES} />
      </Section>
    </>
  );
}
