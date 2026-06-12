"use client";

import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  className?: string;
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={cn("h-5 w-5", filled ? "text-yellow-400" : "text-white/20")}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

export function StarRating({ rating, maxStars = 5, className }: StarRatingProps) {
  const clampedRating = Math.min(Math.max(Math.round(rating), 0), maxStars);

  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rating: ${clampedRating} out of ${maxStars} stars`}
    >
      {Array.from({ length: maxStars }, (_, i) => (
        <StarIcon key={i} filled={i < clampedRating} />
      ))}
    </div>
  );
}
