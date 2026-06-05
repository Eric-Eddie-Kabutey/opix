"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

type FAQ = { q: string; a: string };

// Accessible accordion — one open at a time, aria-expanded/controls (docs §15 a11y).
export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-[1600px] w-full divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q}>
            <h3>
              <button
                id={`faq-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-[15px] font-medium text-navy-900">{faq.q}</span>
                <Icon
                  name={isOpen ? "minus" : "plus"}
                  className="h-5 w-5 flex-none text-teal-600"
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              hidden={!isOpen}
              className="px-6 pb-5 text-sm leading-relaxed text-slate-600"
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
