import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, SearchCheck } from "lucide-react";

import AttaBlogHeader from "@/components/atta/AttaBlogHeader";
import { attaIconMetadata, attaManifestPath } from "@/lib/atta-metadata";
import { attaBlogArticles, type AttaBlogLocale } from "@/lib/atta-blog-data";

const baseUrl = "https://atta-group.net";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Atta Group Industrial Blog | DATSAN Transformers, Electrical Panels & Gas Systems Egypt",
  description:
    "Long-form Atta Group guides for Egyptian factories researching DATSAN transformers, electrical panels, oxygen generators, nitrogen generators, gas compressors, and industrial reliability.",
  alternates: {
    canonical: "/atta/blogs",
    languages: {
      en: "/atta/blogs",
      ar: "/atta/blogs?lang=ar",
    },
  },
  openGraph: {
    title: "Atta Group Industrial Blog",
    description:
      "Bilingual industrial guides for Egyptian factories and buyers researching transformers, panels, gas systems, uptime, and safety.",
    url: "/atta/blogs",
    siteName: "Atta Group",
    images: [{ url: "/atta/transformers.jpg", width: 1200, height: 630, alt: "Atta Group industrial blog for Egyptian factories" }],
    type: "website",
  },
  icons: attaIconMetadata,
  manifest: attaManifestPath,
};

export default function AttaBlogsPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const language: AttaBlogLocale = searchParams?.lang === "ar" ? "ar" : "en";
  const ar = language === "ar";

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${baseUrl}/atta/blogs#blog`,
    name: ar ? "مدونة مجموعة عطا الصناعية" : "Atta Group Industrial Blog",
    description: ar
      ? "مقالات صناعية ثنائية اللغة عن محولات DATSAN واللوحات الكهربائية ومولدات الأكسجين والنيتروجين وضواغط الغاز في مصر."
      : "Bilingual industrial articles about DATSAN transformers, electrical panels, oxygen generators, nitrogen generators, gas compressors, and reliability in Egypt.",
    url: `${baseUrl}/atta/blogs`,
    inLanguage: ["en", "ar"],
    blogPost: attaBlogArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title[language],
      description: article.description[language],
      url: `${baseUrl}/atta/blogs/${article.slug}`,
      image: `${baseUrl}${article.image}`,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      keywords: article.keywords[language].join(", "),
    })),
  };

  return (
    <main lang={language} className="min-h-screen max-w-[100vw] overflow-x-hidden bg-[#020303] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema).replace(/</g, "\\u003c"),
        }}
      />
      <AttaBlogHeader language={language} />

      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-40 [&_*]:max-w-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(47,155,255,0.22),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(24,213,194,0.12),transparent_24%)]" />
        <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(90deg,rgba(110,198,255,0.16)_1px,transparent_1px),linear-gradient(rgba(110,198,255,0.12)_1px,transparent_1px)] [background-size:84px_84px]" />

        <div className="relative mx-auto w-full max-w-7xl">
          <p dir={ar ? "rtl" : "ltr"} className="text-center text-sm font-black uppercase tracking-[0.24em] text-[#6ec6ff] lg:text-start">
            {ar ? "مدونة مجموعة عطا" : "Atta Group Blog"}
          </p>
          <div dir={ar ? "rtl" : "ltr"} className="mt-5 grid gap-8 text-center lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:text-start">
            <h1 className="max-w-full break-words text-3xl font-black uppercase leading-[1.08] text-white sm:max-w-4xl sm:text-7xl sm:leading-[0.92]">
              {ar ? "مقالات صناعية للمشتري الفني في مصر" : "Industrial guides for technical buyers in Egypt"}
            </h1>
            <div className="max-w-2xl space-y-5">
              <p className="text-lg font-semibold leading-8 text-white/66">
                {ar
                  ? "اقرأ مقالات طويلة وواضحة عن محولات DATSAN، اللوحات الكهربائية، مولدات الأكسجين والنيتروجين، وضواغط الغاز. كل مقال مكتوب ليساعد ملاك المصانع والمشتريات والصيانة في مصر على اتخاذ قرار توريد أفضل."
                  : "Read longer, practical articles about DATSAN transformers, electrical panels, oxygen generators, nitrogen generators, and gas compressors. Each article is written for Egyptian factory owners, procurement teams, engineers, and maintenance managers."}
              </p>
              <div className="flex flex-wrap gap-2">
                {(ar
                  ? ["محولات DATSAN في مصر", "لوحات كهربائية", "مولدات أكسجين", "ضواغط غاز"]
                  : ["DATSAN transformers Egypt", "Electrical panels", "Oxygen generators", "Gas compressors"]
                ).map((keyword) => (
                  <span key={keyword} className="max-w-full break-words rounded-full border border-[#2f9bff]/22 bg-[#2f9bff]/[0.07] px-3 py-1 text-center text-xs font-black uppercase text-[#6ec6ff]">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {attaBlogArticles.map((article) => (
              <article dir={ar ? "rtl" : "ltr"} key={article.slug} className="group flex min-h-[620px] min-w-0 w-full flex-col overflow-hidden rounded-[8px] border border-white/10 bg-[#07111d]/88 text-center shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#2f9bff]/55 lg:text-start">
                <div className="relative h-48 overflow-hidden bg-[#05090d]">
                  <img
                    src={article.image}
                    alt={article.title[language]}
                    width={700}
                    height={420}
                    className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,3,0)_10%,rgba(2,3,3,0.84)_100%)]" />
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/12 bg-black/48 px-3 py-1 text-xs font-black uppercase text-[#6ec6ff] backdrop-blur-xl">
                      {article.category[language]}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-black/48 px-3 py-1 text-xs font-black text-white/80 backdrop-blur-xl">
                      <Clock className="h-3.5 w-3.5 text-[#6ec6ff]" />
                      {article.readingTime[language]}
                    </span>
                  </div>
                </div>

                <div className="flex grow flex-col p-6">
                  <h2 className="break-words text-2xl font-black leading-tight text-white">{article.title[language]}</h2>
                  <p className="mt-5 break-words text-base font-semibold leading-7 text-white/64">{article.description[language]}</p>

                  <div className="mt-6 rounded-[8px] border border-[#2f9bff]/18 bg-[#2f9bff]/[0.055] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6ec6ff]">
                      {ar ? "تركيز المنتج" : "Product focus"}
                    </p>
                    <p className="mt-2 break-words text-sm font-bold leading-6 text-white/82">{article.productFocus[language]}</p>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {article.benefits[language].slice(0, 2).map((benefit) => (
                      <div key={benefit} className="flex gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] px-4 py-3">
                        <SearchCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#18d5c2]" />
                        <p className="break-words text-sm font-semibold leading-6 text-white/68">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <Link href={ar ? `/atta/blogs/${article.slug}?lang=ar` : `/atta/blogs/${article.slug}`} className="mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#2f9bff] px-4 text-sm font-black text-white shadow-[0_0_34px_rgba(47,155,255,0.18)] transition hover:bg-[#6ec6ff]">
                    {ar ? "اقرأ المقال الكامل" : "Read full article"}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
