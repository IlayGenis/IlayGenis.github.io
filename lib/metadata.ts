import type { Metadata } from "next";
import { resume, homePath, casePath, cvPath, ogFile } from "@/data/resume";
import type { CaseStudy } from "@/lib/types";

export const siteOrigin = "https://ilaygenis.github.io";

function shareImage(page: string, alt: string) {
  return {
    url: ogFile(page),
    width: 1200,
    height: 630,
    type: "image/png",
    alt,
  };
}

export function portfolioMetadata(project?: CaseStudy): Metadata {
  const data = resume;
  const title = project
    ? `${project.title} | ${data.name}`
    : `${data.name} — ${data.title}`;
  const description = project?.summary ?? data.summary;
  const path = project ? casePath(project.slug) : homePath;
  const image = shareImage(project?.slug ?? "home", title);
  return {
    metadataBase: new URL(siteOrigin),
    title,
    description,
    icons: { icon: "/icon.png" },
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: data.name,
      locale: "en_US",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function cvMetadata(): Metadata {
  const data = resume;
  const title = `${data.name} — ${data.cv.title}`;
  const image = shareImage("cv", title);
  return {
    metadataBase: new URL(siteOrigin),
    title,
    description: data.summary,
    icons: { icon: "/icon.png" },
    alternates: {
      canonical: cvPath,
    },
    openGraph: {
      title,
      description: data.summary,
      url: cvPath,
      siteName: data.name,
      locale: "en_US",
      type: "profile",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: data.summary,
      images: [image],
    },
  };
}
