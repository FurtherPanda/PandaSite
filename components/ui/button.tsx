
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg border font-sans text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-panda-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-panda-paper dark:focus-visible:ring-offset-panda-ink disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

  const variants = {
    primary:
      "border-panda-primary bg-panda-primary text-white shadow-sm shadow-panda-primary/15 hover:-translate-y-0.5 hover:shadow-md hover:shadow-panda-primary/25",

    secondary:
      "border-panda-muted/25 bg-transparent text-panda-ink hover:border-panda-primary/50 hover:bg-panda-accent-light/50 dark:text-panda-paper dark:hover:bg-panda-primary/10",

    dark:
      "border-panda-slate bg-panda-slate text-white hover:border-panda-primary/50 hover:bg-panda-slate/90",

    ghost:
      "border-transparent bg-transparent text-panda-muted hover:bg-panda-accent-light/50 hover:text-panda-primary dark:hover:bg-panda-primary/10 dark:hover:text-panda-primary",
  };

  const sizes = {
    sm: "min-h-9 px-3.5 py-2 text-xs",
    md: "min-h-11 px-5 py-2.5",
    lg: "min-h-14 px-6 py-3 font-heading text-base tracking-tight",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}