"use client";

import { motion } from "framer-motion";

export function PandaLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`relative flex items-center justify-center cursor-pointer ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Contenedor cuadrado de bordes suavemente redondeados según el Favicon/App icon */}
        <rect width="100" height="100" rx="22" fill="#0B0B0F" />
        <rect
          width="98"
          height="98"
          x="1"
          y="1"
          rx="21"
          stroke="#1F1F28"
          strokeWidth="2"
        />

        {/* Oreja Izquierda (Angular) */}
        <path d="M18 36L28 18L44 26L34 44L18 36Z" fill="#0B0B0F" />
        <path d="M22 34L30 20L40 26L32 40L22 34Z" fill="#8B5CF6" />

        {/* Oreja Derecha (Angular) */}
        <path d="M82 36L72 18L56 26L66 44L82 36Z" fill="#0B0B0F" />
        <path d="M78 34L70 20L60 26L68 40L78 34Z" fill="#8B5CF6" />

        {/* Cabeza / Escudo Geométrico Principal */}
        <path
          d="M26 38L50 24L74 38L80 62L50 84L20 62L26 38Z"
          fill="#FAFAFC"
        />

        {/* Parche de Ojo Izquierdo (Trapezoide Geométrico) */}
        <path d="M28 46L44 42L40 60L28 56Z" fill="#0B0B0F" />
        {/* Ojo Izquierdo */}
        <polygon points="34,48 38,48 37,52 33,52" fill="#FAFAFC" />

        {/* Parche de Ojo Derecho (Trapezoide Geométrico) */}
        <path d="M72 46L56 42L60 60L72 56Z" fill="#0B0B0F" />
        {/* Ojo Derecho */}
        <polygon points="66,48 62,48 63,52 67,52" fill="#FAFAFC" />

        {/* Nariz Angular */}
        <polygon points="50,62 43,67 57,67" fill="#0B0B0F" />

        {/* Bocado / Hocico Geométrico */}
        <path d="M50 67L50 74M50 74L44 78M50 74L56 78" stroke="#0B0B0F" strokeWidth="2.5" strokeLinecap="square" />
      </svg>
    </motion.div>
  );
}