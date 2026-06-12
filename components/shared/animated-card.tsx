"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
}

export function AnimatedCard({
  children,
  className,
  hoverScale = 1.03,
}: AnimatedCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "rounded-[8px] border border-[#E4E4E7] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-150 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_2px_4px_-2px_rgba(0,0,0,0.04)]",
        className
      )}
      whileHover={
        prefersReducedMotion
          ? undefined
          : { scale: hoverScale }
      }
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
