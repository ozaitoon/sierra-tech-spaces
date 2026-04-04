import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer>
      <Separator />
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-gold.png" alt="STS" width={28} height={28} className="rounded-md" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-[0.75rem] tracking-[0.05em] text-foreground">
                SIERRA TECH SPACES
              </span>
              <span className="text-[0.6875rem] text-warm-500">Cairo, Egypt</span>
            </div>
          </div>

          <nav className="flex items-center gap-5">
            {["Services", "Process", "Why Us", "Team", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(" ", "-")}`}
                className="text-[0.8125rem] text-warm-500 hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <span className="text-[0.6875rem] text-warm-500/50">
            &copy; 2026 Sierra Tech Spaces
          </span>
        </div>
      </div>
    </footer>
  );
}
