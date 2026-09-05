"use client";

import { Leaf, Wind, Presentation, MapPin, ArrowRight } from "lucide-react";
import { FadeUp, Stagger, StaggerItem, SectionHeading } from "./motion";

const features = [
  {
    icon: Leaf,
    title: "Elegant Space",
    text: "A versatile venue that can be transformed to match your event.",
  },
  {
    icon: Wind,
    title: "Fully Air-Conditioned",
    text: "Comfortable surroundings for you and your guests, all year round.",
  },
  {
    icon: Presentation,
    title: "Modern Facilities",
    text: "Projector screens, stage, sound and other event essentials.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    text: "Located in GRA Phase II, Port Harcourt.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Tana"
          title={
            <>
              Where Beautiful <span className="text-gold-gradient italic">Moments</span> Begin
            </>
          }
          description="Whether you're planning an elegant wedding, intimate celebration, corporate conference or special gathering, Tana Event Center provides a stylish and comfortable space designed around your occasion."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-charcoal/60 p-8 transition-all duration-500 hover:border-gold/50 hover:bg-charcoal">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/20" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {feature.text}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.2} className="mt-14 text-center">
          <a
            href="#venue"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
          >
            Discover The Venue
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
