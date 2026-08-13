import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { ContactMethods } from '../components/contact/ContactMethods';
import { SplitScreenContactExperience } from '../components/contact/SplitScreenContactExperience';
import { ContactOffices } from '../components/contact/ContactOffices';
import { ContactGuidance } from '../components/contact/ContactGuidance';
import { ContactFinalCTA } from '../components/contact/ContactFinalCTA';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  // Custom Site-Plan Linework & Contact Connection Graphic (NO REUSED PHOTO)
  const contactHeroVisual = (
    <div className="relative p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#E8DDD0] shadow-sm max-w-md ml-auto">
      {/* Corner Bracket Accents */}
      <div className="absolute top-3 left-3 text-[#C96F1B]" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 6V2H6" stroke="currentColor" strokeWidth="2"/></svg>
      </div>
      <div className="absolute bottom-3 right-3 text-[#C96F1B]" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M18 14V18H14" stroke="currentColor" strokeWidth="2"/></svg>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#E8DDD0] pb-3">
          <div className="flex items-center gap-2 text-xs font-heading font-semibold text-[#3D352D] uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#C96F1B]" />
            <span>OPERATING OFFICES</span>
          </div>
          <span className="text-[11px] font-specs font-bold text-[#C96F1B] bg-[#C96F1B]/10 px-2.5 py-0.5 rounded-md">
            MUMBAI & JALGAON
          </span>
        </div>

        {/* Contact Coordinates Matrix */}
        <div className="py-2 space-y-3 text-xs font-body text-[#6B5E4E]">
          <div className="flex items-start gap-2.5 p-2.5 bg-[#F5EEE5]/80 rounded-xl border border-[#E8DDD0]">
            <MapPin className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
            <div>
              <span className="font-heading font-semibold text-[#3D352D] block">Mumbai Office</span>
              <span className="text-[11px] text-[#6B5E4E]">Andheri East, Sahar Road, Mumbai – 400069</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-2.5 bg-[#F5EEE5]/80 rounded-xl border border-[#E8DDD0]">
            <Phone className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
            <div className="flex-1 flex items-center justify-between">
              <span className="font-heading font-semibold text-[#3D352D]">Direct Line</span>
              <span className="font-specs font-bold text-[#3D352D]">+91 98337 06666</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-2.5 bg-[#F5EEE5]/80 rounded-xl border border-[#E8DDD0]">
            <Mail className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
            <div className="flex-1 flex items-center justify-between">
              <span className="font-heading font-semibold text-[#3D352D]">Official Email</span>
              <span className="font-heading text-[11px] font-semibold text-[#C96F1B]">chitraniconstruction@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-heading font-semibold text-[#6B5E4E] pt-1">
          <Clock className="w-3.5 h-3.5 text-[#C96F1B]" />
          <span>RESPONSIVE DIRECT ENQUIRY SUPPORT</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SEO
        title="Contact Chitrani Construction | Project & Equipment Enquiries"
        description="Contact Chitrani Construction to discuss construction execution, manpower, civil work or equipment requirements in Maharashtra."
        canonicalPath="/contact"
      />

      <div className="bg-[#EADBC8] space-y-0 text-[#3D352D]">
        {/* 01. Shared PageHeader */}
        <PageHeader
          badge="CONTACT CHITRANI"
          title="Start a Conversation About Your Construction Requirement"
          subtitle="Contact Chitrani Construction for construction-contracting enquiries, concrete boom placer rental requirements and project-specific quotation support."
          accentType="contact"
          customRightVisual={contactHeroVisual}
          breadcrumb={[{ label: 'Home', href: '/' }]}
        />

        {/* 02. Direct Contact Methods */}
        <ContactMethods />

        {/* 03. SPLIT-SCREEN CONTACT EXPERIENCE (NEW REDESIGN) */}
        <SplitScreenContactExperience />

        {/* Office Locations */}
        <ContactOffices />

        {/* 04. What Happens Next */}
        <ContactGuidance />

        {/* 05. Request Quotation CTA */}
        <ContactFinalCTA />
      </div>
    </>
  );
};

export default ContactPage;
