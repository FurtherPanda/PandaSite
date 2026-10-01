import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "active";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full text-xs font-medium transition-all",
        variant === "default" && "bg-slate-800/80 text-slate-300 border border-slate-700/50",
        variant === "active" && "bg-panda-primary text-white",
        className
      )}
    >
      {children}
    </span>
  );
}