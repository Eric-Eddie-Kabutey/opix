// Product content — Website Content Guide §6 (showcase) & §15 (detail pages)
export type Product = {
  slug: string;
  name: string;
  category: "Identity Verification" | "Financial Trust";
  tagline: string;
  summary: string; // homepage showcase body
  hero: { headline: string; subheadline: string; cta: { label: string; href: string } };
  meta: { title: string; description: string };
  keyBenefits: string[];
  howItWorks?: { title: string; body: string }[];
  features?: string[];
  useCases?: string[];
  integration?: string;
  security?: string;
  faq?: { q: string; a: string }[];
  placeholder?: boolean;
};

export const products: Product[] = [
  {
    slug: "kyc-connect",
    name: "KYC Connect",
    category: "Identity Verification",
    tagline: "Verify customers in seconds, not days.",
    summary:
      "OPIX KYC Connect replaces manual document checks with biometric verification. A customer scans their face or fingerprint, and their verified profile is retrieved instantly. New customers get enrolled once — then reused across every participating institution.",
    hero: {
      headline: "Verify customers in seconds. Not days.",
      subheadline:
        "OPIX KYC Connect replaces manual document checks with biometric identity verification. Enroll once. Verify everywhere.",
      cta: { label: "Get API Access", href: "/signup" },
    },
    meta: {
      title: "KYC Connect | Real-Time Biometric Identity Verification",
      description:
        "Verify customers in under 30 seconds with OPIX KYC Connect. Biometric-first identity verification for banks, fintechs, and insurers. One enrollment, reusable across all institutions.",
    },
    keyBenefits: [
      "80% faster onboarding for returning customers",
      "Eliminates duplicate KYC across banks",
      "HSM-signed, tamper-proof identity records",
      "ISO 20022-ready API payloads",
    ],
    howItWorks: [
      { title: "Capture", body: "Bank captures face, fingerprint, or digital signature plus supporting documents." },
      { title: "Verify", body: "OPIX validates documents, runs liveness checks, and tokenizes the biometric template." },
      { title: "Issue", body: "The platform issues a signed KYC record with a unique profileId." },
      { title: "Reuse", body: "Any authorized institution verifies the same customer with a biometric scan + consent." },
    ],
    features: [
      "1:N and 1:1 biometric matching",
      "Liveness detection prevents spoofing",
      "Document verification (automated + manual fallback)",
      "KYC level assignment (L1/L2/L3 configurable)",
      "Revocation and status endpoints",
      "ISO 20022-ready API payloads",
      "mTLS + OAuth2/FAPI security",
    ],
    useCases: [
      "New account opening",
      "Cross-bank customer onboarding",
      "Insurance policy issuance",
      "Mobile money wallet verification",
      "Loan application identity check",
    ],
    integration:
      "REST API with 3 core endpoints: POST /kyc/register, POST /kyc/search, GET /kyc/{id}. Average response time: <200ms. Sandbox available for testing.",
    security:
      "AES-256 encryption. HSM-signed records. Tokenized biometrics. WORM audit logs. Role-based access control.",
    faq: [
      { q: "What biometrics are supported?", a: "Face, fingerprint, and digital signature. We recommend multi-modal (face + fingerprint) for highest accuracy." },
      { q: "How accurate is the matching?", a: "Our engine achieves >99.5% accuracy with <0.1% false positive rate when using multi-modal biometrics. Thresholds are tunable per use case." },
      { q: "What happens if biometric data is compromised?", a: "Raw biometric images are never stored. Only tokenized templates exist in encrypted storage. We support key rotation and biometric revocation." },
      { q: "Who is liable for KYC errors?", a: "The issuing institution is responsible for verification claims. OPIX provides immutable logs for forensic review. Legal agreements define liability between all parties." },
    ],
  },
  {
    slug: "background-verification",
    name: "Background Verification",
    category: "Identity Verification",
    tagline: "Hire with confidence. Verify in minutes.",
    summary:
      "Employers and HR agencies use OPIX Background Verification to confirm identity, credentials, employment history, and address — all with the candidate's consent. What used to take days now takes minutes.",
    hero: {
      headline: "Hire with confidence. Verify in minutes.",
      subheadline:
        "Replace slow, expensive background checks with real-time, consent-based verification through OPIX.",
      cta: { label: "Request a Demo", href: "/demo" },
    },
    meta: {
      title: "Background Verification | Fast, Consent-Based Employment Checks",
      description:
        "Verify candidate identity, credentials, and employment history in minutes. OPIX Background Verification helps employers and HR agencies hire with confidence.",
    },
    keyBenefits: [
      "Real-time candidate verification via mobile app",
      "Immutable audit logs for compliance",
      "Reduces hiring fraud and ghost worker risk",
      "Integrates with HR platforms and ATS systems",
    ],
    howItWorks: [
      { title: "Request", body: "Employer submits a verification request via OPIX using the candidate's OPIX ID." },
      { title: "Consent", body: "Candidate receives a real-time notification, reviews the request scope, and approves." },
      { title: "Verify", body: "OPIX returns verified KYC data, employment records, and credentials with time-limited access." },
      { title: "Audit", body: "A full immutable log of the verification is kept for compliance and dispute resolution." },
    ],
    features: [
      "Real-time consent notifications via mobile app",
      "Verified identity, address, and employment history",
      "Credential verification integration",
      "Time-limited, scoped data access",
      "Immutable audit trails",
      "HR platform and ATS integrations",
      "Fraud reporting and dispute resolution",
    ],
    useCases: [
      "Pre-employment screening",
      "Contractor verification",
      "Vendor and supplier due diligence",
      "Tenant verification",
      "Professional license confirmation",
    ],
    security:
      "Consent-gated access. Time-limited tokens. Immutable WORM audit trails for labor and data-protection compliance.",
    faq: [
      { q: "How long does a background check take?", a: "Once the candidate consents, verification is instant for data held on OPIX. External credential checks may take 24-48 hours." },
      { q: "What data can employers access?", a: "Only what the candidate consents to share. Typically: verified name, DOB, address, ID number, employment history, and education credentials. Financial data requires separate, explicit consent." },
    ],
  },
  {
    slug: "freelancer-trust",
    name: "Freelancer Trust Network",
    category: "Identity Verification",
    tagline: "Your verified reputation, your competitive edge.",
    summary:
      "Freelancers and contractors build a verified OPIX profile that clients can trust. Send digitally signed invoices, accept verified payments, and grow a trust score that opens doors to bigger projects.",
    hero: {
      headline: "Your reputation, verified. Your income, secured.",
      subheadline:
        "Join Africa's trusted freelancer network. Verify your identity, send signed invoices, and build a trust score that wins clients.",
      cta: { label: "Create Your Profile", href: "/signup" },
    },
    meta: {
      title: "Freelancer Trust Network | Verified Identity for Freelancers",
      description:
        "Build a verified digital reputation as a freelancer. Send trusted invoices, accept verified payments, and grow your trust score with OPIX.",
    },
    keyBenefits: [
      "Verified identity badge on every invoice",
      "Trust score built from completed projects",
      "Cross-border payment tracking",
      "Dispute resolution backed by audit logs",
    ],
    howItWorks: [
      { title: "Verify", body: "Complete KYC through OPIX. Get your verified OPIX ID and trust badge." },
      { title: "Invoice", body: "Create digitally signed invoices from your dashboard. Clients see your verification status instantly." },
      { title: "Transact", body: "Accept payments via bank transfer, mobile money, or crypto. Every transaction adds to your trust score." },
      { title: "Grow", body: "Higher trust scores unlock premium features, priority support, and client recommendations." },
    ],
    features: [
      "Verified OPIX ID and trust badge",
      "Digitally signed invoice generation",
      "Multi-currency payment support (fiat, stablecoin, crypto)",
      "Automatic transaction tracking and recording",
      "Trust score algorithm based on completion, timeliness, and disputes",
      "Portfolio and project history verification",
      "Cross-border payment tracking",
    ],
    useCases: [
      "Software developers and designers",
      "Writers and content creators",
      "Consultants and advisors",
      "Virtual assistants",
      "Creative professionals",
    ],
    faq: [
      { q: "How is my trust score calculated?", a: "From verified project completions, on-time delivery, payment history, client feedback, and dispute resolution outcomes. The algorithm is transparent and auditable." },
      { q: "Can I use OPIX for international clients?", a: "Yes. Your verified OPIX profile works across borders. We support multiple payment rails including stablecoins for fast, low-cost international transfers." },
    ],
  },
  {
    slug: "escrow",
    name: "Escrow & Fund Lock",
    category: "Financial Trust",
    tagline: "Money moves when work is done.",
    summary:
      "Lock project funds in OPIX escrow before work begins. Funds release only when both parties confirm delivery. If there's a dispute, OPIX reviews evidence and makes a fair call — backed by immutable transaction records.",
    hero: {
      headline: "Money moves when work is done.",
      subheadline:
        "OPIX Escrow holds project funds securely until both parties confirm delivery. No more payment disputes. No more unpaid work.",
      cta: { label: "Learn How It Works", href: "/demo" },
    },
    meta: {
      title: "Escrow & Fund Lock | Secure Project Payments",
      description:
        "Lock project funds in secure escrow before work begins. Funds release only on confirmed delivery. OPIX protects both freelancers and clients with transparent dispute resolution.",
    },
    keyBenefits: [
      "Supports fiat, stablecoin, and crypto payments",
      "Smart contract-like fund locking without blockchain complexity",
      "Transparent dispute arbitration",
      "Protects both client and freelancer",
    ],
    howItWorks: [
      { title: "Agree", body: "Freelancer sends a project quote via OPIX. Client accepts and chooses 'Lock Fund in Escrow'." },
      { title: "Lock", body: "Client transfers payment into OPIX-controlled escrow. Funds are held securely, not released yet." },
      { title: "Deliver", body: "Freelancer completes work and marks 'Delivered' on OPIX." },
      { title: "Confirm", body: "Client reviews and marks 'Accepted'. Funds release instantly to the freelancer." },
      { title: "Dispute", body: "If either party disagrees, OPIX reviews evidence and makes a fair arbitration decision." },
    ],
    features: [
      "Multi-currency support (fiat, stablecoin, crypto)",
      "Smart fund-locking without blockchain complexity",
      "Milestone-based payment releases",
      "Transparent dispute arbitration with evidence review",
      "Immutable transaction and communication logs",
      "Automated payment reminders and status updates",
      "Integration with Freelancer Trust Network profiles",
    ],
    useCases: [
      "Software development projects",
      "Creative and design contracts",
      "Consulting and advisory engagements",
      "Construction and renovation projects",
      "Any project-based work with milestone payments",
    ],
    faq: [
      { q: "What currencies are supported?", a: "Local fiat currencies (via bank transfer and mobile money), stablecoins (USDT, USDC), and major cryptocurrencies. We handle conversion and settlement." },
      { q: "How long does dispute resolution take?", a: "Standard disputes are resolved within 5 business days. Complex cases requiring external evidence may take up to 10 business days. All decisions are documented and appealable." },
      { q: "What fees does OPIX charge for escrow?", a: "Escrow fees are 2-3% of the project value, depending on currency and project size. No hidden charges. Fees are transparent before any fund lock." },
    ],
  },
  {
    slug: "invoice-verify",
    name: "Invoice Verify",
    category: "Financial Trust",
    tagline: "Digitally signed, verified invoices.",
    summary:
      "Issue and verify tamper-proof, digitally signed invoices tied to verified OPIX identities. Clients and counterparties can confirm authenticity instantly.",
    hero: {
      headline: "Invoices your clients can trust.",
      subheadline:
        "Every OPIX invoice is digitally signed and tied to a verified identity — instantly verifiable, impossible to forge.",
      cta: { label: "Get Started", href: "/signup" },
    },
    meta: {
      title: "Invoice Verify | Digitally Signed, Verified Invoices",
      description:
        "Issue tamper-proof, digitally signed invoices tied to verified OPIX identities. Clients verify authenticity instantly with OPIX Invoice Verify.",
    },
    keyBenefits: [
      "Digital signatures on every invoice",
      "Tied to a verified OPIX identity",
      "Instant authenticity verification",
      "Immutable invoice audit trail",
    ],
    // PLACEHOLDER: source docs reference Invoice Verify in nav/products but do not
    // include a dedicated detail page. Sections below are concise placeholders.
    features: [
      "Digital signature display",
      "Verified-identity badge",
      "Multi-currency invoicing",
      "Tamper-evident records",
    ],
    placeholder: true,
  },
  {
    slug: "credit-intelligence",
    name: "Credit Intelligence",
    category: "Financial Trust",
    tagline: "Aggregated financial health scoring.",
    summary:
      "Link bank accounts and mobile money wallets to build real, alternative credit scores from real transaction history — opening access for thin-file and underserved customers.",
    hero: {
      headline: "Credit scores built from real life.",
      subheadline:
        "Aggregate transaction history into fair, explainable credit scores — so lenders can say yes to people traditional scoring ignores.",
      cta: { label: "Talk to Sales", href: "/contact" },
    },
    meta: {
      title: "Credit Intelligence | Aggregated Financial Health Scoring",
      description:
        "Build alternative credit scores from aggregated bank and mobile money transaction data. OPIX Credit Intelligence expands fair access to credit across Africa.",
    },
    keyBenefits: [
      "Alternative scoring from transaction data",
      "Serve thin-file customers responsibly",
      "Fair, explainable, non-discriminatory models",
      "Aggregated bank + mobile money insight",
    ],
    // PLACEHOLDER: detail content beyond the homepage/solution references is not in
    // the source docs; sections below are concise placeholders.
    features: [
      "Account & mobile money linking",
      "Aggregated financial snapshot",
      "Alternative credit score API",
      "Transaction history retrieval",
    ],
    placeholder: true,
  },
];

export const productsIndex = {
  label: "Our Products",
  headline: "Everything you need to verify, trust, and transact.",
  intro:
    "From biometric KYC to escrow-backed payments, OPIX gives you a single, consent-first trust layer for the whole customer journey.",
};

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
