// Global navigation — Website Content Guide §2
export type NavLink = { label: string; href: string; description?: string; icon?: string };
export type NavGroup = { heading: string; links: NavLink[] };
// `blurb` powers the contextual left column of the mega-menu panel.
export type MegaItem = {
  label: string;
  href?: string;
  blurb?: { heading: string; description: string; cta?: NavLink };
  groups?: NavGroup[];
};

export const primaryNav: MegaItem[] = [
  {
    label: "Products",
    blurb: {
      heading: "Explore the OPIX platform",
      description: "Biometric identity, consent, and trust products that work together across every customer journey.",
      cta: { label: "See all products", href: "/products" },
    },
    groups: [
      {
        heading: "Identity Verification",
        links: [
          { label: "KYC Connect", href: "/products/kyc-connect", description: "Real-time biometric identity verification", icon: "fingerprint" },
          { label: "Background Check", href: "/products/background-verification", description: "Verify employment, credentials, and history", icon: "clipboard" },
          { label: "Trust Score", href: "/products/freelancer-trust", description: "Build and verify digital reputation", icon: "star" },
        ],
      },
      {
        heading: "Financial Trust",
        links: [
          { label: "Escrow Payments", href: "/products/escrow", description: "Secure fund-locking for projects", icon: "lock" },
          { label: "Invoice Verify", href: "/products/invoice-verify", description: "Digitally signed, verified invoices", icon: "check" },
          { label: "Credit Intelligence", href: "/products/credit-intelligence", description: "Aggregated financial health scoring", icon: "chart" },
        ],
      },
      {
        heading: "Platform Tools",
        links: [
          { label: "API Suite", href: "/developers", description: "RESTful APIs for seamless integration", icon: "code" },
          { label: "Mobile SDK", href: "/developers/docs", description: "iOS & Android native SDKs", icon: "mobile" },
          { label: "Dashboard", href: "/signup", description: "Real-time analytics and compliance", icon: "chart" },
        ],
      },
    ],
  },
  {
    label: "Use Cases",
    blurb: {
      heading: "Built for the institutions that power Africa's economy",
      description: "One trust layer, many beneficiaries — from central banks to the freelancers building the digital economy.",
      cta: { label: "See who we serve", href: "/use-cases" },
    },
    groups: [
      {
        heading: "Who we serve",
        links: [
          { label: "Banks & Insurers", href: "/use-cases/banking", description: "Cut onboarding time by 80%", icon: "bank" },
          { label: "Fintechs & MNOs", href: "/use-cases/fintech", description: "Scale compliance without scaling costs", icon: "mobile" },
          { label: "Employers & HR", href: "/use-cases/hr", description: "Hire with confidence, verify in minutes", icon: "check-people" },
          { label: "Freelancers", href: "/use-cases/freelancers", description: "Get paid faster, build trust that travels", icon: "laptop" },
          { label: "Government & Regulators", href: "/use-cases/government", description: "Strengthen AML/CFT oversight", icon: "scale" },
        ],
      },
    ],
  },
  {
    label: "Developers",
    blurb: {
      heading: "Built with Java. Powered by Next.js.",
      description: "Clean REST APIs, drop-in SDKs, and a sandbox that mirrors production. Integrate in minutes.",
      cta: { label: "Developer hub", href: "/developers" },
    },
    groups: [
      {
        heading: "Build",
        links: [
          { label: "Documentation", href: "/developers/docs", description: "Get started in under 10 minutes", icon: "book" },
          { label: "API Reference", href: "/developers/api-reference", description: "Interactive, searchable endpoints", icon: "code" },
          { label: "SDKs & Libraries", href: "/developers#sdks", description: "Java, Next.js, React, and more", icon: "network" },
          { label: "Sandbox", href: "/developers/sandbox", description: "Test everything, break nothing", icon: "play" },
        ],
      },
      {
        heading: "Operate",
        links: [
          { label: "Changelog", href: "/developers/changelog", description: "What's new and what's next", icon: "refresh" },
          { label: "Status", href: "/developers/status", description: "Real-time platform health", icon: "check" },
          { label: "Support", href: "/developers/support", description: "Talk to our engineering team", icon: "support" },
        ],
      },
    ],
  },
  {
    label: "Company",
    blurb: {
      heading: "Trust is the missing layer of Africa's digital economy",
      description: "We're building it — under Central Bank oversight, with neutral governance.",
      cta: { label: "About OPIX", href: "/about" },
    },
    groups: [
      {
        heading: "About OPIX",
        links: [
          { label: "About Us", href: "/about", description: "Why we built OPIX" },
          { label: "Coverage", href: "/coverage", description: "Where we operate" },
          { label: "Careers", href: "/careers", description: "Join the team" },
          { label: "Blog", href: "/blog", description: "Insights on identity & trust" },
          { label: "Contact", href: "/contact", description: "Talk to us" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

// Footer link groups, newsletter copy, and legal text now live in src/content/footer.ts.
