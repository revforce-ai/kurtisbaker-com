# CWMI Offer Stack — Rollout, Testing & Go-To-Market Plan

**Companion to:** `docs/cwmi-offer-stack.md`
**Scope:** Where to host, how to roll out, how to test each part against the
competition and best practices, how to generate leads, and how to close sales.

> ⚠️ Same compliance reality as the offer stack: CWMI is a **state-registered
> RIA (New Jersey Bureau of Securities)** today (AUM < $100M), planning an **SEC**
> transition in ~12–24 months as this initiative scales. The SEC Marketing Rule
> doesn't technically bind a state adviser yet, but NJ advertising rules + the
> Advisers Act **§206 anti-fraud** provisions do — and we **build to the SEC
> standard now** so nothing breaks at the threshold. Anything that drives to
> advisory services can be deemed an "advertisement." Brand separation (below)
> reduces risk but does **not** remove the need for compliance review. See §7.

---

## 0. TL;DR — the recommendation

**Run a two-brand funnel, not a one-site funnel.**

| Layer | Domain | Job | Why |
|---|---|---|---|
| **Top of funnel** (attract + capture + book) | **FreedomReadyBusiness.com** | Lead gen, the *Freedom Readiness Audit™* offer, content, community | "Freedom" is the emotional hook of the whole offer; FRB is a brand, not a regulated RIA, so it has marketing latitude for Brunson-style funnels |
| **Bottom of funnel** (advise + disclose + close + manage) | **CWMI.us** | The paid engagement, Form ADV/CRS, fiduciary disclosures, AUM relationship | This is the regulated RIA. The *money and the advice* live here, where the disclosures already belong |
| **Credibility hub** (trust + authority + SEO/GEO) | **kurtisbaker.com** | Bio, credentials, press, Master Your Finances, proof | Already built on Next.js/Vercel and optimized for SEO/GEO/AEO; feeds E-E-A-T into both brands |

**Why not run everything on CWMI.us?** Aggressive value-stack funnels on the
RIA's own marketing site put every headline and dollar figure under direct
Marketing-Rule scrutiny. Hosting the *top of funnel* under the FRB brand gives
creative room while keeping the regulated *close and disclosures* on CWMI —
this brand-separation is standard practice for advisor marketing.

**Tech stack recommendation (two engines):**
- **Funnel + CRM + booking + SMS/email automation → GoHighLevel (GHL).** It is
  *already* the family's stack (RevForce, `link.revforce.ai` bookings, the GHL
  chat widget, `leadconnectorhq` forms). Don't rebuild what you own. GHL gives
  pipelines, A2P 10DLC SMS, email nurture, and funnel pages in one place.
- **Brand + SEO/GEO surfaces → Next.js on Vercel** (the kurtisbaker.com pattern).
  Build the FRB brand/content pages here for speed + discoverability, and embed
  GHL forms/calendars for capture. CWMI.us can stay GHL-hosted or move to the
  same Next/Vercel pattern in a later tier.

> The pragmatic split: **GHL is the lead/sales engine; Next/Vercel is the
> shop window.** Pages render on Vercel for SEO; capture and nurture run in GHL.

---

## 1. Asset architecture (what gets built, where)

```
kurtisbaker.com  ──(authority/proof)──►  FreedomReadyBusiness.com  ──(book)──►  CWMI.us
   (Next/Vercel)                              (Next/Vercel + GHL)              (GHL/RIA)
   bio, credentials,                          Audit funnel, content,           Blueprint close,
   Master Your Finances                       webinar, community               ADV/CRS, AUM
        │                                            │                              │
        └────────────────────► GHL CRM (one pipeline, one source of truth) ◄────────┘
```

**Build list, in order:**
1. **FRB lead funnel** — landing page → Freedom Readiness Audit opt-in →
   booking → confirmation → nurture sequence.
2. **GHL pipeline** — stages, automations, A2P 10DLC SMS registration, email
   sequences, lead-source tracking (UTMs).
3. **CWMI.us "Blueprint" page** — the core-offer present + disclosures +
   ADV/CRS links + the Clarity Guarantee.
4. **Webinar/workshop asset** — the "Perfect Webinar" vehicle for the stack
   (see §5).
5. **Tracking** — analytics + call tracking + attribution from ad → lead →
   booked → closed.

---

## 2. Rollout — phased (crawl → walk → run)

### Phase 0 — Foundation (Weeks 1–3)
- Confirm real fee structure + substantiate/relabel all value figures (offer
  stack §7, §9).
- **Compliance + legal sign-off** on all copy, the guarantee, and the funnel.
- Register/verify A2P 10DLC in GHL for SMS; confirm SMS consent checkbox lives
  in the GHL form (per the playbook's compliance note).
- Stand up GHL pipeline, UTMs, analytics, call tracking.
- Build FRB landing + booking + nurture; build CWMI Blueprint page.
- **Exit criteria:** every link/CTA passes a QC click-through (reuse the
  `qc-links.mjs` pattern); compliance signed; tracking fires end-to-end.

### Phase 1 — Pilot / soft launch (Weeks 4–6)
- Drive **warm traffic only**: Kurt's email list, LinkedIn network, Master Your
  Finances audience, existing referral partners.
- Goal: validate the funnel converts and the two-call close works *before*
  spending on ads. Target ~15–25 booked Audits.
- Manually review every booked call; tighten the script and the Blueprint
  present from real objections.
- **Exit criteria:** Audit → Blueprint show rate and Blueprint → close rate
  hit minimum viable thresholds (see §6 KPIs); at least 1–3 closed engagements.

### Phase 2 — Organic scale (Weeks 7–14)
- Turn on the content + show + speaking engine (§4 organic).
- Add the live webinar/workshop on a recurring cadence.
- Build the referral-partner program (CPAs, attorneys, business brokers, M&A
  advisors) — the highest-quality lead source in exit planning.
- **Exit criteria:** predictable weekly booked-Audit volume from non-paid
  sources; documented cost-per-lead baseline to beat with paid.

### Phase 3 — Paid scale (Weeks 12–20, overlaps)
- LinkedIn (best B2B targeting for business owners by revenue/title/industry) +
  Meta retargeting + Google search on intent keywords ("sell my business,"
  "exit planning advisor," "business valuation").
- Start small, scale only winners (§3 testing).
- **Exit criteria:** positive unit economics — CAC < target, payback period
  within tolerance given LTV of an AUM relationship.

### Phase 4 — Optimize & expand (ongoing)
- Continuous A/B testing (§3), quarterly competitive re-benchmark (§3.3),
  expand winning channels, retire losers.

---

## 3. Testing each part — against competition AND best practices

Three testing tracks run in parallel: **(A) competitive benchmark**,
**(B) best-practice audit**, **(C) live A/B experiments.**

### 3.1 What to test, element by element

| Funnel element | Primary metric | A/B variables to test |
|---|---|---|
| Ad / hook (§3 of offer stack) | CTR, CPL | Headline angle (freedom vs. fear-of-bad-exit vs. tax), creative format |
| Landing page | Opt-in rate | Long vs. short, video vs. text, the offer name, hero proof placement |
| Audit offer | Opt-in → booked rate | "Audit" vs. "Scorecard" vs. "Readiness Review"; free vs. nominal fee |
| Booking step | Booked → showed rate | # of form fields, reminder SMS cadence, self-schedule vs. callback |
| Nurture sequence | Show rate, re-engagement | Email-only vs. email+SMS, # touches, content of touches |
| Audit (call 1) | Audit → Blueprint advance | Script structure, who runs it, leave-behind format |
| Blueprint present (call 2) | Close rate | Stack-slide order, anchor framing, guarantee wording |
| Price reveal | Close rate, avg engagement size | Fee framing, bonus stack on/off, payment structure |
| Guarantee | Close rate | Clarity Guarantee wording / prominence |

**Rule:** one variable at a time, enough volume for significance, decide on a
pre-set metric. No "it feels better" calls.

### 3.2 Best-practice audit (the checklist test)
Score every page/funnel step against an objective rubric before *and* after
launch:
- **Conversion best practices:** single clear CTA, message-match ad→page, social
  proof above the fold, friction-minimized forms, mobile-first, fast load
  (Lighthouse 95+ like the kurtisbaker.com bar), trust signals (credentials,
  verification links) visible.
- **Discoverability:** the 5-discipline framework already in the playbook
  (SEO/GEO/AIO/LLMO/AEO) — FRB content pages ship with schema, llms.txt,
  FAQ schema, AI-crawler allow-list.
- **Compliance best practices:** disclosures present, no return promises,
  testimonial disclosures, ADA/WCAG 2.2 AA.

### 3.3 Competitive benchmark (the "vs. the field" test)
Build a living benchmark deck (reuse the `web:research-references` method from
the playbook — WebSearch → headless visit → screenshot → take/leave matrix).

**Who to benchmark (representative categories — pick 2–3 real names each):**
- **Exit-planning / CEPA practices** marketing to owners (direct comps).
- **Business-owner-focused wealth firms / RIAs** (positioning, lead magnets,
  fee transparency).
- **Value-acceleration & "sell your business" advisors / M&A advisory & broker
  sites** (how they capture exit-intent leads).
- **Info-product / coaching funnels for entrepreneurs** (Brunson-style funnel
  mechanics — what converts, even outside finance).
- **One deliberate counter-example** (the playbook's rule: one "what NOT to do"
  sharpens the brief).

**For each, capture:** their offer/lead magnet, funnel steps, proof strategy,
CTA, pricing transparency, content cadence, channels they advertise on (use ad
libraries: LinkedIn Ad Library, Meta Ad Library), and SEO footprint.
**Output:** a take/leave matrix + the gaps CWMI can own (e.g., "nobody pairs
*fiduciary* + *exit planning* + *life-after-exit identity* — that's the wedge").

Re-run quarterly.

---

## 4. Lead generation

Two questions decide channel mix: **the buyer is a busy business owner**, and
**the LTV of an AUM relationship is very high** — which justifies higher CAC and
a referral-heavy, relationship-led motion.

### Organic / owned (lowest CAC, highest trust — start here)
- **Master Your Finances radio show + podcast** — already exists; make every
  episode a lead source (CTA to the Audit, exit-planning topics, owner guests).
- **SEO/GEO content on FRB + kurtisbaker.com** — cite-worthy long-form on exit
  planning, business value drivers, "is my business sellable," owner readiness.
  Each piece carries FAQ schema (AEO) and an Audit CTA.
- **LinkedIn organic** — Kurt's profile is the asset; owner-focused posts,
  client-story carousels (compliantly), the Freedom Ready narrative.
- **Speaking / keynotes** (Kurtis Baker Speaks) — stage → workshop → Audit.
- **Email list** — nurture the existing list into Audits.

### Partnerships / referrals (highest quality — the exit-planning superpower)
- Formal **Centers-of-Influence (COI) network with CPAs, estate attorneys,
  business brokers, M&A advisors, banks** — per EPI, the advisor and attorney are
  owners' two most-trusted advisors, so this triangle is the natural engine.
- **Lead with value, don't ask for referrals** (Kitces' 3-meeting COI framework).
  CWMI's CEPA positions Kurt as the owner's transition **"quarterback"**
  coordinating the team — which itself generates referrals.
- Co-hosted workshops/webinars with partners (CPA+advisor tax session,
  attorney+advisor estate session); reciprocal referral agreements (compliant;
  document any compensation). Track referral volume *and* close rate.
  *(Sources in `docs/cwmi-competitive-benchmark.md`.)*

### Paid (scale what organic proves)
- **LinkedIn Ads** — best B2B targeting (title, company revenue, industry,
  seniority) to reach owners; lead-gen forms or to the FRB landing page.
- **Meta retargeting** — re-engage site/video visitors cheaply.
- **Google Search** — capture exit-intent keywords (high intent, higher CPC).
- **Always retarget**; never scale a paid channel until its funnel converts on
  organic traffic.

### The conversion bridge
Every channel points to **one offer**: the *Freedom Readiness Audit™* on FRB.
GHL captures, scores, routes, and nurtures. RevForce's AI receptionist "Rachel"
catches inbound calls so no lead is missed.

---

## 5. Closing sales — the two-call model

Exit/wealth engagements aren't impulse buys; close them in a relationship arc.

1. **Call 1 — The Freedom Readiness Audit (diagnose).** Deliver the front-end
   value (scorecard, wealth-at-risk, options map, one big gap). Goal isn't to
   pitch — it's to make the *Realization* undeniable and earn the second call.
   End with a clear advance to the Blueprint present.
2. **Call 2 — The Blueprint Present (prescribe + close).** Run the Brunson
   **stack slide** (offer stack §5–§7): present each layer through REP, anchor
   on the $42,200 total value, reveal the real fiduciary fee, and offer the
   **Clarity Guarantee** as risk reversal. Handle objections with the bonus
   stack (each bonus kills a named objection).
3. **Follow-up cadence** — GHL automations: recap email with the leave-behind,
   SMS reminders, a 5–7 touch nurture for "not yet" leads, and a long-term
   re-engagement track (owners often decide on a multi-month timeline).

**The Perfect-Webinar accelerator:** run a recurring live "Freedom Ready"
workshop/webinar. It does the Realization at scale, then offers the Audit (or
goes straight to a Blueprint call for hot prospects) at the end — one-to-many
top of funnel that feeds the two-call close.

**Pipeline stages (GHL):** Lead → Audit Booked → Audit Showed → Blueprint
Booked → Blueprint Showed → Proposal → Closed-Won / Closed-Lost / Nurture.
Track conversion at every stage so §3 testing has data.

---

## 6. KPIs & targets (instrument before launch)

| Stage | Metric | Watch for |
|---|---|---|
| Traffic → lead | Landing opt-in rate | Page/offer message-match |
| Lead → booked | Booking rate | Friction, follow-up speed |
| Booked → showed | Show rate | Reminder cadence quality |
| Audit → Blueprint | Advance rate | Audit quality / Realization landing |
| Blueprint → closed | Close rate | Stack/anchor/guarantee strength |
| Economics | CPL, CAC, CAC payback, LTV:CAC | Scale only when LTV:CAC is healthy |
| Quality | Avg engagement size, AUM added | Lead-source quality differences |

Set baselines in Phase 1, beat them every phase. Attribute by lead source so
budget flows to what actually closes (referrals usually win on quality).

---

## 7. Compliance guardrails (gating, not optional)

- **Current regulator: NJ Bureau of Securities** (state, AUM < $100M). Follow
  NJ advertising rules + Advisers Act **§206 anti-fraud** (applies to all
  advisers) now; **build to the SEC Marketing Rule standard** so the funnel
  survives the planned SEC transition without a rebuild.
- Marketing that promotes advisory services can be an **advertisement** **even
  on FRB** — brand separation lowers but doesn't remove the obligation.
  Compliance reviews the funnel end to end.
- **No performance/return promises** anywhere. Guarantee process/experience only
  (the Clarity Guarantee).
- **Testimonials/endorsements:** disclose client status, compensation, conflicts
  — clear and prominent.
- **Substantiate every value figure** or label illustrative; no fictitious
  discounts.
- **Required on the close surface (CWMI.us):** "not investment/tax/legal advice,"
  **Form ADV (2A/2B)** link + firm **IAPD** link, fiduciary statement. (Form CRS
  attaches at SEC registration — add it then unless NJ requires sooner.)
- **SMS/A2P 10DLC:** consent checkbox in the GHL form + STOP/HELP + privacy
  carve-out.
- **ADA/WCAG 2.2 AA** on every page.
- **Legal counsel sign-off** before any public launch and before paid spend.

---

## 8. Decision summary

- **Host lead gen on FreedomReadyBusiness.com**; **close + manage on CWMI.us**;
  **kurtisbaker.com is the authority hub.** One GHL CRM behind all three.
- **Engines:** GHL (funnel/CRM/booking/SMS/email) + Next.js/Vercel (brand/SEO).
- **Sequence:** foundation+compliance → warm pilot → organic scale → paid scale
  → optimize.
- **Lead gen priority:** show/podcast + content + LinkedIn + **referral partners**
  first; paid only after the funnel proves out organically.
- **Close:** two-call model (Audit → Blueprint stack-slide present), Clarity
  Guarantee, GHL nurture; webinar as the one-to-many accelerator.
- **Test:** competitive benchmark + best-practice audit + one-variable A/B,
  instrumented stage-by-stage, re-benchmarked quarterly.
- **The North-Star milestone:** this initiative's success *is* the SEC
  transition — crossing **$100M AUM** moves CWMI from NJ state registration to
  SEC. Track AUM-added as the headline KPI, and trigger the SEC-registration
  workstream (Form ADV refiling via IARD, Form CRS, Marketing-Rule re-audit of
  every public asset) as AUM approaches the threshold so registration is ready,
  not reactive.

*All figures and claims pending CWMI confirmation and compliance/legal review.
Regulatory status: NJ Bureau of Securities (state) today; SEC transition planned
at the $100M AUM threshold.*
