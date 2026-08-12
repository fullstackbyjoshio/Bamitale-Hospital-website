import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock, Ambulance, Stethoscope, Baby, HeartPulse } from "lucide-react";

const serviceAreas = [
  "Sagamu",
  "Makun",
  "Ikenne",
  "Remo",
  "Ode Remo",
  "Ilara",
  "Ogun State",
];

const localServices = [
  {
    icon: Ambulance,
    title: "24/7 Emergency Care",
    desc: "Open round the clock for emergencies across Sagamu and surrounding towns.",
  },
  {
    icon: Stethoscope,
    title: "General Consultation",
    desc: "Walk-in and appointment-based care for residents of Ogun State.",
  },
  {
    icon: Baby,
    title: "Maternity & Antenatal",
    desc: "Trusted maternity hospital in Sagamu for mothers across Remo land.",
  },
  {
    icon: HeartPulse,
    title: "Specialist Services",
    desc: "Cardiology, orthopedics, gynecology, and paediatrics in Makun, Sagamu.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AreasWeServe() {
  return (
    <section id="areas-we-serve" className="bg-white py-20 lg:py-28">
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
            Service Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bamBlue mt-3 mb-4">
            Trusted Healthcare Across Ogun State
          </h2>
          <p className="text-bamGray text-lg max-w-3xl mx-auto leading-relaxed">
            Bamitale Hospital is the leading <strong className="text-bamDark">private hospital in Sagamu</strong>, 
            conveniently located at <strong className="text-bamDark">3 Folarin Street, Makun</strong>. 
            We provide <strong className="text-bamDark">24-hour emergency care, maternity services, 
            laboratory diagnostics, and specialist consultations</strong> to patients throughout 
            Sagamu, Remo, and across <strong className="text-bamDark">Ogun State</strong>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          {/* Left: Service Areas + NAP */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="bg-bamLight rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-bamBlue mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-bamSky" />
                Areas We Serve
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-bamDark border border-gray-100 shadow-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* NAP — Critical for Local SEO */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-bamSky flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-bamDark">Bamitale Hospital</p>
                    <p className="text-bamGray">3 Folarin St, Makun, Sagamu 121102, Ogun State, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-bamSky flex-shrink-0" />
                  <a href="tel:07071919154" className="font-semibold text-bamBlue hover:text-bamSky transition-colors">
                    0707 191 9154
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-bamRed flex-shrink-0" />
                  <p className="text-bamRed font-semibold">Open 24 Hours — 7 Days a Week</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=3+Folarin+St+Makun+Sagamu"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-bamBlue hover:bg-bamSky text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-[1.02] shadow-md w-full justify-center"
              >
                <Navigation className="w-4 h-4" />
                Get Directions to Bamitale Hospital
              </a>
            </motion.div>

            {/* Local Keywords Block */}
            <motion.div variants={itemVariants} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-bamDark mb-3">Looking for a hospital in Ogun State?</h4>
              <p className="text-bamGray text-sm leading-relaxed">
                Whether you need an <strong>emergency hospital in Sagamu</strong>, a 
                <strong> maternity hospital in Makun</strong>, or a 
                <strong> private hospital in Ogun State</strong> with modern laboratory and ultrasound services, 
                Bamitale Hospital is here for you. We are easily accessible from Ikenne, Remo, Ode Remo, and Ilara. 
                Our 24-hour emergency room ensures you get care when you need it most.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Services Grid + Map */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {localServices.map((service) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-bamSky/10 flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5 text-bamSky" />
                  </div>
                  <h3 className="font-bold text-bamDark text-sm mb-1">{service.title}</h3>
                  <p className="text-bamGray text-xs leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Embedded Map */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[280px] lg:h-[320px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7922.667944370684!2d3.6306263976974074!3d6.85051040223657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bdb000f0fa94f%3A0xaf096db929f05b6a!2sBamitale%20Hospital!5e0!3m2!1sen!2sng!4v1786371552451!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Bamitale Hospital Location in Makun, Sagamu"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            <p className="text-center text-xs text-bamGray">
              Google Maps Plus Code: <span className="font-bold text-bamBlue">VJ2P+6V Sagamu</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}