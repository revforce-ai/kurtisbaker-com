# OverSkill Replication Plan

A research brief + staged build plan for replicating **OverSkill** — the AI app builder
from Russell Brunson and Todd Dickerson (ClickFunnels) — as a working product inside
Claude Code.

> Status: planning doc. Nothing in this plan has been built yet. It defines *what*
> OverSkill is and *how* we'd rebuild it, in shippable tiers.

---

## 1. What is OverSkill?

OverSkill (`overskill.com`) is a **prompt-to-app builder** — the same category as
Lovable, Replit Agent, Base44, Bolt, and Manus. You describe an app in plain English
and it generates, wires up, and deploys a working product.

Its launch is tied to Brunson & Dickerson's **AI Secrets Challenge / MarketingSecrets.ai**
funnel, where OverSkill is the "build your own software/app" tool in the offer stack.

### The core claim
> "Working app on **prompt one** — not after six rounds of re-prompting."

What makes that claim plausible is the model: OverSkill is built on **Claude Opus 4.8**
(the same model family powering this Claude Code session). The pitch is that they don't
cheap out on the model that builds your business.

### What it ships on the first prompt (the "full operational stack")
Unlike a bare code generator, OverSkill claims to wire up the whole backend on prompt one:

| Capability | What it means |
|---|---|
| **Sign-in / Auth** | User accounts, sessions, login out of the box |
| **Database** | Provisioned + schema generated from the prompt |
| **Payments** | Stripe / checkout built in |
| **Email** | Transactional email |
| **Push** | Web push notifications |
| **Mobile install** | Installable as a native-feeling app (PWA) with a home-screen icon, **no app store review** |
| **Integrations** | 1,000+ connectors (Slack, Shopify, Stripe, …) |

### The build + deploy flow
1. User types a prompt (specific or vague).
2. App assembles in real time — UI, logic, DB, auth all handled.
3. Deploys to a **live URL in ~2–3 seconds**.
4. Share it, sell it, or iterate with more prompts.
5. **Full source export + database dump** any time — "no lock-in."

### Hosting / trust
- Hosting via **Render**; marketed as **SOC 2 Type II + ISO 27001** certified.
- Native install positioned as the no-app-store path to mobile.

### Pricing (for reference / parity)
- **Starter** ~$15/mo · **Pro** $39/mo (4K credits) · **Studio** $99/mo (12K credits)
- **Team** ~$59/seat · **Studio Volume Ladder** up to 250K credits/mo at $1,499
- ~17% off annual. Usage metered in **credits**.

### One-line summary
> A natural-language → full-stack-app generator that ships auth, DB, payments, email,
> push, and mobile install on the first prompt, deploys in seconds, and lets you export
> everything. Differentiator = best-in-class model (Claude Opus 4.8) + batteries-included
> backend + instant deploy.

Sources: OverSkill site (`overskill.com`, `/compare`, `/join`), AI Secrets Challenge
funnel materials, and 2026 AI-app-builder roundups (Figma, Lovable, Lindy, NxCode).

---

## 2. Reality check: replicating this in Claude Code

Two very different interpretations of "replicate the product here":

- **(A) Build an OverSkill clone** — a real multi-tenant SaaS where *end users* prompt and
  get deployed apps. This is a months-long, multi-service product (LLM orchestration,
  sandboxed codegen, per-app provisioning, billing). The MVP below is scoped to prove the
  loop, not to match OverSkill's full integration catalog.
- **(B) Reuse the *idea* for this repo** — this repo (`kurtisbaker.com`) is a static
  Next.js 16 / React 19 / Tailwind v4 personal-brand site with **no backend, no auth, no
  DB**. The lightest valuable version is an **"Ask/Build with Kurt" mini app-generator**
  embedded in the site that produces a single deployable artifact.

This plan targets **(A)** as the product, and calls out **(B)** as the fast on-ramp that
fits the current repo. Recommendation: **start with B's infra inside this repo, grow into
A.** Confirm which you want before code starts (see §6).

### What the current repo gives us vs. what's missing
| Have | Missing for an app builder |
|---|---|
| Next.js 16 App Router, React 19, TS, Tailwind v4 | Auth (no user accounts) |
| Vercel deploy pipeline | Database / persistence |
| Component + design-system conventions | LLM orchestration / codegen service |
| Static-first, no server code | Sandboxed build + per-app deploy |
| — | Billing / credits metering |
| — | Payments, email, push, integrations plumbing |

---

## 3. Target architecture (the clone)

```
                ┌──────────────────────────────────────────────┐
   Browser ───▶ │  Builder UI (Next.js)                         │
   "prompt"     │  chat panel · live preview · file tree · logs │
                └───────────────┬──────────────────────────────┘
                                │  (server action / API route)
                                ▼
                ┌──────────────────────────────────────────────┐
                │  Orchestrator                                 │
                │  - prompt → plan (Claude Opus 4.8)            │
                │  - codegen w/ tool-use (write files, run)     │
                │  - self-repair loop (build/lint feedback)     │
                └───────┬───────────────────────┬──────────────┘
                        │                        │
            ┌───────────▼─────────┐   ┌──────────▼────────────────┐
            │  App template       │   │  Build/Deploy worker      │
            │  (auth+db+pay+email)│   │  sandbox → live URL (PWA) │
            └─────────────────────┘   └───────────────────────────┘
                        │
            ┌───────────▼─────────────────────────────────────────┐
            │ Platform services: Postgres (control plane + per-app │
            │ schemas) · Auth · Stripe billing/credits · email     │
            │ · object storage for exports                         │
            └─────────────────────────────────────────────────────┘
```

### Recommended stack
- **Model:** Claude **Opus 4.8** (`claude-opus-4-8`) via the Anthropic API, tool-use loop
  for file writes + command runs. Cheaper model (Haiku 4.5) for cheap sub-steps (naming,
  classification) to control credit cost.
- **App template the generator targets:** a single, well-understood Next.js + Tailwind
  starter that already includes auth, DB client, Stripe, email, and PWA manifest — so the
  model fills in features instead of inventing infra. This is the key to "works on prompt
  one."
- **Auth:** a hosted auth provider or self-rolled sessions in the template.
- **Database:** Postgres (e.g. Neon/Supabase) — one control-plane DB + isolated schema or
  DB per generated app.
- **Payments / credits:** Stripe; meter LLM + build usage as credits.
- **Build/deploy:** sandboxed worker (container) → deploy to Vercel/Render → live URL.
  PWA manifest + service worker baked into the template for "mobile install."
- **Export:** zip the project tree + `pg_dump` the app's schema = "no lock-in."

---

## 4. Staged build plan

Mirrors the repo's existing tiered-doc convention (`design-game-plan.md`).

### Tier 0 — Spike: prove the prompt→app loop (1–2 days)
The smallest thing that demonstrates the magic. No multi-tenancy, no billing.
- [ ] New route in this repo: `/build` — chat box + live preview pane + file viewer.
- [ ] Server action calls Claude Opus 4.8 with a tool-use loop (write file / read file).
- [ ] Generator emits a **single-file or small Next.js artifact** into a scratch dir.
- [ ] Render the result in an iframe preview; show the generated source.
- [ ] "Download project" button (zip). *(This is interpretation B — fits the repo today.)*

**Exit criteria:** type "a tip calculator with a dark theme" → see it running in preview.

### Tier 1 — Single-app MVP with the batteries (1–2 weeks)
- [ ] Curated **app template** with auth + Postgres + Stripe + email + PWA preinstalled.
- [ ] Orchestrator plans → generates features against the template (not from scratch).
- [ ] **Self-repair loop:** run `build`/`lint`, feed errors back to the model, retry.
- [ ] One-click **deploy to a live URL**; PWA installable on mobile.
- [ ] **Export:** source zip + DB dump.
- [ ] Project persistence (save/reopen a build) — requires the control-plane DB + auth.

**Exit criteria:** prompt → deployed, installable app with working login + a DB table.

### Tier 2 — Multi-tenant product (3–6 weeks)
- [ ] User accounts, workspaces, multiple projects per user.
- [ ] **Credits + billing** (Stripe) with metering on model + build usage; plan tiers.
- [ ] Sandboxed, isolated build workers (security boundary between tenants).
- [ ] Iterative editing ("change the header to navy") with diff-based regeneration.
- [ ] A starter **integration layer** (Stripe, Slack, email) — the realistic subset of
      "1,000+ integrations," prioritized by demand.
- [ ] Versioning / rollback of generated apps.

### Tier 3 — Parity + moat (ongoing)
- [ ] Broaden the integration catalog.
- [ ] Templates/marketplace, team seats, collaboration.
- [ ] Security/compliance posture (the SOC 2 / ISO story) for hosted apps.
- [ ] Cost controls + caching to keep credit economics viable.

---

## 5. Hardest problems (where this lives or dies)

1. **"Works on prompt one."** Achieved by constraining generation to a *known-good
   template*, not free-form codegen. The model fills slots; it doesn't reinvent auth.
2. **Self-repair loop quality.** Build → read errors → fix is what turns "6 re-prompts"
   into "1." Invest here early.
3. **Sandbox & multi-tenant security.** Running model-generated code per user is the
   scary part; isolate hard before going multi-tenant.
4. **Unit economics.** Opus 4.8 on every prompt + build retries = real cost. Credits,
   prompt caching, and a cheap-model tier for sub-steps are mandatory, not optional.
5. **Deploy speed.** "2 seconds" implies pre-warmed infra / edge, not cold container
   builds. Treat as a Tier 2+ optimization, not an MVP promise.

---

## 6. Open questions (need answers before building)

1. **Which interpretation** — a real OverSkill-style SaaS (A), or an embedded
   "build with Kurt" generator in this site (B)?
2. **Same repo or new repo?** A full SaaS doesn't belong inside the static
   `kurtisbaker.com` site; the Tier 0 spike does.
3. **Budget for model calls** during the spike (Anthropic API key + spend ceiling)?
4. **How close to OverSkill** — clone the positioning/branding, or just the capability?
5. **Hosting** — Vercel (matches current pipeline) vs. Render (matches OverSkill)?

---

## 7. Recommended next step

Build **Tier 0** as a self-contained spike — ideally in a separate repo/worktree so it
doesn't entangle the static marketing site. It proves the core loop in 1–2 days and makes
every later decision concrete. Pending answers to §6, I can scaffold `/build` + the
Claude Opus 4.8 tool-use orchestrator on request.
