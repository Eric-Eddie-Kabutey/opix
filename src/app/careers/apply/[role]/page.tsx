import type { Metadata } from "next";
import { roles, getRole } from "@/content/careers";
import { pageMeta } from "@/content/seo";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ApplyForm } from "@/components/careers/ApplyForm";

export function generateStaticParams() {
  return [...roles.map((r) => ({ role: r.slug })), { role: "general-application" }];
}

export async function generateMetadata({ params }: { params: Promise<{ role: string }> }): Promise<Metadata> {
  const { role } = await params;
  const found = getRole(role);
  const title = found ? `Apply: ${found.title}` : "Send a General Application";
  return pageMeta({
    title: `${title} | OPIX Careers`,
    description: "Apply to join OPIX and help build Africa's unified digital identity and trust platform.",
    path: `/careers/apply/${role}`,
  });
}

export default async function ApplyPage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  const found = getRole(role);
  const isGeneral = role === "general-application";

  return (
    <Section tone="light" className="min-h-[70vh]">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Careers", href: "/careers" },
          ...(found ? [{ name: found.title, href: `/careers/${role}` }] : []),
          { name: "Apply", href: `/careers/apply/${role}` },
        ]}
      />

      <div className="mx-auto mt-8 max-w-2xl">
        <h1 className="font-display text-3xl text-navy-900 md:text-4xl">
          {isGeneral ? "We're always looking for exceptional people." : `Apply for ${found?.title ?? "this role"}`}
        </h1>
        <p className="mt-3 text-slate-600">
          {isGeneral
            ? "Don't see a role that fits but believe you can contribute to OPIX? Tell us what you'd build, what problem you'd solve, and why you'd be a great fit. We review every submission."
            : "We read every application — no bots, no keyword filters. Tell us why OPIX and why this role."}
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <ApplyForm roleTitle={found?.title} />
        </div>
      </div>
    </Section>
  );
}
