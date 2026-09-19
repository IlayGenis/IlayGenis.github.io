import { resumes, casePath } from "@/data/resume";
import type { Locale, ResumeData } from "@/lib/types";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessDiagram } from "@/components/ui/ProcessDiagram";
import { Arrow } from "@/components/ui/Arrow";
import { Contact } from "@/components/sections/Contact";
import { CallexMark } from "@/components/ui/CallexMark";

function HeroFacts({ data }: { data: ResumeData }) {
  return (
    <>
      <div className="fact">
        <span className="eyebrow">{data.hero.about.label}</span>
        <p>{data.hero.about.text}</p>
      </div>
      <div className="fact">
        <span className="eyebrow">{data.hero.traits.label}</span>
        <ul>
          {data.hero.traits.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="fact">
        <span className="eyebrow">{data.hero.focusLabel}</span>
        <ul>
          {data.hero.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function Portfolio({ locale }: { locale: Locale }) {
  const data = resumes[locale];
  return (
    <>
      <Nav locale={locale} data={data} />
      <main id="main" tabIndex={-1}>
        <section id="top" className="hero container">
          <div className="hero-grid">
            <div className="hero-main">
              <p className="eyebrow" dir="ltr">
                {data.hero.eyebrow}
              </p>
              <h1>
                {data.hero.lines.map((line, index) => (
                  <span
                    key={line}
                    className={index === 1 ? "hero-accent" : ""}
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </div>
            <div className="hero-intro">
              <div className="hero-side-top">
                <figure className="portrait">
                  {/* Static export: no next/image, a plain img is intended. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/portrait.jpg"
                    alt={data.name}
                    width="720"
                    height="734"
                  />
                </figure>
                <span className="availability">
                  <span aria-hidden="true" />
                  {data.hero.availability}
                </span>
              </div>
              <p>{data.hero.intro}</p>
              {/* Mobile only: the same facts, before the buttons, so nothing is skipped. */}
              <div className="hero-facts-inline">
                <HeroFacts data={data} />
              </div>
              {/* One action. The work section starts right below the hero, so a
                  "see my work" button only scrolled to what was already visible. */}
              <div className="hero-actions">
                <a className="button" href="#contact">
                  {data.hero.contact}
                  <Arrow />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <HeroFacts data={data} />
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
                  <a
                    className="read-case"
                    href={casePath(locale, project.slug)}
                  >
                    {data.work.read}
                    <Arrow />
                  </a>
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
                <h3 className="role-title">
                  <bdi>{data.title}</bdi>
                </h3>
                <div className="role-company">
                  <span className="company-symbol" aria-hidden="true">
                    <CallexMark />
                  </span>
                  <div>
                    <p className="company-name">
                      <bdi>{data.experience.company}</bdi>, {data.experience.tagline}
                    </p>
                    <p>{data.experience.period}</p>
                  </div>
                </div>
                <p>{data.experience.intro}</p>
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
        <Contact locale={locale} data={data} />
      </main>
      <Footer data={data} />
    </>
  );
}
