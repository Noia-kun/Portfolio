import * as ThesvgIcons from "@thesvg/react";
import { techRowOne, techRowTwo } from "../data/techStack";
import type { TechStackItem } from "../types";
import RevealOnScroll from "./RevealOnScroll";


type TechIcon = React.ForwardRefExoticComponent<
  React.SVGProps<SVGSVGElement> & { variant?: string }
>;

const iconMap = ThesvgIcons as unknown as Record<string, TechIcon>;

const themeVariants: Record<string, { dark: string; light: string }> = {
  React: { dark: "dark", light: "light" },
  Eslint: { dark: "dark", light: "light" },
  Mysql: { dark: "dark", light: "light" },
  Php: { dark: "dark", light: "light" },
  Openai: { dark: "dark", light: "light" },
};

function Pill({ item }: { item: TechStackItem }) {
  const Icon = iconMap[item.icon];
  const variants = themeVariants[item.icon];

  return (
    <span
      title={item.name}
      className="flex h-[88px] w-[88px] shrink-0 items-center justify-center"
    >
      {Icon && variants && (
        <>
          <Icon variant={variants.dark} width={44} height={44} className="tech-stack-icon--dark" />
          <Icon variant={variants.light} width={44} height={44} className="tech-stack-icon--light" />
        </>
      )}
      {Icon && !variants && (
        <Icon
          variant={item.icon === "StyledComponents" ? "mono" : undefined}
          width={44}
          height={44}
          className={
            item.icon === "StyledComponents"
              ? "text-[var(--color-text-primary)]"
              : item.icon === "IntellijIdea" || item.icon === "Jetbrains"
              ? "text-black"
              : undefined
          }
        />
      )}
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
    <div className="marquee-viewport overflow-hidden">
      <div className={`flex w-max gap-[var(--spacing-64)] ${animClass}`}>
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <Pill key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="techstack" className="flex flex-col justify-center py-[var(--spacing-96)]">
      <RevealOnScroll>
        <h2 className="mb-[var(--spacing-40)] text-center font-[family-name:var(--font-display)] text-[36px] sm:text-[48px] md:text-[56px] font-bold text-[var(--color-text-primary)]">Arsenal - Tech Stack</h2>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="flex flex-col gap-[var(--spacing-16)]">
          <MarqueeRow items={techRowOne} direction="left" />
          <MarqueeRow items={techRowTwo} direction="right" />
        </div>
      </RevealOnScroll>
    </section>
  );
}
