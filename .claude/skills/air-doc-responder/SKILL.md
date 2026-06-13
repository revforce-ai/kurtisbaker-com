---
name: air-doc-responder
description: >-
  Monitors the Attitudes In Reverse® (AIR®, air.ngo) inbox for requests for
  organizational/compliance documents — 501(c)(3) determination letter, EIN,
  Form 990, state charity registration number, W-9, certificate of insurance
  (COI), good-standing, sales-tax exemption, board list, etc. — typically from
  vendors doing onboarding or from grant applications. It classifies the
  request, drafts a reply with the right information, and attaches the correct
  documents from Drive. Use when asked to "check AIR email", "answer the
  vendor/grant doc request", "send our 501c3 / W-9 / 990 / COI", "handle the
  charity paperwork request", or to run the AIR document-request inbox sweep.
---

# AIR® Organizational-Document Responder

Turns a manual, recurring chore — vendors and grant teams emailing AIR® asking
for "your 501(c)(3) letter / W-9 / 990 / proof of insurance" — into an
assisted, near-automatic reply with the correct documents attached.

**Org identity (AIR®):**
- Legal name: **Everybody Loves Kenny Project, Inc.** — **dba Attitudes In
  Reverse® ("AIR®")**. Use the legal name on W-9s, contracts, and registrations.
- Tax status: **501(c)(3) public charity** — **EIN 27-2372917**
- Mission: eliminating the stigma around mental health through school-based
  education; founded in memory of Kenny Baker. Co-founded by Kurt & Tricia Baker.
- Website: **https://www.air.ngo** · GuideStar: https://www.guidestar.org/profile/27-2372917
- Contacts: Kurt Baker (kbaker@cwmi.us) is the operator running this skill.

> Org-specific numbers (EIN, NJ charity registration #, mailing address) and
> document file locations live in `reference/document-catalog.md`. Fill in the
> `<<FILL IN>>` placeholders there once; the skill reads from it thereafter.

---

## Safety model (read first — this sends mail on behalf of a charity)

This skill produces outbound email and attaches documents that can include an
EIN and an authorized signature. Treat it accordingly:

1. **Default to DRAFT, not auto-send.** For every handled request the skill
   creates a Gmail **draft reply** (body + attachments) and labels the thread,
   so Kurt sends with one click. This removes the slow part (reading the ask,
   picking the right docs, writing the reply) while keeping a human on the
   trigger.
2. **Sensitivity tiers gate behavior** (see catalog). Nonprofit org documents
   are public by nature, so most are freely shareable:
   - **Public** docs (501c3 letter, 990, charity reg #, mission one-pager,
     board list) — public on air.ngo. Reply includes BOTH the website link AND
     the attached PDF; fine to draft automatically and auto-send if enabled.
   - **On-request** docs (W-9, ST-5, good-standing) — fine to attach; for the
     signed W-9 and any financials, confirm the requester is legitimate first.
   - **Insurance certificate (COI)** — the one exception that is **not** public
     and gets **no website link** (it discloses coverage limits). Attach only on
     human approval; never auto-send.
   - **Never-send** items (banking / ACH / voided check, anything with an SSN) —
     do **not** attach. Draft a reply that redirects to a secure channel and
     flag it for Kurt.
3. **Verify the requester looks legitimate before attaching restricted docs.**
   Real vendor/grant requests name an organization, reference an engagement or
   application, and come from a matching corporate domain. A bare "send me your
   tax docs" from a free webmail address with no context → draft a reply asking
   for context, and flag, rather than attaching anything restricted.
4. **Never invent numbers.** If an EIN, charity registration number, or a
   document is not present in the catalog / Drive, say so in the draft and flag
   it for Kurt — do not guess or fabricate a value or a document.
5. This is **not legal or tax advice.** The skill ships documents the org has
   already produced; it does not opine on the requester's tax treatment.

---

## Tools this skill uses

The skill is tool-agnostic but expects the operator's connected Google
Workspace MCP tools to be available. Use whichever are present:

- **Gmail** — search the inbox, read threads, create draft replies (with
  attachments), apply labels/filters. (e.g. `gmail_search`, `gmail_read`,
  `create_draft` / `gmail_send_draft`, `search_threads`, `get_thread`,
  `label_thread`, `gmail_create_filter`.)
- **Google Drive** — find and download the source documents to attach.
  (e.g. `drive_search` / `search_files`, `drive_read` /
  `download_file_content`.)

If no Gmail/Drive tools are connected, stop and tell the operator the skill
needs the Google Workspace MCP connection — do not fabricate a result.

---

## Workflow

### 1. Sweep the inbox for document requests
Search the AIR® mailbox for unhandled threads that ask for org documents. Run a
query across the trigger vocabulary, scoped to recent unread/unlabeled mail:

```
(501c3 OR "501(c)(3)" OR "determination letter" OR "tax exempt" OR EIN OR
 "tax id" OR W-9 OR W9 OR 990 OR "certificate of insurance" OR COI OR
 "proof of insurance" OR "charity registration" OR "good standing" OR
 "vendor onboarding" OR "vendor setup" OR "due diligence" OR "ST-5" OR
 "sales tax exempt") -label:air-docs-handled newer_than:30d
```

Adjust the window to taste (a recurring sweep can use `newer_than:2d`). De-dupe
by thread; never reprocess a thread already labeled `air-docs-handled`.

### 2. Classify each request
For each matching thread, read the latest inbound message and determine:
- **Which documents** are being asked for (map phrases → catalog entries; a
  "vendor onboarding packet" usually means W-9 + 501c3 letter + COI).
- **Why** (vendor onboarding / payment setup, or grant application / due
  diligence). This sets which extras to proactively include.
- **Requester legitimacy** (see Safety §3): org named? corporate domain?
  engagement/application referenced?

If the ask is ambiguous, default to including the **public** docs that match and
ask, in the draft, to confirm the rest.

### 3. Gather the documents
For each requested document, find the current file in Drive (search the AIR®
org-docs folder named in the catalog). Confirm it is the **current** version
(e.g. W-9 dated in or signed for the current year; most recent 990). If a
requested document is missing or stale, do **not** substitute — note the gap in
the draft and in your operator summary.

### 4. Draft the reply
Use a template from `reference/reply-templates.md`. The reply should:
- Greet the requester and confirm what's included.
- State the public facts inline (legal name "Everybody Loves Kenny Project, Inc.
  dba Attitudes In Reverse®", EIN 27-2372917, 501(c)(3) status, charity
  registration #) so simple asks need no attachment.
- For each requested doc, **include both the air.ngo website link AND attach the
  PDF** downloaded from AIR®'s Drive (catalog Tier 1 & most of Tier 2).
- **Insurance (COI):** attach the PDF on approval only — no website link.
- **Never-send** items (banking/ACH): omit + redirect to a secure channel.
- Sign as AIR® with Kurt's contact block.

### 5. Label and hand off
- Apply label `air-docs-handled` to the thread (create it if missing).
- Leave the reply as a **draft** (default). Only send automatically if the
  operator has explicitly enabled auto-send AND every attached doc is Public.
- Add the thread to your end-of-run summary.

### 6. Report to the operator
Return a concise table: requester, what they asked for, which docs were
attached, tier, draft created (y/n), and any **flags** (missing/stale doc,
restricted doc awaiting approval, suspicious requester, never-auto redirect).
Do not claim a message was sent unless a send tool actually returned success.

### 7. Source of truth: air.ngo website + air.ngo Drive
Documents live in two places, both owned by AIR® (not this repo, and not
kurtisbaker.com):
- **air.ngo website** — public links. AIR® already publishes much of this:
  - Financials (501(c)(3) letter + Form 990s): https://www.air.ngo/about-air/financials/
  - Resources / brand assets: https://www.air.ngo/get-involved/resources/
  - Forms: https://www.air.ngo/get-involved/forms/
  - Mission: https://www.air.ngo/about-air/mission/
- **air.ngo Google Drive** — the canonical PDFs the skill downloads and attaches.

Every document except **proof of insurance** is public, so the reply carries
**both** the website link and the attached PDF. Insurance is the one exception:
attached on approval, never linked publicly.

**Best-practice page additions** (recommend to whoever maintains the air.ngo
site — don't build here): add the items grantors and vendors routinely request
that aren't yet posted — **W-9**, state charity registration #, Articles of
Incorporation, board-of-directors list, mission/capability one-pager, and a
current annual/impact report. A small "Nonprofit Documents / For Vendors &
Grantors" section (or the existing /vendor/ page) is the natural home.

---

## The document catalog & full suggested list
See **`reference/document-catalog.md`** for the complete, tiered list of
documents to make available — including the items vendors and grant
applications most often request beyond the basics — plus where each is stored,
its sensitivity tier, and whether it belongs on the public website.

## Reply templates
See **`reference/reply-templates.md`** for ready email bodies (vendor
onboarding, grant due-diligence, single-doc, "need more context", and the
secure-channel redirect for banking info).
