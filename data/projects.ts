
// data/projects.ts
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce App",
    description: "Plataforma de comercio electrónico rápida.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/tu-usuario/proyecto",
  },
];