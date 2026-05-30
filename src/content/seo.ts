import type { Metadata } from "next";
import { site } from "./site";

// Helper to build per-page metadata consistently (docs §20: title 50-60 chars, desc 150-160).
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const url = `${site.url}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${opts.title} | ${site.name}`,
      description: opts.description,
      url,
      images: [opts.ogImage ?? site.ogImage],
      type: "website",
    },
  };
}

// Organization schema — rendered on every page via root layout (docs §20)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/assets/logo.png`,
  description: site.description,
  sameAs: [site.socials.linkedin, site.socials.twitter, site.socials.github],
  areaServed: "West Africa",
};

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function productSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    brand: { "@type": "Brand", name: site.name },
  };
}

export function softwareAppSchema(opts: { name: string; description: string; version?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    description: opts.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web, JVM, Node.js",
    softwareVersion: opts.version,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}
