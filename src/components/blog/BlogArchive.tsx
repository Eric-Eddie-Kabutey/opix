"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Article } from "@/content/blog";
import { Icon } from "@/components/ui/Icon";
import { BlogListRow } from "./BlogListRow";

const PER_PAGE = 5;

// Interactive blog archive: free-text search, category filter (derived from tags),
// and pagination at 5 per page. Rows reveal on scroll-in. All filtering is client
// side over the full article set passed in from the server page.
export function BlogArchive({ articles }: { articles: Article[] }) {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  // Categories = the primary segment of each tag (before " · "), de-duplicated.
  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => set.add(a.tag.split(" · ")[0]));
    return ["All", ...Array.from(set)];
  }, [articles]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesCat = category === "All" || a.tag.split(" · ")[0] === category;
      const matchesQ =
        q === "" ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tag.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [articles, query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  // Any filter change resets to page 1.
  const onSearch = (v: string) => {
    setQuery(v);
    setPage(1);
  };
  const onCategory = (c: string) => {
    setCategory(c);
    setPage(1);
  };

  return (
    <div>
      {/* Controls: category pills + search */}
      <div className="flex flex-col gap-4 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => onCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                category === c
                  ? "bg-primary text-white"
                  : "text-slate-500 hover:bg-slate-100 hover:text-navy-900"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <label className="relative w-full lg:w-64">
          <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search articles"
            aria-label="Search articles"
            className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-9 pr-4 text-sm text-navy-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          />
        </label>
      </div>

      {/* Results */}
      {pageItems.length > 0 ? (
        <div className="mt-4">
          {pageItems.map((article, i) => (
            <motion.div
              // Re-key on page/filter so rows re-reveal when the set changes.
              key={`${current}-${category}-${article.id}`}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
            >
              <BlogListRow article={article} />
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-sm text-slate-500">
          No articles match your search. Try a different term or category.
        </p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={current === 1}
            aria-label="Previous page"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-navy-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              aria-label={`Page ${p}`}
              aria-current={p === current}
              className={`h-9 min-w-9 rounded-full px-3 text-sm font-medium transition ${
                p === current ? "bg-primary text-white" : "text-slate-500 hover:bg-slate-100 hover:text-navy-900"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={current === totalPages}
            aria-label="Next page"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-navy-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Icon name="arrow-right" className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
