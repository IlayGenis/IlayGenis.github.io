import { resumes, homePath, casePath, cvPath, cvFile } from "@/data/resume";
import { siteOrigin } from "@/lib/metadata";
import type { Locale } from "@/lib/types";

// The printable CV. Every string comes from data/resume.ts: shared facts from
// the same fields as the site, CV-specific wording from `cv`.
// scripts/build-cv.mjs prints this route to a one-page PDF.
export function Cv({ locale }: { locale: Locale }) {
  const data = resumes[locale];
  const other: Locale = locale === "en" ? "he" : "en";
  const site = siteOrigin.replace(/^https?:\/\//, "");
  const shown = (href: string, label: string) =>
    href.startsWith("https://wa.me")
      ? label
      : href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return (
    <div className="cv-screen">
      <nav className="cv-toolbar" aria-label={data.nav.label}>
        <a className="text-link" href={homePath(locale)}>
          {data.cv.back}
        </a>
        <a className="button" href={cvFile(locale)} download>
          {data.cv.download}
        </a>
        <a
          className="language-switch"
          href={cvPath(other)}
          hrefLang={other}
          lang={other}
          aria-label={data.nav.language}
        >
          <span dir={other === "he" ? "rtl" : "ltr"}>
            {locale === "en" ? "עברית" : "English"}
          </span>
        </a>
      </nav>
      <main id="main" className="cv-sheet" tabIndex={-1}>
        <header className="cv-head">
          <div className="cv-identity">
            <h1>{data.name}</h1>
            <p className="cv-role">
              <bdi>{data.title}</bdi>
            </p>
            <p className="cv-note">
              {data.cv.available} · {data.cv.location}
            </p>
            <p className="cv-note">{data.cv.personal}</p>
          </div>
          <ul className="cv-links">
            <li>
              <bdi>{data.contact.email}</bdi>
            </li>
            {data.contact.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>
                  <bdi>{shown(link.href, link.label)}</bdi>
                </a>
              </li>
            ))}
            <li>
              <a href={`${siteOrigin}${homePath(locale)}`}>
                <bdi>{site}</bdi>
              </a>
            </li>
          </ul>
        </header>

        <div className="cv-columns">
          <div className="cv-main">
            <p className="cv-summary">{data.cv.summary}</p>

            <section className="cv-section">
              <h2>{data.cv.labels.experience}</h2>
              <div className="cv-job">
                <h3>
                  <bdi>{data.title}</bdi>
                </h3>
                <span className="cv-period">{data.experience.period}</span>
              </div>
              <p className="cv-job-title">
                <bdi>{data.experience.company}</bdi>, {data.experience.tagline}
              </p>
              <p>{data.cv.experience.intro}</p>
              <ul className="cv-items">
                {data.cv.experience.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
              <aside className="cv-ownership">
                <h3>{data.cv.experience.methodTitle}</h3>
                <p>{data.cv.experience.method}</p>
              </aside>
            </section>
          </div>

          <div className="cv-side">
            <section className="cv-section">
              <h2>{data.cv.labels.tools}</h2>
              <div className="cv-tags-clip">
                <ul className="cv-tags">
                  {data.cv.skills.map((item) => (
                    <li key={item}>
                      <bdi>{item}</bdi>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="cv-section">
              <h2>{data.cv.labels.background}</h2>
              <ul className="cv-items">
                {data.cv.education.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span className="cv-detail">{item.detail}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <section className="cv-section cv-selected">
          <h2>{data.cv.labels.work}</h2>
          <ul className="cv-work">
            {data.projects.map((project) => {
              const { title, summary } = data.cv.work[project.slug];
              const href = `${siteOrigin}${casePath(locale, project.slug)}`;
              return (
                <li key={project.slug}>
                  <h3>
                    <span className="cv-number" aria-hidden="true">
                      {project.number}
                    </span>
                    <a href={href}>{title}</a>
                  </h3>
                  <p>
                    {summary}{" "}
                    <a
                      className="cv-more"
                      href={href}
                      aria-label={`${data.cv.caseLink}: ${title}`}
                    >
                      {data.cv.caseLink}
                    </a>
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}
