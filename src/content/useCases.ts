// Use-case content — Website Content Guide §7 (cards) & §16 (detail pages)
export type UseCase = {
  slug: string;
  name: string;
  icon: string;
  cardBody: string;
  stat: string;
  hero: { headline: string; subheadline: string };
  meta: { title: string; description: string };
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  caseStudyTeaser?: { text: string; cta: { label: string; href: string } };
  placeholder?: boolean;
};

export const useCases: UseCase[] = [
  {
    slug: "banking",
    name: "Banks & Insurers",
    icon: "bank",
    cardBody:
      "Cut customer onboarding from hours to minutes. Reduce KYC costs by 60-80%. Spot fraud before it happens. Build richer credit profiles from aggregated financial data.",
    stat: "60-80% reduction in onboarding cost per customer",
    hero: {
      headline: "Onboard customers in minutes. Not hours.",
      subheadline:
        "OPIX helps banks and insurers cut KYC costs, reduce fraud, and speed up account opening with biometric-first identity verification.",
    },
    meta: {
      title: "Digital KYC for Banks & Insurers",
      description:
        "Reduce onboarding costs by 60-80% with biometric KYC. Strengthen AML compliance. Build richer credit profiles. OPIX helps African banks and insurers verify faster and safer.",
    },
    challenges: [
      "Repetitive KYC across institutions",
      "Slow onboarding causing customer drop-off",
      "Identity fraud and duplicate accounts",
      "Weak credit visibility for thin-file customers",
      "Expensive manual compliance processes",
    ],
    solutions: [
      "Biometric verification in <30 seconds",
      "Reusable KYC profiles across all participating institutions",
      "Real-time fraud detection via duplicate biometric matching",
      "Aggregated financial data for credit scoring",
      "Automated audit trails for regulatory reporting",
    ],
    outcomes: [
      "60-80% reduction in onboarding cost per customer",
      "85% faster account opening for returning customers",
      "40% reduction in identity fraud attempts",
      "3x more thin-file customers eligible for credit",
    ],
    caseStudyTeaser: {
      text: "See how a major Gambian bank reduced onboarding time by 75% and cut KYC costs by $420,000 annually using OPIX.",
      cta: { label: "Read Case Study", href: "/coverage" },
    },
  },
  {
    slug: "fintech",
    name: "Fintechs & MNOs",
    icon: "mobile",
    cardBody:
      "Launch faster with standardized identity APIs. Comply without building compliance from scratch. Access credit intelligence to serve underserved markets responsibly.",
    stat: "Go live in weeks, not months",
    hero: {
      headline: "Build fast. Comply easy. Scale smart.",
      subheadline:
        "OPIX gives fintechs and mobile money operators the identity infrastructure they need to launch quickly, comply confidently, and serve customers traditional banking ignores.",
    },
    meta: {
      title: "Identity & Compliance for Fintechs & MNOs",
      description:
        "Launch faster with standardized KYC APIs. Comply without building compliance from scratch. Access credit intelligence to serve underserved markets. OPIX powers African fintech growth.",
    },
    challenges: [
      "Building KYC from scratch delays product launch",
      "Regulatory compliance is expensive and complex",
      "Serving unbanked customers without credit history",
      "Fraud prevention with limited resources",
      "Cross-border identity verification",
    ],
    solutions: [
      "Drop-in KYC API with biometric verification",
      "Pre-built compliance framework (AML/CFT ready)",
      "Credit intelligence from aggregated transaction data",
      "Real-time fraud pattern detection",
      "Standardized identity across borders",
    ],
    outcomes: [
      "Go from idea to live product in weeks, not months",
      "Reduce compliance build cost by 70%",
      "Serve 2x more customers with alternative credit scoring",
      "Cut fraud losses by 50%",
    ],
  },
  {
    slug: "hr",
    name: "Employers & HR",
    icon: "check-people",
    cardBody:
      "Verify candidates before you hire. Confirm addresses, credentials, and employment history in real time. Reduce ghost worker fraud and onboarding risk.",
    stat: "Background checks reduced from days to minutes",
    hero: {
      headline: "Know who you're hiring. Before you hire them.",
      subheadline:
        "OPIX Background Verification replaces slow, expensive background checks with real-time, consent-based candidate verification.",
    },
    meta: {
      title: "Fast Background Verification for Employers",
      description:
        "Verify candidate identity, credentials, and employment history in minutes. Reduce hiring fraud and ghost worker risk with OPIX Background Verification.",
    },
    challenges: [
      "Background checks take 3-14 days",
      "Credential and employment fraud",
      "Ghost workers on payroll",
      "Compliance with labor and data protection laws",
      "High cost per verification",
    ],
    solutions: [
      "Real-time verification via candidate consent",
      "Verified identity, address, and employment history",
      "Credential verification integrations",
      "Immutable audit trails for labor compliance",
      "HR platform and ATS integrations",
    ],
    outcomes: [
      "Background checks reduced from days to minutes",
      "90% reduction in ghost worker incidents",
      "50% lower cost per background check",
      "100% compliance audit trail coverage",
    ],
  },
  {
    slug: "freelancers",
    name: "Freelancers & Clients",
    icon: "laptop",
    cardBody:
      "Build a verified reputation that travels. Send trusted invoices. Lock funds in escrow. Resolve disputes fairly. Get paid what you're owed, when you're owed it.",
    stat: "Verified freelancers win 3x more projects",
    hero: {
      headline: "Your skills deserve trust. Your work deserves payment.",
      subheadline:
        "Join Africa's verified freelancer network. Build a trust score that wins clients, send secure invoices, and never worry about unpaid work again.",
    },
    meta: {
      title: "Verified Freelancer Identity & Secure Payments",
      description:
        "Build a verified digital reputation. Send trusted invoices. Lock funds in escrow. OPIX helps African freelancers get paid what they're worth.",
    },
    challenges: [
      "Clients can't verify freelancer identity or skills",
      "Payment disputes and unpaid invoices",
      "No credit history from freelance work",
      "Cross-border payment friction",
      "Lack of dispute resolution mechanism",
    ],
    solutions: [
      "Verified OPIX profile with trust badge",
      "Digitally signed, verifiable invoices",
      "Escrow-backed project payments",
      "Transaction history builds credit score",
      "Fair dispute resolution with evidence review",
    ],
    outcomes: [
      "Verified freelancers win 3x more projects",
      "95% reduction in payment disputes with escrow",
      "Freelance income contributes to credit eligibility",
      "Cross-border payments settled in 24 hours",
    ],
  },
  {
    slug: "government",
    name: "Government & Regulators",
    icon: "scale",
    cardBody:
      "Strengthen AML/CFT oversight with supervisory access, immutable audit trails, and a neutral, consent-first identity layer for the national digital economy.",
    stat: "Supervisory access built in",
    hero: {
      headline: "Strengthen oversight. Protect citizens.",
      subheadline:
        "OPIX gives regulators supervisory visibility, WORM audit trails, and a neutral trust layer that raises the floor on AML/CFT compliance across the market.",
    },
    meta: {
      title: "Identity & AML/CFT Oversight for Government & Regulators",
      description:
        "Strengthen AML/CFT oversight with supervisory access, immutable audit logs, and a neutral, consent-first national identity layer. OPIX for governments and regulators.",
    },
    // PLACEHOLDER: nav lists Government & Regulators but source docs have no
    // dedicated detail page; sections below are concise, on-brand placeholders.
    challenges: [
      "Fragmented identity systems across institutions",
      "Limited visibility into AML/CFT compliance",
      "Manual, slow supervisory reporting",
      "Difficulty extending trusted services to citizens",
    ],
    solutions: [
      "Central Bank supervisory access built in",
      "Full WORM audit logs for every verification",
      "Automated regulatory reporting",
      "Neutral governance — no single institution controls data",
    ],
    outcomes: [
      "Stronger, market-wide AML/CFT posture",
      "Faster, automated compliance oversight",
      "Greater financial inclusion for citizens",
    ],
    placeholder: true,
  },
];

export const useCasesIndex = {
  label: "Who We Serve",
  headline: "Built for the institutions that power Africa's economy.",
  intro:
    "One trust layer, many beneficiaries — from central banks and commercial lenders to the freelancers building Africa's digital economy.",
};

export function getUseCase(slug: string) {
  return useCases.find((u) => u.slug === slug);
}
