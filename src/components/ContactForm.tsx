import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Building2, ShieldCheck } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';

export const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [enquiryType, setEnquiryType] = useState('Construction Contracting');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile Number is required.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(mobileNumber.trim())) {
      errs.mobileNumber = 'Valid mobile number is required.';
    }
    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Valid email address is required.';
    }
    if (!message.trim()) errs.message = 'Please enter your message or project enquiry details.';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F9F7F2] text-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-display text-xs text-[#FFB300] font-bold tracking-wider uppercase block mb-2">
            DIRECT DISPATCH & OFFICES
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2D2D2D] tracking-tight">
            Contact Chitrani Construction
          </h2>
          <p className="mt-2 text-base text-[#5D5D5D] font-body">
            Reach out to our contract officers and machinery dispatch desk for project proposals and equipment mobilization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Operating Office (Mumbai) */}
            <div className="bg-white p-6 rounded-[20px] border border-[#E7E7E7] shadow-[0_15px_35px_rgba(0,0,0,0.08)] space-y-3">
              <div className="flex items-center gap-2 text-[#2D2D2D] font-heading text-xs font-bold uppercase border-b border-[#E7E7E7] pb-2">
                <MapPin className="w-4 h-4 text-[#FFB300]" />
                <span>Operating Office (Mumbai)</span>
              </div>
              <p className="text-sm text-[#2D2D2D] font-body font-medium leading-relaxed">
                {companyConfig.operatingOffice}
              </p>
            </div>

            {/* Registered Office (Jalgaon) */}
            <div className="bg-white p-6 rounded-[20px] border border-[#E7E7E7] shadow-[0_15px_35px_rgba(0,0,0,0.08)] space-y-3">
              <div className="flex items-center gap-2 text-[#2D2D2D] font-heading text-xs font-bold uppercase border-b border-[#E7E7E7] pb-2">
                <Building2 className="w-4 h-4 text-[#FFB300]" />
                <span>Registered Office (Jalgaon)</span>
              </div>
              <p className="text-sm text-[#2D2D2D] font-body font-medium leading-relaxed">
                {companyConfig.registeredOffice}
              </p>
            </div>

            {/* Direct Connect & Registration Details */}
            <div className="bg-[#2D2D2D] text-white p-6 rounded-[20px] border border-white/10 shadow-md space-y-4 font-body text-xs">
              <div className="text-[#FFB300] font-heading font-bold uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-2 text-xs">
                <ShieldCheck className="w-4 h-4 text-[#FFB300]" />
                <span>Direct Dispatch & Registration</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FFB300] shrink-0" />
                  <div>
                    <span className="text-[#7D7D7D] text-[10px] block uppercase font-heading">Direct Phone:</span>
                    <a href={`tel:${companyConfig.phoneRaw}`} className="text-white hover:text-[#FFB300] font-bold text-sm">
                      {companyConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[#7D7D7D] text-[10px] block uppercase font-heading">WhatsApp Dispatch:</span>
                    <a 
                      href={`https://wa.me/${companyConfig.whatsappRaw}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-bold text-sm"
                    >
                      {companyConfig.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FFB300] shrink-0" />
                  <div>
                    <span className="text-[#7D7D7D] text-[10px] block uppercase font-heading">Official Email:</span>
                    <a href={`mailto:${companyConfig.email}`} className="text-white hover:text-[#FFB300] font-bold">
                      {companyConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-1 text-[11px] text-[#D0D0D0]">
                <div><strong className="text-white">GSTIN:</strong> {companyConfig.gstin}</div>
                <div><strong className="text-white">Legal Entity:</strong> {companyConfig.legalName}</div>
              </div>
            </div>

          </div>

          {/* Right Column: General Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[20px] border border-[#E7E7E7] shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
            <h3 className="font-heading font-bold text-xl text-[#2D2D2D] mb-1">
              General Project Enquiry
            </h3>
            <p className="text-xs text-[#7D7D7D] mb-6 font-body">
              Our civil team reviews and responds to formal inquiries within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-md bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-heading font-bold text-lg text-emerald-900">Enquiry Submitted</h4>
                <p className="text-xs text-emerald-800 font-body">
                  Thank you, <strong>{fullName}</strong>. Your message regarding <strong>{enquiryType}</strong> has been received. We will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFullName('');
                    setCompanyName('');
                    setMobileNumber('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-2 px-4 py-2 rounded-md bg-[#FFB300] hover:bg-[#E59A00] text-white font-heading text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Error Summary */}
                {Object.keys(errors).length > 0 && (
                  <div className="p-3 rounded-md bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2 font-body">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold">Please fix the following issues:</strong>
                      <ul className="list-disc list-inside mt-1">
                        {Object.values(errors).map((err, i) => (
                          <li key={i}>{err}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white text-[#2D2D2D] text-sm border placeholder-[#999999] focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all ${
                      errors.fullName ? 'border-red-500' : 'border-[#D9D9D9]'
                    }`}
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Infrastructure Projects"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white text-[#2D2D2D] text-sm border border-[#D9D9D9] placeholder-[#999999] focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                  />
                </div>

                {/* Mobile & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="+91 98337 06666"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white text-[#2D2D2D] text-sm border placeholder-[#999999] focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all ${
                        errors.mobileNumber ? 'border-red-500' : 'border-[#D9D9D9]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rahul@apexinfra.com"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white text-[#2D2D2D] text-sm border placeholder-[#999999] focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all ${
                        errors.email ? 'border-red-500' : 'border-[#D9D9D9]'
                      }`}
                    />
                  </div>
                </div>

                {/* Enquiry Type */}
                <div>
                  <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                    Enquiry Category
                  </label>
                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white text-[#2D2D2D] text-sm border border-[#D9D9D9] focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                  >
                    <option value="Construction Contracting">Construction Contracting</option>
                    <option value="Concrete Boom Placer Rental">Concrete Boom Placer Rental</option>
                    <option value="Subcontracting Inquiry">Subcontracting Inquiry</option>
                    <option value="Other Business Enquiry">Other Business Enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                    Message / Project Details *
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your project site, requirements, timeline..."
                    className={`w-full px-3.5 py-2.5 rounded-md bg-white text-[#2D2D2D] text-sm border placeholder-[#999999] focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all ${
                      errors.message ? 'border-red-500' : 'border-[#D9D9D9]'
                    }`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[44px] py-3.5 px-4 rounded-md bg-[#FFB300] hover:bg-[#E59A00] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors disabled:opacity-50 focus:outline-hidden focus:ring-2 focus:ring-[#F9C40F] shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
