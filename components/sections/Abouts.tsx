
"use client";

import { motion, useReducedMotion } from "framer-motion";

export function About() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1] as [
        number,
        number,
        number,
        number,
      ],
    },
  });

  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-title"
      className="relative isolate w-full overflow-hidden
        scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      {/* Geometría decorativa */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-24
          -z-10 hidden h-48 w-48 rotate-12 border
          border-violet-500/15 lg:block"
      >
        <div className="absolute -right-4 -top-4 h-16 w-16
          border border-violet-500/30" />
      </div>

      <div className="mx-auto w-full max-w-[1600px]">
        {/* Encabezado editorial */}
        <motion.div
          {...reveal()}
          className="mb-14 flex items-center gap-4 sm:mb-20"
        >
          <span className="font-mono text-sm text-violet-500">
            04 /
          </span>

          <span className="h-px w-10 bg-violet-500/60" />

          <span className="text-xs font-medium uppercase
            tracking-[0.22em] text-gray-500 dark:text-gray-400">
            Sobre mí
          </span>
        </motion.div>

        {/* Composición asimétrica */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12
          lg:gap-8">
          <div className="lg:col-span-7">
            <motion.h2
              id="about-title"
              {...reveal(0.1)}
              className="max-w-3xl font-display text-5xl
                font-bold leading-[0.98] tracking-[-0.06em]
                text-panda-ink dark:text-white
                sm:text-6xl md:text-7xl xl:text-8xl"
            >
              Construyo
              <br />
              <span className="text-violet-500">
                experiencias.
              </span>
              <br />
              No solo interfaces.
            </motion.h2>

            <motion.div
              {...reveal(0.2)}
              className="mt-8 flex items-start gap-4 sm:mt-10"
            >
              <div className="mt-1 h-12 w-1 shrink-0
                bg-violet-500" />

              <p className="max-w-lg text-base leading-8
                text-gray-600 dark:text-gray-300 sm:text-lg">
                Soy Eugenio, desarrollador de software.
                Me gusta convertir ideas y diseños en
                experiencias digitales funcionales,
                cuidando tanto los detalles visuales
                como la forma en que funciona cada pieza.
              </p>
            </motion.div>
          </div>

          {/* Columna de identidad */}
          <motion.div
            {...reveal(0.3)}
            className="relative flex flex-col justify-end
              lg:col-span-4 lg:col-start-9 lg:pb-2"
          >
            <div className="mb-8 hidden h-px w-full
              bg-gray-200 dark:bg-white/10 lg:block" />

            <span className="mb-3 font-mono text-xs
              uppercase tracking-[0.2em] text-violet-500">
              Mi enfoque
            </span>

            <p className="text-xl font-medium leading-relaxed
              tracking-tight text-panda-ink
              dark:text-white sm:text-2xl">
              Del diseño al código.
              Del código a una solución real.
            </p>

            <p className="mt-4 text-sm leading-7
              text-gray-600 dark:text-gray-400">
              Mi experiencia se ha centrado principalmente
              en frontend, creando interfaces con React
              y Next.js e integrándolas con APIs.
              Ahora sigo ampliando mi visión hacia el
              backend para construir soluciones más completas.
            </p>
          </motion.div>
        </div>

        {/* Datos destacados */}
        <motion.div
          {...reveal(0.2)}
          className="mt-20 grid grid-cols-1 border-y
            border-gray-200 dark:border-white/10
            sm:mt-28 sm:grid-cols-2"
        >
          <div className="border-b border-gray-200 py-7
            dark:border-white/10 sm:border-b-0
            sm:border-r sm:pr-8 sm:py-9">
            <span className="font-mono text-xs
              uppercase tracking-widest text-gray-500">
              01 — Experiencia
            </span>

            <p className="mt-3 text-3xl font-bold
              tracking-tight text-panda-ink
              dark:text-white sm:text-4xl">
              4+ años
            </p>

            <p className="mt-2 text-sm leading-6
              text-gray-600 dark:text-gray-400">
              Desarrollando experiencias web y aplicaciones.
            </p>
          </div>

          <div className="py-7 sm:py-9 sm:pl-8">
            <span className="font-mono text-xs
              uppercase tracking-widest text-gray-500">
              02 — Mentalidad
            </span>

            <p className="mt-3 text-3xl font-bold
              tracking-tight text-panda-ink
              dark:text-white sm:text-4xl">
              Siempre en evolución.
            </p>

            <p className="mt-2 text-sm leading-6
              text-gray-600 dark:text-gray-400">
              Aprender, experimentar y mejorar la forma
              de construir software.
            </p>
          </div>
        </motion.div>

        {/* Cierre visual */}
        <motion.div
          {...reveal(0.3)}
          className="mt-8 flex items-center justify-between"
        >
          <span className="font-mono text-[10px]
            uppercase tracking-[0.18em] text-gray-500
            dark:text-gray-400 sm:text-xs">
            Curiosidad. Criterio. Evolución.
          </span>

          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center
              border border-violet-500/40 text-violet-500
              transition-colors duration-300
              hover:bg-violet-500 hover:text-white"
          >
            ↘
          </span>
        </motion.div>
      </div>
    </section>
  );
}