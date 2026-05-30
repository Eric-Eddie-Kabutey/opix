"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

type Release = { version: string; date: string; badge?: string; changes: string[] };

export function ChangelogAccordion({ releases }: { releases: Release[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {releases.map((r, i) => {
        const isOpen = open === i;
        return (
          <div key={r.version} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <button
              aria-expanded={isOpen}
              aria-controls={`rel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm font-semibold text-navy-900">{r.version}</span>
                {r.badge && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                      r.badge === "Latest"
                        ? "bg-teal-500/15 text-teal-700"
                        : r.badge === "Major"
                          ? "bg-gold-500/15 text-gold-600"
                          : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {r.badge}
                  </span>
                )}
                <span className="text-xs text-slate-400">{r.date}</span>
              </span>
              <Icon name={isOpen ? "minus" : "plus"} className="h-5 w-5 flex-none text-teal-600" />
            </button>
            <ul id={`rel-${i}`} hidden={!isOpen} className="space-y-2 px-6 pb-6">
              {r.changes.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-teal-500" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
