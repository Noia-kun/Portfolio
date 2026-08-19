import MagicBento from "./MagicBento";
import ScreenshotShowcase from "./ScreenshotShowcase";

export default function Projects() {
  return (
    <section id="projects" className="py-[var(--spacing-80)]">
      <div className="mx-auto flex max-w-[1000px] flex-col justify-center px-[var(--spacing-24)]">
        {/* Section Header Block */}
        <div className="flex flex-col items-center text-center mb-[var(--spacing-40)]">
          <p className="font-[family-name:var(--font-mono)] text-[var(--text-caption)] uppercase tracking-[0.2em] text-[var(--color-cyan-ink)] font-semibold mb-2">
            SELECTED WORK
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[36px] sm:text-[48px] md:text-[56px] font-bold text-[var(--color-text-primary)] leading-tight mb-3">
            Things I've Built
          </h2>
          <p className="max-w-xl mx-auto text-center font-[family-name:var(--font-mono)] text-[var(--text-body-sm)] sm:text-[var(--text-body)] text-[var(--color-text-body)] leading-relaxed">
            A mix of school systems, curriculum exercises, and personal builds, each one a step in learning how to ship real, working software.
          </p>
        </div>

        <MagicBento
          textAutoHide={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={10}
          glowColor="82, 225, 254"
        />
      </div>

      <ScreenshotShowcase />

      <div className="mt-[var(--spacing-24)] text-center">
        <a
          href="https://github.com/Noia-kun"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[var(--text-body-sm)] text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-cyan-ink)]"
        >
          <span>And more projects...</span>
          <span className="text-[var(--color-cyan-ink)]">→</span>
        </a>
      </div>
    </section>
  );
}