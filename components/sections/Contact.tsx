import type { Locale, ResumeData } from "@/lib/types";
import { cvFile } from "@/data/resume";
import { Arrow } from "@/components/ui/Arrow";
import { CopyEmail } from "@/components/ui/CopyEmail";

export function Contact({
  locale,
  data,
  label,
  title,
  intro,
}: {
  locale: Locale;
  data: ResumeData;
  label?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">{label ?? data.contact.label}</p>
          <h2>{title ?? data.contact.title}</h2>
        </div>
        <div className="contact-details">
          <p>{intro ?? data.contact.intro}</p>
          <div className="email-row">
            <a
              className="email-link"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <bdi>{data.contact.email}</bdi>
              <Arrow diagonal />
            </a>
            <CopyEmail
              email={data.contact.email}
              label={data.contact.copy}
              done={data.contact.copied}
            />
          </div>
          <div className="social-links">
            {data.contact.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <bdi>{link.label}</bdi>
                <Arrow diagonal />
              </a>
            ))}
            <a href={cvFile(locale)} target="_blank" rel="noopener noreferrer">
              <bdi>{data.contact.cv}</bdi>
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
