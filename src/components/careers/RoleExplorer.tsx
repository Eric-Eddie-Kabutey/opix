"use client";

import { useMemo, useState } from "react";
import { roles, roleCategories } from "@/content/careers";
import { RoleCard } from "./RoleCard";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

// Combined RoleFilter + RoleSearch (docs Careers §7). Filter pills use aria-pressed;
// search has an accessible label + clear button.
export function RoleExplorer() {
  const [category, setCategory] = useState<(typeof roleCategories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return roles.filter((r) => {
      const matchCat = category === "All" || r.category === category;
      const matchQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.department.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-1 flex flex-wrap gap-2 overflow-x-auto px-1 pb-1" role="group" aria-label="Filter roles by team">
          {roleCategories.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                aria-pressed={active}
                onClick={() => setCategory(cat)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-teal-500 text-navy-900"
                    : "bg-white text-slate-600 border hover:text-navy-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="relative lg:w-72">
          <Icon name="search" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by role, team, or keyword…"
            aria-label="Search open roles"
            className="h-11 w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 text-sm text-navy-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
          />
        </div>
      </div>

      <p className="mt-6 text-sm text-slate-500" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "role" : "roles"}
        {category !== "All" ? ` in ${category}` : ""}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((role) => (
            <RoleCard key={role.slug} role={role} />
          ))}
        </div>
      ) : (
        // NO_ROLES_STATE — Careers Page Content Guide
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <Icon name="search" className="mx-auto h-8 w-8 text-slate-300" />
          <h3 className="mt-4 text-lg font-semibold text-navy-900">No matching roles right now</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
            We don&apos;t have any open positions that match your search. But we&apos;re always interested in
            exceptional people.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/careers/apply/general-application" size="md">
              Send us your CV
            </Button>
            <Button href="/contact" variant="ghost" size="md">
              Get notified when roles open
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
