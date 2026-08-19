import { screenshots } from "../data/screenshots";

export default function ScreenshotShowcase() {
  const marqueeItems = [
    ...screenshots,
    ...screenshots,
    ...screenshots,
    ...screenshots,
  ];

  return (
    <div className="w-full overflow-hidden py-[var(--spacing-32)]">
      <div className="marquee-viewport relative w-full overflow-hidden">
        <div className="group flex w-max gap-[var(--spacing-16)] animate-marquee-left hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="relative aspect-[16/10] w-[280px] sm:w-[340px] flex-shrink-0 overflow-hidden rounded-[var(--radius-cards)] border border-[var(--color-border)] bg-[var(--color-carbon)] transition-all duration-300 filter group-hover:grayscale hover:!grayscale-0 hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.alt}
                title={item.title}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}