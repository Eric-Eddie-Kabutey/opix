// Route-aware footer CTA. The footer is the ONLY place the final CTA appears now.
// Keyed by path prefix; longest match wins. Most routes use two buttons; blog uses
// the newsletter email field.
export type FooterCtaContent = {
  heading: string;
  text: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  newsletter?: boolean; // show email input instead of buttons
};

export const defaultFooterCta: FooterCtaContent = {
  heading: "Stay ahead of digital trust.",
  text: "Get product updates, developer resources, and insights on identity infrastructure across Africa.",
  primary: { label: "Get Started", href: "/signup" },
  secondary: { label: "Contact Us", href: "/contact" },
};

// Newsletter copy reused by the blog (the only route that keeps the email field).
const newsletterCta: FooterCtaContent = {
  heading: "Stay ahead of digital trust.",
  text: "Get product updates, developer resources, and insights on identity infrastructure across Africa.",
  newsletter: true,
};

export const footerCtaByPath: Record<string, FooterCtaContent> = {
  "/": {
    heading: "Ready to build trust at scale?",
    text: "Join the institutions and builders using OPIX to verify, transact, and grow across Africa.",
    primary: { label: "Start for Free", href: "/signup" },
    secondary: { label: "Schedule a Demo", href: "/demo" },
  },
  "/developers": {
    heading: "Build with OPIX.",
    text: "Explore APIs, SDKs, sandbox tools, and integration guides built for modern fintech teams.",
    primary: { label: "Read the Docs", href: "/developers/docs" },
    secondary: { label: "Try the Sandbox", href: "/developers/sandbox" },
  },
  "/developers/docs": {
    heading: "Build with OPIX.",
    text: "Explore APIs, SDKs, sandbox tools, and integration guides built for modern fintech teams.",
    primary: { label: "Read the Docs", href: "/developers/docs" },
    secondary: { label: "Try the Sandbox", href: "/developers/sandbox" },
  },
  "/developers/api-reference": {
    heading: "Start integrating trusted identity.",
    text: "Browse OPIX endpoints for identity, consent, escrow, verification, and financial trust.",
    primary: { label: "View API Reference", href: "/developers/api-reference" },
    secondary: { label: "Open Sandbox", href: "/developers/sandbox" },
  },
  "/developers/sandbox": {
    heading: "Test everything. Break nothing.",
    text: "Mock biometrics, simulated consent, and pre-built scenarios — zero risk, instant access.",
    primary: { label: "Launch Sandbox", href: "/signup" },
    secondary: { label: "Read the Docs", href: "/developers/docs" },
  },
  "/careers": {
    heading: "Help build Africa's trust infrastructure.",
    text: "Join the team creating identity, verification, and trust tools for the next generation of African businesses.",
    primary: { label: "View Open Roles", href: "/careers#open-roles" },
    secondary: { label: "Life at OPIX", href: "/careers#culture" },
  },
  "/pricing": {
    heading: "Find the right plan for your team.",
    text: "Flexible options for startups, fintechs, banks, and enterprise institutions.",
    primary: { label: "View Pricing", href: "/pricing" },
    secondary: { label: "Talk to Sales", href: "/contact" },
  },
  "/products": {
    heading: "One verified identity. Unlimited possibilities.",
    text: "Verify, manage consent, and build trust across every customer journey with the OPIX product suite.",
    primary: { label: "Explore Products", href: "/products" },
    secondary: { label: "Talk to Sales", href: "/contact" },
  },
  "/use-cases": {
    heading: "Built for the institutions that power Africa.",
    text: "From central banks to freelancers — one trust layer for every part of the digital economy.",
    primary: { label: "Talk to Sales", href: "/contact" },
    secondary: { label: "Schedule a Demo", href: "/demo" },
  },
  "/blog": newsletterCta,
};

export function resolveFooterCta(pathname: string): FooterCtaContent {
  if (pathname === "/") return footerCtaByPath["/"];
  const match = Object.keys(footerCtaByPath)
    .filter((prefix) => prefix !== "/" && (pathname === prefix || pathname.startsWith(`${prefix}/`) || pathname.startsWith(prefix)))
    .sort((a, b) => b.length - a.length)[0];
  return match ? footerCtaByPath[match] : defaultFooterCta;
}
