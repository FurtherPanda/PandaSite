
"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { PandaLogo } from "@/components/isotipo/panda-logo";
import { Button } from "@/components/ui/button";

import { GridEnergy } from "@/components/animations/grid-energy";

const technologies = ["React", "Next.js", "TypeScript"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Progress is reversible: scrolling up reverses the movement.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orbitRotation = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 65]
  );

  const reverseOrbitRotation = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -45]
  );

  const frameRotation = useTransform(
    scrollYProgress,
    [0, 1],
    [-7, 3]
  );

  const artworkY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 75]
  );

  const artworkScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.9]
  );

  const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  const initialState = reduceMotion ? false : "hidden";

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative isolate overflow-clip bg-panda-paper text-panda-ink transition-colors duration-500 dark:bg-panda-ink dark:text-panda-paper"
    >
      {/* Editorial grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]
          bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          bg-[size:64px_64px]"
      />
<GridEnergy />
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <div className="grid min-h-[calc(100svh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-24">

          {/* Editorial content */}
          <div className="relative z-10">
            <motion.div
              variants={reveal}
              initial={initialState}
              animate="visible"
              transition={{ duration: 0.65, delay: 0.05 }}
              className="mb-10 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-panda-primary shadow-[0_0_14px_#8B5CF680]" />

              <p className="text-xs font-medium uppercase tracking-[0.22em] text-panda-muted">
                Developer & Digital Craft
              </p>

              <span className="hidden h-px w-12 bg-panda-muted/40 sm:block" />

              <span className="hidden text-xs text-panda-muted sm:block">
                MTY, MX
              </span>
            </motion.div>

            <h1 className="font-heading text-[clamp(3.8rem,9.5vw,8.8rem)] font-medium leading-[0.83] tracking-[-0.085em]">
              {["Ideas into", "digital", "experiences."].map(
                (line, index) => (
                  <span
                    key={line}
                    className="block overflow-hidden pb-2"
                  >
                    <motion.span
                      initial={
                        reduceMotion
                          ? false
                          : { y: "110%", opacity: 0 }
                      }
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.85,
                        delay: reduceMotion
                          ? 0
                          : 0.12 + index * 0.13,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`block ${
                        index === 1 ? "text-panda-primary" : ""
                      }`}
                    >
                      {line.endsWith(".") ? (
                        <>
                          {line.slice(0, -1)}
                          <span className="text-panda-primary">.</span>
                        </>
                      ) : (
                        line
                      )}
                    </motion.span>
                  </span>
                )
              )}
            </h1>

            <motion.div
              variants={reveal}
              initial={initialState}
              animate="visible"
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 grid max-w-xl grid-cols-[3px_1fr] gap-5"
            >
              <span className="bg-panda-primary" />

              <p className="max-w-md text-base leading-7 text-panda-muted sm:text-lg sm:leading-8">
                Desarrollo experiencias digitales donde el diseño,
                la ingeniería y la atención al detalle trabajan juntos.
              </p>
            </motion.div>

            <motion.div
              variants={reveal}
              initial={initialState}
              animate="visible"
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#proyectos"
              
              >
              <Button variant="primary" size="md">
                Explorar proyectos
              </Button>
              </Link>

              <Link
                href="#contacto"
                className="group inline-flex min-h-14 items-center gap-2 px-3 text-sm text-panda-ink transition-colors hover:text-panda-primary dark:text-panda-paper"
              >
                Hablemos
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>

            <motion.div
              variants={reveal}
              initial={initialState}
              animate="visible"
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-12 flex flex-wrap gap-x-3 gap-y-2"
            >
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-panda-muted/20 px-3 py-1.5 text-xs text-panda-muted"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Geometric artwork */}
          <motion.div
            style={
              reduceMotion
                ? undefined
                : {
                    y: artworkY,
                    scale: artworkScale,
                  }
            }
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.88, y: 24 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto aspect-square w-full max-w-[570px] lg:ml-auto"
          >
            {/* Rotating frame */}
            <motion.div
              aria-hidden="true"
              style={
                reduceMotion
                  ? undefined
                  : { rotate: frameRotation }
              }
              className="absolute inset-[7%] border border-panda-primary/30"
            />

            {/* Orbital path */}
            <motion.div
              aria-hidden="true"
              style={
                reduceMotion
                  ? undefined
                  : { rotate: orbitRotation }
              }
              className="absolute inset-[12%] rounded-full border border-panda-primary/35"
            >
              {/* Electron */}
              <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-panda-primary shadow-[0_0_14px_#8B5CF6]" />

              <span className="absolute bottom-[16%] right-[5%] size-1.5 rounded-full bg-panda-primary/70" />
            </motion.div>

            {/* Counter-rotating orbital path */}
            <motion.div
              aria-hidden="true"
              style={
                reduceMotion
                  ? undefined
                  : { rotate: reverseOrbitRotation }
              }
              className="absolute inset-[20%] rounded-full border border-dashed border-panda-muted/30"
            >
              <span className="absolute right-[12%] top-[8%] size-2.5 rounded-full border border-panda-primary bg-panda-paper dark:bg-panda-ink" />
            </motion.div>

            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="absolute inset-[23%] rounded-full bg-panda-primary/10 blur-3xl"
            />

            {/* Panda logo */}
            <div className="absolute inset-[17%] flex items-center justify-center">
              <PandaLogo className="aspect-square w-full h-auto" />
            </div>

            {/* Editorial annotation */}
            <div className="absolute right-[1%] top-[20%] rotate-90 origin-right text-[10px] uppercase tracking-[0.3em] text-panda-muted">
              Design meets engineering
            </div>

            <div className="absolute bottom-[9%] left-[3%] max-w-[175px] border-l-2 border-panda-primary pl-4">
              <p className="text-xs uppercase tracking-[0.18em] text-panda-muted">
                The approach
              </p>
              <p className="mt-2 font-heading text-xl leading-tight">
                Think deeply.
                <br />
                Build intentionally.
              </p>
            </div>

            <motion.div
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: 360 }
              }
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-[9%] right-[3%] flex size-16 items-center justify-center rounded-full border border-panda-primary/50 text-2xl text-panda-primary sm:size-20"
            >
              ✳
            </motion.div>

            <span className="absolute left-[7%] top-[7%] size-2 bg-panda-primary" />
            <span className="absolute bottom-[8%] right-[8%] size-2 bg-panda-primary" />
          </motion.div>
        </div>

        {/* Editorial footer strip */}
        <motion.div
          initial={initialState}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-wrap items-center justify-between gap-4 border-t border-panda-muted/20 py-5 text-[10px] uppercase tracking-[0.2em] text-panda-muted sm:text-xs"
        >
          <span>Independent developer</span>

          <a
            href="#proyectos"
            className="group inline-flex items-center gap-3 transition-colors hover:text-panda-primary"
          >
            Scroll to explore
            <span aria-hidden="true">↓</span>
          </a>

          <span>Crafted with intention © 2026</span>
        </motion.div>
      </div>
    </section>
  );
}