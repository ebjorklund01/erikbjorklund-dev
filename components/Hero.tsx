"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeUp = (delay = 0) => ({
  variants,
  initial: "hidden",
  animate: "visible",
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-16"
    >
      <div className="max-w-5xl mx-auto w-full py-24">
        <motion.p
          className="text-sm uppercase tracking-[0.25em] text-accent font-sans mb-6"
          {...fadeUp(0.1)}
        >
          Software Engineer
        </motion.p>

        <motion.h1
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-none tracking-tight text-stone-900 mb-6"
          {...fadeUp(0.2)}
        >
          Erik
          <br />
          Bjorklund
        </motion.h1>

        <motion.p
          className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-500 italic mb-8 max-w-xl"
          {...fadeUp(0.35)}
        >
          Biomedical Engineer → Software Engineer → AI Engineer
        </motion.p>

        <motion.div className="mt-16 flex items-center gap-3" {...fadeUp(0.5)}>
          <span className="block w-12 h-px bg-accent" />
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-accent transition-colors"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  );
}
