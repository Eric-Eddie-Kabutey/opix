import { Icon } from "@/components/ui/Icon";

type Pillar = { icon: string; title: string; body: string };

export function SecurityPillars({ pillars }: { pillars: Pillar[] }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
      {pillars.map((p) => (
        <div key={p.title} className="bg-navy-900 p-7">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
            <Icon name={p.icon} className="h-5.5 w-5.5" width={22} height={22} />
          </span>
          <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
        </div>
      ))}
    </div>
  );
}

export function TrustBadgeRow({ badges, onDark = false }: { badges: string[]; onDark?: boolean }) {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {badges.map((b) => (
        <li
          key={b}
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium ${
            onDark ? "border-white/15 text-slate-300" : "border-slate-200 bg-white text-slate-600"
          }`}
        >
          <Icon name="check" className="h-3.5 w-3.5 text-teal-500" strokeWidth={2.5} />
          {b}
        </li>
      ))}
    </ul>
  );
}
