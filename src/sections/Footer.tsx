import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Heart,
} from "lucide-react";

const footerColumns = [
  {
    title: "About",
    links: [
      { label: "Home", href: "#home" },
      { label: "Our Mission", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Internal Medicine", href: "#services" },
      { label: "General Surgery", href: "#services" },
      { label: "Paediatrics", href: "#services" },
      { label: "Cardiology", href: "#services" },
      { label: "OBS/Gynecology", href: "#services" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Book Appointment", href: "#booking" },
      { label: "Find Us", href: "#contact" },
      { label: "Emergency Care", href: "tel:07071919154" },
      { label: "Laboratory", href: "#services" },
    ],
  },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com/bamitalehospital",
    label: "Facebook",
    color: "hover:bg-[#1877F2]",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/bamitalehospital",
    label: "Instagram",
    color: "hover:bg-[#E4405F]",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/2347071919154",
    label: "WhatsApp",
    color: "hover:bg-[#25D366]",
  },
];

export function Footer() {
  return (
    <footer className="relative">
      <motion.div
        initial={{ clipPath: "polygon(0% 15%, 50% 0%, 100% 15%, 100% 100%, 0% 100%)" }}
        whileInView={{ clipPath: "polygon(0% 0%, 50% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-br from-[#0B2A5E] via-[#0E3A7A] to-[#062040] relative overflow-hidden"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-bamSky/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-bamBlue/30 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0 text-center lg:text-left">
              <img
                src="/images/bam-logo-sm.webp"
                alt="Bamitale Hospital Logo"
                width={101}
                height={48}
                loading="lazy"
                decoding="async"
                className="h-14 w-auto object-contain mb-4 mx-auto lg:mx-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                Built, staffed, and equipped for the diagnosis, treatment, and
                care of the sick and injured — 24 hours a day.
              </p>
            </div>

            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4 border-b border-white/20 pb-2">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/80 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4 border-b border-white/20 pb-2">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-bamSky" />
                  <span>3 Folarin St, Makun, Sagamu 121102, Ogun State</span>
                </li>
                <li>
                  <a href="tel:07071919154" className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
                    <Phone className="w-4 h-4 flex-shrink-0 text-bamSky" />
                    0707 191 9154
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/2347071919154" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
                    <MessageCircle className="w-4 h-4 flex-shrink-0 text-bamGreen" />
                    +234 707 191 9154
                  </a>
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <Clock className="w-4 h-4 flex-shrink-0 text-bamRed" />
                  <span className="text-bamRed font-semibold">Open 24 Hours</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-extrabold text-white leading-none tracking-tight">
                BAMITALE HOSPITAL
              </h2>
              <div className="flex items-center justify-center gap-4 mt-4">
                <span className="h-px w-12 bg-white/30" />
                <p className="text-white/70 text-sm sm:text-base font-medium">
                  Your Health, Our Priority — 24/7 Care in Sagamu
                </p>
                <span className="h-px w-12 bg-white/30" />
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-white/15 flex items-center justify-center transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>

              <p className="text-white/60 text-sm flex items-center gap-1">
                &copy; {new Date().getFullYear()} Bamitale Hospital. Made by JclStudio with
                <Heart className="w-3.5 h-3.5 text-bamRed fill-bamRed" />
                in Sagamu, Ogun State
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}