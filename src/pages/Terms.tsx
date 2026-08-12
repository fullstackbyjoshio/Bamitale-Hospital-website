export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-bamBlue mb-2">
          Terms & Conditions
        </h1>
        <p className="text-bamGray text-sm mb-8">Last updated: August 12, 2026</p>

        <div className="prose prose-blue max-w-none text-bamGray leading-relaxed space-y-6">
          <p>
            Welcome to the Bamitale Hospital website. By accessing or using this website, 
            you agree to be bound by these Terms and Conditions. If you do not agree with 
            any part of these terms, please do not use our website or services.
          </p>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">1. Medical Services</h2>
          <p>
            Bamitale Hospital provides general and specialist medical services including 
            emergency care, maternity services, surgery, laboratory diagnostics, ultrasound 
            imaging, and outpatient consultations. All services are subject to availability 
            and medical assessment.
          </p>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">2. Appointment Booking</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Online appointment requests are not confirmed until you receive communication from our staff.</li>
            <li>Please arrive at least 15 minutes before your scheduled appointment time.</li>
            <li>Cancellations should be made at least 24 hours in advance where possible.</li>
            <li>We reserve the right to reschedule appointments due to emergencies or unforeseen circumstances.</li>
          </ul>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">3. Emergency Services</h2>
          <p>
            For life-threatening emergencies, please call our emergency line or visit the 
            hospital immediately. Do not rely solely on online communication for urgent 
            medical situations. Our emergency services are available 24 hours a day, 
            7 days a week.
          </p>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">4. Limitation of Liability</h2>
          <p>
            While we strive to provide accurate and up-to-date information on this website, 
            Bamitale Hospital does not warrant that the information is complete, reliable, 
            or error-free. Medical information provided on this site is for general 
            informational purposes only and does not constitute medical advice, diagnosis, 
            or treatment. Always seek the advice of a qualified healthcare provider for 
            medical concerns.
          </p>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">5. Patient Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide accurate and complete medical history and personal information</li>
            <li>Follow prescribed treatment plans and medical advice</li>
            <li>Inform staff of any changes in condition or medication</li>
            <li>Respect hospital policies, staff, and other patients</li>
          </ul>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">6. Fees and Payments</h2>
          <p>
            Fees for services are payable as determined by the hospital. We accept various 
            payment methods including cash, bank transfer, and approved health insurance. 
            Prices are subject to change without prior notice.
          </p>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">7. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and design, is the 
            property of Bamitale Hospital and is protected by copyright laws. Unauthorized 
            use, reproduction, or distribution is prohibited.
          </p>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">8. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with 
            the laws of the Federal Republic of Nigeria. Any disputes arising from the use 
            of this website or our services shall be subject to the exclusive jurisdiction 
            of the courts of Ogun State, Nigeria.
          </p>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Changes 
            will be effective immediately upon posting to this page. Continued use of the 
            website constitutes acceptance of the revised terms.
          </p>

          <h2 className="text-xl font-bold text-bamDark mt-8 mb-3">10. Contact Information</h2>
          <div className="bg-bamLight rounded-xl p-4 mt-4">
            <p className="font-semibold text-bamDark">Bamitale Hospital</p>
            <p>3 Folarin St, Makun, Sagamu 121102, Ogun State</p>
            <p>Phone: <a href="tel:07071919154" className="text-bamBlue hover:underline">0707 191 9154</a></p>
          </div>

          <p className="text-sm text-bamGray mt-8 pt-8 border-t">
            <em>Note: These terms are provided for general guidance. For legal advice specific to your situation, please consult a qualified attorney.</em>
          </p>
        </div>
      </div>
    </div>
  );
}