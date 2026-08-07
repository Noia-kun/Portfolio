import MagicBento from "./MagicBento";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1000px] px-[var(--spacing-24)] py-[var(--spacing-80)]">
      <h2 className="mb-[var(--spacing-40)] text-center font-[family-name:var(--font-display)] text-[var(--text-heading-lg)] font-medium text-[var(--color-text-primary)]">
        Projects
      </h2>

      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={10}
        glowColor="82, 225, 254"
      />
    </section>
  );
}