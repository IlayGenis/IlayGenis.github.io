export type Locale = "en" | "he";

export interface CaseStudy {
  slug: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  status: string;
  technologies: string[];
  diagram: { label: string; steps: string[]; caption: string };
  role: string;
  sections: { title: string; paragraphs: string[] }[];
  takeaway: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  nav: {
    work: string;
    about: string;
    contact: string;
    cv: string;
    label: string;
    language: string;
    skip: string;
  };
  hero: {
    eyebrow: string;
    lines: string[];
    intro: string;
    availability: string;
    work: string;
    contact: string;
    // Personal facts strip: three labelled blocks under the hero on desktop,
    // repeated between the intro and the buttons on mobile.
    about: { label: string; text: string };
    traits: { label: string; items: string[] };
    focusLabel: string;
    focus: string[];
  };
  work: {
    label: string;
    title: string;
    intro: string;
    read: string;
    confidentiality: string;
  };
  experience: {
    label: string;
    title: string;
    company: string;
    // One-line description of the company, shown after its name.
    tagline: string;
    period: string;
    intro: string;
    items: { title: string; text: string }[];
    ownershipTitle: string;
    ownership: string;
  };
  capabilities: {
    label: string;
    title: string;
    groups: { title: string; text?: string; items: string[] }[];
    learningTitle?: string;
    learning?: string;
  };
  background: {
    label: string;
    title: string;
    intro: string;
    items: { title: string; detail: string; text: string }[];
    nextTitle: string;
    next: string;
  };
  contact: {
    label: string;
    title: string;
    intro: string;
    email: string;
    copy: string;
    copied: string;
    cv: string;
    links: { label: string; href: string }[];
  };
  case: {
    back: string;
    label: string;
    role: string;
    tools: string;
    takeaway: string;
    next: string;
    all: string;
    confidentiality: string;
    contents: string;
    contactLabel: string;
    contactTitle: string;
    contactIntro: string;
  };
  // One-page printable CV at /cv/, built from the same strings as the site.
  cv: {
    title: string;
    download: string;
    back: string;
    labels: {
      experience: string;
      work: string;
      background: string;
      tools: string;
      contact: string;
      site: string;
    };
  };
  footer: string;
  projects: CaseStudy[];
}
