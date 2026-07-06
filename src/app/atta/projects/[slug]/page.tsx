import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Archivo_Black, Cairo, Rajdhani } from "next/font/google";
import ProjectDetail from "@/components/atta/ProjectDetail";
import { attaProjects, getAttaProject } from "@/lib/atta-data";
import { localizeAttaProject } from "@/lib/atta-project-arabic";

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

export function generateStaticParams() {
  return attaProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params, searchParams }: { params: { slug: string }; searchParams?: { lang?: string } }): Metadata {
  const project = getAttaProject(params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Atta Group",
    };
  }

  const language = searchParams?.lang === "ar" ? "ar" : "en";
  const localizedProject = localizeAttaProject(project, language);
  const title = `${localizedProject.title} | Atta Group Project`;

  return {
    metadataBase: new URL("https://atta-group.net"),
    title,
    description: localizedProject.scope,
    alternates: {
      canonical: `/atta/projects/${project.slug}`,
      languages: {
        en: `/atta/projects/${project.slug}`,
        ar: `/atta/projects/${project.slug}?lang=ar`,
      },
    },
    openGraph: {
      title,
      description: localizedProject.scope,
      url: `/atta/projects/${project.slug}`,
      siteName: "Atta Group",
      images: [
        {
          url: project.images[0],
          width: 1200,
          height: 900,
          alt: project.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: localizedProject.scope,
      images: [project.images[0]],
    },
  };
}

export default function AttaProjectPage({ params, searchParams }: { params: { slug: string }; searchParams?: { lang?: string } }) {
  const project = getAttaProject(params.slug);

  if (!project) {
    notFound();
  }

  const language = searchParams?.lang === "ar" ? "ar" : "en";

  return (
    <div className={`${attaDisplay.variable} ${attaBody.variable} ${attaArabic.variable}`}>
      <ProjectDetail project={project} language={language} />
    </div>
  );
}
