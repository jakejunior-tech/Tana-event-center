import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Venue } from "@/components/Venue";
import { EventTypes } from "@/components/EventTypes";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { BookingForm } from "@/components/BookingForm";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Venue />
      <EventTypes />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Location />
      <Footer />
    </main>
  );
}
