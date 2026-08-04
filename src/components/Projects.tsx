import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1000px] px-[var(--spacing-24)] py-[var(--spacing-80)]">
      <h2 className="mb-[var(--spacing-40)] text-center font-[family-name:var(--font-display)] text-[var(--text-heading-lg)] font-medium text-[var(--color-text-primary)]">Projects</h2>

      <div className="grid grid-cols-1 gap-[var(--spacing-20)] md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title}
            className="rounded-[var(--radius-cards)] bg-[var(--color-ground)] p-[var(--spacing-32)]">
            <h3 className="font-[family-name:var(--font-display)] text-[var(--text-heading-sm)] font-medium text-[var(--color-text-primary)]">
              {project.title}
            </h3>
            <p className="mt-[var(--spacing-8)] font-[var(--font-inter)] text-[var(--text-body)] text-[var(--color-text-body)]">
              {project.description}
            </p>
            <div className="mt-[var(--spacing-16)] flex flex-wrap gap-[var(--spacing-8)]">
              {project.stack.map((tech) => (
                <span key={tech}
                  className="rounded-[var(--radius-pills)] border border-[var(--color-border)] px-[var(--spacing-12)] py-[var(--spacing-4)] font-[var(--font-mono)] text-[var(--text-caption)] text-[var(--color-text-muted)]">{tech}
                </span>
              ))}
            </div>
            <div className="mt-[var(--spacing-20)] flex gap-[var(--spacing-16)]">
                {project.liveUrl && (
                    <a href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[var(--font-inter)] text-[var(--text-body-sm)] font-medium"
                    style={{ color: "var(--color-cyan)" }}>
                    Live Demo →
                    </a>
                )}
                {project.githubUrl && (
                    <a href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[var(--font-inter)] text-[var(--text-body-sm)] font-medium text-[var(--color-text-body)]">
                    GitHub →
                    </a>
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}