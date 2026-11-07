import { resume, ogFile } from "@/data/resume";

// What each share image says, built from the strings the pages already show.
// A new project in data/resume.ts gets its image with no change here.
export interface OgCard {
  file: string;
  // Long headlines take two lines at a smaller size than the name.
  layout: "name" | "title";
  prompt: string;
  headline: string;
  accent: string;
  detail: string;
}

const data = resume;

export const ogCards: OgCard[] = [
  {
    file: ogFile("home"),
    layout: "name",
    prompt: "$ whoami",
    headline: data.name,
    accent: data.title,
    detail: data.hero.focus.join(" / "),
  },
  {
    file: ogFile("cv"),
    layout: "name",
    prompt: "$ cat cv",
    headline: data.name,
    accent: data.cv.title,
    detail: data.title,
  },
  ...data.projects.map(
    (project): OgCard => ({
      file: ogFile(project.slug),
      layout: "title",
      prompt: `$ cat work/${project.slug}`,
      headline: project.title,
      accent: project.diagram.caption,
      detail: `${data.name} / ${data.title}`,
    }),
  ),
];
