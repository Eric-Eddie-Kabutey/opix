"use client";

import { useId, useState } from "react";
import { CopyButton } from "./CopyButton";

type Tab = { lang: string; label: string; code: string };

// Tabbed code with arrow-key navigation + aria-selected (docs §15 a11y).
export function CodeTabs({ tabs, title }: { tabs: Tab[]; title?: string }) {
  const [active, setActive] = useState(0);
  const base = useId();

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") setActive((a) => (a + 1) % tabs.length);
    if (e.key === "ArrowLeft") setActive((a) => (a - 1 + tabs.length) % tabs.length);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-950">
      <div className="flex items-center justify-between border-b border-white/10 pr-2">
        <div role="tablist" aria-label={title ?? "Code examples"} className="flex" onKeyDown={onKey}>
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              role="tab"
              id={`${base}-tab-${i}`}
              aria-selected={active === i}
              aria-controls={`${base}-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              className={`border-b-2 px-4 py-2.5 text-xs font-medium transition-colors ${
                active === i
                  ? "border-teal-500 text-white"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <CopyButton text={tabs[active].code} />
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`${base}-panel-${i}`}
          aria-labelledby={`${base}-tab-${i}`}
          hidden={active !== i}
        >
          <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed" tabIndex={0}>
            <code className="font-mono text-slate-200">{tab.code}</code>
          </pre>
        </div>
      ))}
    </div>
  );
}
