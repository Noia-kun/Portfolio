import * as ThesvgIcons from "@thesvg/react";
import { techRowOne, techRowTwo } from "../data/techStack";
import type { TechStackItem } from "../types";


const iconMap = ThesvgIcons as unknown as Record<
  string,
  React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
>;

function Pill({ item }: { item: TechStackItem }) {
  const Icon = iconMap[item.icon];

  return (
    <span
      title={item.name}
      className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-[var(--radius-cards)] border border-[var(--color-border)] bg-[var(--color-carbon)]"
    >
      {Icon && <Icon width={44} height={44} />}
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
      <div className={`flex w-max gap-[var(--spacing-16)] ${animClass}`}>
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <Pill key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="techstack" className="flex min-h-[100dvh] flex-col justify-center py-[var(--spacing-80)]">
      <h2 className="mb-[var(--spacing-40)] text-center font-[family-name:var(--font-display)] text-[var(--text-heading-lg)] font-medium text-[var(--color-text-primary)]">Arsenal - Tech Stack</h2>
      <div className="flex flex-col gap-[var(--spacing-16)]">
        <MarqueeRow items={techRowOne} direction="left" />
        <MarqueeRow items={techRowTwo} direction="right" />
      </div>
    </section>
  );
}