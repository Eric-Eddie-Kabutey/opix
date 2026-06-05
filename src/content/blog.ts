// Blog content. Markdown-lite `body` (## / ### headings, - lists, - **bold**: text,
// | tables |, **inline bold**) is rendered by ArticleBody. Topics seeded from the
// Website Content Guide §19 (identity, trust, financial inclusion, dev deep dives).

export interface Article {
  id: number;
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  image: string;
  body: string;
}

export const FEATURED_ARTICLE: Article = {
  id: 1,
  slug: "why-african-banks-need-unified-kyc",
  tag: "Identity & Trust",
  title: "Why African Banks Need a Unified KYC Platform (And Why Now)",
  excerpt:
    "Every bank, insurer, and lender on the continent is solving the same identity problem in isolation — and paying for it four times over. A shared, consent-first KYC layer isn't a convenience anymore. It's the precondition for the next decade of financial inclusion.",
  author: "Amara Okonkwo",
  authorRole: "Head of Identity Products",
  authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  date: "May 18, 2025",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  body: `For most of the last decade, "KYC" in African banking has meant one thing: a customer arriving at a branch with a folder of photocopies, a staff member keying the same details into the same fields, and a compliance team archiving documents that the bank down the road is also archiving — for the same person.

## The Same Customer, Verified Five Times

A Nigerian professional opening accounts at three banks, a microfinance lender, and a mobile money wallet is verified five separate times. Each institution captures the same national ID, the same address, the same biometric data. Each pays a vendor for the same liveness check. Each stores the same documents, creating five copies of sensitive personal data across five security postures of varying quality.

This is not just inefficient. It is the single largest source of onboarding friction, fraud exposure, and compliance cost in African retail finance.

## The Economics of Duplication

When we model the cost of KYC for a mid-sized commercial bank onboarding 40,000 customers a year, the numbers are stark:

| Cost component | Per customer (₦) |
|---|---|
| Document capture & data entry | 1,200 |
| Third-party verification checks | 900 |
| Storage & compliance archival | 400 |
| Fraud losses (duplicate/synthetic IDs) | 700 |
| **Total** | **3,200** |

At 40,000 customers, that is ₦128m a year — most of it spent re-verifying people who are already verified somewhere else in the system.

## What "Unified" Actually Means

A unified KYC platform does not mean a single government database that every bank queries. It means a **consent-first network** where:

- **A person is verified once**, biometrically, and that verification becomes reusable.
- **The customer owns the consent.** Every time an institution requests their data, they approve exactly what is shared, for what purpose, and for how long.
- **Institutions verify in seconds**, not days, against a tokenized identity rather than a folder of photocopies.
- **Raw biometrics never move.** Only signed attestations of verification are exchanged.

### Why now, and not five years ago

Three things changed. Biometric capture got cheap enough to run on a mid-range phone. Regulators across the continent moved from paper-era guidance to data-protection regimes with real enforcement. And the volume of digital financial services finally crossed the threshold where duplication became the binding constraint on growth.

## The Trust Dividend

The institutions that adopt shared verification first capture a compounding advantage: every verified, consenting customer they onboard makes the next verification faster and the network more valuable. The banks still asking for photocopies in 2027 will be competing against rivals who onboard a customer in under a minute.

The question is no longer whether identity will be shared infrastructure. It is who builds on it first.`,
};

export const ALL_ARTICLES: Article[] = [
  {
    id: 2,
    slug: "building-biometric-kyc-technical-guide",
    tag: "Developer Deep Dives",
    title: "Building Biometric KYC: A Technical Guide for African Fintechs",
    excerpt:
      "Liveness detection, template tokenization, and consent receipts — the three pieces most teams underestimate when they build identity verification in-house.",
    author: "Daniel Mensah",
    authorRole: "Principal Engineer",
    authorAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80",
    date: "May 2, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    body: `Most fintech teams that set out to build biometric KYC in-house get the camera working in a week and then spend six months on the three things that actually matter: proving the face is live, storing the template safely, and producing a consent trail a regulator will accept.

## Liveness Is the Hard Part

Capturing a face is trivial. Proving that face belongs to a living person sitting in front of the camera — and not a printed photo, a video replay, or a deepfake — is where verification succeeds or fails.

- **Passive liveness** analyses a single frame for texture, depth, and reflection cues. Low friction, but weaker against high-quality spoofs.
- **Active liveness** asks the user to blink, turn, or smile. Stronger, but adds friction and fails for some accessibility cases.

The pragmatic answer for African markets — where camera quality and lighting vary enormously — is passive liveness with a confidence threshold that escalates to active challenges only when the score is ambiguous.

## Never Store the Raw Biometric

The cardinal rule: a raw face image or fingerprint should never be persisted. Convert it to a mathematical template, tokenize that template, and store only the token.

- **The template** is a non-reversible vector derived from the biometric.
- **The token** is what your application database holds — useless if exfiltrated.
- **Matching** happens in a hardened service that never returns the template itself.

## Consent Is Data, Not a Checkbox

A checkbox is not consent. A defensible consent record is a signed, timestamped receipt that captures who requested what, for which purpose, and for how long — and that the user can revoke.

Treat every data-sharing event as a transaction that produces an immutable receipt. When a regulator asks "prove this customer agreed to share their address with this lender on this date," the answer should be one query, not an archaeology project.`,
  },
  {
    id: 3,
    slug: "real-cost-of-kyc-duplication",
    tag: "Financial Inclusion",
    title: "The Real Cost of KYC Duplication in African Banking",
    excerpt:
      "Duplication doesn't just waste money — it locks millions of thin-file customers out of the financial system entirely. Here's the mechanism, and the fix.",
    author: "Amara Okonkwo",
    authorRole: "Head of Identity Products",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    date: "Apr 14, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80",
    body: `When people talk about the cost of KYC duplication, they usually mean money — the vendor fees and staff hours spent re-verifying the same person. That cost is real. But the deeper cost is exclusion.

## The Thin-File Trap

A first-time customer with no banking history arrives to open an account. The bank has no prior relationship, no shared verification to draw on, and so it falls back to the most conservative, document-heavy process. For someone without a passport, a recent utility bill, or a formal address, that process simply fails.

The result: the people who most need access to formal finance are the ones duplication excludes. Every institution starts their assessment from zero, so a customer's hard-won trust at one bank counts for nothing at the next.

## Trust That Travels

The fix is portable, consent-based verification. Once a person is verified, that verification — and the reputation they build through legitimate transactions — should travel with them, with their permission.

- A freelancer verified for a payments wallet can reuse that standing to open a lending relationship.
- A trader with a consistent transaction history can convert it into a credit profile.
- A first-time customer verified once is verified everywhere they consent to be.

## The Inclusion Dividend

Shared verification turns identity from a barrier into an on-ramp. The continent's next hundred million banked customers will not be reached by asking each of them for photocopies five times. They will be reached by verifying them once, with their consent, and letting that trust move with them.`,
  },
  {
    id: 4,
    slug: "freelancer-trust-scores-that-travel",
    tag: "Partner Stories",
    title: "How Freelancers in The Gambia Are Building Trust Scores That Travel",
    excerpt:
      "For cross-border freelancers, reputation has always been trapped on individual platforms. A portable trust score changes who gets hired — and who gets paid on time.",
    author: "Fatou Jallow",
    authorRole: "Partnerships Lead, West Africa",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    date: "Mar 26, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=80",
    body: `A graphic designer in Banjul who has completed two hundred jobs on one platform starts from zero the moment she moves to another. Her reputation — the single most valuable asset she has built — is locked inside someone else's database. For cross-border freelancers, this is the defining constraint on earning.

## Reputation as Infrastructure

When trust is portable, it stops being a platform's property and becomes the worker's own. A verified identity plus a signed history of completed, paid work becomes a credential the freelancer carries between marketplaces, clients, and even lenders.

- **Clients hire faster** because they can verify a freelancer's standing instantly.
- **Freelancers get paid faster** because escrow-backed agreements reduce the risk that holds payments up.
- **Lenders can finally serve** a population that was previously invisible to credit.

## What Changed on the Ground

The freelancers we work with in The Gambia describe the shift in concrete terms: fewer disputes, faster first payments from new clients, and — for the first time — the ability to point a bank at a verifiable record of income.

Trust that travels does not just make freelancing more convenient. It makes a globally competitive workforce legible to the institutions that can fund its growth.`,
  },
  {
    id: 5,
    slug: "consent-first-data-sharing-explained",
    tag: "Identity & Trust",
    title: "Consent-First Data Sharing, Explained",
    excerpt:
      "What it actually means for a customer to own their consent — and why scoped, revocable, logged data sharing is the only model regulators will accept.",
    author: "Daniel Mensah",
    authorRole: "Principal Engineer",
    authorAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80",
    date: "Mar 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=700&q=80",
    body: `"Consent-first" is easy to say and hard to build. Most systems that claim it really mean a one-time checkbox during signup. Real consent-first data sharing is an ongoing, auditable relationship between a person and every institution that touches their data.

## The Four Properties of Real Consent

- **Scoped**: The customer approves exactly which fields are shared — name and KYC level, perhaps, but not their full transaction history.
- **Purpose-bound**: Consent is tied to a stated reason (account opening, credit assessment) and cannot be silently reused for another.
- **Time-limited**: Access expires. A lender granted data for an application does not retain it indefinitely.
- **Revocable**: The customer can withdraw consent at any time, and the system enforces it.

## Why Logging Is Non-Negotiable

Every access produces an immutable, append-only record: who requested data, what was shared, for what purpose, and when. This WORM (write-once, read-many) audit trail is what turns "we respect privacy" from a marketing claim into something a regulator can verify.

## The Customer as the Center

The design principle underneath all of this: the customer, not the institution, is the center of their identity. Institutions request; the customer grants. That inversion is what makes the whole network trustworthy — and what makes it durable as data-protection enforcement tightens across the continent.`,
  },
  {
    id: 6,
    slug: "escrow-backed-payments-for-trust",
    tag: "Financial Inclusion",
    title: "Escrow-Backed Payments: Engineering Trust Between Strangers",
    excerpt:
      "In markets where counterparties can't assume good faith, escrow isn't a feature — it's the thing that lets commerce happen at all.",
    author: "Fatou Jallow",
    authorRole: "Partnerships Lead, West Africa",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    date: "Feb 11, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=700&q=80",
    body: `Two strangers want to transact. The buyer fears paying for work that never arrives. The seller fears delivering work that never gets paid for. In high-trust markets, institutions and legal recourse paper over this gap. In much of Africa, they don't — so the transaction simply doesn't happen.

## Escrow as a Trust Substitute

Escrow solves the standoff by removing the need for either party to trust the other. Funds are locked at the start, held by a neutral party, and released only when agreed conditions are met.

- **The buyer commits** real money up front, proving intent.
- **The seller delivers** knowing the funds already exist and are reserved.
- **Release is conditional** on verified completion, not on either party's good faith.

## Why Identity Makes Escrow Work

Escrow without verified identity is fragile — disputes collapse into "who are you, really?" When both parties are verified and consent to a signed agreement, escrow becomes enforceable: the audit trail establishes who agreed to what, and release conditions can be tied to verifiable events.

## The Commerce That Wasn't Possible Before

Pairing verified identity with escrow-backed payments unlocks transactions that simply could not occur otherwise — cross-border freelance contracts, marketplace deals between strangers, project milestones between businesses that have never met. Trust, engineered into the rails, lets commerce happen where it previously stalled.`,
  },
  {
    id: 7,
    slug: "fraud-rings-and-synthetic-identity",
    tag: "Identity & Trust",
    title: "Fraud Rings and Synthetic Identity: The Threat Shared Verification Stops",
    excerpt:
      "Synthetic identities — stitched together from real and fabricated data — are the fastest-growing fraud vector in African finance. Isolated KYC can't see them. A network can.",
    author: "Daniel Mensah",
    authorRole: "Principal Engineer",
    authorAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80",
    date: "Feb 2, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1614064642639-e398cf05badb?w=700&q=80",
    body: `A synthetic identity is not a stolen one. It is a new person assembled from fragments — a real national ID number paired with a fabricated name, a genuine address attached to an invented history. Because no single victim notices a theft, these identities can pass isolated checks for years.

## Why Single-Institution KYC Fails

When each institution verifies in isolation, it sees only its own slice of the picture. A synthetic identity that opens accounts at six institutions presents a clean record to each one — none of them can see that the same biometric is attached to six different names, or that the same name is attached to six different faces.

## What a Network Sees

Shared, consent-based verification changes the unit of analysis from one institution to the whole network:

- **One biometric, many identities** becomes visible the moment verification is shared.
- **Velocity patterns** — the same person verifying across many institutions in days — surface as signals.
- **Attestation, not raw data**, means institutions cooperate on fraud without pooling sensitive records.

## The Defender's Advantage

Fraud rings industrialise. They reuse infrastructure, scripts, and identity fragments across targets. A network defence reuses signal the same way: every institution's verification strengthens every other's. Isolated, each bank fights alone; connected, they raise the cost of synthetic fraud past the point of profitability.`,
  },
  {
    id: 8,
    slug: "data-residency-and-sovereignty-africa",
    tag: "Financial Inclusion",
    title: "Data Residency and Sovereignty: Building Identity Infrastructure Africa Owns",
    excerpt:
      "Where verified identity data lives — and who governs it — is as important as how it's secured. A look at why sovereignty is a design requirement, not an afterthought.",
    author: "Amara Okonkwo",
    authorRole: "Head of Identity Products",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    date: "Jan 20, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80",
    body: `Identity is sovereign infrastructure. When a continent's verification data lives on servers governed by foreign jurisdictions, the question of who can compel access to it is no longer hypothetical — it is a standing risk to citizens and institutions alike.

## Residency Is Not Just Latency

Keeping data in-region is often framed as a performance choice. It is really a governance one. Data residency determines which courts, which regulators, and which subpoenas can reach a population's identity records.

## Designing for Sovereignty

- **Partitioned by jurisdiction**, so each market's data is governed by its own laws.
- **Operated under local mandate** — central bank licence or independent consortium, not a single foreign owner.
- **Neutral governance**, so no one institution or government controls the network unilaterally.

## Trust as the Product

The institutions that adopt sovereign-by-design identity infrastructure are not just complying with regulation — they are offering their customers something increasingly rare: the assurance that their identity is governed by, and accountable to, the society they live in.`,
  },
  {
    id: 9,
    slug: "kyc-apis-for-mobile-money",
    tag: "Developer Deep Dives",
    title: "Designing KYC APIs for Mobile Money Scale",
    excerpt:
      "Mobile money moves millions of transactions a day. The verification layer underneath has to be fast, idempotent, and graceful under partial failure. Here's how we approach it.",
    author: "Daniel Mensah",
    authorRole: "Principal Engineer",
    authorAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80",
    date: "Dec 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
    body: `Mobile money is the busiest financial rail on the continent. A verification API that sits in that path cannot be the slow link. It has to answer in milliseconds, behave predictably under retry storms, and degrade gracefully when an upstream is down.

## Idempotency Is Not Optional

At mobile-money scale, requests get retried — by clients, by gateways, by flaky networks. Every verification call must carry an idempotency key so a retried request returns the original result rather than creating a duplicate.

## Designing for Partial Failure

- **Timeouts with fallbacks**: a slow biometric provider should degrade to a cached attestation, not block the transaction.
- **Circuit breakers**: when an upstream is failing, stop hammering it and fail fast with a clear status.
- **Async where possible**: enrollment can be eventual; authorization cannot.

## Shape of a Good Response

A verification response should tell the caller not just yes/no but *why* and *how confident* — KYC level, freshness, and the consent scope under which it was issued. That lets the calling system make a risk decision rather than a binary one.`,
  },
  {
    id: 10,
    slug: "credit-from-transaction-history",
    tag: "Financial Inclusion",
    title: "Building Credit From Transaction History, Not Collateral",
    excerpt:
      "Traditional credit scoring ignores the people who most need access. Aggregated, consented financial data turns everyday transactions into a credit profile lenders can trust.",
    author: "Fatou Jallow",
    authorRole: "Partnerships Lead, West Africa",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=700&q=80",
    body: `Ask a traditional credit bureau about a market trader with twenty years of consistent income and no formal loan history, and the answer is silence. The data exists — it just lives in mobile money wallets and bank statements, not in a bureau file.

## The Data Is Already There

Every wallet top-up, every supplier payment, every received transfer is a signal of financial behaviour. Aggregated with consent, these become a richer, more current picture of creditworthiness than a one-time collateral check.

## Consent Is the Unlock

- **The customer authorises** which accounts are shared and for how long.
- **Lenders receive a profile**, not raw statements — a scored, structured view.
- **Access expires**, so a one-time assessment does not become permanent surveillance.

## Who This Reaches

Credit built from real behaviour reaches the people collateral-based lending leaves out: traders, freelancers, gig workers, small businesses. Not by lowering standards, but by finally measuring the right thing.`,
  },
  {
    id: 11,
    slug: "regtech-and-the-new-data-protection-era",
    tag: "Identity & Trust",
    title: "RegTech and the New Data-Protection Era in African Finance",
    excerpt:
      "Data-protection enforcement across the continent has moved from paper guidance to real fines. Compliance is becoming a product feature — and a competitive advantage.",
    author: "Amara Okonkwo",
    authorRole: "Head of Identity Products",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    date: "Nov 8, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80",
    body: `For years, data-protection regulation across Africa was something businesses acknowledged and quietly ignored. That era is over. Regulators are issuing fines, ordering audits, and publishing enforcement actions — and customers are starting to ask where their data goes.

## Compliance as Architecture

The institutions handling this well are not bolting compliance on afterwards. They are building it into the rails: consent receipts, audit trails, data-retention enforcement, and revocation as first-class features rather than policy documents.

## The Competitive Turn

- **Scoped, logged data sharing** becomes a selling point, not just a control.
- **Provable consent** shortens audits from weeks to queries.
- **Customer trust** compounds when people can see and revoke what they have shared.

## Where This Goes

Regulation will keep tightening. The businesses that treated compliance as architecture will adapt by changing a config; the ones that treated it as paperwork will rebuild under pressure. The gap between them is the competitive story of the next few years.`,
  },
];

export const FEATURED_ARTICLES: Article[] = [FEATURED_ARTICLE, ...ALL_ARTICLES.slice(0, 2)];

export const ALL_ARTICLES_WITH_FEATURED: Article[] = [FEATURED_ARTICLE, ...ALL_ARTICLES];

export function getArticleBySlug(slug: string): Article | undefined {
  return ALL_ARTICLES_WITH_FEATURED.find((a) => a.slug === slug);
}

export function getRelatedArticles(current: Article, count = 3): Article[] {
  const tag = current.tag.split(" · ")[0];
  const related = ALL_ARTICLES_WITH_FEATURED.filter(
    (a) => a.id !== current.id && (a.tag === current.tag || a.tag.startsWith(tag)),
  );
  if (related.length >= count) return related.slice(0, count);
  const rest = ALL_ARTICLES_WITH_FEATURED.filter((a) => a.id !== current.id && !related.includes(a));
  return [...related, ...rest].slice(0, count);
}
