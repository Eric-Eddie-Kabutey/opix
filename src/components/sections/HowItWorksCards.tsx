import { Icon } from "@/components/ui/Icon";
import { ScrollReveal, type RevealOrder } from "./ScrollReveal";

type Step = { number: string; title: string; body: string };

// "How it works" cards — scroll-linked reveal (slide in from the right), powered
// by the reusable ScrollReveal. Pass order="reverse" to reveal the last step first.
export function HowItWorksCards({ steps, order = "forward" }: { steps: Step[]; order?: RevealOrder }) {
  return (
    <ScrollReveal className="grid gap-6 md:grid-cols-3" direction="right" order={order}>
      {steps.map((step, i) => (
        <div key={step.number} className="relative">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <span className="font-display text-4xl text-teal-600">{step.number}</span>
            <h3 className="mt-4 text-lg font-semibold text-navy-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
          </div>
          {i < steps.length - 1 && (
            <span className="absolute -right-7 top-1/2 z-20 hidden -translate-y-1/2 text-teal-500 md:block">
              <Icon name="arrow-right" className="h-8 w-8" />
            </span>
          )}
        </div>
      ))}
    </ScrollReveal>
  );
}
