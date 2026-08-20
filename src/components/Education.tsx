import { education, educationDescription } from "../data/education";
import nuLagunaLogo from "../assets/nu-laguna-logo.png";
import RevealOnScroll from "./RevealOnScroll";

export default function Education() {
  return (
    <section id="education" className="mx-auto flex max-w-[720px] flex-col justify-center px-[var(--spacing-24)] py-[var(--spacing-96)]">
      {/* Section Header Block */}
      <RevealOnScroll>
        <div className="flex flex-col items-center text-center mb-[var(--spacing-40)]">
          <p className="font-[family-name:var(--font-mono)] text-[var(--text-caption)] uppercase tracking-[0.2em] text-[var(--color-cyan-ink)] font-semibold mb-2">
            BACKGROUND
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[36px] sm:text-[48px] md:text-[56px] font-bold text-[var(--color-text-primary)] leading-tight mb-3">
            Education
          </h2>
          <p className="max-w-xl mx-auto text-center font-[family-name:var(--font-mono)] text-[var(--text-body-sm)] sm:text-[var(--text-body)] text-[var(--color-text-body)] leading-relaxed">
            Formal training that laid the groundwork before I started building things for real.
          </p>
        </div>
      </RevealOnScroll>

      {/* Education Card */}
      <RevealOnScroll>
        <div
          className="rounded-[var(--radius-cards)] bg-[var(--color-ground)] p-[var(--spacing-32)]"
          style={{ border: "1px solid var(--color-cyan-ink)" }}
        >
          <div className="flex items-start gap-[var(--spacing-24)]">
            <img
              src={nuLagunaLogo}
              alt="National University Laguna seal"
              className="h-[64px] w-[64px] shrink-0 object-contain"
            />

            <div>
              <h3 className="font-[family-name:var(--font-display)] text-[var(--text-heading-sm)] font-medium text-[var(--color-text-primary)]">
                {education.degree}
              </h3>
              <p className="mt-[var(--spacing-4)] font-[var(--font-body)] text-[var(--text-body)] text-[var(--color-text-body)]">
                {education.school} · {education.period}
              </p>
            </div>
          </div>

          <p className="mt-[var(--spacing-24)] font-[var(--font-body)] text-[var(--text-body)] leading-[1.6] text-[var(--color-text-body)]">
            {educationDescription}
          </p>

          <div className="mt-[var(--spacing-24)] flex flex-wrap items-center gap-[var(--spacing-12)]">
            <span className="rounded-[var(--radius-pills)] border border-[var(--color-border)] px-[var(--spacing-12)] py-[var(--spacing-4)] font-[var(--font-mono)] text-[var(--text-caption)] text-[var(--color-text-muted)]">
              GPA: 3.44/4.0
            </span>
            <span
              className="rounded-[var(--radius-pills)] px-[var(--spacing-12)] py-[var(--spacing-4)] font-[var(--font-mono)] text-[var(--text-caption)] font-medium"
              style={{ backgroundColor: "var(--color-cyan-glow)", color: "var(--color-cyan-ink)" }}
            >
              Dean's Lister
            </span>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}