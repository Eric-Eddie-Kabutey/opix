type Layer = { name: string; items: string[] };

// Layered architecture rendered as accessible text + visual (docs §15: diagram has
// a text description for screen readers — here the markup *is* the text).
export function ArchitectureDiagram({ layers }: { layers: Layer[] }) {
  return (
    <div className="space-y-3">
      {layers.map((layer, i) => (
        <div
          key={layer.name}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          style={{ marginInline: `${Math.min(i, 3) * 0.75}rem` }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3 sm:w-56 sm:flex-none">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-teal-500/15 font-mono text-xs font-semibold text-teal-400">
                {i + 1}
              </span>
              <span className="text-sm font-semibold text-white">{layer.name}</span>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {layer.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-white/10 bg-navy-950 px-2.5 py-1 text-[11px] text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

// Simple horizontal data-flow chips (Browser → ... → HSM)
export function DataFlow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">
            {step}
          </span>
          {i < steps.length - 1 && <span className="text-teal-400" aria-hidden>→</span>}
        </li>
      ))}
    </ol>
  );
}
