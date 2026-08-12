"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function FloatingCallButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href="tel:07071919154"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group fixed bottom-6 right-6 z-50 overflow-hidden
        px-5 sm:px-6 py-3 sm:py-3.5 rounded-full
        bg-gradient-to-r from-bamGreen to-emerald-600
        hover:from-emerald-600 hover:to-emerald-700
        text-white font-bold text-sm sm:text-base
        shadow-2xl hover:shadow-emerald-500/30
        transition-all duration-300 ease-out
        transform active:scale-95
        border border-emerald-500/20
        focus:outline-none focus:ring-4 focus:ring-emerald-500/30
        flex items-center gap-2 sm:gap-3"
      aria-label="Call Bamitale Hospital now 0707 191 9154"
    >
      {/* Pulse ring behind */}
      <span className="absolute inset-0 rounded-full bg-bamGreen/30 animate-ping" />

      {/* Phone icon with hover swap animation */}
      <span className="relative flex items-center justify-center w-5 h-5">
        <motion.span
          initial={false}
          animate={isHovered ? { y: -18, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Phone className="w-5 h-5 text-white" />
        </motion.span>
        <motion.span
          initial={false}
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 18, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Phone className="w-5 h-5 text-white" />
        </motion.span>
      </span>

      <span className="relative transition-transform duration-300 ease-out group-hover:translate-x-1">
        Call Now
      </span>

      {/* Shine sweep effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>
    </motion.a>
  )
}