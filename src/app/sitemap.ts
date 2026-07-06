import type { MetadataRoute } from "next";
import { attaBlogArticles } from "@/lib/atta-blog-data";
import { attaProjects } from "@/lib/atta-data";

const baseUrl = "https://atta-group.net";
const homepageLastModified = new Date("2026-06-01T00:00:00.000Z");
const blogLastModified = new Date("2026-06-08T00:00:00.000Z");
const projectLastModified = new Date("2026-05-31T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: homepageLastModified,
    },
    {
      url: `${baseUrl}/atta/blogs`,
      lastModified: blogLastModified,
    },
    ...attaBlogArticles.map((article) => ({
      url: `${baseUrl}/atta/blogs/${article.slug}`,
      lastModified: new Date(`${article.updatedAt}T00:00:00.000Z`),
    })),
    ...attaProjects.map((project) => ({
      url: `${baseUrl}/atta/projects/${project.slug}`,
      lastModified: projectLastModified,
    })),
  ];
}
