"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  animate = true,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  const shouldAnimate = animate && !prefersReducedMotion;

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn("px-4 py-16 md:px-8 lg:py-24", className)}
      initial={shouldAnimate ? { opacity: 0, y: 30 } : undefined}
      animate={
        shouldAnimate
          ? isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 30 }
          : undefined
      }
      transition={shouldAnimate ? { duration: 0.5, ease: "easeOut" } : undefined}
    >
      {children}
    </motion.section>
  );
}
