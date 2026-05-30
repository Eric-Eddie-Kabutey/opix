import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Role } from "@/content/careers";

export function RoleCard({ role }: { role: Role }) {
  return (
    <Link
      href={`/careers/${role.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="flex items-center justify-between">
        <span className="eyebrow text-teal-600">{role.department}</span>
        <Icon name="arrow-right" className="h-4 w-4 -translate-x-1 text-teal-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-navy-900">{role.title}</h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">{role.summary}</p>
      <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <Icon name="pin" className="h-3.5 w-3.5" />
          <dd>{role.location}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <Icon name="clock" className="h-3.5 w-3.5" />
          <dd>{role.type}</dd>
        </div>
      </dl>
    </Link>
  );
}
