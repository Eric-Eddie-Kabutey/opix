import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/content/blog";
import { Icon } from "@/components/ui/Icon";

// Listing card for a blog post. Taller than a plain text card — image cover with a
// zoom-on-hover, floating category chip, title, excerpt, and an author/meta footer.
// `featured` renders a wide two-column variant for the lead article.
export function BlogCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`group flex overflow-hidden rounded-2xl bg-slate-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${
        featured ? "flex-col md:flex-row" : "h-full flex-col"
      }`}
    >
      {/* Cover */}
      <div className={`relative overflow-hidden bg-slate-100 ${featured ? "md:w-1/2 h-[400px] aspect-[16/10] md:aspect-auto" : "aspect-[16/9]"}`}>
        <Image
          src={article.image}
          alt=""
          fill
          sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy-900 backdrop-blur">
          {article.tag}
        </span>
      </div>

      {/* Body */}
      <div className={`flex flex-1 flex-col p-6 ${featured ? "md:w-1/2 md:p-8" : ""}`}>
        <h3
          className={`font-display leading-snug text-navy-900 transition-colors group-hover:text-teal-700 ${
            featured ? "text-2xl md:text-[1.75rem]" : "text-lg"
          }`}
        >
          {article.title}
        </h3>
        <p className={`mt-3 flex-1 text-sm leading-relaxed text-slate-600 ${featured ? "" : "line-clamp-3"}`}>
          {article.excerpt}
        </p>

        {/* Author + meta */}
        <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
          <Image
            src={article.authorAvatar}
            alt={article.author}
            width={36}
            height={36}
            className="h-9 w-9 flex-none rounded-full object-cover ring-2 ring-white"
          />
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-navy-900">{article.author}</p>
            <p className="flex items-center gap-1.5 text-[11px] text-slate-500">
              {article.date}
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1">
                <Icon name="clock" className="h-3 w-3" />
                {article.readTime}
              </span>
            </p>
          </div>
          <Icon
            name="arrow-right"
            className="ml-auto h-4 w-4 flex-none text-teal-600 transition-transform group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </Link>
  );
}
