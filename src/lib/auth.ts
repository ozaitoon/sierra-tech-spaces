import { cookies } from "next/headers";
import {
  SESSION_COOKIE,
  createSessionValue,
  verifySessionValue,
} from "@/lib/session";

type FounderCredential = {
  username: string;
  name: string;
  password: string;
};

function getFounderCredentials(): FounderCredential[] {
  return (process.env.FOUNDER_CREDENTIALS || "")
    .split("|")
    .map((entry) => {
      const [username, name, password] = entry.split(":");
      return { username, name, password };
    })
    .filter((entry) => entry.username && entry.name && entry.password);
}

export function validateCredentials(
  username: string,
  password: string,
): { username: string; name: string } | null {
  const founder = getFounderCredentials().find(
    (item) => item.username === username && item.password === password,
  );

  if (!founder) return null;
  return { username: founder.username, name: founder.name };
}

export async function getSession(): Promise<{
  username: string;
  name: string;
} | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  const parsed = await verifySessionValue(session?.value);

  if (!parsed) return null;

  const founder = getFounderCredentials().find((item) => item.username === parsed.username);
  if (!founder) return null;

  return { username: parsed.username, name: parsed.name };
}

export { SESSION_COOKIE, createSessionValue };
