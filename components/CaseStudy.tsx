import { resumes, homePath, casePath } from "@/data/resume";
import type { CaseStudy as CaseData, Locale } from "@/lib/types";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Arrow } from "@/components/ui/Arrow";
import { ProcessDiagram } from "@/components/ui/ProcessDiagram";
import { CaseToc } from "@/components/ui/CaseToc";
import { Contact } from "@/components/sections/Contact";

export function CaseStudy({
  locale,
  project,
}: {
  locale: Locale;
  project: CaseData;
}) {
  const data = resumes[locale];
  const nextProject =
    data.projects[
      (data.projects.findIndex((item) => item.slug === project.slug) + 1) %
        data.projects.length
    ];
  return (
    <>
      <Nav locale={locale} data={data} slug={project.slug} />
      <main id="main" className="case-main" tabIndex={-1}>
        <div className="container">
          <a className="back-link" href={`${homePath(locale)}#work`}>
            <span className="back-arrow">
              <Arrow />
            </span>
            {data.case.back}
          </a>
          <header className="case-hero">
            <p className="eyebrow">
              {data.case.label} / {project.number}{" "}
              <span>— {project.category}</span>
            </p>
            <h1>{project.title}</h1>
            <p className="case-summary">{project.summary}</p>
            <div className="case-status">{project.status}</div>
          </header>
          <div className="case-overview">
            <div>
              <h2 className="eyebrow">{data.case.role}</h2>
              <p>{project.role}</p>
            </div>
            <div>
              <h2 className="eyebrow">{data.case.tools}</h2>
              <ul className="tags">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <bdi>{tech}</bdi>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ProcessDiagram project={project} />
          <div className="case-body">
            <CaseToc
              label={data.case.contents}
              items={project.sections.map((section, index) => ({
                title: section.title,
                href: `#section-${index + 1}`,
              }))}
            />
            <nav className="case-toc" aria-label={data.case.contents}>
              <p className="eyebrow">{data.case.contents}</p>
              <ol>
                {project.sections.map((section, index) => (
                  <li key={section.title}>
                    <a href={`#section-${index + 1}`}>
                      <span aria-hidden="true">0{index + 1}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <article className="case-prose">
              {project.sections.map((section, index) => (
                <section id={`section-${index + 1}`} key={section.title}>
                  <p className="eyebrow" aria-hidden="true">
                    0{index + 1}
                  </p>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
              <aside className="takeaway">
                <h2>{data.case.takeaway}</h2>
                <p>{project.takeaway}</p>
              </aside>
              <p className="confidentiality">{data.case.confidentiality}</p>
            </article>
          </div>
          <div className="case-next">
            <p className="eyebrow">{data.case.next}</p>
            <a href={casePath(locale, nextProject.slug)}>
              <span>{nextProject.title}</span>
              <Arrow />
            </a>
            <a className="text-link" href={`${homePath(locale)}#work`}>
              {data.case.all}
            </a>
          </div>
        </div>
      </main>
      <Contact
        data={data}
        label={data.case.contactLabel}
        title={data.case.contactTitle}
        intro={data.case.contactIntro}
      />
      <Footer data={data} />
    </>
  );
}
