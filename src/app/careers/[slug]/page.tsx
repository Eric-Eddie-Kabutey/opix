import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { roles, getRole } from "@/content/careers";
import { pageMeta } from "@/content/seo";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CheckList } from "@/components/ui/CheckList";
import { JobPostingSchema } from "@/components/careers/JobPostingSchema";

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) return {};
  return pageMeta({
    title: `${role.title} | Careers at OPIX`,
    description: role.summary.slice(0, 155),
    path: `/careers/${slug}`,
  });
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  return (
    <>
      <JobPostingSchema role={role} />

      <section className="relative overflow-hidden bg-aurora">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="container-page relative py-14 md:py-20">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Careers", href: "/careers" },
              { name: role.title, href: `/careers/${slug}` },
            ]}
            onDark
          />
          <div className="mt-8 max-w-3xl">
            <span className="eyebrow text-teal-400">{role.department}</span>
            <h1 className="mt-3 font-display text-3xl leading-tight text-white md:text-5xl">{role.title}</h1>
            <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              {[
                ["pin", role.location],
                ["clock", role.type],
                ["coins", role.salary],
              ].map(([icon, val]) => (
                <div key={val} className="flex items-center gap-1.5">
                  <Icon name={icon} className="h-4 w-4 text-teal-400" />
                  <dd>{val}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={role.applyHref} size="lg" withArrow>Apply for this Role</Button>
              <ul className="flex flex-wrap gap-1.5">
                {role.tags.map((t) => (
                  <li key={t} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-slate-300">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_0.8fr] lg:items-start">
          <div className="min-w-0 space-y-10">
            <div>
              <h2 className="font-display text-2xl text-navy-900">About the role</h2>
              <p className="mt-4 leading-relaxed text-slate-600">{role.summary}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy-900">What you&apos;ll do</h2>
              <CheckList items={role.responsibilities} className="mt-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy-900">What you bring</h2>
              <CheckList items={role.requirements} className="mt-5" />
            </div>
            {role.niceToHave && (
              <div>
                <h2 className="font-display text-2xl text-navy-900">Nice to have</h2>
                <ul className="mt-5 space-y-2">
                  {role.niceToHave.map((n) => (
                    <li key={n} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold-500" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sticky apply sidebar */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slate-400">Reports to</dt>
                  <dd className="mt-0.5 font-medium text-navy-900">{role.reportingTo}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slate-400">Team</dt>
                  <dd className="mt-0.5 font-medium text-navy-900">{role.teamSize}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slate-400">Type</dt>
                  <dd className="mt-0.5 font-medium text-navy-900">{role.type}</dd>
                </div>
              </dl>
              <Button href={role.applyHref} className="mt-6 w-full" withArrow>Apply for this Role</Button>
              <Link href="/careers#open-roles" className="mt-3 block text-center text-sm text-slate-500 hover:text-navy-900">
                ← View all roles
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
