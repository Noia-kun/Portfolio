import MagicBento from "./MagicBento";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto flex min-h-[100dvh] max-w-[1000px] flex-col justify-center px-[var(--spacing-24)] py-[var(--spacing-80)]">
      <h2 className="mb-[var(--spacing-40)] text-center font-[family-name:var(--font-display)] text-[36px] sm:text-[48px] md:text-[56px] font-bold text-[var(--color-text-primary)]">
        Projects
      </h2>

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
    </section>
  );
}
