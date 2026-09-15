import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "MIS Office Inventory System",
    description:
      "School admin system for inventory organization, item borrowing, request encoding, and attendance management. Engineered a new inventory module that cut manual data entry by 15 hours weekly.",
    stack: ["PHP", "Laravel", "JavaScript", "HTML5", "CSS3", "MySQL"],
    githubUrl: "https://noia-kun.github.io/MISystem/",
  },
  {
    title: "Weather App",
    description:
        "Weather forecast app built for The Odin Project's JavaScript curriculum. Fetches live conditions and swaps in a lofi-style animated background based on weather, with glassmorphism UI and Celsius/Fahrenheit toggle.",
    stack: ["HTML", "CSS", "JavaScript", "Visual Crossing API"],
    githubUrl: "https://github.com/Noia-kun/Weather-App",
    liveUrl: "https://noia-kun.github.io/Weather-App/",
  },
  {
    title: "D'Saints Landing Page",
    description:
      "Landing page for D'Saints, a Filipino artisan dessert brand established in 2020, based in Doha, Qatar. Built with TanStack and a Lovable-generated design, showcasing their sweets and pastry offerings.",
    stack: ["React", "TanStack Start", "TanStack Router", "Tailwind CSS", "Framer Motion", "Vite", "Cloudflare Workers"],
    githubUrl: "https://github.com/Noia-kun/dsaints-landing-page",
    liveUrl: "https://dsaints-landing-page.richwellerod.workers.dev",
  },
  {
    title: "Portfolio",
    description:
      "This very portfolio, a React and TypeScript site built from the ground up with a custom design system, animated interactions, and a working contact pipeline, refined section by section as I learned the stack.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/Noia-kun/Portfolio",
    liveUrl: "https://richwelleremetio.vercel.app",
  },
];