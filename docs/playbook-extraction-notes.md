# Playbook Extraction Notes — Stack 13 / `web:*` Plugin

This file captures the reusable *method* behind the kurtisbaker.com build so it can be formalized as a plugin after the site ships.

**V1 scope (locked):** Personal hero hub builder only.
**Decision (2026-05-28):** Standalone plugin (`web:*` or `hub:*`), not `aiaos-*`.

---

## Skill blueprint (target structure)

### `web:audit-current-site`
**Input:** existing URL
**Process:** static HTML scrape → headless browser render → DNS probe → API queries (if backend known like GHL) → screenshot every public page
**Output:** Audit Report (markdown) covering:
- Platform detected (GHL, WordPress, etc.)
- All scripts, iframes, forms, widgets, calendars
- Subdomains and their targets
- Backend integrations to preserve
- Brand assets discoverable from the live site
- Real business info (address, phone, email) when API access exists

### `web:research-references`
**Input:** category/niche (advisor, founder, speaker, etc.) + optional preferred references
**Process:** WebSearch top sites in category → headless visit each → screenshot hero → extract design DNA
**Output:** Reference Deck — for each site: take vs. leave matrix + key lesson + screenshot

### `web:design-system`
**Input:** brand assets + voice guide + reference deck
**Process:** synthesize palette, typography, motion language, component vocabulary from inputs
**Output:** `design-tokens.css` + `design-game-plan.md` (the brief)

### `web:build-hero-hub`
**Input:** design system + brand assets + tier target (1, 2, 3)
**Process:** scaffold Next.js + Tailwind project → install shadcn/ui → build components per tier scope → preserve all backend integrations from audit
**Output:** Git repo with Tier-N implementation, builds clean, dev server runs

### `web:deploy`
**Input:** built project + target domain + DNS provider
**Process:** push to GitHub → Vercel project → DNS migration plan (preserve email + custom subdomains) → GHL apex-to-subdomain migration if applicable
**Output:** Live preview URL + DNS changes to apply at registrar

---

## Live playbook (captured from kurtisbaker.com build)

### Phase 1 — Audit (what we did)
1. WebFetch on apex URL → identify platform, get content overview
2. Static `Invoke-WebRequest` raw HTML → extract `<script>`, `<iframe>`, `<form>` (catches initial render)
3. Headless browser via `Claude_in_Chrome` → render with JS, extract dynamic widgets (`data-form-id`, `data-widget-id`, etc.)
4. DNS probe via `Resolve-DnsName -Server 1.1.1.1` (bypass ISP hijacking) → find subdomains and their targets
5. If GHL location known: query `/locations/{id}`, `/forms/`, `/calendars/` via PIT token → pull real biz info, form IDs, calendar IDs
6. Download brand assets directly from CDN URLs found

**Output for kurtisbaker.com:**
- Platform: GHL hosted (apex via Cloudflare → sites.ludicrous.cloud)
- 1 GHL chat widget (id `674f4b44f9c66bff51f57f57`)
- 0 forms / 0 calendars embedded on public pages
- Email/mail subdomains → GoDaddy Workspace Email
- 7 brand images downloaded (headshot + 6 logos)
- Real business info via GHL API

### Phase 2 — Reference research (what we did)
1. Web search for "best [category] websites 2026" — e.g., "best founder personal brand website 2026"
2. Curate ~8-10 sites mixing direct comps + adjacent inspiration + counter-example + agency-tier reference
3. For each: navigate in `Claude_in_Chrome` → wait 4-5s → screenshot full-disk → extract title, headline, color scheme, fonts
4. Write Reference Matrix to `docs/design-game-plan.md` — each site gets a take/leave row + key lesson
5. Synthesize the **pattern map**: what every best-in-class site in this category does

**Output for kurtisbaker.com:**
- 17 reference sites visited
- 9 advisor/wealth-adjacent + 8 personal-brand-hub specific
- Pattern map: 8 consistent moves of top hero hubs
- Recommendation: Codie Sanchez palette + Gary V left-rail nav + Tim Ferriss photography + Brené Brown editorial weight

### Phase 3 — Design system (what we did)
- Palette: warm cream bg, deep navy ink, brass-gold accent, sage muted, off-white border
- Typography: Fraunces (serif headlines) + Inter (sans body) — both Google Fonts
- Motion: TBD Tier 1 — Framer Motion scroll reveals at 350ms, hover micro-interactions on cards
- Components: shadcn/ui to be added in Tier 1 polish
- Layout grid: max-w-6xl with px-6, generous py-20/py-28 section spacing

### Phase 4 — Build (Tier 1 in progress)
- Stack: Next.js 16 (App Router) + Tailwind v4 + Vercel
- Components extracted: Nav, Hero, Pillars, Companies, About, Media, Contact, Footer, GhlChatWidget
- Data centralized in `app/data/site.ts`
- GHL preservation: chat widget loader script, contact form iframe, booking calendar URL
- Real business info from GHL API: phone, address, email synced

### Phase 5 — Deploy (pending CLI auth)
- Git: local repo initialized at `C:\Users\kbake\Code\kurtisbaker-com`, 6 commits, ready to push
- GitHub: target `github.com/revforce-ai/kurtisbaker-com` (needs `gh auth login`)
- Vercel: CLI installed (needs `vercel login`)
- DNS plan: apex/www → Vercel; existing GHL site → `funnels.kurtisbaker.com`; email/mail untouched

---

## Recurring patterns worth coding into the plugin

1. **DNS hijacking workaround:** Always use `Resolve-DnsName -Server 1.1.1.1` or `nslookup ... 8.8.8.8` — ISP DNS often returns placeholder IPs for nonexistent records, giving false positives.

2. **GHL widget URLs are by slug, not ID:** Calendar booking widget URL is `/widget/bookings/{slug}` not `{id}`. Form URLs are by ID: `/widget/form/{id}`.

3. **GHL form auto-discovery:** Look for forms with name containing "CUF" (Contact Us Form) or "Contact" — those are the website forms vs. internal CRM forms.

4. **Image CDN extraction:** GHL serves images via `images.leadconnectorhq.com/image/.../u_<actual-CDN-URL>`. Strip the proxy prefix to get the source URL on `assets.cdn.filesafe.space`.

5. **Headless audit timing:** 4-5 second wait after navigation is the sweet spot for JS hydration. Less misses widgets; more wastes time.

6. **Reference categorization:** Always include ONE counter-example (what NOT to do) — sharpens the brief faster than 10 positive references alone.

7. **Tier-tiered shipping:** Polish (Tier 1, 1 day) → Best-in-class (Tier 2, 3-5 days) → Award-grade (Tier 3, 3-6 weeks). Deploy each tier to a preview URL before moving up.

---

## SEO + GEO + AIO + LLMO + AEO — the 5-discipline discoverability framework

Every site built by Stack 13 must ship optimized for **all five** discovery surfaces from day one, then maintain that posture with an ongoing-strategy skill.

### What each acronym actually optimizes for

| Discipline | Target surface | What changes |
|---|---|---|
| **SEO** — Search Engine Optimization | Google, Bing, DuckDuckGo result pages | Crawlability, indexable HTML, metadata, sitemap, canonical, page speed, internal linking, backlinks |
| **GEO** — Generative Engine Optimization | Google AI Overviews, SearchGPT, Bing Chat, Brave AI | Crawler-allowed for `Google-Extended` / `ClaudeBot` / etc, citable structured facts, schema.org, E-E-A-T signals |
| **AIO** — AI Optimization | Broad umbrella for AI-driven discovery | All of GEO + LLMO + AEO; emphasis on machine-readable content, llms.txt, FAQ schema |
| **LLMO** — Large Language Model Optimization | LLM training data and zero-shot answers (Claude, GPT, Gemini) | Memorable canonical facts, knowledge-graph entities (Schema.org Person, sameAs to authoritative profiles), Wikipedia/Wikidata/Crunchbase presence |
| **AEO** — Answer Engine Optimization | Perplexity, You.com, Brave Search, AI assistants | Direct-answer paragraphs, FAQ schema, HowTo schema, "best in class" citations, clean H2/H3 structure |

### Initial-pass checklist (`web:optimize-discoverability`)

What the skill applies on every site, day-one:

1. **HTML / Meta foundation**
   - Semantic landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
   - One `<h1>` per page, proper heading hierarchy
   - Descriptive `alt` text on every image
   - `lang` attribute on `<html>`
   - Canonical URL meta + `<link rel="canonical">`
   - Complete Open Graph + Twitter Card meta
   - Page-level `<title>` template + descriptions
2. **`/robots.txt`** — explicitly allow major AI crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `anthropic-ai`, `CCBot`, `Bytespider`, `Applebot-Extended`). Sitemap + host directives.
3. **`/sitemap.xml`** — auto-generated from routes
4. **`/llms.txt`** — the "for AI eyes" markdown brief: who the person is, credentials with verification URLs, ventures with URLs, expertise topics, contact, booking links. Drives LLMO + AEO.
5. **JSON-LD `@graph`** — at minimum:
   - `Person` (name, alternateName, jobTitle, image, address, telephone, sameAs[], hasCredential[], knowsAbout[])
   - `ProfessionalService` / `FinancialService` / `LocalBusiness` for the practice
   - `WebSite` (publisher → Person)
   - Domain-specific types (`RadioSeries`, `NGO`, `Book`, `Course`, `PodcastSeries`, `Event` etc.)
   - **The sameAs array is the LLM identity anchor** — link to every authoritative profile (LinkedIn, credential verification pages, FPA/CFP Board profiles, Wikipedia/Wikidata if available)
6. **E-E-A-T signals** (Expertise, Experience, Authoritativeness, Trustworthiness):
   - Credentials with **outbound links to the credentialing body's verification page** for that person
   - Real business info (address, phone) — surface on every page or in JSON-LD
   - Awards and recognition surfaced
   - Author bylines with credentials on any content
7. **Performance** — Vercel image optimization, font preload, lazy-load below-fold images, Lighthouse 95+
8. **Local SEO** (when applicable) — `LocalBusiness` schema, Google Business Profile linked via sameAs
9. **Page-1 direct answers** — for any FAQ-style content, add `FAQPage` schema. AEO platforms cite these heavily.

### Ongoing-strategy cadence (`web:maintain-discoverability`)

Skill that runs on a recurring basis (e.g., monthly):

1. **Search Console + Bing Webmaster** — pull query/click data, identify rising queries to write content for
2. **AI-mention monitoring** — query Perplexity / SearchGPT / Google AI Overviews for the person's name and topics; verify the site is being cited; identify gaps where competitors are cited but we're not
3. **Schema audit** — re-validate JSON-LD against Schema.org changes, add new types as the person's work expands (e.g., new Book, new Course)
4. **Content velocity** — at least one cite-worthy long-form piece per month; tag with topic taxonomy in JSON-LD
5. **Backlink growth** — track Authoritative Domain Rating; pursue podcast appearances and guest posts (each one becomes a `sameAs` candidate)
6. **Refresh `/llms.txt` quarterly** — accurate biz info, current ventures, current credentials
7. **Knowledge graph hygiene** — Wikidata entry maintenance; Crunchbase profile; Muck Rack profile for journalists; podcast directory profiles
8. **Real-world citations** — speaking gigs, podcast appearances, press mentions — each gets a structured `mention` entry

### Reusable artifact templates (extract these for the skill)

After kurtisbaker.com ships, the following files become skill templates parameterized by the input profile:

- `app/components/JsonLd.tsx` — Person + Service @graph
- `app/robots.ts` — AI crawler allow-list
- `app/sitemap.ts`
- `public/llms.txt` — Markdown identity brief
- Layout-level `metadata` object — keywords, alternates, robots config

The skill's input parameters that drive all five files:
- Person identity block (name, title, image, address, phone, social URLs)
- Credential list with verification URLs
- Venture portfolio
- Topic expertise list
- Office / business info (for LocalBusiness schema)

---

## Privacy & legal (every site ships with this)

Every site Stack 13 builds must include, by default:

1. **Privacy Policy page** (`/privacy`) — covers: info collected, how used, **SMS/text-messaging consent + STOP/HELP opt-out + "not shared with third parties" carve-out** (required for A2P 10DLC / carrier approval), cookies, data sharing with processors, retention, security, children's privacy, contact, effective date. Footer link on every page.
2. **SMS consent disclosure on every lead form** — visible TCPA-style authorization text adjacent to the form: who's contacting, channels (phone/email/SMS), "msg & data rates may apply," "msg frequency varies," "reply STOP to opt out," "consent not a condition of purchase," link to Privacy Policy. NOTE: the actual opt-in checkbox should also live IN the CRM form (GHL) — the on-page disclosure complements it; flag a task to confirm the checkbox exists in the form builder.
3. **Terms of Service page** (`/terms`) — recommended; add for sites taking payments or with memberships.
4. **Legal-review flag** — generated policies are solid templates but must be reviewed by counsel for the client's jurisdiction/industry (especially regulated ones like financial advisors). The skill states this explicitly in the page footer + handoff notes.
5. **Native-path registration** — any new app-served route (e.g. `/privacy`, `/terms`) must be added to the proxy/middleware `NATIVE_PATHS` so the catch-all redirect doesn't capture it.

## QC & monitoring (the `web:qc` + `web:monitor` skills)

Two QC layers, both shipped with every site:

### Layer 1 — Click-through checklist (`docs/qc-checklist.md`)
A human-readable table of **every link and button** on the site with its expected destination, grouped by section (nav, hero, credentials, companies, about, media, contact, footer, shortcuts, chat, optimization artifacts). Lets the owner (or QA) click through and tick each one. Generated from the same data that drives the site, so it never drifts.

### Layer 2 — Automated link checker (`scripts/qc-links.mjs`)
A zero-dependency Node script (uses global `fetch`) that:
- Crawls all app pages, extracts every `<a href>`
- Verifies asset routes (`robots.txt`, `sitemap.xml`, `llms.txt`, `/privacy`) return 2xx
- Verifies booking/named shortcuts **301 to the expected target** (substring match)
- Confirms critical CTAs (booking, form, show, ventures) are present in markup
- Classifies internal vs external; **internal failures + shortcut mismatches are fatal (exit 1)**, external failures are warnings (bot-blocking is common)
- Run: `node scripts/qc-links.mjs [baseUrl]` (defaults to env `QC_BASE_URL`)

### Layer 3 — Periodic CI (`.github/workflows/qc.yml`)
GitHub Action that runs the link checker:
- **Weekly** (cron), on **every push to main**, and **on demand** (`workflow_dispatch`)
- Fails → GitHub notifies → broken links caught before a visitor finds them
- `QC_BASE_URL` env points to the live domain (vercel alias pre-cutover, apex post-cutover)
- This is the "set up a periodic QC to make sure the site is still working" requirement — runs independent of anyone's machine being on.

**Skill extraction:** `qc-links.mjs`, `qc-checklist.md`, and `qc.yml` are all parameterized templates driven by the site's link inventory (CTAs, ventures, shortcuts, asset routes). The skill generates all three from the same config object that builds the site, so the QC always matches what was actually built.

**Future monitoring upgrades (Tier 2+):** uptime/SSL/Core-Web-Vitals monitoring (e.g. Vercel monitoring, UptimeRobot, or a Lighthouse-CI action), broken-redirect alerts, and the AI-mention monitoring already documented in the optimization section.

## Open extraction questions

- How do we make the reference research category-aware? (User says "I'm a CFP" → skill knows which top advisor sites to visit)
- How do we handle non-GHL backends? (Calendly, HubSpot, Webflow forms, etc.)
- Should the skill detect the right *tier* recommendation automatically based on brand maturity?
- Where do we draw the line between "skill auto-decides" vs. "skill asks the operator"?

These get answered as we build the kurtisbaker.com case through to Tier 3.
