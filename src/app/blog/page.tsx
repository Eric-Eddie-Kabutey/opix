import type { Metadata } from "next";
import { pageMeta } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = pageMeta({
  title: "Blog | Insights on Identity, Trust & Africa's Digital Economy",
  description:
    "Insights on digital identity, KYC, financial inclusion, and developer best practices from the OPIX team.",
  path: "/blog",
});

// PLACEHOLDER: full blog/CMS is out of scope. Topics seeded from Website Content
// Guide §19 (blog strategy) so the Company → Blog link resolves with real intent.
const upcoming = [
  { tag: "Identity & Trust", title: "Why African Banks Need a Unified KYC Platform (And Why Now)" },
  { tag: "Developer Deep Dives", title: "Building Biometric KYC: A Technical Guide for African Fintechs" },
  { tag: "Financial Inclusion", title: "The Real Cost of KYC Duplication in African Banking" },
  { tag: "Partner Stories", title: "How Freelancers in The Gambia Are Building Trust Scores That Travel" },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights on identity, trust, and Africa's digital economy."
        subtitle="Industry trends, developer deep dives, and stories from the teams building on OPIX. Full archive coming soon."
        crumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]}
      />
      <Section tone="light">
        <div className="grid gap-5 md:grid-cols-2">
          {upcoming.map((post) => (
            <Card key={post.title} variant="surface" className="flex flex-col">
              <Badge variant="accent" className="w-fit">{post.tag}</Badge>
              <CardTitle className="mt-4">{post.title}</CardTitle>
              <CardBody>Coming soon.</CardBody>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
