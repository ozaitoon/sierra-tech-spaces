"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Factory,
  Mail,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { attaProjects, type AttaProject } from "@/lib/atta-data";
import { localizeAttaProject, type AttaLanguage } from "@/lib/atta-project-arabic";

const AttaIndustrialScene = dynamic(() => import("./AttaIndustrialScene"), { ssr: false });

const googleMapsUrl = "https://www.google.com/maps?q=30.0092778,31.4240833";

export default function ProjectDetail({ project, language = "en" }: { project: AttaProject; language?: AttaLanguage }) {
  const ar = language === "ar";
  const currentProject = localizeAttaProject(project, language);
  const related = attaProjects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3)
    .map((item) => localizeAttaProject(item, language));
  const homeHref = ar ? "/atta?lang=ar#projects" : "/atta#projects";

  return (
    <main
      dir={ar ? "rtl" : "ltr"}
      lang={language}
      className={`min-h-screen overflow-x-hidden bg-[#020303] text-white ${ar ? "[font-family:var(--atta-arabic)]" : "[font-family:var(--atta-body)]"}`}
    >
      <section className="relative min-h-screen overflow-hidden px-5 pt-24 sm:px-8">
        <img
          src={currentProject.images[0]}
          alt={currentProject.title}
          width={1200}
          height={900}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020303_0%,rgba(2,3,3,0.9)_45%,rgba(2,3,3,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,3,0)_0%,#020303_100%)]" />
        <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(90deg,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:70px_70px]" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 py-12 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <Link href={homeHref} className="mb-8 inline-flex h-11 items-center gap-2 rounded-[8px] border border-white/12 bg-white/[0.05] px-4 text-sm font-black text-white backdrop-blur-xl">
              <ArrowLeft className={`h-4 w-4 ${ar ? "rotate-180" : ""}`} />
              {ar ? "العودة إلى المشروعات" : "Back to projects"}
            </Link>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-sm font-black uppercase text-[#f5c16c]"
            >
              {currentProject.category} / {currentProject.sector}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="[font-family:var(--atta-display)] mt-4 max-w-5xl text-[clamp(3rem,7vw,7.5rem)] uppercase leading-[0.86] text-white"
            >
              {currentProject.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-white/72"
            >
              {currentProject.scope}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="relative hidden min-h-[520px] lg:block"
          >
            <AttaIndustrialScene />
            <div className="absolute bottom-12 left-1/2 w-[82%] -translate-x-1/2 rounded-[8px] border border-white/12 bg-[#060809]/78 p-5 backdrop-blur-xl">
              <p className="text-xs font-black uppercase text-white/40">{ar ? "موقع المشروع" : "Project location"}</p>
              <p className="mt-2 text-2xl font-black uppercase text-[#f5c16c]">{currentProject.location}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <p className="text-sm font-black uppercase text-[#f5c16c]">{ar ? "قصة المشروع" : "Project story"}</p>
            <h2 className="[font-family:var(--atta-display)] mt-4 text-4xl uppercase leading-[0.94] text-white sm:text-6xl">
              {ar ? "صفحة مشروع مبنية للمشترين الجادين." : "A case page built for serious buyers."}
            </h2>
          </div>
          <div className="grid gap-5 text-lg leading-8 text-white/66">
            <p>{currentProject.story}</p>
            <p>{currentProject.challenge}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050708] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-6 lg:p-8">
            <Ruler className="h-8 w-8 text-[#f5c16c]" />
            <h2 className="[font-family:var(--atta-display)] mt-8 text-4xl uppercase leading-none text-white">{ar ? "نطاق التنفيذ" : "Delivery scope"}</h2>
            <div className="mt-7 grid gap-3">
              {currentProject.delivery.map((item) => (
                <div key={item} className="flex gap-3 rounded-[8px] border border-white/10 bg-black/22 px-4 py-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#ff6a2a]" />
                  <span className="text-base font-semibold leading-6 text-white/76">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border border-[#f5c16c]/22 bg-[#f5c16c]/[0.055] p-6 lg:p-8">
            <ShieldCheck className="h-8 w-8 text-[#f5c16c]" />
            <h2 className="[font-family:var(--atta-display)] mt-8 text-4xl uppercase leading-none text-white">{ar ? "القيمة التجارية" : "Commercial value"}</h2>
            <div className="mt-7 grid gap-3">
              {currentProject.outcomes.map((item) => (
                <div key={item} className="flex gap-3 rounded-[8px] border border-white/10 bg-black/22 px-4 py-3">
                  <Factory className="mt-0.5 h-5 w-5 shrink-0 text-[#18d5c2]" />
                  <span className="text-base font-semibold leading-6 text-white/76">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-2">
            {currentProject.images.map((image) => (
              <img
                key={image}
                src={image}
                alt={currentProject.title}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-[360px] w-full rounded-[8px] border border-white/10 object-cover sm:h-[520px]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050708] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase text-[#f5c16c]">{ar ? "مشروعات أخرى" : "More cases"}</p>
              <h2 className="[font-family:var(--atta-display)] mt-4 text-4xl uppercase leading-none text-white sm:text-5xl">
                {ar ? "تابع استعراض أدلة أعمال عطا." : "Keep browsing Atta proof."}
              </h2>
            </div>
            <Link href={homeHref} className="inline-flex h-11 items-center gap-2 rounded-[8px] border border-white/12 px-4 text-sm font-black text-white">
              {ar ? "عرض كل المشروعات" : "View all projects"}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-3 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={ar ? `/atta/projects/${item.slug}?lang=ar` : `/atta/projects/${item.slug}`}
                className="group overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] transition hover:border-[#f5c16c]/55"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  width={600}
                  height={420}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full object-cover opacity-78 transition group-hover:opacity-100"
                />
                <div className="p-5">
                  <p className="text-xs font-black uppercase text-[#18d5c2]">{item.category}</p>
                  <h3 className="mt-3 text-xl font-black uppercase leading-6 text-white">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5c16c] px-5 py-20 text-black sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase text-black/55">{ar ? "الخطوة التالية" : "Next step"}</p>
            <h2 className="[font-family:var(--atta-display)] mt-4 text-4xl uppercase leading-[0.92] text-black sm:text-6xl">
              {ar ? "استخدم هذا المشروع لبدء حديث التنفيذ." : "Use this case to start the project conversation."}
            </h2>
            <a href={currentProject.sourceLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-black/60">
              {ar ? "السجل الأصلي القديم" : "Legacy source record"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-3">
            <a href="tel:+201214444253" className="flex items-center gap-4 rounded-[8px] bg-black px-5 py-4 text-white">
              <Phone className="h-5 w-5 text-[#f5c16c]" />
              <span className="font-black">01214444253</span>
            </a>
            <a href="tel:+201159900749" className="flex items-center gap-4 rounded-[8px] bg-black px-5 py-4 text-white">
              <Phone className="h-5 w-5 text-[#f5c16c]" />
              <span className="font-black">01159900749</span>
            </a>
            <a href="mailto:info@atta-group.net" className="flex items-center gap-4 rounded-[8px] bg-white px-5 py-4 text-black">
              <Mail className="h-5 w-5 text-[#ff6a2a]" />
              <span className="font-black">info@atta-group.net</span>
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-[8px] bg-black/12 px-5 py-4 text-black transition hover:bg-black/20"
            >
              <MapPin className="mt-1 h-5 w-5 shrink-0" />
              <span className="font-black leading-7">
                {ar ? "فرست مول، الحي الأول، شارع التسعين الجنوبي، التجمع الخامس، الدور الثاني" : "First Mall, First District, South 90th Street, Fifth Settlement, 2nd Floor"}
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
