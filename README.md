# OPIX — Website, Developer Hub & Careers

Premium, Africa-first fintech infrastructure site for OPIX, built from the supplied
content guides. Next.js App Router + TypeScript + Tailwind v4, content-driven and
SEO/accessibility-ready.

## Stack
- **Next.js 15** (App Router, Server Components by default)
- **TypeScript**, **Tailwind CSS v4** (CSS-first `@theme` tokens)
- Fonts: **Geist** (sans), **Geist Mono** (code), **Fraunces** (display serif)
- No icon/animation libraries — inline SVG icon set, CSS-only motion

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender static/SSG)
npm start
```

## Architecture
Content is the source of truth — pages stay thin and render typed data.

```
src/
  app/                 # routes (App Router)
    (auth)/            # /signup /login placeholders
    products/[slug]    # product detail (SSG)
    use-cases/[slug]   # use-case detail (SSG)
    docs, docs/java, docs/nextjs
    developers, developers/changelog
    api-reference, sandbox, status
    careers, careers/[slug], careers/apply/[role]
    sitemap.ts, robots.ts, not-found.tsx
  content/             # ← edit copy here (site, navigation, home, products,
                       #   useCases, company, pricing, developers, apiReference,
                       #   careers, seo)
  components/
    ui/                # Button, Icon, Logo, Section, CheckList, Breadcrumbs
    navigation/        # Navbar (mega menu + mobile), Footer
    sections/          # Hero, StatsBar, cards, pillars, pricing, FAQ, CTA
    dev/               # CodeBlock/Tabs, CopyButton, Endpoints, SDKCard,
                       #   Architecture, Status, Changelog, DocsLayout/Sidebar
    careers/           # RoleCard, RoleExplorer, Timeline, ApplyForm, JobPostingSchema
    seo/               # JsonLd
```

## Design system — edit the whole site from a few files
Centralized tokens; nothing is hardcoded in components.

| Change… | Edit here |
|---|---|
| Brand colors | `src/app/globals.css` §1 (brand palette) |
| Semantic roles (background, primary, muted, accent, card, border, ring, success/warning/error/info) | `src/app/globals.css` §3 |
| Fonts | `src/lib/fonts.ts` (Manrope + JetBrains Mono) |
| Button styles | `src/lib/theme.ts` → `buttonVariants` / `buttonSizes` |
| Card / Badge / Input / Section styles | `src/lib/theme.ts` → `cardVariants` / `badgeVariants` / `inputBase` / `sectionTones` |
| Typography scale | `globals.css` utilities `.type-hero/.type-h2/.type-body/.type-code/…` |

**Palette** (calm, premium, enterprise): Enterprise Blue `#12355B` (brand/structural),
Muted Teal `#2F7D73` (primary **action** — chosen for contrast on light *and* dark),
Champagne `#BFA46F` (premium accent), Deep Ink `#0B1724` (dark surfaces),
Warm White `#FAF9F6` (bg), Slate Text `#243447`, Muted Gray Blue `#66788A`, Border `#D8D4CB`.

The legacy scale utilities (`navy-*`, `teal-*`, `slate-*`, `gold-*`) are **remapped** to
this palette in `globals.css` §2 — so changing one value there re-themes every page
without touching component class names. Components also use semantic utilities directly
(`bg-primary`, `text-muted-foreground`, `border-border`, `bg-accent`).

## SEO & accessibility
- Per-page metadata via `pageMeta()`; canonical, OG, keywords.
- JSON-LD: Organization (global), BreadcrumbList, Product, FAQPage,
  SoftwareApplication, JobPosting.
- One H1/page, keyboard-accessible menus/tabs/accordions, `aria-*` states,
  visible focus rings, status conveyed by icon+text (not color alone), skip link.

## Notes / placeholders
Anything not present in the source docs is clearly marked `PLACEHOLDER` in code
comments — e.g. Invoice Verify / Credit Intelligence / Government detail bodies,
the demo video embed, the interactive coverage map, the contact form, and the
`/signup` `/login` auth screens (the product app is out of scope). API reference
shows documented endpoint signatures; full request/response schemas are noted as
"coming soon" since they aren't in the source material.
```
