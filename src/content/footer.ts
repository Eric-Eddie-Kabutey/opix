// Footer content — data-driven. Edit links, copy, and legal text here.
import type { NavGroup } from "./navigation";

export const newsletter = {
  heading: "Stay ahead of digital trust.",
  subheading:
    "Get product updates, developer resources, and insights on identity infrastructure across Africa.",
  placeholder: "Enter your email",
  button: "Subscribe",
};

export const footerIntro =
  "Built for the institutions, developers, and businesses creating Africa's trusted digital future.";

export const footerColumns: NavGroup[] = [
  {
    heading: "Products",
    links: [
      { label: "KYC Connect", href: "/products/kyc-connect" },
      { label: "Background Verification", href: "/products/background-verification" },
      { label: "Freelancer Trust Network", href: "/products/freelancer-trust" },
      { label: "Escrow & Fund Lock", href: "/products/escrow" },
      { label: "Credit Intelligence", href: "/products/credit-intelligence" },
      { label: "API Suite", href: "/developers" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Use Cases",
    links: [
      { label: "Banks & Insurers", href: "/use-cases/banking" },
      { label: "Fintechs & MNOs", href: "/use-cases/fintech" },
      { label: "Employers & HR", href: "/use-cases/hr" },
      { label: "Freelancers & Clients", href: "/use-cases/freelancers" },
      { label: "Government & Regulators", href: "/use-cases/government" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api-reference" },
      { label: "SDKs & Libraries", href: "/developers#sdks" },
      { label: "Changelog", href: "/developers/changelog" },
      { label: "Sandbox", href: "/sandbox" },
      { label: "Status Page", href: "/status" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Coverage", href: "/coverage" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "Security", href: "/about#security" },
    ],
  },
];

export const footerCompliance =
  "OPIX operates under the oversight of the Central Bank of The Gambia, with neutral, multi-stakeholder governance and independent third-party security audits.";

// PLACEHOLDER: legal disclaimer copy — review with counsel before production use.
export const footerDisclaimer =
  "The information on this website is for general informational purposes only and does not constitute financial, legal, or professional advice. While we use advanced security protocols to protect sensitive identity and financial data, no system can guarantee absolute security. Any reliance you place on this information is strictly at your own risk. OPIX is not liable for any loss or damage arising from use of this website or services. Links to third-party sites are provided for convenience and do not imply endorsement.";

export const footerBottom = {
  copyright: "© 2026 OPIX. All rights reserved.",
  note: "Made with care for Africa",
};
