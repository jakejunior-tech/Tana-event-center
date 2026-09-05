"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { FadeUp, SectionHeading } from "./motion";
import { siteConfig } from "@/data/site";

export function Location() {
  return (
    <section id="contact" className="relative bg-charcoal/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Location"
          title={
            <>
              Find <span className="text-gold-gradient italic">Tana</span>
            </>
          }
        />

        <div className="mt-14 grid overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-5">
          <FadeUp className="bg-charcoal/70 p-8 sm:p-10 lg:col-span-2">
            <div className="flex flex-col gap-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
                    Find Us
                  </h3>
                  <p className="mt-2 font-display text-xl font-medium leading-snug text-white">
                    {siteConfig.addressLine1}
                    <br />
                    {siteConfig.addressLine2}
                    <br />
                    {siteConfig.addressLine3}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
                    Enquiries
                  </h3>
                  <a
                    href={`tel:+${siteConfig.phoneInternational}`}
                    className="mt-2 block font-display text-xl font-medium text-gold hover:underline"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
                    Email
                  </h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 block font-display text-xl font-medium text-white hover:text-gold"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-background"
              >
                WhatsApp Us
              </a>
            </div>
          </FadeUp>

          <div className="relative min-h-[300px] lg:col-span-3">
            <iframe
              title="Tana Event Center location — Google Maps"
              src={siteConfig.mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
