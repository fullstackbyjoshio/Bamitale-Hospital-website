import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Adebola Fashola",
    service: "OBS & Gynecology",
    quote:
      "I had my antenatal care and delivery at Bamitale Hospital, and the experience was exceptional. The gynecologists were patient, the nurses were attentive, and the facility was always clean. I felt safe every step of the way. I highly recommend them to every mother in Sagamu.",
    time: "3 months ago",
    rating: 5,
  },
  {
    name: "Mr. Chinedu Okafor",
    service: "General Surgery",
    quote:
      "After my appendicitis diagnosis, I was scared about surgery. The surgical team at Bamitale explained everything clearly and handled the procedure professionally. I was back on my feet within days. Their 24-hour service truly saved my life.",
    time: "5 months ago",
    rating: 5,
  },
  {
    name: "Mrs. Funke Adeyemi",
    service: "Paediatric Consult",
    quote:
      "When my son had a high fever at midnight, Bamitale Hospital was the only place open that could attend to us immediately. The paediatrician was kind, thorough, and reassured us throughout. As a mother, knowing they are open 24 hours gives me peace of mind.",
    time: "2 months ago",
    rating: 5,
  },
  {
    name: "Alhaji Ibrahim Bello",
    service: "Cardiology & Laboratory",
    quote:
      "I came in for a full cardiac check-up and laboratory tests. The results were ready faster than I expected, and the cardiologist took time to explain everything in detail. The staff treated me with dignity and respect. This is the best hospital in Makun, Sagamu.",
    time: "1 month ago",
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Testimonials() {
  return (
    <section className="bg-bamLight py-20 lg:py-28">
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bamBlue mt-3 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-bamGray text-lg max-w-2xl mx-auto">
            Real stories from real patients who trust us with their health.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-bamSky/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-bamDark leading-relaxed mb-6 text-[15px]">
                "{t.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-bold text-bamBlue">{t.name}</p>
                  <span className="inline-block mt-1 text-xs font-semibold text-bamGreen bg-bamGreen/10 px-3 py-1 rounded-full">
                    {t.service}
                  </span>
                </div>
                <span className="text-bamGray text-sm">{t.time}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
