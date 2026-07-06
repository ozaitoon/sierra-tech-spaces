"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  status: "live" | "building" | "planned";
  icon: string;
}

const PRODUCTS: Product[] = [
  {
    id: "whatsapp-ai",
    name: "WhatsApp AI Assistant",
    description:
      "Automated customer support and lead capture through WhatsApp Business. Handles FAQs, booking, and order tracking in Arabic.",
    status: "planned",
    icon: "M",
  },
  {
    id: "lead-gen",
    name: "STS Lead Generation Engine",
    description:
      "Captures leads from website, social media, and ads. Auto-qualifies and routes them to the right sales rep with follow-up sequences.",
    status: "planned",
    icon: "L",
  },
  {
    id: "atta-leads",
    name: "Atta Industrial Lead Command",
    description:
      "Ranks Egyptian factories and industrial buyers for Atta products, drafts outreach, exports CSV, and manages a lightweight sales pipeline.",
    status: "live",
    icon: "A",
  },
  {
    id: "content-engine",
    name: "Social Media Content Engine",
    description:
      "AI-generated social media posts, captions, and scheduling. Supports Arabic and English with brand voice matching.",
    status: "planned",
    icon: "C",
  },
  {
    id: "process-audit",
    name: "Process Audit Tool",
    description:
      "Scans a business's workflows and identifies automation opportunities. Generates a report with ROI estimates for each process.",
    status: "planned",
    icon: "A",
  },
  {
    id: "customer-service",
    name: "AI Customer Service Suite",
    description:
      "Multi-channel support automation — email, chat, and social media. Escalates to humans when needed. Full Arabic support.",
    status: "planned",
    icon: "S",
  },
  {
    id: "ecommerce-optimizer",
    name: "E-Commerce Optimizer",
    description:
      "Automates product descriptions, inventory alerts, pricing suggestions, and abandoned cart recovery for online stores.",
    status: "planned",
    icon: "E",
  },
  {
    id: "booking-system",
    name: "Smart Booking System",
    description:
      "AI-powered appointment scheduling for clinics, salons, and service businesses. WhatsApp reminders and rescheduling built in.",
    status: "planned",
    icon: "B",
  },
  {
    id: "analytics-dashboard",
    name: "Client Analytics Dashboard",
    description:
      "Real-time dashboard showing KPIs, automation savings, and ROI for each client. White-labeled for client access.",
    status: "planned",
    icon: "D",
  },
];

const STATUS_STYLES = {
  live: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
    label: "Live",
  },
  building: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    dot: "bg-amber-400",
    label: "Building",
  },
  planned: {
    bg: "bg-white/[0.06]",
    text: "text-warm-400",
    dot: "bg-warm-400",
    label: "Planned",
  },
};

export default function DashboardPage() {
  const router = useRouter();
  const [session, setSession] = useState<{
    name: string;
    username: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) {
          router.replace("/login");
          return;
        }
        setSession({ name: data.name, username: data.username });
        setLoading(false);
      })
      .catch(() => router.replace("/login"));
  }, [router]);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/");
  }

  function handleProductOpen(product: Product) {
    if (product.id === "atta-leads") {
      router.push("/dashboard/atta-leads");
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#8B5CF6] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Dashboard nav */}
      <nav className="border-b border-white/[0.06] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo-sts.png"
              alt="Sierra Tech Spaces"
              width={120}
              height={120}
              className="object-contain"
            />
          </a>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-white text-sm font-medium">
                {session?.name}
              </p>
              <p className="text-warm-500 text-xs">@{session?.username}</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] flex items-center justify-center text-white text-sm font-medium">
              {session?.name?.[0]}
            </div>
            <button
              onClick={handleLogout}
              className="text-warm-400 text-sm hover:text-white transition-colors ml-2"
            >
              Log out
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-3xl md:text-4xl text-white mb-2">
            Product Suite
          </h1>
          <p className="text-warm-400 text-lg">
            Our internal tools and client-ready products. Click to manage or
            deploy.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            {
              label: "Total Products",
              value: PRODUCTS.length,
              color: "text-white",
            },
            {
              label: "Live",
              value: PRODUCTS.filter((p) => p.status === "live").length,
              color: "text-emerald-400",
            },
            {
              label: "In Progress",
              value: PRODUCTS.filter((p) => p.status === "building").length,
              color: "text-amber-400",
            },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-5">
              <p className="text-warm-500 text-xs uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <p className={`text-2xl font-display ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((product) => {
            const style = STATUS_STYLES[product.status];
            return (
              <div
                key={product.id}
                onClick={() => handleProductOpen(product)}
                className="glass-card rounded-xl p-6 group cursor-pointer transition-all duration-300 hover:translate-y-[-2px]"
              >
                {/* Icon + Status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#7C3AED]/20 to-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#A78BFA] font-display text-lg">
                    {product.icon}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs ${style.bg} ${style.text}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${style.dot}`}
                    />
                    {style.label}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-white font-medium mb-2 group-hover:text-[#A78BFA] transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-warm-400 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Bottom action hint */}
                <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-warm-500 text-xs">
                    {product.id === "atta-leads"
                      ? "Open lead command"
                      : product.status === "planned"
                      ? "Not started yet"
                      : product.status === "building"
                        ? "Work in progress"
                        : "Ready to deploy"}
                  </span>
                  <span className="text-[#8B5CF6] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Open →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
