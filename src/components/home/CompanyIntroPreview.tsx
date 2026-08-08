import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, ArrowRight } from 'lucide-react';
import capabilityImg from '../../assets/images/chitrani-construction-capability.png';
import { Reveal, SectionEyebrow } from '../common/Motion';

export const CompanyIntroPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0] relative overflow-hidden">
      {/* Background Subtle Gradient Ray */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C96F1B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <SectionEyebrow badge="ABOUT CHITRANI" className="mb-2" />
              <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-heading font-semibold text-[#3D352D] tracking-tight leading-tight mb-4">
                Construction Capability and Equipment Support Under One Roof
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4 text-sm sm:text-base text-[#6B5E4E] leading-relaxed font-body">
                <p>
                  Chitrani Construction is a Maharashtra-based construction and equipment-support enterprise serving the Mumbai construction market.
                </p>
                <p>
                  The company supports public and private sector requirements through civil and structural construction, concrete-intensive work coordination and high-capacity machinery deployment.
                </p>
                <p>
                  Whether a client requires construction support or a concrete boom placer with an operating crew, Chitrani brings together equipment, manpower and site coordination through one enterprise.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25} className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B] min-h-[44px]"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </Reveal>
          </div>

          {/* Right: Construction Capability Imagery with Soft Desktop Overlap */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DDD0] shadow-[0_16px_36px_rgba(61,53,45,0.08)] bg-white group aspect-[4/3] sm:aspect-auto">
                <img
                  src={capabilityImg}
                  alt="Chitrani Construction safety helmet, structural blueprints and digital building model at an active construction site"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  className="w-full h-[280px] sm:h-[400px] lg:h-[450px] object-cover filter brightness-95 scale-[1.03] sm:scale-[1.055] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  style={{
                    objectFit: 'cover',
                    objectPosition: '42% 70%',
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
