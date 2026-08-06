import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ShieldCheck, MapPin, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import heroBgImage from '../assets/images/chitrani-construction-hero.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-[680px] sm:h-[720px] lg:h-[760px] overflow-hidden flex flex-col justify-between">
      
      {/* 1. Full-Width Construction Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#2D2D2D]">
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

        {/* Left-Side Dark Gradient Overlay for High Readability */}
        <div 
          className="absolute inset-0 hidden sm:block pointer-events-none z-10"
          style={{
            background: `linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.60) 0%,
              rgba(0, 0, 0, 0.40) 40%,
              rgba(0, 0, 0, 0.15) 70%,
              rgba(0, 0, 0, 0) 100%
            )`
          }}
        />

        {/* Mobile Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 sm:hidden pointer-events-none z-10"
          style={{
            background: `linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.65) 0%,
              rgba(0, 0, 0, 0.40) 50%,
              rgba(0, 0, 0, 0.15) 100%
            )`
          }}
        />
      </div>

      {/* 2. Left-Aligned Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-32 sm:pt-36 lg:pt-40 pb-12 w-full my-auto">
        <div className="max-w-[640px] text-left space-y-6">
          
          {/* Category Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/95 backdrop-blur-md border border-[#E7E7E7] rounded-[10px] w-fit shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFB300]" />
            <span className="text-xs font-heading text-[#2D2D2D] uppercase tracking-wider font-semibold">
              STRUCTURAL CONTRACTING & BOOM PLACER RENTAL
            </span>
          </motion.div>

          {/* Main Heading: Space Grotesk 600 - Highlight ONLY Maharashtra */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[36px] sm:text-[50px] lg:text-[62px] font-semibold text-white font-heading leading-[1.08] tracking-tight"
            style={{
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
            }}
          >
            Building and Powering Construction Across <span className="text-[#FFB300]">Maharashtra</span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[15px] sm:text-[18px] text-white/95 font-body leading-[1.7] max-w-[560px]"
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
            }}
          >
            Chitrani Construction supports construction and infrastructure requirements through civil and structural contracting and high-capacity concrete boom placer rental.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            {/* Primary Button */}
            <Link 
              to="/request-quote" 
              className="px-7 py-3.5 bg-[#FFB300] hover:bg-[#E59A00] text-[#2D2D2D] font-heading font-semibold rounded-[12px] transition-all uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(255,179,0,0.25)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden focus:ring-2 focus:ring-[#FFB300]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-[#2D2D2D]" />
            </Link>

            {/* Secondary Button */}
            <Link 
              to="/services" 
              className="px-7 py-3.5 bg-white/10 hover:bg-white text-white hover:text-[#2D2D2D] border-2 border-white/80 font-heading font-semibold rounded-[12px] transition-all uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 focus:outline-hidden focus:ring-2 focus:ring-white"
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
            className="pt-4 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/90 font-body"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FFB300] shrink-0" />
              <span>GST-Registered Enterprise</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#FFB300] shrink-0" />
              <span>Putzmeister M42-5 Boom Placer</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FFB300] shrink-0" />
              <span>Mumbai and Jalgaon Presence</span>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
