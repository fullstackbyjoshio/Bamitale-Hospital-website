export default function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-bamBlue mb-2">
          Privacy Policy
        </h1>
        <p className="text-bamGray text-sm mb-8">Last updated: August 12, 2026</p>

        <div className="prose prose-blue max-w-none text-bamGray leading-relaxed space-y-6">
          <p>
            Bamitale Hospital ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, store, and protect your personal 
            information when you use our website and services.
          </p>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">1. Information We Collect</h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and patient type (new or returning) submitted through our appointment booking form.</li>
            <li><strong>Health Information:</strong> Department preference, appointment date, time, and reason for visit (symptoms or concerns).</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies for website analytics and performance.</li>
          </ul>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To schedule and confirm appointments</li>
            <li>To contact you regarding your appointment or follow-up care</li>
            <li>To improve our website and services</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">3. Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal data against unauthorized access, alteration, disclosure, or destruction. 
            Your data is stored securely and accessed only by authorized medical and administrative staff.
          </p>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">4. Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience and remember your preferences 
            (such as your last selected department). You can manage cookie preferences through 
            your browser settings or our cookie consent banner.
          </p>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">5. Your Rights</h2>
          <p>Under the Nigeria Data Protection Regulation (NDPR), you have the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent for data processing</li>
            <li>Lodge a complaint with the Nigeria Data Protection Bureau (NDPB)</li>
          </ul>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">6. Third-Party Services</h2>
          <p>
            We use Formspree for appointment form submissions and may use Google Analytics 
            for website traffic analysis. These services have their own privacy policies and 
            data handling practices.
          </p>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to exercise your data 
            protection rights, please contact us:
          </p>
          <div className="bg-bamLight rounded-xl p-4 mt-4">
            <p className="font-semibold text-bamDark">Bamitale Hospital</p>
            <p>3 Folarin St, Makun, Sagamu 121102, Ogun State</p>
            <p>Phone: <a href="tel:07071919154" className="text-bamBlue hover:underline">0707 191 9154</a></p>
            <p>WhatsApp: <a href="https://wa.me/2347071919154" className="text-bamBlue hover:underline">+234 707 191 9154</a></p>
          </div>

          <p className="text-sm text-bamGray mt-8 pt-8 border-t">
            <em>Note: This privacy policy is provided for informational purposes. For specific legal advice regarding healthcare data compliance in Nigeria, please consult a qualified legal professional.</em>
          </p>
        </div>
      </div>
    </div>
  );
}