import type { CaseStudy } from "@/lib/types";

export function ProcessDiagram({
  project,
  compact = false,
}: {
  project: CaseStudy;
  compact?: boolean;
}) {
  return (
    <figure
      className={`process-diagram diagram-${project.slug} ${compact ? "compact" : ""}`}
    >
      <p className="diagram-label">{project.diagram.label}</p>
      <ol className="process-steps">
        {project.diagram.steps.map((step, index) => (
          <li key={step}>
            <span className="step-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <figcaption>
        <span className="diagram-mark" aria-hidden="true">
          +
        </span>
        {project.diagram.caption}
      </figcaption>
    </figure>
  );
}
