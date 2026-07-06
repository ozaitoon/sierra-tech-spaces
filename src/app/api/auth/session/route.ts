import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function GET() {
  console.log("[GET] /api/auth/session - start");

  if (process.env.DEMO_BYPASS_AUTH === "true") {
    console.log("[GET] /api/auth/session - demo bypass");
    return NextResponse.json({
      authenticated: true,
      username: "demo",
      name: "Demo",
    });
  }

  const session = await getSession();
  if (!session) {
    return NextResponse.json({ authenticated: false });
  }

  console.log("[GET] /api/auth/session - found:", session.name);
  return NextResponse.json({
    authenticated: true,
    username: session.username,
    name: session.name,
  });
}
