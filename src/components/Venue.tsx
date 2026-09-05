"use client";

import {
  MapPin,
  Users,
  Wind,
  Presentation,
  Sparkles,
  Phone,
} from "lucide-react";
import { FadeUp, SectionHeading, Stagger, StaggerItem } from "./motion";
import { siteConfig } from "@/data/site";

const glance = [
  { icon: MapPin, label: "Location", value: "GRA Phase II, Port Harcourt" },
  { icon: Users, label: "Capacity", value: "Confirm with management" },
  { icon: Wind, label: "Climate Control", value: "Air-conditioned" },
  { icon: Presentation, label: "Presentation", value: "Projector screens" },
  {
    icon: Sparkles,
    label: "Events",
    value: "Weddings · Conferences · Celebrations · Concerts",
  },
  { icon: Phone, label: "Enquiries", value: siteConfig.phoneDisplay },
];

export function Venue() {
  return (
    <section id="venue" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/5" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/5" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              The Venue
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-white sm:text-5xl md:text-6xl">
              The Tana
              <br />
              <span className="text-gold-gradient italic">Experience</span>
            </h2>
            <p className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-white/60">
              Step into a space designed to impress and comfort in equal
              measure. From the moment you arrive, every detail has been
              considered so your event feels seamless, elegant and truly yours.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {["Immaculate & spacious", "Flexible layouts", "Professional support team"].map(
                (t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 text-sm text-white/70"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {t}
                  </span>
                )
              )}
            </div>
          </FadeUp>

          <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {glance.map((item) => (
              <StaggerItem key={item.label} className="bg-background">
                <div className="flex h-full flex-col bg-charcoal/80 p-7 transition-colors duration-300 hover:bg-charcoal">
                  <item.icon className="h-5 w-5 text-gold" />
                  <span className="mt-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">
                    {item.label}
                  </span>
                  <span className="mt-2 font-display text-xl font-medium text-white">
                    {item.value}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
