
const verticalLines = [
  { x: 128, className: "grid-energy-a" },
  { x: 320, className: "grid-energy-b" },
  { x: 576, className: "grid-energy-c" },
  { x: 832, className: "grid-energy-d" },
  { x: 1088, className: "grid-energy-e" },
];

const horizontalLines = [
  { y: 128, className: "grid-energy-f" },
  { y: 320, className: "grid-energy-g" },
  { y: 512, className: "grid-energy-h" },
  { y: 704, className: "grid-energy-i" },
];

export function GridEnergy() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden"
    >
      <defs>
        <filter
          id="grid-energy-glow"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {verticalLines.map(({ x, className }) => (
        <line
          key={`v-${x}`}
          x1={x}
          y1="0"
          x2={x}
          y2="100%"
          className={`grid-energy-line grid-energy-vertical ${className}`}
        />
      ))}

      {horizontalLines.map(({ y, className }) => (
        <line
          key={`h-${y}`}
          x1="0"
          y1={y}
          x2="100%"
          y2={y}
          className={`grid-energy-line grid-energy-horizontal ${className}`}
        />
      ))}
    </svg>
  );
}