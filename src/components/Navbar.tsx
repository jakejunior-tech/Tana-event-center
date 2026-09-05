"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Venue", href: "#venue" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace("#", "");
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
    e.preventDefault();
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="flex flex-col leading-none"
        >
          <span className="flex items-center gap-1.5">
            <span className="font-sans text-xl font-bold tracking-[0.25em] text-white">
              TANA
            </span>
            <span className="h-1 w-1 rounded-full bg-gold" />
          </span>
          <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.45em] text-gold">
            Event Center
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-sm font-medium text-white/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#booking"
            onClick={(e) => scrollTo(e, "#booking")}
            className="hidden rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-background transition-all hover:bg-gold-light hover:shadow-[0_0_25px_rgba(201,168,106,0.4)] sm:inline-block"
          >
            BOOK NOW
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={(e) => scrollTo(e, "#booking")}
                className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-base font-semibold text-background"
              >
                BOOK NOW
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export const NAV_WHATSAPP = () => null;
export const NAV_PHONE = siteConfig.phoneDisplay;
