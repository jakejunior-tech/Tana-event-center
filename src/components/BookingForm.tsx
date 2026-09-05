"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import { FadeUp, SectionHeading } from "./motion";
import { siteConfig } from "@/data/site";

const eventTypes = [
  "Wedding",
  "Birthday",
  "Conference",
  "Corporate",
  "Concert",
  "Other",
];

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-gold focus:bg-white/10";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [lastUrl, setLastUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    guests: "",
    date: "",
    message: "",
  });

  const update = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Hello Tana Event Center, I would like to make an enquiry about booking the venue.",
      "",
      `Name: ${form.name}`,
      `Phone / WhatsApp: ${form.phone}`,
      `Email: ${form.email}`,
      `Event type: ${form.eventType}`,
      `Expected guests: ${form.guests}`,
      `Preferred date: ${form.date}`,
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    setLastUrl(url);

    // popup-safe: try window.open, fall back to direct navigation
    const win = window.open(url, "_blank");
    if (!win || win.closed) {
      window.location.href = url;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section
      id="booking"
      className="relative overflow-hidden pt-24 pb-44 sm:pt-32 sm:pb-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              align="left"
              eyebrow="Plan Your Event"
              title={
                <>
                  Ready To Create{" "}
                  <span className="text-gold-gradient italic">Your Moment?</span>
                </>
              }
              description="Tell us about your occasion and our team will get back to you quickly. Send your enquiry and we'll take care of the rest."
            />

            <FadeUp delay={0.2} className="mt-8 space-y-4">
              {[
                "Personal check-in from our events team",
                "Tailored setup for your chosen occasion",
                "Flexible dates and guest arrangements",
              ].map((line) => (
                <div key={line} className="flex items-center gap-3 text-white/70">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {line}
                </div>
              ))}
            </FadeUp>

            <FadeUp delay={0.3} className="mt-10 hidden lg:block">
              <div className="space-y-2 border-l-2 border-gold pl-6 text-sm text-white/55">
                <p>Open for bookings — contact us to arrange your date.</p>
                <p className="text-white/70">
                  Call / WhatsApp:{" "}
                  <a
                    href={`tel:+${siteConfig.phoneInternational}`}
                    className="text-gold hover:underline"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-charcoal/60 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/70">Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Phone / WhatsApp
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="e.g. 0812 008 7578"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-white/70">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Event type
                  </label>
                  <select
                    required
                    value={form.eventType}
                    onChange={update("eventType")}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select an event
                    </option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t} className="bg-charcoal">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Expected guests
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={form.guests}
                    onChange={update("guests")}
                    placeholder="e.g. 150"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-white/70">
                    Preferred date
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={update("date")}
                    className={`${inputClass} [color-scheme:dark]`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-white/70">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us a little about your event..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-background transition-all hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,106,0.45)]"
              >
                {submitted ? "Opening WhatsApp..." : "Request Availability"}
                <Send className="h-4 w-4" />
              </button>
              {submitted && lastUrl && (
                <a
                  href={lastUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center text-sm font-semibold text-gold underline underline-offset-4 hover:text-gold-light"
                >
                  Didn't open? Tap here to chat on WhatsApp
                </a>
              )}
              <p className="mt-4 text-center text-xs text-white/40">
                Your enquiry opens in WhatsApp — no card or payment required to check
                availability.
              </p>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
