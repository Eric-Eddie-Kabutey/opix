import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { CopyButton } from "./CopyButton";

type SDK = {
  name: string;
  version: string;
  badge: string;
  description: string;
  install: string;
  features: string[];
  docs: string;
  github: string;
};

export function SDKCard({ sdk }: { sdk: SDK }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-navy-900">{sdk.name}</h3>
        <span className="rounded-full bg-teal-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-teal-700">
          {sdk.badge}
        </span>
      </div>
      <p className="mt-0.5 font-mono text-xs text-slate-400">{sdk.version}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{sdk.description}</p>

      <div className="mt-4 flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-primary px-3 py-2">
        <code className="overflow-x-auto whitespace-nowrap font-mono text-xs text-slate-200">{sdk.install}</code>
        <CopyButton text={sdk.install} />
      </div>

      <ul className="mt-5 flex-1 space-y-2">
        {sdk.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
            <Icon name="check" className="mt-0.5 h-3.5 w-3.5 flex-none text-teal-600" strokeWidth={2.5} />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-4 text-sm">
        <Link href={sdk.docs} className="font-medium text-navy-900 hover:text-teal-600">
          Docs
        </Link>
        <a
          href={sdk.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-navy-900"
        >
          <Icon name="github" className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </div>
  );
}
