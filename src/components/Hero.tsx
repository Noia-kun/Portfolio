import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-[100dvh] flex-col items-center justify-center gap-[var(--spacing-24)] px-[var(--spacing-24)] py-[var(--spacing-96)] text-center">
      <img
        src={logo}
        alt="NoiA logo"
        className="h-[360px] w-[360px] object-contain"/>

      <h1 className="max-w-[720px] font-[family-name:var(--font-display)] text-[var(--text-display)] font-medium leading-[1] tracking-[-0.02em] text-[var(--color-text-primary)]">Hi, I'm NoiA</h1>

      <p className="max-w-[560px] font-[var(--font-inter)] text-[var(--text-subheading)] leading-[1.4] text-[var(--color-text-body)]">I turn messy problems into clean, working code — and I'm just getting started.</p>

      <div className="mt-[var(--spacing-16)] flex flex-wrap items-center justify-center gap-[var(--spacing-12)]">
        <a
            href="#projects"
            style={{ backgroundColor: "var(--color-cyan)", color: "var(--color-void)" }}
            className="rounded-[var(--radius-pills)] px-[var(--spacing-24)] py-[var(--spacing-12)] font-[var(--font-inter)] text-[var(--text-body)] font-medium transition-opacity hover:opacity-90">View Projects →
        </a>
        <a href="#contact"
            className="rounded-[var(--radius-pills)] border border-[var(--color-border)] px-[var(--spacing-24)] py-[var(--spacing-12)] font-[var(--font-inter)] text-[var(--text-body)] font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-carbon)]">Contact Me
        </a>
        </div>
    </section>
  );
}