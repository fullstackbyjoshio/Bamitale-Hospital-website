"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is Bamitale Hospital open 24 hours in Sagamu?",
    answer:
      "Yes, Bamitale Hospital operates 24 hours a day, 7 days a week. Our emergency room is always staffed and ready to handle urgent medical cases at any time, including nights, weekends, and public holidays. We are located at 3 Folarin Street, Makun, Sagamu.",
  },
  {
    question: "Where is Bamitale Hospital located in Ogun State?",
    answer:
      "Bamitale Hospital is conveniently located at 3 Folarin Street, Makun, Sagamu 121102, Ogun State, Nigeria. We are easily accessible from Ikenne, Remo, Ode Remo, Ilara, and surrounding communities. You can find us on Google Maps using Plus Code: VJ2P+6V Sagamu.",
  },
  {
    question: "What medical services does Bamitale Hospital offer?",
    answer:
      "We offer comprehensive healthcare services including 24/7 emergency care, general surgery, maternity and antenatal care, paediatrics, cardiology, OBS and gynecology, orthopedics, ENT (GNT) consultations, ultrasound imaging, laboratory diagnostics, and pharmacy services.",
  },
  {
    question: "How do I book an appointment at Bamitale Hospital?",
    answer:
      "You can book an appointment online through our website at bamitalehospital.com by filling out the booking form. Alternatively, you can call us directly at 0707 191 9154 or send a WhatsApp message. Walk-in patients are also welcome during our 24-hour operating hours.",
  },
  {
    question: "Does Bamitale Hospital provide maternity and delivery services?",
    answer:
      "Yes, we have a dedicated maternity and antenatal unit with experienced gynecologists and midwives. We provide full antenatal care, safe delivery services, postnatal care, and neonatal support. Our maternity services are among the most trusted in Sagamu and across Ogun State.",
  },
  {
    question: "Is there an emergency room at Bamitale Hospital?",
    answer:
      "Absolutely. Our emergency room is open 24/7 with qualified emergency medicine physicians and nurses on duty around the clock. We handle trauma, acute illnesses, pediatric emergencies, and obstetric emergencies. Call our emergency line at 0707 191 9154.",
  },
  {
    question: "Does Bamitale Hospital have laboratory and ultrasound services?",
    answer:
      "Yes, we have a modern, fully equipped medical laboratory offering blood tests, urinalysis, and diagnostic investigations with fast results. We also provide advanced ultrasound imaging for pregnancy monitoring, abdominal scans, and other diagnostic needs.",
  },
  {
    question: "Which areas does Bamitale Hospital serve in Ogun State?",
    answer:
      "We primarily serve Sagamu, Makun, Ikenne, Remo, Ode Remo, and Ilara. Patients from all over Ogun State and neighboring regions visit Bamitale Hospital for our specialist consultations, emergency care, and maternity services.",
  },
];

const marqueeServices = [
  "24/7 Emergency Care",
  "General Surgery",
  "Maternity & Antenatal",
  "Paediatrics",
  "Cardiology",
  "OBS & Gynecology",
  "Orthopedics",
  "ENT Consult",
  "Ultrasound Imaging",
  "Laboratory Services",
  "Pharmacy",
  "Internal Medicine",
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-bamLight py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-bamGreen font-bold text-sm uppercase tracking-widest">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bamBlue mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-bamGray text-lg max-w-2xl mx-auto">
            Everything you need to know about Bamitale Hospital's services, location, and care.
          </p>
        </motion.div>

        {/* Two-column layout: Sticky Image + FAQ */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
          {/* Left: Sticky Image — white card so image blends, no gradient clash */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-24 self-start"
          >
            <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6">
              <img
                src="/images/faq-doctor.webp"
                alt="Bamitale Hospital doctor answering patient questions"
                width={500}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className={`bg-white rounded-2xl border transition-colors duration-300 ${
                    isOpen ? "border-bamSky/30 shadow-md" : "border-gray-100 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle
                        className={`w-5 h-5 flex-shrink-0 transition-colors ${
                          isOpen ? "text-bamSky" : "text-bamGray"
                        }`}
                      />
                      <span
                        className={`font-semibold text-base transition-colors ${
                          isOpen ? "text-bamBlue" : "text-bamDark"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-bamGray flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-bamSky" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0">
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-bamGray leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom: Horizontal scrolling services marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="text-center mb-6">
            <span className="text-bamGray text-sm font-medium uppercase tracking-wider">
              Our Medical Services
            </span>
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-bamLight to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-bamLight to-transparent z-10 pointer-events-none" />

          {/* Marquee track */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-4 py-2">
              {[...marqueeServices, ...marqueeServices].map((service, i) => (
                <div
                  key={`${service}-${i}`}
                  className="flex-shrink-0 px-5 py-2.5 bg-white rounded-full border border-gray-100 shadow-sm text-sm font-semibold text-bamDark whitespace-nowrap"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}