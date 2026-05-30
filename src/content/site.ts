// Global site constants — sourced from Website Content Guide §1.1
export const site = {
  name: "OPIX",
  tagline: "Africa's Unified Digital Identity & Trust Platform",
  // SITE_TITLE_TEMPLATE
  titleTemplate: "%s | OPIX — Africa's Unified Digital Identity & Trust Platform",
  description:
    "OPIX is Africa's unified digital identity and open-access trust platform. Verify anyone in seconds with biometric KYC, background checks, and escrow-backed payments. Built for banks, fintechs, employers, and freelancers across the continent.",
  keywords: [
    "digital identity Africa",
    "KYC platform",
    "biometric verification",
    "background check",
    "freelancer trust",
    "escrow payments",
    "financial inclusion",
    "open banking Africa",
    "identity verification",
    "credit scoring",
    "AML compliance",
    "CFT",
    "Gambia",
    "West Africa",
  ],
  url: "https://opix.africa",
  ogImage: "/assets/og-image-opix.png",
  email: "careers@opix.africa",
  socials: {
    linkedin: "https://linkedin.com/company/opix",
    twitter: "https://twitter.com/opix",
    github: "https://github.com/opix",
    discord: "https://discord.gg/opix",
  },
  ctas: {
    getStarted: { label: "Get Started", href: "/signup" },
    login: { label: "Log In", href: "/login" },
  },
} as const;

// Reusable trust signals (Hero trust badges §3)
export const trustBadges = [
  "Bank-grade encryption (AES-256)",
  "Central Bank compliant",
  "ISO 27001 ready",
  "GDPR-aligned privacy",
];
