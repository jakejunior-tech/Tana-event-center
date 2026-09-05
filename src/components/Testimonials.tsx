"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import { useInView } from "framer-motion";
import { FadeUp, SectionHeading, Stagger, StaggerItem } from "./motion";

function CountUp({
  end,
  suffix = "",
  delay = 0,
}: {
  end: number;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [inView, end, delay]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { end: 500, suffix: "+", label: "Events Hosted" },
  { end: 6, suffix: "", label: "Ocasion Types" },
  { end: 120, suffix: "+", label: "Happy Clients" },
  { end: 100, suffix: "%", label: "Air-Conditioned" },
];

const testimonials = [
  {
    name: "Adaeze & Chukwu",
    role: "Wedding Couple",
    text: "Tana made our wedding day absolutely magical. The space was elegant, the team was attentive, and our guests are still talking about it.",
  },
  {
    name: "Emeka O.",
    role: "Corporate Event",
    text: "We hosted our annual conference here and everything ran seamlessly. Professional support and a venue that left a lasting impression on our clients.",
  },
  {
    name: "Ngozi A.",
    role: "Birthday Celebration",
    text: "The perfect setting for an intimate celebration. Beautifully maintained, comfortable, and the air conditioning kept everyone at ease all evening.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-charcoal/50 p-8 sm:grid-cols-4 sm:p-10">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1} className="text-center">
              <div className="font-display text-4xl font-medium text-gold-gradient sm:text-5xl">
                <CountUp end={s.end} suffix={s.suffix} delay={i * 150} />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                {s.label}
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Testimonials"
            title={
              <>
                Hear From Our <span className="text-gold-gradient italic">Clients</span>
              </>
            }
          />

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-charcoal/60 p-8 transition-colors duration-500 hover:border-gold/40">
                  <Quote className="h-8 w-8 text-gold/60" />
                  <p className="mt-5 flex-1 text-base leading-relaxed text-white/75">
                    "{t.text}"
                  </p>
                  <div className="mt-6 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <div className="font-display text-lg font-medium text-white">
                      {t.name}
                    </div>
                    <div className="text-sm text-gold">{t.role}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
