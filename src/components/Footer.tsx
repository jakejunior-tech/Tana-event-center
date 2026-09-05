"use client";

import { MessageCircle, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

function Instagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Venue", href: "#venue" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal/70">
      <div className="mx-auto max-w-7xl px-5 pb-36 pt-16 sm:px-8 sm:pb-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div>
              <span className="font-sans text-2xl font-bold tracking-[0.25em] text-white">
                TANA
              </span>
              <span className="ml-2 align-middle text-sm font-semibold uppercase tracking-widest text-gold">
                Event Center
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              A premium event venue in the heart of GRA Phase II, Port Harcourt
              — perfect for weddings, celebrations, conferences and
              unforgettable occasions.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={`tel:+${siteConfig.phoneInternational}`}
                aria-label="Call"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold hover:text-gold"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Visit
            </h4>
            <p className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {siteConfig.addressLine1}
                <br />
                {siteConfig.addressLine2}
                <br />
                {siteConfig.addressLine3}
              </span>
            </p>
            <p className="mt-4 text-sm text-white/70">
              <a
                href={`tel:+${siteConfig.phoneInternational}`}
                className="text-gold hover:underline"
              >
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Tana Event Center. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Your moment. Our space.
          </p>
        </div>
      </div>
    </footer>
  );
}
