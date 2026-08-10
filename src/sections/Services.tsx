import { motion } from "framer-motion";
import {
  Stethoscope,
  Syringe,
  Baby,
  HeartPulse,
  UserRound,
  Bone,
  Ear,
  Waves,
  FlaskConical,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Internal Medicine",
    desc: "Comprehensive diagnosis and treatment of adult diseases by experienced physicians.",
  },
  {
    icon: Syringe,
    title: "General Surgery",
    desc: "Skilled surgical procedures with modern equipment and expert surgical teams.",
  },
  {
    icon: Baby,
    title: "Paediatric Consult",
    desc: "Specialized healthcare for infants, children, and adolescents in a caring environment.",
  },
  {
    icon: HeartPulse,
    title: "Cardiology",
    desc: "Heart health evaluations, ECG, and cardiac care from qualified specialists.",
  },
  {
    icon: UserRound,
    title: "OBS & Gynecology",
    desc: "Complete women's health services including antenatal care and delivery.",
  },
  {
    icon: Bone,
    title: "Orthopedic Consult",
    desc: "Expert care for bone, joint, and muscle conditions with modern treatment options.",
  },
  {
    icon: Ear,
    title: "GNT Consult",
    desc: "Ear, nose, and throat specialist consultations for all ENT conditions.",
  },
  {
    icon: Waves,
    title: "Ultrasound Imaging",
    desc: "Advanced ultrasound diagnostics for accurate imaging and diagnosis.",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    desc: "Comprehensive blood tests, urinalysis, and diagnostic investigations with fast results.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
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
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bamBlue mt-3 mb-4">
            Our Medical Services
          </h2>
          <p className="text-bamGray text-lg max-w-2xl mx-auto">
            Comprehensive care across multiple specialties to meet all your healthcare needs.
          </p>
        </motion.div>

        {/* Service Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-bamSky/10 flex items-center justify-center mb-5 group-hover:bg-bamBlue transition-colors duration-300">
                <service.icon className="w-7 h-7 text-bamSky group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-bamDark mb-2 group-hover:text-bamBlue transition-colors">
                {service.title}
              </h3>
              <p className="text-bamGray text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
