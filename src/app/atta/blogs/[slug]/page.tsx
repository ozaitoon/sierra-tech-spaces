import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, Clock } from "lucide-react";

import AttaBlogHeader from "@/components/atta/AttaBlogHeader";
import { attaIconMetadata, attaManifestPath } from "@/lib/atta-metadata";
import { attaBlogArticles, getAttaBlogArticle, type AttaBlogLocale } from "@/lib/atta-blog-data";

const baseUrl = "https://atta-group.net";

type PageProps = {
  params: { slug: string };
  searchParams?: { lang?: string };
};

export function generateStaticParams() {
  return attaBlogArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params, searchParams }: PageProps): Metadata {
  const article = getAttaBlogArticle(params.slug);
  if (!article) {
    return {};
  }

  const language: AttaBlogLocale = searchParams?.lang === "ar" ? "ar" : "en";

  return {
    metadataBase: new URL(baseUrl),
    title: `${article.title[language]} | Atta Group Blog`,
    description: article.description[language],
    keywords: article.keywords[language],
    alternates: {
      canonical: `/atta/blogs/${article.slug}`,
      languages: {
        en: `/atta/blogs/${article.slug}`,
        ar: `/atta/blogs/${article.slug}?lang=ar`,
      },
    },
    openGraph: {
      title: article.title[language],
      description: article.description[language],
      url: `/atta/blogs/${article.slug}`,
      siteName: "Atta Group",
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title[language] }],
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title[language],
      description: article.description[language],
      images: [article.image],
    },
    icons: attaIconMetadata,
    manifest: attaManifestPath,
  };
}

export default function AttaBlogArticlePage({ params, searchParams }: PageProps) {
  const article = getAttaBlogArticle(params.slug);
  if (!article) {
    notFound();
  }

  const language: AttaBlogLocale = searchParams?.lang === "ar" ? "ar" : "en";
  const ar = language === "ar";
  const backIcon = ar ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${baseUrl}/atta/blogs/${article.slug}#article`,
        headline: article.title[language],
        description: article.description[language],
        image: `${baseUrl}${article.image}`,
        url: `${baseUrl}/atta/blogs/${article.slug}`,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        inLanguage: language,
        keywords: article.keywords[language].join(", "),
        articleSection: article.category[language],
        about: article.productFocus[language],
        mainEntityOfPage: `${baseUrl}/atta/blogs/${article.slug}`,
        author: {
          "@type": "Organization",
          name: "Atta Group",
          url: baseUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "Atta Group",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/atta/mohamed-atta-logo-transparent.png`,
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/atta/blogs/${article.slug}#faq`,
        inLanguage: language,
        mainEntity: article.faqs[language].map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main lang={language} className="min-h-screen max-w-[100vw] overflow-x-hidden bg-[#020303] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <AttaBlogHeader language={language} />

      <article className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-40 [&_*]:max-w-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(47,155,255,0.22),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(24,213,194,0.12),transparent_24%)]" />
        <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(90deg,rgba(110,198,255,0.16)_1px,transparent_1px),linear-gradient(rgba(110,198,255,0.12)_1px,transparent_1px)] [background-size:84px_84px]" />

        <div dir={ar ? "rtl" : "ltr"} className="relative mx-auto w-[calc(100vw-2.5rem)] max-w-5xl text-center sm:w-full lg:text-start">
          <Link href={ar ? "/atta/blogs?lang=ar" : "/atta/blogs"} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-black text-white/72 transition hover:bg-white/10 hover:text-white">
            {backIcon}
            {ar ? "كل المقالات" : "All articles"}
          </Link>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#2f9bff]/24 bg-[#2f9bff]/[0.08] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#6ec6ff]">
              {article.category[language]}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-black text-white/70">
              <Clock className="h-3.5 w-3.5 text-[#6ec6ff]" />
              {article.readingTime[language]}
            </span>
          </div>

          <h1 className="mx-auto mt-6 max-w-[16rem] break-words text-xl font-black leading-[1.22] text-white [overflow-wrap:anywhere] sm:max-w-5xl sm:text-6xl sm:leading-[0.98] lg:mx-0 lg:text-7xl">
            {article.title[language]}
          </h1>
          <p className="mx-auto mt-7 max-w-[17rem] break-words text-base font-semibold leading-7 text-white/68 [overflow-wrap:anywhere] sm:max-w-4xl sm:text-xl sm:leading-9 lg:mx-0">{article.summary[language]}</p>

          <div className="mt-8 grid max-w-full gap-4 overflow-hidden rounded-[8px] border border-[#2f9bff]/22 bg-[#07111d]/80 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl md:grid-cols-[0.78fr_1.22fr] md:p-7">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6ec6ff]">{ar ? "تركيز المنتج" : "Product focus"}</p>
              <p className="mt-3 break-words text-base font-bold leading-7 text-white/86 [overflow-wrap:anywhere]">{article.productFocus[language]}</p>
            </div>
            <div className="hidden max-w-full flex-wrap justify-center gap-2 overflow-hidden sm:flex lg:justify-start">
              {article.keywords[language].slice(0, 5).map((keyword) => (
                <span key={keyword} className="max-w-full break-words rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-center text-xs font-black text-white/58 [overflow-wrap:anywhere] sm:uppercase">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[8px] border border-white/10 bg-[#05090d]">
            <img src={article.image} alt={article.title[language]} width={1400} height={760} className="h-[280px] w-full object-cover opacity-88 sm:h-[430px]" />
          </div>

          <section className="mt-12 grid gap-4 rounded-[8px] border border-white/10 bg-white/[0.035] p-5 md:p-7">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6ec6ff]">
              {ar ? "أسئلة يجاوب عليها المقال" : "Questions this article answers"}
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {article.aiQuestions[language].map((question) => (
                <div key={question} className="rounded-[8px] border border-white/10 bg-black/22 p-4">
                  <p className="text-sm font-bold leading-6 text-white/78">{question}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-14 space-y-12">
            {article.sections[language].map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">{section.heading}</h2>
                <div className="mt-5 space-y-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="break-words text-lg font-semibold leading-9 text-white/68">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-16 rounded-[8px] border border-[#2f9bff]/22 bg-[#07111d]/82 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6ec6ff]">{ar ? "أسئلة وأجوبة" : "FAQ"}</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              {ar ? "إجابات مباشرة لأسئلة المشتري ونتائج البحث الذكية" : "Direct answers for buyers and AI search results"}
            </h2>
            <div className="mt-8 grid gap-4">
              {article.faqs[language].map((faq) => (
                <section key={faq.question} className="rounded-[8px] border border-white/10 bg-black/22 p-5">
                  <h3 className="break-words text-xl font-black leading-7 text-white">{faq.question}</h3>
                  <p className="mt-3 break-words text-base font-semibold leading-8 text-white/68">{faq.answer}</p>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-5 rounded-[8px] border border-[#2f9bff]/24 bg-[#2f9bff]/[0.07] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6ec6ff]">{ar ? "تحدث مع المبيعات" : "Talk to sales"}</p>
              <h2 className="mt-3 text-3xl font-black text-white">
                {ar ? "هل هذا الاحتياج موجود في مصنعك؟" : "Does this match a need inside your facility?"}
              </h2>
              <p className="mt-3 text-base font-semibold leading-8 text-white/66">
                {ar
                  ? "شارك نطاق التوريد أو المشكلة الفنية، وفريق عطا يراجع معك أفضل مسار للمحولات أو اللوحات أو أنظمة الغاز أو دعم الموقع."
                  : "Share the supply scope or technical issue, and Atta can discuss the right path for transformers, panels, gas systems, or site support."}
              </p>
            </div>
            <Link href={ar ? "/atta?lang=ar#contact" : "/atta#contact"} className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#2f9bff] px-5 text-sm font-black text-white shadow-[0_0_34px_rgba(47,155,255,0.2)] transition hover:bg-[#6ec6ff]">
              {ar ? "تواصل معنا" : "Contact Atta"}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </section>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <Link href={ar ? "/atta/blogs?lang=ar" : "/atta/blogs"} className="inline-flex items-center gap-2 text-sm font-black text-[#6ec6ff] transition hover:text-white">
              {backIcon}
              {ar ? "العودة إلى المدونة" : "Back to blog"}
            </Link>
            <div className="flex flex-wrap gap-2">
              {article.benefits[language].map((benefit) => (
                <span key={benefit} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-white/62">
                  <BadgeCheck className="h-3.5 w-3.5 text-[#18d5c2]" />
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
