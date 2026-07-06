"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowUpRight,
  BadgeCheck,
  Bolt,
  ChevronDown,
  ChevronRight,
  CircuitBoard,
  Download,
  Factory,
  FileText,
  Gauge,
  Globe2,
  Hammer,
  LogIn,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import { attaProjects, attaServices, type AttaServiceIcon } from "@/lib/atta-data";

const LaserFlow = dynamic(() => import("@/components/LaserFlow"), { ssr: false });

const serviceIcons: Record<AttaServiceIcon, typeof Hammer> = {
  hammer: Hammer,
  wrench: Wrench,
  zap: Zap,
  shield: ShieldCheck,
  circuit: CircuitBoard,
};

type Language = "en" | "ar";

const linkedinUrl = "https://www.linkedin.com/company/atta-group-co/";
const googleMapsUrl = "https://www.google.com/maps?q=30.0092778,31.4240833";
const leadGeneratorLoginHref = "/login?next=/dashboard/atta-leads";

const isArabic = (language: Language) => language === "ar";

const navCopy = {
  en: {
    services: "Services",
    products: "Products",
    projects: "Projects",
    transformers: "Transformers",
    pdf: "PDF Brief",
    blogs: "Blogs",
    contact: "Contact",
    linkedin: "LinkedIn",
    login: "Login",
    switchLabel: "AR",
    closeMenu: "Close menu",
    openMenu: "Open menu",
  },
  ar: {
    services: "الخدمات",
    products: "المنتجات",
    projects: "المشروعات",
    transformers: "المحولات",
    pdf: "ملخص الملفات",
    blogs: "المدونة",
    contact: "تواصل معنا",
    linkedin: "لينكدإن",
    login: "تسجيل الدخول",
    switchLabel: "EN",
    closeMenu: "إغلاق القائمة",
    openMenu: "فتح القائمة",
  },
};

const serviceArabic: Record<string, Partial<(typeof attaServices)[number]>> = {
  "civil-works": {
    title: "الأعمال المدنية",
    kicker: "حفر / خرسانة / طرق",
    summary: "تنفيذ مدني للمواقع الصناعية ومواقع البترول والطاقة والبنية التحتية حيث تتحكم السرعة والوصول والمتانة في نجاح المشروع.",
    detail: "تغطي محمد عطا تجهيز المواقع، الحفر، الأساسات، طرق الوصول، الأعمال الخرسانية، والحزم المدنية مع تنسيق ميداني عملي.",
    bullets: ["الحفر والأعمال الترابية", "الأساسات الخرسانية", "طرق الوصول ومسارات الموقع", "تطوير المواقع الصناعية"],
    outcomes: ["تسليم أوضح بين التصميم والتنفيذ", "تحكم أفضل في قيود الموقع والوصول", "حزم مدنية مناسبة لمواقع البترول والمرافق"],
  },
  "mechanical-electrical": {
    title: "الأعمال الميكانيكية والكهربائية",
    kicker: "خطوط / خزانات / كهروميكانيك",
    summary: "طبقة تنفيذ واحدة للأعمال الميكانيكية والكهربائية داخل منشآت البترول وخطوط الأنابيب والخزانات والتركيبات الميدانية.",
    detail: "يجمع العرض بين العمالة، المواد، اللحام، المعايرة، التركيب، وتنسيق الموقع لفريق ميداني واحد مسؤول.",
    bullets: ["لحام خطوط الأنابيب", "معايرة الخزانات", "تنسيق كهروميكانيكي", "دعم التركيبات الميدانية"],
    outcomes: ["تقليل احتكاك التنسيق بين التخصصات", "تحريك أسرع للحزم المختلطة", "فرق ميدانية منظمة لتسليم مواقع البترول"],
  },
  "electrical-works": {
    title: "الأعمال الكهربائية",
    kicker: "قدرة / حماية / أنظمة",
    summary: "توزيع كهرباء وحماية وتركيب وصيانة للأنظمة الصناعية وأنظمة قطاع الطاقة.",
    detail: "تتعامل محمد عطا مع الكهرباء كعنصر يعتمد عليه التشغيل والسلامة في البيئات الصناعية الصعبة.",
    bullets: ["توزيع القدرة", "أنظمة الحماية", "التركيبات الكهربائية", "دعم الصيانة"],
    outcomes: ["ربط الأعمال الكهربائية بالتشغيل والسلامة", "إيقاع واحد للمشتريات والتركيب", "تواصل أوضح مع مديري المشروعات"],
  },
  "facility-maintenance": {
    title: "صيانة المنشآت",
    kicker: "اعتمادية / إصلاح / دورة حياة",
    summary: "تخطيط صيانة وفحوصات دورية واستعداد للإصلاح ودعم طويل الأجل للمنشآت العاملة.",
    detail: "الصيانة هنا برنامج اعتمادية يمنع الأعطال الصغيرة من التحول إلى توقفات ويحافظ على عمر الأصول.",
    bullets: ["فحوصات دورية", "إصلاحات معقدة", "كفاءة تشغيلية", "إطالة عمر البنية التحتية"],
    outcomes: ["تقليل مخاطر التوقف", "تخطيط صيانة أكثر وضوحا", "دعم دورة حياة للأصول المدنية والميكانيكية والكهربائية"],
  },
  "transform-supplier": {
    title: "المحولات والتوريدات الكهربائية",
    kicker: "محولات / DATSAN / لوحات",
    summary: "توريد محولات ولوحات ومواد كهربائية وتنسيق لوجستي ودعم مشتريات مرتبط بجداول المشروعات.",
    detail: "تظهر محمد عطا كشريك عملي لتوريد محولات DATSAN ولوحات الكهرباء والمواد المطلوبة للمشروعات.",
    bullets: ["محولات DATSAN", "محولات توزيع", "محولات CSP وعزل", "لوحات كهربائية"],
    outcomes: ["سبب أوضح للتواصل مبكرا مع محمد عطا", "توريد وتركيب تحت مظلة تجارية واحدة", "تحويل توفر المحولات إلى ميزة للمشروع"],
  },
};

const projectArabic: Record<string, Partial<(typeof attaProjects)[number]>> = {
  "overhead-transmission-line-civil-works": {
    title: "أعمال مدنية لخط نقل هوائي وحفر ربط الأعمدة",
    category: "أعمال مدنية",
    location: "مسار خط نقل",
    sector: "بنية تحتية للطاقة",
    scope: "أعمال مدنية مطلوبة للبنية التحتية لخطوط النقل الهوائية، تشمل الحفر لربط الأعمدة.",
    story: "حزمة مدنية ميدانية تدعم بنية نقل الطاقة حيث تهم دقة الحفر وجاهزية المسار والتنفيذ الموثوق.",
  },
  "mechanical-works-agreement": {
    title: "اتفاقية أعمال ميكانيكية",
    category: "ميكانيكا",
    location: "موقع بترولي",
    sector: "بترول وغاز",
    scope: "حزمة تنفيذ ميكانيكية تشمل دعم التركيبات والتصنيع والتنسيق بالموقع.",
    story: "مشروع يوضح قدرة محمد عطا على العمل كمقاول ميداني عملي داخل بيئات البترول.",
  },
  "borg-el-arab-charging-line-protection": {
    title: "حماية خطوط الشحن عند تقاطع القطار الكهربائي السريع ببرج العرب",
    category: "أعمال حماية",
    location: "برج العرب",
    sector: "واجهة نقل وطاقة",
    scope: "أعمال حماية لخطوط الشحن عند تقاطعها مع مسار القطار الكهربائي السريع.",
    story: "مشروع تقاطع بنية تحتية يتطلب حماية واضحة للأصول الكهربائية ومسار النقل.",
  },
  "abu-gharadig-tafla-access-road": {
    title: "إنشاء طريق طفلة في أبو غراديق",
    category: "بنية تحتية مدنية",
    location: "أبو غراديق",
    sector: "بنية وصول بترولية",
    scope: "إنشاء طريق طفلة بطول 11 كم وعرض 4 م وسمك 25 سم.",
    story: "نطاق مدني رقمي واضح يحول تحدي الوصول لمواقع البترول إلى دليل تنفيذ ملموس.",
  },
  "oil-tank-calibration-mare-and-sand": {
    title: "معايرة خزانات الزيت في موقعي Mare و Sand",
    category: "معايرة",
    location: "Mare و Sand",
    sector: "تخزين بترولي",
    scope: "معايرة خزانات زيت داخل مواقع تشغيل بترولية.",
    story: "نطاق فني يدعم دقة القياس والاعتمادية التشغيلية في محفظة أعمال محمد عطا.",
  },
  "abu-al-gharadiq-six-inch-line-welding": {
    title: "لحام خط 6 بوصة Schedule 80 بطول 10 كم",
    category: "لحام خطوط",
    location: "أبو الغراديق",
    sector: "بنية خطوط بترولية",
    scope: "أعمال لحام لخط 6 بوصة Schedule 80 بطول 10 كم.",
    story: "مشروع لحام خطوط بمواصفات واضحة يصلح كدليل قوي لعملاء الميكانيكا والبترول.",
  },
  "overhead-line-fabrication-hot-galvanizing": {
    title: "تصنيع وجلفنة ساخنة لخط نقل هوائي",
    category: "تصنيع",
    location: "بنية نقل كهرباء",
    sector: "بنية تحتية للطاقة",
    scope: "أعمال تصنيع وجلفنة ساخنة تدعم بنية خطوط النقل الهوائية.",
    story: "مشروع تصنيع يوسع صورة محمد عطا من التنفيذ الميداني إلى تجهيز وحماية مكونات البنية التحتية.",
  },
};

function localizeService<T extends (typeof attaServices)[number]>(service: T, language: Language): T {
  return language === "ar" ? ({ ...service, ...serviceArabic[service.id] } as T) : service;
}

function localizeProject<T extends (typeof attaProjects)[number]>(project: T, language: Language): T {
  return language === "ar" ? ({ ...project, ...projectArabic[project.slug] } as T) : project;
}

function Loader({ language }: { language: Language }) {
  const ar = isArabic(language);
  const transformers = Array.from(
    { length: 10 },
    (_, index) => `/atta/loader-transformers/realistic_transformer_${String(index + 1).padStart(2, "0")}_transparent.png`,
  );

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#020711] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(47,155,255,0.22),transparent_32%),radial-gradient(circle_at_72%_62%,rgba(24,213,194,0.1),transparent_26%),linear-gradient(180deg,#041023_0%,#020711_58%,#020303_100%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,rgba(110,198,255,0.1)_1px,transparent_1px),linear-gradient(rgba(110,198,255,0.08)_1px,transparent_1px)] [background-size:62px_62px]" />
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2f9bff]/20 bg-[#2f9bff]/[0.04] blur-2xl" />

      <div className="relative flex w-[min(680px,88vw)] flex-col items-center text-center">
        <div className="relative grid h-[min(48vh,390px)] w-full place-items-center">
          <div className="absolute h-64 w-64 rounded-full border border-[#2f9bff]/20 bg-[#2f9bff]/[0.06] blur-xl sm:h-80 sm:w-80" />
          {transformers.map((src, index) => (
            <motion.img
              key={src}
              src={src}
              alt="DATSAN transformer loading preview"
              width={324}
              height={294}
              decoding="async"
              className="absolute max-h-[19rem] w-auto object-contain drop-shadow-[0_24px_70px_rgba(47,155,255,0.22)] sm:max-h-[24rem]"
              initial={{ opacity: index === 0 ? 1 : 0, scale: index === 0 ? 1 : 0.9, rotate: -2, y: 10 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.9, 1, 1.04, 0.96],
                rotate: [-2, 0, 1.4, 2],
                y: [10, 0, -4, -8],
              }}
              transition={{
                duration: 0.42,
                times: [0, 0.22, 0.76, 1],
                repeat: Infinity,
                repeatDelay: 1.38,
                delay: index * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}
        </div>

        <div className="mt-2 flex items-center gap-3 rounded-full border border-[#2f9bff]/24 bg-[#2f9bff]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#6ec6ff] backdrop-blur-xl">
          <Gauge className="h-4 w-4" />
          {ar ? "تحميل صفحة محولات DATSAN" : "Loading DATSAN transformer desk"}
        </div>
        <p className="[font-family:var(--atta-display)] mt-5 text-4xl uppercase leading-[0.86] tracking-[-0.04em] text-white sm:text-6xl">
          {ar ? "جاري التجهيز" : "Powering up"}
        </p>
        <div className="mt-7 w-full max-w-[520px]">
          <div className="mb-3 flex items-center justify-between text-[11px] font-black uppercase tracking-[0.22em] text-white/48">
            <span>{ar ? "محمد عطا" : "Mohammed Atta"}</span>
            <span>{ar ? "المحولات" : "Transformers"}</span>
          </div>
          <div className="relative h-3 overflow-hidden rounded-full border border-[#2f9bff]/20 bg-white/[0.055]">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#1f6fff] via-[#2f9bff] to-[#18d5c2] shadow-[0_0_26px_rgba(47,155,255,0.55)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.1, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/55 to-transparent"
              initial={{ x: "-6rem" }}
              animate={{ x: "34rem" }}
              transition={{ duration: 1.05, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.1 }}
            />
          </div>
        </div>
        <div className="mt-5 flex gap-2">
          <motion.div
            className="h-2 w-2 rounded-full bg-[#2f9bff]"
            animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.35, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
          />
          <motion.div
            className="h-2 w-2 rounded-full bg-[#6ec6ff]"
            animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.35, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: 0.15 }}
          />
          <motion.div
            className="h-2 w-2 rounded-full bg-[#18d5c2]"
            animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.35, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function AmbientField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020303]">
      <div className="absolute inset-0 opacity-25">
        <LaserFlow
          color="#2f9bff"
          horizontalBeamOffset={0.02}
          verticalBeamOffset={-0.5}
          horizontalSizing={0.58}
          verticalSizing={22}
          wispDensity={0.85}
          wispSpeed={14}
          wispIntensity={0.7}
          flowSpeed={0.18}
          flowStrength={0.36}
          fogIntensity={0.014}
          fogScale={0.42}
          fogFallSpeed={0}
          decay={1.34}
          falloffStart={1.95}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,3,0.62)_0%,rgba(2,3,3,0.9)_46%,#020303_100%)]" />
      <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.65%22/%3E%3C/svg%3E')]" />
    </div>
  );
}

function SectionLabel({ eyebrow, title }: { eyebrow: string; title?: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-bold uppercase">
      <span className="h-px w-10 bg-[#2f9bff]" />
      <span className="text-[#6ec6ff]">{eyebrow}</span>
      {title ? <span className="text-white/32">{title}</span> : null}
    </div>
  );
}

function Title({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`[font-family:var(--atta-display)] text-4xl uppercase leading-[0.92] text-white sm:text-6xl ${className}`}>
      {children}
    </h2>
  );
}

function AutoplayHeroVideo({
  src,
  poster,
  ariaLabel,
  playLabel,
}: {
  src: string;
  poster: string;
  ariaLabel: string;
  playLabel: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsTap, setNeedsTap] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      void video
        .play()
        .then(() => setNeedsTap(false))
        .catch(() => setNeedsTap(true));
    };

    const resume = () => {
      if (document.visibilityState !== "hidden") {
        tryPlay();
      }
    };

    tryPlay();
    document.addEventListener("visibilitychange", resume);
    window.addEventListener("focus", tryPlay);
    window.addEventListener("touchstart", tryPlay, { once: true, passive: true });

    return () => {
      document.removeEventListener("visibilitychange", resume);
      window.removeEventListener("focus", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="aspect-[16/10] w-full object-cover opacity-95"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={ariaLabel}
        controls={false}
        disablePictureInPicture
        onCanPlay={() => {
          const video = videoRef.current;
          if (video) {
            void video.play().catch(() => setNeedsTap(true));
          }
        }}
      />
      {needsTap ? (
        <button
          type="button"
          onClick={() => {
            const video = videoRef.current;
            if (!video) return;
            video.muted = true;
            void video.play().then(() => setNeedsTap(false));
          }}
          className="absolute inset-0 grid place-items-center bg-black/18 text-sm font-black uppercase text-white backdrop-blur-[1px]"
        >
          <span className="rounded-[8px] border border-white/14 bg-black/55 px-4 py-3 shadow-[0_0_32px_rgba(47,155,255,0.22)]">
            {playLabel}
          </span>
        </button>
      ) : null}
    </>
  );
}

function PulsingGridOverlay({ density = 72 }: { density?: number }) {
  const pulseLayers = [
    {
      image: "linear-gradient(90deg, rgba(110,198,255,0.75) 1px, transparent 1px)",
      mask: "linear-gradient(180deg, transparent 0%, black 16%, black 34%, transparent 52%)",
      duration: 4.8,
      delay: 0.1,
      peak: 0.48,
    },
    {
      image: "linear-gradient(90deg, rgba(24,213,194,0.58) 1px, transparent 1px)",
      mask: "linear-gradient(180deg, transparent 24%, black 42%, black 58%, transparent 78%)",
      duration: 6.1,
      delay: 1.4,
      peak: 0.36,
    },
    {
      image: "linear-gradient(rgba(110,198,255,0.66) 1px, transparent 1px)",
      mask: "linear-gradient(90deg, transparent 3%, black 21%, black 39%, transparent 57%)",
      duration: 5.5,
      delay: 0.7,
      peak: 0.42,
    },
    {
      image: "linear-gradient(rgba(24,213,194,0.52) 1px, transparent 1px)",
      mask: "linear-gradient(90deg, transparent 45%, black 60%, black 82%, transparent 100%)",
      duration: 7.2,
      delay: 2.3,
      peak: 0.3,
    },
  ];

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.28 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {pulseLayers.map((layer, index) => (
        <motion.div
          key={`${layer.duration}-${index}`}
          className="absolute inset-0 mix-blend-screen"
          style={{
            backgroundImage: layer.image,
            backgroundPosition: "0 0",
            backgroundSize: `${density}px ${density}px`,
            WebkitMaskImage: layer.mask,
            maskImage: layer.mask,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, layer.peak, 0.06, layer.peak * 0.45, 0] }}
          transition={{ duration: layer.duration, delay: layer.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </motion.div>
  );
}

function Navbar({ language, onLanguageChange }: { language: Language; onLanguageChange: (language: Language) => void }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const t = navCopy[language];
  const services = attaServices.map((service) => localizeService(service, language));
  const blogsHref = language === "ar" ? "/atta/blogs?lang=ar" : "/atta/blogs";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent px-4 pt-4 [font-family:var(--atta-body)]">
      <div className="relative mx-auto flex h-16 max-w-[92rem] items-center justify-between gap-3 lg:grid lg:grid-cols-[minmax(180px,1fr)_auto_minmax(360px,1fr)]">
        <Link href="/atta" className="ml-2 flex w-max items-center gap-3 sm:ml-4 xl:ml-6" dir="ltr" aria-label="Mohamed Atta For Construction and General Supplies">
          <img
            src="/atta/atta-full-logo-transparent.png"
            alt="Mohamed Atta For Construction and General Supplies"
            width={1729}
            height={910}
            decoding="async"
            className="h-auto w-36 object-contain opacity-95 drop-shadow-[0_0_18px_rgba(110,198,255,0.16)] sm:w-48 xl:w-60"
          />
        </Link>

        <nav className="hidden h-12 items-center gap-0.5 rounded-full border border-[#2f9bff]/22 bg-[#07142d]/76 px-2 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur-2xl xl:h-14 xl:gap-1 xl:px-3 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1.5 rounded-full px-3 py-2 text-[14px] font-medium text-white/82 transition hover:bg-[#2f9bff]/14 hover:text-white xl:px-4 xl:text-[15px]">
              {t.services}
              <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {servicesOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-[-22px] top-12 w-[350px] overflow-hidden rounded-[18px] border border-[#2f9bff]/18 bg-[#061326]/95 p-2 shadow-[0_28px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
                >
                  {services.map((service) => {
                    const Icon = serviceIcons[service.icon];
                    return (
                      <a
                        key={service.id}
                        href={`#${service.id}`}
                        className="group flex gap-3 rounded-[14px] p-3 transition hover:bg-[#2f9bff]"
                      >
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#6ec6ff] transition group-hover:text-white" />
                        <span>
                          <span className="block text-sm font-black text-white">{service.title}</span>
                          <span className="mt-1 block text-xs leading-5 text-white/48 group-hover:text-white/80">{service.kicker}</span>
                        </span>
                      </a>
                    );
                  })}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <a href="#products" className="rounded-full px-3 py-2 text-[14px] font-medium text-white/82 transition hover:bg-[#2f9bff]/14 hover:text-white xl:px-4 xl:text-[15px]">
            {t.products}
          </a>
          <a href="#projects" className="rounded-full px-3 py-2 text-[14px] font-medium text-white/82 transition hover:bg-[#2f9bff]/14 hover:text-white xl:px-4 xl:text-[15px]">
            {t.projects}
          </a>
          <a href="#datsan-transformers" className="rounded-full px-3 py-2 text-[14px] font-medium text-white/82 transition hover:bg-[#2f9bff]/14 hover:text-white xl:px-4 xl:text-[15px]">
            {t.transformers}
          </a>
          <a href={blogsHref} className="rounded-full px-3 py-2 text-[14px] font-medium text-white/82 transition hover:bg-[#2f9bff]/14 hover:text-white xl:px-4 xl:text-[15px]">
            {t.blogs}
          </a>
          <a href="#contact" className="rounded-full px-3 py-2 text-[14px] font-medium text-white/82 transition hover:bg-[#2f9bff]/14 hover:text-white xl:px-4 xl:text-[15px]">
            {t.contact}
          </a>
        </nav>

        <div className="hidden justify-self-end gap-1.5 lg:flex xl:gap-2">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Atta Group LinkedIn"
            className="grid h-12 w-12 place-items-center rounded-full border border-[#2f9bff]/25 bg-[#07142d]/76 text-white shadow-[0_0_28px_rgba(47,155,255,0.16)] transition hover:bg-[#2f9bff] xl:h-14 xl:w-14"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M6.94 8.9H3.72v10.39h3.22V8.9ZM5.33 3.73a1.86 1.86 0 1 0 0 3.72 1.86 1.86 0 0 0 0-3.72ZM20.28 13.33c0-3.13-1.67-4.58-3.9-4.58a3.36 3.36 0 0 0-3.02 1.66V8.9h-3.09v10.39h3.22v-5.14c0-1.36.26-2.68 1.94-2.68 1.66 0 1.69 1.55 1.69 2.77v5.05h3.22v-5.96h-.06Z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => onLanguageChange(language === "en" ? "ar" : "en")}
            className="inline-flex h-12 items-center gap-1.5 rounded-full border border-[#2f9bff]/25 bg-[#07142d]/76 px-3 text-[12px] font-black uppercase text-white shadow-[0_0_28px_rgba(47,155,255,0.16)] transition hover:bg-[#2f9bff] xl:h-14 xl:gap-2 xl:px-4 xl:text-[13px]"
          >
            <Globe2 className="h-4 w-4" />
            {t.switchLabel}
          </button>
          <a
            href="tel:+201214444253"
            className="inline-flex h-12 w-max items-center gap-1.5 rounded-full bg-[#2f9bff] px-3 text-[13px] font-semibold text-white shadow-[0_0_38px_rgba(47,155,255,0.28)] transition hover:bg-[#6ec6ff] xl:h-14 xl:gap-2 xl:px-5 xl:text-[15px]"
          >
            <Phone className="h-4 w-4" />
            01214444253
          </a>
          <a
            href={leadGeneratorLoginHref}
            className="inline-flex h-12 w-max items-center gap-1.5 rounded-full border border-[#2f9bff]/25 bg-[#07142d]/76 px-3 text-[13px] font-semibold text-white shadow-[0_0_28px_rgba(47,155,255,0.16)] transition hover:bg-[#2f9bff] xl:h-14 xl:gap-2 xl:px-5 xl:text-[15px]"
          >
            <LogIn className="h-4 w-4" />
            {t.login}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="fixed left-[70vw] top-[18px] z-[70] grid h-11 w-11 place-items-center rounded-full border border-[#2f9bff] bg-[#2f9bff] text-white shadow-[0_0_24px_rgba(47,155,255,0.24)] lg:hidden"
          aria-label={open ? t.closeMenu : t.openMenu}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-[#060809] px-5 py-5 md:hidden"
          >
            <div className="grid gap-2">
              <div className="mb-2 grid grid-cols-2 gap-2">
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#2f9bff] px-4 py-3 text-sm font-black text-white">
                  <span className="text-base font-black leading-none">in</span>
                  {t.linkedin}
                </a>
                <button type="button" onClick={() => onLanguageChange(language === "en" ? "ar" : "en")} className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-white">
                  <Globe2 className="h-4 w-4" />
                  {t.switchLabel}
                </button>
              </div>
              {services.map((service) => (
                <a key={service.id} href={`#${service.id}`} onClick={() => setOpen(false)} className="rounded-[8px] bg-white/[0.04] px-4 py-3 text-sm font-bold text-white">
                  {service.title}
                </a>
              ))}
              <a href="#products" onClick={() => setOpen(false)} className="rounded-[8px] bg-white/[0.04] px-4 py-3 text-sm font-bold text-white">
                {t.products}
              </a>
              <a href="#projects" onClick={() => setOpen(false)} className="rounded-[8px] bg-[#2f9bff] px-4 py-3 text-sm font-black text-white">
                {t.projects}
              </a>
              <a href="#datsan-transformers" onClick={() => setOpen(false)} className="rounded-[8px] bg-white/[0.04] px-4 py-3 text-sm font-bold text-white">
                {t.transformers}
              </a>
              <a href={blogsHref} onClick={() => setOpen(false)} className="rounded-[8px] bg-white/[0.04] px-4 py-3 text-sm font-bold text-white">
                {t.blogs}
              </a>
              <a href={leadGeneratorLoginHref} onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#2f9bff]/30 bg-[#2f9bff]/14 px-4 py-3 text-sm font-black text-white">
                <LogIn className="h-4 w-4" />
                {t.login}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero({ language }: { language: Language }) {
  const ar = isArabic(language);
  const heroCapabilities = ar
    ? ["توريدات كهربائية", "محولات", "أعمال مدنية", "تنفيذ ميكانيكي"]
    : ["Electrical supply", "Transformers", "Civil works", "Mechanical execution"];
  const copy = ar
    ? {
        eyebrow: "محمد عطا للتوريدات الصناعية والمقاولات",
        lines: ["توريدات", "طاقة صناعية", "جاهزة", "للمواقع"],
        text: "محولات ولوحات كهربائية ومواد مشروعات وأعمال مدنية وتنفيذ ميكانيكي ودعم صيانة من شريك توريد وتنفيذ ميداني واحد.",
        cta: "تواصل مع المبيعات",
        reel: "عرض القدرات",
        aria: "عرض توريدات الطاقة الصناعية",
        play: "تشغيل الفيديو",
      }
    : {
        eyebrow: "Mohammed Atta Industrial Supply & Contracting",
        lines: ["Industrial", "Power Supply", "Built for", "Site Work"],
        text: "Transformers, electrical panels, project materials, civil works, mechanical execution, and maintenance support from one field-ready procurement partner.",
        cta: "Contact sales",
        reel: "Live capability reel",
        aria: "Industrial power supply overview",
        play: "Tap to play video",
      };

  return (
    <section id="top" className="relative z-10 overflow-hidden pt-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(47,155,255,0.24),transparent_26%),radial-gradient(circle_at_78%_35%,rgba(24,213,194,0.16),transparent_30%),linear-gradient(125deg,#020711_0%,#061524_44%,#020303_100%)]" />
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(90deg,rgba(110,198,255,0.18)_1px,transparent_1px),linear-gradient(rgba(110,198,255,0.14)_1px,transparent_1px)] [background-size:92px_92px]" />
      <div className="absolute left-0 top-28 h-px w-full bg-gradient-to-r from-transparent via-[#6ec6ff]/70 to-transparent" />
      <div className="absolute right-[-10rem] top-20 h-[34rem] w-[34rem] rounded-full border border-[#2f9bff]/20 bg-[#2f9bff]/10 blur-3xl" />
      <div className="absolute bottom-0 left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#18d5c2]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#020303] to-transparent" />
      <PulsingGridOverlay density={92} />

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 overflow-hidden px-5 pb-8 pt-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:overflow-visible lg:pb-10 lg:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 min-w-0"
        >
          <div className="mb-6 inline-flex max-w-[calc(100vw-2.5rem)] items-center gap-3 rounded-[8px] border border-[#2f9bff]/35 bg-[#2f9bff]/10 px-4 py-2 text-xs font-black uppercase leading-6 text-[#6ec6ff] backdrop-blur-xl sm:max-w-full sm:text-sm">
            <CircuitBoard className="h-4 w-4 shrink-0" />
            <span className="min-w-0 text-balance">{copy.eyebrow}</span>
          </div>
          <h1 className="[font-family:var(--atta-display)] max-w-[calc(100vw-2.5rem)] text-[2.45rem] uppercase leading-[0.86] tracking-normal text-white sm:max-w-5xl sm:text-5xl lg:text-[4.7rem] xl:text-[5rem]">
            {copy.lines[0]}
            <span className="block text-[#6ec6ff]">{copy.lines[1]}</span>
            <span className="block text-white">{copy.lines[2]}</span>
            <span className="block text-white">{copy.lines[3]}</span>
          </h1>
          <p className="mt-6 max-w-[calc(100vw-2.5rem)] text-base font-semibold leading-8 text-white/68 sm:max-w-2xl sm:text-xl sm:leading-9">
            {copy.text}
          </p>
          <a href="#contact" className="mt-7 inline-flex h-14 w-full max-w-[calc(100vw-2.5rem)] items-center justify-center gap-2 rounded-[8px] bg-[#2f9bff] px-7 text-sm font-black uppercase text-white shadow-[0_0_44px_rgba(47,155,255,0.32)] transition hover:-translate-y-0.5 hover:bg-[#6ec6ff] sm:w-auto sm:max-w-none">
            {copy.cta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <div className="mt-5 flex flex-wrap gap-2">
            {heroCapabilities.map((item) => (
              <span key={item} className="rounded-[8px] border border-white/12 bg-white/[0.055] px-3 py-2 text-xs font-black uppercase text-white/72 backdrop-blur-xl">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-hidden py-3 sm:py-6 lg:overflow-visible"
        >
          <div className="absolute inset-3 rotate-[-2deg] rounded-[8px] border border-[#6ec6ff]/18 bg-[#2f9bff]/[0.055] shadow-[0_0_80px_rgba(47,155,255,0.18)] sm:inset-6" />
          <div className="relative overflow-hidden rounded-[8px] border border-[#6ec6ff]/28 bg-[#061326] p-2 shadow-[0_44px_140px_rgba(0,0,0,0.66)]">
            <div className="flex h-9 items-center justify-between border-b border-white/10 px-3">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#2f9bff]" />
                <span className="h-2 w-2 rounded-full bg-[#6ec6ff]" />
                <span className="h-2 w-2 rounded-full bg-[#18d5c2]" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/36">{copy.reel}</span>
            </div>
            <div className="relative overflow-hidden rounded-[6px] bg-black">
              <AutoplayHeroVideo
                src="/atta/hero-transformer-video-web.mp4"
                poster="/atta/transformers.jpg"
                ariaLabel={copy.aria}
                playLabel={copy.play}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0)_48%,rgba(47,155,255,0.2)_100%)]" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Clients({ language }: { language: Language }) {
  const partners = [
    { name: "Khalda Apache", logo: "/atta/partners-transparent/01_khalda_apache.png" },
    { name: "Orascom Construction Industries", logo: "/atta/partners-transparent/02_orascom_construction_industries.png" },
    { name: "Egyptian Maintenance Company", logo: "/atta/partners-transparent/03_emc_egyptian_maintenance_company.png" },
    { name: "Petrofarah", logo: "/atta/partners-transparent/04_petrofarah.png" },
    { name: "Bapetco", logo: "/atta/partners-transparent/05_bapetco.png" },
    { name: "Orascom Trading", logo: "/atta/partners-transparent/06_orascom_trading.png" },
    { name: "ETO", logo: "/atta/partners-transparent/07_eto.png" },
    { name: "EGTS", logo: "/atta/partners-transparent/08_egts.png" },
    { name: "Alexandria Drinking Water Company", logo: "/atta/partners-transparent/09_alexandria_drinking_water_company.png" },
    { name: "DATSAN", logo: "/atta/partners-transparent/10_datsan.png" },
  ];
  const marqueeItems = [...partners, ...partners];

  return (
    <section id="clients" className="relative z-10 overflow-hidden border-y border-[#2f9bff]/12 bg-[#020711] py-7 text-white sm:py-9">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-[220px_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-black uppercase tracking-[0.28em] text-white/72">{isArabic(language) ? "العملاء" : "Clients"}</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#6ec6ff]">
            {isArabic(language) ? "فرق البترول والمقاولات والبنية التحتية" : "Petroleum, construction, and infrastructure teams"}
          </p>
        </motion.div>
        <div className="relative overflow-hidden py-3">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-[#020711] to-transparent sm:w-28" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-[#020711] to-transparent sm:w-28" />
          <div className="flex w-max items-center gap-14 [animation:atta-logo-marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
            {marqueeItems.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex h-16 w-44 shrink-0 items-center justify-center transition hover:-translate-y-0.5 hover:opacity-100 sm:h-20 sm:w-56"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  width={224}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className="max-h-12 max-w-full object-contain opacity-[0.82] drop-shadow-[0_0_18px_rgba(110,198,255,0.14)] sm:max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnswerBrief({ language }: { language: Language }) {
  const ar = isArabic(language);
  const topics = ar
    ? ["محولات DATSAN", "مواد كهرباء ومولدات", "تنفيذ ميداني"]
    : ["DATSAN transformers", "Electrical materials and generators", "Civil and mechanical field work"];

  return (
    <section className="relative z-10 border-y border-[#2f9bff]/12 bg-[#050b14] px-5 py-14 text-white sm:px-8 lg:py-16">
      <div className={`mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start ${ar ? "text-right" : ""}`}>
        <div>
          <p className={`text-xs font-black text-[#6ec6ff] ${ar ? "" : "uppercase tracking-[0.24em]"}`}>{ar ? "إجابة مختصرة" : "Quick answer"}</p>
          <h2 className={`mt-3 text-3xl font-black leading-tight text-white sm:text-4xl ${ar ? "[font-family:var(--atta-arabic)]" : "[font-family:var(--atta-display)] uppercase"}`}>
            {ar ? "ماذا تورّد مجموعة عطا؟" : "What does Atta Group supply?"}
          </h2>
        </div>
        <div className="grid gap-5">
          <p className="max-w-4xl text-lg font-semibold leading-8 text-white/72">
            {ar
              ? "تورّد مجموعة عطا محولات DATSAN، لوحات كهربائية، مولدات نيتروجين وأكسجين، ومواد خطوط نقل هوائية داخل مصر. كما تدعم مشروعات البترول والمرافق والبنية التحتية بأعمال مدنية وميكانيكية وكهربائية، مع تنسيق عروض الأسعار والمستندات الفنية والتسليم من نقطة تواصل واحدة."
              : "Atta Group supplies DATSAN transformers, electrical panels, nitrogen and oxygen generators, and overhead transmission-line materials in Egypt. The company also supports petroleum, utility, and infrastructure projects with civil works, mechanical execution, electrical work, maintenance, quotation coordination, technical documents, delivery planning, and field handover from one commercial contact point."}
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {topics.map((item) => (
              <div key={item} className={`rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-white/72 ${ar ? "" : "uppercase"}`}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DatsanTransformerProducts({ language }: { language: Language }) {
  const ar = isArabic(language);
  const transformerLines = ar
    ? [
        {
          title: "محولات توزيع",
          text: "محولات زيتية ثلاثية الأوجه لرفع أو خفض الجهد بين الشبكة ومواقع التشغيل والمصانع ومشروعات البنية التحتية.",
        },
        {
          title: "محولات CSP",
          text: "محولات ذات حماية مدمجة تناسب تطبيقات التوزيع على الأعمدة أو القواعد عندما تكون الاعتمادية وسرعة التركيب أولوية.",
        },
        {
          title: "محولات عزل",
          text: "وحدات عزل كهربائي تقلل انتقال الضوضاء الكهربائية وتحمي الأحمال الحساسة داخل المواقع الصناعية والتشغيلية.",
        },
      ]
    : [
        {
          title: "Distribution transformers",
          text: "Three-phase oil-immersed transformers used to step voltage up or down for utility networks, industrial facilities, infrastructure projects, and site power distribution.",
        },
        {
          title: "CSP transformers",
          text: "Completely self-protected transformer options that combine protection features for pole or pad-mounted distribution applications where reliability and simplified installation matter.",
        },
        {
          title: "Isolation transformers",
          text: "Transformer units designed to provide galvanic isolation, reduce electrical noise transfer, and improve protection for sensitive industrial or operational loads.",
        },
      ];
  const stats = ar ? ["نطاقات 6.3 إلى 36 ك.ف", "قدرات 25 إلى 3150 ك.ف.أ", "اختبارات وفق IEC 60076"] : ["6.3 kV to 36 kV ranges", "25 kVA to 3150 kVA options", "IEC 60076 referenced testing"];

  return (
    <section id="datsan-transformers" className="relative z-10 overflow-hidden border-y border-white/10 bg-[#050708] px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(47,155,255,0.18),transparent_30%),radial-gradient(circle_at_82%_42%,rgba(24,213,194,0.12),transparent_28%),linear-gradient(180deg,rgba(2,3,3,0.12)_0%,rgba(5,7,8,0.9)_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-7 inline-flex rounded-[8px] border border-white/10 bg-white/[0.045] px-5 py-3 shadow-[0_0_34px_rgba(47,155,255,0.12)] backdrop-blur-xl">
            <img src="/atta/partners-transparent/10_datsan.png" alt="DATSAN" width={267} height={57} loading="lazy" decoding="async" className="h-8 w-auto object-contain opacity-95" />
          </div>
          <SectionLabel eyebrow={ar ? "محولات DATSAN" : "DATSAN Transformers"} title={ar ? "قبل المولدات وباقي التوريدات" : "Before generators and product supply"} />
          <Title>{ar ? "توريد محولات DATSAN لمشروعات الطاقة." : "DATSAN transformer supply for project power."}</Title>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
            {ar
              ? "محولات DATSAN هي وحدات قدرة كهربائية تستخدم لتحويل مستويات الجهد بأمان بين الشبكة وشبكات التوزيع ومعدات الموقع. دورها أساسي في استقرار التشغيل لأنها تنقل الطاقة بالجهد المناسب وتحمي الأنظمة التالية لها."
              : "DATSAN transformers are electrical power units used to safely convert voltage levels between the grid, distribution networks, and site equipment. They are central to reliable electrical infrastructure because they help move power at the right voltage, protect downstream systems, and support stable industrial operation."}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
            {ar
              ? "تساعد محمد عطا فرق المشتريات في اختيار المحول، تنسيق الكتالوجات، تجهيز عروض الأسعار، جمع المستندات الفنية، تخطيط التسليم، وربط التوريد بباقي حزمة الكهرباء في المشروع."
              : "Atta can support procurement teams with transformer selection, catalog coordination, quotation, technical documents, delivery planning, and alignment with the wider electrical package."}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item} className="rounded-[8px] border border-[#2f9bff]/20 bg-[#2f9bff]/[0.055] px-4 py-4 text-sm font-black text-white/78">
                {item}
              </div>
            ))}
          </div>
          <a href="/atta/catalogs/datsan-transformer-catalog.pdf" target="_blank" rel="noreferrer" className="mt-8 inline-flex h-12 items-center gap-2 rounded-[8px] bg-[#2f9bff] px-5 text-sm font-black uppercase text-white shadow-[0_0_40px_rgba(47,155,255,0.18)] transition hover:bg-[#6ec6ff]">
            {ar ? "افتح كتالوج المحولات" : "Open transformer catalog"}
            <Download className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-[8px] border border-white/10 bg-[#08101a]/88 shadow-[0_34px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
        >
          <div className="relative min-h-[390px] overflow-hidden bg-[radial-gradient(circle_at_50%_28%,rgba(110,198,255,0.2),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_70%)]">
            <motion.img
              src="/atta/transform-detail-1.jpeg"
              alt="DATSAN transformer"
              width={1201}
              height={1600}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-78"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,4,5,0.08)_0%,rgba(3,4,5,0.9)_100%)]" />
            <div className="absolute left-5 top-5 rounded-[8px] border border-white/10 bg-black/36 px-4 py-3 backdrop-blur-xl">
              <img src="/atta/partners-transparent/10_datsan.png" alt="DATSAN" width={267} height={57} loading="lazy" decoding="async" className="h-6 w-auto object-contain opacity-95" />
            </div>
            <div className="absolute bottom-0 p-6 sm:p-8">
              <CircuitBoard className="mb-4 h-9 w-9 text-[#6ec6ff]" />
              <h3 className="[font-family:var(--atta-display)] text-4xl uppercase leading-none text-white">
                {ar ? "تحويل جهد، حماية، وتوزيع مستقر." : "Voltage conversion, protection, and stable distribution."}
              </h3>
            </div>
          </div>
          <div className="grid gap-3 p-5 sm:p-6">
            {transformerLines.map((line) => (
              <motion.div
                key={line.title}
                className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <p className="text-sm font-black uppercase text-[#6ec6ff]">{line.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/58">{line.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SuppliedProducts({ language }: { language: Language }) {
  const ar = isArabic(language);
  const products = ar
    ? [
        {
          title: "مولدات نيتروجين",
          image: "/atta/products/nitrogen-generator.png",
          icon: Gauge,
          tag: "توليد N2 داخل الموقع",
          description: "أنظمة توليد نيتروجين للمواقع التي تحتاج غازا جافا وموثوقا للتغطية، التطهير، اختبارات الضغط، الحفظ، ودعم العمليات الصناعية.",
          supply: "نراجع النقاء المطلوب، معدل التدفق، الضغط، دورة التشغيل، وقيود التركيب ثم ننسق توريد الوحدة والملحقات والفلاتر والمستندات وخطة التسليم.",
          points: ["مطابقة النقاء والسعة", "توريد الوحدة والملحقات", "تنسيق التشغيل والدعم"],
        },
        {
          title: "مولدات أكسجين",
          image: "/atta/products/oxygen-generator.png",
          icon: Sparkles,
          tag: "توليد O2",
          description: "حزم توليد أكسجين للتطبيقات الصناعية والميدانية التي تحتاج إمدادا مستقرا وتريد تقليل الاعتماد على نقل الأسطوانات المتكرر.",
          supply: "نربط الحزمة بنقاء الأكسجين المطلوب، ضغط الخرج، التخزين، متطلبات السلامة، وخطة الصيانة قبل التوريد.",
          points: ["تحديد السعة حسب التطبيق", "تخطيط التخزين والخرج", "دعم ما بعد التوريد"],
        },
        {
          title: "لوحات كهربائية",
          image: "/atta/products/electric-panel.png",
          icon: CircuitBoard,
          tag: "توزيع وحماية",
          description: "توريد لوحات كهربائية للتوزيع والحماية والتحكم وحزم طاقة المشروعات في المواقع الصناعية والبنية التحتية.",
          supply: "نعمل من جدول الأحمال والمخطط الأحادي ومتطلبات القواطع ودرجة الحماية ومسارات الكابلات وموعد المشروع لتنسيق التوريد.",
          points: ["مواصفات القواطع والحاويات", "تنسيق جدول اللوحات", "تسليم بالمستندات الفنية"],
        },
        {
          title: "خطوط نقل هوائية",
          image: "/atta/products/overhead-transmission-lines.png",
          icon: Bolt,
          tag: "مهمات خطوط",
          description: "مهمات معدنية ومواد مرتبطة بخطوط النقل الهوائية لمسارات التوزيع والأعمال الخدمية وروابط المواقع ومشروعات الامتداد.",
          supply: "ندعم التوريد بحصر الكميات، اختيار الأعمدة والمهمات، مراعاة قيود المسار، وتسلسل التسليم مع فرق المدني أو التركيب.",
          points: ["دعم حصر المواد", "توريد الأعمدة والمهمات", "تسلسل تسليم للموقع"],
        },
      ]
    : [
        {
          title: "Nitrogen Generators",
          image: "/atta/products/nitrogen-generator.png",
          icon: Gauge,
          tag: "On-site N2 supply",
          description:
            "Nitrogen generation systems for facilities that need dry, reliable nitrogen for blanketing, purging, pressure testing, preservation, and industrial process support.",
          supply:
            "We confirm required purity, flow rate, pressure, duty cycle, and installation constraints, then source the right skid, accessories, filtration, documentation, and delivery plan.",
          points: ["Purity and capacity matching", "Skid and accessory sourcing", "Commissioning coordination"],
        },
        {
          title: "Oxygen Generators",
          image: "/atta/products/oxygen-generator.png",
          icon: Sparkles,
          tag: "O2 generation",
          description:
            "Oxygen generator packages for industrial and site applications where controlled oxygen supply reduces dependence on repeated cylinder logistics.",
          supply:
            "We align the generator package with target oxygen purity, outlet pressure, storage needs, safety requirements, and maintenance expectations before procurement.",
          points: ["Application-based sizing", "Storage and outlet planning", "After-supply support"],
        },
        {
          title: "Electrical Panels",
          image: "/atta/products/electric-panel.png",
          icon: CircuitBoard,
          tag: "Power distribution",
          description:
            "Electrical panel supply for distribution, protection, control, and project power packages across industrial, infrastructure, and utility-adjacent sites.",
          supply:
            "We work from the load schedule, single-line diagram, breaker requirements, enclosure rating, cable routing, and project deadline to coordinate panel supply.",
          points: ["Breaker and enclosure specs", "Panel schedule coordination", "Delivery with project documents"],
        },
        {
          title: "Overhead Transmission Lines",
          image: "/atta/products/overhead-transmission-lines.png",
          icon: Bolt,
          tag: "Line hardware",
          description:
            "Metal overhead transmission line materials and related supply items for power distribution routes, utility works, site links, and infrastructure extensions.",
          supply:
            "We support supply through quantity takeoff, pole and hardware selection, routing constraints, delivery sequencing, and coordination with civil or installation teams.",
          points: ["Material takeoff support", "Pole and hardware sourcing", "Site delivery sequencing"],
        },
      ];

  return (
    <section id="products" className="relative z-10 overflow-hidden border-y border-white/10 bg-[#030708] px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(47,155,255,0.16),transparent_28%),radial-gradient(circle_at_82%_38%,rgba(24,213,194,0.12),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:84px_84px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionLabel eyebrow={ar ? "توريدات المنتجات" : "Product supply"} title={ar ? "مولدات، لوحات، ومهمات خطوط" : "Generators, panels, and line materials"} />
        <motion.div
          className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <Title>{ar ? "منتجات نستطيع توريدها للمشروعات." : "Products we can source and supply."}</Title>
          <p className="max-w-xl text-lg leading-8 text-white/60">
            {ar
              ? "لا يقتصر دور محمد عطا على المقاولات. نستطيع دعم فرق المشتريات بتوريد منتجات صناعية مع مراجعة المواصفات وظروف الموقع والكميات والجدول الزمني ثم تنسيق المصدر وعرض السعر والمستندات والتسليم."
              : "Atta can support procurement teams with industrial product supply, not only contracting work. Share the required specs, site conditions, quantities, and schedule; we coordinate sourcing, quotation, documentation, delivery, and site handover."}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isTransmissionLine = product.image.includes("overhead-transmission-lines");
            return (
              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group grid min-h-[520px] overflow-hidden rounded-[8px] border border-white/10 bg-[#08101a]/88 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#2f9bff]/55 lg:grid-cols-[0.92fr_1.08fr]"
              >
                <div className="relative flex min-h-[280px] items-end justify-center overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_50%_32%,rgba(110,198,255,0.18),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_62%)] p-5 lg:border-b-0 lg:border-r">
                  <motion.div
                    className="absolute inset-x-8 bottom-7 h-20 rounded-full bg-[#2f9bff]/20 blur-3xl transition group-hover:bg-[#18d5c2]/24"
                    animate={{ opacity: [0.42, 0.68, 0.42], scaleX: [0.9, 1.04, 0.9] }}
                    transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  />
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className={`relative z-10 drop-shadow-[0_28px_42px_rgba(0,0,0,0.5)] transition duration-500 ${
                      isTransmissionLine
                        ? "h-[310px] w-[135%] max-w-none object-cover group-hover:scale-[1.08] sm:h-[370px] lg:w-[150%]"
                        : "max-h-[260px] max-w-full object-contain group-hover:scale-[1.04] sm:max-h-[320px]"
                    }`}
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 6 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <div className="flex flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-[#2f9bff]/24 bg-[#2f9bff]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#6ec6ff]">
                      {product.tag}
                    </span>
                    <Icon className="h-6 w-6 text-[#6ec6ff]" />
                  </div>
                  <h3 className="mt-7 text-3xl font-black uppercase leading-tight text-white">{product.title}</h3>
                  <p className="mt-5 text-base leading-7 text-white/58">{product.description}</p>
                  <div className={`mt-6 border-[#2f9bff] ${ar ? "border-r-2 pr-4" : "border-l-2 pl-4"}`}>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6ec6ff]">{ar ? "كيف نوردها" : "How we supply it"}</p>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white/68">{product.supply}</p>
                  </div>
                  <div className="mt-6 grid gap-2">
                    {product.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm font-bold text-white/72">
                        <BadgeCheck className="h-4 w-4 shrink-0 text-[#18d5c2]" />
                        {point}
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className="mt-7 inline-flex h-11 w-max items-center gap-2 rounded-[8px] bg-[#2f9bff] px-4 text-sm font-black uppercase text-white transition hover:bg-[#6ec6ff]">
                    {ar ? "أرسل المواصفات" : "Send product specs"}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FutureDevices({ language }: { language: Language }) {
  const ar = isArabic(language);
  const devices = ar
    ? [
        {
          title: "GUARDX AI",
          eyebrow: "مراقبة ESP بالذكاء الاصطناعي",
          image: "/atta/future/guardx-ai.png",
          icon: ShieldCheck,
          description: "GUARDX AI جهاز ونظام للمستقبل لمراقبة مؤشرات فشل مضخات ESP. يقرأ إشارات التشغيل، يبرز الأنماط غير الطبيعية، ويساعد فرق الحقول على الانتقال من رد الفعل بعد التوقف إلى قرارات صيانة مبكرة.",
          future: "قيمته المستقبلية: تقليل الأعطال المفاجئة، سرعة أعلى في الاستجابة الميدانية، تخطيط صيانة أوضح، ورؤية أفضل لحالة المضخة والبئر.",
          points: ["مراقبة مخاطر فشل ESP", "تنبيهات اتجاهات مدعومة بالذكاء الاصطناعي", "وضوح حالة المضخة والبئر"],
          supply: "ندعم مسار التوريد عبر مراجعة بيانات الموقع، نقاط الربط، بيئة التشغيل، متطلبات لوحة المتابعة، الحاوية، وتنسيق التشغيل الأولي.",
        },
        {
          title: "Nexus-N Micro-Reactor Power",
          eyebrow: "مفهوم طاقة حمل أساسي",
          image: "/atta/future/nexus-n-micro-reactor.png",
          icon: Zap,
          description: "Nexus-N جهاز للمستقبل: مفهوم طاقة مدمج قائم على بنية Heat Pipe Micro Reactor لتوفير طاقة حمل أساسي آمنة وطويلة المدى.",
          future: "قيمته المستقبلية: طاقة عالية الكثافة للمواقع الحرجة، البنية التحتية البعيدة، استمرارية التشغيل الصناعي، وأنظمة تحتاج خرجا مستقرا يتجاوز المولدات الاحتياطية التقليدية.",
          points: ["بنية HPMR لحمل أساسي مستقر", "متوافق مع مسار وقود TRISO / HALEU", "مبادل حراري معدني سائل بدرجة 600°C+ للتوربين"],
          supply: "للمشروعات المؤهلة، ندعم التعريف الفني، تنسيق دراسة الجدوى، المستندات، وربط الشركاء أو الموردين. أي توريد أو نشر نووي يظل خاضعا للتراخيص والجهات الرقابية والتنفيذ المتخصص المعتمد.",
        },
      ]
    : [
        {
          title: "GUARDX AI",
          eyebrow: "AI ESP monitoring",
          image: "/atta/future/guardx-ai.png",
          icon: ShieldCheck,
          description:
            "GUARDX AI is a future-facing monitoring device and system for ESP failure visibility. It is positioned to watch operating signals, surface abnormal patterns, and help field teams move from reactive shutdowns toward earlier maintenance decisions.",
          future:
            "Future value: fewer surprise ESP failures, faster field response, better maintenance planning, and clearer pump-health intelligence for oilfield operations.",
          points: ["ESP failure-risk monitoring", "AI-supported trend alerts", "Pump and well condition visibility"],
          supply:
            "We support the supply path by confirming site telemetry, integration points, operating environment, dashboard needs, enclosure requirements, and commissioning coordination.",
        },
        {
          title: "Nexus-N Micro-Reactor Power",
          eyebrow: "Baseload power concept",
          image: "/atta/future/nexus-n-micro-reactor.png",
          icon: Zap,
          description:
            "Nexus-N is a device for the future: a compact micro-reactor power concept built around advanced Heat Pipe Micro Reactor architecture for safe, long-duration baseload energy.",
          future:
            "Future value: high-density power for critical sites, remote infrastructure, industrial continuity, and energy systems that need stable output beyond conventional backup generation.",
          points: [
            "HPMR architecture for baseload output",
            "TRISO / HALEU compatible fuel pathway",
            "600°C+ liquid-metal heat exchange to turbine",
          ],
          supply:
            "For qualified projects, we support technical introduction, feasibility coordination, documentation, and partner/vendor alignment. Any nuclear-related procurement or deployment remains subject to licensing, regulator approval, and authorized specialist execution.",
        },
      ];

  return (
    <section id="future-devices" className="relative z-10 overflow-hidden bg-[#020303] px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_28%,rgba(24,213,194,0.15),transparent_30%),radial-gradient(circle_at_78%_12%,rgba(47,155,255,0.2),transparent_34%),linear-gradient(180deg,rgba(3,7,8,0.1)_0%,rgba(6,19,38,0.72)_100%)]" />
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(90deg,rgba(110,198,255,0.16)_1px,transparent_1px),linear-gradient(rgba(110,198,255,0.13)_1px,transparent_1px)] [background-size:96px_96px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionLabel eyebrow={ar ? "أجهزة المستقبل" : "Future devices"} title={ar ? "مراقبة ذكية وطاقة متقدمة" : "AI monitoring and advanced power"} />
        <motion.div
          className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <Title>{ar ? "أجهزة للمستقبل." : "Devices for the future."}</Title>
          <p className="max-w-2xl text-lg leading-8 text-white/60">
            {ar
              ? "هذه الأنظمة تشير إلى الطبقة القادمة من التوريد الصناعي: مراقبة أعطال أذكى، طاقة أكثر مرونة، ومعدات تساعد المواقع الحرجة على التشغيل برؤية مسبقة أفضل."
              : "These systems point toward the next layer of industrial supply: smarter failure monitoring, more resilient energy, and equipment that helps critical sites operate with better foresight."}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {devices.map((device, index) => {
            const Icon = device.icon;
            return (
              <motion.article
                key={device.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.26 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[8px] border border-[#2f9bff]/22 bg-[#061326]/82 shadow-[0_34px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#18d5c2]/55"
              >
                <div className="relative min-h-[380px] overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_50%_22%,rgba(110,198,255,0.2),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(2,3,3,0.08)_100%)]">
                  <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/34 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#6ec6ff] backdrop-blur-xl">
                    <Icon className="h-4 w-4" />
                    {device.eyebrow}
                  </div>
                  <motion.div
                    className="absolute inset-x-10 bottom-8 h-24 rounded-full bg-[#2f9bff]/24 blur-3xl transition group-hover:bg-[#18d5c2]/24"
                    animate={{ opacity: [0.4, 0.7, 0.4], scaleX: [0.92, 1.08, 0.92] }}
                    transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }}
                  />
                  <motion.img
                    src={device.image}
                    alt={device.title}
                    width={1024}
                    height={1536}
                    loading="lazy"
                    decoding="async"
                    className={`relative z-10 mx-auto h-[380px] w-full object-contain px-6 py-10 drop-shadow-[0_30px_55px_rgba(0,0,0,0.58)] transition duration-500 group-hover:scale-[1.035] ${
                      device.title === "GUARDX AI" ? "object-bottom" : "object-center"
                    }`}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 6.8 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="[font-family:var(--atta-display)] text-4xl uppercase leading-[0.92] text-white sm:text-5xl">{device.title}</h3>
                  <p className="mt-6 text-base leading-7 text-white/62">{device.description}</p>
                  <div className="mt-6 rounded-[8px] border border-[#18d5c2]/18 bg-[#18d5c2]/[0.055] p-4">
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#18d5c2]">{ar ? "لماذا يهم مستقبلا" : "Why it matters next"}</p>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white/68">{device.future}</p>
                  </div>
                  <div className="mt-6 grid gap-2">
                    {device.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm font-bold text-white/74">
                        <BadgeCheck className="h-4 w-4 shrink-0 text-[#18d5c2]" />
                        {point}
                      </div>
                    ))}
                  </div>
                  <div className={`mt-6 border-[#2f9bff] ${ar ? "border-r-2 pr-4" : "border-l-2 pl-4"}`}>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6ec6ff]">{ar ? "كيف ندعم التوريد" : "How we supply it"}</p>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white/64">{device.supply}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CommercialPitch({ language }: { language: Language }) {
  const ar = isArabic(language);
  const pillars = [
    {
      icon: CircuitBoard,
      title: ar ? "المحولات في الواجهة" : "Transformers are the front door",
      text: ar
        ? "الصفحة تبدأ الآن بمحولات DATSAN ونطاقاتها الفنية والمعايير والكتالوج الجاهز للتحميل قبل عرض نطاق المقاولات الأوسع."
        : "The site now opens with DATSAN Transformers, technical ranges, standards, and download-ready catalog proof before introducing the wider contracting scope.",
    },
    {
      icon: Factory,
      title: ar ? "لغة مشتريات مدعومة بالكتالوج" : "Catalog-backed procurement language",
      text: ar
        ? "نطاق الجهد والقدرة ووحدات CSP ومحولات العزل والملفات والتبريد والاختبارات والمعايير تظهر بوضوح للمهندسين والمشترين."
        : "Voltage range, rated power, CSP units, isolation transformers, windings, cooling, tests, and standards are stated clearly for engineers and buyers.",
    },
    {
      icon: Bolt,
      title: ar ? "المقاولات تدعم العرض" : "Contracting stays as support",
      text: ar
        ? "خبرة المدني والميكانيكا والكهرباء والصيانة ما زالت مهمة، لكنها الآن تدعم حديث المحولات والتوريدات الكهربائية بدلا من منافسته."
        : "Civil, mechanical, electrical, and maintenance experience still matters, but it now supports the transformer and electrical-supply conversation instead of competing with it.",
    },
  ];

  return (
    <section className="relative z-10 overflow-hidden px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow={ar ? "تمركز حول المحولات" : "Transformer-first positioning"} title={ar ? "الموقع يبدأ بالمحولات" : "The site now leads with Transformers"} />
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <Title>{ar ? "اجعل عرض المحولات واضحا خلال عشر ثوان." : "Make the buyer understand the transformer offer in ten seconds."}</Title>
          <p className="max-w-xl text-lg leading-8 text-white/62">
            {ar
              ? "الانطباع الأول لم يعد صفحة مقاولات عامة. أصبح صفحة مشتريات فنية لمحولات DATSAN، وتأتي خبرة محمد عطا في المقاولات والتوريد الصناعي بعدها كدليل داعم."
              : "The first impression is no longer generic construction. It is a technical procurement page for DATSAN transformers, with Atta's contracting and industrial supply credentials underneath."}
          </p>
        </div>
        <div className="mt-12 grid gap-3 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-[8px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:border-[#2f9bff]/55 hover:bg-white/[0.055]"
              >
                <Icon className="h-8 w-8 text-[#6ec6ff]" />
                <h3 className="mt-8 text-2xl font-black uppercase leading-tight text-white">{pillar.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/55">{pillar.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceSystem({ language }: { language: Language }) {
  const [active, setActive] = useState(attaServices[0].id);
  const services = attaServices.map((service) => localizeService(service, language));
  const current = services.find((service) => service.id === active) ?? services[0];
  const Icon = serviceIcons[current.icon];
  const ar = isArabic(language);

  return (
    <section id="capabilities" className="relative z-10 overflow-hidden border-y border-white/10 bg-[#050708] px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow={ar ? "الخدمات" : "Services"} title={ar ? "من قائمة خدمات إلى نظام تنفيذ واضح" : "From dropdown items to a serious operating system"} />
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <Title className="max-w-2xl">{ar ? "خمس خدمات. منصة تنفيذ ميداني واحدة." : "Five service lines. One field execution platform."}</Title>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              {ar ? "كل خدمة أصبحت أوضح تجاريا: نطاق مفهوم، نتائج ميدانية، دليل خبرة، وسبب مباشر لبدء حديث المشتريات." : "Each original service now has a stronger sales role: clear scope, field outcomes, service proof, and a reason for procurement teams to start a conversation."}
            </p>
            <div className="mt-8 grid gap-2">
              {services.map((service) => {
                const ItemIcon = serviceIcons[service.icon];
                const selected = service.id === active;
                return (
                  <button
                    type="button"
                    key={service.id}
                    onClick={() => setActive(service.id)}
                    className={`group flex items-center justify-between rounded-[8px] border px-4 py-4 text-left transition ${
                      selected ? "border-[#2f9bff] bg-[#2f9bff] text-white" : "border-white/10 bg-white/[0.035] text-white/72 hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <ItemIcon className={`h-5 w-5 shrink-0 ${selected ? "text-white" : "text-[#6ec6ff]"}`} />
                      <span>
                        <span className="block font-black">{service.title}</span>
                        <span className={`mt-1 block text-xs ${selected ? "text-black/68" : "text-white/38"}`}>{service.kicker}</span>
                      </span>
                    </span>
                    <ChevronRight className="h-5 w-5 shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={current.id}
              id={current.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.32 }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-[8px] border border-white/10 bg-[#090d10] shadow-[0_30px_100px_rgba(0,0,0,0.36)]"
            >
              <div className="relative min-h-[390px] overflow-hidden">
                <motion.img
                  src={current.image}
                  alt={current.title}
                  width={1600}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover opacity-72"
                  animate={{ scale: [1, 1.035, 1] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,13,16,0.1)_0%,#090d10_88%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <Icon className="mb-5 h-10 w-10 text-[#6ec6ff]" />
                  <p className="text-sm font-black uppercase text-[#18d5c2]">{current.kicker}</p>
                  <h3 className="[font-family:var(--atta-display)] mt-3 text-4xl uppercase leading-none text-white sm:text-6xl">{current.title}</h3>
                </div>
              </div>
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-xl font-semibold leading-8 text-white/84">{current.summary}</p>
                  <p className="mt-5 text-base leading-7 text-white/52">{current.detail}</p>
                  <a href="#contact" className="mt-7 inline-flex h-11 items-center gap-2 rounded-[8px] bg-[#2f9bff] px-4 text-sm font-black text-white">
                    {ar ? "ناقش هذا النطاق" : "Discuss this scope"}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="grid gap-5">
                  <div className="grid gap-3">
                    {current.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] px-4 py-3">
                        <BadgeCheck className="h-5 w-5 shrink-0 text-[#2f9bff]" />
                        <span className="text-sm font-bold text-white/78">{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-[8px] border border-[#2f9bff]/22 bg-[#2f9bff]/[0.055] p-5">
                    <p className="text-sm font-black uppercase text-[#6ec6ff]">{ar ? "القيمة التجارية" : "Commercial value"}</p>
                    <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/66">
                      {current.outcomes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectsCommand({ language }: { language: Language }) {
  const [active, setActive] = useState(0);
  const projects = attaProjects.map((project) => localizeProject(project, language));
  const current = projects[active];
  const ar = isArabic(language);

  return (
    <section id="projects" className="relative z-10 overflow-hidden px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow={ar ? "المشروعات" : "Projects"} title={ar ? "كل مشروع أصبح صفحة بيع مستقلة" : "Every portfolio item becomes its own sales page"} />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Title className="max-w-4xl">{ar ? "دليل أعمال داخل الموقع الجديد." : "Proof that opens inside the new site."}</Title>
          <p className="max-w-xl text-lg leading-8 text-white/58">
            {ar ? "روابط المشروعات القديمة أصبحت صفحات حالة تحتوي على القصة والنطاق والصور والتنقل الداخلي حتى يبقى العميل داخل تجربة محمد عطا." : "The old project links now live as dedicated case pages with project storytelling, scope, images, and internal navigation. Prospects stay inside the Atta experience."}
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[390px_1fr]">
          <div className="grid gap-2">
            {projects.map((project, index) => (
              <button
                type="button"
                key={project.slug}
                onClick={() => setActive(index)}
                className={`rounded-[8px] border p-4 text-left transition ${
                  active === index ? "border-[#2f9bff] bg-[#2f9bff] text-white" : "border-white/10 bg-white/[0.035] text-white/70 hover:border-white/20 hover:bg-white/[0.07]"
                }`}
              >
                <span className="text-xs font-black uppercase opacity-70">{project.category}</span>
                <span className="mt-2 block text-base font-black leading-6">{project.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32 }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-[8px] border border-white/10 bg-[#0a0f12]"
            >
              <div className="grid gap-1 bg-black p-1 sm:grid-cols-2">
                {current.images.map((image) => (
                  <motion.img
                    key={image}
                    src={image}
                    alt={current.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="h-72 w-full rounded-[6px] object-cover sm:h-[430px]"
                    animate={{ scale: [1, 1.025, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </div>
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-sm font-black uppercase text-[#18d5c2]">{current.location}</p>
                  <h3 className="[font-family:var(--atta-display)] mt-3 text-3xl uppercase leading-tight text-white sm:text-5xl">{current.title}</h3>
                  <p className="mt-5 text-lg leading-8 text-white/62">{current.scope}</p>
                </div>
                <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-xs font-black uppercase text-white/38">{ar ? "صفحة مشروع مستقلة" : "Dedicated case page"}</p>
                  <p className="mt-4 text-sm leading-6 text-white/58">
                    {ar ? "افتح المشروع داخل موقع محمد عطا الجديد بلغة أقوى للمناقصات وقصة مشروع أوضح." : "Open the project inside the redesigned Atta site, with stronger bid language and a richer project story."}
                  </p>
                  <Link href={ar ? `/atta/projects/${current.slug}?lang=ar` : `/atta/projects/${current.slug}`} className="mt-6 inline-flex h-11 items-center gap-2 rounded-[8px] bg-[#2f9bff] px-4 text-sm font-black text-white">
                    {ar ? "افتح صفحة المشروع" : "Open case page"}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function DatsanAndProcess({ language }: { language: Language }) {
  const ar = isArabic(language);
  const transformerSpecs = ar
    ? [
        "محولات توزيع DATSAN من 6.3 ك.ف إلى 36 ك.ف",
        "نطاق قدرة من 25 ك.ف.أ إلى 3150 ك.ف.أ",
        "إنتاج محولات وفق IEC 60076 / ANSI C57",
        "خيارات CSP وعزل لمواقع المرافق والصناعة",
      ]
    : [
        "DATSAN distribution transformers from 6.3 kV to 36 kV",
        "Rated power range from 25 kVA to 3150 kVA",
        "IEC 60076 / ANSI C57 aligned transformer production",
        "CSP and isolation transformer options for utility and industrial sites",
      ];

  const catalogProof = ar
    ? [
        { value: "1992", label: "تأسست DATSAN وبدأت بتوريد معدات الجهد المتوسط" },
        { value: "1997", label: "إنشاء ورشة صيانة وإصلاح المحولات" },
        { value: "30+", label: "دول وصلت إليها صادرات DATSAN حسب الكتالوج" },
        { value: "IEC 60076", label: "معيار اختبارات واعتماد المحولات المشار إليه في الكتالوج" },
      ]
    : [
        { value: "1992", label: "DATSAN established, starting with medium-voltage electrical equipment supply" },
        { value: "1997", label: "Transformer maintenance and repair workshop founded" },
        { value: "30+", label: "Countries reached by DATSAN exports according to the catalog" },
        { value: "IEC 60076", label: "Routine transformer testing and certification standard referenced in the catalog" },
      ];

  return (
    <section id="datsan" className="relative z-10 overflow-hidden border-y border-white/10 bg-[#050708] px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionLabel eyebrow={ar ? "المحولات / DATSAN" : "Transformers / DATSAN"} title={ar ? "توريد المحولات كمدخل للمشتريات" : "Transformer supply as the procurement hook"} />
          <Title>{ar ? "ابدأ بالمحولات واجعل المشتريات تتحرك." : "Lead with transformers. Make procurement act."}</Title>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
            {ar
              ? "أصبح عرض المحولات في مركز الموقع: توريد محولات DATSAN، لوحات كهربائية، لوجستيات مواد، ودعم مشروعات لعملاء المرافق والبترول والصناعة والبنية التحتية."
              : "Atta's transformer offer now sits at the center of the site: DATSAN transformer supply, electrical panels, material logistics, and project support for utility, petroleum, industrial, and infrastructure clients."}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/48">
            {ar
              ? "يدعم كتالوج DATSAN هذا التمركز بنطاقات محولات التوزيع ثلاثية الأوجه، ومحولات CSP، ومحولات العزل، ومواد اللف، وأنظمة الدهان، ورقابة الجودة، واختبارات المحولات الروتينية."
              : "The DATSAN catalog supports this positioning with product ranges for three-phase distribution transformers, CSP transformers, isolation transformers, winding materials, painting systems, quality control, and routine transformer tests."}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {transformerSpecs.map((item) => (
              <div key={item} className="rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-black text-white/78">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {catalogProof.map((item) => (
              <div key={item.value} className="rounded-[8px] border border-[#2f9bff]/20 bg-[#2f9bff]/[0.055] p-4">
                <p className="[font-family:var(--atta-display)] text-3xl uppercase text-[#6ec6ff]">{item.value}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/62">{item.label}</p>
              </div>
            ))}
          </div>
          <a href="/atta/catalogs/datsan-transformer-catalog.pdf" target="_blank" rel="noreferrer" className="mt-8 inline-flex h-12 items-center gap-2 rounded-[8px] bg-[#2f9bff] px-5 text-sm font-black text-white shadow-[0_0_40px_rgba(47,155,255,0.18)] transition hover:bg-[#6ec6ff]">
            {ar ? "افتح كتالوج محولات DATSAN" : "Open DATSAN transformer catalog"}
            <Download className="h-4 w-4" />
          </a>
        </div>
        <motion.div
          className="relative min-h-[560px] overflow-hidden rounded-[8px] border border-white/10 bg-[#090d10]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
        >
          <motion.img
            src="/atta/transform-detail-2.jpeg"
            alt="DATSAN transformer supply"
            width={1201}
            height={1600}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-78"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(3,4,5,0.92)_100%)]" />
          <div className="absolute bottom-0 p-7">
            <Sparkles className="mb-4 h-8 w-8 text-[#6ec6ff]" />
            <h3 className="[font-family:var(--atta-display)] text-4xl uppercase leading-none text-white">{ar ? "كفاءة سلسلة توريد للمشروعات الكهربائية." : "Supply chain efficiency for electrical projects."}</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CatalogLibrary({ language }: { language: Language }) {
  const ar = isArabic(language);
  const catalogs = [
    {
      eyebrow: ar ? "التركيز الأساسي" : "Primary focus",
      title: ar ? "كتالوج محولات DATSAN" : "DATSAN Transformer Catalog",
      text: ar ? "نطاقات محولات التوزيع وCSP والعزل ومعايير الإنتاج ومواد اللف والاختبارات ورقابة الجودة والشهادات." : "Distribution, CSP, and isolation transformer ranges, production standards, winding materials, testing, quality control, and certificates.",
      href: "/atta/catalogs/datsan-transformer-catalog.pdf",
      cta: ar ? "تحميل كتالوج المحولات" : "Download transformer catalog",
      accent: "bg-[#2f9bff] text-white",
    },
    {
      eyebrow: ar ? "ملف الشركة" : "Company profile",
      title: ar ? "ملف شركة محمد عطا" : "Mohamed Atta Company Profile",
      text: ar ? "تعريف ثنائي اللغة بخبرة المقاولات المدنية والميكانيكية والكهربائية ومشروعات وبيانات تواصل الشركة." : "Bilingual company overview covering civil, mechanical, and electrical contracting experience, petroleum-sector positioning, projects, clients, and contact details.",
      href: "/atta/catalogs/mohamed-atta-company-profile.pdf",
      cta: ar ? "تحميل ملف الشركة" : "Download company profile",
      accent: "bg-white text-black",
    },
    {
      eyebrow: ar ? "توريدات صناعية" : "Industrial supply",
      title: ar ? "ضواغط غاز Dalgakiran" : "Dalgakiran Gas Compressors",
      text: ar ? "حلول ضواغط غاز ترددية API 618 للغاز الطبيعي وغازات المنتجات البترولية والهيدروجين والغاز الحيوي والتطبيقات الصناعية." : "API 618 reciprocating gas compressor solutions for natural gas, petroleum by-product gas, hydrogen, biogas, fuel gas, and industrial applications.",
      href: "/atta/catalogs/dalgakiran-gas-compressors.pdf",
      cta: ar ? "تحميل كتالوج الضواغط" : "Download compressor catalog",
      accent: "bg-[#1f6fff] text-white",
    },
  ];

  return (
    <section id="catalogs" className="relative z-10 overflow-hidden px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow={ar ? "الكتالوجات" : "Catalogs"} title={ar ? "مستندات المصدر داخل الموقع" : "Source documents included in the website"} />
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <Title>{ar ? "ملفات فنية تدعم حديث المبيعات." : "Technical files that support the sales conversation."}</Title>
          <p className="max-w-xl text-lg leading-8 text-white/58">
            {ar ? "منطقة الموارد تتيح لفرق المشتريات الوصول مباشرة إلى كتالوج المحولات وملف الشركة وكتالوج ضواغط الغاز مع إبقاء المحولات في الواجهة." : "The new resource area gives procurement teams immediate access to the transformer catalog, Atta profile, and gas-compressor catalog while keeping the website focused on transformers first."}
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {catalogs.map((catalog, index) => (
            <motion.article
              key={catalog.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -4 }}
              className="group flex min-h-[360px] flex-col rounded-[8px] border border-white/10 bg-[#080d10]/86 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#2f9bff]/55"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-black uppercase text-[#6ec6ff]">
                  {catalog.eyebrow}
                </span>
                <FileText className="h-6 w-6 text-white/38 transition group-hover:text-[#6ec6ff]" />
              </div>
              <h3 className="mt-8 text-3xl font-black uppercase leading-tight text-white">{catalog.title}</h3>
              <p className="mt-5 grow text-base leading-7 text-white/58">{catalog.text}</p>
              <a href={catalog.href} target="_blank" rel="noreferrer" className={`mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-[8px] px-4 text-sm font-black transition hover:scale-[1.01] ${catalog.accent}`}>
                {catalog.cta}
                <Download className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PdfBriefing({ language }: { language: Language }) {
  const ar = isArabic(language);
  const documents = ar
    ? [
        {
          label: "كتالوج DATSAN",
          title: "محولات DATSAN هي العرض الأساسي.",
          summary: "يعطي كتالوج المحولات قصة مشتريات فنية واضحة: بدأت DATSAN عام 1992، وبنت قدرة صيانة المحولات قبل التصنيع، ثم قدمت خطوط محولات التوزيع وCSP والعزل.",
          points: [
            "محولات توزيع ثلاثية الأوجه من 6.3 ك.ف إلى 36 ك.ف",
            "قدرات من 25 ك.ف.أ حتى 3150 ك.ف.أ",
            "محولات CSP للتركيب على الأعمدة أو القواعد مع خصائص حماية ذاتية",
            "محولات عزل للفصل الكهربائي والحماية وتقليل التداخلات",
            "اختبارات روتينية تشمل مقاومة الملفات، مقاومة العزل، النسبة، مجموعة المتجهات، الممانعة، الفواقد، والجهد المطبق",
          ],
          href: "/atta/catalogs/datsan-transformer-catalog.pdf",
          tone: "border-[#2f9bff]/45 bg-[#2f9bff]/[0.07]",
        },
        {
          label: "ملف شركة محمد عطا",
          title: "ملف الشركة يثبت نطاق المقاولات.",
          summary: "يعرض الملف محمد عطا كشركة مقاولات مصرية تركز على الأعمال المدنية والميكانيكية والكهربائية لقطاع البترول، مع توجه للتوسع في السعودية وليبيا.",
          points: [
            "تأسست في مصر عام 2023",
            "أعمال مدنية وميكانيكية وكهربائية لعملاء قطاع البترول",
            "مشروعات تشمل خطوط نقل، أعمال ميكانيكية، حماية خطوط شحن، طرق وصول، معايرة خزانات، لحام خطوط، وجلفنة ساخنة",
            "تموضع ثنائي اللغة يدعم محادثات المشتريات بالعربية والإنجليزية",
            "بيانات التواصل وقائمة المشروعات أصبحت واضحة داخل الموقع بدلا من بقائها داخل ملف PDF فقط",
          ],
          href: "/atta/catalogs/mohamed-atta-company-profile.pdf",
          tone: "border-white/12 bg-white/[0.04]",
        },
        {
          label: "ضواغط غاز Dalgakiran",
          title: "ضواغط الغاز توسع قصة التوريد الصناعي.",
          summary: "يدعم كتالوج الضواغط مسارا إضافيا للتوريد الصناعي: ضواغط غاز ترددية API 618 وخدمات دورة حياة لتطبيقات النفط والغاز والبتروكيماويات ومعالجة الغاز.",
          points: [
            "تموضع ضواغط غاز ترددية وفق API 618",
            "تطبيقات للغاز الطبيعي وغازات المنتجات البترولية والهيدروجين والغاز الحيوي وغاز الوقود والهواء والغازات المختلطة",
            "يشير الكتالوج إلى التطوير والإنتاج والخدمة والصيانة والتحديث والتدريب",
            "تكوينات أفقية ورأسية مع محركات كهربائية وديزل ومحركات تعمل بالغاز",
            "نطاق فني من ضغط دخول جوي حتى 50 بار وضغط خروج حتى 400 بار",
          ],
          href: "/atta/catalogs/dalgakiran-gas-compressors.pdf",
          tone: "border-[#1f6fff]/35 bg-[#1f6fff]/[0.06]",
        },
      ]
    : [
        {
          label: "Datsan Catalog",
          title: "DATSAN Transformers are the priority offer.",
          summary:
            "The transformer catalog gives Atta a technical procurement story: DATSAN started in 1992, built transformer maintenance capability before manufacturing, and now presents distribution, CSP, and isolation transformer lines.",
          points: [
            "Three-phase distribution transformers from 6.3 kV to 36 kV",
            "Rated power options from 25 kVA up to 3150 kVA",
            "CSP transformers for pole or pad mounting, including self-protection features",
            "Isolation transformers for galvanic isolation, shock protection, and harmonic separation",
            "Routine tests include winding resistance, insulation resistance, ratio, vector group, impedance, no-load losses, load losses, induced voltage, and applied voltage",
          ],
          href: "/atta/catalogs/datsan-transformer-catalog.pdf",
          tone: "border-[#2f9bff]/45 bg-[#2f9bff]/[0.07]",
        },
        {
          label: "Mohamed Atta Company Profile",
          title: "The company profile proves contracting scope.",
          summary:
            "The profile presents Mohamed Atta as an Egypt-based contracting company focused on petroleum-sector civil, mechanical, and electrical works, with expansion intent toward Saudi Arabia and Libya.",
          points: [
            "Founded in Egypt in 2023",
            "Civil, mechanical, and electrical works for petroleum-sector clients",
            "Projects include transmission-line civil works, mechanical works, charging-line protection, access-road construction, tank calibration, pipeline welding, and hot galvanizing",
            "Company positioning is bilingual, making it usable for both Arabic and English procurement conversations",
            "Contact details and project list are now reflected in the site experience instead of staying buried inside the PDF",
          ],
          href: "/atta/catalogs/mohamed-atta-company-profile.pdf",
          tone: "border-white/12 bg-white/[0.04]",
        },
        {
          label: "Dalgakiran Gas Compressors",
          title: "Gas compressors extend the industrial supply story.",
          summary:
            "The compressor catalog supports a secondary industrial-supply lane: API 618 reciprocating gas compressors and lifecycle services for oil, gas, petrochemical, natural-gas, and gas-processing applications.",
          points: [
            "API 618 reciprocating gas compressor positioning",
            "Applications include natural gas, petroleum by-product gas, hydrogen, biogas, fuel gas, air, and mixed gases",
            "The catalog references development, production, service, maintenance, modernization, and staff training",
            "Configurations cover horizontal and vertical layouts, electric motors, diesel motors, and gas-fuel engines",
            "Technical range includes inlet pressure from atmospheric pressure up to 50 bar(g) and discharge pressure up to 400 bar(g)",
          ],
          href: "/atta/catalogs/dalgakiran-gas-compressors.pdf",
          tone: "border-[#1f6fff]/35 bg-[#1f6fff]/[0.06]",
        },
      ];

  return (
    <section id="pdf-briefing" className="relative z-10 overflow-hidden border-y border-white/10 bg-[#030506] px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow={ar ? "ملخص الملفات" : "PDF Briefing"} title={ar ? "المستندات أصبحت جزءا من محتوى الصفحة" : "The supplied documents are now part of the page narrative"} />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Title>{ar ? "ماذا تقول الملفات فعلا." : "What the PDFs actually say."}</Title>
          <p className="max-w-xl text-lg leading-8 text-white/58">
            {ar ? "بدلا من إرفاق الملفات فقط، يحول الموقع كل مستند إلى محتوى مبيعات واضح. المحولات أولا، ثم خبرة محمد عطا في المقاولات، ثم ضواغط الغاز كقدرة توريد صناعية مجاورة." : "Instead of only attaching files, the site now turns each document into sales-readable content. Transformers stay first, Atta's contracting proof comes second, and gas compressors become an adjacent industrial supply capability."}
          </p>
        </div>

        <div className="mt-12 grid gap-4">
          {documents.map((document, index) => (
            <motion.article
              key={document.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -3 }}
              className={`grid gap-8 rounded-[8px] border p-6 backdrop-blur-xl lg:grid-cols-[0.8fr_1.2fr] lg:p-8 ${document.tone}`}
            >
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6ec6ff]">{document.label}</p>
                <h3 className="mt-5 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">{document.title}</h3>
                <p className="mt-5 text-base leading-7 text-white/58">{document.summary}</p>
                <a href={document.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex h-11 items-center gap-2 rounded-[8px] bg-white px-4 text-sm font-black text-black transition hover:bg-[#6ec6ff]">
                  {ar ? "افتح ملف المصدر" : "Open source PDF"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="grid gap-3">
                {document.points.map((point) => (
                  <div key={point} className="flex gap-3 rounded-[8px] border border-white/10 bg-black/20 px-4 py-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#18d5c2]" />
                    <p className="text-sm font-semibold leading-6 text-white/72">{point}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ language }: { language: Language }) {
  const ar = isArabic(language);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error" | "missing">("idle");
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formspreeEndpoint) {
      setFormStatus("missing");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("_subject", "New Atta Group website inquiry");

    setFormStatus("submitting");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  const statusMessage =
    formStatus === "success"
      ? ar
        ? "تم إرسال الطلب. سيتواصل معك فريق المبيعات قريبا."
        : "Request sent. The sales team will follow up soon."
      : formStatus === "error"
        ? ar
          ? "لم يتم الإرسال. حاول مرة أخرى أو تواصل معنا مباشرة."
          : "Could not send the request. Try again or contact us directly."
        : formStatus === "missing"
          ? ar
            ? "يحتاج النموذج إلى رابط Formspree قبل التفعيل."
            : "Formspree endpoint is missing. Add it before the form can send."
          : "";

  return (
    <section id="contact" className="relative z-10 overflow-hidden bg-[#061326] px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(47,155,255,0.3),transparent_30%),linear-gradient(135deg,#061326_0%,#020303_78%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:70px_70px]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-black uppercase text-[#6ec6ff]">{ar ? "تواصل مع المبيعات" : "Contact sales"}</p>
          <h2 className="[font-family:var(--atta-display)] mt-5 max-w-4xl text-4xl uppercase leading-[0.92] text-white sm:text-6xl">
            {ar ? "أرسل النطاق واحصل على مسار توريد." : "Bring the scope. Get a supply path."}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
            {ar ? "شارك ما تحتاج إلى توريده أو تركيبه أو صيانته أو تنسيقه. يمكن لفريق المبيعات الرد حول المحولات والمواد الكهربائية والأعمال المدنية والميكانيكية ودعم المواقع." : "Share what you need sourced, installed, maintained, or coordinated. Sales can respond around transformer supply, electrical materials, civil works, mechanical work, and site support."}
          </p>
          <div className="mt-8 grid gap-3">
            <a href="tel:+201214444253" className="flex items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.055] px-5 py-4 text-white">
              <Phone className="h-5 w-5 text-[#6ec6ff]" />
              <span className="font-black">01214444253</span>
            </a>
            <a href="tel:+201159900749" className="flex items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.055] px-5 py-4 text-white">
              <Phone className="h-5 w-5 text-[#6ec6ff]" />
              <span className="font-black">01159900749</span>
            </a>
            <a href="mailto:info@atta-group.net" className="flex items-center gap-4 rounded-[8px] border border-white/10 bg-white/[0.055] px-5 py-4 text-white">
              <Mail className="h-5 w-5 text-[#6ec6ff]" />
              <span className="font-black">info@atta-group.net</span>
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-[8px] border border-white/10 bg-white/[0.055] px-5 py-4 text-white transition hover:border-[#6ec6ff]/45 hover:bg-[#2f9bff]/10"
            >
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#6ec6ff]" />
              <span className="font-black leading-7">
                {ar ? "فرست مول، الحي الأول، شارع التسعين الجنوبي، التجمع الخامس، الدور الثاني" : "First Mall, First District, South 90th Street, Fifth Settlement, 2nd Floor"}
              </span>
            </a>
          </div>
        </motion.div>

        <motion.form
          action={formspreeEndpoint || undefined}
          method="POST"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3 }}
          className="grid gap-4 rounded-[8px] border border-[#2f9bff]/24 bg-black/34 p-5 shadow-[0_34px_110px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-7"
        >
          <input type="hidden" name="_subject" value="New Atta Group website inquiry" />
          <input type="hidden" name="_language" value={language} />
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black uppercase text-white/66">
              {ar ? "الاسم" : "Name"}
              <input name="name" required className="h-12 rounded-[8px] border border-white/12 bg-white/[0.06] px-4 text-base font-semibold normal-case text-white outline-none transition placeholder:text-white/28 focus:border-[#6ec6ff]" placeholder={ar ? "اسمك" : "Your name"} />
            </label>
            <label className="grid gap-2 text-sm font-black uppercase text-white/66">
              {ar ? "الشركة" : "Company"}
              <input name="company" className="h-12 rounded-[8px] border border-white/12 bg-white/[0.06] px-4 text-base font-semibold normal-case text-white outline-none transition placeholder:text-white/28 focus:border-[#6ec6ff]" placeholder={ar ? "اسم الشركة" : "Company name"} />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black uppercase text-white/66">
              {ar ? "الهاتف" : "Phone"}
              <input name="phone" required className="h-12 rounded-[8px] border border-white/12 bg-white/[0.06] px-4 text-base font-semibold normal-case text-white outline-none transition placeholder:text-white/28 focus:border-[#6ec6ff]" placeholder="+20..." />
            </label>
            <label className="grid gap-2 text-sm font-black uppercase text-white/66">
              {ar ? "البريد الإلكتروني" : "Email"}
              <input name="email" type="email" className="h-12 rounded-[8px] border border-white/12 bg-white/[0.06] px-4 text-base font-semibold normal-case text-white outline-none transition placeholder:text-white/28 focus:border-[#6ec6ff]" placeholder={ar ? "البريد الإلكتروني" : "name@company.com"} />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-black uppercase text-white/66">
            {ar ? "ما الذي تحتاجه؟" : "What do you need?"}
            <select name="scope" className="h-12 rounded-[8px] border border-white/12 bg-[#07142d] px-4 text-base font-semibold normal-case text-white outline-none transition focus:border-[#6ec6ff]">
              <option>{ar ? "توريد محولات" : "Transformer supply"}</option>
              <option>{ar ? "لوحات أو مواد كهربائية" : "Electrical panels or materials"}</option>
              <option>{ar ? "مقاولات مدنية / ميكانيكية" : "Civil / mechanical contracting"}</option>
              <option>{ar ? "صيانة أو دعم موقع" : "Maintenance or site support"}</option>
              <option>{ar ? "مشتريات مشروع مختلط" : "Mixed project procurement"}</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-black uppercase text-white/66">
            {ar ? "تفاصيل المشروع" : "Project details"}
            <textarea name="message" required rows={5} className="resize-none rounded-[8px] border border-white/12 bg-white/[0.06] px-4 py-3 text-base font-semibold normal-case leading-7 text-white outline-none transition placeholder:text-white/28 focus:border-[#6ec6ff]" placeholder={ar ? "اكتب النطاق والموقع والجدول والكميات أو المواصفات المطلوبة." : "Tell us the scope, location, timeline, quantities, or required specs."} />
          </label>
          {statusMessage ? (
            <p
              className={`rounded-[8px] border px-4 py-3 text-sm font-bold leading-6 ${
                formStatus === "success"
                  ? "border-[#18d5c2]/30 bg-[#18d5c2]/10 text-[#b8fff6]"
                  : "border-[#ff6b6b]/30 bg-[#ff6b6b]/10 text-[#ffd1d1]"
              }`}
            >
              {statusMessage}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={formStatus === "submitting"}
            className="mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-[8px] bg-[#2f9bff] px-6 py-4 text-sm font-black uppercase text-white shadow-[0_0_44px_rgba(47,155,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#6ec6ff] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-[#2f9bff]"
          >
            {formStatus === "submitting" ? (ar ? "جار الإرسال..." : "Sending...") : ar ? "إرسال طلب المبيعات" : "Send sales request"}
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default function AttaUpgrade({ skipLoader = true, initialLanguage = "en" }: { skipLoader?: boolean; initialLanguage?: Language }) {
  const [loading, setLoading] = useState(!skipLoader);
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    if (skipLoader) {
      setLoading(false);
      return;
    }
    const timer = window.setTimeout(() => setLoading(false), 2300);
    return () => window.clearTimeout(timer);
  }, [skipLoader]);

  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage]);

  useEffect(() => {
    document.title = isArabic(language)
      ? "مجموعة عطا | محولات DATSAN وتوريدات الطاقة"
      : "Atta Group | DATSAN Transformers & Energy Infrastructure Egypt";
  }, [language]);

  const pageReady = useMemo(() => !loading, [loading]);

  return (
    <main
      dir={isArabic(language) ? "rtl" : "ltr"}
      lang={language}
      className={`relative min-h-screen overflow-x-hidden bg-[#020303] ${isArabic(language) ? "[font-family:var(--atta-arabic)]" : "[font-family:var(--atta-body)]"}`}
    >
      <AnimatePresence>{loading ? <Loader language={language} /> : null}</AnimatePresence>
      <AmbientField />
      <div className={pageReady ? "relative z-10" : "relative z-10 opacity-0"}>
        <Navbar language={language} onLanguageChange={setLanguage} />
        <Hero language={language} />
        <AnswerBrief language={language} />
        <Clients language={language} />
        <DatsanTransformerProducts language={language} />
        <SuppliedProducts language={language} />
        <FutureDevices language={language} />
        <CommercialPitch language={language} />
        <ServiceSystem language={language} />
        <ProjectsCommand language={language} />
        <DatsanAndProcess language={language} />
        <PdfBriefing language={language} />
        <CatalogLibrary language={language} />
        <Contact language={language} />
      </div>
    </main>
  );
}
