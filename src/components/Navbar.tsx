import { useState } from "react";
import logo from "../assets/logo.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const links = [
  { label: "Home", href: "#home" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-carbon)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between px-[var(--spacing-24)]">
        <a href="#home" className="flex items-center gap-[var(--spacing-8)]">
          <img src={logo} alt="NoiA logo" className="h-[32px] w-[32px] object-contain" />
          <span className="font-[family-name:var(--font-display)] text-[var(--text-body)] font-medium text-[var(--color-text-primary)]">
            NoiA
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-[var(--spacing-32)] md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href}
              className="font-[var(--font-inter)] text-[var(--text-body-sm)] font-medium text-[var(--color-text-body)] transition-colors hover:text-[var(--color-cyan)]">
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <a href="#contact" style={{ backgroundColor: "var(--color-cyan)", color: "var(--color-void)" }} className="hidden rounded-[var(--radius-pills)] px-[var(--spacing-16)] py-[var(--spacing-8)] font-[var(--font-inter)] text-[var(--text-body-sm)] font-medium transition-opacity hover:opacity-90 md:block">Contact
        </a>

        {/* Theme toggle */}
        <button onClick={toggleTheme} aria-label="Toggle theme"
            className="hidden text-[var(--color-text-body)] transition-colors hover:text-[var(--color-cyan)] md:block">
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        {/* Mobile menu toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="text-[var(--color-text-primary)] md:hidden"
          aria-label="Toggle menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-[var(--spacing-16)] border-t border-[var(--color-border)] bg-[var(--color-carbon)] px-[var(--spacing-24)] py-[var(--spacing-16)] md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-[var(--font-inter)] text-[var(--text-body)] text-[var(--color-text-body)]">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{backgroundColor: "var(--color-cyan)", color: "var(--color-void)" }} className="rounded-[var(--radius-pills)] px-[var(--spacing-16)] py-[var(--spacing-8)] text-center font-[var(--font-inter)] text-[var(--text-body-sm)] font-medium">Contact
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex items-center gap-[var(--spacing-8)] font-[var(--font-inter)] text-[var(--text-body)] text-[var(--color-text-body)]"
            >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />} Toggle theme
          </button>
        </div>
      )}
    </nav>
  );
}