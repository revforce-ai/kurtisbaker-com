import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GHL_FUNNELS_HOST = "https://funnels.kurtisbaker.com";

const NATIVE_PATHS = new Set<string>(["/"]);

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (NATIVE_PATHS.has(pathname)) {
    return NextResponse.next();
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
