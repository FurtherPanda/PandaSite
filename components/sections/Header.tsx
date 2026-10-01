
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useTheme } from "next-themes";

import { PandaLogo } from "@/components/isotipo/panda-logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Sobre mí", href: "#sobre-mi" },
];

const CONTACT_HREF = "#contacto";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Cambiar a tema ${isDark ? "claro" : "oscuro"}`}
      className="group grid size-9 shrink-0 place-items-center rounded-md
        text-slate-500 transition-colors duration-200
        hover:bg-black/5 hover:text-panda-ink
        dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-panda-primary"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={
            reduceMotion
              ? false
              : { opacity: 0, rotate: -35, scale: 0.8 }
          }
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={
            reduceMotion
              ? undefined
              : { opacity: 0, rotate: 35, scale: 0.8 }
          }
          transition={{ duration: 0.2 }}
          className="flex"
        >
          {isDark ? (
            <svg
              viewBox="0 0 24 24"
              className="size-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3.5" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="size-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" />
            </svg>
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function Header() {
  const [activeHref, setActiveHref] = useState("#inicio");
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [compact, setCompact] = useState(false);
  const reduceMotion = useReducedMotion();

  const pillTarget = hoveredHref ?? activeHref;


  // Expand on scroll up, compact on scroll down.
  useEffect(() => {
    let previousY = window.scrollY;
    const threshold = 4;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - previousY;

      if (currentY <= 32) {
        setCompact(false);
      } else if (delta > threshold) {
        setCompact(true);
      } else if (delta < -threshold) {
        setCompact(false);
      }

      previousY = currentY;
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track visible sections.
  useEffect(() => {
    const elements = NAV_ITEMS.map(({ href }) =>
      document.querySelector(href)
    ).filter((element): element is Element => element !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible[0]) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Prevent the document from scrolling behind the open mobile menu.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-3 sm:px-6">
      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: -12 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`mx-auto w-full transition-[max-width] duration-500 ${
          compact ? "max-w-4xl" : "max-w-6xl"
        }`}
      >
        <div
          className={`relative flex items-center justify-between gap-4
            border px-4 transition-all duration-300
            border-black/10 bg-panda-paper/85
            shadow-[0_8px_30px_rgb(0,0,0,0.04)]
            backdrop-blur-2xl
            dark:border-white/10 dark:bg-panda-ink/85
            dark:shadow-[0_8px_30px_rgb(0,0,0,0.22)]
            ${compact ? "min-h-12 rounded-lg" : "min-h-14 rounded-xl"}`}
        >
          {/* Brand */}
          <Link
            href="#inicio"
            aria-label="PANDA — Inicio"
            className="group flex shrink-0 items-center gap-2.5"
          >
            <motion.span
              whileHover={reduceMotion ? undefined : { rotate: -4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
              className="flex"
            >
              <PandaLogo className="size-8" />
            </motion.span>

            <span className="font-heading text-sm font-bold tracking-[0.2em] text-panda-ink dark:text-panda-paper">
              PANDA
            </span>

            <span className="ml-1 hidden h-4 w-px bg-panda-muted/30 sm:block" />

            <span className="hidden text-[10px] uppercase tracking-[0.16em] text-panda-muted xl:block">
              Digital craft
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Navegación principal"
            className="relative hidden items-center gap-1 md:flex"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredHref(item.href)}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative isolate px-3 py-2 text-[12px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-panda-ink dark:text-panda-paper"
                      : "text-panda-muted hover:text-panda-ink dark:hover:text-panda-paper"
                  }`}
                >
                  {pillTarget === item.href && (
                    <motion.span
                      layoutId="nav-highlight"
                      className="absolute inset-0 -z-10 rounded-md bg-black/[0.045] dark:bg-white/[0.07]"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      }}
                    />
                  )}

                  <span>{item.label}</span>

                  {isActive && (
                    <motion.span
                      layoutId="nav-active-line"
                      className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-panda-primary"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />

            <Link href={CONTACT_HREF} className="hidden sm:block">
              <Button
                variant="primary"
                size="md"
                className="!min-h-9 !rounded-md !px-4 !text-xs"
              >
                Contacto
                <Icon name="contact" className="size-3.5" />
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="grid size-9 place-items-center rounded-md text-panda-muted
                transition-colors hover:bg-black/5 hover:text-panda-ink
                dark:hover:bg-white/10 dark:hover:text-white md:hidden"
            >
              <span className="relative block h-3.5 w-[18px]">
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { top: 6, rotate: 45 }
                      : { top: 2, rotate: 0 }
                  }
                  className="absolute left-0 h-[1.5px] w-full bg-current"
                />
                <motion.span
                  animate={
                    mobileMenuOpen
                      ? { top: 6, rotate: -45 }
                      : { top: 11, rotate: 0 }
                  }
                  className="absolute left-0 h-[1.5px] w-full bg-current"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Navegación móvil"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: -8 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                reduceMotion
                  ? undefined
                  : { opacity: 0, y: -8 }
              }
              transition={{ duration: 0.2 }}
              className="mt-2 border border-black/10 bg-panda-paper/95 p-2
                shadow-xl backdrop-blur-2xl rounded-lg
                dark:border-white/10 dark:bg-panda-ink/95 md:hidden"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex items-center justify-between px-3 py-3 text-sm transition-colors rounded-md ${
                      isActive
                        ? "bg-panda-primary/10 text-panda-primary"
                        : "text-panda-muted hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="size-1.5 rounded-full bg-panda-primary" />
                    )}
                  </Link>
                );
              })}

              <Link
                href={CONTACT_HREF}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 block"
              >
                <Button
                  variant="primary"
                  size="md"
                  className="w-full !rounded-md justify-center"
                >
                  Contacto
                  <Icon name="contact" className="size-4" />
                </Button>
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}