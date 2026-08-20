import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import RevealOnScroll from "./RevealOnScroll";

export default function GitHubActivity() {
  const [isLight, setIsLight] = useState(false);

  // Sync theme state with <html> root class without remounting
  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // 5-step color progressions assigned to CSS variables
  const activePalette = isLight
    ? {
        "--gh-0": "#ebedf0",
        "--gh-1": "#b9f1fe",
        "--gh-2": "#38bdf8",
        "--gh-3": "#0284c7",
        "--gh-4": "#1ba8c9",
      }
    : {
        "--gh-0": "#22272e",
        "--gh-1": "#0e4a5c",
        "--gh-2": "#087ea4",
        "--gh-3": "#06b6d4",
        "--gh-4": "#52e1fe",
      };

  const calendarTheme = {
    dark: [
      "var(--gh-0)",
      "var(--gh-1)",
      "var(--gh-2)",
      "var(--gh-3)",
      "var(--gh-4)",
    ],
    light: [
      "var(--gh-0)",
      "var(--gh-1)",
      "var(--gh-2)",
      "var(--gh-3)",
      "var(--gh-4)",
    ],
  };

  return (
    <section id="github-activity" className="mx-auto flex max-w-[1000px] flex-col justify-center px-[var(--spacing-24)] py-[var(--spacing-80)]">
      <RevealOnScroll>
        {/* Section Header Block */}
        <div className="flex flex-col items-center text-center mb-[var(--spacing-40)]">
          <p className="font-[family-name:var(--font-mono)] text-[var(--text-caption)] uppercase tracking-[0.2em] text-[var(--color-cyan-ink)] font-semibold mb-2">
            BUILDING, LEARNING, GROWING
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[36px] sm:text-[48px] md:text-[56px] font-bold text-[var(--color-text-primary)] leading-tight mb-3">
            GitHub Activity
          </h2>
          <p className="max-w-xl mx-auto text-center font-[family-name:var(--font-mono)] text-[var(--text-body-sm)] sm:text-[var(--text-body)] text-[var(--color-text-body)] leading-relaxed">
            A snapshot of my coding activity, tracked straight from GitHub.
          </p>
        </div>

        {/* Floating Calendar Container with Inline Variable Context */}
        <div 
          className="flex justify-center w-full [&_svg]:max-w-full [&_svg]:h-auto"
          style={activePalette as React.CSSProperties}
        >
          <GitHubCalendar
            username="Noia-kun"
            theme={calendarTheme}
            fontSize={13}
            blockSize={13.5}
            blockMargin={3.5}
          />
        </div>
      </RevealOnScroll>
    </section>
  );
}