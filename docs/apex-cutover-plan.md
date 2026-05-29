# Apex Cutover Plan — kurtisbaker.com → Vercel

**Status:** Vercel side DONE (domain attached to project `kurtisbaker-com`).
**Blocked on:** GoDaddy DNS edits (your account) — I can't log into GoDaddy on your behalf.
**Risk:** This touches the LIVE domain + email. Follow the order below to avoid downtime.

DNS is managed at **GoDaddy** (nameservers `ns29/ns30.domaincontrol.com`).

---

## The golden rule
**Do NOT touch the MX records or the `email` / `mail` records** — those are GoDaddy Workspace Email. Only change the records listed below.

---

## Step 1 — Stand up `funnels.kurtisbaker.com` (so old funnel pages survive)
The current GHL site (homepage + pages like `/revforce`, `/air`, `/master-your-finances`) needs a new home so our Vercel proxy can forward to it.

**In GHL (I can do this with you):** Settings → Domains → Add `funnels.kurtisbaker.com` → assign the existing site/funnel to it. GHL will show the exact CNAME target (for this agency it's `sites.ludicrous.cloud`, same as `www` uses today).

**At GoDaddy DNS — ADD:**
```
Type: CNAME   Name: funnels   Value: sites.ludicrous.cloud   TTL: 600
```
Then verify `https://funnels.kurtisbaker.com/revforce` etc. load before Step 2.

## Step 2 — Point the apex + www at Vercel
**At GoDaddy DNS — CHANGE these two:**
```
Type: A   Name: @     Value: 76.76.21.21   TTL: 600    (was: GHL/Cloudflare)
Type: A   Name: www   Value: 76.76.21.21   TTL: 600    (was: CNAME sites.ludicrous.cloud)
```
*(If GoDaddy won't let `www` be an A record alongside, use `CNAME www → cname.vercel-dns.com` instead.)*

## Step 3 — Verify (give DNS 5–30 min)
- `https://kurtisbaker.com` → new Vercel site (gold chat, map, etc.)
- `https://kurtisbaker.com/breakfast` → still redirects to the booking calendar (these go to link.revforce.ai, unaffected)
- `https://kurtisbaker.com/revforce` → proxied to `funnels.kurtisbaker.com/revforce`
- Send/receive a test email → confirm email still works (MX untouched)
- Vercel auto-issues SSL once the A record resolves.

## Leave untouched
- All MX records
- `email.kurtisbaker.com`, `mail.kurtisbaker.com` (Workspace Email)
- `link.revforce.ai` (separate domain, booking widgets)
- Any other custom subdomain you use

---

## How we execute
- **Option A (safest):** You apply Steps 1–2 at GoDaddy using the records above; I verify each step live.
- **Option B:** You log into GoDaddy in Chrome → say "GoDaddy ready" → I make the exact edits with you watching, confirming before the apex flip.

Either way, the QC GitHub Action's `QC_BASE_URL` should switch from the vercel URL to `https://kurtisbaker.com` after cutover (one-line change I'll make once it's live).
