import React, { useState, useRef } from 'react';
import { Mail, Phone, AlertCircle, ExternalLink, CheckCircle2, Building2 } from 'lucide-react';
import { companyConfig } from '../../config/companyConfig';

export type ContactEnquiryPayload = {
  name: string;
  company?: string;
  designation?: string;
  mobile: string;
  email: string;
  projectName?: string;
  projectLocation?: string;
  service: string;
  message: string;
};

export const ContactFormSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [designation, setDesignation] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectLocation, setProjectLocation] = useState('');
  const [service, setService] = useState('RCC Work');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPrepared, setIsPrepared] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  // Field refs for focus management
  const fullNameRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Full Name is required (minimum 2 characters).';
    }

    const cleanMobile = mobileNumber.trim().replace(/[\s-]/g, '');
    const indianMobileRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
    if (!mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile Number is required.';
    } else if (!indianMobileRegex.test(cleanMobile)) {
      errs.mobileNumber = 'Please enter a valid 10-digit Indian mobile number (e.g. +91 9833706666).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!emailRegex.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!service) {
      errs.service = 'Please select a Required Service.';
    }

    if (service !== 'Other' && service !== 'General Enquiry' && !projectLocation.trim()) {
      errs.projectLocation = 'Project Location is required for the selected service.';
    }

    if (!message.trim() || message.trim().length < 10) {
      errs.message = 'Please provide details about your requirement (minimum 10 characters).';
    }

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      // Focus first invalid field
      if (errs.fullName && fullNameRef.current) fullNameRef.current.focus();
      else if (errs.mobileNumber && mobileRef.current) mobileRef.current.focus();
      else if (errs.email && emailRef.current) emailRef.current.focus();
      else if (errs.service && serviceRef.current) serviceRef.current.focus();
      else if (errs.projectLocation && locationRef.current) locationRef.current.focus();
      else if (errs.message && messageRef.current) messageRef.current.focus();

      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const payload: ContactEnquiryPayload = {
      name: fullName.trim(),
      company: companyName.trim() || undefined,
      designation: designation.trim() || undefined,
      mobile: mobileNumber.trim(),
      email: email.trim(),
      projectName: projectName.trim() || undefined,
      projectLocation: projectLocation.trim() || undefined,
      service,
      message: message.trim()
    };

    // Safe mailto link construction
    const subject = `Project Enquiry — Chitrani Construction`;
    const bodyLines: string[] = [
      `Project Enquiry Details:`,
      `---------------------------------`,
      `Name: ${payload.name}`,
      `Company: ${payload.company || 'N/A'}`,
      `Designation: ${payload.designation || 'N/A'}`,
      `Mobile: ${payload.mobile}`,
      `Email: ${payload.email}`,
      `Project Name: ${payload.projectName || 'N/A'}`,
      `Project Location: ${payload.projectLocation || 'N/A'}`,
      `Required Service: ${payload.service}`,
      `---------------------------------`,
      `Requirement / Message:`,
      `${payload.message}`
    ];

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(bodyLines.join('\n'));
    const url = `mailto:${companyConfig.email}?subject=${encodedSubject}&body=${encodedBody}`;

    setMailtoUrl(url);
    setIsPrepared(true);

    // Trigger mailto application
    window.location.href = url;
  };

  return (
    <section className="py-20 sm:py-28 bg-[#EADBC8] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto bg-white rounded-[24px] border border-[#E8DDD0] p-7 sm:p-12 shadow-[0_20px_40px_rgba(61,53,45,0.06)] space-y-6">
          
          <div className="space-y-2 border-b border-[#E8DDD0] pb-6">
            <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
              PROJECT ENQUIRY FORM
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
              Send a Project Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5E4E] font-body">
              Fill in your details below to prepare an enquiry email to Chitrani Construction.
            </p>
          </div>

          {isPrepared ? (
            <div className="p-6 sm:p-8 rounded-[16px] bg-[#E8F4EA] border border-[#A5D6A7] text-[#2E7D32] space-y-4 font-body">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-[#2E7D32] shrink-0" />
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#2E7D32]">Enquiry Prepared</h3>
                  <p className="text-xs text-[#2E7D32]">
                    Your email client will open automatically. If it did not open, click the button below to send your enquiry.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-[12px] border border-[#A5D6A7] text-xs text-[#3D352D] space-y-1">
                <div><strong>Required Service:</strong> {service}</div>
                <div><strong>Name:</strong> {fullName}</div>
                <div><strong>Mobile:</strong> {mobileNumber}</div>
                <div><strong>Target Email:</strong> {companyConfig.email}</div>
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
                    <strong className="block font-bold text-sm">Please correct the following errors:</strong>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      {Object.values(errors).map((err, idx) => (
                        <li key={idx}>{err}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Name & Company */}
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

              {/* Designation & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-designation" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Designation (Optional)
                  </label>
                  <input
                    id="contact-designation"
                    type="text"
                    autoComplete="organization-title"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    placeholder="e.g. Project Manager / Contracting Lead"
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-mobile" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Mobile Number <span className="text-[#C96F1B]">*</span>
                  </label>
                  <input
                    ref={mobileRef}
                    id="contact-mobile"
                    type="tel"
                    autoComplete="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="+91 98337 06666"
                    aria-invalid={!!errors.mobileNumber}
                    aria-describedby={errors.mobileNumber ? "err-mobile" : undefined}
                    className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                      errors.mobileNumber ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p id="err-mobile" className="text-[11px] text-[#B42318] mt-1 font-body flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-[#B42318]" />
                      <span>{errors.mobileNumber}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Required Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Required Service <span className="text-[#C96F1B]">*</span>
                  </label>
                  <select
                    ref={serviceRef}
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    aria-invalid={!!errors.service}
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                  >
                    <option value="RCC Work">RCC Work</option>
                    <option value="Civil Work">Civil Work</option>
                    <option value="Brickwork / Blockwork">Brickwork / Blockwork</option>
                    <option value="Labour Contract">Labour Contract</option>
                    <option value="Boom Placer Rental">Boom Placer Rental</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Project Name & Project Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-project-name" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Project Name (Optional)
                  </label>
                  <input
                    id="contact-project-name"
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="e.g. Ocean Star Tower B"
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-location" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Project Location {service !== 'Other' && <span className="text-[#C96F1B]">*</span>}
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

              {/* Requirement Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                  Requirement Details <span className="text-[#C96F1B]">*</span>
                </label>
                <textarea
                  ref={messageRef}
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide details about your project site, scope of work, timeline, or equipment requirement..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-message" : undefined}
                  className={`w-full min-h-[120px] p-3.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all resize-y ${
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

              {/* Submit Button */}
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

              {/* Direct Alternative Links */}
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
