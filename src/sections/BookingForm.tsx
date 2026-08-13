import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  MapPin,
  Clock,
  User,
  Mail,
  Send,
  MessageCircle,
  Check,
  Stethoscope,
  FileText,
} from "lucide-react";
import { useCookie } from "@/hooks/useCookie";

const departments = [
  "Internal Medicine",
  "General Surgery",
  "Paediatrics",
  "Cardiology",
  "OBS & Gynecology",
  "Orthopedics",
  "GNT",
  "Ultrasound Imaging",
  "Laboratory Services",
];

const timeSlots = [
  "Morning (8:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 4:00 PM)",
  "Evening (4:00 PM – 8:00 PM)",
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  department: "",
  preferredDate: "",
  preferredTime: "",
  reason: "",
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgnbgel";

export function BookingForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [preferredDept, setPreferredDept] = useCookie("preferredDept", "");

  // Pre-select last department
  useEffect(() => {
    if (preferredDept && !formData.department) {
      setFormData((prev) => ({ ...prev, department: preferredDept }));
    }
  }, [preferredDept]);

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDeptChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dept = e.target.value;
    updateField("department", dept);
    if (dept) setPreferredDept(dept, 30);
  };

  const canSubmit =
    formData.fullName &&
    formData.phone &&
    formData.department &&
    formData.preferredDate &&
    formData.preferredTime;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email || "Not provided",
          phone: formData.phone,
          department: formData.department,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          reason: formData.reason || "Not provided",
          _subject: `New Appointment: ${formData.fullName} — ${formData.department}`,
          _template: "table",
          _replyto: formData.email || "no-reply@bamitalehospital.com",
          _fromname: "Bamitale Hospital",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData(initialFormData);
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="booking" className="bg-bamLight py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-lg p-10"
          >
            <div className="w-20 h-20 rounded-full bg-bamGreen/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-bamGreen" />
            </div>
            <h3 className="text-2xl font-extrabold text-bamBlue mb-3">
              Appointment Request Sent!
            </h3>
            <p className="text-bamGray mb-2">
              We have received your details and will contact you shortly to confirm your appointment.
            </p>
            <p className="text-bamGray text-sm">
              A copy has also been sent to your email.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-bamSky hover:text-bamBlue font-semibold transition-colors"
            >
              Book Another Appointment
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="bg-bamLight py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-bamGreen font-bold text-sm uppercase tracking-widest">
            Book Now
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bamBlue mt-3 mb-4">
            Book an Appointment
          </h2>
          <p className="text-bamGray text-lg max-w-2xl mx-auto">
            Fill in your details below and our team will contact you to confirm.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
          {/* ─── SIMPLE 1-STEP FORM ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <div className="space-y-5">
                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-bamGray/50" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name *"
                      required
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm bg-gray-50/50"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-bamGray/50" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm bg-gray-50/50"
                    />
                  </div>
                </div>

                {/* Email (optional) */}
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-bamGray/50" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address (optional)"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm bg-gray-50/50"
                  />
                </div>

                {/* Department — click to select */}
                <div className="relative">
                  <Stethoscope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-bamGray/50" />
                  <select
                    name="department"
                    aria-label="Select department"
                    required
                    value={formData.department}
                    onChange={handleDeptChange}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm bg-gray-50/50 appearance-none cursor-pointer"
                  >
                    <option value="">Select Department *</option>
                    {departments.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time — click to select */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-bamGray/50" />
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={(e) =>
                        updateField("preferredDate", e.target.value)
                      }
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm bg-gray-50/50 cursor-pointer"
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-bamGray/50" />
                    <select
                      name="preferredTime"
                      aria-label="Preferred time"
                      required
                      value={formData.preferredTime}
                      onChange={(e) =>
                        updateField("preferredTime", e.target.value)
                      }
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm bg-gray-50/50 appearance-none cursor-pointer"
                    >
                      <option value="">Preferred Time *</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Reason — optional, short */}
                <div className="relative">
                  <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-bamGray/50" />
                  <textarea
                    name="reason"
                    placeholder="Brief reason for visit (optional)"
                    value={formData.reason}
                    onChange={(e) => updateField("reason", e.target.value)}
                    rows={2}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm bg-gray-50/50 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!canSubmit || submitting}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all ${
                    canSubmit && !submitting
                      ? "bg-bamGreen hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {submitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Appointment Request
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-bamGray">
                  * Required fields. Our team will call you to confirm your appointment.
                </p>
              </div>
            </form>
          </motion.div>

          {/* ─── QUICK CONTACT SIDEBAR ─── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-bold text-bamDark text-lg mb-5">
                Quick Contact
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:07071919154"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-bamSky/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-bamSky" />
                  </div>
                  <div>
                    <p className="text-xs text-bamGray">Phone</p>
                    <p className="font-semibold text-bamDark">0707 191 9154</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/2347071919154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-bamGreen/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-bamGreen" />
                  </div>
                  <div>
                    <p className="text-xs text-bamGray">WhatsApp</p>
                    <p className="font-semibold text-bamDark">
                      +234 707 191 9154
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3">
                  <div className="w-10 h-10 rounded-full bg-bamBlue/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-bamBlue" />
                  </div>
                  <div>
                    <p className="text-xs text-bamGray">Address</p>
                    <p className="font-semibold text-bamDark text-sm">
                      3 Folarin St, Makun, Sagamu 121102, Ogun State
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3">
                  <div className="w-10 h-10 rounded-full bg-bamRed/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-bamRed" />
                  </div>
                  <div>
                    <p className="text-xs text-bamGray">Hours</p>
                    <p className="font-semibold text-bamRed">Open 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}