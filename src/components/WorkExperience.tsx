import { workExperience } from "../data/workExperience";
import RevealOnScroll from "./RevealOnScroll";

export default function WorkExperience() {
  const { role, company, period, bullets } = workExperience;

  return (
    <section id="experience" className="mx-auto flex max-w-[720px] flex-col justify-center px-[var(--spacing-24)] py-[var(--spacing-96)]">
      <RevealOnScroll>
        <h2 className="mb-[var(--spacing-40)] text-center font-[family-name:var(--font-display)] text-[36px] sm:text-[48px] md:text-[56px] font-bold text-[var(--color-text-primary)]">
          Work Experience
        </h2>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="rounded-[var(--radius-cards)] border border-[var(--color-border)] bg-[var(--color-carbon)]">
        {/* Title bar */}
        <div className="flex items-center gap-[var(--spacing-8)] border-b border-[var(--color-border)] px-[var(--spacing-16)] py-[var(--spacing-12)]">
          <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f56]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#ffbd2e]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#27c93f]" />
          <span className="ml-auto font-[var(--font-mono)] text-[var(--text-caption)] text-[var(--color-text-muted)]">
            experience.json
          </span>
        </div>

        {/* Content */}
        <div className="px-[var(--spacing-24)] py-[var(--spacing-24)]">
          <p className="font-[var(--font-mono)] text-[var(--text-body-sm)] text-[var(--color-text-muted)]">
            {"{"}
          </p>
          <p className="pl-[var(--spacing-16)] font-[var(--font-mono)] text-[var(--text-body-sm)]">
            <span style={{ color: "var(--color-cyan)" }}>"role"</span>
            <span className="text-[var(--color-text-muted)]">: </span>
            <span className="text-[var(--color-text-primary)]">"{role}"</span>
            <span className="text-[var(--color-text-muted)]">,</span>
          </p>
          <p className="pl-[var(--spacing-16)] font-[var(--font-mono)] text-[var(--text-body-sm)]">
            <span style={{ color: "var(--color-cyan)" }}>"company"</span>
            <span className="text-[var(--color-text-muted)]">: </span>
            <span className="text-[var(--color-text-primary)]">"{company}"</span>
            <span className="text-[var(--color-text-muted)]">,</span>
          </p>
          <p className="pl-[var(--spacing-16)] font-[var(--font-mono)] text-[var(--text-body-sm)]">
            <span style={{ color: "var(--color-cyan)" }}>"period"</span>
            <span className="text-[var(--color-text-muted)]">: </span>
            <span className="text-[var(--color-text-primary)]">"{period}"</span>
          </p>
          <p className="font-[var(--font-mono)] text-[var(--text-body-sm)] text-[var(--color-text-muted)]">
            {"}"}
          </p>

          <ul className="mt-[var(--spacing-24)] flex flex-col gap-[var(--spacing-12)]">
            {bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-[var(--spacing-8)] font-[var(--font-body)] text-[var(--text-body-sm)] leading-[1.55] text-[var(--color-text-body)]"
              >
                <span style={{ color: "var(--color-cyan)" }}>→</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
