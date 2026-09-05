"use client";

import { SectionHeading, Stagger, StaggerItem } from "./motion";

const events = [
  {
    title: "Weddings",
    image: "/events/wedding.jpg",
    text: "Say 'I do' in a space that makes every moment feel cinematic.",
  },
  {
    title: "Birthdays",
    image: "/events/birthday.jpg",
    text: "Celebrate another beautiful year surrounded by those you love.",
  },
  {
    title: "Private Celebrations",
    image: "/events/celebration.jpg",
    text: "Intimate gatherings crafted around you and your closest.",
  },
  {
    title: "Corporate Events",
    image: "/events/corporate.jpg",
    text: "Professional settings with the facilities your business needs.",
  },
  {
    title: "Concerts & Shows",
    image: "/events/concert.jpg",
    text: "Stage, sound and lighting built to bring performances to life.",
  },
  {
    title: "Conferences",
    image: "/events/conference.jpg",
    text: "Purpose-built space for impactful meetings and events.",
  },
];

export function EventTypes() {
  return (
    <section id="events" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Event Types"
          title={
            <>
              One Venue.{" "}
              <span className="text-gold-gradient italic">Every Occasion.</span>
            </>
          }
          description="From grand celebrations to focused corporate gatherings, Tana adapts to bring your vision to life."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <StaggerItem key={event.title}>
              <a
                href="#booking"
                className="group relative block h-80 overflow-hidden rounded-2xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-colors duration-500 group-hover:from-background group-hover:via-background/60" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-medium text-white">
                    {event.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/70 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {event.text}
                  </p>
                  <span className="mt-4 inline-block h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
