import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Solutions", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Team", href: "#team" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container max-w-[900px] py-16">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo */}
          <Image
            src="/logo-sts.png"
            alt="Sierra Tech Spaces"
            width={80}
            height={80}
            className="object-contain"
          />

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-light text-white/50 hover:text-white transition-colors tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-16 h-px bg-white/[0.08]" />

          {/* Contact */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-light text-white/40">Cairo, Egypt</span>
            <a
              href="mailto:hello@sierratechspaces.com"
              className="text-sm font-light text-purple-400 hover:text-purple-300 transition-colors"
            >
              hello@sierratechspaces.com
            </a>
          </div>

          {/* Copyright */}
          <span className="text-xs font-light text-white/20">
            &copy; 2026 Sierra Tech Spaces. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
