# Spam & phishing signal rubric

Score each message by summing the weights of the signals it exhibits, then
bucket by total. Signals are evidence, not proof — combine them. A single weak
signal never justifies a "phishing" or "spam" verdict.

## Scoring buckets

| Total score | Verdict | Default action |
|---|---|---|
| ≥ 6 **and** any phishing-class signal | **Phishing** | Flag + alert (push) |
| ≥ 6, marketing/bulk in nature | **Spam** | Digest alert; label only if very confident |
| 3–5 | **Suspicious** | List for user; no mutation |
| 0–2 | **Legit** | Leave untouched |

## Phishing-class signals (impersonation / theft)

- **+4** Sender domain mismatches the brand/person it claims to be (e.g.
  "PayPal" from `secure-paypal.account-verify.ru`). Compare the *envelope/From
  domain*, not the display name.
- **+4** Display-name spoofing: a known contact's or executive's name with a
  free/unrelated address (`CEO Name <random123@gmail.com>`).
- **+3** Asks for credentials, MFA codes, payment, gift cards, wire transfers,
  or "verify/reactivate your account."
- **+3** Link text or button label differs from the real href; URL uses a
  lookalike/punycode/shortened domain or a raw IP.
- **+3** Stated authentication failure mismatch — claims to be from a domain
  whose SPF/DKIM/DMARC the headers show as failing (when headers are available).
- **+2** Urgency / threat ("account will be closed in 24h", "unauthorized login
  detected", legal/tax threats).
- **+2** Unexpected attachment posing as invoice/receipt/voicemail, especially
  `.html`, `.htm`, `.zip`, `.iso`, `.lnk`, or macro-enabled Office files.
- **+2** Reply-To differs from From and points to an unrelated address.

## Spam-class signals (bulk / marketing junk)

- **+3** Unsolicited sales/marketing from a sender with no prior relationship.
- **+2** Classic spam phrasing: "act now", "limited time", "you've been
  selected", "100% free", "work from home", crypto/forex pitches.
- **+2** Mass-blast indicators: undisclosed-recipients, no real personalization,
  generic "Dear customer".
- **+2** Image-only body or text deliberately obfuscated (zero-width chars,
  Cyrillic lookalikes, spaced-out l e t t e r s).
- **+1** Excessive emoji/ALL CAPS in subject; deceptive "Re:"/"Fwd:" with no
  prior thread.
- **+1** List-Unsubscribe present but sender is unknown/unrequested (legitimate
  newsletters also have this — weak signal only).

## De-weighting (reduce false positives)

- **−3** Sender is in the user's domain or a known/prior correspondent.
- **−2** Part of an existing thread the user participated in.
- **−2** Passes alignment: From domain matches the claimed brand and is a
  well-known legitimate domain.
- Internal mail, calendar invites, and transactional mail from services the
  user actually uses should almost always land as **Legit** unless a strong
  phishing-class signal is present.

## Notes

- Prefer headers/metadata for domain and auth checks; fall back to body content
  for link/urgency analysis only when a message is borderline.
- Brand impersonation of services the user uses (DocuSign, Microsoft 365,
  Google, banks, couriers) is the most common phishing vector — scrutinize the
  actual sending domain on any such mail.
