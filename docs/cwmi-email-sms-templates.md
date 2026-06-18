# CWMI — Email & SMS Template Library (Workflows W1–W9)

**For:** the GHL automations in `docs/cwmi-ghl-pipeline-spec.md` §6.
**Voice:** warm, direct, owner-to-owner; no hype, no jargon.
**Merge fields:** `{{contact.first_name}}`, `{{calendar.audit_link}}`,
`{{calendar.blueprint_link}}`, `{{user.name}}` (Kurt), etc.

> ⚠️ NJ state-registered RIA, building to SEC standard. **Rules baked into every
> template:** no return/performance claims; SMS only to `consent-sms` contacts;
> every SMS path honors **STOP/HELP**; every marketing email has a physical
> address + unsubscribe (CAN-SPAM); educational framing + disclaimer. Templates
> are records (NJ recordkeeping). **Counsel reviews this library before launch.**

**Reusable email footer (append to every email):**
> Certified Wealth Management & Investment, LLC · [physical mailing address] ·
> Investment adviser registered with the State of New Jersey. Educational only;
> not investment, tax, or legal advice. No outcome or return is guaranteed.
> [Unsubscribe] · [Privacy] · [Terms]

**Reusable SMS suffix (first message in any sequence):** ` Reply STOP to opt
out, HELP for help.`

---

## W2 — Speed-to-lead (opted in, didn't book)

**SMS T+0 (instant):**
> Hi {{contact.first_name}}, it's the team at CWMI — thanks for requesting your
> Freedom Readiness Audit. Grab your time here: {{calendar.audit_link}} Reply
> STOP to opt out, HELP for help.

**Email T+0 — subject:** `Your Freedom Readiness Audit — let's grab a time`
> {{contact.first_name}}, you're one step from seeing exactly how ready your
> business — and you — are to exit on your terms.
> Your 60-minute Audit is complimentary, and you'll leave with your readiness
> scorecard and the single biggest move to make this year.
> 👉 Book your time: {{calendar.audit_link}}
> Talk soon, Kurt

**SMS T+1 hr:**
> Still want your spot, {{contact.first_name}}? Audits are limited each month —
> here's the calendar: {{calendar.audit_link}}

**Email T+1 day — subject:** `The #1 mistake owners make before selling`
> Most owners find out they weren't ready *after* they've left money on the
> table. The Audit makes sure that's not you — at no cost.
> 👉 {{calendar.audit_link}}

**SMS T+3 day (final):**
> {{contact.first_name}}, closing the loop — want me to hold an Audit spot for
> you this week? {{calendar.audit_link}}

---

## W3 — Audit confirmation + reminders

**Email (on booking) — subject:** `You're booked — Freedom Readiness Audit {{appointment.date}}`
> {{contact.first_name}}, you're confirmed for {{appointment.date}} at
> {{appointment.time}}. I'll come prepared with your numbers — just answer the
> quick intake questions if you haven't. Nothing else to prep.
> — Kurt

**SMS 24 hr before:**
> Reminder: your Freedom Readiness Audit is tomorrow at {{appointment.time}}.
> Looking forward to it, {{contact.first_name}}. Need to reschedule?
> {{calendar.audit_link}}

**SMS 1 hr before:**
> See you in an hour, {{contact.first_name}}. Join here: {{appointment.link}}

---

## W4 — Audit no-show recovery

**SMS T+0:**
> Hi {{contact.first_name}}, we missed you for the Audit — life happens! Grab a
> new time whenever works: {{calendar.audit_link}}

**Email T+1 day — subject:** `Let's get your Audit back on the calendar`
> No problem missing today, {{contact.first_name}} — but your readiness gap
> doesn't reschedule itself. Pick a new time here: {{calendar.audit_link}}.
> Still complimentary, still yours to keep.

**SMS T+4 day (final before nurture):**
> {{contact.first_name}}, want me to keep a spot open, or should I close it out
> for now? {{calendar.audit_link}}

---

## W5 — Post-Audit → Blueprint

**Email (after Audit, advancing) — subject:** `Your scorecard + what's next`
> Great session, {{contact.first_name}}. Attached: your Freedom Readiness
> Scorecard and your One Big Gap memo — yours to keep.
> As we discussed, the next step is the Blueprint walkthrough, where I'll show
> you exactly how we'd close that gap, what it includes, and what it costs.
> 👉 Grab your time: {{calendar.blueprint_link}}
> — Kurt

**SMS T+0:**
> Sent your scorecard + One Big Gap memo, {{contact.first_name}}. Here's the
> Blueprint walkthrough link when you're ready: {{calendar.blueprint_link}}

**Email (after Audit, "not yet") — subject:** `Your scorecard — and no rush`
> Here's your scorecard and One Big Gap memo, {{contact.first_name}}. When the
> timing's right to map the full plan, I'm here. I'll keep useful things coming
> your way in the meantime. — Kurt  *(→ enters W7)*

---

## W6 — Proposal / close follow-up

**Email T+0 (after Blueprint) — subject:** `Your Freedom Ready Blueprint + next step`
> {{contact.first_name}}, here's the recap of everything we walked through and
> the engagement summary. Remember the Clarity Guarantee: complete the planning
> and if you don't have more clarity than ever on your readiness and next move,
> you're under no obligation to continue.
> Ready to start? {{link.engagement}}

**SMS T+2 day:**
> {{contact.first_name}}, any questions on the Blueprint I can answer? Happy to
> hop on for 10 min.

**Email T+5 day — subject:** `The cost of waiting`
> Every year an exit goes unplanned is value — and tax savings — left on the
> table. The plan only works if it starts. Shall we get the paperwork going?

**SMS T+10 day:**
> Checking in, {{contact.first_name}} — want to move forward, or should I follow
> up down the road?

*(No-reply → Closed-Lost + Lost Reason → W7.)*

---

## W7 — Long-term nurture ("not yet")

Low frequency (~monthly), educational, no hard sell. Rotate:
- **Email — subject:** `[Master Your Finances] This week: {{episode_topic}}`
  > Thought of you, {{contact.first_name}} — this episode covers {{topic}}.
  > [Listen]. Whenever you're ready to map your own plan, I'm one reply away.
- **Email — subject:** `Is your business actually sellable? (3-min read)`
  > A quick breakdown of the value drivers buyers pay up for — and the ones that
  > scare them off. [Read]
- **Email — subject:** `You're invited: the next Freedom Ready workshop`
  > [Register] — free, live, bring your questions.

Any reply / link-click streak → re-flag to live outreach (back to pipeline).
All include unsubscribe; SMS only if `consent-sms` and sparing.

---

## W8 — Closed-Won onboarding (handoff to CWMI.us / RIA)

**Email T+0 — subject:** `Welcome to CWMI — here's what happens next`
> Welcome aboard, {{contact.first_name}}. I'm glad we're doing this together.
> First, a few formalities: attached is our **Form ADV (Parts 2A & 2B)** and
> your engagement letter for e-signature — please review and sign here:
> {{link.esign}}.
> Next, let's get your kickoff scheduled: {{calendar.kickoff_link}}.
> — Kurt

**SMS T+0:**
> Welcome to CWMI, {{contact.first_name}}! Check your email for your welcome
> packet + onboarding link. Excited to get started.

**Email T+2 day (if unsigned) — subject:** `Quick: your welcome docs`
> Just a nudge, {{contact.first_name}} — once your ADV + engagement letter are
> signed we can open accounts and start the plan. {{link.esign}}

---

## W9 — Webinar / workshop funnel

**Email (registration confirm) — subject:** `You're in: the Freedom Ready workshop`
> You're registered for {{event.date}}, {{contact.first_name}}. Add it to your
> calendar: {{event.calendar_link}}. Come with your biggest exit question.

**SMS 1 hr before:**
> Starting in 1 hour, {{contact.first_name}}! Join here: {{event.join_link}}

**Email (attended, post-event) — subject:** `Your next step from today's workshop`
> Thanks for joining, {{contact.first_name}}! As promised, claim your
> complimentary Freedom Readiness Audit — your personal version of what we
> covered: {{calendar.audit_link}}. Spots are limited each month.

**Email (no-show, post-event) — subject:** `Missed it? Here's the replay`
> Sorry we missed you, {{contact.first_name}} — here's the replay:
> {{event.replay_link}}. When you're ready, claim your free Audit:
> {{calendar.audit_link}}.

---

## Global compliance checklist (every template)
- [ ] No return/performance promise or implication
- [ ] Guarantee language = experience only (Clarity Guarantee)
- [ ] SMS only to `consent-sms`; STOP/HELP on first message of each sequence
- [ ] Email footer (address + unsubscribe + disclaimer) present
- [ ] No specific investment/tax/legal advice in copy
- [ ] Counsel + NJ-rule sign-off recorded before activation

*Insert real address, links, and CWMI's fee/engagement docs. Counsel reviews
before launch.*
