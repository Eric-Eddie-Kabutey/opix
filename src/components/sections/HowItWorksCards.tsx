import { CardCarousel } from "./CardCarousel";

type Step = { number: string; title: string; body: string };

// "How it works" steps as a coverflow carousel — the centered step is full-size,
// neighbours scaled down. (The connecting arrows from the grid layout don't apply
// to a carousel, so they're dropped; the step numbers carry the sequence.)
export function HowItWorksCards({ steps }: { steps: Step[] }) {
  return (
    <CardCarousel ariaLabel="How OPIX works, step by step">
      {steps.map((step) => (
        <div key={step.number} className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-7">
          <span className="font-display text-4xl text-teal-600">{step.number}</span>
          <h3 className="mt-4 text-lg font-semibold text-navy-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
        </div>
      ))}
    </CardCarousel>
  );
}
