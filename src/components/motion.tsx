"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
};

export function FadeUp({ children, delay = 0, className, y = 30 }: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function Stagger({ children, className, stagger = 0.12 }: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <FadeUp className={center ? "text-center mx-auto" : "text-left"}>
      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60 ${
            center ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </FadeUp>
  );
}
