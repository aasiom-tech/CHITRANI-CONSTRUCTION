import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { companyConfig } from '../../config/companyConfig';

/* Note: Legal pages should be reviewed by qualified legal counsel before final public release. */

export const TermsConditionsContent: React.FC = () => {
  const tocItems = [
    { id: 'terms-1', title: '1. Acceptance of Terms' },
    { id: 'terms-2', title: '2. Website Purpose' },
    { id: 'terms-3', title: '3. Information-Only Nature' },
    { id: 'terms-4', title: '4. Enquiries & Quotations' },
    { id: 'terms-5', title: '5. Construction Services' },
    { id: 'terms-6', title: '6. Equipment-Rental Enquiries' },
    { id: 'terms-7', title: '7. Availability & Scheduling' },
    { id: 'terms-8', title: '8. Pricing & Commercial Terms' },
    { id: 'terms-9', title: '9. Client Responsibilities' },
    { id: 'terms-10', title: '10. Intellectual Property' },
    { id: 'terms-11', title: '11. Acceptable Use' },
    { id: 'terms-12', title: '12. Third-Party Tools' },
    { id: 'terms-13', title: '13. Website Availability' },
    { id: 'terms-14', title: '14. Disclaimer' },
    { id: 'terms-15', title: '15. Limitation of Liability' },
    { id: 'terms-16', title: '16. Indemnity' },
    { id: 'terms-17', title: '17. Governing Law' },
    { id: 'terms-18', title: '18. Changes to Terms' },
    { id: 'terms-19', title: '19. Terms Contact' },
  ];

  return (
    <div className="bg-white text-[#3D352D] py-16 sm:py-24 border-b border-[#E8DDD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Date Display */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8DDD0]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#C96F1B]" />
            <span className="text-[#3D352D]">CONTRACTUAL RULES</span>
          </div>
          <span className="text-xs sm:text-sm font-specs font-semibold text-[#6B5E4E]">
            Last updated: 6 August 2026
          </span>
        </div>

        {/* Table of Contents Box */}
        <nav aria-label="Table of Contents" className="p-6 sm:p-8 bg-[#F5EEE5] rounded-[18px] border border-[#E8DDD0] space-y-3">
          <h2 className="font-heading font-semibold text-base text-[#3D352D] uppercase tracking-wider">
            Table of Contents
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-body">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className="text-[#6B5E4E] hover:text-[#C96F1B] hover:underline transition-colors block py-0.5"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 1. Acceptance of Terms */}
        <section id="terms-1" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            By using this website, visitors agree to these Terms and Conditions.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Visitors who do not agree should discontinue use of the website.
          </p>
        </section>

        {/* 2. Website Purpose */}
        <section id="terms-2" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            2. Website Purpose
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            The website provides general information about Chitrani Construction, construction-support capabilities, concrete boom placer rental, project information, contact methods and quotation requests.
          </p>
        </section>

        {/* 3. Information-Only Nature of Website Content */}
        <section id="terms-3" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            3. Information-Only Nature of Website Content
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Website content is provided for general information.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Specifications, availability, schedules, project requirements and commercial conditions must be confirmed through a written quotation, work order, rental agreement or other formal agreement.
          </p>
        </section>

        {/* 4. Enquiries and Quotation Requests */}
        <section id="terms-4" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            4. Enquiries and Quotation Requests
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Submitting an enquiry or opening a prepared email does not create:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#6B5E4E] font-body pl-2">
            <li>A contract</li>
            <li>A confirmed booking</li>
            <li>Equipment reservation</li>
            <li>Project acceptance</li>
            <li>Price commitment</li>
            <li>Start-date guarantee</li>
          </ul>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            A commercial relationship begins only after written terms are issued and accepted by authorised parties.
          </p>
        </section>

        {/* 5. Construction Services */}
        <section id="terms-5" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            5. Construction Services
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            The exact construction scope, responsibilities, materials, manpower, machinery, project schedule, payment terms and deliverables are defined in a written quotation, work order or contract.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Website descriptions are summaries and may not apply to every project.
          </p>
        </section>

        {/* 6. Equipment-Rental Enquiries */}
        <section id="terms-6" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            6. Equipment-Rental Enquiries
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            The website currently describes a Putzmeister M42-5 concrete boom placer with:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#6B5E4E] font-body pl-2 font-specs">
            <li>42-metre boom reach</li>
            <li>90 m³ capacity</li>
            <li>Operator and helper included</li>
            <li>One 12-hour shift</li>
            <li>26 working days per month</li>
            <li>Sundays excluded</li>
          </ul>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed pt-1">
            These details remain subject to written confirmation, equipment condition, site requirements, schedule and final commercial terms.
          </p>
        </section>

        {/* 7. Availability and Scheduling */}
        <section id="terms-7" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            7. Availability and Scheduling
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Equipment and service availability is subject to confirmation for the requested project period.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Requested dates are not reserved until confirmed in writing. Project or rental schedules may depend on:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#6B5E4E] font-body pl-2">
            <li>Site readiness</li>
            <li>Access</li>
            <li>Client arrangements</li>
            <li>Equipment condition</li>
            <li>Weather</li>
            <li>Regulatory requirements</li>
            <li>Operational factors</li>
            <li>Written commercial terms</li>
          </ul>
        </section>

        {/* 8. Pricing and Commercial Terms */}
        <section id="terms-8" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            8. Pricing and Commercial Terms
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Prices are not published as fixed website prices. Any quotation may include:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#6B5E4E] font-body pl-2">
            <li>Rental charges</li>
            <li>Taxes</li>
            <li>Mobilisation or shifting costs</li>
            <li>Fuel-related conditions</li>
            <li>Crew arrangements</li>
            <li>Supporting equipment</li>
            <li>Payment schedule</li>
            <li>Delay or standby terms</li>
            <li>Site-specific responsibilities</li>
          </ul>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed pt-1">
            The written quotation controls when it differs from the website summary.
          </p>
        </section>

        {/* 9. Client Responsibilities */}
        <section id="terms-9" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            9. Client Responsibilities
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Depending on the quotation or agreement, client responsibilities may include:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#6B5E4E] font-body pl-2">
            <li>Fuel</li>
            <li>AdBlue</li>
            <li>Operator accommodation</li>
            <li>Crew food and travel</li>
            <li>Site safety and security</li>
            <li>PPE</li>
            <li>Tools and tackles</li>
            <li>Internal shifting</li>
            <li>Supporting equipment</li>
            <li>Pipeline arrangements</li>
            <li>Site access and coordination</li>
          </ul>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed pt-1">
            Final responsibilities are confirmed only in writing.
          </p>
        </section>

        {/* 10. Intellectual Property */}
        <section id="terms-10" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            10. Intellectual Property
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Website text, branding, layout, graphics and original design elements are owned by or used with permission by Chitrani Construction.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Visitors may not copy or commercially reuse material without permission, except as allowed by applicable law.
          </p>
        </section>

        {/* 11. Acceptable Website Use */}
        <section id="terms-11" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            11. Acceptable Website Use
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Visitors must not:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#6B5E4E] font-body pl-2">
            <li>Attempt unauthorised access</li>
            <li>Upload malicious code</li>
            <li>Interfere with website operation</li>
            <li>Misuse forms</li>
            <li>Submit fraudulent information</li>
            <li>Impersonate another person or company</li>
            <li>Infringe intellectual-property rights</li>
          </ul>
        </section>

        {/* 12. Third-Party Tools */}
        <section id="terms-12" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            12. Third-Party Tools
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Please note:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#6B5E4E] font-body pl-2">
            <li>Email links may open third-party email applications</li>
            <li>Telephone links depend on the visitor’s device</li>
            <li>External services have separate terms</li>
            <li>Chitrani Construction is not responsible for third-party service availability</li>
          </ul>
        </section>

        {/* 13. Website Availability */}
        <section id="terms-13" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            13. Website Availability
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            The website may be updated, suspended or temporarily unavailable for maintenance, hosting issues or operational reasons.
          </p>
        </section>

        {/* 14. Disclaimer */}
        <section id="terms-14" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            14. Disclaimer
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Reasonable efforts are made to keep information accurate, but website content may be updated and should not replace a written commercial or contractual document.
          </p>
        </section>

        {/* 15. Limitation of Liability */}
        <section id="terms-15" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            15. Limitation of Liability
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            To the extent permitted by applicable law, Chitrani Construction is not responsible for indirect loss arising solely from reliance on general website information or interruption of website access.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Nothing in these terms excludes liability that cannot lawfully be excluded.
          </p>
        </section>

        {/* 16. Indemnity */}
        <section id="terms-16" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            16. Indemnity
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Visitors may be responsible for losses caused by unlawful misuse of the website or violation of these terms, to the extent permitted by applicable law.
          </p>
        </section>

        {/* 17. Governing Law */}
        <section id="terms-17" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            17. Governing Law
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            These terms are governed by the applicable laws of India.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Disputes are subject to courts with competent jurisdiction in Maharashtra, unless a written project or rental agreement specifies otherwise.
          </p>
        </section>

        {/* 18. Changes to Terms */}
        <section id="terms-18" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            18. Changes to Terms
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            The terms may be updated when website functionality, business processes or legal requirements change.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            The updated date indicates the latest published version.
          </p>
        </section>

        {/* 19. Terms Contact */}
        <section id="terms-19" className="space-y-4 scroll-mt-28 pt-4 border-t border-[#E8DDD0]">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D]">
            19. Terms Contact
          </h2>

          <div className="p-6 sm:p-8 bg-[#F5EEE5] rounded-[18px] border border-[#E8DDD0] space-y-4 font-body text-xs sm:text-sm text-[#3D352D]">
            <div className="font-heading font-bold text-base text-[#3D352D]">
              {companyConfig.name}
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C96F1B]" />
                <span>Email: <a href={`mailto:${companyConfig.email}`} className="font-semibold underline">{companyConfig.email}</a></span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C96F1B]" />
                <span>Phone: <a href={`tel:${companyConfig.phoneRaw}`} className="font-semibold underline">{companyConfig.phone}</a></span>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  <strong>Registered Office:</strong> {companyConfig.registeredOffice}
                </address>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DDD0] flex flex-wrap gap-4 text-xs font-heading font-semibold">
              <Link to="/privacy-policy" className="text-[#C96F1B] hover:underline flex items-center gap-1">
                <span>Privacy Policy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/contact" className="text-[#C96F1B] hover:underline flex items-center gap-1">
                <span>Contact Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/request-quote" className="text-[#C96F1B] hover:underline flex items-center gap-1">
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
