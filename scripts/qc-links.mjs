#!/usr/bin/env node
/**
 * QC link checker for kurtisbaker.com
 *
 * - Crawls the homepage + /privacy, extracts every <a href>
 * - Verifies a curated list of critical CTAs / buttons (booking, form, show, ventures)
 * - Verifies the named booking shortcuts (/breakfast, /lunch, ...) 301 to the right targets
 * - Verifies asset routes (robots.txt, sitemap.xml, llms.txt, /privacy)
 *
 * Internal failures and shortcut-redirect mismatches are FATAL (exit 1).
 * External link failures are WARNINGS (sites often block bots) — reported, non-fatal.
 *
 * Usage:  node scripts/qc-links.mjs [baseUrl]
 *   baseUrl defaults to QC_BASE_URL env or the production Vercel alias.
 */

const BASE =
  process.argv[2] ||
  process.env.QC_BASE_URL ||
  "https://kurtisbaker-com.vercel.app";

const PAGES = ["/", "/privacy"];

const ASSET_ROUTES = ["/robots.txt", "/sitemap.xml", "/llms.txt", "/privacy"];

// Named booking shortcuts → expected redirect target (substring match)
const SHORTCUTS = {
  "/breakfast": "link.revforce.ai/widget/booking/puxyNUwGONRDwtTRUDny",
  "/lunch": "link.revforce.ai/widget/booking/cLlotxW8Uss8ANCA3WZE",
  "/coffee": "link.revforce.ai/widget/bookings/kurt/coffee",
  "/meeting": "link.revforce.ai/widget/bookings/meet-with-kurt",
  "/discovery":
    "link.revforce.ai/widget/bookings/discovery-meeting-with-kurtis-baker",
};

// Critical external links that MUST exist somewhere on the site
const CRITICAL_EXTERNAL = [
  "https://link.revforce.ai/widget/bookings/meet-with-kurt",
  "https://api.leadconnectorhq.com/widget/form/pvijux6F8kWW1JH53kji",
  "https://masteryourfinances.us/shows/master-of-finances/",
  "https://www.cwmi.us",
  "https://revforce.ai",
  "https://air.ngo",
];

const UA =
  "Mozilla/5.0 (compatible; kurtisbaker-qc/1.0; +https://kurtisbaker.com)";

const results = [];
let fatal = 0;
let warn = 0;

function baseHost() {
  return new URL(BASE).host;
}

async function fetchStatus(url, { method = "HEAD" } = {}) {
  try {
    const res = await fetch(url, {
      method,
      redirect: "follow",
      headers: { "user-agent": UA },
      signal: AbortSignal.timeout(15000),
    });
    // Some servers reject HEAD — retry with GET
    if ((res.status === 405 || res.status === 403) && method === "HEAD") {
      return fetchStatus(url, { method: "GET" });
    }
    return { status: res.status, finalUrl: res.url };
  } catch (err) {
    return { status: 0, error: err.message };
  }
}

async function fetchRedirect(url) {
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "manual",
      headers: { "user-agent": UA },
      signal: AbortSignal.timeout(15000),
    });
    return {
      status: res.status,
      location: res.headers.get("location") || "",
    };
  } catch (err) {
    return { status: 0, error: err.message, location: "" };
  }
}

function record(category, target, ok, detail) {
  results.push({ category, target, ok, detail });
  if (!ok) {
    if (category === "external") warn++;
    else fatal++;
  }
}

async function fetchPage(path) {
  const url = BASE + path;
  const res = await fetch(url, { headers: { "user-agent": UA } });
  if (!res.ok) {
    record("page", url, false, `page returned ${res.status}`);
    return "";
  }
  return res.text();
}

// Only real navigation links: <a ... href="...">  (ignores <link rel=canonical>, preload, etc.)
function extractAnchors(html) {
  return [...html.matchAll(/<a\s[^>]*?href="([^"]+)"/gi)]
    .map((m) => m[1])
    .filter((h) => h.startsWith("http") || h.startsWith("/"));
}

async function main() {
  console.log(`\nQC link check — base: ${BASE}\n${"=".repeat(60)}`);

  // 1. Crawl pages: collect anchor links + keep raw HTML for presence checks
  const allLinks = new Set();
  let htmlBlob = "";
  for (const p of PAGES) {
    const html = await fetchPage(p);
    htmlBlob += html;
    extractAnchors(html).forEach((l) => allLinks.add(l));
  }

  // 2. Asset routes
  for (const route of ASSET_ROUTES) {
    const { status } = await fetchStatus(BASE + route, { method: "GET" });
    record("asset", route, status >= 200 && status < 400, `status ${status}`);
  }

  // 3. Booking shortcuts (must 301 to expected target)
  for (const [path, expected] of Object.entries(SHORTCUTS)) {
    const { status, location, error } = await fetchRedirect(BASE + path);
    const ok =
      status >= 300 && status < 400 && location.includes(expected);
    record(
      "shortcut",
      path,
      ok,
      error ? error : `status ${status} → ${location || "(none)"}`,
    );
  }

  // 4. Extracted links
  const host = baseHost();
  for (const link of allLinks) {
    const abs = link.startsWith("/") ? BASE + link : link;
    const isInternal = new URL(abs).host === host;
    if (link.startsWith("#") || link.startsWith("mailto:") || link.startsWith("tel:"))
      continue;
    const { status, error } = await fetchStatus(abs);
    const ok = status >= 200 && status < 400;
    record(
      isInternal ? "internal" : "external",
      abs,
      ok,
      error ? error : `status ${status}`,
    );
  }

  // 5. Critical presence — check anchors AND raw HTML (covers <iframe src>, scripts)
  for (const c of CRITICAL_EXTERNAL) {
    const prefix = c.split("?")[0];
    const present =
      [...allLinks].some((l) => l.startsWith(prefix)) ||
      htmlBlob.includes(prefix);
    if (!present) {
      record("critical", c, false, "NOT FOUND in page markup");
    }
  }

  // Report
  console.log("");
  const groups = ["page", "asset", "shortcut", "internal", "critical", "external"];
  for (const g of groups) {
    const rows = results.filter((r) => r.category === g);
    if (!rows.length) continue;
    console.log(`\n[${g.toUpperCase()}]`);
    for (const r of rows) {
      console.log(`  ${r.ok ? "✓" : "✗"}  ${r.target}  (${r.detail})`);
    }
  }

  console.log(`\n${"=".repeat(60)}`);
  console.log(`Fatal failures: ${fatal}   Warnings (external): ${warn}`);
  if (fatal > 0) {
    console.error("\n❌ QC FAILED — internal links or shortcuts are broken.\n");
    process.exit(1);
  }
  console.log("\n✅ QC PASSED (internal links + shortcuts healthy).\n");
}

main().catch((err) => {
  console.error("QC script crashed:", err);
  process.exit(1);
});
