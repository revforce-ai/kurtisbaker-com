# air.ngo — Quality-Control Review (existing site)

**Prepared for:** AIR Board review
**Date:** 2026-06-13
**Subject:** Current live site at `https://www.air.ngo` (WordPress)
**Method:** External audit — public pages, search-index footprint, and crawler
behavior. A full internal audit (WP admin, plugins, hosting, analytics) should
follow once we have login access.

> Note on access: the live site returned **HTTP 403 Forbidden** to every
> automated/headless request we made. That is itself a finding (see §4) and it
> limited this pass to publicly indexed content. Treat the page-by-page click
> test as the next step once the team can screen-share or grant access.

---

## 1. What AIR has going for it (keep these)

- **A real, differentiated mission** with a powerful founding story (Kenny
  Baker, 2010). This is the single biggest asset and the current site
  under-uses it.
- **Genuine proof of impact** — 250,000+ students since 2011, 75+ certified
  therapy-dog teams, programs across 6 states. These numbers belong above the
  fold; today they're buried.
- **A deep, ownable program portfolio** — Coming Up for AIR®, AIR Dogs: Paws
  for Minds™, Mental Health is in the AIR®, In Their Shoes®, Miki & Friends,
  Start THE Conversation. Most nonprofits have one program; AIR has a suite.
- **Trademarked brand language** already in use (the ® and ™ marks signal a
  mature brand).
- **Active content history** — press releases, blog, videos, event coverage.
  There is a real publishing habit to build on.

## 2. Structure & UX findings

| # | Finding | Severity | Recommendation |
|---|---|---|---|
| 2.1 | **No persistent crisis resource.** A youth suicide-prevention site must surface 988 / Crisis Text Line on every page. Not visible in the public nav. | 🔴 Critical | Add an always-visible crisis bar (988 + text 741741) site-wide. This is both ethically essential and a trust signal. |
| 2.2 | **Donate is not a dominant, persistent CTA.** For a donation-dependent nonprofit, "Donate" should be a high-contrast button in the header on every page. | 🔴 Critical | Sticky "Donate" button in nav; repeated contextual donate asks after impact/story sections. |
| 2.3 | **Impact numbers are not on the homepage hero.** The strongest credibility signal is hidden. | 🟠 High | Lead with a stat band (students reached, dog teams, states, % free). |
| 2.4 | **Information architecture is sprawling** — many long, dated URL slugs (e.g. `/contact-us-air-programs/`, individual press-release pages in the top nav space). Hard to find "Programs" and "Donate" quickly. | 🟠 High | Flatten to: Mission · Programs · Our Story · Get Involved · Events · News. Consolidate program pages under `/programs/*`. |
| 2.5 | **Founding story is not the spine of the site.** The most moving, most shareable asset is treated as an "About" sub-page. | 🟠 High | Make the story a first-class homepage section that drives the emotional case for donating/volunteering. |
| 2.6 | **Design reads as a dated WordPress theme** — template look, inconsistent typography, stock styling. Doesn't match the seriousness of the mission. | 🟡 Medium | Rebuild on the modern stack (see redesign plan) for a best-in-class feel. |
| 2.7 | **Mobile experience needs verification.** WordPress themes of this era often degrade on phones, where most youth/parent traffic lands. | 🟡 Medium | Mobile-first rebuild; verify tap targets, font sizes, donate flow on phone. |
| 2.8 | **CTAs are diffuse.** Many programs, no clear "what do you want me to do next" per page. | 🟡 Medium | One primary action per page (Donate, Request a program, Volunteer, Register for event). |

## 3. SEO / content findings

| # | Finding | Severity | Recommendation |
|---|---|---|---|
| 3.1 | **Duplicate/legacy host indexed.** `http://www.host.air.ngo/` appears in search results — a staging or pre-migration host still public and indexable. This splits ranking signals and can leak an unmaintained copy. | 🔴 Critical | Take `host.air.ngo` offline or `noindex` + 301 it to the canonical site. |
| 3.2 | **Stale assets ranking.** Old PDFs (e.g. a 2017 `wp-content/uploads/.../LGBTQ-Youth.pdf`) surface in search — useful content, but unbranded, undated, and outside the site's nav. | 🟡 Medium | Convert evergreen PDFs into real, updated resource pages; keep PDFs as downloads, not landing pages. |
| 3.3 | **HTTP vs HTTPS / www canonicalization** needs confirming given the legacy host. | 🟠 High | Enforce one canonical (`https://www.air.ngo`), 301 all variants, set canonical tags. |
| 3.4 | **Thin metadata likely.** Press-release-style titles dominate the index; core program/donate pages need keyword-intentional titles + descriptions. | 🟡 Medium | Rewrite titles/descriptions around searcher intent (see redesign plan §SEO/GEO). |
| 3.5 | **No structured data verified** (NGO/Organization, Event, FAQ schema). | 🟡 Medium | Add `NGO`/`Organization`, `Event`, and `FAQPage` JSON-LD. |

## 4. Technical / crawler findings

| # | Finding | Severity | Recommendation |
|---|---|---|---|
| 4.1 | **Server returns 403 to non-browser requests.** Likely an aggressive security/CDN/WAF or bot plugin. This blocks legitimate crawlers and, critically, **AI assistants** (ChatGPT, Claude, Perplexity, Google AI Overviews) that increasingly drive "where can my teen get help" discovery. | 🟠 High | Allow reputable crawlers and AI user-agents; verify Googlebot is not blocked; add a permissive `robots.txt` + `llms.txt`. (See GEO in the plan.) |
| 4.2 | **Performance unknown but suspected slow** — typical aging WordPress + plugins + uploads. | 🟡 Medium | Baseline with PageSpeed/Lighthouse; target LCP < 2.5s. The rebuild stack is fast by default. |
| 4.3 | **Plugin / security surface unaudited.** WordPress sites accrue plugin and update debt; a nonprofit handling donations needs this checked. | 🟠 High | Audit plugins, WP/PHP versions, backups, and the donation processor's security once we have admin access. |
| 4.4 | **Analytics & conversion tracking unverified.** Can't improve donations we can't measure. | 🟠 High | Confirm GA4 + donation conversion events; add funnel tracking in the rebuild. |

## 5. Top 10 fixes, ranked by impact-per-effort

1. Add a **site-wide crisis bar** (988 + 741741). *(Critical, trivial.)*
2. Make **Donate** a sticky, high-contrast header button site-wide.
3. Put **impact stats + founding story** on the homepage above the fold.
4. **Kill the legacy `host.air.ngo`** (noindex + 301).
5. **Unblock crawlers/AI agents** (fix the 403 for legitimate bots).
6. **Flatten the navigation** to 6 clear items with one CTA each.
7. Confirm **mobile donate flow** works end-to-end on a phone.
8. Add **Organization + Event + FAQ schema**.
9. Baseline **analytics + donation conversion tracking**.
10. Rewrite **titles/descriptions** on program and donate pages.

Items 1–3 and 6 are delivered as a working prototype at `/air-sandbox`.
The full rebuild is scoped in `air-ngo-redesign-plan.md`.
