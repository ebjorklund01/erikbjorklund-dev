"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
