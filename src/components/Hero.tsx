import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ShieldCheck, MapPin, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import heroBgImage from '../assets/images/chitrani-construction-hero.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-[580px] lg:h-[calc(100vh-18px)] lg:max-h-[820px] lg:min-h-[640px] overflow-hidden flex flex-col justify-center">
      
      {/* 1. Full-Width Construction Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#EADBC8]">
        <img 
          src={heroBgImage} 
          alt="CHITRANI CONSTRUCTION active site with tower crane, building structure, excavator, concrete mixer truck and engineering team"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover object-center"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />

        {/* Desktop Warm Architectural Transparent Scrim */}
        <div 
          className="absolute inset-0 hidden sm:block pointer-events-none z-10"
          style={{
            background: `linear-gradient(
              90deg,
              rgba(245, 238, 229, 0.82) 0%,
              rgba(245, 238, 229, 0.62) 42%,
              rgba(245, 238, 229, 0.25) 72%,
              rgba(245, 238, 229, 0.05) 100%
            )`
          }}
        />

        {/* Mobile Warm Architectural Transparent Scrim */}
        <div 
          className="absolute inset-0 sm:hidden pointer-events-none z-10"
          style={{
            background: `linear-gradient(
              180deg,
              rgba(245, 238, 229, 0.84) 0%,
              rgba(245, 238, 229, 0.65) 60%,
              rgba(245, 238, 229, 0.25) 100%
            )`
          }}
        />
      </div>

      {/* 2. Left-Aligned Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-[116px] sm:pt-[124px] lg:pt-[128px] pb-8 sm:pb-10 w-full my-auto">
        <div className="max-w-[760px] text-left space-y-3.5 sm:space-y-4 lg:space-y-5">
          
          {/* Category Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EEE5]/90 backdrop-blur-md border border-[#E8DDD0] rounded-[10px] w-fit shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
            <span className="text-[11px] sm:text-xs font-heading text-[#3D352D] uppercase tracking-wider font-semibold">
              STRUCTURAL CONTRACTING & BOOM PLACER RENTAL
            </span>
          </motion.div>

          {/* Main Heading: Space Grotesk 600 - Max Width 760px */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[30px] sm:text-[42px] lg:text-[48px] xl:text-[52px] font-semibold text-[#3D352D] font-heading leading-[1.12] tracking-tight max-w-[760px]"
          >
            Building and Powering <br className="hidden sm:inline" />
            Construction Across <br className="hidden sm:inline" />
            <span className="text-[#C96F1B]">Maharashtra</span>
          </motion.h1>

          {/* Description Paragraph: #6B5E4E Earth Brown */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base lg:text-[17px] text-[#6B5E4E] font-body leading-relaxed max-w-[560px]"
          >
            Chitrani Construction supports construction and infrastructure requirements through civil and structural contracting and high-capacity concrete boom placer rental.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
          >
            {/* Primary Button */}
            <Link 
              to="/request-quote" 
              className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading font-semibold rounded-[12px] transition-all uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            {/* Secondary Button */}
            <Link 
              to="/services" 
              className="px-6 sm:px-7 py-3 sm:py-3.5 bg-white/85 hover:bg-[#C96F1B] text-[#C96F1B] hover:text-white border-2 border-[#C96F1B] font-heading font-semibold rounded-[12px] transition-all uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
            >
              <Building2 className="w-4 h-4" />
              <span>Explore Our Services</span>
            </Link>
          </motion.div>

          {/* Small Factual Trust Row */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-3 border-t border-[rgba(107,94,78,0.25)] grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs text-[#6B5E4E] font-body"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C96F1B] shrink-0" />
              <span>GST-Registered Enterprise</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#C96F1B] shrink-0" />
              <span>Putzmeister M42-5 Boom Placer</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C96F1B] shrink-0" />
              <span>Mumbai and Jalgaon Presence</span>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
