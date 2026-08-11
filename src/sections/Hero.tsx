"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, Clock, Building2, Star, MapPin } from "lucide-react";
import { TextReveal } from "@/components/TextReveal";

const stats = [
  { icon: Building2, value: "9+", label: "Medical Services" },
  { icon: Clock, value: "24/7", label: "Emergency Care" },
  { icon: Star, value: "5.0", label: "Patient Rating" },
  { icon: MapPin, value: "Sagamu", label: "Ogun State" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white pt-[72px]"
    >
      <div className="flex flex-col sm:flex-row h-auto items-stretch min-h-[600px] lg:min-h-[700px]">

        {/* ─── LEFT: TEXT ─── */}
        <div className="relative z-10 w-full sm:w-[50%] lg:w-[55%] flex flex-col justify-center px-4 sm:px-6 lg:px-16 xl:px-20 py-8 sm:py-6 lg:py-10">

          {/* Emergency Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mb-3 lg:mb-4 inline-flex items-center gap-2 bg-bamRed/10 text-bamRed px-3 lg:px-4 py-1.5 lg:py-2 rounded-full w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-bamRed animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold">Open 24 Hours</span>
          </motion.div>

          {/* Headlines */}
          <div className="space-y-0 lg:space-y-1 mb-3 lg:mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.95] tracking-tight text-bamBlue"
            >
              BAMITALE
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.95] tracking-tight text-bamGreen"
            >
              HOSPITAL
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-bamDark mt-2 lg:mt-3"
            >
              Your Health, Our Priority
            </motion.p>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-bamGray text-sm sm:text-base lg:text-base max-w-[540px] mb-4 lg:mb-6 leading-relaxed border-l-4 border-bamGreen pl-3 lg:pl-4"
          >
            Built, staffed, and equipped for the diagnosis, treatment, and care
            of the sick and injured — 24 hours a day.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-row flex-wrap items-center gap-3 lg:gap-4 mb-4 lg:mb-6"
          >
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-bamGreen hover:bg-emerald-600 text-white font-bold px-5 lg:px-7 py-2.5 lg:py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base"
            >
              <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
              <TextReveal
                text="Book"
                as="span"
                fontSize="0.875rem"
                color="#FFFFFF"
                hoverColor="#FFFFFF"
              />
              <span className="hidden sm:inline ml-1">
                <TextReveal
                  text="Appointment"
                  as="span"
                  fontSize="0.875rem"
                  color="#FFFFFF"
                  hoverColor="#FFFFFF"
                />
              </span>
            </a>
            <a
              href="tel:07071919154"
              className="inline-flex items-center gap-2 text-bamBlue hover:text-bamSky font-semibold transition-colors text-sm lg:text-base"
            >
              <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>0707 191 9154</span>
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 gap-3 lg:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-2 lg:gap-3"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-bamSky/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-4 h-4 lg:w-5 lg:h-5 text-bamSky" />
                </div>
                <div>
                  <p className="font-bold text-bamBlue text-base lg:text-lg leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs lg:text-xs text-bamGray">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ─── RIGHT: HERO IMAGE ─── */}
        <div className="relative w-full sm:w-[50%] lg:w-[45%] h-[300px] sm:h-auto overflow-hidden bg-gray-100">

          {/* Curved divider */}
          <svg
            className="absolute top-0 bottom-0 left-0 w-[40px] sm:w-[60px] lg:w-[150px] z-20 hidden sm:block"
            viewBox="0 0 150 800"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M150,0 C50,200 0,400 60,600 C100,700 130,750 150,800 L0,800 L0,0Z"
              fill="white"
            />
          </svg>

          {/* Full-bleed image — LCP optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src="/images/hospital-exterior.webp"
              srcSet="/images/hospital-exterior-800w.webp 800w, /images/hospital-exterior.webp 1200w"
              sizes="(max-width: 1024px) 100vw, 50vw"
              width={1200}
              height={800}
              alt="Bamitale Hospital building exterior in Sagamu, Ogun State — 24/7 private healthcare facility"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
            {/* Subtle bottom gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Decorative Circles */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 lg:top-20 right-4 lg:right-20 w-10 lg:w-32 h-10 lg:h-32 rounded-full bg-white/10 z-10"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 lg:bottom-32 right-2 lg:right-10 w-6 lg:w-20 h-6 lg:h-20 rounded-full bg-white/20 z-10"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-1/3 w-5 lg:w-16 h-5 lg:h-16 rounded-full bg-white/15 z-10"
          />
        </div>
      </div>
    </section>
  );
}