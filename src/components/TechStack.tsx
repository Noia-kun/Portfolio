import * as SimpleIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { techRowOne, techRowTwo } from "../data/techStack";
import type { TechStackItem } from "../types";


const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  ...SimpleIcons,
  ...FaIcons,
};
function Pill({ item }: { item: TechStackItem }) {
  const Icon = iconMap[item.icon];

  return (
    <span
      title={item.name}
      className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-[var(--radius-cards)] border border-[var(--color-border)] bg-[var(--color-carbon)]"
    >
      {Icon && <Icon size={44} color={item.color} />}
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
    <section className="py-[var(--spacing-80)]">
      <h2 className="mb-[var(--spacing-40)] text-center font-[family-name:var(--font-display)] text-[var(--text-heading-lg)] font-medium text-[var(--color-text-primary)]">Tech Stack</h2>
      <div className="flex flex-col gap-[var(--spacing-16)]">
        <MarqueeRow items={techRowOne} direction="left" />
        <MarqueeRow items={techRowTwo} direction="right" />
      </div>
    </section>
  );
}