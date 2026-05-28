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

## Open extraction questions

- How do we make the reference research category-aware? (User says "I'm a CFP" → skill knows which top advisor sites to visit)
- How do we handle non-GHL backends? (Calendly, HubSpot, Webflow forms, etc.)
- Should the skill detect the right *tier* recommendation automatically based on brand maturity?
- Where do we draw the line between "skill auto-decides" vs. "skill asks the operator"?

These get answered as we build the kurtisbaker.com case through to Tier 3.
