import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ShieldCheck, MapPin, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import heroBgImage from '../assets/images/chitrani-construction-hero.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-[680px] sm:h-[720px] lg:h-[760px] overflow-hidden flex flex-col justify-between">
      
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

        {/* Desktop Warm Architectural Overlay */}
        <div 
          className="absolute inset-0 hidden sm:block pointer-events-none z-10"
          style={{
            background: `linear-gradient(
              90deg,
              rgba(234, 219, 200, 0.97) 0%,
              rgba(234, 219, 200, 0.88) 34%,
              rgba(234, 219, 200, 0.52) 58%,
              rgba(234, 219, 200, 0.14) 82%,
              rgba(234, 219, 200, 0.04) 100%
            )`
          }}
        />

        {/* Mobile Warm Architectural Overlay */}
        <div 
          className="absolute inset-0 sm:hidden pointer-events-none z-10"
          style={{
            background: `linear-gradient(
              180deg,
              rgba(234, 219, 200, 0.97) 0%,
              rgba(234, 219, 200, 0.85) 50%,
              rgba(234, 219, 200, 0.35) 100%
            )`
          }}
        />
      </div>

      {/* 2. Left-Aligned Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-32 sm:pt-36 lg:pt-40 pb-12 w-full my-auto">
        <div className="max-w-[760px] text-left space-y-6">
          
          {/* Category Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F5EEE5] backdrop-blur-md border border-[#E8DDD0] rounded-[10px] w-fit shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
            <span className="text-xs font-heading text-[#3D352D] uppercase tracking-wider font-semibold">
              STRUCTURAL CONTRACTING & BOOM PLACER RENTAL
            </span>
          </motion.div>

          {/* Main Heading: Space Grotesk 600 - Max Width 760px */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[36px] sm:text-[48px] lg:text-[58px] font-semibold text-[#3D352D] font-heading leading-[1.1] tracking-tight max-w-[760px]"
          >
            Building and Powering <br />
            Construction Across <br />
            <span className="text-[#C96F1B]">Maharashtra</span>
          </motion.h1>

          {/* Description Paragraph: #6B5E4E Earth Brown */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[15px] sm:text-[18px] text-[#6B5E4E] font-body leading-[1.7] max-w-[560px]"
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
              className="px-7 py-3.5 bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading font-semibold rounded-[12px] transition-all uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            {/* Secondary Button */}
            <Link 
              to="/services" 
              className="px-7 py-3.5 bg-white/80 hover:bg-[#C96F1B] text-[#C96F1B] hover:text-white border-2 border-[#C96F1B] font-heading font-semibold rounded-[12px] transition-all uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
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
            className="pt-4 border-t border-[rgba(107,94,78,0.25)] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#6B5E4E] font-body"
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
