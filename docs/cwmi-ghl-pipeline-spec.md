# CWMI — GoHighLevel Pipeline & Automation Spec

**Engine:** GoHighLevel (already the family's stack via RevForce —
`link.revforce.ai` bookings, `leadconnectorhq` forms, GHL chat widget).
**Purpose:** the single source of truth behind the two-brand funnel
(FreedomReadyBusiness.com → CWMI.us). Build this to run the Freedom Readiness
Audit → Blueprint close described in `docs/cwmi-offer-stack-rollout.md`.

> ⚠️ **NJ state-registered RIA, building to SEC standard.** All SMS requires A2P
> 10DLC registration + documented consent. All advertising/communications are
> records — GHL retains them; confirm recordkeeping meets NJ rules. No
> performance/return language in any template. Counsel reviews templates.

---

## 1. Pipeline & stages

One pipeline: **"Freedom Ready — Owner Journey."**

| # | Stage | Enters when | Exits when |
|---|---|---|---|
| 1 | **New Lead** | Form submit / call / manual add | Audit booked |
| 2 | **Audit Booked** | Calendar appointment created | Audit start time passes |
| 3 | **Audit Showed** | Marked showed (or auto via call status) | Blueprint booked / nurture |
| 4 | **Audit No-Show** | Appt time passes, not showed | Rebooked → back to (2) / lost |
| 5 | **Blueprint Booked** | 2nd appointment created | Blueprint start passes |
| 6 | **Blueprint Showed / Proposal** | Marked showed | Decision |
| 7 | **Closed–Won** | Engagement signed | — (→ onboarding pipeline) |
| 8 | **Closed–Lost** | Declined | — (→ long-term nurture) |
| 9 | **Nurture / Not Yet** | "Not now" at any stage | Re-engages → back to (1)/(2) |

Opportunity **value** = expected first-year engagement fee (set per lead) so the
pipeline forecasts revenue and feeds the AUM North-Star KPI.

---

## 2. Custom fields (contact + opportunity)

**Contact:** Business Name · Annual Revenue (band) · Years-to-Exit (band) ·
Primary Reason (open) · Lead Source · UTM source/medium/campaign · SMS Consent
(bool + timestamp) · Referral Partner (if any).
**Opportunity:** Expected First-Year Fee · Expected AUM · Readiness Score (from
Audit) · One Big Gap (text) · Lost Reason (dropdown).

---

## 3. Lead source & attribution

- **UTMs on every link** from ads, show, email, social → captured into the UTM
  fields on form submit.
- **Dedicated tracking numbers** (GHL) per channel for call attribution; route
  inbound to **RevForce "Rachel"** so no call is missed → auto-create contact +
  task.
- **Referral Partner field** + a tag per partner so partner-sourced leads (the
  highest-quality source) are reportable separately.
- Source flows to the opportunity so reporting shows close rate **and** avg fee
  **by source** (referrals usually win on quality — budget follows that).

---

## 4. Tags & lead scoring

**Tags:** `src-show`, `src-linkedin`, `src-referral`, `src-paid-meta`,
`src-paid-li`, `src-google`, `src-webinar`, `consent-sms`, `vip-warm`,
`disqualified`, `nurture-longterm`.

**Lite score (prioritize outreach):** Revenue band (higher = +), Years-to-Exit
(3–10 yrs = +), referral source (+), engaged with nurture (+). High score → SDR/
Kurt calls first; low/*not-a-fit* → educational nurture, no live-call pressure.

---

## 5. Calendars

- **Audit calendar** (60 min) — the FRB page CTA target (mirror the existing
  `link.revforce.ai/widget/bookings/...` pattern). Buffers + limited daily slots
  to enforce the honest scarcity on the page. Intake questions attached.
- **Blueprint calendar** (60–90 min) — booked *only* from inside the Audit
  workflow (not public).

---

## 6. Workflows (automations)

### W1 — New Lead intake
Trigger: form submit. → Create/Update contact, map UTMs + custom fields → record
**SMS consent + timestamp** if checked → tag source → notify Kurt/SDR → if no
booking in 10 min, start **W2 speed-to-lead**.

### W2 — Speed-to-lead (book the Audit)
For leads who opted in but didn't book. T+0 SMS (if consent) + email with the
Audit calendar link; T+1 hr, T+1 day, T+3 day follow-ups. Stop on booking.
> *Speed matters most in the first 5 minutes — fire the first touch instantly.*

### W3 — Audit confirmation + reminders
Trigger: Audit booked → move to **Audit Booked** → confirmation email + SMS →
reminders **24 hr / 1 hr** before (email + SMS) → "anything to prep?" note. All
reminders honor STOP.

### W4 — Audit no-show recovery
Trigger: appt time passes, not showed → **Audit No-Show** → empathetic SMS +
email with one-click rebook (T+0, T+1 day, T+4 day). 3 strikes → **Nurture**.

### W5 — Post-Audit → Blueprint
Trigger: Audit marked **Showed** → send Audit leave-behind (scorecard / One Big
Gap memo) → if advancing, send **Blueprint calendar** link + recap → reminders
(reuse W3 pattern for the Blueprint appt). If "not yet," → **Nurture (W7)**.

### W6 — Proposal / close follow-up
Trigger: **Blueprint Showed/Proposal** → send recap + proposal + the **Clarity
Guarantee** restated → 5–7 touch cadence (email+SMS) over ~2–3 weeks → on signed
→ **Closed-Won** + trigger **W8 onboarding**. On decline → **Closed-Lost** +
capture Lost Reason → **W7**.

### W7 — Long-term nurture ("not yet")
Owners decide on multi-month timelines. Low-frequency value: *Master Your
Finances* episodes, exit-planning education, the Freedom Ready framework, event/
webinar invites. Monthly-ish. Any reply / high engagement → re-flag to live
outreach → back to pipeline. Always STOP/unsubscribe honored.

### W8 — Closed-Won onboarding (handoff to CWMI.us)
Trigger: Closed-Won → move to onboarding pipeline → welcome sequence →
**deliver Form ADV (2A/2B)** + engagement docs + e-sign → schedule kickoff →
internal tasks (open accounts, data gathering). This is the regulated CWMI
relationship begins.

### W9 — Webinar/workshop funnel
Registration → reminder cadence → post-event: attendees get Audit CTA; hot
prospects routed straight to Blueprint calendar; no-shows get replay + Audit CTA.

---

## 7. Email/SMS template rules (compliance-safe)

- **Never** imply returns, performance, or guaranteed outcomes. Guarantee only
  the *experience* (Clarity Guarantee).
- Every SMS sendable **only** to `consent-sms` contacts; every message path
  honors **STOP/HELP**; include business identity.
- Every marketing email: physical mailing address + working unsubscribe
  (CAN-SPAM).
- Educational framing + the standard disclaimer footer (see landing-page
  disclosure block).
- Templates are records — retained in GHL per NJ recordkeeping; counsel reviews
  the template library before launch.

---

## 8. Reporting / dashboards (instrument before launch)

Stage-by-stage conversion (matches rollout §6 KPIs): Opt-in → Booked → Showed →
Blueprint → Closed; **CPL, CAC, LTV:CAC** by source; **avg first-year fee &
expected AUM by source**; no-show rate; nurture re-activation rate. Headline
tile: **total + new AUM** (the SEC-transition North Star). Review weekly in
pilot, then monthly.

---

## 9. Build order (maps to rollout Phase 0)

1. A2P 10DLC registration (lead time — start first) + consent checkbox in form.
2. Pipeline + stages + custom fields + tags.
3. Audit + Blueprint calendars; embed Audit calendar on FRB page.
4. W1–W5 (core capture→Audit→Blueprint), then W6–W9.
5. Tracking numbers + UTMs + Rachel routing; dashboards.
6. End-to-end QC: submit a test lead, walk every stage, confirm every
   email/SMS/automation fires and STOP works. Counsel sign-off. → soft launch.
