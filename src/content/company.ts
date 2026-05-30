// Company pages — Website Content Guide §17
export const about = {
  meta: {
    title: "About OPIX | Building Africa's Digital Trust Infrastructure",
    description:
      "OPIX is building the unified digital identity and trust platform for Africa. Learn about our mission, team, and vision for a verified, inclusive digital economy.",
  },
  hero: {
    headline: "Trust is the missing layer of Africa's digital economy.",
    subheadline: "We're building it.",
  },
  story: [
    "OPIX was born from a simple observation: in Africa, identity verification is broken. Banks ask for the same documents repeatedly. Freelancers can't prove their credibility. Employers hire blind. Fraudsters exploit the gaps. And the people who suffer most are the honest ones — the customers, the workers, the small businesses trying to grow.",
    "We asked: What if verifying someone's identity was as fast as checking their phone number? What if a freelancer's reputation could travel across borders? What if banks could trust each other's KYC instead of starting from zero every time?",
    "That's OPIX. A unified digital identity and trust platform designed specifically for Africa's realities — fragmented IDs, mobile-first users, regulatory complexity, and enormous untapped potential.",
  ],
  mission:
    "To make identity verification fast, secure, and accessible for every African — enabling financial inclusion, economic opportunity, and digital trust at scale.",
  vision:
    "An Africa where every person has a verified digital identity that unlocks banking, employment, freelancing, and entrepreneurship — regardless of where they were born or how much they earn.",
  values: [
    { title: "Trust by Design", body: "We don't bolt on security; we build it in." },
    { title: "Consent is Sacred", body: "No data moves without explicit permission." },
    { title: "Neutrality Matters", body: "No single institution controls the platform." },
    { title: "Africa First", body: "We solve African problems with African context." },
    { title: "Transparency Wins", body: "Open governance, clear rules, honest communication." },
  ],
  team:
    "Led by a team of technologists, compliance experts, and Africa-focused operators with deep experience in banking, fintech, identity systems, and regulatory frameworks.",
  partners:
    "OPIX operates under the oversight of the Central Bank of The Gambia and collaborates with leading banks, mobile money operators, insurers, and technology partners across West Africa.",
};

export const coverage = {
  meta: {
    title: "Where OPIX Operates | Coverage Map",
    description:
      "OPIX is currently available in The Gambia with planned expansion across West Africa. See our coverage map and roadmap.",
  },
  hero: { headline: "Starting in The Gambia. Expanding across West Africa." },
  current: {
    region: "The Gambia",
    note: "Full platform availability",
    items: [
      "All major commercial banks",
      "Mobile money operators",
      "Insurance providers",
      "Government and regulatory bodies",
    ],
  },
  expansion: [
    { when: "Q3 2026", where: "Senegal" },
    { when: "Q4 2026", where: "Ghana" },
    { when: "Q1 2027", where: "Nigeria" },
    { when: "Q2 2027", where: "Côte d'Ivoire" },
    { when: "2028", where: "East Africa (Kenya, Rwanda, Tanzania)" },
  ],
};

// Contact / Demo — derived from CTAs across the docs (no dedicated page text provided)
export const contact = {
  meta: {
    title: "Contact OPIX | Talk to Our Team",
    description:
      "Talk to the OPIX team about identity verification, compliance, and trust infrastructure for your bank, fintech, or business across West Africa.",
  },
  headline: "Let's build trust together.",
  subheadline:
    "Whether you're a bank, fintech, employer, or freelancer — tell us what you're building and our team will get back to you.",
  channels: [
    { title: "Sales", body: "Pricing, pilots, and enterprise deployments.", action: "sales@opix.africa" },
    { title: "Engineering", body: "Integration questions and technical scoping.", action: "engineering@opix.africa" },
    { title: "General", body: "Everything else.", action: "hello@opix.africa" },
  ],
};

export const demo = {
  meta: {
    title: "See OPIX in Action | Request a Demo",
    description:
      "Watch a 2-minute demo or book a personalized walkthrough of OPIX biometric KYC, background verification, and escrow-backed payments.",
  },
  headline: "See how trust moves at the speed of Africa.",
  subheadline:
    "Book a personalized walkthrough of biometric KYC, consent flows, and escrow — tailored to your use case.",
};
