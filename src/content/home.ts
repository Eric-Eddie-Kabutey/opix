// Homepage content — Website Content Guide §3–§13
export const homeHero = {
  eyebrow: "Africa's digital trust infrastructure",
  headline: "Verify Anyone. Trust Everyone. Build Anything.",
  subheadline:
    "OPIX is Africa's unified digital identity and trust platform. We help banks, employers, and businesses verify people in seconds — not days — with biometric KYC, background checks, and escrow-backed payments. One profile. One trust. One continent.",
  primary: { label: "Start Building", href: "/signup" },
  secondary: { label: "See How It Works", href: "/demo" },
  stats: [
    { value: "< 30s", label: "Average identity verification time" },
    { value: "60–80%", label: "Reduction in onboarding costs" },
    { value: "100%", label: "Consent-first data sharing" },
  ],
};

export const problem = {
  label: "The Problem",
  headline: "Identity in Africa shouldn't be this hard.",
  cards: [
    {
      title: "The Same Papers, Over and Over",
      body: "Every bank, insurer, and employer asks for the same documents. Customers fill out the same forms. Staff check the same IDs. It's expensive, frustrating, and wastes everyone's time.",
      stat: "The average African customer submits KYC documents 4.7 times to different institutions.",
    },
    {
      title: "Trust Without Proof",
      body: "Freelancers lose gigs because clients can't verify their skills. Employers hire blind because background checks take weeks. Small businesses get burned because there's no way to lock funds safely.",
      stat: "68% of African freelancers report losing work due to lack of verifiable identity or trust signals.",
    },
    {
      title: "Fraud Hides in the Gaps",
      body: "Without a shared, verified identity layer, fraudsters slip through. Duplicate accounts. Fake IDs. Ghost borrowers. The cost of weak KYC ultimately falls on honest customers and institutions.",
      stat: "Financial identity fraud costs African banks an estimated $2.1B annually in direct and indirect losses.",
    },
  ],
  transition: "There's a better way. And it's already here.",
};

export const solution = {
  label: "The Solution",
  headline: "One verified identity. Unlimited possibilities.",
  intro:
    "OPIX replaces fragmented, repetitive identity checks with a single, biometrically-verified digital profile. Once a person is verified on OPIX, any authorized institution can verify them instantly — with their explicit consent, every single time.",
  features: [
    {
      icon: "fingerprint",
      title: "Biometric-First Verification",
      body: "Face, fingerprint, and digital signature matching. No more document photocopies. Liveness detection stops spoofing. Tokenized storage protects raw biometrics.",
    },
    {
      icon: "shield",
      title: "Consent You Can See",
      body: "Every data request is scoped, time-limited, and logged. Users see exactly who accessed what, when, and why. Revoke consent anytime. Full WORM audit trails for regulators.",
    },
    {
      icon: "network",
      title: "Financial Data That Works",
      body: "Link bank accounts, mobile money wallets, and insurance policies. Build real credit scores from real transaction history. Help lenders say 'yes' to people traditional scoring ignores.",
    },
    {
      icon: "globe",
      title: "Built for Africa, Governed Neutrally",
      body: "Operated under Central Bank license or independent consortium governance. No single bank owns the data. Trust is the product, not the byproduct.",
    },
  ],
  cta: { label: "Explore Our Platform", href: "/products" },
};

export const howItWorks = {
  label: "How It Works",
  headline: "Three steps to a verified, trusted Africa.",
  steps: [
    {
      number: "01",
      title: "Verify Once",
      body: "A customer or freelancer visits any participating bank, employer, or OPIX enrollment center. Their biometric data is captured, verified against documents, and tokenized. A secure OPIX profile is created — one time, forever reusable.",
    },
    {
      number: "02",
      title: "Share With Consent",
      body: "Anytime an institution needs to verify that person, they search OPIX using a biometric token or TIN. The person receives a real-time notification and approves exactly what data to share, for how long, and for what purpose.",
    },
    {
      number: "03",
      title: "Trust Everywhere",
      body: "Verified identity unlocks banking, employment, freelancing, lending, and insurance — all from one profile. The person's trust score grows with every verified transaction. Institutions make better decisions. People get better access.",
    },
  ],
  cta: { label: "Watch a 2-Minute Demo", href: "/demo" },
};

export const securitySection = {
  label: "Trust & Security",
  headline: "Your data is yours. We just keep it safe.",
  intro:
    "OPIX was built with security and privacy as foundational principles, not afterthoughts. Every design decision prioritizes user control, institutional trust, and regulatory compliance.",
  pillars: [
    {
      icon: "lock",
      title: "Bank-Grade Encryption",
      body: "AES-256 encryption at rest. TLS 1.3 in transit. HSM-backed key management for signing all KYC records. Biometric templates are tokenized — raw images never leave secure storage.",
    },
    {
      icon: "eye-off",
      title: "Privacy by Design",
      body: "Consent is required for every single data retrieval. Users see complete access logs. They can revoke consent anytime. Data residency partitions comply with national laws.",
    },
    {
      icon: "scale",
      title: "Regulatory Compliance",
      body: "Full WORM (Write Once Read Many) audit logs for AML/CFT oversight. KYC liability clearly defined between issuers, verifiers, and platform operator. Central Bank supervisory access built in.",
    },
    {
      icon: "users",
      title: "Neutral Governance",
      body: "Independent steering committee with Central Bank, bank, fintech, MNO, and consumer representatives. Transparent operating rules. Third-party security audits. No single institution controls the platform.",
    },
  ],
  badges: ["ISO 27001 Certified", "Central Bank Licensed", "GDPR Aligned", "SOC 2 Type II Ready"],
};

export const testimonials = {
  label: "Trusted Across Africa",
  headline: "The people building with OPIX.",
  items: [
    {
      quote:
        "OPIX reduced our customer onboarding time from 45 minutes to under 5 minutes. Our compliance team loves the audit trails. Our customers love not having to bring the same documents twice.",
      name: "Amadou Jallow",
      title: "Head of Digital Banking",
      company: "Major Gambian Commercial Bank",
    },
    {
      quote:
        "As a freelance developer, my OPIX verified profile is my best marketing tool. Clients don't hesitate anymore — they see my trust score, verify my identity, and we start working immediately.",
      name: "Fatou Sarr",
      title: "Full-Stack Developer",
      company: "Independent Contractor, Banjul",
    },
    {
      quote:
        "Background checks that used to take our HR team a week now happen in real time. We've eliminated ghost worker fraud entirely since integrating OPIX.",
      name: "Omar Ceesay",
      title: "HR Director",
      company: "Regional Microfinance Institution",
    },
  ],
};

export const developerTeaser = {
  label: "For Developers",
  headline: "Integrate in minutes. Scale for millions.",
  intro:
    "Clean REST APIs. Comprehensive SDKs. Interactive documentation. Sandbox environments. OPIX is built by developers, for developers.",
  primary: { label: "Read the Docs", href: "/developers" },
  secondary: { label: "View API Reference", href: "/api-reference" },
};

export const finalCta = {
  headline: "Ready to build trust at scale?",
  subheadline:
    "Join the institutions and freelancers already using OPIX to verify, transact, and grow across Africa.",
  primary: { label: "Start for Free", href: "/signup" },
  secondary: { label: "Schedule a Demo", href: "/demo" },
};
