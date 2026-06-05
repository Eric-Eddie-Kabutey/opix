import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { products } from "@/content/products";
import { useCases } from "@/content/useCases";
import { roles } from "@/content/careers";
import { ALL_ARTICLES_WITH_FEATURED } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/products",
    "/use-cases",
    "/about",
    "/coverage",
    "/pricing",
    "/contact",
    "/demo",
    "/blog",
    "/developers",
    "/developers/docs",
    "/developers/docs/java",
    "/developers/docs/nextjs",
    "/developers/api-reference",
    "/developers/sandbox",
    "/developers/changelog",
    "/developers/status",
    "/developers/support",
    "/careers",
  ];

  const dynamic = [
    ...products.map((p) => `/products/${p.slug}`),
    ...useCases.map((u) => `/use-cases/${u.slug}`),
    ...roles.map((r) => `/careers/${r.slug}`),
    ...ALL_ARTICLES_WITH_FEATURED.map((a) => `/blog/${a.slug}`),
  ];

  return [...staticPaths, ...dynamic].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
