import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Sierra Tech Spaces"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <div>
              <span className="font-display font-bold text-sm text-white tracking-wide">
                SIERRA TECH SPACES
              </span>
              <p className="text-muted text-xs">Cairo, Egypt</p>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="#services"
              className="text-muted text-sm hover:text-teal transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-muted text-sm hover:text-teal transition-colors"
            >
              Process
            </a>
            <a
              href="#why-sts"
              className="text-muted text-sm hover:text-teal transition-colors"
            >
              Why Us
            </a>
            <a
              href="#team"
              className="text-muted text-sm hover:text-teal transition-colors"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-muted text-sm hover:text-teal transition-colors"
            >
              Contact
            </a>
          </nav>

          <p className="text-muted/50 text-xs">
            &copy; 2026 Sierra Tech Spaces. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
