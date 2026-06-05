import type { Metadata } from "next";
import { changelog } from "@/content/developers";
import { pageMeta } from "@/content/seo";
import { DocsLayout } from "@/components/dev/DocsLayout";
import { ChangelogAccordion } from "@/components/dev/ChangelogAccordion";

export const metadata: Metadata = pageMeta({
  title: changelog.meta.title,
  description: changelog.meta.description,
  path: "/developers/changelog",
});

export default function ChangelogPage() {
  return (
    <DocsLayout
      title={changelog.headline}
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Developers", href: "/developers" },
        { name: "Changelog", href: "/developers/changelog" },
      ]}
    >
      <ChangelogAccordion releases={changelog.releases} />
    </DocsLayout>
  );
}
