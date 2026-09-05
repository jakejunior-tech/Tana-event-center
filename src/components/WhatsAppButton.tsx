"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

const message = `Hello Tana Event Center, I would like to make an enquiry about booking the venue.`;

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Tana on WhatsApp"
      className="group fixed bottom-24 right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-1 pr-1 text-white shadow-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] sm:bottom-6 sm:right-6 sm:pr-5"
    >
      <span className="flex h-12 w-12 items-center justify-center">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">
        Chat with Tana on WhatsApp
      </span>
    </a>
  );
}

export function MobileBookButton() {
  return (
    <a
      href="#booking"
      className="fixed inset-x-4 bottom-5 z-40 rounded-full bg-gold py-3.5 text-center text-sm font-bold uppercase tracking-widest text-background shadow-lg shadow-gold/30 sm:hidden"
    >
      Book Tana
    </a>
  );
}
