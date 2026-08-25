import heroPixelArt from "../assets/hero-pixel-art.webp";
import { projects } from "../data/projects";
import { techRowOne, techRowTwo } from "../data/techStack";
import Github from "@thesvg/react/github";
import Linkedin from "@thesvg/react/linkedin";
import Html5 from "@thesvg/react/html5";
import Css3 from "@thesvg/react/css3";
import Javascript from "@thesvg/react/javascript";
import React from "@thesvg/react/react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { contactInfo } from "../data/contact";
import { OrbitingIcon } from "./OrbitingIcon";
import WebThreads from "./WebThreads";
import TrueFocus from './TrueFocus';
import TextType from './TextType';
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const techStackCount = techRowOne.length + techRowTwo.length;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full"
    >
      {/* Background WebThreads Layer */}
      <div 
        className="absolute -top-[64px] inset-x-0 bottom-[-200px] pointer-events-none overflow-hidden z-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
        }}
      >
        <WebThreads
          color1="var(--color-primary)"
          color2="var(--color-cyan)"
          color3="var(--color-text-primary)"
          speed={0.18}
          threadCount={5}
          frequency={4.5}
          spread={0.18}
          fanMode="right"
          glow={0.015}
          falloff={0.75}
          thickness={1.0}
          brightness={1.0}
          opacity={0.9}
          grain={false}
        />
      </div>

      {/* Foreground Hero Content Container */}
      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col-reverse items-center justify-center gap-[var(--spacing-8)] px-[var(--spacing-24)] py-[var(--spacing-48)] md:flex-row md:justify-center md:gap-[clamp(24px,4vw,48px)] md:py-[var(--spacing-96)]">
        {/* Left — text content */}
        <div className="flex max-w-[560px] flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-[44px] leading-[1.05] tracking-[-0.02em] text-[var(--color-text-primary)] font-[family-name:var(--font-display)] sm:text-[64px] md:text-[80px]">
            <span className="font-normal">Building the </span>
            <span className="font-bold">Web</span>
            <span className="font-normal">, One </span>
            <span className="font-bold">Idea</span>
            <span className="font-normal"> at a </span>
            <span className="font-bold">Time</span>
            <span className="font-normal">.</span>
          </h1>

          <div className="mt-[var(--spacing-16)] font-[var(--font-body)] text-[var(--text-body)] text-[var(--color-text-body)]">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span>Hi, I'm</span>
              <TrueFocus
                sentence="RR but you can call me NoiA"
                targetIndices={[0, 6]} // Index 0 is "RR", Index 6 is "NoiA"
                blurAmount={3}
                borderColor="var(--color-cyan)"
                glowColor="var(--color-cyan-glow)"
                animationDuration={0.6}
                pauseBetweenAnimations={1.2}
              />
            </div>

            {/* Dynamic Role Line */}
            <div className="mt-[var(--spacing-4)] flex items-center gap-0.5 flex-wrap">
              <TextType
                text={["PHP", "React", "Front-End", "Back-End", "Full Stack", "Software"]}
                typingSpeed={70}
                deletingSpeed={35}
                pauseDuration={1800}
                loop={true}
                showCursor={true}
                cursorCharacter="_"
                cursorClassName="text-[var(--color-cyan)] font-bold ml-0"
                className="font-semibold text-[var(--color-text-primary)] inline-block"
              />
              <span className="font-semibold text-[var(--color-text-primary)] ml-1">Developer</span>
            </div>
          </div>

          <p className="mt-[var(--spacing-16)] font-[var(--font-body)] text-[var(--text-body)] leading-[1.6] text-[var(--color-text-body)]">
            I turn messy problems into <span className="font-semibold text-[var(--color-text-primary)]">clean, working code</span> —
            building <span className="font-semibold text-[var(--color-text-primary)]">production-ready web applications</span> with
            modern technologies across both frontend and backend.
          </p>

          {/* CTAs */}
          <div className="mt-[var(--spacing-32)] flex flex-wrap items-center justify-center gap-[var(--spacing-16)] md:justify-start">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-[100px] border-2 border-transparent bg-inherit px-6 py-2.5 font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-cyan-ink)] shadow-[0_0_0_2px_var(--color-cyan-ink)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-[12px] hover:shadow-[0_0_0_12px_transparent] active:scale-95 active:shadow-[0_0_0_4px_var(--color-cyan-ink)]"
            >
              {/* Left Arrow (arr-2): enters from off-screen left (-left-10) to left-3.5 */}
              <ArrowRightIcon className="pointer-events-none absolute -left-10 z-10 h-5 w-5 text-[var(--color-cyan-ink)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-3.5 group-hover:text-[var(--color-void)]" />

              {/* Button Text: inline-block enables transform to shift right (+translate-x-5) */}
              <span className="relative z-10 inline-block transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-5 group-hover:text-[var(--color-void)]">
                View Projects
              </span>

              {/* Expanding Center Circle Fill */}
              <span aria-hidden="true" className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-cyan-ink)] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-[220px] group-hover:w-[220px] group-hover:opacity-100" />

              {/* Right Arrow (arr-1): slides off-screen right (+translate-x-10) */}
              <ArrowRightIcon className="relative z-10 h-5 w-5 text-[var(--color-cyan-ink)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-10 group-hover:opacity-0 group-hover:text-[var(--color-void)]" />
            </a>
            <a
              href="#contact"
              data-text="Contact Me →"
              className="group relative inline-flex font-[var(--font-body)] text-[var(--text-body)] font-medium tracking-wide text-transparent [-webkit-text-stroke:1px_var(--color-text-primary)] transition-all duration-500"
            >
              {/* Base outline layer */}
              <span className="actual-text">&nbsp;Contact Me →&nbsp;</span>

              {/* Hover color-fill sweep layer */}
              <span
                aria-hidden="true"
                className="hover-text absolute inset-y-0 left-0 w-0 overflow-hidden whitespace-nowrap text-[var(--color-cyan-ink)] border-r-[3px] border-[var(--color-cyan-ink)] [-webkit-text-stroke:1px_var(--color-cyan-ink)] transition-[width] duration-500 ease-in-out group-hover:w-full group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
              >
                &nbsp;Contact Me →&nbsp;
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-[var(--spacing-48)] flex gap-[var(--spacing-40)]">
            <div>
              <p className="font-[family-name:var(--font-display)] text-[var(--text-heading)] font-semibold text-[var(--color-text-primary)]">
                {projects.length}+
              </p>
              <p className="font-[var(--font-body)] text-[var(--text-caption)] uppercase tracking-wide text-[var(--color-text-muted)]">
                Projects
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-[var(--text-heading)] font-semibold text-[var(--color-text-primary)]">
                {techStackCount}+
              </p>
              <p className="font-[var(--font-body)] text-[var(--text-caption)] uppercase tracking-wide text-[var(--color-text-muted)]">
                Tech Stack
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-[var(--text-heading)] font-semibold text-[var(--color-text-primary)]">
                3+
              </p>
              <p className="font-[var(--font-body)] text-[var(--text-caption)] uppercase tracking-wide text-[var(--color-text-muted)]">
                Years Coding
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-[var(--spacing-24)] flex gap-[var(--spacing-16)]">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-carbon)] transition-colors hover:border-[var(--color-cyan)]"
            >
              <Github variant="mono" width={16} height={16} className="text-[var(--color-text-primary)]" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-carbon)] transition-colors hover:border-[var(--color-cyan)]"
            >
              <Linkedin width={16} height={16} />
            </a>
          </div>
        </div>

        {/* Right — illustration & 3D Orbiting icons */}
        <div className="relative flex shrink-0 items-center justify-center">
          {/* Ambient cyan glow */}
          <div
            className="absolute inset-0 -z-10 rounded-full blur-3xl pointer-events-none"
            style={{
              background: "radial-gradient(circle, var(--color-cyan) 0%, transparent 70%)",
              opacity: 0.8,
            }}
          />

          {/* Pixel Art Hero Image */}
          <img
            src={heroPixelArt}
            alt="Animated pixel-art developer holding a coffee"
            className="relative z-10 h-[360px] w-[360px] object-contain md:h-[clamp(320px,38vw,560px)] md:w-[clamp(320px,38vw,560px)] pointer-events-none"
          />

          {/* 3D Orbiting Icons */}
          <OrbitingIcon index={0} total={5} duration={20}>
            <CodeBracketIcon width={20} height={20} className="text-[var(--color-cyan)]" />
          </OrbitingIcon>

          <OrbitingIcon index={1} total={5} duration={20}>
            <Html5 width={22} height={22} />
          </OrbitingIcon>

          <OrbitingIcon index={2} total={5} duration={20}>
            <Css3 width={22} height={22} />
          </OrbitingIcon>

          <OrbitingIcon index={3} total={5} duration={20}>
            <Javascript width={22} height={22} />
          </OrbitingIcon>

          <OrbitingIcon index={4} total={5} duration={20}>
            <React width={22} height={22} />
          </OrbitingIcon>
        </div>
      </div>
    </section>
  );
}