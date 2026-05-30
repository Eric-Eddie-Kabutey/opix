import { CopyButton } from "./CopyButton";

// Static code surface. Dependency-free (no Prism/Shiki) to keep the bundle lean;
// uses a monospace surface with a language label. Screen readers get the language
// via the header (docs §15 a11y: announce language).
export function CodeBlock({
  code,
  lang = "text",
  filename,
  className = "",
}: {
  code: string;
  lang?: string;
  filename?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-navy-950 ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-xs text-slate-400">
          {filename ?? lang}
          <span className="sr-only"> — {lang} code</span>
        </span>
        <CopyButton text={code} />
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed" tabIndex={0}>
        <code className="font-mono text-slate-200">{code}</code>
      </pre>
    </div>
  );
}
