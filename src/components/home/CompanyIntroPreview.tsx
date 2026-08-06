import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, ArrowRight } from 'lucide-react';
import capabilityImg from '../../assets/images/chitrani-construction-capability.png';

export const CompanyIntroPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#2D2D2D] border-b border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F9F7F2] border border-[#E7E7E7] text-[#FFB300] font-heading text-xs font-semibold uppercase tracking-wider">
              <HardHat className="w-4 h-4 text-[#FFB300]" />
              <span className="text-[#2D2D2D]">ABOUT CHITRANI</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-semibold text-[#2D2D2D] tracking-tight leading-snug">
              Construction Capability and Equipment Support Under One Roof
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5D5D5D] leading-relaxed font-body">
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

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[12px] bg-[#FFB300] hover:bg-[#E59A00] text-[#2D2D2D] font-heading text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#FFB300]"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#2D2D2D]" />
              </Link>
            </div>
          </div>

          {/* Right: Construction Capability Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[20px] overflow-hidden border border-[#E7E7E7] shadow-[0_10px_30px_rgba(45,45,45,0.06)] bg-white group aspect-[4/3] sm:aspect-auto">
              <img 
                src={capabilityImg} 
                alt="Chitrani Construction safety helmet, structural blueprints and digital building model at an active construction site"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
                className="w-full h-[280px] sm:h-[400px] lg:h-[440px] object-cover filter brightness-95 scale-[1.03] sm:scale-[1.055] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  objectFit: 'cover',
                  objectPosition: '42% 70%',
                }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
