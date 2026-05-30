import type { ReactNode } from "react";
import { DocsSidebar } from "./DocsSidebar";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

export function DocsLayout({
  title,
  description,
  crumbs,
  children,
}: {
  title: string;
  description?: string;
  crumbs: Crumb[];
  children: ReactNode;
}) {
  return (
    <div className="container-page py-10 md:py-14">
      <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <DocsSidebar />
          </div>
        </aside>
        <div className="min-w-0">
          <Breadcrumbs items={crumbs} />
          <header className="mt-5 border-b border-slate-200 pb-8">
            <h1 className="font-display text-3xl text-navy-900 md:text-4xl">{title}</h1>
            {description && <p className="mt-3 max-w-2xl text-lg text-slate-600">{description}</p>}
          </header>
          <div className="prose-docs mt-10 space-y-12">{children}</div>
        </div>
      </div>
    </div>
  );
}
