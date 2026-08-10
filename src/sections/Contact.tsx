import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { TextReveal } from "@/components/TextReveal";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value: "3 Folarin St, Makun, Sagamu 121102, Ogun State",
    href: "https://maps.google.com/?q=3+Folarin+St+Makun+Sagamu",
    color: "bg-bamBlue/10 text-bamBlue",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0707 191 9154",
    href: "tel:07071919154",
    color: "bg-bamSky/10 text-bamSky",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+2347071919154",
    href: "https://wa.me/2347071919154",
    color: "bg-bamGreen/10 text-bamGreen",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Open 24 Hours",
    href: null,
    color: "bg-bamRed/10 text-bamRed",
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-bamLight py-20 lg:py-28">
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
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bamBlue mt-3 mb-4">
            Contact & Location
          </h2>
          <p className="text-bamGray text-lg max-w-2xl mx-auto">
            Visit us anytime — we're open 24 hours a day, 7 days a week.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.5!2d3.6!3d6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJOIDPCsDM2JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bamitale Hospital Location"
              className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-bamGray font-medium">
                        {item.label}
                      </p>
                      <p className="font-semibold text-bamDark mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm">
                    <div
                      className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-bamGray font-medium">
                        {item.label}
                      </p>
                      <p className="font-semibold text-bamDark mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://maps.google.com/?q=3+Folarin+St+Makun+Sagamu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-bamBlue hover:bg-bamSky text-white font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <TextReveal
                  text="Get Directions"
                  as="span"
                  fontSize="0.875rem"
                  color="#FFFFFF"
                  hoverColor="#FFFFFF"
                />
              </a>
              <a
                href="tel:07071919154"
                className="flex-1 flex items-center justify-center gap-2 bg-bamGreen hover:bg-emerald-600 text-white font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-md"
              >
                <Phone className="w-4 h-4" />
                <TextReveal
                  text="Call Now"
                  as="span"
                  fontSize="0.875rem"
                  color="#FFFFFF"
                  hoverColor="#FFFFFF"
                />
              </a>
            </div>

            {/* Plus Code */}
            <div className="text-center pt-2">
              <p className="text-sm text-bamGray">
                Google Maps Plus Code:{" "}
                <span className="font-bold text-bamBlue">VJ2P+6V Sagamu</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
