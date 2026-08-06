import React, { useState, useRef } from 'react';
import { Mail, Phone, AlertCircle, ExternalLink, CheckCircle2 } from 'lucide-react';
import { companyConfig } from '../../config/companyConfig';

export const ContactFormSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [enquiryType, setEnquiryType] = useState('Construction Contracting');
  const [projectLocation, setProjectLocation] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPrepared, setIsPrepared] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  // Field refs for focus management
  const fullNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const enquiryTypeRef = useRef<HTMLSelectElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Full Name is required (minimum 2 characters).';
    }

    const cleanPhone = phone.trim().replace(/[\s-]/g, '');
    const indianPhoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
    if (!phone.trim()) {
      errs.phone = 'Phone Number is required.';
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number (e.g. +91 9833706666).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!emailRegex.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!enquiryType) {
      errs.enquiryType = 'Please select an Enquiry Type.';
    }

    if (!projectLocation.trim()) {
      errs.projectLocation = 'Project Location is required.';
    }

    if (!message.trim() || message.trim().length < 20) {
      errs.message = 'Please describe your requirement (minimum 20 characters).';
    }

    if (!consent) {
      errs.consent = 'You must agree to the data usage terms to proceed.';
    }

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      // Focus first invalid field
      if (errs.fullName && fullNameRef.current) fullNameRef.current.focus();
      else if (errs.phone && phoneRef.current) phoneRef.current.focus();
      else if (errs.email && emailRef.current) emailRef.current.focus();
      else if (errs.enquiryType && enquiryTypeRef.current) enquiryTypeRef.current.focus();
      else if (errs.projectLocation && locationRef.current) locationRef.current.focus();
      else if (errs.message && messageRef.current) messageRef.current.focus();
      else if (errs.consent && consentRef.current) consentRef.current.focus();

      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct structured mailto link
    const subject = `Website Enquiry – ${enquiryType} – ${fullName.trim()}`;
    const bodyLines = [
      `Enquiry Details:`,
      `---------------------------------`,
      `Full Name: ${fullName.trim()}`,
      `Company Name: ${companyName.trim() || 'N/A'}`,
      `Phone: ${phone.trim()}`,
      `Email: ${email.trim()}`,
      `Enquiry Type: ${enquiryType}`,
      `Project Location: ${projectLocation.trim()}`,
      `---------------------------------`,
      `Message / Scope:`,
      `${message.trim()}`
    ];

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(bodyLines.join('\n'));
    const url = `mailto:${companyConfig.email}?subject=${encodedSubject}&body=${encodedBody}`;

    setMailtoUrl(url);
    setIsPrepared(true);

    // Open mailto window directly
    window.location.href = url;
  };

  return (
    <section className="py-20 sm:py-28 bg-[#EADBC8] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto bg-white rounded-[24px] border border-[#E8DDD0] p-7 sm:p-12 shadow-[0_20px_40px_rgba(61,53,45,0.06)] space-y-6">
          
          <div className="space-y-2 border-b border-[#E8DDD0] pb-6">
            <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
              DIRECTORY ENQUIRY FORM
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
              Send an Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5E4E] font-body">
              Fill in your enquiry details to prepare an email request to Chitrani Construction.
            </p>
          </div>

          {isPrepared ? (
            <div className="p-6 sm:p-8 rounded-[16px] bg-[#E8F4EA] border border-[#A5D6A7] text-[#2E7D32] space-y-4 font-body">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-[#2E7D32] shrink-0" />
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#2E7D32]">Enquiry Prepared</h3>
                  <p className="text-xs text-[#2E7D32]">
                    Your email client should open automatically. If it did not open, click the button below to complete sending.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-[12px] border border-[#A5D6A7] text-xs text-[#3D352D] space-y-1">
                <div><strong>Enquiry Type:</strong> {enquiryType}</div>
                <div><strong>Name:</strong> {fullName}</div>
                <div><strong>Project Location:</strong> {projectLocation}</div>
                <div><strong>Email Target:</strong> {companyConfig.email}</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={mailtoUrl}
                  className="px-6 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                  <span>Open Email to Send Enquiry</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsPrepared(false)}
                  className="px-6 py-3.5 rounded-[12px] bg-white border border-[#D8CCBC] text-[#3D352D] hover:bg-[#F5EEE5] font-heading text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Edit Enquiry Details
                </button>
              </div>

              <p className="text-[11px] text-[#6B5E4E] italic pt-2">
                Your email application will open with the enquiry details prepared. Review and send the email to complete your enquiry.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Error Summary */}
              {Object.keys(errors).length > 0 && (
                <div 
                  role="alert" 
                  tabIndex={-1}
                  className="p-4 rounded-[12px] bg-[#FDECEC] border border-[#B42318] text-xs text-[#B42318] flex items-start gap-3 font-body"
                >
                  <AlertCircle className="w-5 h-5 text-[#B42318] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-sm">Please correct the following errors before submitting:</strong>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      {Object.values(errors).map((err, idx) => (
                        <li key={idx}>{err}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Full Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-fullname" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Full Name <span className="text-[#C96F1B]">*</span>
                  </label>
                  <input
                    ref={fullNameRef}
                    id="contact-fullname"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? "err-fullname" : undefined}
                    className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                      errors.fullName ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                    }`}
                  />
                  {errors.fullName && (
                    <p id="err-fullname" className="text-[11px] text-[#B42318] mt-1 font-body flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-[#B42318]" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Company Name (Optional)
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    autoComplete="organization"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Infrastructure Developers"
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Phone Number <span className="text-[#C96F1B]">*</span>
                  </label>
                  <input
                    ref={phoneRef}
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 9833706666"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "err-phone" : undefined}
                    className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                      errors.phone ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                    }`}
                  />
                  {errors.phone && (
                    <p id="err-phone" className="text-[11px] text-[#B42318] mt-1 font-body flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-[#B42318]" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Email Address <span className="text-[#C96F1B]">*</span>
                  </label>
                  <input
                    ref={emailRef}
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@apexinfra.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                    className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                      errors.email ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                    }`}
                  />
                  {errors.email && (
                    <p id="err-email" className="text-[11px] text-[#B42318] mt-1 font-body flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-[#B42318]" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Enquiry Type & Project Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-enquiry-type" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Enquiry Type <span className="text-[#C96F1B]">*</span>
                  </label>
                  <select
                    ref={enquiryTypeRef}
                    id="contact-enquiry-type"
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    aria-invalid={!!errors.enquiryType}
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                  >
                    <option value="Construction Contracting">Construction Contracting</option>
                    <option value="Concrete Boom Placer Rental">Concrete Boom Placer Rental</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-location" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Project Location <span className="text-[#C96F1B]">*</span>
                  </label>
                  <input
                    ref={locationRef}
                    id="contact-location"
                    type="text"
                    autoComplete="street-address"
                    value={projectLocation}
                    onChange={(e) => setProjectLocation(e.target.value)}
                    placeholder="e.g. Andheri East, Mumbai"
                    aria-invalid={!!errors.projectLocation}
                    aria-describedby={errors.projectLocation ? "err-location" : undefined}
                    className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                      errors.projectLocation ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                    }`}
                  />
                  {errors.projectLocation && (
                    <p id="err-location" className="text-[11px] text-[#B42318] mt-1 font-body flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-[#B42318]" />
                      <span>{errors.projectLocation}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                  Message / Project Scope <span className="text-[#C96F1B]">*</span>
                </label>
                <textarea
                  ref={messageRef}
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide details about your project site, concrete placement scope, schedule..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-message" : undefined}
                  className={`w-full min-h-[130px] p-3.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all resize-y ${
                    errors.message ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                  }`}
                />
                {errors.message && (
                  <p id="err-message" className="text-[11px] text-[#B42318] mt-1 font-body flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-[#B42318]" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    ref={consentRef}
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? "err-consent" : undefined}
                    className="w-4 h-4 rounded-xs border-[#D8CCBC] text-[#C96F1B] focus:ring-[#C96F1B] mt-0.5"
                  />
                  <span className="text-xs text-[#6B5E4E] font-body leading-tight">
                    I agree that Chitrani Construction may use the information provided to respond to this enquiry.
                  </span>
                </label>
                {errors.consent && (
                  <p id="err-consent" className="text-[11px] text-[#B42318] mt-1 font-body flex items-center gap-1 pl-7">
                    <AlertCircle className="w-3 h-3 text-[#B42318]" />
                    <span>{errors.consent}</span>
                  </p>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                  <span>Open Email to Send Enquiry</span>
                </button>
                <p className="text-[11px] text-[#9D9287] font-body text-center mt-2">
                  Your email application will open with the enquiry details prepared. Review and send the email to complete your enquiry.
                </p>
              </div>

              {/* Direct Alternatives */}
              <div className="pt-4 border-t border-[#E8DDD0] text-center text-xs text-[#6B5E4E] font-body">
                <span>Prefer direct contact? Call us at </span>
                <a href={`tel:${companyConfig.phoneRaw}`} className="font-semibold text-[#3D352D] underline hover:text-[#C96F1B]">
                  {companyConfig.phone}
                </a>
                <span> or email </span>
                <a href={`mailto:${companyConfig.email}`} className="font-semibold text-[#3D352D] underline hover:text-[#C96F1B]">
                  {companyConfig.email}
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
