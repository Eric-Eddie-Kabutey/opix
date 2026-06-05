import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { pageMeta } from "@/content/seo";
import {
  ALL_ARTICLES_WITH_FEATURED,
  getArticleBySlug,
  getRelatedArticles,
} from "@/content/blog";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ShareLinks } from "@/components/blog/ShareLinks";

export function generateStaticParams() {
  return ALL_ARTICLES_WITH_FEATURED.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return pageMeta({ title: "Article not found", description: "", path: `/blog/${slug}` });
  return pageMeta({
    title: `${article.title} | OPIX Blog`,
    description: article.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 3);

  return (
    <article className="bg-background">
      {/* Header */}
      <div className="bg-hero-light">
        <Container className="py-10 md:py-14">
          {/* Basic article info */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-700">
              {article.tag}
            </span>
            <h1 className="mt-4 font-display text-3xl leading-[1.12] text-navy-900 md:text-4xl lg:text-[2.75rem]">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{article.excerpt}</p>
            <div className="mt-6 flex items-center gap-3">
              <Image
                src={article.authorAvatar}
                alt={article.author}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
              />
              <div className="text-sm">
                <p className="font-semibold text-navy-900">{article.author}</p>
                <p className="flex items-center gap-1.5 text-xs text-slate-500">
                  {article.date}
                  <span aria-hidden>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Icon name="clock" className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Cover image */}
          <div className="mt-12 relative aspect-[21/9] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
          <Image
            src={article.image}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
        </Container>
      </div>

      {/* Body + sidebar */}
      <Container className="py-14 md:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_300px] xl:gap-16">
          {/* Body */}
          <div className="min-w-0">
            <ArticleBody body={article.body} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28">
            <div>
              <p className="eyebrow mb-3 text-slate-400">Written by</p>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={article.authorAvatar}
                    alt={article.author}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-sm"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-navy-900">{article.author}</p>
                    <p className="truncate text-xs text-slate-500">{article.authorRole}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow mb-3 text-slate-400">Share this</p>
              <ShareLinks title={article.title} />
            </div>

            {related.length > 0 && (
              <div>
                <p className="eyebrow mb-3 text-slate-400">Related articles</p>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/blog/${r.slug}`}
                      className="group flex gap-3 rounded-xl border border-slate-100 p-3 transition-all hover:border-teal-500/30 hover:bg-teal-500/[0.04]"
                    >
                      <div className="relative h-16 w-16 flex-none overflow-hidden rounded-lg bg-slate-100">
                        <Image src={r.image} alt="" fill sizes="64px" className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-semibold uppercase tracking-wide text-teal-600">
                          {r.tag}
                        </span>
                        <p className="mt-0.5 line-clamp-2 text-xs font-semibold leading-snug text-navy-900 transition-colors group-hover:text-teal-700">
                          {r.title}
                        </p>
                        <p className="mt-1 text-[10px] text-slate-400">{r.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}
