import { motion } from "framer-motion";
import { Heart, Shield, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    desc: "Every decision we make puts your health and comfort first.",
  },
  {
    icon: Shield,
    title: "Quality Standards",
    desc: "We maintain the highest medical and hygiene standards.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Round-the-clock emergency and inpatient services.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Qualified specialists across multiple departments.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-bamLight py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-bamGreen font-bold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-bamBlue mt-3 mb-6 leading-tight">
              Comprehensive Healthcare<br />in Sagamu
            </h2>
            <div className="space-y-4 text-bamGray leading-relaxed">
              <p>
                Bamitale Hospital is a leading medical facility located at{" "}
                <strong className="text-bamDark">3 Folarin St, Makun, Sagamu 121102, Ogun State</strong>.
                We are built, staffed, and equipped for the diagnosis, treatment,
                and care of the sick and injured — serving our community 24 hours a day,
                7 days a week.
              </p>
              <p>
                Our mission is to provide accessible, high-quality healthcare to every
                patient who walks through our doors. From routine check-ups to emergency
                surgery, our dedicated team of medical professionals is here to ensure you
                receive the best possible care.
              </p>
              <p>
                We combine modern diagnostic equipment with compassionate service,
                offering everything from ultrasound imaging and laboratory services
                to specialized consultations in cardiology, orthopedics, paediatrics,
                and more.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-bamSky/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <f.icon className="w-4.5 h-4.5 text-bamSky" />
                  </div>
                  <div>
                    <p className="font-semibold text-bamDark text-sm">{f.title}</p>
                    <p className="text-bamGray text-xs mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-care.jpg"
                alt="Doctor caring for a young patient at Bamitale Hospital"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bamBlue/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-bamGreen/10 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-bamSky/10 -z-10" />

            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-4"
            >
              <p className="text-2xl font-extrabold text-bamBlue">9+</p>
              <p className="text-sm text-bamGray">Medical Departments</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
