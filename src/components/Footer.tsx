import Github from "@thesvg/react/github";
import Linkedin from "@thesvg/react/linkedin";
import { contactInfo } from "../data/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] px-[var(--spacing-24)] sm:px-[var(--spacing-48)] py-[var(--spacing-32)]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-[var(--spacing-16)] text-center sm:grid-cols-3">
        {/* Left Slot: Plain Text Attribution */}
        <p className="font-[var(--font-body)] text-[var(--text-body-sm)] text-[var(--color-text-muted)] sm:text-left">
          Designed and Developed by NoiA
        </p>

        {/* Center Slot: Copyright */}
        <p className="font-[var(--font-body)] text-[var(--text-body-sm)] text-[var(--color-text-muted)] sm:text-center">
          © {year} Richwelle Remetio. All rights reserved.
        </p>

        {/* Right Slot: Social Links */}
        <div className="flex justify-center gap-[var(--spacing-16)] sm:justify-end">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-cyan-ink)]"
          >
            <Github variant="mono" width={20} height={20} />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-cyan-ink)]"
          >
            <Linkedin width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}