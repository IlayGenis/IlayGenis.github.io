import { homePath, casePath, cvPath } from "@/data/resume";
import type { Locale, ResumeData } from "@/lib/types";

export function Nav({
  locale,
  data,
  slug,
}: {
  locale: Locale;
  data: ResumeData;
  slug?: string;
}) {
  const home = homePath(locale);
  const other = locale === "en" ? "he" : "en";
  const otherPath = slug ? casePath(other, slug) : homePath(other);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        {data.nav.skip}
      </a>
      <nav className="container navigation" aria-label={data.nav.label}>
        <a className="wordmark" href={home}>
          {data.name}
        </a>
        <div className="nav-links">
          <a href={`${home}#work`}>{data.nav.work}</a>
          <a href={`${home}#experience`}>{data.nav.about}</a>
          <a href={slug ? "#contact" : `${home}#contact`}>{data.nav.contact}</a>
          <a href={cvPath(locale)}>{data.nav.cv}</a>
        </div>
        <a
          className="language-switch"
          href={otherPath}
          hrefLang={other}
          lang={other}
          aria-label={data.nav.language}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <ellipse cx="12" cy="12" rx="4" ry="9" />
            <path d="M3 12h18" />
          </svg>
          {/* dir on the label, not the link: the link keeps the page direction,
              so its inline-start divider faces the nav links. */}
          <span dir={other === "he" ? "rtl" : "ltr"}>
            {locale === "en" ? "עברית" : "English"}
          </span>
        </a>
      </nav>
    </header>
  );
}
