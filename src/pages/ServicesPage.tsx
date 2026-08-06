import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { servicesData } from '../data/services';
import { ServiceCard } from '../components/services/ServiceCard';
import { Layers, Building2, ShieldCheck, ArrowRight, FileText } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#F5EEE5] text-[#3D352D] min-h-screen">
      <SEO
        title="Construction Contracting & Equipment Rental Services | Chitrani"
        description="Explore structural and civil construction support and Putzmeister M42-5 concrete boom placer rental with an operator and helper from Chitrani Construction."
        canonical="https://chitraniconstruction.com/services"
      />

      {/* Page Header */}
      <PageHeader
        title="Construction Contracting and Equipment Rental Services"
        subtitle="Chitrani Construction supports building and infrastructure requirements through two connected service lines: construction contracting and high-capacity concrete boom placer rental. These capabilities allow clients to access organised execution support, machinery, and operating manpower through one enterprise."
        badge="OUR CAPABILITIES"
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
        
        {/* Two Service Cards */}
        <section aria-label="Services Directory">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Connected Capabilities Section */}
        <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
                INTEGRATED APPROACH
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D]">
                Two Services That Work Together
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed max-w-4xl">
            Construction contracting and concrete boom placer rental are presented as connected capabilities. Chitrani can support construction execution requirements while also providing high-capacity concrete-placement equipment with an operating crew.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <li className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs sm:text-sm font-body text-[#3D352D] font-medium flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C96F1B] shrink-0 mt-1.5" />
              <span>Construction execution and machinery support through one enterprise</span>
            </li>
            <li className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs sm:text-sm font-body text-[#3D352D] font-medium flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C96F1B] shrink-0 mt-1.5" />
              <span>Coordination suited to concrete-intensive project requirements</span>
            </li>
            <li className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs sm:text-sm font-body text-[#3D352D] font-medium flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C96F1B] shrink-0 mt-1.5" />
              <span>Service selection based on project, site, and rental requirements</span>
            </li>
          </ul>
        </section>

        {/* Industries Supported Preview */}
        <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DDD0] pb-4">
            <div>
              <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-1">
                SECTOR APPLICABILITY
              </span>
              <h2 className="font-heading font-bold text-2xl text-[#3D352D]">
                Services can support requirements across…
              </h2>
            </div>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#C96F1B] hover:text-[#B35E17] transition-colors"
            >
              <span>Explore Industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Residential Construction', href: '/industries' },
              { name: 'Commercial Buildings', href: '/industries' },
              { name: 'Infrastructure and Civil Works', href: '/industries' },
              { name: 'Contractor Equipment Support', href: '/industries' }
            ].map((ind, idx) => (
              <Link
                key={idx}
                to={ind.href}
                className="p-4 bg-[#F5EEE5] hover:bg-[#EADBC8]/50 rounded-xl border border-[#E8DDD0] transition-all flex items-center justify-between group"
              >
                <span className="text-xs sm:text-sm font-heading font-bold text-[#3D352D]">
                  {ind.name}
                </span>
                <Building2 className="w-4 h-4 text-[#6B5E4E] group-hover:text-[#C96F1B] transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* Compact Safety & Quality Preview */}
        <section className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#C96F1B] shrink-0" />
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#3D352D]">
              Responsible Site and Equipment Support
            </h2>
          </div>
          <p className="text-sm text-[#6B5E4E] font-body leading-relaxed max-w-4xl">
            Chitrani Construction emphasizes PPE usage, site supervision, quality inspections, preventive equipment maintenance, workforce coordination, and compliance with applicable project and site requirements.
          </p>
        </section>

        {/* Request Quote CTA Section */}
        <section className="bg-[#3D352D] rounded-[18px] p-8 sm:p-12 text-white text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
              COMMERCIAL INQUIRIES
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
              Discuss Your Project Requirements
            </h2>
            <p className="text-sm text-[#D1C5B0] font-body leading-relaxed">
              Submit your project parameters or equipment rental schedule to receive a tailored commercial quotation.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>Request Quote</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
