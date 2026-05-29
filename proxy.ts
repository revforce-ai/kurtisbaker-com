import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GHL_FUNNELS_HOST = "https://funnels.kurtisbaker.com";

// Paths served natively by this Next.js app (never redirected to GHL funnels)
const NATIVE_PATHS = new Set<string>(["/", "/privacy", "/terms"]);

// Direct shortcuts → specific GHL booking widgets (skip the funnels subdomain hop)
const DIRECT_REDIRECTS: Record<string, string> = {
  "/breakfast":
    "https://link.revforce.ai/widget/booking/puxyNUwGONRDwtTRUDny",
  "/lunch":
    "https://link.revforce.ai/widget/booking/cLlotxW8Uss8ANCA3WZE",
  "/coffee": "https://link.revforce.ai/widget/bookings/kurt/coffee",
  "/meeting": "https://link.revforce.ai/widget/bookings/meet-with-kurt",
  "/discovery":
    "https://link.revforce.ai/widget/bookings/discovery-meeting-with-kurtis-baker",
};

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (NATIVE_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const direct = DIRECT_REDIRECTS[pathname];
  if (direct) {
    return NextResponse.redirect(`${direct}${search}`, 301);
  }

  return NextResponse.redirect(
    `${GHL_FUNNELS_HOST}${pathname}${search}`,
    301,
  );
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|kurt-baker\\.jpg|logos/.*|.*\\..+).*)",
  ],
};
