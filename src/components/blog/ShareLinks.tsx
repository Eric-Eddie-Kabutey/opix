"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

// Article share controls: copy-link (clipboard) + X + LinkedIn. Client component —
// reads window.location at click time, so it works on any post without prop drilling.
function ShareButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-navy-900"
    >
      {icon}
      {label}
    </button>
  );
}

export function ShareLinks({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const url = () => (typeof window !== "undefined" ? window.location.href : "");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <div className="space-y-2">
      <ShareButton
        onClick={handleCopy}
        label={copied ? "Copied!" : "Copy link"}
        icon={<Icon name={copied ? "check" : "copy"} className="h-3.5 w-3.5 flex-none" />}
      />
      <ShareButton
        label="Share on X"
        onClick={() =>
          window.open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url())}&text=${encodeURIComponent(title)}`,
            "_blank",
            "noopener,noreferrer",
          )
        }
        icon={<Icon name="twitter" className="h-3.5 w-3.5 flex-none" />}
      />
      <ShareButton
        label="Share on LinkedIn"
        onClick={() =>
          window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url())}`,
            "_blank",
            "noopener,noreferrer",
          )
        }
        icon={<Icon name="linkedin" className="h-3.5 w-3.5 flex-none" />}
      />
    </div>
  );
}
