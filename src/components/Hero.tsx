import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Truck, Clock, ShieldCheck, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import heroBgImage from '../assets/images/chitrani-construction-hero.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] sm:min-h-[750px] lg:min-h-[820px] overflow-hidden flex flex-col justify-between -mt-20 sm:-mt-24 lg:-mt-28">
      
      {/* 1. Full-Screen Hero Background Image (Full height, edge-to-edge cover, centered focal point showing tower crane, building, excavator, mixer truck, and engineers) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#1E293B]">
        <img 
          src={heroBgImage} 
          alt="CHITRANI CONSTRUCTION site with tower crane, building structure, excavator, concrete mixer truck and engineering team"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover object-center"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />

        {/* Very light dark gradient overlay strictly for text readability on the left */}
        <div 
          className="absolute inset-0 hidden sm:block pointer-events-none z-10"
          style={{
            background: `linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.45) 0%,
              rgba(0, 0, 0, 0.25) 35%,
              rgba(0, 0, 0, 0.05) 65%,
              rgba(0, 0, 0, 0) 100%
            )`
          }}
        />

        {/* Mobile light dark overlay for text readability */}
        <div 
          className="absolute inset-0 sm:hidden pointer-events-none z-10"
          style={{
            background: `linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.50) 0%,
              rgba(0, 0, 0, 0.30) 50%,
              rgba(0, 0, 0, 0.10) 100%
            )`
          }}
        />
      </div>

      {/* 2. Vertically Centered Left Content Overlay directly over image */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-32 sm:pt-40 lg:pt-44 pb-16 w-full my-auto">
        <div className="max-w-[600px] text-left space-y-6 sm:space-y-8">
          
          {/* Category Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/92 backdrop-blur-md border border-[#E8DDD0] rounded-xl w-fit shadow-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#C96F1B] animate-pulse" />
            <span className="text-xs font-heading text-[#C96F1B] uppercase tracking-wider font-semibold">
              STRUCTURAL CONTRACTING & EQUIPMENT RENTALS
            </span>
          </motion.div>

          {/* Main Headline: Poppins SemiBold - 68px Desktop / 54px Tablet / 38px Mobile */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[38px] sm:text-[54px] lg:text-[68px] font-semibold text-white font-heading leading-[1.05] tracking-tight"
            style={{
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.35)'
            }}
          >
            Building Tomorrow, <br />
            With <span className="text-[#C96F1B]">Engineering Excellence</span>
          </motion.h1>

          {/* Description Paragraph: Inter - 20px / Max Width 540px / Color: rgba(255,255,255,0.92) */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[16px] sm:text-[20px] text-white/92 font-body leading-[1.75] max-w-[540px] font-normal"
            style={{
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.25)'
            }}
          >
            Chitrani Construction delivers high-grade structural contracting and concrete boom placer fleet rentals across Maharashtra for complex public & private infrastructure projects.
          </motion.p>

          {/* Buttons: Primary (#C96F1B) & Secondary (Transparent, 2px solid White) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-6"
          >
            {/* Primary Button */}
            <Link 
              to="/request-quote" 
              className="px-8 py-4 bg-[#C96F1B] hover:bg-[#B35E17] text-white font-semibold rounded-[12px] transition-all uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-[0_10px_30px_rgba(201,111,27,0.25)] active:scale-95 font-heading focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            {/* Secondary Button */}
            <Link 
              to="/services" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#3D352D] font-semibold rounded-[12px] transition-all uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2.5 active:scale-95 font-heading focus:outline-hidden focus:ring-2 focus:ring-white shadow-sm"
              style={{
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)'
              }}
            >
              <Building2 className="w-4 h-4" />
              <span>Explore Our Services</span>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* 3. Subtle Animated Scroll Indicator (Bottom Center) */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-20 pb-6 hidden md:flex flex-col items-center gap-1.5 text-white hover:text-[#C96F1B] cursor-pointer transition-colors mx-auto"
        onClick={() => {
          const featuresSection = document.getElementById('feature-highlights');
          if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/90 bg-black/30 px-3 py-1 rounded-full backdrop-blur-xs shadow-xs">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/80 bg-black/20 backdrop-blur-xs flex items-start justify-center p-1">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#C96F1B]"
          />
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-[#C96F1B] -mt-1 animate-pulse" />
      </motion.div>

      {/* 4. Feature Highlights Card Anchor Target */}
      <div id="feature-highlights" className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 -mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/95 backdrop-blur-md rounded-[22px] border border-[#EFE8DE] shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-7 sm:p-[36px]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-[#E8DDD0]">
            
            {/* Item 1 */}
            <div className="flex items-center gap-4 lg:px-6 first:lg:pl-0">
              <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] flex items-center justify-center text-[#C96F1B] shrink-0">
                <Building2 className="w-6 h-6 text-[#C96F1B]" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm sm:text-base text-[#3D352D] leading-snug">
                  Structural Contracting
                </h3>
                <p className="text-xs text-[#7E7267] font-body mt-0.5">
                  Organised civil works
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 lg:px-6">
              <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] flex items-center justify-center text-[#C96F1B] shrink-0">
                <Truck className="w-6 h-6 text-[#C96F1B]" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm sm:text-base text-[#3D352D] leading-snug">
                  Heavy Machinery Rentals
                </h3>
                <p className="text-xs text-[#7E7267] font-body mt-0.5">
                  Putzmeister M42-5 fleet
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 lg:px-6">
              <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] flex items-center justify-center text-[#C96F1B] shrink-0">
                <Clock className="w-6 h-6 text-[#C96F1B]" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm sm:text-base text-[#3D352D] leading-snug">
                  On-Time Delivery
                </h3>
                <p className="text-xs text-[#7E7267] font-body mt-0.5">
                  Structured schedules
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-4 lg:px-6 last:lg:pr-0">
              <div className="w-12 h-12 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] flex items-center justify-center text-[#C96F1B] shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#C96F1B]" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm sm:text-base text-[#3D352D] leading-snug">
                  Safety & Quality
                </h3>
                <p className="text-xs text-[#7E7267] font-body mt-0.5">
                  Certified standards
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

    </section>
  );
};
