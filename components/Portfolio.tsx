import { resumes, casePath } from "@/data/resume";
import type { Locale } from "@/lib/types";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessDiagram } from "@/components/ui/ProcessDiagram";
import { Arrow } from "@/components/ui/Arrow";
import { Contact } from "@/components/sections/Contact";

export function Portfolio({ locale }: { locale: Locale }) {
  const data = resumes[locale];
  return (
    <>
      <Nav locale={locale} data={data} />
      <main id="main" tabIndex={-1}>
        <section id="top" className="hero container">
          <div className="hero-top">
            <p className="eyebrow" dir="ltr">
              {data.hero.eyebrow}
            </p>
            <span className="availability">
              <span aria-hidden="true" />
              {data.hero.availability}
            </span>
          </div>
          <div className="hero-grid">
            <h1>
              {data.hero.lines.map((line, index) => (
                <span key={line} className={index === 1 ? "hero-accent" : ""}>
                  {line}
                </span>
              ))}
            </h1>
            <div className="hero-intro">
              <p>{data.hero.intro}</p>
              <div className="hero-actions">
                <a className="button" href="#work">
                  {data.hero.work}
                  <Arrow />
                </a>
                <a className="text-link" href="#contact">
                  {data.hero.contact}
                </a>
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <p>{data.hero.note}</p>
            <div className="focus">
              <span className="eyebrow">{data.hero.focusLabel}</span>
              <ul>
                {data.hero.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="work" className="section container">
          <span id="projects" className="anchor-alias" />
          <SectionHeading
            label={data.work.label}
            title={data.work.title}
            intro={data.work.intro}
          />
          <div className="work-grid">
            {data.projects.map((project, index) => (
              <article
                key={project.slug}
                className={`work-card ${index === 0 ? "featured" : ""}`}
              >
                <div className="work-copy">
                  <div className="work-meta">
                    <span className="work-number">/{project.number}</span>
                    <span>{project.category}</span>
                  </div>
                  <span className="project-status">{project.status}</span>
                  <h3>
                    <a
                      className="project-link"
                      href={casePath(locale, project.slug)}
                    >
                      {project.title}
                      <span className="card-arrow">
                        <Arrow diagonal />
                      </span>
                    </a>
                  </h3>
                  <p>{project.summary}</p>
                  <ul className="tags">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <bdi>{tech}</bdi>
                      </li>
                    ))}
                  </ul>
                  <span className="read-case" aria-hidden="true">
                    {data.work.read}
                    <Arrow />
                  </span>
                </div>
                <ProcessDiagram project={project} compact />
              </article>
            ))}
          </div>
          <p className="confidentiality">{data.work.confidentiality}</p>
        </section>

        <section id="experience" className="section experience-section">
          <div className="container">
            <SectionHeading
              label={data.experience.label}
              title={data.experience.title}
            />
            <div className="experience-grid">
              <div className="role-summary">
                <div className="role-company">
                  <span className="company-symbol" aria-hidden="true">
                    C
                  </span>
                  <div>
                    <h3>{data.experience.company}</h3>
                    <p>{data.experience.period}</p>
                  </div>
                </div>
                <p className="role-title" dir="ltr">
                  {data.title}
                </p>
                <p>{data.experience.intro}</p>
              </div>
              <div className="responsibilities">
                {data.experience.items.map((item, i) => (
                  <article key={item.title}>
                    <span className="item-index" aria-hidden="true">
                      0{i + 1}
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <aside className="ownership">
              <div className="ownership-symbol" aria-hidden="true">
                ↳
              </div>
              <div>
                <h3>{data.experience.ownershipTitle}</h3>
                <p>{data.experience.ownership}</p>
              </div>
            </aside>
          </div>
        </section>

        <section id="skills" className="section container">
          <SectionHeading
            label={data.capabilities.label}
            title={data.capabilities.title}
          />
          <div className="capabilities-grid">
            {data.capabilities.groups.map((group, i) => (
              <article key={group.title}>
                <span className="capability-index" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <bdi>{item}</bdi>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="learning">
            <h3>{data.capabilities.learningTitle}</h3>
            <p>{data.capabilities.learning}</p>
          </div>
        </section>

        <section id="background" className="section background-section">
          <div className="container">
            <span id="summary" className="anchor-alias" />
            <span id="education" className="anchor-alias" />
            <SectionHeading
              label={data.background.label}
              title={data.background.title}
              intro={data.background.intro}
            />
            <div className="background-grid">
              {data.background.items.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="education-detail">{item.detail}</p>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="next-step">
              <h3>{data.background.nextTitle}</h3>
              <p>{data.background.next}</p>
            </div>
          </div>
        </section>
        <Contact data={data} />
      </main>
      <Footer data={data} />
    </>
  );
}
