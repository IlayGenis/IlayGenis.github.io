import { homePath, cvPath } from "@/data/resume";
import type { ResumeData } from "@/lib/types";

export function Nav({ data, slug }: { data: ResumeData; slug?: string }) {
  const home = homePath;
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
          <a href={cvPath}>{data.nav.cv}</a>
        </div>
      </nav>
    </header>
  );
}
