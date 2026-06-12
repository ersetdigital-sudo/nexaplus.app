import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {/* Icon mark — modern abstract "N" */}
      <svg
        viewBox="0 0 36 36"
        className="h-9 w-9 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="nexaLogoBg" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
        <rect width="36" height="36" rx="10" fill="url(#nexaLogoBg)" />
        <path
          d="M11 26V10L25 26V10"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark */}
      {showText && (
        <span className="text-xl font-bold tracking-tight text-slate-900">
          Nexa<span className="text-blue-600">Plus</span>
        </span>
      )}
    </span>
  );
}
