import { resumes, homePath, casePath, cvPath, cvFile } from "@/data/resume";
import { siteOrigin } from "@/lib/metadata";
import type { Locale } from "@/lib/types";

// The printable CV. Every string comes from data/resume.ts, the same source
// as the site; scripts/build-cv.mjs prints this route to a one-page PDF.
export function Cv({ locale }: { locale: Locale }) {
  const data = resumes[locale];
  const other: Locale = locale === "en" ? "he" : "en";
  const site = siteOrigin.replace(/^https?:\/\//, "");
  const shown = (href: string, label: string) =>
    href.startsWith("https://wa.me") ? label : href.replace(/^https?:\/\/(www\.)?/, "");
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
          dir={other === "he" ? "rtl" : "ltr"}
          aria-label={data.nav.language}
        >
          {locale === "en" ? "עברית" : "English"}
        </a>
      </nav>
      <main id="main" className="cv-sheet" tabIndex={-1}>
        <header className="cv-head">
          <div className="cv-who">
            <figure className="cv-portrait">
              {/* Static export: no next/image, a plain img is intended. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/portrait.jpg" alt="" width="720" height="734" />
            </figure>
            <div className="cv-identity">
              <h1>{data.name}</h1>
              <p className="cv-role">
                <bdi>{data.title}</bdi>
              </p>
              <p className="cv-note">{data.hero.note}</p>
            </div>
          </div>
          <ul className="cv-links">
            <li>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.contact.email}`}
              >
                <bdi>{data.contact.email}</bdi>
              </a>
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
            <p className="cv-summary">{data.hero.intro}</p>

            <section className="cv-section">
              <h2>{data.cv.labels.experience}</h2>
              <div className="cv-job">
                <h3>{data.experience.company}</h3>
                <span className="cv-period">{data.experience.period}</span>
              </div>
              <p className="cv-job-title">
                <bdi>{data.title}</bdi>
              </p>
              <p>{data.experience.intro}</p>
              <ul className="cv-items">
                {data.experience.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
              <aside className="cv-ownership">
                <h3>{data.experience.ownershipTitle}</h3>
                <p>{data.experience.ownership}</p>
              </aside>
            </section>

            <section className="cv-section">
              <h2>{data.cv.labels.work}</h2>
              <ul className="cv-work">
                {data.projects.map((project) => (
                  <li key={project.slug}>
                    <h3>
                      <span className="cv-number" aria-hidden="true">
                        {project.number}
                      </span>
                      <a href={`${siteOrigin}${casePath(locale, project.slug)}`}>
                        {project.title}
                      </a>
                    </h3>
                    <p>{project.summary}</p>
                    <span className="cv-url" dir="ltr">
                      {site}
                      {casePath(locale, project.slug)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="cv-side">
            <section className="cv-section">
              <h2>{data.hero.focusLabel}</h2>
              <ul className="cv-tags">
                {data.hero.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="cv-section">
              <h2>{data.cv.labels.tools}</h2>
              <ul className="cv-tags">
                {data.capabilities.groups.flatMap((group) =>
                  group.items.map((item) => (
                    <li key={item}>
                      <bdi>{item}</bdi>
                    </li>
                  )),
                )}
              </ul>
            </section>

            <section className="cv-section">
              <h2>{data.cv.labels.background}</h2>
              <p>{data.background.intro}</p>
              <ul className="cv-items">
                {data.background.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span className="cv-detail">{item.detail}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section className="cv-section cv-next">
              <h2>{data.background.nextTitle}</h2>
              <p>{data.background.next}</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
