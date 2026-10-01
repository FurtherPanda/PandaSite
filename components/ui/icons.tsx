import { 
  Home, 
  Folder, 
  Code2, 
  User, 
  Mail, 
  ExternalLink, 
  Sun,
  Moon,
  LucideProps
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mapa centralizado de iconos del sistema PANDA
export const ICONS = {
  home: Home,
  projects: Folder,
  code: Code2,
  about: User,
  contact: Mail,
  external: ExternalLink,
  sun: Sun,
  moon: Moon,
};

export type IconName = keyof typeof ICONS;

interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconName;
  className?: string;
}

export function Icon({ name, className, size = 20, ...props }: IconProps) {
  const IconComponent = ICONS[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      size={size}
      strokeWidth={1.75}
      className={cn("shrink-0 transition-colors", className)}
      {...props}
    />
  );
}