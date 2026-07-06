"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function getSafeNextPath() {
    const next = new URLSearchParams(window.location.search).get("next");
    if (!next || !next.startsWith("/") || next.startsWith("//")) return "/dashboard";
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        setError("Wrong username or password");
        setLoading(false);
        return;
      }

      router.push(getSafeNextPath());
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo-sts.png"
            alt="Sierra Tech Spaces"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        {/* Card */}
        <div className="glass-card rounded-xl p-8">
          <h1 className="font-display text-xl text-white text-center mb-1">
            Founders Only
          </h1>
          <p className="text-warm-400 text-sm text-center mb-8">
            Log in to access the dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="username"
                className="block text-xs uppercase tracking-widest text-warm-400 mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-warm-500 focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/30 transition-all"
                placeholder="your_username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs uppercase tracking-widest text-warm-400 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-warm-500 focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/30 transition-all"
                placeholder="Enter password"
              />
            </div>

            {error && (
              <p className="text-[#E8734A] text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white font-medium text-sm py-3 rounded-lg hover:from-[#6D28D9] hover:to-[#7C3AED] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>
        </div>

        <p className="text-warm-500 text-xs text-center mt-6">
          Sierra Tech Spaces — Internal Access
        </p>
      </div>
    </div>
  );
}
