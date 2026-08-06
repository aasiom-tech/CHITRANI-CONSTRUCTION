import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { CompanyIntroPreview } from '../components/home/CompanyIntroPreview';
import { BusinessAreas } from '../components/BusinessAreas';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FinalCTA } from '../components/FinalCTA';
import boomPlacerImg from '../assets/images/putzmeister-m42-boom-placer.jpeg';
import { 
  Building2, 
  Truck, 
  ArrowRight,
  MapPin,
  FileText,
  Calendar,
  CheckCircle2,
  Building,
  Factory,
  HardHat
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0 bg-[#EADBC8]">
      
      {/* 1. Hero */}
      <Hero />

      {/* 2. Company Positioning */}
      <CompanyIntroPreview />

      {/* 3. Two Connected Capabilities */}
      <BusinessAreas />

      {/* 4. Why Chitrani */}
      <WhyChooseUs />

      {/* 5. Core Services Preview (2 Cards Only) */}
      <section className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-heading text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block mb-2">
                CONTRACTING & RENTAL CAPABILITIES
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
                Our Core Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-[#F5EEE5] hover:bg-[#E8DDD0] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider border border-[#E8DDD0] transition-colors w-fit"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-7 sm:p-9 rounded-[18px] border border-[#EFE8DE] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-[#C96F1B] transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center group-hover:bg-[#C96F1B] group-hover:text-white transition-colors">
                    <Building2 className="w-6 h-6 text-[#C96F1B] group-hover:text-white" />
                  </div>
                  <span className="font-heading text-xs bg-[#F5EEE5] text-[#C96F1B] px-3 py-1 rounded-xl border border-[#E8DDD0] font-semibold uppercase">
                    Contracting
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Construction Contracting
                </h3>

                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Structural and civil construction support for public and private sector projects, with emphasis on organised execution and concrete-intensive building works.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8DDD0]">
                <Link
                  to="/services/construction-contracting"
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-colors shadow-[0_10px_30px_rgba(201,111,27,0.25)]"
                >
                  <span>View Service</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-7 sm:p-9 rounded-[18px] border border-[#EFE8DE] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-[#C96F1B] transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center group-hover:bg-[#C96F1B] group-hover:text-white transition-colors">
                    <Truck className="w-6 h-6 text-[#C96F1B] group-hover:text-white" />
                  </div>
                  <span className="font-heading text-xs bg-[#F5EEE5] text-[#C96F1B] px-3 py-1 rounded-xl border border-[#E8DDD0] font-semibold uppercase">
                    Equipment Rental
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-2xl text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Concrete Boom Placer Rental
                </h3>

                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Putzmeister M42-5 boom placer rental with an operator and helper for high-capacity concrete-placement requirements.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8DDD0]">
                <Link
                  to="/services/concrete-boom-placer-rental"
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-colors shadow-[0_10px_30px_rgba(201,111,27,0.25)]"
                >
                  <span>View Service</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Featured Project Preview (Ocean Star Only) */}
      <section className="py-20 sm:py-28 bg-[#EADBC8] text-[#3D352D] border-b border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-heading text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block mb-2">
                VERIFIED PROJECT ENGAGEMENT
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
                Featured Project
              </h2>
            </div>
          </div>

          {/* Wide Editorial Split Layout */}
          <div className="bg-white rounded-[18px] border border-[#EFE8DE] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Project Information */}
            <div className="lg:col-span-7 p-7 sm:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-[#F5EEE5] text-[#C96F1B] border border-[#E8DDD0] font-heading text-xs font-semibold uppercase">
                    Building Construction
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-white text-[#6B5E4E] border border-[#E8DDD0] font-heading text-xs font-semibold uppercase">
                    Role: Construction Vendor
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-3xl text-[#3D352D]">
                  Ocean Star
                </h3>

                <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                  Chitrani Construction was engaged as a construction vendor for the Ocean Star project in Mumbai.
                </p>

                {/* Project Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-body">
                  <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-1">
                    <span className="text-[#7E7267] font-semibold uppercase block font-heading text-[11px]">Client Name:</span>
                    <span className="font-semibold text-[#3D352D] text-sm">Suraj Estate Developers Ltd</span>
                  </div>

                  <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-1">
                    <span className="text-[#7E7267] font-semibold uppercase block font-heading text-[11px]">Location:</span>
                    <span className="font-semibold text-[#3D352D] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C96F1B] shrink-0" />
                      Kashinath Dhuru Marg, Mumbai – 400028
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-1">
                    <span className="text-[#7E7267] font-semibold uppercase block font-heading text-[11px]">Work Order Reference:</span>
                    <span className="font-semibold text-[#3D352D] flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-[#C96F1B] shrink-0" />
                      OSWOJ0002126-27
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] space-y-1">
                    <span className="text-[#7E7267] font-semibold uppercase block font-heading text-[11px]">Dates:</span>
                    <span className="font-semibold text-[#3D352D] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C96F1B] shrink-0" />
                      Order: 31 July 2026 | Sched: 31 Dec 2026
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/projects/ocean-star"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-[0_10px_30px_rgba(201,111,27,0.25)]"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <Link
                  to="/projects"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-[12px] bg-transparent border border-[#C96F1B] hover:bg-[#C96F1B] hover:text-white text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore Projects</span>
                </Link>
              </div>
            </div>

            {/* Right: Technical Blueprint Box */}
            <div className="lg:col-span-5 bg-[#3D352D] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[280px]">
              {/* Subtle Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
                  backgroundSize: '16px 16px'
                }}
              />

              <div className="relative z-10 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 text-[#C96F1B] flex items-center justify-center mx-auto">
                  <Building2 className="w-8 h-8 text-[#C96F1B]" />
                </div>
                <div className="text-white font-heading font-semibold text-lg">
                  Architectural & Structural Work
                </div>
                <div className="inline-block px-3 py-1 rounded-xl bg-[#C96F1B]/20 border border-[#C96F1B]/40 text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
                  Project image to be added
                </div>
                <p className="text-xs text-[#D8CCBC] font-body max-w-xs mx-auto">
                  Ocean Star Site • Suraj Estate Developers Ltd
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Featured Equipment Preview (Putzmeister M42-5 Only) */}
      <section className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-heading text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block mb-2">
                CONCRETE PLACING EQUIPMENT
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
                Featured Equipment
              </h2>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-[18px] border border-[#EFE8DE] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Equipment Image */}
            <div className="lg:col-span-5 relative bg-white min-h-[300px]">
              <img 
                src={boomPlacerImg} 
                alt="Putzmeister M42-5 Concrete Boom Placer Truck"
                referrerPolicy="no-referrer"
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-xl bg-white text-[#3D352D] border border-[#E8DDD0] font-heading text-xs font-semibold uppercase shadow-xs">
                  Concrete Boom Placer
                </span>
              </div>
            </div>

            {/* Right: Equipment Specifications & Details */}
            <div className="lg:col-span-7 p-7 sm:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#F5EEE5] text-[#C96F1B] border border-[#E8DDD0] font-heading text-xs font-semibold uppercase">
                  <span>Putzmeister M42-5</span>
                </div>

                <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#3D352D]">
                  Putzmeister M42-5 Concrete Boom Placer
                </h3>

                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  A high-capacity concrete boom placer available for structured monthly rental with an operator and helper, suitable for major building and infrastructure concrete-placement requirements.
                </p>

                {/* Verified Specs Table */}
                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#3D352D] uppercase tracking-wider block font-heading mb-3">
                    Verified Technical Specifications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-body text-[#6B5E4E]">
                    <div className="flex items-center gap-2 p-2.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Boom Reach:</strong> 42 metres</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Capacity:</strong> 90 m³</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Manufacture Year:</strong> 2020</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Emissions:</strong> AdBlue equipped</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Crew:</strong> Operator & helper included</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0]">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Rental Terms:</strong> 12h shift / 26 days/mo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/equipment/putzmeister-m42-5"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-[0_10px_30px_rgba(201,111,27,0.25)]"
                >
                  <span>View Equipment Details</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <Link
                  to="/request-quote?requirement=equipment-rental&equipment=putzmeister-m42-5"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-[12px] bg-transparent border border-[#C96F1B] hover:bg-[#C96F1B] hover:text-white text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Request Rental Quote</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Industries Preview (3 Panels Only) */}
      <section className="py-20 sm:py-28 bg-[#EADBC8] text-[#3D352D] border-b border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-heading text-xs text-[#C96F1B] font-semibold tracking-wider uppercase block mb-2">
                SECTORS WE SUPPORT
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
                Industries We Serve
              </h2>
            </div>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-white hover:bg-[#F5EEE5] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider border border-[#E8DDD0] transition-colors w-fit"
            >
              <span>Explore Industries</span>
              <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Industry Panel 1 */}
            <div className="bg-white p-7 rounded-[18px] border border-[#EFE8DE] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-[#C96F1B] transition-all duration-300 space-y-4 group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] group-hover:bg-[#C96F1B] group-hover:text-white flex items-center justify-center transition-colors">
                  <Building className="w-6 h-6 text-[#C96F1B] group-hover:text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Real Estate and Building Construction
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Structural contracting and concrete-placement support for residential and commercial building requirements.
                </p>
              </div>
            </div>

            {/* Industry Panel 2 */}
            <div className="bg-white p-7 rounded-[18px] border border-[#EFE8DE] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-[#C96F1B] transition-all duration-300 space-y-4 group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] group-hover:bg-[#C96F1B] group-hover:text-white flex items-center justify-center transition-colors">
                  <Factory className="w-6 h-6 text-[#C96F1B] group-hover:text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Infrastructure and Civil Works
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Construction execution and heavy-equipment support for infrastructure contractors and public-sector project requirements.
                </p>
              </div>
            </div>

            {/* Industry Panel 3 */}
            <div className="bg-white p-7 rounded-[18px] border border-[#EFE8DE] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-[#C96F1B] transition-all duration-300 space-y-4 group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] group-hover:bg-[#C96F1B] group-hover:text-white flex items-center justify-center transition-colors">
                  <HardHat className="w-6 h-6 text-[#C96F1B] group-hover:text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#3D352D] group-hover:text-[#C96F1B] transition-colors">
                  Contractor Equipment Support
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                  Boom placer rental for contractors requiring high-capacity concrete-placement capability on demand.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. Final CTA */}
      <FinalCTA />

    </div>
  );
};
