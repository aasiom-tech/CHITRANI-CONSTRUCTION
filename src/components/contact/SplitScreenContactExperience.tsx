import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
import { companyConfig } from '../../config/companyConfig';

export const SplitScreenContactExperience: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirementType: 'construction-contracting',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF] text-[#3D352D] border-b border-[#E8DDD0]" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* CLEAN PAGE SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EEE5] text-[#C96F1B] border border-[#E8DDD0] font-heading text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
            <span>DIRECT PROJECT ENQUIRIES</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#3D352D]">
            Connect With Our Project Execution Team
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Reach out to Chitrani Construction for site execution support, structural RCC contracting, civil works, or Putzmeister M42-5 boom placer deployment in Maharashtra.
          </p>
        </div>

        {/* SPLIT-SCREEN COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* LEFT: VERIFIED CONTACT COORDINATES & OFFICES */}
          <div className="lg:col-span-5 space-y-6 bg-[#F5EEE5] p-6 sm:p-8 rounded-3xl border border-[#E8DDD0] shadow-xs">

            <div className="space-y-1 border-b border-[#E8DDD0] pb-4">
              <span className="font-specs text-xs text-[#C96F1B] font-extrabold uppercase tracking-widest block">
                DIRECT CONTACT DETAILS
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#3D352D]">
                Office &amp; Site Support
              </h3>
            </div>

            {/* Direct Telephone Numbers */}
            <div className="p-4 bg-white rounded-2xl border border-[#E8DDD0] space-y-2">
              <div className="flex items-center gap-2 text-[#C96F1B] font-heading font-bold text-xs uppercase">
                <Phone className="w-4 h-4" />
                <span>TELEPHONE LINES</span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#6B5E4E]">Primary Contact:</span>
                  <a href={`tel:${companyConfig.phoneRaw}`} className="font-specs font-bold text-[#3D352D] hover:text-[#C96F1B]">
                    {companyConfig.phone}
                  </a>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-[#E8DDD0]">
                  <span className="text-[#6B5E4E]">Secondary Line:</span>
                  <a href={`tel:${companyConfig.secondaryPhoneRaw}`} className="font-specs font-bold text-[#3D352D] hover:text-[#C96F1B]">
                    {companyConfig.secondaryPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Official Email */}
            <div className="p-4 bg-white rounded-2xl border border-[#E8DDD0] space-y-2">
              <div className="flex items-center gap-2 text-[#C96F1B] font-heading font-bold text-xs uppercase">
                <Mail className="w-4 h-4" />
                <span>OFFICIAL EMAIL</span>
              </div>
              <a href={`mailto:${companyConfig.email}`} className="font-heading font-bold text-xs sm:text-sm text-[#C96F1B] hover:underline block break-all">
                {companyConfig.email}
              </a>
              <p className="text-[11px] text-[#6B5E4E]">
                Send BOQs, tender specs &amp; structural drawings for review.
              </p>
            </div>

            {/* Verified Office Addresses */}
            <div className="p-4 bg-white rounded-2xl border border-[#E8DDD0] space-y-3">
              <div className="flex items-center gap-2 text-[#C96F1B] font-heading font-bold text-xs uppercase">
                <MapPin className="w-4 h-4" />
                <span>VERIFIED OFFICES</span>
              </div>

              <div className="space-y-2 text-xs text-[#3D352D] font-body">
                <div>
                  <strong className="font-heading font-semibold block text-[#3D352D]">Operating Office (Mumbai):</strong>
                  <span className="text-[#6B5E4E]">{companyConfig.operatingOffice}</span>
                </div>
                <div className="pt-2 border-t border-[#E8DDD0]">
                  <strong className="font-heading font-semibold block text-[#3D352D]">Registered Office (Jalgaon):</strong>
                  <span className="text-[#6B5E4E]">{companyConfig.registeredOffice}</span>
                </div>
              </div>
            </div>

            {/* GSTIN Badge */}
            <div className="p-4 bg-white/80 rounded-2xl border border-[#E8DDD0] flex items-center justify-between text-xs font-specs">
              <span className="text-[#6B5E4E]">GSTIN REGISTRATION:</span>
              <span className="font-bold text-[#C96F1B]">{companyConfig.gstin}</span>
            </div>

          </div>

          {/* RIGHT: CLEAN PROJECT BRIEF ENQUIRY FORM */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#E8DDD0] shadow-xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
                    Enquiry Received Successfully
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#6B5E4E] leading-relaxed">
                    Thank you for contacting Chitrani Construction. Our team will review your requirement details and respond promptly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#F5EEE5] text-[#3D352D] border border-[#E8DDD0] font-heading text-xs font-bold uppercase tracking-wider hover:bg-[#EADBC8] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#E8DDD0] pb-4">
                  <span className="font-specs text-xs text-[#C96F1B] font-extrabold uppercase tracking-widest block">
                    PROJECT REQUIREMENT BRIEF
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
                    Enquire About Project Scope
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-heading text-xs font-bold text-[#3D352D] uppercase tracking-wider block">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DDD0] bg-[#F5EEE5]/40 focus:bg-white focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/20 outline-none text-sm text-[#3D352D] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-heading text-xs font-bold text-[#3D352D] uppercase tracking-wider block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98337 06666"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DDD0] bg-[#F5EEE5]/40 focus:bg-white focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/20 outline-none text-sm text-[#3D352D] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-heading text-xs font-bold text-[#3D352D] uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DDD0] bg-[#F5EEE5]/40 focus:bg-white focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/20 outline-none text-sm text-[#3D352D] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-heading text-xs font-bold text-[#3D352D] uppercase tracking-wider block">
                      Requirement Category *
                    </label>
                    <select
                      value={formData.requirementType}
                      onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DDD0] bg-[#F5EEE5]/40 focus:bg-white focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/20 outline-none text-sm text-[#3D352D] transition-all cursor-pointer"
                    >
                      <option value="construction-contracting">Construction Contracting / RCC Frame</option>
                      <option value="equipment-rental">Putzmeister M42-5 Boom Placer Rental</option>
                      <option value="labour-contracting">Labour Contracting &amp; Manpower</option>
                      <option value="civil-brickwork">Civil Work &amp; Blockwork Masonry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-heading text-xs font-bold text-[#3D352D] uppercase tracking-wider block">
                    Site Location / City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Andheri, Mumbai / Thane / Jalgaon"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DDD0] bg-[#F5EEE5]/40 focus:bg-white focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/20 outline-none text-sm text-[#3D352D] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-heading text-xs font-bold text-[#3D352D] uppercase tracking-wider block">
                    Project Message / Scope Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe building type, floor count, concrete volume, or expected deployment dates..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DDD0] bg-[#F5EEE5]/40 focus:bg-white focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/20 outline-none text-sm text-[#3D352D] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Project Requirement</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
