"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp, SectionHeading } from "./motion";

const gallery = [
  { src: "/gallery/exterior.jpg", alt: "Exterior", tall: true },
  { src: "/gallery/hall.jpg", alt: "Main hall", tall: false },
  { src: "/gallery/stage.jpg", alt: "Stage", tall: true },
  { src: "/gallery/wedding.jpg", alt: "Wedding setup", tall: false },
  { src: "/gallery/decor.jpg", alt: "Decorations", tall: true },
  { src: "/gallery/birthday.jpg", alt: "Birthday setup", tall: false },
  { src: "/gallery/conference.jpg", alt: "Conference setup", tall: true },
  { src: "/gallery/entrance.jpg", alt: "Entrance", tall: false },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const open = (i: number) => setSelected(i);
  const close = () => setSelected(null);
  const prev = () =>
    setSelected((s) => (s === null ? s : (s + gallery.length - 1) % gallery.length));
  const next = () =>
    setSelected((s) => (s === null ? s : (s + 1) % gallery.length));

  return (
    <section id="gallery" className="relative bg-charcoal/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Experience <span className="text-gold-gradient italic">Tana</span>
            </>
          }
          description="A glimpse into the space — from the grand main hall to intimate decorative details, every corner is ready for your event."
        />

        <FadeUp delay={0.15} className="mt-16">
          <div className="columns-2 gap-6 [column-fill:balance] lg:columns-3 [&>*]:mb-6">
            {gallery.map((item, i) => (
              <button
                key={item.src}
                onClick={() => open(i)}
                className="group relative block w-full overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/60"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-left text-sm font-medium text-transparent transition-all duration-500 group-hover:translate-y-0 group-hover:text-white">
                  {item.alt}
                </span>
              </button>
            ))}
          </div>
        </FadeUp>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
            onClick={close}
          >
            <button
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={close}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.img
              key={gallery[selected].src}
              src={gallery[selected].src}
              alt={gallery[selected].alt}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
