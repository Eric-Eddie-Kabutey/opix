"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

// Accessible copy-to-clipboard button with aria-live confirmation (docs §15 a11y).
// Icon-only; tone matches the surrounding code surface (light vs dark).
export function CopyButton({
  text,
  tone = "light",
  className = "",
}: {
  text: string;
  tone?: "light" | "dark";
  className?: string;
}) {
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

  const toneCls =
    tone === "dark"
      ? "text-slate-400 hover:bg-white/10 hover:text-slate-200"
      : "text-slate-400 hover:bg-slate-200/70 hover:text-navy-900";

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied to clipboard" : "Copy code to clipboard"}
      className={`inline-flex h-7 w-7 items-center justify-center rounded-md transition-colors ${
        copied ? "text-success" : toneCls
      } ${className}`}
    >
      <Icon name={copied ? "check" : "copy"} className="h-4 w-4" strokeWidth={copied ? 2.5 : 1.6} />
      <span className="sr-only" aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
