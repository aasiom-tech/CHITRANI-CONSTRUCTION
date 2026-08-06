import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, FileText, Calendar, Building2 } from 'lucide-react';

export const FeaturedProjectSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#2D2D2D] border-b border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-heading text-xs text-[#FFB300] font-bold tracking-wider uppercase block mb-2">
              VERIFIED PROJECT ENGAGEMENT
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#2D2D2D] tracking-tight">
              Featured Project
            </h2>
          </div>
        </div>

        {/* Wide Editorial Split Layout */}
        <div className="bg-white rounded-[20px] border border-[#E7E7E7] overflow-hidden shadow-[0_10px_30px_rgba(45,45,45,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left: Project Information */}
          <div className="lg:col-span-7 p-7 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-[10px] bg-[#F9F7F2] text-[#2D2D2D] border border-[#E7E7E7] font-heading text-xs font-semibold uppercase">
                  Building Construction
                </span>
                <span className="px-3 py-1 rounded-[10px] bg-white text-[#5D5D5D] border border-[#E7E7E7] font-heading text-xs font-semibold uppercase">
                  Role: Construction Vendor
                </span>
              </div>

              <h3 className="font-heading font-semibold text-3xl text-[#2D2D2D]">
                Ocean Star
              </h3>

              <p className="text-sm sm:text-base text-[#5D5D5D] font-body leading-relaxed">
                Chitrani Construction was engaged as a construction vendor for the Ocean Star project in Mumbai.
              </p>

              {/* Project Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-body">
                <div className="p-3.5 bg-[#F9F7F2] rounded-[12px] border border-[#E7E7E7] space-y-1">
                  <span className="text-[#7D7D7D] font-semibold uppercase block font-heading text-[11px]">Client Name:</span>
                  <span className="font-semibold text-[#2D2D2D] text-sm">Suraj Estate Developers Ltd</span>
                </div>

                <div className="p-3.5 bg-[#F9F7F2] rounded-[12px] border border-[#E7E7E7] space-y-1">
                  <span className="text-[#7D7D7D] font-semibold uppercase block font-heading text-[11px]">Location:</span>
                  <span className="font-semibold text-[#2D2D2D] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FFB300] shrink-0" />
                    Kashinath Dhuru Marg, Mumbai – 400028
                  </span>
                </div>

                <div className="p-3.5 bg-[#F9F7F2] rounded-[12px] border border-[#E7E7E7] space-y-1">
                  <span className="text-[#7D7D7D] font-semibold uppercase block font-heading text-[11px]">Work Order Reference:</span>
                  <span className="font-semibold text-[#2D2D2D] flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-[#FFB300] shrink-0" />
                    OSWOJ0002126-27
                  </span>
                </div>

                <div className="p-3.5 bg-[#F9F7F2] rounded-[12px] border border-[#E7E7E7] space-y-1">
                  <span className="text-[#7D7D7D] font-semibold uppercase block font-heading text-[11px]">Dates:</span>
                  <span className="font-semibold text-[#2D2D2D] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#FFB300] shrink-0" />
                    Order: 31 July 2026 | Sched: 31 Dec 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/projects/ocean-star"
                className="w-full sm:w-auto px-6 py-3.5 rounded-[12px] bg-[#FFB300] hover:bg-[#E59A00] text-[#2D2D2D] font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs hover:-translate-y-0.5"
              >
                <span>View Project Details</span>
                <ArrowRight className="w-4 h-4 text-[#2D2D2D]" />
              </Link>

              <Link
                to="/projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-[12px] bg-white border-2 border-[#FFB300] text-[#2D2D2D] hover:bg-[#FFB300] font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <span>Explore Projects</span>
              </Link>
            </div>
          </div>

          {/* Right: Technical Project Specification Panel */}
          <div className="lg:col-span-5 bg-[#2D2D2D] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[280px]">
            {/* Grid Blueprint Texture */}
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
                backgroundSize: '16px 16px'
              }}
            />

            <div className="relative z-10 space-y-3">
              <div className="w-16 h-16 rounded-[16px] bg-white/10 border border-white/20 text-[#FFB300] flex items-center justify-center mx-auto">
                <Building2 className="w-8 h-8 text-[#FFB300]" />
              </div>
              <div className="text-white font-heading font-semibold text-xl">
                Ocean Star Civil Project
              </div>
              <div className="inline-block px-3 py-1 rounded-[10px] bg-[#FFB300]/20 border border-[#FFB300]/40 text-[#FFB300] font-heading text-xs font-semibold uppercase tracking-wider">
                Work Order OSWOJ0002126-27
              </div>
              <p className="text-xs text-[#CFCFCF] font-body max-w-xs mx-auto">
                Client: Suraj Estate Developers Ltd • Mumbai
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
