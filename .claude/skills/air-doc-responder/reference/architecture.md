# Best-in-class architecture & operational topology

How the AIR® document responder is wired, the target "best-in-class" design,
and the verified state of the connected accounts (as of 2026-06-13).

## Verified account topology
| Capability | Tool / account | Status |
|---|---|---|
| Read AIR® inbox + Drive | Workspace MCP, `account: air.ngo` (gmail_search/read, drive_search/read) | ✅ working |
| Create AIR® email **drafts** | Workspace MCP `gmail_send_draft` (`send:false`), `account: air.ngo` | ✅ working (live test: draft `r-3087836254759269045`) |
| **Write** to AIR® Drive (create folder/upload) | — | ❌ no tool. The only Drive-write MCP is authed to **kurt@20paws.com**, a different entity. |
| Binary PDF **attachment** on a draft | — | ❌ not supported by current draft tools |
| Recurring/auto **trigger** | — | ❌ skill runs only when invoked |

## Best-in-class pipeline (target)
1. **Trigger.** Gmail filter auto-labels inbound document requests
   `air-docs/needs-reply`; a recurring sweep (every few hours) runs the skill.
   Fully automatic detection, not manual.
2. **Classify.** Skill maps request → catalog docs, assesses requester
   legitimacy and purpose (vendor vs grant).
3. **Document store.** Canonical, current PDFs live in **air.ngo's** Drive
   ("AIR — Org Documents"), each with a stable share link. Public subset is
   mirrored on the air.ngo website.
4. **Compose.** Draft reply states facts inline + includes **website/Drive
   links** for each doc (reliable, trackable, never stale). Binary attachment
   is an optional manual add at send time until an attachment-capable send tool
   exists.
5. **Approval gate.** Draft only — a human reviews and sends. (Later: optional
   auto-send for public-only docs once accuracy is proven.)
6. **Track.** Label handled threads `air-docs/handled`; dedupe; log to a sheet.

## Delivery method decision (important)
Current draft tools **cannot attach binary files**. The robust path is to put
**links** (air.ngo website for public docs; air.ngo Drive share links for
restricted docs like the W-9) **in the email body** — Google's own tooling
recommends this over attachments. Benefits: always current, no 25MB limit,
access can be revoked. Binary attachment remains a manual one-click step at send
time, or a future upgrade if an attachment-capable send tool is connected.

## What's needed to reach full automation (see ASKS in chat)
- **Write access to air.ngo's Google Drive** (or a decision to use an
  alternative store) — to stage the canonical folder + generate share links.
- **The source PDFs** that don't exist digitally yet — current signed **W-9**
  and a **Certificate of Insurance** from The Hartford. Cannot be fabricated.
- **A recurring trigger** (e.g., `/loop`, a scheduled web session, or Gmail
  push) — to make monitoring automatic rather than on-demand.
- (Optional) an **attachment-capable email tool** if binary attachments are
  required over links.
