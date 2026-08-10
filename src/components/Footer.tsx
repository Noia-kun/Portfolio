import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contactInfo } from "../data/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] px-[var(--spacing-24)] py-[var(--spacing-32)]">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-[var(--spacing-16)] sm:flex-row">

        <p className="font-[var(--font-inter)] text-[var(--text-body-sm)] text-[var(--color-text-muted)]">
          © {year} Noia-kun | Richwelle Remetio. All rights reserved.
        </p>

        <div className="flex justify-center gap-[var(--spacing-16)] sm:justify-end">
          <a href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-cyan)]">
            <FaGithub size={20} />
          </a>
          <a href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-cyan)]">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}