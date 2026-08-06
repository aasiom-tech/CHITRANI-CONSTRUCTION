import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, FileText, Calendar, Building2 } from 'lucide-react';

export const FeaturedProjectSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
              VERIFIED PROJECT ENGAGEMENT
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
              Featured Project
            </h2>
          </div>
        </div>

        {/* Wide Editorial Split Layout */}
        <div className="bg-white rounded-[20px] border border-[#E8DDD0] overflow-hidden shadow-[0_10px_30px_rgba(61,53,45,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left: Project Information */}
          <div className="lg:col-span-7 p-7 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-[10px] bg-[#F6E7D4] text-[#C96F1B] border border-[rgba(201,111,27,0.22)] font-heading text-xs font-semibold uppercase">
                  Building Construction
                </span>
                <span className="px-3 py-1 rounded-[10px] bg-[#F5EEE5] text-[#6B5E4E] border border-[#E8DDD0] font-heading text-xs font-semibold uppercase">
                  Role: Construction Vendor
                </span>
              </div>

              <h3 className="font-heading font-semibold text-3xl text-[#3D352D]">
                Ocean Star
              </h3>

              <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                Chitrani Construction was engaged as a construction vendor for the Ocean Star project in Mumbai.
              </p>

              {/* Technical Information Panel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-body">
                <div className="p-3.5 bg-[#F5EEE5] rounded-[12px] border border-[#E8DDD0] space-y-1">
                  <span className="text-[#6B5E4E] font-semibold uppercase block font-heading text-[11px]">Client Name:</span>
                  <span className="font-semibold text-[#3D352D] text-sm">Suraj Estate Developers Ltd</span>
                </div>

                <div className="p-3.5 bg-[#F5EEE5] rounded-[12px] border border-[#E8DDD0] space-y-1">
                  <span className="text-[#6B5E4E] font-semibold uppercase block font-heading text-[11px]">Location:</span>
                  <span className="font-semibold text-[#3D352D] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C96F1B] shrink-0" />
                    Kashinath Dhuru Marg, Mumbai – 400028
                  </span>
                </div>

                <div className="p-3.5 bg-[#F5EEE5] rounded-[12px] border border-[#E8DDD0] space-y-1">
                  <span className="text-[#6B5E4E] font-semibold uppercase block font-heading text-[11px]">Work Order Reference:</span>
                  <span className="font-semibold text-[#3D352D] flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-[#C96F1B] shrink-0" />
                    OSWOJ0002126-27
                  </span>
                </div>

                <div className="p-3.5 bg-[#F5EEE5] rounded-[12px] border border-[#E8DDD0] space-y-1">
                  <span className="text-[#6B5E4E] font-semibold uppercase block font-heading text-[11px]">Dates:</span>
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
                className="w-full sm:w-auto px-6 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5"
              >
                <span>View Project Details</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                to="/projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-[12px] bg-white border-2 border-[#C96F1B] text-[#C96F1B] hover:bg-[#C96F1B] hover:text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <span>Explore Projects</span>
              </Link>
            </div>
          </div>

          {/* Right: Technical Project Specification Panel */}
          <div className="lg:col-span-5 bg-[#3D352D] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[280px]">
            {/* Grid Blueprint Texture */}
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
                backgroundSize: '16px 16px'
              }}
            />

            <div className="relative z-10 space-y-3">
              <div className="w-16 h-16 rounded-[16px] bg-white/10 border border-white/20 text-[#C96F1B] flex items-center justify-center mx-auto">
                <Building2 className="w-8 h-8 text-[#C96F1B]" />
              </div>
              <div className="text-white font-heading font-semibold text-xl">
                Ocean Star Civil Project
              </div>
              <div className="inline-block px-3 py-1 rounded-[10px] bg-[#C96F1B]/20 border border-[#C96F1B]/40 text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
                Work Order OSWOJ0002126-27
              </div>
              <p className="text-xs text-[#D8CCBC] font-body max-w-xs mx-auto">
                Client: Suraj Estate Developers Ltd • Mumbai
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
