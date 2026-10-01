
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PandaLogo } from "@/components/isotipo/panda-logo";

const FOOTER_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Sobre mí", href: "#sobre-mi" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
];

export function Footer() {
  const reduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="scroll-mt-24 w-full px-4 pb-5 pt-12 sm:px-6 sm:pt-16 lg:px-8"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Contact CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-lg border border-black/[0.08] bg-panda-paper p-6 dark:border-white/[0.10] dark:bg-panda-slate/30 sm:p-10 lg:p-12"
        >
          {/* Decorative accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-panda-primary/[0.08] blur-3xl"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-panda-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-panda-primary" />
                Have a project in mind?
              </span>

              <h2 className="font-heading text-3xl font-semibold tracking-tight text-panda-ink dark:text-panda-paper sm:text-4xl lg:text-5xl">
                Let&apos;s build
                <br className="hidden sm:block" /> something meaningful
                <span className="text-panda-primary">.</span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-panda-muted sm:text-base">
                ¿Tienes una idea, un proyecto o simplemente quieres conectar?
                Me gustaría conocer lo que tienes en mente.
              </p>
            </div>

            <a
              href="mailto:TU_CORREO"
              className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-panda-primary bg-panda-primary px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-panda-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-panda-primary focus-visible:ring-offset-2 focus-visible:ring-offset-panda-paper dark:focus-visible:ring-offset-panda-ink"
            >
              Hablemos
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path
                  d="M7 17 17 7M7 7h10v10"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Footer main content */}
        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12 lg:py-12">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <Link
              href="#inicio"
              aria-label="PANDA — volver al inicio"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-panda-primary"
            >
              <PandaLogo />
              <span className="font-heading text-lg font-semibold tracking-tight text-panda-ink dark:text-panda-paper">
                PANDA<span className="text-panda-primary">.</span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-6 text-panda-muted">
              Desarrollador web enfocado en crear experiencias digitales
              funcionales, interfaces cuidadas y soluciones que resuelven
              problemas reales.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navegación del pie de página">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-panda-muted">
              Navegación
            </h3>

            <ul className="flex flex-col items-start gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-panda-ink transition-colors duration-200 hover:text-panda-primary dark:text-slate-300 dark:hover:text-panda-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-panda-muted">
              Conecta conmigo
            </h3>

            <ul className="flex flex-col items-start gap-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-panda-ink transition-colors duration-200 hover:text-panda-primary dark:text-slate-300 dark:hover:text-panda-primary"
                  >
                    {link.label}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5 opacity-50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    >
                      <path
                        d="M14 5h5v5M19 5l-9 9"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-black/[0.08] py-5 dark:border-white/[0.10] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-panda-muted">
            © {currentYear} PANDA. Todos los derechos reservados.
          </p>

          <a
            href="#inicio"
            className="group inline-flex w-fit items-center gap-2 text-xs text-panda-muted transition-colors duration-200 hover:text-panda-primary"
          >
            Volver arriba
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
            >
              <path
                d="m6 14 6-6 6 6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}