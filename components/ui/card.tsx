import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "p-6 rounded-2xl border border-slate-800/80 bg-panda-slate hover:border-panda-primary/50 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}