import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/content/seo";

export type Crumb = { name: string; href: string };

// Breadcrumb nav + matching BreadcrumbList schema (docs §20).
export function Breadcrumbs({ items, onDark = false }: { items: Crumb[]; onDark?: boolean }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {last ? (
                  <span className={onDark ? "text-slate-400" : "text-slate-500"} aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className={`transition-colors ${onDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-navy-900"}`}
                    >
                      {item.name}
                    </Link>
                    <span className={onDark ? "text-slate-600" : "text-slate-300"} aria-hidden>
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
