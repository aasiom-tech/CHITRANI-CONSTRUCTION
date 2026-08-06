import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { companyConfig } from '../../config/companyConfig';

/* Note: Legal pages should be reviewed by qualified legal counsel before final public release. */

export const PrivacyPolicyContent: React.FC = () => {
  const tocItems = [
    { id: 'section-1', title: '1. Privacy Introduction' },
    { id: 'section-2', title: '2. Information Users May Provide' },
    { id: 'section-3', title: '3. How Information Is Used' },
    { id: 'section-4', title: '4. Current Form & Email Behaviour' },
    { id: 'section-5', title: '5. Information Sharing' },
    { id: 'section-6', title: '6. Data Retention' },
    { id: 'section-7', title: '7. Security Considerations' },
    { id: 'section-8', title: '8. Cookies & Analytics' },
    { id: 'section-9', title: '9. Third-Party Services & Links' },
    { id: 'section-10', title: '10. User Choices & Requests' },
    { id: 'section-11', title: '11. Children’s Privacy' },
    { id: 'section-12', title: '12. Policy Changes' },
    { id: 'section-13', title: '13. Privacy Contact' },
  ];

  return (
    <div className="bg-white text-[#3D352D] py-16 sm:py-24 border-b border-[#E8DDD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Date Display */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8DDD0]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#C96F1B]" />
            <span className="text-[#3D352D]">LEGAL DOCUMENTATION</span>
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

        {/* 1. Introduction */}
        <section id="section-1" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            1. Privacy Introduction
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Chitrani Construction respects the privacy of website visitors and people who contact the business regarding construction, equipment rental or quotation requirements.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            This policy describes the categories of information a visitor may provide, how that information may be used and the choices available when communicating with the company.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            The website is intended primarily for business and project enquiries.
          </p>
        </section>

        {/* 2. Information Users May Provide */}
        <section id="section-2" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            2. Information Users May Provide
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            When communicating through our website or completing enquiry options, visitors may voluntarily provide information necessary to review construction or machinery requirements:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#6B5E4E] font-body pl-2">
            <li>Full name</li>
            <li>Company name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Enquiry type</li>
            <li>Project location</li>
            <li>Project type</li>
            <li>Preferred project or rental dates</li>
            <li>Expected duration</li>
            <li>Construction requirement details</li>
            <li>Equipment requirement details</li>
            <li>Site information</li>
            <li>Quote details</li>
            <li>Additional messages or instructions</li>
            <li>Consent confirmation</li>
          </ul>
        </section>

        {/* 3. How Information Is Used */}
        <section id="section-3" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            3. How Information Is Used
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Information provided by visitors is used solely for legitimate business operations and communication:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#6B5E4E] font-body pl-2">
            <li>To review an enquiry</li>
            <li>To understand project or equipment requirements</li>
            <li>To prepare or discuss quotations</li>
            <li>To communicate by phone or email</li>
            <li>To respond to business questions</li>
            <li>To maintain business correspondence where reasonably necessary</li>
            <li>To comply with applicable legal obligations</li>
          </ul>
          <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed pt-1 italic">
            Chitrani Construction does not use automated decision-making, profiling, marketing automation, data selling, or advertising targeting.
          </p>
        </section>

        {/* 4. Current Form and Email Behaviour */}
        <section id="section-4" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            4. Current Form and Email Behaviour
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            The current Contact and Request Quote forms prepare an email using the visitor’s own email application.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Information entered into the form is not sent to Chitrani Construction until the visitor reviews and sends the prepared email.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Once the email is sent, it may be processed and stored by:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#6B5E4E] font-body pl-2">
            <li>The visitor’s email provider</li>
            <li>Chitrani Construction’s email provider</li>
            <li>Communication systems used to respond to the enquiry</li>
          </ul>
        </section>

        {/* 5. Information Sharing */}
        <section id="section-5" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            5. Information Sharing
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Chitrani Construction does not sell personal information.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Information may be shared only when reasonably necessary with:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#6B5E4E] font-body pl-2">
            <li>Employees or authorised representatives handling the enquiry</li>
            <li>Service providers supporting email or website operation</li>
            <li>Professional advisers</li>
            <li>Authorities where required by applicable law</li>
            <li>Project parties where the visitor has requested or authorised relevant coordination</li>
          </ul>
        </section>

        {/* 6. Data Retention */}
        <section id="section-6" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            6. Data Retention
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Information communicated by email may be retained only for as long as reasonably necessary to respond to the enquiry, maintain business records, prepare or manage a quotation, meet contractual requirements or comply with applicable legal obligations.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Visitors may contact the company regarding correction or deletion requests, subject to legal and business-record requirements.
          </p>
        </section>

        {/* 7. Security Considerations */}
        <section id="section-7" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            7. Security Considerations
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Chitrani Construction uses reasonable organisational and technical precautions appropriate to the website and its communication methods.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            However, no website, internet transmission or email system can be guaranteed completely secure.
          </p>
        </section>

        {/* 8. Cookies and Analytics */}
        <section id="section-8" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            8. Cookies and Analytics
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            The current website does not intentionally use advertising cookies, behavioural tracking or third-party analytics.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Essential browser or hosting functionality may still process basic technical information required to deliver the website.
          </p>
        </section>

        {/* 9. Third-Party Services and Links */}
        <section id="section-9" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            9. Third-Party Services and Links
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            The website contains links to external email applications, phone dialers, and hosting infrastructure.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Third-party services operate under their own terms and privacy policies. Chitrani Construction is not responsible for the privacy practices or content of third-party platforms.
          </p>
        </section>

        {/* 10. User Choices and Requests */}
        <section id="section-10" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            10. User Choices and Requests
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Visitors may contact Chitrani Construction to:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#6B5E4E] font-body pl-2">
            <li>Ask what information was provided</li>
            <li>Request correction</li>
            <li>Request deletion where legally possible</li>
            <li>Withdraw an enquiry</li>
            <li>Ask privacy-related questions</li>
          </ul>
          <div className="pt-2 text-xs sm:text-sm text-[#3D352D] font-body">
            <strong>Contact Email:</strong> <a href={`mailto:${companyConfig.email}`} className="text-[#C96F1B] underline">{companyConfig.email}</a><br />
            <strong>Contact Phone:</strong> <a href={`tel:${companyConfig.phoneRaw}`} className="text-[#C96F1B] underline">{companyConfig.phone}</a>
          </div>
        </section>

        {/* 11. Children’s Privacy */}
        <section id="section-11" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            11. Children’s Privacy
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            The website is intended for business, construction and equipment-rental enquiries and is not directed at children.
          </p>
        </section>

        {/* 12. Policy Changes */}
        <section id="section-12" className="space-y-3 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D] border-b border-[#E8DDD0] pb-2">
            12. Policy Changes
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            This Privacy Policy may be updated when website functionality, communication processes or legal requirements change.
          </p>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            The updated date shown on the page will indicate the latest published version.
          </p>
        </section>

        {/* 13. Privacy Contact */}
        <section id="section-13" className="space-y-4 scroll-mt-28 pt-4 border-t border-[#E8DDD0]">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D]">
            13. Privacy Contact
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
              <Link to="/contact" className="text-[#C96F1B] hover:underline flex items-center gap-1">
                <span>Contact Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/terms-and-conditions" className="text-[#C96F1B] hover:underline flex items-center gap-1">
                <span>Terms and Conditions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
