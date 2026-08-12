import { lazy, Suspense } from "react";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { AreasWeServe } from "@/sections/AreasWeServe";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { FAQ } from "@/sections/FAQ";

// Lazy-load everything below the fold
const Services = lazy(() => import("@/sections/Services").then((m) => ({ default: m.Services })));
const Testimonials = lazy(() => import("@/sections/Testimonials").then((m) => ({ default: m.Testimonials })));
const Gallery = lazy(() => import("@/sections/Gallery").then((m) => ({ default: m.Gallery })));
const BookingForm = lazy(() => import("@/sections/BookingForm").then((m) => ({ default: m.BookingForm })));
const Contact = lazy(() => import("@/sections/Contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("@/sections/Footer").then((m) => ({ default: m.Footer })));

// Skeleton fallback — mimics section height so no layout shift
function SectionSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full bg-gray-50 animate-pulse ${className}`} aria-hidden="true" />
  );
}

export default function Home() {
  return (
    <main className="relative">
      {/* Above the fold — load immediately */}
      <Navbar />
      <Hero />
      <About />
      <AreasWeServe />
      <WhyChooseUs />
      <FAQ />
      {/* Below the fold — lazy loaded */}
      <Suspense fallback={<SectionSkeleton className="min-h-[500px]" />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionSkeleton className="min-h-[400px]" />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionSkeleton className="min-h-[600px]" />}>
        <Gallery />
      </Suspense>

      <Suspense fallback={<SectionSkeleton className="min-h-[500px]" />}>
        <BookingForm />
      </Suspense>

      <Suspense fallback={<SectionSkeleton className="min-h-[400px]" />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<SectionSkeleton className="min-h-[300px]" />}>
        <Footer />
      </Suspense>
    </main>
  );
}