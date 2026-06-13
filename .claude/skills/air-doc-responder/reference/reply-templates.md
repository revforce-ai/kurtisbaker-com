# AIR® Reply Templates

Email bodies for the responder. Fill `{{...}}` from the thread and
`reference/document-catalog.md`. Keep the signature block on every reply. Match
the requester's formality; trim anything that doesn't apply.

Every reply (except the insurance certificate) should give **both** the public
air.ngo link **and** the attached PDF. Use the legal name on payment/contract
paperwork.

**Standard signature:**
```
Warm regards,
Kurt Baker
Co-Founder, Attitudes In Reverse® (AIR®)
Everybody Loves Kenny Project, Inc. — a 501(c)(3) nonprofit · EIN 27-2372917
www.air.ngo
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
- Legal name: Everybody Loves Kenny Project, Inc. (dba Attitudes In Reverse®)
- EIN: 27-2372917
- 501(c)(3) public charity

The 501(c)(3) letter is also public here: https://www.air.ngo/about-air/financials/
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
- Legal name: Everybody Loves Kenny Project, Inc. (dba Attitudes In Reverse®)
- EIN: 27-2372917
- State charity registration #: {{reg #}}
- 501(c)(3) public charity — air.ngo

These are also public at our financials page: https://www.air.ngo/about-air/financials/ (and GuideStar: https://www.guidestar.org/profile/27-2372917).
Happy to provide anything further the application requires.
```

## 3. Single public document / quick fact (public → may auto-send if enabled)
> Subject: Re: {{their subject}}

```
Hi {{name}},

Attached is AIR®'s {{document}}{{, also available at <air.ngo link>}}. For quick
reference:
- Legal name: Everybody Loves Kenny Project, Inc. (dba Attitudes In Reverse®)
- EIN: 27-2372917
- 501(c)(3) public charity — www.air.ngo

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
