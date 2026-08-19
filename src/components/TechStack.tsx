import * as ThesvgIcons from "@thesvg/react";
import { techRowOne, techRowTwo } from "../data/techStack";
import type { TechStackItem } from "../types";
import RevealOnScroll from "./RevealOnScroll";

type TechIcon = React.ForwardRefExoticComponent<
  React.SVGProps<SVGSVGElement> & { variant?: string }
>;

const VSCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 44}
    height={props.height || 44}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <mask
      id="vscode-mask-a"
      width="100"
      height="100"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M70.912 99.317a6.223 6.223 0 0 0 4.96-.19l20.589-9.907A6.25 6.25 0 0 0 100 83.587V16.413a6.25 6.25 0 0 0-3.54-5.632L75.874.874a6.226 6.226 0 0 0-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 0 0-5.318.236l-5.506 5.009a4.168 4.168 0 0 0-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 0 0 .004 6.162l5.506 5.01a4.162 4.162 0 0 0 5.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 0 0 2.143 1.4ZM75.015 27.3 45.11 50l29.906 22.701V27.3Z"
        clipRule="evenodd"
      />
    </mask>

    <g mask="url(#vscode-mask-a)">
      <path
        fill="#0065A9"
        d="M96.461 10.796 75.857.876a6.23 6.23 0 0 0-7.107 1.207l-67.451 61.5a4.167 4.167 0 0 0 .004 6.162l5.51 5.009a4.167 4.167 0 0 0 5.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 0 0-3.539-5.63Z"
      />
      <g filter="url(#vscode-filter-b)">
        <path
          fill="#007ACC"
          d="m96.461 89.204-20.604 9.92a6.229 6.229 0 0 1-7.107-1.207l-67.451-61.5a4.167 4.167 0 0 1 .004-6.162l5.51-5.009a4.167 4.167 0 0 1 5.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 0 1-3.539 5.63Z"
        />
      </g>
      <g filter="url(#vscode-filter-c)">
        <path
          fill="#1F9CF0"
          d="M75.858 99.126a6.232 6.232 0 0 1-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 0 1 7.108-1.21l20.6 9.908A6.25 6.25 0 0 1 100 16.413v67.174a6.25 6.25 0 0 1-3.541 5.633l-20.601 9.906Z"
        />
      </g>
      <path
        fill="url(#vscode-grad-d)"
        fillRule="evenodd"
        d="M70.851 99.317a6.224 6.224 0 0 0 4.96-.19L96.4 89.22a6.25 6.25 0 0 0 3.54-5.633V16.413a6.25 6.25 0 0 0-3.54-5.632L75.812.874a6.226 6.226 0 0 0-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 0 0-5.317.236l-5.507 5.009a4.168 4.168 0 0 0-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 0 0 .004 6.162l5.507 5.009a4.162 4.162 0 0 0 5.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 0 0 2.143 1.4ZM74.954 27.3 45.048 50l29.906 22.701V27.3Z"
        clipRule="evenodd"
        opacity=".25"
        style={{ mixBlendMode: "overlay" }}
      />
    </g>

    <defs>
      <filter
        id="vscode-filter-b"
        width="116.727"
        height="92.246"
        x="-8.394"
        y="15.829"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4.167" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          mode="overlay"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>

      <filter
        id="vscode-filter-c"
        width="47.917"
        height="116.151"
        x="60.417"
        y="-8.076"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4.167" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          mode="overlay"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>

      <linearGradient
        id="vscode-grad-d"
        x1="49.939"
        x2="49.939"
        y1=".258"
        y2="99.742"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const iconMap: Record<string, TechIcon> = {
  ...(ThesvgIcons as unknown as Record<string, TechIcon>),
  VisualStudioCode: VSCodeIcon as unknown as TechIcon,
};

const themeVariants: Record<string, { dark: string; light: string }> = {
  React: { dark: "dark", light: "light" },
  Eslint: { dark: "dark", light: "light" },
  Mysql: { dark: "dark", light: "light" },
  Php: { dark: "dark", light: "light" },
  Openai: { dark: "dark", light: "light" },
  StyledComponents: { dark: "dark", light: "mono" },
};

function Pill({ item }: { item: TechStackItem }) {
  const Icon = iconMap[item.icon];
  const variants = themeVariants[item.icon];

  const isJetbrainsOrIntellij =
    item.icon === "IntellijIdea" || item.icon === "Jetbrains";

  return (
    <span
      title={item.name}
      className="group/pill flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-2xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-carbon)] hover:shadow-[0_0_12px_var(--color-cyan-glow)]"
    >
      {Icon && variants && (
        <>
          <Icon
            variant={variants.dark}
            width={44}
            height={44}
            className="tech-stack-icon--dark transition-transform duration-200 group-hover/pill:scale-[1.02]"
          />
          <Icon
            variant={variants.light}
            width={44}
            height={44}
            className="tech-stack-icon--light transition-transform duration-200 group-hover/pill:scale-[1.02]"
          />
        </>
      )}
      {Icon && !variants && (
        <Icon
          width={44}
          height={44}
          className={`transition-transform duration-200 group-hover/pill:scale-[1.02] ${
            isJetbrainsOrIntellij ? "text-black" : ""
          }`}
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
    <div className="marquee-viewport overflow-hidden py-2">
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
    <section id="techstack" className="relative overflow-hidden flex flex-col justify-center py-[var(--spacing-96)]">
      {/* Static Grid + Noise Background Layer */}
      <div className="tech-stack-bg pointer-events-none absolute inset-0 -z-10" />

      <RevealOnScroll>
        <div className="flex flex-col items-center mb-[var(--spacing-40)]">
          <p className="font-[family-name:var(--font-mono)] text-[var(--text-caption)] uppercase tracking-[0.2em] text-[var(--color-cyan-ink)] font-semibold mb-2">
            TOOLS & TECHNOLOGIES
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[36px] sm:text-[48px] md:text-[56px] font-bold text-[var(--color-text-primary)]">
            The Arsenal
          </h2>
          <p className="max-w-xl mx-auto text-center font-[family-name:var(--font-mono)] text-[var(--text-body-sm)] sm:text-[var(--text-body)] text-[var(--color-text-body)] leading-relaxed">
            From design to development, these are the instruments that empower my creative journey.
          </p>
        </div>
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