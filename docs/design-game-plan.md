# kurtisbaker.com — Design Game Plan

A staged plan to evolve the site from "polished pro" to "best-in-class" to "award-grade," shipping each tier as it's ready.

---

## North Star

**Premium, warm, trustworthy** — reads as someone you'd trust with serious money *and* want to have a beer with.

- CFP® gravitas without the corporate boredom
- Founder/operator energy without losing the advisor credibility
- Personal warmth (Tricia, Kenny's story, the radio show) without crossing into sentimentality
- Fast, fluid, modern — not a 2018 advisor template

The tone target: **Patrick O'Shaughnessy meets a top-tier RIA meets Dan Martell.**

---

## Reference Matrix — the visual vocabulary we're pulling from

Each row: what the site does, what we steal, what we leave behind.

### 1. Compound Planning — `compoundplanning.com`
**Category:** Modern wealth management

| Take | Leave |
|---|---|
| Big serif headline with a rotating-role list (Founders / Business Owners / Professionals / Retirees / Families) | The full-bleed asymmetric portrait collage — too B2C |
| "Talk to an advisor" as primary CTA, "Try the dashboard" as secondary | Their soft cream announcement banner |
| Real candid portraits, not stock photography | |
| Subtle hexagon-pattern background | |

**Lesson:** A wealth manager site can feel modern, human, and confident without losing trust signals.

### 2. Sahil Bloom — `sahilbloom.com`
**Category:** Founder/author/speaker personal brand

| Take | Leave |
|---|---|
| Full-bleed cinematic hero video (him on stage, blue-tinted) | The scroll-position dot indicator (gimmicky) |
| Big monogram "S" mark, small all-caps wordmark below it | The bestseller announcement bar at top |
| "ENTREPRENEUR \| INVESTOR \| AUTHOR" trinity | |
| Social icons top-right, clean nav | |

**Lesson:** A short video of *you in your element* (radio mic, on stage, with clients) is more powerful than any headshot. We already have radio footage — extract a 6-10 sec clip.

### 3. Dan Martell — `danmartell.com`
**Category:** Founder coach, personal brand

| Take | Leave |
|---|---|
| Full-bleed editorial photo of him in a lived-in space (couch, coffee, looking off-camera) | The all-caps Impact-style headline — too aggressive for a CFP |
| Bold, declarative headline ("HUMANITY'S BIGGEST CHEERLEADER.") | Pure dark mode without warmth |
| Pre-headline qualifier ("Author, entrepreneur, coach and…") | |

**Lesson:** A *declarative identity statement* paired with a candid photo creates instant brand. Yours might be: "Your unfair advantage in a complicated world." or similar.

### 4. Colossus / Patrick O'Shaughnessy — `joincolossus.com`
**Category:** Intellectual brand / media network

| Take | Leave |
|---|---|
| Editorial magazine layout — feels like a publication, not a service site | The wordmark-only logo lockup — overkill for a personal brand |
| Massive serif wordmark as identity anchor | |
| Hero video showing the work itself (a podcast in progress) | |
| Bottom nav: SUBSCRIBE / MAGAZINE / PODCASTS | |

**Lesson:** Master Your Finances deserves a *publication* feel — episode cards as magazine-style features, not a podcast directory.

### 5. O'Shaughnessy Ventures — `osv.llc`
**Category:** Multi-venture portfolio

| Take | Leave |
|---|---|
| Side-tab navigation listing each venture (Adventures, Books, Films, Media, Fellowships) vertically on the right | The cream/print-magazine palette doesn't fit your warmth target |
| Tab-style navigation makes a multi-business portfolio feel intentional, not scattered | The brutalist /home breadcrumb |
| Each venture gets its own colorway/identity inside the tab | |

**Lesson:** Your 7 ventures (CWMI, CWM Mortgage, Master Your Finances, KB Speaks, RevForce, Freedom Ready Business, AIR) need *spatial navigation*, not just a card grid. Consider a side-tab "Portfolio" experience.

### 6. Linear — `linear.app`
**Category:** Best-in-class product marketing

| Take | Leave |
|---|---|
| Pure dark minimalism with subtle ambient video reveal on scroll | Pure dark mode — wrong for a wealth advisor |
| Single accent (Linear's signature gradient) | |
| Zero clutter, maximum white-space discipline | |

**Lesson:** *Whitespace discipline.* Linear earns trust by never crowding the viewer. Apply this to your Pillars and Companies sections.

### 7. Wealthspire — `wealthspire.com`
**Category:** Traditional advisor — what NOT to do

| Take | Leave |
|---|---|
| Serif headline color (deep navy) | The 6-deep dropdown nav (Who We Serve, What We Do, About, News & Resources, Locations, Contact) |
| Logo with yellow accent | The Form CRS / Disclosures / Client Login top bar |
| | The dominant cookie banner blocking the hero |
| | The lifeless stock-photo hero (cropped out of frame) |

**Lesson:** Compliance-driven CFP sites all look the same. We win by being deliberately *less corporate* without losing credibility.

### 8. Vercel — `vercel.com`
**Category:** Modern minimal landing page

| Take | Leave |
|---|---|
| Subtle grid background that fades into a prism gradient | The pure-product framing |
| Bold center-aligned headline + two-button CTA (primary dark, secondary white) | |
| Clean text-only nav, "Ask AI" button as differentiator | |

**Lesson:** A simple, centered hero with the right typography and a quietly stunning background can be more powerful than complex layouts. Consider a *mesh gradient or warm prism* in the hero background.

### 9. Framer — `framer.com`
**Category:** Modern site builder

| Take | Leave |
|---|---|
| Massive bold sans-serif hero ("Build better sites, faster") | Pure black + white — needs warmth for you |
| Pre-headline event/announcement strip ("Introducing the F1 Keyboard") | |
| Below-fold logo strip preview | |

**Lesson:** Headline *scale* matters. Our current hero is 7xl on desktop — could push to 8xl with the right typography.

---

## Tier 1 — Polish (1 day, ship immediately)

**Goal:** Take the current site from 8/10 to 9.5/10. Ship to Vercel preview URL today.

### Specific changes

- [ ] **Mesh-gradient hero background** — warm cream → soft gold → soft navy radial blend behind the hero text. Subtle, not loud. (Inspired by Vercel + Compound.)
- [ ] **Add `shadcn/ui`** — replace custom buttons/cards with shadcn primitives. Better accessibility, consistent hover states, polish baked in.
- [ ] **Framer Motion scroll reveals** — every section fades and rises 12px on viewport-enter. 350ms easing. Not stagger-animated text; just clean reveals.
- [ ] **Typography sharpening** — increase hero headline to `text-8xl` on lg+, tighten leading to 0.95, optical-size axis tuned on Fraunces. Body copy stays Inter.
- [ ] **Sticky scroll progress bar** — 2px gold bar at top showing reading progress. Subtle. (Award-grade signal at zero cost.)
- [ ] **Hover micro-interactions** — company cards: 4px lift + accent border on hover. Nav links: animated underline. CTA buttons: subtle scale on hover.
- [ ] **Logo strip section** — replace one of the current section breaks with an "As featured on / Trusted by" strip showing CWMI, MYF, RevForce, AIR logos in a quiet row.
- [ ] **Better photography placement** — the headshot is great but could be paired with a second candid (radio mic, on stage) elsewhere in the page for warmth.
- [ ] **Polish copy** — sharpen the hero subhead, tighten the pillars, make the about narrative crackle. (1-hour copy pass.)

### Tier 1 stack additions

```
+ shadcn/ui (foundation components)
+ framer-motion (scroll reveals, micro-interactions)
+ lucide-react (consistent icon system)
```

### Deploy

→ `vercel deploy` after each meaningful change. Ship the preview URL.

---

## Tier 2 — Best-in-class (3–5 days)

**Goal:** People screenshot the site. LinkedIn posts about it. Stands out among CFPs, founders, and speakers.

### Specific additions

- [ ] **v0-generated premium hero variant** — generate 3 hero treatments via v0.dev, A/B select with you, build the winner. Possibly: text reveal animation, ambient radio-mic video clip behind, parallax KB monogram.
- [ ] **Animated marquee logo strip** — infinite-scroll logo lockup of your ventures and "As featured in" media (radio stations, publications).
- [ ] **Companies section reimagined** — replace card grid with a *side-tab portfolio* (inspired by OSV.LLC). Each company gets a dedicated panel with logo, story, proof points, and CTA. Hovering a tab reveals a tinted preview.
- [ ] **Master Your Finances as a magazine module** — pull recent episodes (via RSS or manual list), show as editorial-style cards with episode artwork, guest names, and one-line teasers. (Inspired by Colossus.)
- [ ] **Freedom Ready Business diagram** — a custom interactive visualization of the framework. Could be an animated flow chart, or a 3D layered model the user can rotate. Becomes the centerpiece of the value-prop section.
- [ ] **Short brand video in hero** — 6–10 second loop of you on the radio mic or at a speaking event, muted, autoplay. Adds immediate humanity. (We already have footage on YouTube.)
- [ ] **Sanity CMS for blog/articles** — visual editor for ongoing writing. Posts get full editorial styling with serif headlines, drop-caps, sidenotes.
- [ ] **PostHog + Vercel Analytics** — session replay, heatmaps, funnel tracking. See exactly what's converting.
- [ ] **"Ask Kurt" AI agent (compliance-aware)** — floating button. Visitors ask questions, an AI trained on:
  - Your public radio show transcripts
  - Your articles and talks
  - A curated FAQ document you approve
  - Strict guardrails: never offer specific advice, always recommend booking a call for personalized questions
  - Powered by Anthropic API (Claude)
  - Conversation logs flow into your GHL inbox

### Tier 2 stack additions

```
+ v0.dev (AI-collaborated hero design)
+ sanity.io (visual CMS for blog/articles)
+ posthog (analytics + session replay)
+ Anthropic API (Ask-Kurt AI agent)
+ Vercel Analytics + Speed Insights
```

### Deploy

Each major addition deploys to its own Vercel preview URL. Final cut gets pushed to apex.

---

## Tier 3 — Award-grade (3–6 weeks)

**Goal:** The site becomes a brand asset. Awwwards Site-of-the-Day or honorable mention contender. People send it to their friends as "look at this."

### Specific additions

- [ ] **Custom designer / illustrator engagement** — 2 weeks with a top freelance designer (Awwwards-tier portfolio). They produce:
  - Custom illustrations for each pillar
  - Hand-drawn Freedom Ready Business diagram
  - Branded visual language extending to social posts and presentations
- [ ] **Scroll-driven cinematic storytelling for the About section** — your story unfolds as you scroll. Kenny's photo appears. AIR's origin animates in. Master Your Finances years scroll past. Your wins and milestones reveal as a timeline. (Inspired by award-grade scrollytelling pieces in NYT, The Pudding, Apple product pages.)
- [ ] **3D animated Freedom Ready Business framework** — using React Three Fiber. The 4 pillars of the framework rotate as a 3D model. Hover any pillar to expand. Subtle, premium, *unforgettable*.
- [ ] **Brand video production** — half-day shoot with a documentary-style videographer. Captures you in the studio, in the office, with clients (with permission), with Tricia. 60-second hero film + 4 shorter cuts for sections.
- [ ] **Custom cursor + page transitions** — smooth Lenis scroll, GSAP-driven page transitions, custom cursor that grows on hover. The kind of micro-detail that separates "nice" from "remarkable."
- [ ] **Loading sequence** — branded intro animation (3 seconds on first visit, instant on return). Sets the tone.
- [ ] **Awards submissions** — Awwwards, Site Inspire, CSS Design Awards, FWA, Webby. Submission window typically 1 week of writeup and screenshots per award.

### Tier 3 stack additions

```
+ GSAP + Lenis (smooth scroll + cinematic timelines)
+ React Three Fiber (3D framework visualization)
+ Custom designer/illustrator engagement
+ Video production (1 day shoot + 1 week edit)
```

### Outcome

A site you don't just send to prospects — a site that opens doors. Speaking opportunities, podcast invitations, JV deals. The site stops being a brochure and starts being lead-gen by reputation.

---

## Decision log

| Date | Decision | Why |
|---|---|---|
| 2026-05-28 | Stack: Next.js 16 + Tailwind v4 + Vercel | Fastest, most maintainable, free hosting, syncs across machines |
| 2026-05-28 | Visual direction: premium warm trustworthy | Right fit for a CFP + storyteller; differentiates from corporate advisor sites |
| 2026-05-28 | "Freedom Ready Business" (not "Exit Ready") | Updated brand term; new domain coming |
| 2026-05-28 | Keep GHL chat widget, embed GHL contact form | Preserve existing CRM/automation backend |
| 2026-05-28 | Ship-tiered approach | Faster feedback, lower risk than big-bang build |
