import type { ReactNode } from "react";
import { DocsSidebar } from "./DocsSidebar";
import { DocsMobileNav } from "./DocsMobileNav";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

// Shared shell for every page in the Developers section. Desktop: sticky left
// sidebar (collapsible sections). Mobile: a "Developer menu" disclosure above the
// content holding the same nav. Pass `wide` for pages that need full content width
// (e.g. the API reference grid) — the sidebar stays, the prose cap is lifted.
export function DocsLayout({
  title,
  description,
  crumbs,
  children,
  wide = false,
}: {
  title: string;
  description?: string;
  crumbs: Crumb[];
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className="container-page py-10 md:py-14">
      <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <DocsSidebar />
          </div>
        </aside>

        <div className="min-w-0">
          <div className="flex items-center gap-3">
            {/* Mobile/tablet: compact drawer toggle sits inline before the crumbs. */}
            <DocsMobileNav />
            <Breadcrumbs items={crumbs} />
          </div>
          <header className="mt-5 border-b border-slate-200 pb-8">
            <h1 className="font-display text-3xl text-navy-900 md:text-4xl">{title}</h1>
            {description && <p className="mt-3 max-w-2xl text-lg text-slate-600">{description}</p>}
          </header>
          <div className={`prose-docs mt-10 space-y-12 ${wide ? "" : "w-full"}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}
