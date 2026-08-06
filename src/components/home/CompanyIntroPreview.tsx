import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, ArrowRight } from 'lucide-react';
import capabilityImg from '../../assets/images/chitrani-construction-capability.png';

export const CompanyIntroPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider">
              <HardHat className="w-4 h-4 text-[#C96F1B]" />
              <span>ABOUT CHITRANI</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-semibold text-[#3D352D] tracking-tight leading-snug">
              Construction Capability and Equipment Support Under One Roof
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B5E4E] leading-relaxed font-body">
              <p>
                Chitrani Construction is a multidisciplinary construction, civil engineering, and equipment rental enterprise based in Maharashtra and operating across the Mumbai construction market.
              </p>
              <p>
                We support demanding public and private sector projects through structural contract execution, heavy concrete logistics, and high-capacity machinery deployment. Whether a client needs construction execution or a concrete boom placer with an operating crew, Chitrani brings together the equipment, people, and site coordination required to support the work.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider transition-colors shadow-[0_10px_30px_rgba(201,111,27,0.25)]"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Right: Construction Capability & Engineering Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[18px] overflow-hidden border border-[#EFE8DE] shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white group aspect-[4/3] sm:aspect-auto">
              <img 
                src={capabilityImg} 
                alt="Chitrani Construction safety helmet, structural blueprints and digital building model at an active construction site"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
                className="w-full h-[280px] sm:h-[400px] lg:h-[440px] object-cover filter brightness-95 scale-[1.03] sm:scale-[1.06] transition-transform duration-500"
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
