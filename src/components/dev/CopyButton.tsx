"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

// Accessible copy-to-clipboard button with aria-live confirmation (docs §15 a11y).
export function CopyButton({ text, className = "" }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied to clipboard" : "Copy code to clipboard"}
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-200 ${className}`}
    >
      <Icon name={copied ? "check" : "copy"} className="h-3.5 w-3.5" strokeWidth={copied ? 2.5 : 1.6} />
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
