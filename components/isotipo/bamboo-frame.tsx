
"use client";

import { motion, useReducedMotion } from "framer-motion";

export function BambooFrame() {
  const reduceMotion = useReducedMotion();

const reveal = (delay: number) =>
  reduceMotion
    ? { initial: false as const }
    : {
        initial: {
          pathLength: 0,
          opacity: 0,
        },
        whileInView: {
          pathLength: 1,
          opacity: 1,
        },
        viewport: {
          once: true,
          amount: 0.2,
        },
        transition: {
          pathLength: {
            duration: 1.6,
            delay,
            ease: [0.16, 1, 0.3, 1] as [
              number,
              number,
              number,
              number,
            ],
          },
          opacity: {
            duration: 0.4,
            delay,
          },
        },
      };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-0 right-0 z-0 hidden justify-between xl:flex"
    >
      {[false, true].map((mirrored) => (
        <svg
          key={String(mirrored)}
          viewBox="0 0 120 720"
          preserveAspectRatio="none"
          className={`h-full w-20 overflow-visible opacity-50 2xl:w-28 ${
            mirrored ? "-scale-x-100" : ""
          }`}
          fill="none"
        >
          {/* Tallos principales */}
          <motion.path
            d="M25 720 L31 590 L25 465 L34 335 L29 205 L38 70"
            stroke="#8B5CF6"
            strokeWidth="2"
            {...reveal(0)}
          />

          <motion.path
            d="M72 720 L65 600 L76 480 L69 360 L80 240 L74 120 L84 0"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            {...reveal(0.2)}
          />

          {/* Nudos geométricos */}
          {[
            [28, 650],
            [29, 530],
            [29, 400],
            [31, 270],
            [35, 140],
            [68, 660],
            [71, 540],
            [73, 420],
            [73, 300],
            [77, 180],
            [80, 60],
          ].map(([x, y], index) => (
            <motion.path
              key={`node-${index}`}
              d={`M${x - 9} ${y} L${x + 9} ${y}`}
              stroke="#8B5CF6"
              strokeWidth="1.5"
              {...reveal(0.25 + index * 0.035)}
            />
          ))}

          {/* Hojas angulares */}
          <motion.path
            d="M32 335 L10 308 L2 282 L23 300 Z"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            {...reveal(0.35)}
          />

          <motion.path
            d="M31 270 L51 242 L57 218 L39 235 Z"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            {...reveal(0.45)}
          />

          <motion.path
            d="M73 420 L94 395 L103 371 L84 384 Z"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            {...reveal(0.55)}
          />

          <motion.path
            d="M77 180 L57 154 L53 132 L70 147 Z"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            {...reveal(0.65)}
          />

          {/* Detalles de luz */}
          <motion.circle
            cx="31"
            cy="335"
            r="3"
            fill="#8B5CF6"
            {...reveal(0.8)}
          />

          <motion.circle
            cx="76"
            cy="480"
            r="2.5"
            fill="#8B5CF6"
            {...reveal(0.9)}
          />
        </svg>
      ))}

{/* Geometric purple grass at the bamboo base */}
{[false, true].map((mirrored, index) => (
  <svg
    key={`grass-${index}`}
    aria-hidden="true"
    viewBox="0 0 180 100"
    fill="none"
    className={`absolute bottom-0 ${
      mirrored ? "right-0 -scale-x-100" : "left-0"
    } h-24 w-36 overflow-visible 2xl:h-32 2xl:w-44`}
  >
    {/* Ground line */}
    <motion.path
      d="M0 96 L38 91 L72 95 L108 89 L145 94 L180 88"
      stroke="#8B5CF6"
      strokeWidth="1.5"
      {...reveal(0.7)}
    />

    {/* Geometric grass blades */}
    <motion.path
      d="M12 94 L4 68 L22 87 L30 54 L36 92 Z"
      fill="#8B5CF6"
      fillOpacity="0.18"
      stroke="#8B5CF6"
      strokeOpacity="0.7"
      strokeWidth="1.2"
      {...reveal(0.8)}
    />

    <motion.path
      d="M28 92 L42 62 L45 83 L62 45 L57 93 Z"
      fill="#8B5CF6"
      fillOpacity="0.12"
      stroke="#8B5CF6"
      strokeOpacity="0.8"
      strokeWidth="1.2"
      {...reveal(0.95)}
    />

    <motion.path
      d="M58 94 L67 76 L77 84 L91 58 L88 94 Z"
      fill="#8B5CF6"
      fillOpacity="0.2"
      stroke="#8B5CF6"
      strokeOpacity="0.65"
      strokeWidth="1.2"
      {...reveal(1.05)}
    />

    <motion.path
      d="M94 92 L106 68 L112 84 L126 49 L127 93 Z"
      fill="#8B5CF6"
      fillOpacity="0.14"
      stroke="#8B5CF6"
      strokeOpacity="0.75"
      strokeWidth="1.2"
      {...reveal(1.15)}
    />

    <motion.path
      d="M126 93 L141 72 L146 83 L161 61 L169 91 Z"
      fill="#8B5CF6"
      fillOpacity="0.2"
      stroke="#8B5CF6"
      strokeOpacity="0.7"
      strokeWidth="1.2"
      {...reveal(1.25)}
    />

    {/* Small geometric details */}
    <motion.path
      d="M38 96 L48 89 L55 96 M112 94 L121 88 L130 94"
      stroke="#8B5CF6"
      strokeOpacity="0.5"
      strokeWidth="1"
      {...reveal(1.35)}
    />
  </svg>
))}
    </div>
  );
}