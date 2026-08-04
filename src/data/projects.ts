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
    title: "Restaurant Page",
    description:
        "Single-page restaurant site with tabbed navigation between Home, Menu, and Contact — swapped in and out of one container without reloading. Built entirely with vanilla JS ES Modules and bundled with Webpack 5.",
    stack: ["HTML5", "CSS3", "JavaScript", "Webpack 5"],
    githubUrl: "https://github.com/Noia-kun/restaurant-page-practice",
    liveUrl: "https://noia-kun.github.io/restaurant-page-practice/",
  },
  {
    title: "Vehicle Parking System",
    description:
      "A parking management system handling slot allocation and dynamic fee calculation based on duration and vehicle type.",
    stack: ["Java", "VB.NET"],
    githubUrl: "https://github.com/Noia-kun/Vehicle-Parking-App",
  },
];