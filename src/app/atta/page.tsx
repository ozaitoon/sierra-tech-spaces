import type { Metadata } from "next";
import { Archivo_Black, Cairo, Rajdhani } from "next/font/google";
import AttaUpgrade from "@/components/atta/AttaUpgrade";
import { attaIconMetadata, attaManifestPath } from "@/lib/atta-metadata";
import { attaBlogArticles } from "@/lib/atta-blog-data";

const attaDisplay = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--atta-display",
  display: "swap",
});

const attaBody = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--atta-body",
  display: "swap",
});

const attaArabic = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--atta-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atta-group.net"),
  title: {
    default: "Atta Group | DATSAN Transformers & Energy Infrastructure Egypt",
    template: "%s | Atta Group",
  },
  description:
    "Atta Group supplies DATSAN transformers, electrical panels, industrial generators, transmission materials, and field contracting support in Egypt.",
  keywords: [
    "Atta Group",
    "Mohammed Atta",
    "DATSAN transformers Egypt",
    "distribution transformers Egypt",
    "CSP transformers",
    "isolation transformers",
    "electrical panels Egypt",
    "nitrogen generators Egypt",
    "oxygen generators Egypt",
    "overhead transmission line materials",
    "oil and gas contracting Egypt",
    "محولات كهربائية في مصر",
    "محولات DATSAN",
    "توريد لوحات كهربائية",
    "لوحات كهرباء للمصانع",
    "مولدات نيتروجين",
    "مولدات أكسجين",
    "ضواغط غاز صناعية",
    "مورد محولات في مصر",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/?lang=ar",
    },
  },
  openGraph: {
    title: "Atta Group | DATSAN Transformers & Energy Infrastructure",
    description:
      "Transformer-first industrial supply and contracting partner for DATSAN transformers, electrical materials, generators, and energy infrastructure work.",
    url: "/",
    siteName: "Atta Group",
    images: [
      {
        url: "/atta/transformers.jpg",
        width: 1200,
        height: 630,
        alt: "Atta Group DATSAN transformer and energy infrastructure supply",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atta Group | DATSAN Transformers & Energy Infrastructure",
    description:
      "DATSAN transformers, electrical panels, industrial generators, and energy infrastructure contracting support in Egypt.",
    images: ["/atta/transformers.jpg"],
  },
  icons: attaIconMetadata,
  manifest: attaManifestPath,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://atta-group.net/#localbusiness",
  name: "Atta Group",
  legalName: "Mohammed Atta For Construction and General Supplies",
  alternateName: ["Mohammed Atta", "Mohamed Atta For Construction and General Supplies"],
  description:
    "Industrial supply and contracting company providing DATSAN transformer supply, electrical panels, industrial generators, overhead transmission-line materials, and civil, mechanical, and electrical contracting support.",
  url: "https://atta-group.net",
  logo: "https://atta-group.net/atta/mohamed-atta-logo-transparent.png",
  image: "https://atta-group.net/atta/transformers.jpg",
  email: "info@atta-group.net",
  telephone: "+201214444253",
  priceRange: "Project-based",
  address: {
    "@type": "PostalAddress",
    streetAddress: "First Mall, First District, South 90th Street, Fifth Settlement, 2nd Floor",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.0092778,
    longitude: 31.4240833,
  },
  areaServed: [
    { "@type": "Country", name: "Egypt" },
    { "@type": "AdministrativeArea", name: "Cairo" },
  ],
  sameAs: ["https://www.linkedin.com/company/atta-group-co/"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+201214444253",
      contactType: "sales",
      areaServed: "EG",
      availableLanguage: ["English", "Arabic"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+201159900749",
      contactType: "sales",
      areaServed: "EG",
      availableLanguage: ["English", "Arabic"],
    },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "DATSAN transformer supply" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical panel supply" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nitrogen generator supply" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Civil, mechanical, and electrical contracting" } },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://atta-group.net/#organization",
      name: "Atta Group",
      legalName: "Mohammed Atta For Construction and General Supplies",
      url: "https://atta-group.net",
      logo: {
        "@type": "ImageObject",
        url: "https://atta-group.net/atta/mohamed-atta-logo-transparent.png",
        width: 357,
        height: 84,
      },
      sameAs: ["https://www.linkedin.com/company/atta-group-co/"],
      contactPoint: localBusinessSchema.contactPoint,
    },
    {
      "@type": "WebSite",
      "@id": "https://atta-group.net/#website",
      name: "Atta Group",
      url: "https://atta-group.net",
      publisher: { "@id": "https://atta-group.net/#organization" },
      inLanguage: ["en", "ar"],
    },
    {
      "@type": "WebPage",
      "@id": "https://atta-group.net/#webpage",
      url: "https://atta-group.net",
      name: "Atta Group | DATSAN Transformers & Energy Infrastructure Egypt",
      description: metadata.description,
      isPartOf: { "@id": "https://atta-group.net/#website" },
      about: { "@id": "https://atta-group.net/#localbusiness" },
      hasPart: { "@id": "https://atta-group.net/atta/blogs#blog" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://atta-group.net/atta/transformers.jpg",
        width: 1024,
        height: 576,
      },
      inLanguage: "en",
    },
    {
      "@type": "Blog",
      "@id": "https://atta-group.net/atta/blogs#blog",
      name: "Atta Group Industrial Blog",
      description:
        "Bilingual educational articles about DATSAN transformers, electrical panels, oxygen generators, nitrogen generators, gas compressors, and industrial reliability in Egypt.",
      url: "https://atta-group.net/atta/blogs",
      publisher: { "@id": "https://atta-group.net/#organization" },
      inLanguage: ["en", "ar"],
      blogPost: attaBlogArticles.map((article) => ({
        "@type": "BlogPosting",
        "@id": `https://atta-group.net/atta/blogs/${article.slug}#article`,
        headline: article.title.en,
        alternativeHeadline: article.title.ar,
        description: article.description.en,
        image: `https://atta-group.net${article.image}`,
        url: `https://atta-group.net/atta/blogs/${article.slug}`,
        inLanguage: ["en", "ar"],
        keywords: [...article.keywords.en, ...article.keywords.ar].join(", "),
        about: article.productFocus.en,
        author: { "@id": "https://atta-group.net/#organization" },
        publisher: { "@id": "https://atta-group.net/#organization" },
      })),
    },
    localBusinessSchema,
  ],
};

export default function AttaPage({
  searchParams,
}: {
  searchParams?: { loader?: string; lang?: string };
}) {
  const initialLanguage = searchParams?.lang === "ar" ? "ar" : "en";

  return (
    <div className={`${attaDisplay.variable} ${attaBody.variable} ${attaArabic.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <AttaUpgrade skipLoader={searchParams?.loader !== "1"} initialLanguage={initialLanguage} />
    </div>
  );
}
