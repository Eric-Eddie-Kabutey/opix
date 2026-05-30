// Compact hero card — a simple donut (pie) chart of verification outcomes.
// Pure SVG, no chart dependency. Accessible: role="img" summary + a visible
// legend with labels and values (never color alone).

// Colors reference the centralized palette tokens (globals.css §1/§3).
const segments = [
  { label: "Verified instantly", value: 72, color: "var(--color-primary)" }, // Enterprise Blue
  { label: "Cross-bank match", value: 18, color: "var(--color-accent)" }, // Muted Teal
  { label: "New enrollment", value: 10, color: "var(--brand-champagne)" }, // Champagne
];

export function HeroStatCard() {
  const total = segments.reduce((s, x) => s + x.value, 0);
  const R = 42;
  const C = 2 * Math.PI * R;
  let offset = 0;

  const summary = segments.map((s) => `${s.label} ${Math.round((s.value / total) * 100)}%`).join(", ");

  return (
    <div className="mx-auto max-w-sm rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-lift)]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Verification outcomes</h2>
          <p className="text-xs text-muted-foreground">Last 30 days</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/12 px-2.5 py-1 text-[11px] font-medium text-accent-hover">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-status" />
          Live
        </span>
      </div>

      <div className="mt-5 flex items-center gap-6">
        {/* Donut */}
        <div role="img" aria-label={`Verification outcomes: ${summary}.`} className="relative flex-none">
          <svg viewBox="0 0 100 100" className="h-32 w-32 -rotate-90">
            <circle cx="50" cy="50" r={R} fill="none" stroke="var(--color-muted)" strokeWidth="12" />
            {segments.map((s) => {
              const len = (s.value / total) * C;
              const dash = <circle
                key={s.label}
                cx="50"
                cy="50"
                r={R}
                fill="none"
                stroke={s.color}
                strokeWidth="12"
                strokeDasharray={`${len} ${C - len}`}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
              />;
              offset += len;
              return dash;
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-2xl font-semibold text-primary">42k</span>
            <span className="text-[10px] text-muted-foreground">verified</span>
          </div>
        </div>

        {/* Legend */}
        <ul className="flex-1 space-y-2.5">
          {segments.map((s) => (
            <li key={s.label} className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 flex-none rounded-sm" style={{ backgroundColor: s.color }} />
              <span className="flex-1 text-xs text-foreground">{s.label}</span>
              <span className="font-mono text-xs font-medium text-muted-foreground">
                {Math.round((s.value / total) * 100)}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
