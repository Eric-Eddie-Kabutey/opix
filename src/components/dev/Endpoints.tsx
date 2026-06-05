import { Icon } from "@/components/ui/Icon";
import type { EndpointGroup as Group } from "@/content/apiReference";

const methodColor: Record<string, string> = {
  GET: "bg-teal-500/15 text-teal-700",
  POST: "bg-navy-900/10 text-navy-800",
  PATCH: "bg-gold-500/15 text-gold-600",
  DELETE: "bg-danger/10 text-danger",
};

export function EndpointGroup({ group }: { group: Group }) {
  return (
    <div className="py-10">
      <div className="mb-5 flex items-center gap-3">
        <h3 className="text-base font-semibold text-navy-900">{group.name}</h3>
      </div>
      <ul className="space-y-1.5">
        {group.endpoints.map((ep) => (
          <li
            key={ep.method + ep.path}
            className="flex flex-col gap-1 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:gap-3"
          >
            <span
              className={`inline-flex w-fit rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold ${methodColor[ep.method]}`}
            >
              {ep.method}
            </span>
            <code className="font-mono text-[13px] text-navy-900">{ep.path}</code>
            <span className="text-xs text-slate-500 sm:ml-auto sm:text-right">{ep.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
