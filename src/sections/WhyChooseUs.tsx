import { motion } from "framer-motion";
import { Clock, Users, Microscope, MapPin } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Emergency Care",
    desc: "Open round the clock for emergencies and inpatient care. Our dedicated team is always ready to respond to any medical situation.",
  },
  {
    icon: Users,
    title: "Expert Medical Team",
    desc: "Qualified specialists across multiple departments, bringing years of experience and compassion to every patient interaction.",
  },
  {
    icon: Microscope,
    title: "Modern Diagnostics",
    desc: "Ultrasound imaging and comprehensive laboratory services with state-of-the-art equipment for accurate and timely results.",
  },
  {
    icon: MapPin,
    title: "Trusted Location",
    desc: "Conveniently located at 3 Folarin St, Makun, Sagamu — easily accessible for residents throughout Ogun State.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function WhyChooseUs() {
  return (
    <section className="bg-gradient-dark py-20 lg:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-bamSky translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-bamSky font-bold text-sm uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
            Healthcare You Can Trust
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We combine medical excellence with compassionate care to deliver
            the best outcomes for our patients.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-bamSky/20 flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-bamSky" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
