import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "dark" | "light";
}

export function Logo({ className, showText = true, variant = "dark" }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {/* Icon mark — rounded square with </> code symbol */}
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="10" fill="#2563EB" />
        {/* < bracket */}
        <path
          d="M16 14L10 20L16 26"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* / slash */}
        <path
          d="M22 12L18 28"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* > bracket */}
        <path
          d="M24 14L30 20L24 26"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark */}
      {showText && (
        <span className={cn("text-xl font-bold tracking-tight", variant === "light" ? "text-white" : "text-slate-900")}>
          Nexa<span className={variant === "light" ? "text-blue-400" : "text-blue-600"}>Plus</span>
        </span>
      )}
    </span>
  );
}
