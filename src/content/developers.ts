// Developer Hub — Developer Hub Content Guide §3–§12
export const devHero = {
  eyebrow: "Java backend · Next.js frontend",
  headline: "Built with Java. Powered by Next.js. Ready for Africa.",
  subheadline:
    "OPIX runs on a battle-tested Java Spring Boot backend and a modern Next.js frontend. Whether you're integrating our REST APIs into your Java microservices or building customer-facing flows with our React components, we've got you covered. Clean code. Fast integration. Production-ready.",
  primary: { label: "Read the Docs", href: "/docs" },
  secondary: { label: "Try the Sandbox", href: "/sandbox" },
  trustLine: "Trusted by 50+ African banks and fintechs. 99.9% API uptime. Sub-200ms response time.",
  stats: [
    { value: "< 200ms", label: "Average API response time" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "50+", label: "African institutions integrated" },
  ],
  javaCode: `// Java Spring Boot — Verify identity in 3 lines
KycResponse response = opixClient.search()
    .byBiometricToken("bt_abc123...")
    .purpose("account_opening")
    .institution("bank_001")
    .execute();`,
  nextCode: `// Next.js 14 — Biometric capture component
import { BiometricCapture } from '@opix/next-sdk';

export default function OnboardingPage() {
  return (
    <BiometricCapture
      mode="face"
      onVerify={(token) => handleKyc(token)}
      consentFlow="explicit"
    />
  );
}`,
};

export const techStack = {
  label: "Our Tech Stack",
  headline: "Enterprise-grade backend. Modern frontend. Best of both worlds.",
  intro:
    "We chose Java for the backend because banks and regulators trust it. We chose Next.js for the frontend because developers love it. Together, they give you a platform that's secure, scalable, and delightful to build with.",
  backend: {
    title: "Java Spring Boot Backend",
    tagline: "The engine that powers African identity verification.",
    features: [
      "Spring Boot 3.x with native image support",
      "Spring Security with OAuth2 / OIDC and FAPI compliance",
      "Spring Data JPA with PostgreSQL",
      "Spring WebFlux for reactive, non-blocking endpoints",
      "Spring Cloud Gateway for routing and rate limiting",
      "OpenAPI 3.0 / Swagger auto-generated docs",
      "HSM integration via PKCS#11 for cryptographic signing",
    ],
    performance: [
      "Handles 10,000+ concurrent biometric verifications",
      "Sub-200ms p95 response time for KYC search",
      "Horizontal scaling via Kubernetes HPA",
    ],
    cta: { label: "Explore Java SDK", href: "/docs/java" },
  },
  frontend: {
    title: "Next.js 14 Frontend SDK",
    tagline: "Drop-in components for identity, consent, and payments.",
    features: [
      "App Router support with React Server Components",
      "TypeScript-first with full type definitions",
      "Tailwind CSS styling with theme tokens",
      "Biometric capture components (face, fingerprint, signature)",
      "Consent flow UI with scoped permission requests",
      "Escrow status dashboard with real-time updates",
      "Accessibility compliant (WCAG 2.1 AA)",
    ],
    performance: [
      "First Contentful Paint < 1.5s on 3G networks",
      "Bundle size < 150KB gzipped for core SDK",
      "Lazy loading for biometric capture modules",
    ],
    cta: { label: "Explore Next.js SDK", href: "/docs/nextjs" },
  },
  middleware: {
    title: "What Connects Them",
    body: "Our Java backend exposes clean REST APIs over HTTPS with mTLS. Our Next.js frontend consumes these via React Query / SWR with automatic caching, revalidation, and optimistic updates. WebSocket connections (via Spring WebFlux) power real-time consent notifications and escrow status updates.",
    flow: ["Browser", "Next.js App", "React Query", "REST API", "Spring Boot", "PostgreSQL / Redis / Kafka", "HSM"],
  },
};

export const quickStart = {
  label: "Quick Start",
  headline: "From zero to verified in under 10 minutes.",
  intro: "Pick your path. Java for backend integration. Next.js for frontend building. Or both — they work beautifully together.",
  java: {
    badge: "Backend",
    title: "Java Spring Boot",
    steps: [
      {
        title: "Add Dependency",
        lang: "xml",
        code: `<!-- Maven -->
<dependency>
  <groupId>africa.opix</groupId>
  <artifactId>opix-java-sdk</artifactId>
  <version>2.1.0</version>
</dependency>`,
      },
      {
        title: "Configure Client",
        lang: "java",
        code: `OpixConfig config = OpixConfig.builder()
    .apiKey("opix_live_xxxxxxxx")
    .environment(OpixEnvironment.SANDBOX)
    .build();

OpixClient opix = new OpixClient(config);`,
      },
      {
        title: "Verify Identity",
        lang: "java",
        code: `KycSearchRequest request = KycSearchRequest.builder()
    .biometricToken("bt_abc123def456")
    .purpose("account_opening")
    .institutionId("bank_001")
    .build();

KycResponse response = opix.kyc().search(request);
if (response.isVerified()) {
    System.out.println("Verified: " + response.getProfileId());
}`,
      },
    ],
    cta: { label: "Full Java Guide", href: "/docs/java" },
  },
  next: {
    badge: "Frontend",
    title: "Next.js 14",
    steps: [
      {
        title: "Install Package",
        lang: "bash",
        code: `npm install @opix/next-sdk
# or
pnpm add @opix/next-sdk`,
      },
      {
        title: "Configure Provider",
        lang: "tsx",
        code: `// app/layout.tsx
import { OpixProvider } from '@opix/next-sdk';

export default function RootLayout({ children }) {
  return (
    <OpixProvider
      apiKey={process.env.NEXT_PUBLIC_OPIX_KEY}
      environment="sandbox"
    >
      {children}
    </OpixProvider>
  );
}`,
      },
      {
        title: "Add Biometric Capture",
        lang: "tsx",
        code: `'use client';
import { BiometricCapture, ConsentFlow } from '@opix/next-sdk';

export default function OnboardingPage() {
  return (
    <ConsentFlow purpose="account_opening" institution="My Bank">
      <BiometricCapture mode="face" onCapture={handleVerify} />
    </ConsentFlow>
  );
}`,
      },
    ],
    cta: { label: "Full Next.js Guide", href: "/docs/nextjs" },
  },
};

export const sdks = {
  label: "SDKs & Libraries",
  headline: "Drop-in SDKs for your stack. Built by developers, for developers.",
  intro:
    "Don't want to hand-craft HTTP requests? Our official SDKs handle authentication, retries, type safety, and error handling for you.",
  cards: [
    {
      name: "Java SDK",
      version: "v2.1.0",
      badge: "Official",
      description: "Full-featured Java client for Spring Boot and standalone applications. Supports sync and async operations.",
      install: "africa.opix:opix-java-sdk:2.1.0",
      features: ["Spring Boot auto-configuration", "Reactive WebClient (WebFlux)", "Connection pooling & retry logic", "HSM integration helpers"],
      docs: "/docs/java",
      github: "https://github.com/opix/java-sdk",
    },
    {
      name: "Next.js SDK",
      version: "v2.0.0",
      badge: "Official",
      description: "React components and hooks for identity verification, consent flows, and escrow dashboards. App Router ready.",
      install: "npm install @opix/next-sdk",
      features: ["React Server Components compatible", "Biometric capture with liveness", "Consent UI with scoped permissions", "Dark mode & Tailwind theming"],
      docs: "/docs/nextjs",
      github: "https://github.com/opix/next-sdk",
    },
    {
      name: "React SDK",
      version: "v1.8.0",
      badge: "Official",
      description: "Framework-agnostic React hooks and components for non-Next.js applications. Works with Vite, CRA, or any React setup.",
      install: "npm install @opix/react-sdk",
      features: ["Hooks for all API operations", "Biometric capture components", "Consent management UI", "Customizable styling"],
      docs: "/docs",
      github: "https://github.com/opix/react-sdk",
    },
  ],
  comingSoon: [
    "Node.js SDK (server-side) — Q3 2026",
    "Python SDK — Q3 2026",
    "Flutter SDK — Q4 2026",
    "iOS Native SDK — Q4 2026",
    "Android Native SDK — Q4 2026",
  ],
};

export const sandbox = {
  meta: {
    title: "Sandbox | Test Everything, Break Nothing",
    description:
      "Test every OPIX endpoint in a fully simulated environment. Mock biometrics, real-time webhooks, and an interactive API explorer. Instant access, no credit card.",
  },
  label: "Sandbox",
  headline: "Test everything. Break nothing. Ship with confidence.",
  intro:
    "Our fully functional sandbox environment mirrors production — same APIs, same responses, same behavior. But with mock data, simulated biometrics, and zero risk.",
  features: [
    { icon: "play", title: "Pre-Built Test Scenarios", body: "50+ pre-configured test cases covering common flows: new customer onboarding, cross-bank verification, consent revocation, escrow dispute, and more. Run them with one click." },
    { icon: "fingerprint", title: "Simulated Biometrics", body: "Test biometric flows without real hardware. Upload test images, use mock biometric tokens, or trigger simulated liveness checks. All biometric data is synthetic and clearly labeled." },
    { icon: "refresh", title: "Real-Time Webhooks", body: "Receive webhook events in real time to your local endpoint. Test consent notifications, escrow status changes, and payment confirmations without waiting for production events." },
    { icon: "code", title: "Interactive API Explorer", body: "Try every endpoint directly in the browser. Auto-generated request builders. Live response preview. Copy-paste code in Java, TypeScript, cURL, or Python." },
  ],
  access:
    "Get sandbox access instantly when you create an OPIX developer account. No approval required. No credit card. Just sign up and start building.",
  primary: { label: "Launch Sandbox", href: "/signup" },
  secondary: { label: "View Sandbox Docs", href: "/docs" },
  stats: ["50+ test scenarios", "100% API coverage", "Unlimited sandbox calls", "Instant access"],
};

export const architecture = {
  label: "Architecture & Security",
  headline: "How we build. How we protect.",
  intro:
    "OPIX is built for scale, security, and compliance from the ground up. Our Java backend handles the heavy lifting. Our Next.js frontend delivers a modern experience.",
  layers: [
    { name: "Client", items: ["Next.js 14 App (RSC + Client Components)", "Mobile App (React Native, planned Q4 2026)", "Third-party Integrations (banking cores, HR systems)"] },
    { name: "API Gateway", items: ["Spring Cloud Gateway (rate limiting, routing, mTLS)", "OAuth2 / OIDC authorization server", "FAPI-compliant security layer", "WAF and DDoS protection"] },
    { name: "Microservices (Java Spring Boot)", items: ["Identity Service — KYC enrollment, biometric matching", "Verification Service — Background & credential checks", "Consent Service — Grant/revoke, audit logging", "Escrow Service — Fund locking, release, arbitration", "Financial Service — Aggregation, credit scoring"] },
    { name: "Data & Messaging", items: ["PostgreSQL (primary store, per-service schemas)", "Redis (caching, sessions, rate limiting)", "Kafka (event streaming, async, audit trail)", "MinIO / S3 (encrypted document storage)"] },
    { name: "Security & Crypto", items: ["HSM for key signing", "AES-256 encryption at rest", "TLS 1.3 in transit", "Biometric tokenization (raw images never stored)"] },
    { name: "Infrastructure", items: ["Kubernetes (EKS/GKE) with HPA", "Istio service mesh (mTLS between services)", "Prometheus + Grafana monitoring", "Multi-AZ; RPO < 1 hour, RTO < 4 hours"] },
  ],
  securityDetails: [
    { title: "Authentication & Authorization", body: "OAuth2 / OIDC with FAPI compliance. mTLS for institutional clients. JWT tokens with short expiry. RBAC with fine-grained permissions." },
    { title: "Data Protection", body: "AES-256 at rest. TLS 1.3 in transit. Field-level encryption for sensitive data. Biometric templates tokenized with irreversible hashing." },
    { title: "Audit & Compliance", body: "Full WORM audit logs. Immutable logging for critical events. Central Bank supervisory access. Automated compliance reporting." },
    { title: "Infrastructure Security", body: "Kubernetes network policies. Secrets via Vault. Regular vulnerability scanning. Quarterly penetration testing. 24/7 on-call." },
  ],
};

export const changelog = {
  meta: {
    title: "Changelog | What's New in OPIX",
    description:
      "Track the latest OPIX releases — Java SDK, Next.js SDK, and API updates. Ship fast, document well, never break things.",
  },
  label: "What's New",
  headline: "Ship fast. Document well. Never break things.",
  releases: [
    {
      version: "Java SDK v2.1.0",
      date: "May 15, 2026",
      badge: "Latest",
      changes: [
        "Added Spring Boot 3.2 native image support",
        "New reactive WebFlux client for non-blocking operations",
        "Improved HSM integration with automatic key rotation",
        "Added support for batch KYC enrollment (up to 100 profiles)",
        "Fixed connection pool leak under high concurrency",
        "Performance: 40% faster biometric search with optimized queries",
      ],
    },
    {
      version: "Next.js SDK v2.0.0",
      date: "May 10, 2026",
      badge: "Major",
      changes: [
        "Full App Router support with React Server Components",
        "New BiometricCapture component with improved liveness detection",
        "Dark mode support with automatic system preference detection",
        "Reduced bundle size by 35% via tree-shaking improvements",
        "Added EscrowStatus real-time component with WebSocket",
        "Breaking: Removed Pages Router support (use v1.x for legacy)",
      ],
    },
    {
      version: "API v1.2.0",
      date: "April 28, 2026",
      changes: [
        "New endpoint: POST /v1/financial/credit-score (alternative scoring)",
        "Added webhook event types: escrow.dispute.filed, escrow.resolved",
        "Improved rate limiting with burst allowance for enterprise clients",
        "Added support for Francophone West African ID formats",
        "Deprecated: GET /v1/kyc/legacy-search (removes June 2026)",
      ],
    },
  ],
};

export const status = {
  meta: {
    title: "Status | OPIX Platform Health",
    description:
      "Real-time OPIX API status and uptime. KYC, Verification, Consent, Escrow, Financial APIs, and webhook delivery health.",
  },
  label: "System Status",
  headline: "All systems operational.",
  lastUpdated: "2 minutes ago",
  services: [
    { name: "KYC API", state: "operational" },
    { name: "Verification API", state: "operational" },
    { name: "Consent API", state: "operational" },
    { name: "Escrow API", state: "operational" },
    { name: "Financial API", state: "operational" },
    { name: "Webhook Delivery", state: "operational" },
    { name: "Sandbox", state: "operational" },
  ],
  uptime: [
    { label: "Overall", value: "99.97%" },
    { label: "KYC API", value: "99.99%" },
    { label: "Escrow API", value: "99.95%" },
  ],
};

export const community = {
  label: "Community & Support",
  headline: "You're not building alone.",
  channels: [
    { icon: "book", title: "Documentation", body: "Comprehensive guides, API reference, and integration tutorials. Searchable. Versioned. Always up to date.", cta: { label: "Read Docs", href: "/docs" } },
    { icon: "chat", title: "Discord Community", body: "Join 1,200+ African developers building with OPIX. Ask questions. Share projects. Get help from the team.", cta: { label: "Join Discord", href: "https://discord.gg/opix" } },
    { icon: "github", title: "Open Source", body: "Our SDKs are open source. Contribute, report issues, or request features. We review PRs weekly.", cta: { label: "GitHub Org", href: "https://github.com/opix" } },
    { icon: "support", title: "Engineering Support", body: "Stuck on an integration? Our engineering team is here. Priority support for enterprise clients.", cta: { label: "Open Ticket", href: "/contact" } },
  ],
  stats: ["1,200+ Discord members", "50+ open source contributors", "200+ GitHub stars", "< 4 hour avg response (enterprise)"],
};

export const devFinalCta = {
  headline: "Start building with OPIX today.",
  subheadline: "Free sandbox. No credit card. No approval required.",
  primary: { label: "Create Developer Account", href: "/signup" },
  secondary: { label: "Schedule Engineering Call", href: "/contact" },
};
