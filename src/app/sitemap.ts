import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { products } from "@/content/products";
import { useCases } from "@/content/useCases";
import { roles } from "@/content/careers";

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
    "/docs",
    "/docs/java",
    "/docs/nextjs",
    "/api-reference",
    "/sandbox",
    "/developers/changelog",
    "/status",
    "/careers",
  ];

  const dynamic = [
    ...products.map((p) => `/products/${p.slug}`),
    ...useCases.map((u) => `/use-cases/${u.slug}`),
    ...roles.map((r) => `/careers/${r.slug}`),
  ];

  return [...staticPaths, ...dynamic].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
