# AIR® Reply Templates

Email bodies for the responder. Fill `{{...}}` from the thread and
`reference/document-catalog.md`. Keep the signature block on every reply. Match
the requester's formality; trim anything that doesn't apply.

**Standard signature:**
```
Warm regards,
Kurt Baker
Co-Founder, Attitudes In Reverse® (AIR®)
A 501(c)(3) nonprofit — air.ngo
kbaker@cwmi.us
```

---

## 1. Vendor onboarding (W-9 + 501c3, restricted → DRAFT)
> Subject: Re: {{their subject}} — AIR® onboarding documents

```
Hi {{name}},

Thanks for reaching out. Attached are the documents to set up Attitudes In
Reverse® (AIR®) as a vendor:

- Signed W-9 (current year)
- IRS 501(c)(3) determination letter
{{- Certificate of insurance, if requested}}

For your records:
- Legal name: Attitudes In Reverse® (AIR®)
- EIN: {{EIN}}
- 501(c)(3) public charity

If you need anything else for onboarding, just let me know.
```

## 2. Grant application / due-diligence packet (mostly public → draftable)
> Subject: Re: {{their subject}} — AIR® due-diligence documents

```
Hi {{name}},

Glad to support {{their org}}'s application/review. Attached / linked:

- IRS 501(c)(3) determination letter
- Most recent Form 990
- Board of Directors list
- Mission & program one-pager
{{- Governance policies / non-discrimination statement, if requested}}

Key facts:
- Legal name: Attitudes In Reverse® (AIR®)
- EIN: {{EIN}}
- State charity registration #: {{reg #}}
- 501(c)(3) public charity — air.ngo

More background and documents are on our transparency page: {{air.ngo docs URL}}
Happy to provide anything further the application requires.
```

## 3. Single public document / quick fact (public → may auto-send if enabled)
> Subject: Re: {{their subject}}

```
Hi {{name}},

Attached is AIR®'s {{document}}. For quick reference:
- Legal name: Attitudes In Reverse® (AIR®)
- EIN: {{EIN}}
- 501(c)(3) public charity — air.ngo

Let me know if you need anything else.
```

## 4. Proof of insurance (restricted → DRAFT; flag if stale)
> Subject: Re: {{their subject}} — AIR® certificate of insurance

```
Hi {{name}},

Attached is AIR®'s current certificate of insurance. If you need AIR® or
{{their org}} named as additional insured, or a different coverage form, let me
know the exact wording and I'll have our broker issue it.
```
> If the COI on file is expired/stale: do NOT attach. Draft instead: "I'm
> requesting a current certificate from our broker and will forward it shortly,"
> and flag for Kurt.

## 5. Need more context (ambiguous ask or unverified requester)
> Subject: Re: {{their subject}}

```
Hi {{name}},

Happy to help. So I send exactly what you need, could you confirm:
- Which documents are required (e.g., 501(c)(3) letter, W-9, Form 990, COI)?
- Is this for vendor onboarding or a grant/application — and for which
  organization?

I'll get them right over.
```

## 6. Banking / ACH request (Tier 3 — never attach; redirect)
> Subject: Re: {{their subject}}

```
Hi {{name}},

Happy to get AIR® set up for payment. For security, we don't send banking or
ACH details over email. Please share your secure vendor portal or a secure-form
link, or let's confirm the details by phone, and I'll provide them through that
channel.

In the meantime I've attached our W-9 and 501(c)(3) letter.
```
> Attach W-9 only if requester is verified (Tier 2 rule); otherwise omit and use
> template 5 first. Always flag Tier 3 requests for Kurt.
