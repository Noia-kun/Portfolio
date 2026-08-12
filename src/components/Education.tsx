import { education } from "../data/education";
import RevealOnScroll from "./RevealOnScroll";

export default function Education() {
  return (
    <section id="education" className="mx-auto flex max-w-[720px] flex-col justify-center px-[var(--spacing-24)] py-[var(--spacing-96)]">
      <RevealOnScroll>
        <h2 className="mb-[var(--spacing-40)] text-center font-[family-name:var(--font-display)] text-[36px] sm:text-[48px] md:text-[56px] font-bold text-[var(--color-text-primary)]">Education</h2>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="rounded-[var(--radius-cards)] bg-[var(--color-ground)] p-[var(--spacing-32)]">
        <h3 className="font-[family-name:var(--font-display)] text-[var(--text-heading-sm)] font-medium text-[var(--color-text-primary)]">
          {education.degree}
        </h3>
        <p className="mt-[var(--spacing-8)] font-[var(--font-body)] text-[var(--text-body)] text-[var(--color-text-body)]">
          {education.school} · {education.period}
        </p>

        {/* Extra display text, not part of the EducationItem type */}
        <div className="mt-[var(--spacing-16)] flex flex-wrap items-center gap-[var(--spacing-12)]">
          <span
            className="rounded-[var(--radius-pills)] border border-[var(--color-border)] px-[var(--spacing-12)] py-[var(--spacing-4)] font-[var(--font-mono)] text-[var(--text-caption)] text-[var(--color-text-muted)]">
            GPA: 3.44/4.0
          </span>
          <span
            className="rounded-[var(--radius-pills)] px-[var(--spacing-12)] py-[var(--spacing-4)] font-[var(--font-mono)] text-[var(--text-caption)] font-medium"
            style={{ backgroundColor: "var(--color-cyan-glow)", color: "var(--color-cyan)" }}>
            Dean's Lister
          </span>
        </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
