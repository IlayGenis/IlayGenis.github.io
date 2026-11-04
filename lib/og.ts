import { resumes, ogFile } from "@/data/resume";
import type { Locale } from "@/lib/types";

// What each share image says, built from the strings the pages already show.
// A new project in data/resume.ts gets its image with no change here.
export interface OgCard {
  file: string;
  locale: Locale;
  // Long headlines take two lines at a smaller size than the name.
  layout: "name" | "title";
  prompt: string;
  headline: string;
  accent: string;
  detail: string;
}

function localeCards(locale: Locale): OgCard[] {
  const data = resumes[locale];
  return [
    {
      file: ogFile(locale, "home"),
      locale,
      layout: "name",
      prompt: "$ whoami",
      headline: data.name,
      accent: data.title,
      detail: data.hero.focus.join(" / "),
    },
    {
      file: ogFile(locale, "cv"),
      locale,
      layout: "name",
      prompt: "$ cat cv",
      headline: data.name,
      accent: data.cv.title,
      detail: data.title,
    },
    ...data.projects.map(
      (project): OgCard => ({
        file: ogFile(locale, project.slug),
        locale,
        layout: "title",
        prompt: `$ cat work/${project.slug}`,
        headline: project.title,
        accent: project.diagram.caption,
        detail: `${data.name} / ${data.title}`,
      }),
    ),
  ];
}

export const ogCards: OgCard[] = [...localeCards("en"), ...localeCards("he")];
