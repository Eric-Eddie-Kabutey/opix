import { Icon } from "./Icon";

export function CheckList({
  items,
  onDark = false,
  className = "",
}: {
  items: string[];
  onDark?: boolean;
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${
              onDark ? "bg-teal-500/20 text-teal-400" : "bg-teal-500/15 text-teal-600"
            }`}
          >
            <Icon name="check" className="h-3 w-3" strokeWidth={2.5} />
          </span>
          <span className={`text-sm leading-relaxed ${onDark ? "text-slate-300" : "text-slate-600"}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
