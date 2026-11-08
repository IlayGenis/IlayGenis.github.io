export interface CaseStudy {
  slug: string;
  number: string;
  category: string;
  title: string;
  // Case page intro and meta description.
  summary: string;
  // Homepage card text when it differs from `summary`.
  cardSummary?: string;
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
    skip: string;
  };
  hero: {
    eyebrow: string;
    lines: string[];
    // The hero introduction, one entry per paragraph.
    intro: string[];
    contact: string;
    // Personal facts strip: three labelled blocks under the hero on desktop,
    // repeated between the intro and the buttons on mobile.
    // Where I am now and when I'm in Israel, then languages. The CV has its
    // own wording (cv.location, cv.personal).
    about: { label: string; location: string; personal: string };
    // How I work: a concrete working method, not a list of traits.
    traits: { label: string; text: string };
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
  background: {
    label: string;
    title: string;
    intro: string;
    items: { title: string; detail: string; text: string }[];
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
  // One-page printable CV at /cv/. Identity and employment facts come from the
  // shared fields above; wording that differs from the site lives here.
  cv: {
    title: string;
    download: string;
    back: string;
    // The CV's own professional summary; the site keeps the personal hero intro
    // and the top-level `summary` (meta description).
    summary: string;
    // First header line: availability, then location. On the site
    // hero.about.location says where; the CV adds availability.
    available: string;
    location: string;
    // Second header line.
    personal: string;
    // Link text after each project's description.
    caseLink: string;
    experience: {
      intro: string;
      items: { title: string; text: string }[];
      methodTitle: string;
      method: string;
    };
    // Title and one-line description per project, keyed by slug. Number, order
    // and link come from `projects`.
    work: Record<string, { title: string; summary: string }>;
    skills: string[];
    education: { title: string; detail: string; text: string }[];
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
