import { techRowOne, techRowTwo } from "../data/techStack";
import type { TechStackItem } from "../types";

function Pill({ item }: { item: TechStackItem }) {
  return (
    <span className="shrink-0 rounded-[var(--radius-cards)] border border-[var(--color-border)] bg-[var(--color-carbon)] px-[var(--spacing-12)] py-[var(--spacing-4)] font-[var(--font-mono)] text-[var(--text-body-sm)] text-[var(--color-text-body)]">
      {item.name}
    </span>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: TechStackItem[];
  direction: "left" | "right";
}) {
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-[var(--spacing-12)] ${animClass}`}>
        {[...items, ...items].map((item, i) => (
          <Pill key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-[var(--spacing-80)]">
      <h2 className="mb-[var(--spacing-40)] text-center font-[family-name:var(--font-display)] text-[var(--text-heading-lg)] font-medium text-[var(--color-text-primary)]">Tech Stack</h2>
      <div className="flex flex-col gap-[var(--spacing-16)]">
        <MarqueeRow items={techRowOne} direction="left" />
        <MarqueeRow items={techRowTwo} direction="right" />
      </div>
    </section>
  );
}