import { NextRequest, NextResponse } from "next/server";
import {
  validateCredentials,
  createSessionValue,
  SESSION_COOKIE,
} from "@/lib/auth";

export async function POST(req: NextRequest) {
  console.log("[POST] /api/auth/login — start");

  const { username, password } = await req.json();

  const founder = validateCredentials(username, password);
  if (!founder) {
    console.log("[POST] /api/auth/login — invalid credentials");
    return NextResponse.json({ error: "Wrong credentials" }, { status: 401 });
  }

  let sessionValue: string;

  try {
    sessionValue = await createSessionValue(founder.username, founder.name);
  } catch {
    console.log("[POST] /api/auth/login - missing session secret");
    return NextResponse.json(
      { error: "Server auth is not configured. Add AUTH_SESSION_SECRET." },
      { status: 500 },
    );
  }

  const res = NextResponse.json({
    success: true,
    name: founder.name,
    username: founder.username,
  });

  res.cookies.set(SESSION_COOKIE, sessionValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  console.log("[POST] /api/auth/login — success for", founder.name);
  return res;
}
