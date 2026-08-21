import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { useTheme, type ThemeMode } from "../hooks/useTheme";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const links = [
  { id: "home", label: "Home", href: "#home" },
  { id: "techstack", label: "Tech Stack", href: "#techstack" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "education", label: "Education", href: "#education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode, setMode } = useTheme();

  // Hover-only tracking
  const [hoveredLinkId, setHoveredLinkId] = useState<string | null>(null);

  // References for measurements
  const navLinksRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    opacity: 0,
  });

  // Calculate pill position relative to container
  useEffect(() => {
    if (!hoveredLinkId) {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const targetEl = linkRefs.current[hoveredLinkId];

    if (targetEl) {
      setIndicatorStyle({
        width: targetEl.offsetWidth,
        height: targetEl.offsetHeight,
        left: targetEl.offsetLeft,
        top: targetEl.offsetTop,
        opacity: 1,
      });
    }
  }, [hoveredLinkId]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        style={{
          transition:
            "border-color 200ms ease, background-color 200ms ease, box-shadow 400ms ease, width 400ms cubic-bezier(0.4,0,0.2,1), max-width 400ms cubic-bezier(0.4,0,0.2,1), padding 400ms cubic-bezier(0.4,0,0.2,1)",
        }}
        className={`pointer-events-auto relative flex h-[56px] items-center justify-between backdrop-blur-sm rounded-2xl ${
          scrolled
            ? "mt-3 w-[calc(100%-2rem)] max-w-[1020px] border border-[var(--color-border)] bg-[var(--color-carbon)]/75 shadow-xl px-6"
            : "mt-3 w-full max-w-[1280px] border border-transparent bg-transparent shadow-none px-[var(--spacing-24)]"
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between">
          {/* Left: Brand Logo */}
          <a href="#home" className="flex items-center -ml-2 sm:-ml-3 group">
  <img
    src={logo}
    alt="NoiA logo"
    className="h-[52px] w-[52px] sm:h-[64px] sm:w-[64px] object-contain shrink-0 -mr-2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[30deg] group-hover:scale-105 active:rotate-0"
  />
  <span className="font-[family-name:var(--font-display)] text-[var(--text-body)] font-medium text-[var(--color-text-primary)]">
    NoiA
  </span>
</a>

          {/* Right Group: Nav Links + Contact CTA + Theme Toggle */}
          <div className="flex items-center gap-[var(--spacing-24)]">
            {/* Clustered Desktop Links */}
            <div
              ref={navLinksRef}
              onMouseLeave={() => setHoveredLinkId(null)}
              className="relative hidden items-center gap-[var(--spacing-24)] lg:flex"
            >
              {/* Hover-Only Animated Indicator Pill */}
              <div
                className="absolute rounded-full bg-[var(--color-carbon)] border border-[var(--color-border)] shadow-sm pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  width: `${indicatorStyle.width}px`,
                  height: `${indicatorStyle.height}px`,
                  transform: `translate(${indicatorStyle.left}px, ${indicatorStyle.top}px)`,
                  opacity: indicatorStyle.opacity,
                }}
              />

              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  ref={(el) => {
                    linkRefs.current[link.id] = el;
                  }}
                  onMouseEnter={() => setHoveredLinkId(link.id)}
                  className="relative z-10 px-3 py-1.5 font-[var(--font-body)] text-[var(--text-body-sm)] font-medium text-[var(--color-text-body)] transition-colors duration-200 hover:text-[var(--color-cyan-ink)]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="group relative hidden lg:inline-flex items-center justify-center overflow-hidden rounded-full border-[3px] border-[var(--color-cyan)] bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-cyan-dark)] px-5 py-2 font-[var(--font-body)] text-[var(--text-body-sm)] font-bold text-[#0a1414] transition-all duration-300 active:scale-95 shadow-sm"
            >
              {/* Expanding Background Circle */}
              <span className="absolute -top-3 -right-3 z-0 h-[45px] w-[45px] rounded-full bg-[var(--color-carbon)] transition-transform duration-700 ease-out scale-0 group-hover:scale-[10] pointer-events-none" />

              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[var(--color-text-primary)]">
                <span className="leading-none">Contact</span>
                <ArrowRightIcon 
                  className="h-5 w-5 shrink-0 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" 
                  strokeWidth={2.5}
                />
              </span>
            </a>

            {/* Controls */}
            <div className="flex items-center gap-[var(--spacing-16)]">
              {/* 3-Segment Theme Control */}
              <div
                role="radiogroup"
                aria-label="Theme mode"
                className="relative flex items-center p-1 rounded-full border border-[var(--color-border)] bg-[var(--color-carbon)]/50 backdrop-blur-sm"
              >
                {/* Sliding Active Indicator Pill */}
                <div
                  className="absolute top-1 bottom-1 h-[34px] w-[34px] rounded-full bg-[var(--color-carbon)] border border-[var(--color-border)] shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{
                    transform:
                      mode === "system"
                        ? "translateX(0px)"
                        : mode === "light"
                        ? "translateX(34px)"
                        : "translateX(68px)",
                  }}
                />

                {(
                  [
                    { id: "system", icon: ComputerDesktopIcon, label: "System theme" },
                    { id: "light", icon: SunIcon, label: "Light theme" },
                    { id: "dark", icon: MoonIcon, label: "Dark theme" },
                  ] as const
                ).map(({ id, icon: Icon, label }) => {
                  const isActive = mode === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setMode(id as ThemeMode)}
                      aria-label={label}
                      aria-checked={isActive}
                      role="radio"
                      className={`relative z-10 flex h-[34px] w-[34px] items-center justify-center rounded-full transition-colors duration-200 ${
                        isActive
                          ? "text-[var(--color-text-primary)]"
                          : "text-[var(--color-text-body)] hover:text-[var(--color-text-primary)]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </button>
                  );
                })}
              </div>

              {/* Mobile/Tablet menu toggle button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-[var(--color-text-primary)] lg:hidden"
                aria-label="Toggle menu"
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet menu dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 flex flex-col gap-[var(--spacing-16)] rounded-2xl border border-[var(--color-border)] bg-[var(--color-carbon)] px-[var(--spacing-24)] py-[var(--spacing-16)] shadow-xl lg:hidden">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-[var(--font-body)] text-[var(--text-body)] text-[var(--color-text-body)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                backgroundColor: "var(--color-cyan)",
                color: "var(--color-void)",
              }}
              className="rounded-[var(--radius-pills)] px-[var(--spacing-16)] py-[var(--spacing-8)] text-center font-[var(--font-body)] text-[var(--text-body-sm)] font-medium"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}