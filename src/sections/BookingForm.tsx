import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Calendar,
  Phone,
  MapPin,
  Clock,
  User,
  FileText,
  Send,
  MessageCircle,
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
  patientType: "new" | "returning";
  department: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  consent: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  patientType: "new",
  department: "",
  preferredDate: "",
  preferredTime: "",
  reason: "",
  consent: false,
};

const stepLabels = ["Personal Info", "Appointment", "Review", "Confirm"];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgnbgel";

export function BookingForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [preferredDept, setPreferredDept] = useCookie("preferredDept", "");

  // Pre-select last department on mount
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

  const canProceed = () => {
    switch (step) {
      case 0:
        return formData.fullName && formData.email && formData.phone;
      case 1:
        return (
          formData.department &&
          formData.preferredDate &&
          formData.preferredTime &&
          formData.reason
        );
      case 2:
        return formData.consent;
      default:
        return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          email: formData.email,
          phone: formData.phone,
          patientType: formData.patientType,
          department: formData.department,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          reason: formData.reason,
          _subject: `New Appointment: ${formData.fullName} — ${formData.department}`,
          _template: "table",
          _replyto: formData.email,
          _fromname: "Bamitale Hospital",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData(initialFormData);
        setStep(0);
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const direction = 1;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
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
              onClick={() => {
                setSubmitted(false);
                setStep(0);
              }}
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
            Fill out the form below and our team will contact you to confirm your appointment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between mb-2">
                {stepLabels.map((label, i) => (
                  <button
                    key={label}
                    onClick={() => i < step && setStep(i)}
                    disabled={i >= step}
                    className={`flex flex-col items-center gap-1 transition-colors ${
                      i < step
                        ? "text-bamGreen cursor-pointer"
                        : i === step
                        ? "text-bamBlue"
                        : "text-gray-300"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        i < step
                          ? "bg-bamGreen text-white"
                          : i === step
                          ? "bg-bamBlue text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {i < step ? <Check className="w-4 h-4" /> : i + 1}
                    </div>
                    <span className="text-[10px] font-medium hidden sm:block">
                      {label}
                    </span>
                  </button>
                ))}
              </div>
              <div className="relative h-1.5 bg-gray-100 rounded-full mb-6">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-bamGreen rounded-full"
                  initial={false}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="px-6 pb-6 min-h-[360px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  {step === 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <User className="w-5 h-5 text-bamSky" />
                        <h3 className="font-bold text-bamDark text-lg">
                          Personal Information
                        </h3>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name *"
                          required
                          value={formData.fullName}
                          onChange={(e) => updateField("fullName", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          required
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm"
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          required
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm"
                        />
                        <select
                          name="patientType"
                          aria-label="Patient type"
                          value={formData.patientType}
                          onChange={(e) =>
                            updateField("patientType", e.target.value as "new" | "returning")
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm"
                        >
                          <option value="new">New Patient</option>
                          <option value="returning">Returning Patient</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-5 h-5 text-bamSky" />
                        <h3 className="font-bold text-bamDark text-lg">
                          Appointment Details
                        </h3>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <select
                          name="department"
                          aria-label="Select department"
                          required
                          value={formData.department}
                          onChange={handleDeptChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm sm:col-span-2"
                        >
                          <option value="">Select Department *</option>
                          {departments.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                        <input
                          type="date"
                          name="preferredDate"
                          required
                          value={formData.preferredDate}
                          onChange={(e) =>
                            updateField("preferredDate", e.target.value)
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm"
                        />
                        <select
                          name="preferredTime"
                          aria-label="Preferred time"
                          required
                          value={formData.preferredTime}
                          onChange={(e) =>
                            updateField("preferredTime", e.target.value)
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm"
                        >
                          <option value="">Preferred Time *</option>
                          {timeSlots.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        <textarea
                          name="reason"
                          placeholder="Reason for Visit * (briefly describe your symptoms or concern)"
                          required
                          value={formData.reason}
                          onChange={(e) => updateField("reason", e.target.value)}
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bamSky focus:ring-2 focus:ring-bamSky/20 outline-none transition-all text-sm sm:col-span-2 resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <FileText className="w-5 h-5 text-bamSky" />
                        <h3 className="font-bold text-bamDark text-lg">
                          Review Your Information
                        </h3>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 space-y-3 text-sm">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          <ReviewItem label="Name" value={formData.fullName} />
                          <ReviewItem label="Email" value={formData.email} />
                          <ReviewItem label="Phone" value={formData.phone} />
                          <ReviewItem
                            label="Patient Type"
                            value={formData.patientType === "new" ? "New" : "Returning"}
                          />
                          <ReviewItem
                            label="Department"
                            value={formData.department}
                          />
                          <ReviewItem
                            label="Date"
                            value={formData.preferredDate}
                          />
                          <ReviewItem
                            label="Time"
                            value={formData.preferredTime}
                          />
                          <ReviewItem
                            label="Reason"
                            value={formData.reason}
                          />
                        </div>
                      </div>

                      <label className="flex items-start gap-3 p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => updateField("consent", e.target.checked)}
                          className="w-5 h-5 mt-0.5 rounded border-gray-300 text-bamGreen focus:ring-bamGreen"
                          required
                        />
                        <span className="text-sm text-bamGray leading-relaxed">
                          I consent to Bamitale Hospital collecting and processing my personal information for the purpose of scheduling this appointment. I understand my data will be handled in accordance with the hospital's privacy policy.
                        </span>
                      </label>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 rounded-full bg-bamGreen/10 flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-bamGreen" />
                      </div>
                      <h3 className="font-bold text-bamDark text-xl mb-3">
                        Ready to Submit?
                      </h3>
                      <p className="text-bamGray mb-6">
                        Click the button below to send your appointment request to our team.
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center gap-2 bg-bamGreen hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <MessageCircle className="w-5 h-5" />
                            Submit Appointment
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {step < 3 && (
                <div className="pt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                      step === 0
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-bamGray hover:bg-gray-100"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.min(3, s + 1))}
                    disabled={!canProceed()}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                      canProceed()
                        ? "bg-bamBlue hover:bg-bamSky text-white shadow-md hover:shadow-lg"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {step === 2 ? "Confirm" : "Next"}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
              {step === 3 && (
                <div className="pt-6 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-bamGray hover:bg-gray-100 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Go Back
                  </button>
                </div>
              )}
            </form>
          </motion.div>

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

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="col-span-2 sm:col-span-1">
      <span className="text-gray-400 text-xs block">{label}</span>
      <span className="text-bamDark font-medium text-sm">{value}</span>
    </div>
  );
}