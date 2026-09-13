import type { ResumeData } from "@/lib/types";
import { Arrow } from "@/components/ui/Arrow";

export function Contact({ data }: { data: ResumeData }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">{data.contact.label}</p>
          <h2>{data.contact.title}</h2>
        </div>
        <div className="contact-details">
          <p>{data.contact.intro}</p>
          <a className="email-link" href={`mailto:${data.contact.email}`}>
            <bdi>{data.contact.email}</bdi>
            <Arrow diagonal />
          </a>
          <div className="social-links">
            {data.contact.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <Arrow diagonal />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
