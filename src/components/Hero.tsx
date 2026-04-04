"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-teal/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-teal/[0.02] rounded-full blur-[100px]" />

      {/* Mountain silhouette decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-[0.04]">
        <svg viewBox="0 0 1440 160" fill="none" className="w-full h-full">
          <path
            d="M0 160L120 120L240 140L360 80L480 100L600 40L720 60L840 20L960 50L1080 30L1200 70L1320 45L1440 90L1440 160L0 160Z"
            fill="#06B6D4"
          />
        </svg>
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Overline */}
        <div
          className={`transition-all duration-700 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-teal text-xs tracking-[0.25em] uppercase font-semibold mb-8">
            <span className="w-8 h-px bg-teal" />
            AI Consulting — Cairo, Egypt
            <span className="w-8 h-px bg-teal" />
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={`font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 transition-all duration-700 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          AI that works
          <br />
          <span className="gradient-text">as hard as you do.</span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-[600ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We help Egyptian businesses replace their most tedious processes with
          AI — so you can focus on what actually grows your business.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-[800ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://wa.me/201234567890?text=Hi%20Sierra%20Tech%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20AI%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-teal text-navy-dark font-bold text-base px-8 py-4 rounded-xl hover:bg-teal-light transition-all duration-300 flex items-center gap-3"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#services"
            className="text-muted hover:text-white text-base font-medium px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            View Services
          </a>
        </div>

        {/* Trust signal */}
        <p
          className={`text-muted/60 text-sm mt-12 transition-all duration-700 delay-[1000ms] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          Working prototypes in 7-14 days — Arabic-first — Pay only for results
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-teal/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
