import { homePath, casePath } from "@/data/resume";
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
        <a className="wordmark" href={home} aria-label={data.name}>
          <span className="monogram" aria-hidden="true">
            ig<span>.</span>
          </span>
          <span>{data.name}</span>
        </a>
        <div className="nav-links">
          <a href={`${home}#work`}>{data.nav.work}</a>
          <a href={`${home}#background`}>{data.nav.about}</a>
          <a href={slug ? "#contact" : `${home}#contact`}>{data.nav.contact}</a>
        </div>
        <a
          className="language-switch"
          href={otherPath}
          hrefLang={other}
          lang={other}
          dir={other === "he" ? "rtl" : "ltr"}
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
          {locale === "en" ? "עברית" : "English"}
        </a>
      </nav>
    </header>
  );
}
