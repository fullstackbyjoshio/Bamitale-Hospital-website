import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { TextReveal } from "@/components/TextReveal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] md:h-[72px]">
            {/* Logo — uses smaller bam-logo-sm.webp */}
            <a href="#home" className="flex-shrink-0">
              <img
                src="/images/bam-logo-sm.webp"
                alt="Bamitale Hospital"
                width={101}
                height={48}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-bamDark font-medium text-sm hover:text-bamBlue transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-bamBlue transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:07071919154"
                className="flex items-center gap-2 text-bamBlue hover:text-bamSky transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                0707 191 9154
              </a>
              <a
                href="#booking"
                className="bg-bamGreen hover:bg-emerald-600 text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <TextReveal
                  text="Book Appointment"
                  as="span"
                  fontSize="0.875rem"
                  color="#FFFFFF"
                  hoverColor="#FFFFFF"
                />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-bamDark hover:text-bamBlue transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <img
                    src="/images/bam-logo-sm.webp"
                    alt="Bamitale Hospital"
                    width={101}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-auto object-contain"
                  />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-bamDark hover:text-bamBlue transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-semibold text-bamDark hover:text-bamBlue py-3 border-b border-gray-100 transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 space-y-4">
                  <a
                    href="tel:07071919154"
                    className="flex items-center justify-center gap-2 text-bamBlue font-medium py-3"
                  >
                    <Phone className="w-5 h-5" />
                    0707 191 9154
                  </a>
                  <a
                    href="#booking"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center bg-bamGreen hover:bg-emerald-600 text-white font-bold py-3.5 rounded-full transition-all"
                  >
                    <TextReveal
                      text="Book Appointment"
                      as="span"
                      fontSize="1rem"
                      color="#FFFFFF"
                      hoverColor="#FFFFFF"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}