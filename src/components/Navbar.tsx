"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const leftLinks = [
  { label: "Home", href: "#" },
  { label: "Solutions", href: "#services" },
  { label: "Blog", href: "/blog" },
];

const rightLinks = [
  { label: "Portfolio", href: "#process" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#team" },
];

const allLinks = [...leftLinks, ...rightLinks];

function NavLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-[0.9375rem] font-light tracking-widest uppercase transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent font-normal"
          : "text-white hover:text-white/80"
      }`}
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const sectionIds = ["services", "process", "why", "team"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { threshold: 0.3 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "px-4 pt-2" : "px-6 pt-3"}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="max-w-[1120px] mx-auto flex items-center justify-between h-16 px-6">
          {/* Left links */}
          <div className="hidden md:flex items-center justify-end gap-12 flex-1">
            {leftLinks.map((l) => (
              <NavLink
                key={l.href}
                href={l.href}
                label={l.label}
                isActive={activeHref === l.href}
                onClick={() => setActiveHref(l.href)}
              />
            ))}
          </div>

          {/* Center logo */}
          <a href="#" className="flex items-center justify-center flex-shrink-0 mx-6">
            <Image
              src="/logo-sts.png"
              alt="Sierra Tech Spaces"
              width={160}
              height={160}
              className="object-contain"
              priority
            />
          </a>

          {/* Right links */}
          <div className="hidden md:flex items-center justify-start gap-12 flex-1">
            {rightLinks.map((l) => (
              <NavLink
                key={l.href}
                href={l.href}
                label={l.label}
                isActive={activeHref === l.href}
                onClick={() => setActiveHref(l.href)}
              />
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1 p-2.5"
            aria-label="Menu"
          >
            <span className={`w-[18px] h-[1.5px] bg-foreground rounded transition-all ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`w-[18px] h-[1.5px] bg-foreground rounded transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`w-[18px] h-[1.5px] bg-foreground rounded transition-all ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {allLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => {
                  setActiveHref(l.href);
                  setOpen(false);
                }}
                className={`font-display text-xl font-light uppercase tracking-widest transition-colors ${
                  activeHref === l.href
                    ? "bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent font-normal"
                    : "text-white hover:text-white/80"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
