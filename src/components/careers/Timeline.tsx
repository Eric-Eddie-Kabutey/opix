type Step = { number: string; title: string; body: string; duration?: string };

// Application process timeline (Careers §8). Vertical on mobile, horizontal-feel on desktop.
export function ApplicationProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-5 md:grid-cols-5">
      {steps.map((step, i) => (
        <li
          key={step.number}
          className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl text-teal-600">
                {step.number}
              </span>
              <span
                  className="h-px flex-1 bg-gradient-to-r from-teal-500/40 to-transparent block"
                  aria-hidden
                />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-navy-900">
              {step.title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              {step.body}
            </p>
          </div>
          {step.duration && (
            <p className="w-fit mt-4 inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
              {step.duration}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
