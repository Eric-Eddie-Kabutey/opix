import { Icon } from "@/components/ui/Icon";

type State = "operational" | "degraded" | "down";

const config: Record<State, { label: string; dot: string; text: string }> = {
  operational: { label: "Operational", dot: "bg-success", text: "text-success" },
  degraded: { label: "Degraded", dot: "bg-warning", text: "text-warning" },
  down: { label: "Down", dot: "bg-danger", text: "text-danger" },
};

// Status uses dot + text (not color alone) per docs §15 accessibility.
export function StatusBadge({ state }: { state: string }) {
  const c = config[(state as State) in config ? (state as State) : "operational"];
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${c.text}`}>
      <span className={`relative flex h-2 w-2`}>
        <span className={`absolute inline-flex h-full w-full rounded-full ${c.dot} opacity-60 animate-status`} />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${c.dot}`} />
      </span>
      {c.label}
    </span>
  );
}

export function ServiceRow({ name, state }: { name: string; state: string }) {
  return (
    <li className="flex items-center justify-between border-b border-slate-100 py-3.5 last:border-0">
      <span className="flex items-center gap-2 text-sm text-navy-900">
        <Icon name="check" className="h-4 w-4 text-success" strokeWidth={2.5} />
        {name}
      </span>
      <StatusBadge state={state} />
    </li>
  );
}
