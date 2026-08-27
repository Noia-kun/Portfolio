import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./MagicBento.css";
import { projects } from "../data/projects";
import RevealOnScroll from "./RevealOnScroll";

const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "82, 225, 254"; // cyan
const MOBILE_BREAKPOINT = 768;

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number
) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

/* Clean Card Wrapper - GSAP transforms removed so CSS hover states work seamlessly */
function CleanCard({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className={`${className} uiverse-card-wrapper`}
      style={{ ...style, position: "relative", overflow: "hidden" }}
    >
      {children}
    </div>
  );
}

/* GlobalSpotlight - Retained for smooth cursor tracking across grid cards */
function GlobalSpotlight({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}: {
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}) {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest(".bento-section");
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      const cards = gridRef.current.querySelectorAll<HTMLElement>(".magic-bento-card");

      if (!mouseInside) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: "power2.out" });
        cards.forEach((card) => card.style.setProperty("--glow-intensity", "0"));
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(card, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });

      gsap.to(spotlightRef.current, { left: e.clientX, top: e.clientY, duration: 0.1, ease: "power2.out" });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
          ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
          : 0;

      gsap.to(spotlightRef.current, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.5, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gridRef.current?.querySelectorAll<HTMLElement>(".magic-bento-card").forEach((card) => {
        card.style.setProperty("--glow-intensity", "0");
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: "power2.out" });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
}

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export default function MagicBento({
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}: {
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  return (
    <>
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <div className="card-grid bento-section" ref={gridRef}>
        {projects.map((project, index) => {
          const baseClassName = `magic-bento-card ${
            enableBorderGlow ? "magic-bento-card--border-glow" : ""
          }`;

          const stackItems = Array.isArray(project.stack) ? project.stack : [];
          const getTechColor = (tech: string) => {
            const normalized = tech.toLowerCase().trim();
            switch (normalized) {
              case "react":
              case "react.js":
                return "#00b4d8"; // Slightly deeper cyan for dual-theme contrast
              case "python":
                return "#3776ab";
              case "fastapi":
                return "#05998b";
              case "typescript":
              case "ts":
                return "#3178c6";
              case "javascript":
              case "js":
                return "#d4ac0d"; // Darker gold shade readable on light bg
              case "php":
                return "#777bb4";
              case "laravel":
                return "#ff2d20";
              case "mysql":
                return "#00758f";
              case "webpack":
                return "#1c78c0";
              case "vb.net":
              case "vb":
                return "#68217a";
              case "java":
                return "#e06f1a";
              case "sqlite":
                return "#0f9ede";
              case "html":
              case "html5":
                return "#e34c26";
              case "css":
              case "css3":
                return "#264de4";
              case "node":
              case "node.js":
                return "#53824f";
              default:
                return "var(--color-text-muted, #6b7280)";
            }
          };
          return (
            <RevealOnScroll key={index} direction={index % 2 === 0 ? "left" : "right"}>
              <CleanCard
                className={baseClassName}
                style={{
                  backgroundColor: "var(--color-ground)",
                  ["--glow-color" as string]: glowColor,
                }}
              >
                {/* Permanent Top-Right Ambient Glow */}
                <div className="magic-bento-card__corner-glow" />

                {/* Dynamic Cursor-following Glow */}
                <div className="magic-bento-card__glow-bg" />

                {/* Card Content Header */}
                <div className="magic-bento-card__header">
                  <div className="magic-bento-card__actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="magic-bento-card__icon-btn"
                        aria-label={`Live site for ${project.title}`}
                      >
                        <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="magic-bento-card__icon-btn"
                        aria-label={`GitHub repo for ${project.title}`}
                      >
                        <svg className="icon-svg" viewBox="0 0 16 16" fill="currentColor">
                          <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Main Card Body */}
                <div className="magic-bento-card__body">
                  <h3 className="magic-bento-card__title">
                    {project.title}
                    <span className="blinking-dash-cursor" />
                  </h3>
                  <p className="magic-bento-card__description">{project.description}</p>
                  
                  {/* Stack Badges */}
                  <div className="magic-bento-card__tags">
                    {stackItems.map((tech, i) => {
                      const brandColor = getTechColor(tech);
                      return (
                        <span
                          key={i}
                          className="magic-bento-card__badge"
                          style={{ "--brand-color": brandColor } as React.CSSProperties}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </CleanCard>
            </RevealOnScroll>
          );
        })}
      </div>
    </>
  );
}