import Link from "next/link";

import type { AttaBlogLocale } from "@/lib/atta-blog-data";

export default function AttaBlogHeader({ language }: { language: AttaBlogLocale }) {
  const ar = language === "ar";

  return (
    <header dir={ar ? "rtl" : "ltr"} className="fixed inset-x-0 top-0 z-50 px-4 pt-4 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 rounded-full border border-[#2f9bff]/22 bg-[#07142d]/82 px-3 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:gap-4 sm:px-4">
        <Link href={ar ? "/atta?lang=ar" : "/atta"} className="flex items-center gap-3" aria-label="Atta Group home">
          <img
            src="/atta/atta-full-logo-transparent.png"
            alt="Mohamed Atta For Construction and General Supplies"
            width={1729}
            height={910}
            className="h-auto w-14 object-contain opacity-95 sm:w-40"
          />
        </Link>

        <nav className="flex shrink-0 items-center gap-1 text-xs font-bold sm:text-sm">
          <Link href={ar ? "/atta?lang=ar" : "/atta"} className="hidden rounded-full px-3 py-2 text-white/72 transition hover:bg-[#2f9bff]/14 hover:text-white sm:inline-flex">
            {ar ? "الرئيسية" : "Home"}
          </Link>
          <Link href={ar ? "/atta/blogs?lang=ar" : "/atta/blogs"} className="rounded-full bg-[#2f9bff] px-4 py-2 text-white transition hover:bg-[#6ec6ff]">
            {ar ? "المدونة" : "Blogs"}
          </Link>
          <Link href={ar ? "/atta/blogs" : "/atta/blogs?lang=ar"} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-white/78 transition hover:bg-white/10 hover:text-white">
            {ar ? "EN" : "AR"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
