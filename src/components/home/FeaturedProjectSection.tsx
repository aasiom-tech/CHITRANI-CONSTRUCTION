import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, FileText, Calendar } from 'lucide-react';
import projectImg from '../../assets/images/projects/ocean-star-project-representative.webp';

export const FeaturedProjectSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#EADBC8] via-white to-[#F5EEE5] text-[#3D352D] relative overflow-hidden border-b border-[#E8DDD0]">
      {/* Background Subtle Architectural Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#6B5E4E 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
              VERIFIED PROJECT ENGAGEMENT
            </span>
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
              Featured Project
            </h2>
          </div>
        </div>

        {/* Unified Editorial Project Feature Composition */}
        <div className="bg-white rounded-[24px] border border-[#E8DDD0] overflow-hidden shadow-[0_16px_40px_rgba(61,53,45,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-0 relative group">

          {/* Left: Project Content & Information */}
          <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between relative z-10">
            <div className="space-y-5">

              {/* Category Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-[10px] bg-[#F6E7D4] text-[#C96F1B] border border-[rgba(201,111,27,0.22)] font-heading text-xs font-semibold uppercase tracking-wider">
                  BUILDING CONSTRUCTION
                </span>
                <span className="px-3.5 py-1 rounded-[10px] bg-[#F5EEE5] text-[#6B5E4E] border border-[#E8DDD0] font-heading text-xs font-semibold uppercase tracking-wider">
                  CONSTRUCTION VENDOR
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2.5">
                <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#3D352D] tracking-tight">
                  Ocean Star
                </h3>
                <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed max-w-2xl">
                  Chitrani Construction was engaged as a construction vendor for the Ocean Star project in Mumbai.
                </p>
              </div>

              {/* Unified Facts Grid */}
              <div className="bg-[#F5EEE5]/80 rounded-[16px] border border-[#E8DDD0] p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DDD0]">

                <div className="space-y-1.5 pb-3 sm:pb-0 sm:pr-4">
                  <span className="text-[#6B5E4E] font-bold uppercase tracking-wider font-heading text-[11px] block">
                    CLIENT
                  </span>
                  <span className="font-heading font-semibold text-[#3D352D] text-sm sm:text-base block">
                    Suraj Estate Developers Ltd
                  </span>
                </div>

                <div className="space-y-1.5 pt-3 sm:pt-0 sm:pl-4">
                  <span className="text-[#6B5E4E] font-bold uppercase tracking-wider font-heading text-[11px] block">
                    LOCATION
                  </span>
                  <div className="flex items-start gap-1.5 text-[#3D352D]">
                    <MapPin className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
                    <span className="font-body text-xs sm:text-sm font-semibold leading-snug">
                      Kashinath Dhuru Marg, Mumbai – 400028
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-3 sm:pt-4 sm:border-t sm:border-[#E8DDD0] sm:pr-4">
                  <span className="text-[#6B5E4E] font-bold uppercase tracking-wider font-heading text-[11px] block">
                    ENGAGEMENT ROLE
                  </span>
                  <div className="flex items-center gap-1.5 text-[#3D352D]">
                    <FileText className="w-4 h-4 text-[#C96F1B] shrink-0" />
                    <span className="font-heading font-semibold text-xs sm:text-sm tracking-wide">
                      Construction Vendor
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-3 sm:pt-4 sm:border-t sm:border-[#E8DDD0] sm:pl-4">
                  <span className="text-[#6B5E4E] font-bold uppercase tracking-wider font-heading text-[11px] block">
                    SCHEDULE
                  </span>
                  <div className="flex items-center gap-1.5 text-[#3D352D]">
                    <Calendar className="w-4 h-4 text-[#C96F1B] shrink-0" />
                    <span className="font-body text-xs sm:text-sm font-semibold">
                      31 July 2026 – Scheduled completion: 31 Dec 2026
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/projects/ocean-star"
                className="w-full sm:w-auto px-7 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
              >
                <span>View Project Details</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                to="/projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-[12px] bg-white border-2 border-[#C96F1B] text-[#C96F1B] hover:bg-[#C96F1B] hover:text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
              >
                <span>Explore Projects</span>
              </Link>
            </div>
          </div>

          {/* Right: High-Quality Representative Project Visual */}
          <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] lg:min-h-[460px] overflow-hidden bg-[#F5EEE5]">

            {/* Soft Blend Scrim from Content to Image */}
            <div className="absolute inset-y-0 left-0 w-20 hidden lg:block bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none z-10" />

            <img
              src={projectImg}
              alt="Representative high-rise construction project visual for the Ocean Star engagement"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            />

            {/* Representative Visual Label */}
            <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-[10px] bg-black/65 backdrop-blur-md border border-white/20 text-white font-heading text-[11px] font-medium tracking-wider uppercase shadow-xs">
              Representative project visual
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
