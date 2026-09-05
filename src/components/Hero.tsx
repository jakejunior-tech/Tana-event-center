"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt="Tana Event Center main hall"
          className="hero-zoom h-full w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-gold"
        >
          Premium Event Venue · Port Harcourt
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Make Your Moment
          <br />
          <span className="text-gold-gradient italic">Unforgettable.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/75"
        >
          A premium event venue in the heart of GRA Phase II, Port Harcourt —
          perfect for weddings, celebrations, conferences and unforgettable
          occasions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#booking"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-background transition-all hover:bg-gold-light hover:shadow-[0_0_35px_rgba(201,168,106,0.45)]"
          >
            Book The Venue
          </a>
          <a
            href="#gallery"
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-gold hover:text-gold"
          >
            Explore The Space
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
