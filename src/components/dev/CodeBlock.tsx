import { CopyButton } from "./CopyButton";

export type CodeTone = "light" | "dark";

// Surface styles per tone. Light is the default (soft tinted card with dark mono
// text — the docs style); dark is for code shown on dark sections (e.g. heroes).
export const codeSurface: Record<CodeTone, { wrap: string; header: string; label: string; code: string }> = {
  light: {
    wrap: "border-slate-200 bg-slate-50",
    header: "border-slate-200",
    label: "text-slate-500",
    code: "text-navy-900",
  },
  dark: {
    wrap: "border-white/10 bg-primary",
    header: "border-white/10",
    label: "text-slate-400",
    code: "text-slate-200",
  },
};

// Static code surface. Dependency-free (no Prism/Shiki) to keep the bundle lean;
// monospace surface with a language/filename label. Screen readers get the
// language via the header (docs §15 a11y: announce language).
export function CodeBlock({
  code,
  lang = "text",
  filename,
  tone = "light",
  className = "",
}: {
  code: string;
  lang?: string;
  filename?: string;
  tone?: CodeTone;
  className?: string;
}) {
  const s = codeSurface[tone];
  return (
    <div className={`overflow-hidden rounded-xl border ${s.wrap} ${className}`}>
      <div className={`flex items-center justify-between border-b px-4 py-2 ${s.header}`}>
        <span className={`font-mono text-xs ${s.label}`}>
          {filename ?? lang}
          <span className="sr-only"> — {lang} code</span>
        </span>
        <CopyButton text={code} tone={tone} />
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed" tabIndex={0}>
        <code className={`font-mono ${s.code}`}>{code}</code>
      </pre>
    </div>
  );
}
