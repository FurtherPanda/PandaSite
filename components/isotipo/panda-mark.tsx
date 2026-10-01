
"use client";

import { motion } from "framer-motion";

interface PandaLogoProps {
  className?: string;
}

export function PandaLogo({
  className = "w-10 h-10",
}: PandaLogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, rotate: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
      className={`relative flex shrink-0 items-center justify-center ${className}`}
      aria-label="PANDA"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
        role="img"
        aria-labelledby="panda-logo-title"
      >
        <title id="panda-logo-title">PANDA geometric logo</title>

        <defs>
          <linearGradient
            id="panda-face-gradient"
            x1="25"
            y1="22"
            x2="76"
            y2="83"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#DAD8E5" />
          </linearGradient>

          <linearGradient
            id="panda-purple-gradient"
            x1="25"
            y1="20"
            x2="75"
            y2="80"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#A78BFA" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>

          <filter
            id="panda-eye-glow"
            x="-200%"
            y="-200%"
            width="500%"
            height="500%"
          >
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* App icon background */}
        <rect
          width="100"
          height="100"
          rx="24"
          fill="#0B0B0F"
        />

        <rect
          x="1"
          y="1"
          width="98"
          height="98"
          rx="23"
          stroke="#1F1F28"
          strokeWidth="1.5"
        />

        {/* Subtle ambient accent */}
        <motion.circle
          cx="50"
          cy="50"
          r="39"
          stroke="#8B5CF6"
          strokeWidth="0.7"
          strokeDasharray="2 7"
          initial={{ opacity: 0.15, rotate: 0 }}
          animate={{ opacity: [0.15, 0.4, 0.15], rotate: 360 }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformOrigin: "50px 50px" }}
        />

        {/* Panda head group */}
        <motion.g
          initial={{ y: 3, opacity: 0 }}
          animate={{ y: [0, -1, 0], opacity: 1 }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: { duration: 0.6 },
          }}
        >
          {/* Rounded ears — clearly panda, not fox */}
          <circle
            cx="29"
            cy="29"
            r="13"
            fill="#08080C"
            stroke="#37313F"
            strokeWidth="1"
          />

          <circle
            cx="29"
            cy="29"
            r="7.5"
            fill="url(#panda-purple-gradient)"
            opacity="0.9"
          />

          <path
            d="M24 26L29 22L34 29L29 35L24 26Z"
            fill="#C4B5FD"
            opacity="0.7"
          />

          <circle
            cx="71"
            cy="29"
            r="13"
            fill="#08080C"
            stroke="#37313F"
            strokeWidth="1"
          />

          <circle
            cx="71"
            cy="29"
            r="7.5"
            fill="url(#panda-purple-gradient)"
            opacity="0.9"
          />

          <path
            d="M66 29L71 22L76 26L71 35L66 29Z"
            fill="#C4B5FD"
            opacity="0.7"
          />

          {/* Main head — broad, rounded geometric silhouette */}
          <path
            d="
              M22 39
              Q22 34 28 34
              L37 36
              Q50 29 63 36
              L72 34
              Q78 34 78 40
              L80 55
              Q80 68 69 76
              Q60 84 50 84
              Q40 84 31 76
              Q20 68 20 55
              Z
            "
            fill="url(#panda-face-gradient)"
          />

          {/* Angular forehead facets */}
          <path
            d="M28 38L37 36L50 43L39 49L26 47Z"
            fill="#FFFFFF"
          />

          <path
            d="M37 36L50 43L63 36L61 48L50 52L39 49Z"
            fill="#E7E4F0"
          />

          <path
            d="M63 36L72 38L74 47L61 49L50 43Z"
            fill="#D2CEDF"
          />

          {/* Left eye patch — broad and rounded */}
          <path
            d="
              M25 49
              Q27 43 34 43
              L43 47
              L41 57
              Q37 64 31 61
              Q24 58 25 49
              Z
            "
            fill="#0B0B0F"
          />

          <path
            d="M26 49L34 44L35 52L29 58Z"
            fill="#272331"
          />

          {/* Right eye patch */}
          <path
            d="
              M75 49
              Q73 43 66 43
              L57 47
              L59 57
              Q63 64 69 61
              Q76 58 75 49
              Z
            "
            fill="#0B0B0F"
          />

          <path
            d="M74 49L66 44L65 52L71 58Z"
            fill="#272331"
          />

          {/* Animated eyes */}
          <motion.g
            filter="url(#panda-eye-glow)"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              d="M31 51L35 48L39 52L35 56Z"
              fill="#8B5CF6"
            />

            <circle cx="35" cy="52" r="1.5" fill="#FFFFFF" />

            <path
              d="M69 51L65 48L61 52L65 56Z"
              fill="#8B5CF6"
            />

            <circle cx="65" cy="52" r="1.5" fill="#FFFFFF" />
          </motion.g>

          {/* Wide muzzle */}
          <path
            d="
              M34 62
              Q35 57 42 59
              L50 63
              L58 59
              Q65 57 66 62
              Q64 72 50 75
              Q36 72 34 62
              Z
            "
            fill="#FFFFFF"
          />

          <path
            d="M34 62L42 59L50 63L43 68L37 67Z"
            fill="#F0EDF6"
          />

          <path
            d="M66 62L58 59L50 63L57 68L63 67Z"
            fill="#DDD9E9"
          />

          {/* Geometric nose */}
          <path
            d="M44 61L50 58L56 61L50 66Z"
            fill="#0B0B0F"
          />

          <path
            d="M44 61L50 63L50 66Z"
            fill="#37313F"
          />

          {/* Mouth */}
          <path
            d="M50 66V70M50 70L45 73M50 70L55 73"
            stroke="#0B0B0F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Signature purple cheek facets */}
          <path
            d="M23 62L28 67L32 68"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          <path
            d="M77 62L72 67L68 68"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}