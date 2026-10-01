import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
export function PandaClimber({
  progress,
  side,
}: {
  progress: MotionValue<number>;
  side: "left" | "right";
}) {
  const reducedMotion = useReducedMotion();

  const y = useTransform(
    progress,
    [0, 1],
    side === "right" ? [-24, 24] : [24, -24],
  );

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute top-[22%] z-20 hidden sm:block ${
        side === "right" ? "right-[-25px]" : "left-[-25px]"
      }`}
      style={{ y: reducedMotion ? 0 : y }}
    >
      <svg
        viewBox="0 0 64 76"
        width="58"
        height="70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Patitas sujetando el borde */}
        <ellipse cx="13" cy="51" rx="9" ry="11" fill="#17171F" />
        <ellipse cx="51" cy="51" rx="9" ry="11" fill="#17171F" />

        {/* Orejas */}
        <circle cx="17" cy="20" r="11" fill="#17171F" />
        <circle cx="47" cy="20" r="11" fill="#17171F" />

        {/* Cabeza */}
        <ellipse
          cx="32"
          cy="31"
          rx="23"
          ry="22"
          fill="#FAFAFC"
          stroke="#17171F"
          strokeWidth="2"
        />

        {/* Manchas de los ojos */}
        <ellipse
          cx="23"
          cy="29"
          rx="6.5"
          ry="8"
          transform="rotate(25 23 29)"
          fill="#17171F"
        />
        <ellipse
          cx="41"
          cy="29"
          rx="6.5"
          ry="8"
          transform="rotate(-25 41 29)"
          fill="#17171F"
        />

        {/* Ojos */}
        <circle cx="24" cy="29" r="1.8" fill="#FAFAFC" />
        <circle cx="40" cy="29" r="1.8" fill="#FAFAFC" />

        {/* Hocico */}
        <ellipse cx="32" cy="38" rx="8" ry="5.5" fill="#FAFAFC" />
        <ellipse cx="32" cy="36" rx="2.5" ry="1.8" fill="#17171F" />
        <path
          d="M32 38V40.5C30.5 42 29 42 28 41"
          stroke="#17171F"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Acento PANDA */}
        <circle cx="49" cy="43" r="3" fill="#8B5CF6" />
      </svg>
    </motion.div>
  );
}