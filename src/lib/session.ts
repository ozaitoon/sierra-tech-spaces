export const SESSION_COOKIE = "sts_session";

type SessionPayload = {
  username: string;
  name: string;
  issuedAt: number;
};

const encoder = new TextEncoder();

function getSessionSecret() {
  return process.env.AUTH_SESSION_SECRET || "";
}

function bytesToBase64Url(bytes: Uint8Array) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function stringToBase64Url(value: string) {
  return bytesToBase64Url(encoder.encode(value));
}

function base64UrlToString(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(normalized.length + ((4 - (normalized.length % 4)) % 4), "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function signPayload(payload: string) {
  const secret = getSessionSecret();
  if (!secret) {
    return null;
  }

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return bytesToBase64Url(new Uint8Array(signature));
}

export async function createSessionValue(username: string, name: string) {
  const payload = stringToBase64Url(JSON.stringify({ username, name, issuedAt: Date.now() }));
  const signature = await signPayload(payload);

  if (!signature) {
    throw new Error("AUTH_SESSION_SECRET is required before login can create sessions.");
  }

  return `${payload}.${signature}`;
}

export async function verifySessionValue(value: string | undefined): Promise<SessionPayload | null> {
  if (!value) return null;

  const [payload, signature] = value.split(".");
  if (!payload || !signature) return null;

  const expectedSignature = await signPayload(payload);
  if (!expectedSignature || expectedSignature !== signature) return null;

  try {
    const parsed = JSON.parse(base64UrlToString(payload)) as SessionPayload;
    if (!parsed.username || !parsed.name || !parsed.issuedAt) return null;
    return parsed;
  } catch {
    return null;
  }
}
