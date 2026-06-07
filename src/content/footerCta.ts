// Route-aware footer CTA. The footer is the ONLY place the final CTA appears now.
// Keyed by path prefix; longest match wins. Most routes use two buttons; blog uses
// the newsletter email field. Each route can set its own background `image`.
import type { StaticImageData } from "next/image";

// Background images live in src/public/images and must be statically imported (so
// webpack resolves + optimizes them — a /public URL won't work from src/public).
//
// TO ACTIVATE A PER-ROUTE IMAGE:
//   1. Download the image and save it under src/public/images/ with the filename below.
//   2. Uncomment its `import` line here.
//   3. Uncomment the matching `image:` line in footerCtaByPath below.
// (Imports of files that don't exist yet would break the build, so they start commented.)
import footerBgDefault from "../public/images/footer/footer-bg.jpg";
// import footerBgHome from "../public/images/footer-home.jpg";
// import footerBgDevelopers from "../public/images/footer-developers.jpg";
// import footerBgProducts from "../public/images/footer-products.jpg";
// import footerBgUseCases from "../public/images/footer-use-cases.jpg";
// import footerBgPricing from "../public/images/footer-pricing.jpg";
// import footerBgCareers from "../public/images/footer-careers.jpg";
// import footerBgBlog from "../public/images/footer-blog.jpg";

export const defaultFooterImage = footerBgDefault;

export type FooterCtaContent = {
  heading: string;
  text: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  newsletter?: boolean; // show email input instead of buttons
  image?: StaticImageData; // background image; falls back to defaultFooterImage
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
    // image: footerBgHome,  // file: src/public/images/footer-home.jpg
  },
  "/developers": {
    heading: "Build with OPIX.",
    text: "Explore APIs, SDKs, sandbox tools, and integration guides built for modern fintech teams.",
    primary: { label: "Read the Docs", href: "/developers/docs" },
    secondary: { label: "Try the Sandbox", href: "/developers/sandbox" },
    // image: footerBgDevelopers,  // file: src/public/images/footer-developers.jpg
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
    // image: footerBgCareers,  // file: src/public/images/footer-careers.jpg
  },
  "/pricing": {
    heading: "Find the right plan for your team.",
    text: "Flexible options for startups, fintechs, banks, and enterprise institutions.",
    primary: { label: "View Pricing", href: "/pricing" },
    secondary: { label: "Talk to Sales", href: "/contact" },
    // image: footerBgPricing,  // file: src/public/images/footer-pricing.jpg
  },
  "/products": {
    heading: "One verified identity. Unlimited possibilities.",
    text: "Verify, manage consent, and build trust across every customer journey with the OPIX product suite.",
    primary: { label: "Explore Products", href: "/products" },
    secondary: { label: "Talk to Sales", href: "/contact" },
    // image: footerBgProducts,  // file: src/public/images/footer-products.jpg
  },
  "/use-cases": {
    heading: "Built for the institutions that power Africa.",
    text: "From central banks to freelancers — one trust layer for every part of the digital economy.",
    primary: { label: "Talk to Sales", href: "/contact" },
    secondary: { label: "Schedule a Demo", href: "/demo" },
    // image: footerBgUseCases,  // file: src/public/images/footer-use-cases.jpg
  },
  // Blog keeps the newsletter field; to give it a distinct background, replace
  // `newsletterCta` here with `{ ...newsletterCta, image: footerBgBlog }`.
  "/blog": newsletterCta,
};

export function resolveFooterCta(pathname: string): Required<Pick<FooterCtaContent, "image">> & FooterCtaContent {
  const base =
    pathname === "/"
      ? footerCtaByPath["/"]
      : (() => {
          const match = Object.keys(footerCtaByPath)
            .filter(
              (prefix) =>
                prefix !== "/" &&
                (pathname === prefix || pathname.startsWith(`${prefix}/`) || pathname.startsWith(prefix)),
            )
            .sort((a, b) => b.length - a.length)[0];
          return match ? footerCtaByPath[match] : defaultFooterCta;
        })();

  // Guarantee an image: per-route override, else the shared default.
  return { ...base, image: base.image ?? defaultFooterImage };
}
