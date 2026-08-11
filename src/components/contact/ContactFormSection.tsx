import React, { useState } from 'react';
import { Mail, Phone, AlertCircle, CheckCircle2 } from 'lucide-react';
import { companyConfig } from '../../config/companyConfig';
import { publicPost, PublicApiError } from '../../lib/public-api';
import type { ContactSubmission, ContactAcknowledgement } from '../../types/api';
import { useServices } from '../../hooks/useServices';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'rate_limited' | 'validation_error';

export const ContactFormSection: React.FC = () => {
  const { data: services } = useServices();
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [projectLocation, setProjectLocation] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Full Name is required (minimum 2 characters).';
    }

    const cleanMobile = mobileNumber.trim().replace(/[\s-]/g, '');
    const indianMobileRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
    if (!mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile Number is required.';
    } else if (!indianMobileRegex.test(cleanMobile)) {
      errs.mobileNumber = 'Please enter a valid 10-digit Indian mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!emailRegex.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!message.trim() || message.trim().length < 10) {
      errs.message = 'Please provide details about your requirement (minimum 10 characters).';
    }

    if (!consent) {
      errs.consent = 'Consent is required to submit an enquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setServerError(null);

    try {
      const payload: ContactSubmission = {
        name: fullName.trim(),
        company: companyName.trim() || undefined,
        email: email.trim(),
        phone: mobileNumber.trim(),
        serviceId: serviceId || undefined,
        projectLocation: projectLocation.trim() || undefined,
        message: message.trim(),
        consent: true,
      };

      const result = await publicPost<ContactAcknowledgement>('/api/v1/contact', payload);
      setReferenceNumber(result.referenceNumber);
      setStatus('success');

      setFullName('');
      setCompanyName('');
      setMobileNumber('');
      setEmail('');
      setServiceId('');
      setProjectLocation('');
      setMessage('');
      setConsent(false);
    } catch (err) {
      if (err instanceof PublicApiError) {
        if (err.status === 429) {
          setStatus('rate_limited');
        } else if (err.status === 400 && err.fields) {
          setErrors(err.fields);
          setStatus('validation_error');
        } else {
          setStatus('error');
          setServerError("We couldn't submit your enquiry right now. Please try again.");
        }
      } else {
        setStatus('error');
        setServerError("We couldn't submit your enquiry right now. Please try again.");
      }
    }
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
              Fill in your details below and our team will contact you shortly.
            </p>
          </div>

          {status === 'success' && referenceNumber ? (
            <div className="p-6 sm:p-8 rounded-[16px] bg-[#E8F4EA] border border-[#A5D6A7] text-[#2E7D32] space-y-4 font-body">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-[#2E7D32] shrink-0" />
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#2E7D32]">Enquiry Received</h3>
                  <p className="text-xs text-[#2E7D32]">Thank you. Your enquiry has been received.</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-[12px] border border-[#A5D6A7] text-xs text-[#3D352D]">
                <strong>Reference:</strong> {referenceNumber}
              </div>
              <p className="text-[11px] text-[#6B5E4E] italic">
                Please note this reference number for your records. Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {status === 'rate_limited' && (
                <div role="alert" className="p-4 rounded-[12px] bg-[#FDECEC] border border-[#B42318] text-xs text-[#B42318] flex items-start gap-3 font-body">
                  <AlertCircle className="w-5 h-5 text-[#B42318] shrink-0 mt-0.5" />
                  <span>Too many requests. Please wait a few minutes and try again.</span>
                </div>
              )}

              {status === 'error' && serverError && (
                <div role="alert" className="p-4 rounded-[12px] bg-[#FDECEC] border border-[#B42318] text-xs text-[#B42318] flex items-start gap-3 font-body">
                  <AlertCircle className="w-5 h-5 text-[#B42318] shrink-0 mt-0.5" />
                  <span>{serverError}</span>
                </div>
              )}

              {Object.keys(errors).length > 0 && status !== 'rate_limited' && (
                <div role="alert" tabIndex={-1} className="p-4 rounded-[12px] bg-[#FDECEC] border border-[#B42318] text-xs text-[#B42318] flex items-start gap-3 font-body">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-fullname" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Full Name <span className="text-[#C96F1B]">*</span>
                  </label>
                  <input
                    id="contact-fullname"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    disabled={status === 'submitting'}
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all disabled:opacity-50"
                  />
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
                    placeholder="e.g. Apex Infrastructure"
                    disabled={status === 'submitting'}
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-mobile" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Mobile Number <span className="text-[#C96F1B]">*</span>
                  </label>
                  <input
                    id="contact-mobile"
                    type="tel"
                    autoComplete="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="+91 98337 06666"
                    disabled={status === 'submitting'}
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Email Address <span className="text-[#C96F1B]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@apexinfra.com"
                    disabled={status === 'submitting'}
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Required Service (Optional)
                  </label>
                  <select
                    id="contact-service"
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    disabled={status === 'submitting'}
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all disabled:opacity-50"
                  >
                    <option value="">Select a service...</option>
                    {services?.map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-location" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Project Location (Optional)
                  </label>
                  <input
                    id="contact-location"
                    type="text"
                    autoComplete="street-address"
                    value={projectLocation}
                    onChange={(e) => setProjectLocation(e.target.value)}
                    placeholder="e.g. Andheri East, Mumbai"
                    disabled={status === 'submitting'}
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                  Requirement Details <span className="text-[#C96F1B]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide details about your project site, scope of work, timeline, or equipment requirement..."
                  disabled={status === 'submitting'}
                  className="w-full min-h-[120px] p-3.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all resize-y disabled:opacity-50"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="contact-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  disabled={status === 'submitting'}
                  className="mt-1 h-4 w-4 rounded border-[#D8CCBC] text-[#C96F1B] focus:ring-[#C96F1B]"
                />
                <label htmlFor="contact-consent" className="text-xs text-[#6B5E4E] font-body">
                  I consent to Chitrani Construction storing my enquiry details to respond to my request. <span className="text-[#C96F1B]">*</span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span>Submit Enquiry</span>
                  )}
                </button>
              </div>

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
