// Route-aware banner copy. Keyed by path prefix; longest match wins.
// Edit copy here — PageBanner renders it below the navbar on every page.
export type Banner = {
  badge: string;
  text: string;
  cta: { label: string; href: string };
};

export const defaultBanner: Banner = {
  badge: "NEW",
  text: "Africa's unified digital identity and trust infrastructure is here.",
  cta: { label: "Explore the platform", href: "/products" },
};

// Keys are path prefixes. More specific (longer) prefixes take priority.
export const bannersByPath: Record<string, Banner> = {
  "/products": {
    badge: "PRODUCTS",
    text: "Verify identities, manage consent, and build trust across every customer journey.",
    cta: { label: "View products", href: "/products" },
  },
  "/use-cases": {
    badge: "USE CASES",
    text: "One trust layer for banks, fintechs, employers, freelancers, and regulators.",
    cta: { label: "See who we serve", href: "/use-cases" },
  },
  "/developers": {
    badge: "DEVELOPERS",
    text: "Build with OPIX APIs, SDKs, sandbox tools, and integration guides.",
    cta: { label: "Read the docs", href: "/developers/docs" },
  },
  "/developers/docs": {
    badge: "DEVELOPERS",
    text: "Build with OPIX APIs, SDKs, sandbox tools, and integration guides.",
    cta: { label: "Read the docs", href: "/developers/docs" },
  },
  "/developers/api-reference": {
    badge: "API",
    text: "Explore identity, consent, escrow, and financial trust endpoints.",
    cta: { label: "Browse endpoints", href: "/developers/api-reference" },
  },
  "/developers/sandbox": {
    badge: "SANDBOX",
    text: "Test every endpoint with mock data and simulated biometrics — zero risk.",
    cta: { label: "Launch the sandbox", href: "/developers/sandbox" },
  },
  "/developers/status": {
    badge: "STATUS",
    text: "Real-time platform health across KYC, escrow, consent, and webhooks.",
    cta: { label: "View status", href: "/developers/status" },
  },
  "/careers": {
    badge: "CAREERS",
    text: "Help build Africa's digital trust infrastructure.",
    cta: { label: "View open roles", href: "/careers#open-roles" },
  },
  "/pricing": {
    badge: "PRICING",
    text: "Flexible plans for startups, fintechs, banks, and enterprise teams.",
    cta: { label: "See plans", href: "/pricing" },
  },
  "/about": {
    badge: "COMPANY",
    text: "Trust is the missing layer of Africa's digital economy. We're building it.",
    cta: { label: "About OPIX", href: "/about" },
  },
  "/coverage": {
    badge: "COVERAGE",
    text: "Live in The Gambia, expanding across West Africa.",
    cta: { label: "See the roadmap", href: "/coverage" },
  },
  "/contact": {
    badge: "CONTACT",
    text: "Talk to our team about identity, compliance, and trust infrastructure.",
    cta: { label: "Get in touch", href: "/contact" },
  },
};

// Resolve the banner for a given pathname (longest matching prefix).
export function resolveBanner(pathname: string): Banner {
  if (pathname === "/") return defaultBanner;
  const match = Object.keys(bannersByPath)
    .filter((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`) || pathname.startsWith(prefix))
    .sort((a, b) => b.length - a.length)[0];
  return match ? bannersByPath[match] : defaultBanner;
}
