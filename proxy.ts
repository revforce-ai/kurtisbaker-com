import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Paths served natively by this Next.js app (never redirected)
const NATIVE_PATHS = new Set<string>(["/", "/privacy", "/terms"]);

// Direct redirects for known legacy paths and named booking shortcuts.
const DIRECT_REDIRECTS: Record<string, string> = {
  // Named booking shortcuts → specific GHL booking widgets
  "/breakfast": "https://link.revforce.ai/widget/booking/puxyNUwGONRDwtTRUDny",
  "/lunch": "https://link.revforce.ai/widget/booking/cLlotxW8Uss8ANCA3WZE",
  "/coffee": "https://link.revforce.ai/widget/bookings/kurt/coffee",
  "/meeting": "https://link.revforce.ai/widget/bookings/meet-with-kurt",
  "/discovery":
    "https://link.revforce.ai/widget/bookings/discovery-meeting-with-kurtis-baker",

  // Legacy GHL company subpages → the real, live destination sites
  "/revforce": "https://revforce.ai",
  "/air": "https://air.ngo",
  "/master-your-finances": "https://masteryourfinances.us",
  "/certified-wealth-management-and-investment": "https://www.cwmi.us",
  "/certified-wealth-mortgage-and-investment": "https://www.cwmi.us",
  "/kurtis-baker-speaks": "https://kurtisbakerspeaks.com",

  // Legacy GHL legal pages → native pages
  "/privacy-policy": "/privacy",
  "/terms-of-service": "/terms",
};

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (NATIVE_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const direct = DIRECT_REDIRECTS[pathname];
  if (direct) {
    const target = direct.startsWith("http")
      ? `${direct}${search}`
      : `${request.nextUrl.origin}${direct}${search}`;
    return NextResponse.redirect(target, 301);
  }

  // Any other legacy/unknown path → send to the homepage (no dead ends)
  return NextResponse.redirect(`${request.nextUrl.origin}/`, 301);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|kurt-baker\\.jpg|logos/.*|.*\\..+).*)",
  ],
};
