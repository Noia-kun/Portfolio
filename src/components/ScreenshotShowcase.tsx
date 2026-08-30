import { screenshots } from "../data/screenshots";

export default function ScreenshotShowcase() {
  return (
    <div className="w-full overflow-hidden py-[var(--spacing-32)]">
      <div className="marquee-viewport relative w-full overflow-hidden">
        <div
          style={
            {
              "--marquee-distance": "50%",
              "--marquee-duration": "40s",
            } as React.CSSProperties
          }
          className="group flex w-max animate-marquee-left hover:[animation-play-state:paused]"
        >
          {/* Set 1 */}
          <div className="flex shrink-0 gap-[var(--spacing-16)] pr-[var(--spacing-16)]">
            {screenshots.map((item, idx) => (
              <div
                key={`orig-${item.id}-${idx}`}
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

          {/* Set 2 (Duplicate for seamless loop) */}
          <div
            className="flex shrink-0 gap-[var(--spacing-16)] pr-[var(--spacing-16)]"
            aria-hidden="true"
          >
            {screenshots.map((item, idx) => (
              <div
                key={`dup-${item.id}-${idx}`}
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
    </div>
  );
}