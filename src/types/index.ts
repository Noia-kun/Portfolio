export interface TechStackItem {
  name: string;
  category: "language" | "framework" | "tool" | "database";
  icon: string;
  color: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}