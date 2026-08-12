"use client";

import { useCookie } from "@/hooks/useCookie";
import { X } from "lucide-react";

export function CookieBanner() {
  const [consent, setConsent] = useCookie("cookieConsent", "");

  if (consent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-[100] p-4 sm:p-5 animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-bamGray leading-relaxed">
            We use cookies to improve your experience and analyze site traffic.
            By continuing, you agree to our use of cookies.{" "}
            <a
              href="/privacy/"
              className="text-bamBlue hover:text-bamSky underline underline-offset-2 font-medium"
            >
              Know more
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => setConsent("rejected", 30)}
            className="text-sm text-bamGray hover:text-bamDark font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={() => setConsent("accepted", 30)}
            className="bg-bamBlue hover:bg-bamSky text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-md"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}