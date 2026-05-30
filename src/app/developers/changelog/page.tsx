import type { Metadata } from "next";
import { changelog } from "@/content/developers";
import { pageMeta } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { ChangelogAccordion } from "@/components/dev/ChangelogAccordion";

export const metadata: Metadata = pageMeta({
  title: changelog.meta.title,
  description: changelog.meta.description,
  path: "/developers/changelog",
});

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        eyebrow={changelog.label}
        title={changelog.headline}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Developers", href: "/developers" },
          { name: "Changelog", href: "/developers/changelog" },
        ]}
      />
      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <ChangelogAccordion releases={changelog.releases} />
        </div>
      </Section>
    </>
  );
}
