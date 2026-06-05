import type { Metadata } from "next";
import { status } from "@/content/developers";
import { pageMeta } from "@/content/seo";
import { DocsLayout } from "@/components/dev/DocsLayout";
import { StatusBadge, ServiceRow } from "@/components/dev/StatusBadge";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = pageMeta({
  title: status.meta.title,
  description: status.meta.description,
  path: "/developers/status",
});

export default function StatusPage() {
  return (
    <DocsLayout
      title="Platform Status"
      description="Real-time health of the OPIX platform and its services."
      crumbs={[
        { name: "Home", href: "/" },
        { name: "Developers", href: "/developers" },
        { name: "Status", href: "/developers/status" },
      ]}
    >
      <section>
        <div className="rounded-2xl border border-success/30 bg-success/5 p-7 text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 shadow-sm">
            <Icon name="check" className="h-5 w-5 text-success" strokeWidth={2.5} />
            <span className="font-display text-lg text-navy-900">{status.headline}</span>
          </span>
          <p className="mt-3 text-xs text-slate-500">Last updated {status.lastUpdated}</p>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-navy-900">Services</h2>
            <StatusBadge state="operational" />
          </div>
          <ul>
            {status.services.map((s) => (
              <ServiceRow key={s.name} name={s.name} state={s.state} />
            ))}
          </ul>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {status.uptime.map((u) => (
            <div key={u.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <p className="font-display text-3xl text-teal-600">{u.value}</p>
              <p className="mt-1 text-xs text-slate-500">{u.label} · 30 days</p>
            </div>
          ))}
        </div>
      </section>
    </DocsLayout>
  );
}
