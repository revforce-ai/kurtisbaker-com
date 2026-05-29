# kurtisbaker.com — QC Click-Through Checklist

A human verification pass. Open the live site and click every link/button below.
Each row lists where it lives and where it should go.

**Live URL (current):** https://kurtisbaker-com.vercel.app
**Live URL (after cutover):** https://kurtisbaker.com

> Automated version: `node scripts/qc-links.mjs [baseUrl]` — fails CI if any
> internal link or booking shortcut breaks. Runs weekly via GitHub Action.

---

## Navigation (header)

| Element | Goes to | ✓ |
|---|---|---|
| "Kurt Baker" wordmark | scrolls to top / home | ☐ |
| "What I Do" | `#what-i-do` section | ☐ |
| "Companies" | `#companies` section | ☐ |
| "About" | `#about` section | ☐ |
| "Media" | `#media` section | ☐ |
| "Book a call" (nav) | link.revforce.ai/widget/bookings/meet-with-kurt | ☐ |

## Hero

| Element | Goes to | ✓ |
|---|---|---|
| "Book a call" | link.revforce.ai/widget/bookings/meet-with-kurt | ☐ |
| "Listen to the show" | masteryourfinances.us/shows/master-of-finances/ | ☐ |
| Photo badge text | reads "Kurtis Baker / CFP®, CEPA®, AIF®" | ☐ |

## Credentials section

| Element | Goes to | ✓ |
|---|---|---|
| CFP® "CFP Board" link | cfp.net | ☐ |
| CFP® "Verify on cfp.net" | cfp.net/verify-a-cfp-professional | ☐ |
| CEPA® "Exit Planning Institute" | exit-planning-institute.org | ☐ |
| CEPA® "Verify on EPI" | exit-planning-institute.org/member-detail/kurtis-baker | ☐ |
| AIF® "Fi360 (Broadridge)" | fi360.com | ☐ |
| AIF® "Verify on Fi360" | fi360.com/app/designee/search | ☐ |

## Companies / ventures grid

| Card | Goes to | ✓ |
|---|---|---|
| Certified Wealth Management & Investment | cwmi.us | ☐ |
| Certified Wealth Mortgage & Investment | cwmi.us | ☐ |
| Master Your Finances | masteryourfinances.us | ☐ |
| Freedom Ready Business | **no link — "Site coming soon" badge** | ☐ |
| Kurtis Baker Speaks | **no link — "Site coming soon" badge** | ☐ |
| RevForce | revforce.ai | ☐ |
| Attitudes In Reverse® | air.ngo | ☐ |

## About section

| Element | Goes to | ✓ |
|---|---|---|
| "Attitudes In Reverse®" link | air.ngo | ☐ |
| "CWMI" link | cwmi.us | ☐ |
| "RevForce" link | revforce.ai | ☐ |
| "Master Your Finances" link | masteryourfinances.us | ☐ |

## Media section

| Element | Goes to | ✓ |
|---|---|---|
| "Listen now" | masteryourfinances.us/shows/master-of-finances/ | ☐ |
| "Watch on YouTube" | youtube.com/@kurtisbaker | ☐ |
| Audio waveform card | animates; reads "Master Your Finances" | ☐ |

## Contact section

| Element | Behavior | ✓ |
|---|---|---|
| Contact form (GHL embed) | loads; submit creates a contact in GHL | ☐ |
| SMS consent disclosure | visible below form | ☐ |
| "Book a call →" (navy card) | link.revforce.ai/widget/bookings/meet-with-kurt | ☐ |
| Office address | 101 College Rd E, Ste 2, Princeton NJ 08540 | ☐ |
| Phone (tap to call) | +1 (609) 716-4700 | ☐ |
| LinkedIn (icon) | linkedin.com/in/kurtisbaker | ☐ |
| X / Twitter (icon) | x.com/kurtisbaker | ☐ |
| Instagram (icon) | instagram.com/thekurtbaker | ☐ |
| YouTube (icon) | youtube.com/@kurtisbaker | ☐ |
| Facebook (icon) | facebook.com/kurtis.baker | ☐ |

## Footer

| Element | Goes to | ✓ |
|---|---|---|
| Name line | "Kurtis Baker, CFP®, CEPA®, AIF®" | ☐ |
| Social icons (5) | match Contact links | ☐ |
| "Privacy Policy" | /privacy | ☐ |
| Phone | +1 (609) 716-4700 | ☐ |

## Booking shortcuts (apex redirects — test after DNS cutover)

| URL | 301 → | ✓ |
|---|---|---|
| /breakfast | link.revforce.ai/widget/booking/puxyNUwGONRDwtTRUDny | ☐ |
| /lunch | link.revforce.ai/widget/booking/cLlotxW8Uss8ANCA3WZE | ☐ |
| /coffee | link.revforce.ai/widget/bookings/kurt/coffee | ☐ |
| /meeting | link.revforce.ai/widget/bookings/meet-with-kurt | ☐ |
| /discovery | link.revforce.ai/widget/bookings/discovery-meeting-with-kurtis-baker | ☐ |
| /anything-else | funnels.kurtisbaker.com/anything-else | ☐ |

## Chat widget

| Element | Behavior | ✓ |
|---|---|---|
| Chat bubble | appears bottom-right | ☐ |
| Chat bubble color | brand GOLD (#A77B3A) — set in GHL UI | ☐ |
| Chat opens + sends | message lands in GHL inbox | ☐ |

## Optimization artifacts

| URL | Expect | ✓ |
|---|---|---|
| /robots.txt | allows AI crawlers, lists sitemap | ☐ |
| /sitemap.xml | valid XML, lists homepage | ☐ |
| /llms.txt | full identity brief | ☐ |
| View source → JSON-LD | Person + FinancialService graph present | ☐ |
