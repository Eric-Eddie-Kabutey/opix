import { Icon } from "@/components/ui/Icon";

export type Feature = { icon?: string; title: string; body: string };

export function FeatureCard({ feature, onDark = false }: { feature: Feature; onDark?: boolean }) {
  return (
    <div
      className={`group rounded-2xl border p-6 transition-all duration-300 ${
        onDark
          ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
          : "border-slate-200 bg-white hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
      }`}
    >
      {feature.icon && (
        <span
          className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
            onDark ? "bg-teal-500/15 text-teal-400" : "bg-teal-500/10 text-teal-600"
          }`}
        >
          <Icon name={feature.icon} className="h-5.5 w-5.5" width={22} height={22} />
        </span>
      )}
      <h3 className={`text-lg font-semibold ${onDark ? "text-white" : "text-navy-900"}`}>{feature.title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${onDark ? "text-slate-400" : "text-slate-600"}`}>
        {feature.body}
      </p>
    </div>
  );
}

export function FeatureGrid({
  features,
  columns = 3,
  onDark = false,
}: {
  features: Feature[];
  columns?: 2 | 3 | 4;
  onDark?: boolean;
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];
  return (
    <div className={`grid grid-cols-1 gap-5 ${cols}`}>
      {features.map((f) => (
        <FeatureCard key={f.title} feature={f} onDark={onDark} />
      ))}
    </div>
  );
}
