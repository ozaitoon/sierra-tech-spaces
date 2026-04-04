"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="nav-wrapper" style={scrolled ? { padding: "8px var(--container-pad)" } : undefined}>
        <nav className="nav-bar">
          <a href="#" className="nav-logo">
            <Image src="/logo.jpeg" alt="STS" width={36} height={36} />
            <span className="nav-logo-text">SIERRA TECH</span>
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/201234567890?text=Hi%20Sierra%20Tech%2C%20I%27d%20like%20to%20learn%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Get Started
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/201234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          onClick={() => setMobileOpen(false)}
        >
          Get Started
        </a>
      </div>
    </>
  );
}
