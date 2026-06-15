# air.ngo — Quality-Control Audit

Quality control of the **current, live** Attitudes In Reverse® website, run 2026-06-15 as input to the redesign plan (`docs/air-redesign-plan.md`).

> **Method & honesty note:** air.ngo returned **HTTP 403** to automated requests, so this audit is built from search-engine indexing, the site's own indexed URL structure, public pages, and known WordPress/Divi signatures. Items are tagged **[verified]** (directly observed), **[strong signal]** (high-confidence inference from indexed evidence), or **[confirm]** (check during the hands-on audit). Nothing here is cosmetic nitpicking — each item maps to trust, findability, or sustainability.

---

## Executive summary

The current air.ngo is a **dated WordPress/Divi site that has accumulated years of technical debt.** The *content and mission are strong*; the *delivery is undermining them*. The three most urgent problems:

1. **A split brand across multiple hosts** — content lives on both `air.ngo` / `www.air.ngo` **and** a legacy `host.air.ngo` subdomain. This fractures SEO authority, confuses visitors, and risks serving stale/insecure pages. **[verified]**
2. **Duplicate and orphaned pages** — e.g. a "Volunteer" page *and* a "Volunteer Page ver 2.0," and the AIR Dogs program indexed at two different URLs. Classic duplicate-content debt. **[verified]**
3. **The site blocks automated/bot access (403)** and shows hallmarks of an unmaintained, plugin-heavy WordPress install — a performance, security, and **GEO** (AI-assistant discoverability) liability. **[verified / strong signal]**

A redesign on a modern stack (per the plan) resolves the *root cause* of most findings below at once.

---

## Findings

### A. Information architecture & content integrity

| # | Finding | Evidence | Severity | Tag |
|---|---|---|---|---|
| A1 | **Duplicate pages.** "Volunteer" (`/get-involved/volunteer/`) and "Volunteer Page ver 2.0" (`/volunteer-page-ver-2-0/`) both indexed. | Search index | High | [verified] |
| A2 | **Same program at two URLs.** AIR Dogs indexed at `/programs/air-dogs-paws-for-minds/` **and** `/air-dogs-paws-for-minds-therapy-dogs-program/`. Duplicate content splits ranking signals. | Search index | High | [verified] |
| A3 | **Legacy subdomain still live.** `host.air.ngo` serves an older WordPress instance ("Start THE Conversation…") over **http** (insecure) and refuses connections intermittently. | Indexed + connection test | High | [verified] |
| A4 | **Inconsistent canonical host.** Pages indexed under both apex `air.ngo` and `www.air.ngo`. Without a single 301-enforced canonical, authority and analytics fragment. | Search index | High | [verified] |
| A5 | **Orphan/CPT clutter.** Divi team CPT pages (`/dt_team/…`) and ad-hoc "ver 2.0" pages suggest no content-governance process. | Search index | Medium | [strong signal] |

### B. Technical / platform health

| # | Finding | Evidence | Severity | Tag |
|---|---|---|---|---|
| B1 | **Aging WordPress + Divi.** `dt_team` CPTs, duplicate "ver 2.0" pages, theme-builder patterns. Heavy, plugin-dependent, high maintenance + security surface. | URL + markup signatures | High | [strong signal] |
| B2 | **403 to non-browser clients.** Over-aggressive security plugin/WAF blocks legitimate crawlers and **AI assistants**, hurting SEO + GEO. | Direct fetch (403) | Medium-High | [verified] |
| B3 | **Mixed/insecure delivery on legacy host.** `host.air.ngo` over plain http = browser "not secure" warnings, mixed-content risk. | Connection test | High | [verified] |
| B4 | **Likely failing Core Web Vitals.** Divi + plugin stacks typically ship heavy CSS/JS; mobile performance suffers (this audience is overwhelmingly mobile). | Platform inference | Medium | [confirm] |
| B5 | **Maintenance/security debt.** Unmaintained WP installs are the #1 nonprofit breach vector; an org handling a sensitive audience can't afford a defacement. | Platform inference | High | [confirm] |

### C. Conversion, fundraising & sustainability

| # | Finding | Why it matters | Severity | Tag |
|---|---|---|---|---|
| C1 | **No obvious single, prominent "Donate" path / recurring giving.** "Donate Now" appears but the give flow and a *monthly* option are the sustainability keystone. | Predictable revenue = a durable nonprofit | High | [confirm] |
| C2 | **Weak audience routing.** No clear "Get Help / Get Involved" fork; five audiences share one undifferentiated path. | Each audience needs one obvious next step | High | [strong signal] |
| C3 | **Booking friction for schools.** "Bring AIR to your school" should be a one-click, low-friction request; current path is unclear. | Presentations are the core program + a revenue line | High | [confirm] |
| C4 | **Newsletter as the main "get involved" ask** is under-leveraged as a nurture engine (no evident journeys/segmentation). | Email is the relationship that funds the mission | Medium | [strong signal] |
| C5 | **Impact data not surfaced for donors/grants.** 70,000+ students, research validation — buried, not front-and-center. | Donor trust + grant-readiness | Medium | [strong signal] |

### D. Trust, safety & accessibility (critical for this category)

| # | Finding | Why it matters | Severity | Tag |
|---|---|---|---|---|
| D1 | **Crisis resources not persistently visible.** A suicide-prevention site should show 988 / Crisis Text Line on **every** page. | Moral obligation + best-in-class signal | **Critical** | [confirm] |
| D2 | **Accessibility likely below WCAG 2.2 AA.** Divi sites commonly fail contrast, focus order, alt text, captions. | A MH audience includes users with disabilities; also legal/ADA risk | High | [confirm] |
| D3 | **Trust signals scattered.** 501(c)(3) status, financials/transparency (Charity Navigator/Candid), privacy for a youth audience should be obvious. | Donors and parents vet before they act | Medium | [confirm] |

### E. SEO / GEO

| # | Finding | Why it matters | Severity | Tag |
|---|---|---|---|---|
| E1 | **Duplicate content + split hosts dilute SEO** (ties to A1–A4). | Competing URLs cannibalize rankings | High | [verified] |
| E2 | **403 blocking + slow pages depress crawlability and AI-assistant citation (GEO).** | Help-seekers increasingly ask AI first | Medium-High | [verified] |
| E3 | **Schema/structured data likely minimal** (no obvious NGO/FAQ/Event schema). | Rich results + entity clarity | Medium | [confirm] |
| E4 | **Entity consistency (NAP, Wikidata, profiles) unverified.** | Models and search need a consistent AIR "entity" | Medium | [confirm] |

---

## Prioritized remediation (maps to Tier 1 of the plan)

**Do this week — highest impact, lowest effort:**
1. **D1 — Add a persistent 988 / Crisis Text Line bar to every page.** (Critical; can be done today even on the current site.)
2. **A3/A4/B3 — Pick one canonical host, 301 everything else, and retire `host.air.ngo`** (archive content, then redirect). Kills the split brand and the insecure legacy host in one move.
3. **A1/A2/E1 — De-duplicate pages**; 301 the losers to canonical URLs.
4. **B2 — Loosen the WAF/security rules** so legitimate crawlers and AI assistants can read the site.
5. **C1/C3 — Make "Donate" and "Bring AIR to your school" the two unmistakable CTAs.**

**Then (Tier 1–2):**
6. **B1/B4/B5 — Migrate off WordPress/Divi** to the modern stack in the plan. This is the structural fix that prevents these problems from recurring.
7. **D2 — Full WCAG 2.2 AA accessibility pass.**
8. **E3/E4 — Add NGO + FAQ + Event schema; clean up the AIR entity** (Google Business Profile, Charity Navigator/Candid, Wikidata).
9. **C2/C4/C5 — Audience routing, impact-forward homepage, email nurture journeys.**

---

## A reusable QC harness

This repo already ships a link-checker (`scripts/qc-links.mjs`, `npm run qc`) and a GitHub Actions QC workflow for kurtisbaker.com. **Recommendation:** once AIR is on the new stack, point the same harness at air.ngo so duplicate pages, broken links, and redirect drift are caught automatically in CI — turning today's one-off audit into an always-on guardrail. See `docs/qc-checklist.md` for the existing pattern.

---

## What to verify in the hands-on audit

Because the live site blocked automated access, confirm the **[confirm]**-tagged items above with a logged-in/manual pass:
- Run Lighthouse (mobile) for real Core Web Vitals + accessibility scores (B4, D2).
- Walk the actual donation flow end-to-end; confirm whether recurring giving exists (C1).
- Inventory every published page in WP admin to size the duplicate/orphan cleanup (A5).
- Confirm WordPress/plugin versions and last-update dates for the security picture (B5).
- Verify crisis resources, privacy policy, and 501(c)(3)/transparency disclosures (D1, D3).
