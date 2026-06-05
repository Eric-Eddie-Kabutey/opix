"use client";

import { useId, useState } from "react";
import { CopyButton } from "./CopyButton";
import { codeSurface, type CodeTone } from "./CodeBlock";

// Client half of CodeTabs: handles tab switching + arrow-key nav (docs §15 a11y).
// Each tab arrives with its code already highlighted to HTML on the server, so no
// highlighter ships to the browser — we just render the pre-tokenized markup.
export type HighlightedTab = { label: string; code: string; html: string };

export function CodeTabsClient({
  tabs,
  title,
  tone = "light",
}: {
  tabs: HighlightedTab[];
  title?: string;
  tone?: CodeTone;
}) {
  const [active, setActive] = useState(0);
  const base = useId();
  const s = codeSurface[tone];

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") setActive((a) => (a + 1) % tabs.length);
    if (e.key === "ArrowLeft") setActive((a) => (a - 1 + tabs.length) % tabs.length);
  };

  const tabCls = (selected: boolean) =>
    selected
      ? `border-teal-500 ${tone === "dark" ? "text-white" : "text-navy-900"}`
      : tone === "dark"
        ? "border-transparent text-slate-400 hover:text-slate-200"
        : "border-transparent text-slate-500 hover:text-navy-900";

  return (
    <div className={`overflow-hidden rounded-xl border ${s.wrap}`}>
      <div className={`flex items-center justify-between border-b pr-2 ${s.header}`}>
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
              className={`border-b-2 px-4 py-2.5 text-xs font-medium transition-colors ${tabCls(active === i)}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <CopyButton text={tabs[active].code} tone={tone} />
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
            <code
              className="font-mono [&_.shiki]:bg-transparent"
              // Pre-highlighted on the server (Shiki). Safe: source is our own static
              // content, not user input.
              dangerouslySetInnerHTML={{ __html: tab.html }}
            />
          </pre>
        </div>
      ))}
    </div>
  );
}
