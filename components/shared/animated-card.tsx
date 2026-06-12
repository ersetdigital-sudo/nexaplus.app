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
        "rounded-xl border border-white/8 bg-white/3 backdrop-blur-sm",
        className
      )}
      whileHover={
        prefersReducedMotion
          ? undefined
          : { scale: hoverScale }
      }
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
