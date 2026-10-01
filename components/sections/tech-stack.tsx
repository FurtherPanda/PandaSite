
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BambooFrame } from "@/components/isotipo/bamboo-frame";

const STACK_GROUPS = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces y experiencias web.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3 / SCSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    number: "02",
    title: "Backend & Data",
    description: "Lógica de negocio e integración de datos.",
    technologies: [
      "Node.js",
      "PHP",
      "Laravel",
      "REST APIs",
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "Firebase",
    ],
  },
  {
    number: "03",
    title: "Mobile & CMS",
    description: "Aplicaciones móviles y plataformas de contenido.",
    technologies: [
      "React Native",
      "WordPress",
      "Elementor",
      "Advanced Custom Fields",
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description: "Herramientas para construir y mantener proyectos.",
    technologies: [
      "Git",
      "GitHub",
      "GitLab",
      "Figma",
      "Postman",
      "Jest",
      "React Testing Library",
    ],
  },
];

export function TechStack() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="scroll-mt-24 w-full px-4 py-24 sm:px-6 sm:py-28 lg:px-8 relative"
    >
        <BambooFrame />
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-panda-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-panda-primary" />
            Technology stack
          </span>

          <h2
            id="stack-title"
            className="font-heading text-3xl font-semibold tracking-tight text-panda-ink dark:text-panda-paper sm:text-4xl lg:text-5xl"
          >
            Tools of the trade
            <span className="text-panda-primary">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-panda-muted sm:text-lg">
            Las tecnologías y herramientas que utilizo para desarrollar
            aplicaciones, construir interfaces e integrar soluciones digitales.
          </p>
        </motion.div>

        {/* Technology groups */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {STACK_GROUPS.map((group, index) => (
            <motion.article
              key={group.number}
              initial={
                reduceMotion ? false : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-lg border border-black/[0.08] bg-white p-5 transition-colors duration-300 hover:border-panda-primary/40 dark:border-white/[0.10] dark:bg-panda-slate/30 dark:hover:border-panda-primary/40 sm:p-6 lg:p-7"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-panda-ink dark:text-panda-paper sm:text-xl">
                    {group.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-panda-muted">
                    {group.description}
                  </p>
                </div>

                <span className="font-heading text-sm font-medium tabular-nums text-panda-primary/70 transition-colors duration-300 group-hover:text-panda-primary">
                  {group.number}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="inline-flex min-h-9 items-center rounded-lg border border-black/[0.07] bg-panda-paper px-3 py-2 text-xs font-medium text-panda-slate transition-all duration-200 hover:border-panda-primary/40 hover:text-panda-primary dark:border-white/[0.08] dark:bg-panda-ink/50 dark:text-slate-300 dark:hover:border-panda-primary/40 dark:hover:text-panda-primary sm:text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing note */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 text-sm leading-6 text-panda-muted"
        >
          Mi stack evoluciona con cada proyecto. La herramienta adecuada
          depende del problema que necesitamos resolver.
        </motion.p>
      </div>
    </section>
  );
}