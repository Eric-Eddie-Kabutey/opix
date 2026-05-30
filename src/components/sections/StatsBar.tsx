type Stat = { value: string; label: string };

export function StatsBar({ stats, onDark = false }: { stats: Stat[]; onDark?: boolean }) {
  return (
    <dl
      className={`grid grid-cols-1 divide-y rounded-2xl border sm:grid-cols-3 sm:divide-x sm:divide-y-0 ${
        onDark ? "divide-white/10 border-white/10 bg-white/5" : "divide-slate-200 border-slate-200 bg-white"
      }`}
    >
      {stats.map((s) => (
        <div key={s.label} className="px-6 py-6 text-center sm:py-7">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className={`block font-display text-3xl md:text-4xl ${onDark ? "text-teal-400" : "text-teal-600"}`}>
              {s.value}
            </span>
            <span className={`mt-1.5 block text-sm ${onDark ? "text-slate-400" : "text-slate-500"}`}>
              {s.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
