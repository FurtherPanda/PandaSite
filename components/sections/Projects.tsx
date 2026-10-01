
"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { PandaClimber } from "@/components/isotipo/panda-scroll";

const projects = [
  {
    number: "01",
    title: "iPark Go",
    category: "Mobile product · Mobility",
    description:
      "Experiencias de estacionamiento y flujos digitales para facilitar las reservaciones, las pensiones y la gestión de estancias.",
    technologies: ["React Native", "Next.js", "REST APIs"],
    type: "mobility",
    featured: true,
  },
  {
    number: "02",
    title: "Dashboard & CMS",
    category: "Internal tools · Web",
    description:
      "Interfaces administrativas, gestión de información y componentes reutilizables para herramientas web.",
    technologies: ["React", "TypeScript", "APIs"],
    type: "dashboard",
    featured: false,
  },
  {
    number: "03",
    title: "Web experiences",
    category: "Web development · CMS",
    description:
      "Experiencias responsive y personalizaciones de interfaces para sitios web de clientes.",
    technologies: ["JavaScript", "SCSS", "WordPress"],
    type: "web",
    featured: false,
  },
];

function BrowserFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-panda-muted/20 bg-white dark:bg-[#17171F]">
      <div className="flex h-10 items-center gap-1.5 border-b border-panda-muted/15 px-3">
        <span className="size-2 rounded-full bg-red-400/80" />
        <span className="size-2 rounded-full bg-amber-400/80" />
        <span className="size-2 rounded-full bg-emerald-400/80" />
        <div className="ml-3 flex-1 rounded-md bg-slate-100 px-3 py-1 text-[10px] text-slate-400 dark:bg-white/5">
          project-preview.app
        </div>
      </div>
      {children}
    </div>
  );
}

function ProjectPreview({ type }: { type: string }) {
  if (type === "mobility") {
    return (
      <BrowserFrame>
        <div className="bg-[#F5F3FF] p-4 sm:p-7 dark:bg-[#1F1B2C]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-panda-primary text-white">
                <span className="text-sm">P</span>
              </div>
              <span className="font-heading text-sm font-semibold text-slate-900 dark:text-white">
                Mobility
              </span>
            </div>
            <span className="text-xs text-slate-500">Explore</span>
          </div>

          <div className="mt-5 rounded-lg bg-panda-primary p-5 text-white sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
              Mobility made simpler
            </p>
            <h3 className="mt-3 max-w-sm font-heading text-2xl font-medium leading-tight tracking-tight sm:text-4xl">
              Your journey,
              <br />
              on your terms.
            </h3>
            <div className="mt-5 inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-medium text-panda-ink">
              Explore services <span>↗</span>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {[
              ["01", "Reservations"],
              ["02", "City parking"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="rounded-lg border border-panda-primary/15 bg-white p-3 dark:bg-white/5"
              >
                <span className="text-xs text-panda-primary">
                  {number}
                </span>
                <p className="mt-3 text-xs font-medium text-slate-800 dark:text-white">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="rounded-lg border border-panda-muted/20 bg-[#17171F] p-4 text-white sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-white/50">Workspace / Overview</p>
            <h3 className="mt-2 font-heading text-xl">Dashboard</h3>
          </div>
          <div className="flex size-9 items-center justify-center rounded-lg bg-panda-primary/15 text-panda-primary">
            ↗
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {[
            ["Total records", "2,480"],
            ["Active items", "186"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
            >
              <p className="text-[10px] text-white/50">{label}</p>
              <p className="mt-2 font-heading text-2xl">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex h-20 items-end gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] p-3">
          {[30, 48, 36, 70, 45, 85, 58, 68, 44, 95, 65, 80].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-sm bg-panda-primary/70"
                style={{ height: `${height}%` }}
              />
            )
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-panda-muted/20 bg-[#EDE9FE] p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="font-heading text-lg font-semibold text-panda-ink">
          Studio.
        </span>
        <span className="text-sm text-panda-ink">Menu +</span>
      </div>

      <div className="mt-5 grid grid-cols-[1fr_0.8fr] gap-3">
        <div className="flex min-h-36 flex-col justify-between rounded-lg bg-[#D8CCFC] p-3 sm:min-h-44 sm:p-4">
          <span className="text-[10px] uppercase tracking-widest text-panda-ink/60">
            Digital craft
          </span>
          <p className="font-heading text-xl leading-tight tracking-tight text-panda-ink sm:text-2xl">
            Made to
            <br />
            stand out.
          </p>
        </div>
        <div className="flex flex-col justify-between rounded-lg bg-panda-primary p-3 text-white sm:p-4">
          <span className="text-xs text-white/70">Web / 2026</span>
          <span className="text-right text-3xl">↗</span>
        </div>
      </div>

      <div className="mt-3 h-2 w-2/3 rounded-full bg-panda-primary/25" />
      <div className="mt-2 h-2 w-1/2 rounded-full bg-panda-primary/15" />
    </div>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();
const sectionRef = useRef<HTMLElement>(null);

const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"],
});
  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className="bg-panda-paper py-24 text-panda-ink transition-colors duration-300 dark:bg-panda-ink dark:text-panda-paper sm:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-5 border-b border-panda-muted/20 pb-8 sm:mb-16 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-panda-primary">
              Selected work / 2023—2026
            </p>
            <h2 className="font-heading text-5xl font-medium tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              Built with
              <br />
              <span className="text-panda-primary">purpose.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-panda-muted sm:text-base">
            Una selección de experiencias digitales donde el diseño,
            la ingeniería y la atención al detalle trabajan juntos.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={
                reduceMotion ? false : { opacity: 0, y: 24 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              className={`group relative min-w-0 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
                <PandaClimber
  progress={scrollYProgress}
  side={index % 2 === 0 ? "right" : "left"}
/>
              <div
                className={`overflow-hidden rounded-lg border border-panda-muted/20 bg-white transition-colors duration-300 hover:border-panda-primary/40 dark:bg-white/[0.02] ${
                  project.featured
                    ? "grid lg:grid-cols-[1.15fr_0.85fr]"
                    : ""
                }`}
              >
                <div
                  className={`overflow-hidden p-3 sm:p-5 ${
                    project.featured
                      ? "flex items-center bg-slate-50 dark:bg-white/[0.02]"
                      : ""
                  }`}
                >
                  <div className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                    <ProjectPreview type={project.type} />
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-8 p-5 sm:p-7 lg:p-8">
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs tabular-nums text-panda-muted">
                        / {project.number}
                      </span>
                      <span className="text-xs text-panda-muted">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-panda-muted">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-panda-muted/20 px-2.5 py-1.5 text-[11px] text-panda-muted"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="#contacto"
                      aria-label={`Consultar sobre ${project.title}`}
                      className="inline-flex items-center gap-3 text-sm font-medium transition-colors hover:text-panda-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-panda-primary"
                    >
                      <span>Conocer el proyecto</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-panda-muted/20 pt-6">
          <p className="text-xs uppercase tracking-[0.18em] text-panda-muted">
            Design · Engineering · Detail
          </p>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm text-panda-primary transition-colors hover:text-panda-ink dark:hover:text-white"
          >
            ¿Hablamos de tu proyecto? <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}