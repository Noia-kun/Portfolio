import { useEffect, useRef, useState } from "react";
import { workExperience } from "../data/workExperience";
import RevealOnScroll from "./RevealOnScroll";

export default function WorkExperience() {
  const { role, company, period, bullets } = workExperience;

  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Typed text state
  const [typedRole, setTypedRole] = useState("");
  const [typedCompany, setTypedCompany] = useState("");
  const [typedPeriod, setTypedPeriod] = useState("");
  const [activeLine, setActiveLine] = useState<"role" | "company" | "period" | "done">("role");

  // IntersectionObserver to re-trigger typing on scroll into view
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Sequential typing logic
  useEffect(() => {
    if (!isInView) {
      setTypedRole("");
      setTypedCompany("");
      setTypedPeriod("");
      setActiveLine("role");
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;

    if (activeLine === "role") {
      if (typedRole.length < role.length) {
        timeoutId = setTimeout(() => {
          setTypedRole(role.slice(0, typedRole.length + 1));
        }, 35);
      } else {
        timeoutId = setTimeout(() => setActiveLine("company"), 150);
      }
    } else if (activeLine === "company") {
      if (typedCompany.length < company.length) {
        timeoutId = setTimeout(() => {
          setTypedCompany(company.slice(0, typedCompany.length + 1));
        }, 35);
      } else {
        timeoutId = setTimeout(() => setActiveLine("period"), 150);
      }
    } else if (activeLine === "period") {
      if (typedPeriod.length < period.length) {
        timeoutId = setTimeout(() => {
          setTypedPeriod(period.slice(0, typedPeriod.length + 1));
        }, 35);
      } else {
        setActiveLine("done");
      }
    }

    return () => clearTimeout(timeoutId);
  }, [isInView, activeLine, typedRole, typedCompany, typedPeriod, role, company, period]);

  return (
    <section id="experience" className="mx-auto flex max-w-[720px] flex-col justify-center px-[var(--spacing-24)] py-[var(--spacing-96)]">
      <RevealOnScroll>
        <div className="flex flex-col items-center text-center mb-[var(--spacing-40)]">
          <p className="font-[family-name:var(--font-mono)] text-[var(--text-caption)] uppercase tracking-[0.2em] text-[var(--color-cyan-ink)] font-semibold mb-2">
            EARLY CAREER
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[36px] sm:text-[48px] md:text-[56px] font-bold text-[var(--color-text-primary)] leading-tight mb-3">
            Hands-On Experience
          </h2>
          <p className="max-w-xl mx-auto text-center font-[family-name:var(--font-mono)] text-[var(--text-body-sm)] sm:text-[var(--text-body)] text-[var(--color-text-body)] leading-relaxed">
            One year into my journey as a developer, applying what I've learned in a real production environment. Building tools that actual people use every day.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div ref={cardRef} className="rounded-[var(--radius-cards)] border border-[var(--color-border)] bg-[var(--color-carbon)]">
          {/* Title bar */}
          <div className="flex items-center gap-[var(--spacing-8)] border-b border-[var(--color-border)] px-[var(--spacing-16)] py-[var(--spacing-12)]">
            <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f56]" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#ffbd2e]" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#27c93f]" />
            <span className="ml-auto font-[family-name:var(--font-mono)] text-[var(--text-caption)] text-[var(--color-text-muted)]">
              experience.json
            </span>
          </div>

          {/* Content */}
          <div className="px-[var(--spacing-24)] py-[var(--spacing-24)]">
            <p className="font-[family-name:var(--font-mono)] text-[var(--text-body-sm)] text-[var(--color-text-muted)]">
              {"{"}
            </p>

            {/* Role Line */}
            <p className="pl-[var(--spacing-16)] font-[family-name:var(--font-mono)] text-[var(--text-body-sm)]">
              <span style={{ color: "var(--color-cyan-ink)" }}>"role"</span>
              <span className="text-[var(--color-text-muted)]">: </span>
              <span className="text-[var(--color-text-primary)]">"{typedRole}"</span>
              {activeLine === "role" && (
                <span className="animate-pulse text-[var(--color-cyan-ink)] font-bold ml-[1px]">|</span>
              )}
              <span className="text-[var(--color-text-muted)]">,</span>
            </p>

            {/* Company Line */}
            <p className="pl-[var(--spacing-16)] font-[family-name:var(--font-mono)] text-[var(--text-body-sm)]">
              <span style={{ color: "var(--color-cyan-ink)" }}>"company"</span>
              <span className="text-[var(--color-text-muted)]">: </span>
              <span className="text-[var(--color-text-primary)]">"{typedCompany}"</span>
              {activeLine === "company" && (
                <span className="animate-pulse text-[var(--color-cyan-ink)] font-bold ml-[1px]">|</span>
              )}
              <span className="text-[var(--color-text-muted)]">,</span>
            </p>

            {/* Period Line */}
            <p className="pl-[var(--spacing-16)] font-[family-name:var(--font-mono)] text-[var(--text-body-sm)]">
              <span style={{ color: "var(--color-cyan-ink)" }}>"period"</span>
              <span className="text-[var(--color-text-muted)]">: </span>
              <span className="text-[var(--color-text-primary)]">"{typedPeriod}"</span>
              {activeLine === "period" && (
                <span className="animate-pulse text-[var(--color-cyan-ink)] font-bold ml-[1px]">|</span>
              )}
            </p>

            <p className="font-[family-name:var(--font-mono)] text-[var(--text-body-sm)] text-[var(--color-text-muted)]">
              {"}"}
            </p>

            <ul className="mt-[var(--spacing-24)] flex flex-col gap-[var(--spacing-12)]">
              {bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-[var(--spacing-8)] font-[family-name:var(--font-body)] text-[var(--text-body-sm)] leading-[1.55] text-[var(--color-text-body)]"
                >
                  <span style={{ color: "var(--color-cyan-ink)" }}>→</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}