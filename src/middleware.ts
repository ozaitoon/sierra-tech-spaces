import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, verifySessionValue } from "@/lib/session";

const attaHosts = new Set(["atta-group.net", "www.atta-group.net"]);
const demoBypassAuth = process.env.DEMO_BYPASS_AUTH === "true";

export async function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();

  if (host && attaHosts.has(host) && request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/atta";
    return NextResponse.rewrite(url);
  }

  const protectedRoute =
    request.nextUrl.pathname.startsWith("/dashboard") ||
    request.nextUrl.pathname.startsWith("/api/atta-leads");

  if (protectedRoute && !demoBypassAuth) {
    const session = await verifySessionValue(request.cookies.get(SESSION_COOKIE)?.value);

    if (!session) {
      if (request.nextUrl.pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("next", request.nextUrl.pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/api/atta-leads/:path*"],
};
