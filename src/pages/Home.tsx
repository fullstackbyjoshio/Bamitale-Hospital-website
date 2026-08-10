import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Testimonials } from "@/sections/Testimonials";
import { Gallery } from "@/sections/Gallery";
import { BookingForm } from "@/sections/BookingForm";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  );
}