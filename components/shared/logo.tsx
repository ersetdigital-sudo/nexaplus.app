import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={variant === "light" ? "/images/logo-light.png" : "/images/logo.png"}
        alt="NexaPlus"
        width={200}
        height={48}
        className="h-9 w-auto"
        priority
      />
    </span>
  );
}
