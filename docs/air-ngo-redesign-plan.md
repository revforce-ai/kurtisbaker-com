# Attitudes In Reverse® (air.ngo) — Website Redesign & Growth Plan

**Prepared for:** AIR Board
**Date:** 2026-06-13
**Goal:** Turn air.ngo from an aging brochure site into the **best youth
mental-health and suicide-prevention website in the country** — and into the
operating anchor that makes AIR a sustainable, growing organization.

**Companion documents**
- `air-ngo-qc-report.md` — quality-control audit of the current site.
- **Live prototype:** the `/air-sandbox` route in this repo, deployed to the
  branch's preview URL (the "temporary link"). It demonstrates the Tier-1/2
  direction with real AIR content. See §8.

---

## 0. The one-paragraph version (for the meeting)

AIR has a world-class mission, a powerful founding story, a quarter-million
students of proof, and a suite of trademarked programs — sitting inside a dated
website that hides all of it, doesn't lead with crisis resources, and doesn't
make it easy to donate. We propose a **three-tier rollout**: **Tier 1** (days)
fixes the urgent, high-impact basics and ships a redesigned homepage; **Tier 2**
(weeks) builds the best-in-class content engine, donation flow, and program
funnels; **Tier 3** (months) produces an award-grade, story-driven experience
and the systems that make the site a self-sustaining engine for outreach,
donations, and volunteers. A working prototype is ready to show today.

---

## 1. North Star

**Hopeful, human, trustworthy, and urgent — without ever feeling clinical or
heavy.** The site should make a grieving parent, an anxious teenager, a
principal, and a potential major donor each feel "this is for me, and I know
exactly what to do next."

Three feelings, in order:
1. **You are not alone, and help is right here.** (Crisis-first, always.)
2. **This works, and it's real.** (Proof, story, programs.)
3. **You can be part of it.** (Donate / bring AIR to a school / volunteer.)

Tone target: **charity: water's clarity + The Trevor Project's warmth + JED's
credibility.**

---

## 2. What the website is *for* (its jobs)

A best-in-class nonprofit site is not a brochure — it's an operating system with
four audiences and four jobs:

| Audience | What they need | The site's job |
|---|---|---|
| **Youth / families in distress** | Immediate help, no judgment | Crisis resources on every page; "get help now" path in one tap |
| **Schools & educators (existing + new "clients")** | Proof, logistics, an easy ask | "Bring AIR to your school" funnel: programs, outcomes, request form, follow-up nurture |
| **Donors (one-time, recurring, major, corporate)** | Trust, emotion, frictionless giving | Story → impact → donate; recurring giving; sponsor/Champion of Hope tiers |
| **Volunteers (incl. therapy-dog handlers)** | A clear way in | Volunteer + dog-certification funnels feeding the CRM |

**The funnel mindset (hooks → nurture → action):**
- **Hooks** — content people search for and share: "warning signs in teens,"
  "how to talk to your child about suicide," AIR Dogs stories, the toolkit. Each
  hook captures an email (newsletter, free resource download).
- **Nurture** — automated email/SMS sequences educate, build trust, and ask:
  *new subscriber → story of impact → soft donate ask → event invite → recurring
  donor*. Schools get a parallel track toward booking a program.
- **Action** — donate, register, request a program, volunteer, sponsor.

This is how the site makes AIR **sustainable**: it continuously converts
strangers into subscribers, subscribers into supporters, and supporters into
recurring donors and program hosts — on autopilot.

---

## 3. Reference matrix — best-in-class comps (what we steal / leave)

| Site | Steal | Leave |
|---|---|---|
| **charity: water** | Radical clarity; donation-first; "100% model" trust device; cinematic story | Single-program simplicity (AIR has many programs) |
| **The Trevor Project** | Crisis-first design; "Get Help Now" omnipresent; warm, youth-safe tone | — |
| **JED Foundation** | Credibility, research framing, school/parent resource hubs | Slightly corporate density |
| **To Write Love on Her Arms** | Movement/brand energy; story as product; merch as awareness | — |
| **988 / Vibrant** | Unmissable crisis access patterns; accessibility discipline | Government plainness |
| **NAMI** | Resource library depth; "find help near you" | Dated UI in places |
| **Crisis Text Line** | Frictionless first action; data-driven impact | — |
| **Movember** | Campaign + recurring fundraising mechanics; peer fundraising | Male-health specificity |
| **Active Minds** | Youth/campus chapter model; youth-led voice | — |
| **St. Jude** | Emotional major-gift storytelling; monthly "Partner in Hope" | Scale/budget |

**Pattern map — what every great nonprofit site does:**
1. Crisis/help access on every page.
2. Donate is the most prominent, persistent action.
3. Impact proof above the fold (numbers + faces).
4. One emotional through-line (the story).
5. A single clear action per page.
6. A content engine that earns search traffic and email signups.
7. Recurring giving made effortless.
8. Accessibility and mobile treated as non-negotiable.

---

## 4. Three-tier rollout

### Tier 1 — Fix the urgent basics + ship a new homepage (days)

**Goal:** Stop the bleeding and prove the direction. Most of this is in the
`/air-sandbox` prototype already.

- [ ] **Site-wide crisis bar** — 988 + Text HOME to 741741 on every page.
- [ ] **Sticky, high-contrast Donate button** in the header everywhere.
- [ ] **New homepage**: hero with the mission line + dual CTA (Donate / Bring
      AIR to your school) → impact stat band → mission → programs grid →
      founding story → get-involved → events → crisis-aware footer.
- [ ] **Flatten navigation** to: Mission · Programs · Our Story · Get Involved ·
      Events · News.
- [ ] **Kill the legacy `host.air.ngo`** (noindex + 301 to canonical).
- [ ] **Unblock legitimate crawlers + AI agents** (fix the 403; add robots.txt +
      llms.txt).
- [ ] **Baseline analytics** + donation-conversion tracking.
- [ ] Mobile QA of the donate flow end to end.

**Stack:** Next.js + Tailwind on Vercel (same proven stack as the rest of the
portfolio), or a hardened WordPress refresh if the team prefers to keep the
current CMS short-term. Recommendation: **rebuild on the modern stack** — it's
faster, cheaper to host, more secure, and is what the prototype already uses.

### Tier 2 — Best-in-class content + conversion engine (weeks)

**Goal:** The site people screenshot and schools/donors trust. Build the
machine that grows AIR.

- [ ] **Donation platform** done right — one-time + **recurring giving**,
      suggested amounts tied to impact ("$50 = one classroom reached"), Apple/
      Google Pay, tribute/memorial gifts, employer matching. (Givebutter, Donorbox,
      or Stripe-based.)
- [ ] **"Bring AIR to your school" funnel** — dedicated landing page per program,
      outcomes/testimonials, a smart request form that routes to the CRM and
      kicks off an educator nurture sequence.
- [ ] **Program pages** (Coming Up for AIR®, AIR Dogs®, In Their Shoes®, etc.)
      each with story, outcomes, photos/video, FAQ, and one clear CTA.
- [ ] **Resource hub / blog as a content engine** — search-optimized articles on
      the topics families and educators actually search (warning signs, how to
      talk to teens, supporting a friend). Every resource captures an email.
- [ ] **Email/SMS nurture + CRM** — newsletter signup everywhere; automated
      welcome → impact → donate → event sequences; school and volunteer tracks.
- [ ] **Events system** — Walk/Run, Taste of Hope, Champion of Hope: registration,
      ticketing, **peer-to-peer fundraising** pages.
- [ ] **Volunteer + therapy-dog certification funnels** feeding the CRM.
- [ ] **Structured data** (Organization/NGO, Event, FAQ) + full on-page SEO.
- [ ] **Analytics maturity** — funnels, heatmaps/session replay, donation
      attribution.

### Tier 3 — Award-grade + self-sustaining systems (months)

**Goal:** A site that wins recognition *and* runs the organization's growth.

- [ ] **Story-driven, scroll-cinematic homepage** — Kenny's story and AIR's
      origin unfold as you scroll; impact animates in. (NYT/Pudding-grade
      scrollytelling.)
- [ ] **Professional photo/video** — real students, real therapy dogs, real
      schools (with consent). Authentic imagery beats stock every time.
- [ ] **Impact dashboard** — a living, public "students reached this year /
      schools served / dogs certified" counter. Transparency builds donor trust.
- [ ] **Interactive program map** — where AIR has been, where it's going.
- [ ] **AI "Ask AIR" assistant (safety-first)** — answers parent/educator
      questions, always surfaces crisis resources, never gives clinical advice,
      routes to booking/donating. Anthropic-powered, tightly guard-railed.
- [ ] **Recurring-giving + major-gift program** — "Partner in Hope"-style monthly
      donor tier with its own onboarding and stewardship.
- [ ] **Grant-ready impact reporting** — the site generates the data and stories
      that strengthen grant applications.
- [ ] **Awards submissions** — Awwwards, Webby (Nonprofit), CSS Design Awards.
      Recognition itself becomes earned media and donor confidence.

---

## 5. SEO + GEO (Generative Engine Optimization)

Discovery for "where can my teen get help" is moving from Google links to AI
answers. AIR must win **both**.

**SEO (traditional search):**
- Fix canonicalization; eliminate the legacy host; enforce HTTPS + one domain.
- Keyword-intentional titles/descriptions on every program and resource page.
- A content engine targeting high-intent, high-empathy queries (warning signs,
  how to talk to a teen, supporting a grieving family, therapy dogs in schools).
- Local SEO (NJ + each state served): Google Business Profile, location pages.
- Technical: fast LCP, clean sitemap, image alt text, internal linking.

**GEO (AI answer engines — ChatGPT, Claude, Perplexity, Google AI Overviews):**
- **Stop blocking AI crawlers** (the current 403 likely hides AIR from them).
- Publish `llms.txt` — a plain-language brief on who AIR is, programs, crisis
  resources, and how to help.
- **Answer-first content** — clear Q&A blocks and FAQ schema so AI engines can
  quote AIR directly and cite it as the authority on youth mental health in NJ.
- Structured data (Organization/NGO, FAQ, Event) so machines parse AIR
  correctly.
- Consistent NAP (name/address/phone) and authoritative external profiles
  (GuideStar/Candid, Charity Navigator) reinforcing entity trust.

Goal: when someone asks an AI "my teenager is struggling, who can help in New
Jersey?", AIR is in the answer — with the crisis line and a path to its
programs.

---

## 6. Making AIR sustainable (the site as the anchor)

The redesign is a means to an end: **a self-sustaining, growing AIR.**

- **Recurring revenue** — monthly donors are the financial backbone. The site
  makes monthly giving the default, with impact framing and easy management.
- **Owned audience** — every visitor is an email/SMS capture opportunity. AIR
  builds a list it owns (not rented from social platforms), nurtured to action.
- **Existing-client retention** — schools that have hosted AIR get re-engaged
  automatically (re-book, refer, sponsor, share data).
- **New-client outreach** — content + GEO/SEO pull new schools and families in;
  the school funnel converts them; nurture closes the booking.
- **Donor stewardship** — automated thank-yous, impact updates, and tribute
  giving turn one-time donors into recurring supporters and major gifts.
- **Events as engines** — peer-to-peer fundraising turns supporters into
  fundraisers, multiplying reach at near-zero cost.
- **Grant leverage** — the impact dashboard and stories feed stronger grant
  applications and corporate sponsorships.

**Operating loop:** Content/SEO/GEO bring people in → the site captures and
nurtures them → they donate, book, or volunteer → their participation creates
stories and data → which fuel more content, grants, and trust → which bring more
people in.

---

## 7. Measurement — KPIs that matter

- **Mission:** students reached, schools served, therapy-dog teams certified.
- **Acquisition:** organic traffic, AI-answer citations, email list growth.
- **Conversion:** donation rate, **recurring-donor count**, avg gift, school
  program requests, volunteer signups.
- **Engagement:** newsletter open/click, event registrations, P2P funds raised.
- **Health:** Core Web Vitals (LCP < 2.5s), accessibility score, mobile
  conversion.

Set a baseline in Tier 1; review monthly.

---

## 8. The temporary link (sandbox)

A working prototype lives at **`/air-sandbox`** in this repository. Pushing this
branch produces a Vercel **preview URL** — that preview is the temporary,
shareable link for the board (e.g. `https://<branch>-kurtisbaker-com.vercel.app/air-sandbox`).

It demonstrates, with real AIR content:
- The always-on **crisis bar** (988 + Crisis Text Line).
- A **mission-first hero** with Donate / Bring-AIR-to-your-school CTAs.
- The **impact stat band**, **programs grid**, **founding-story** section, and a
  **get-involved + events** section with a persistent donate path.
- A hopeful, modern visual language distinct from the current WordPress theme.

It is intentionally marked `noindex` and labeled a prototype. Content and figures
must be confirmed by the AIR team before anything goes live.

> To host it on a dedicated temporary domain (e.g. `preview.air.ngo` or a
> Vercel project), we attach the branch to a Vercel project and point a subdomain
> at it — same pattern documented in `apex-cutover-plan.md` for the other sites.

---

## 9. Recommended decisions for the board

1. **Approve the modern-stack rebuild** (vs. patching WordPress).
2. **Approve Tier 1 immediately** — it's low-cost, high-impact, mostly built.
3. **Pick a donation platform** for recurring giving (Givebutter / Donorbox /
   Stripe).
4. **Pick a CRM / email platform** for nurture (the portfolio already uses GHL;
   reusing it is the fast path).
5. **Authorize photo/video capture** at upcoming programs/events for Tier 2–3.
6. **Confirm impact numbers and program copy** for accuracy before launch.

## 10. Suggested timeline

| Phase | Duration | Output |
|---|---|---|
| Tier 1 | ~1–2 weeks | New homepage live, crisis bar, donate CTA, legacy host killed, crawlers unblocked, analytics baseline |
| Tier 2 | ~4–8 weeks | Donation engine, school funnel, program pages, content/resource hub, nurture automations, events |
| Tier 3 | ~2–4 months | Scrollytelling story, photo/video, impact dashboard, Ask-AIR assistant, recurring/major-gift program, awards submissions |

---

*Next step: walk the board through the `/air-sandbox` preview, agree the Tier-1
scope, and confirm the donation + CRM platform choices so Tier 2 can begin.*
