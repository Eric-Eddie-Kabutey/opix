import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/content/blog";
import { Icon } from "@/components/ui/Icon";

// Horizontal list row for the blog archive: text on the left (date · category,
// title, excerpt, author, "Read the story"), a large illustrative image on the
// right. Big, minimal, image-forward — the listing's primary card.
export function BlogListRow({ article }: { article: Article }) {
  return (
    <article className="group bg-slate-100 rounded-2xl p-6 mb-4 lg:mb-8">
      <Link href={`/blog/${article.slug}`} className="grid items-center gap-6 md:grid-cols-[1fr_minmax(0,620px)] md:gap-12">
        {/* Text */}
        <div className="min-w-0 order-2 md:order-1">
          <p className="flex items-center gap-2 text-xs text-slate-500">
            <span>{article.date}</span>
            <span aria-hidden>·</span>
            <span className="font-semibold uppercase tracking-wide text-teal-600">{article.tag}</span>
          </p>
          <h3 className="mt-3 font-display text-2xl leading-snug text-navy-900 transition-colors group-hover:text-teal-700 md:text-[1.7rem]">
            {article.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <Image
              src={article.authorAvatar}
              alt={article.author}
              width={28}
              height={28}
              className="h-7 w-7 flex-none rounded-full object-cover ring-1 ring-slate-200"
            />
            <span className="text-xs text-slate-500">
              {article.author} · {article.readTime}
            </span>
          </div>

          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900">
            Read the story
            <Icon name="arrow-right" className="h-4 w-4 text-teal-600 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>

        {/* Image */}
        <div className="relative order-1 aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 md:order-2">
          <Image
            src={article.image}
            alt=""
            fill
            sizes="(min-width: 768px) 420px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
    </article>
  );
}
