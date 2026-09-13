import type { Metadata } from "next";
import { resumes, homePath, casePath } from "@/data/resume";
import type { Locale, CaseStudy } from "@/lib/types";

export const siteOrigin = "https://ilaygenis.github.io";

export function portfolioMetadata(
  locale: Locale,
  project?: CaseStudy,
): Metadata {
  const data = resumes[locale];
  const title = project
    ? `${project.title} | ${data.name}`
    : `${data.name} — ${data.title}`;
  const description = project?.summary ?? data.summary;
  const path = project ? casePath(locale, project.slug) : homePath(locale);
  return {
    metadataBase: new URL(siteOrigin),
    title,
    description,
    icons: { icon: "/icon.png" },
    alternates: {
      canonical: path,
      languages: {
        en: project ? casePath("en", project.slug) : homePath("en"),
        he: project ? casePath("he", project.slug) : homePath("he"),
        "x-default": project ? casePath("en", project.slug) : homePath("en"),
      },
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: data.name,
      locale: locale === "he" ? "he_IL" : "en_US",
      alternateLocale: locale === "he" ? "en_US" : "he_IL",
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: `${resumes.en.name} — ${resumes.en.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}
