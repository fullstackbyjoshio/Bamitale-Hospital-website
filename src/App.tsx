import { Routes, Route } from "react-router";
import { SEO } from "@/components/SEO";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { CookieBanner } from "@/components/CookieBanner";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <>
      <SEO
        title="Bamitale Hospital | Best Private Hospital in Sagamu, Ogun State"
        description="Best private hospital in Sagamu, Ogun State. Bamitale offers 24/7 emergency care, maternity, surgery, lab, ultrasound & specialist services. Book online or call 0707 191 9154."
        canonical="https://bamitalehospital.com/"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <FloatingCallButton />
      <CookieBanner />
    </>
  );
}