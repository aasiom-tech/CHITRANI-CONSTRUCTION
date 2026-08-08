import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ShieldCheck, MapPin, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import heroBgImage from '../assets/images/chitrani-construction-hero.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-[580px] lg:h-[calc(100vh-18px)] lg:max-h-[820px] lg:min-h-[640px] overflow-hidden flex flex-col justify-center">

      {/* 1. Full-Width Construction Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#1a2535]">
        <img
          src={heroBgImage}
          alt="CHITRANI CONSTRUCTION active site with tower crane, building structure, excavator, concrete mixer truck and engineering team"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
          className="hero-img absolute inset-0 h-full w-full object-cover"
        />

        {/* Sky blue — color blend so it works regardless of underlying warm tones */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background: `linear-gradient(
              180deg,
              rgba(45, 135, 215, 0.68) 0%,
              rgba(76, 157, 221, 0.52) 18%,
              rgba(113, 180, 229, 0.30) 34%,
              rgba(150, 202, 235, 0.10) 48%,
              transparent 60%
            )`,
            mixBlendMode: 'color'
          }}
        />

        {/* Desktop: neutral dark readability scrim on text side only — NOT warm cream */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden sm:block pointer-events-none z-10"
          style={{
            background: `linear-gradient(
              100deg,
              rgba(12, 18, 28, 0.52) 0%,
              rgba(12, 18, 28, 0.32) 32%,
              rgba(12, 18, 28, 0.10) 56%,
              transparent 76%
            )`
          }}
        />

        {/* Mobile: neutral dark top-down readability scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0 sm:hidden pointer-events-none z-10"
          style={{
            background: `linear-gradient(
              180deg,
              rgba(12, 18, 28, 0.55) 0%,
              rgba(12, 18, 28, 0.40) 55%,
              rgba(12, 18, 28, 0.15) 100%
            )`
          }}
        />
      </div>

      {/* 2. Left-Aligned Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-[116px] sm:pt-[124px] lg:pt-[128px] pb-8 sm:pb-10 w-full my-auto">
        <div className="max-w-[720px] text-left space-y-3.5 sm:space-y-4 lg:space-y-5">

          {/* Category Badge / Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/12 backdrop-blur-md border border-white/30 rounded-[10px] w-fit shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
            <span className="text-[11px] sm:text-xs font-heading text-white uppercase tracking-wider font-semibold">
              RCC • CIVIL CONSTRUCTION • LABOUR CONTRACTS • BRICKWORK • BOOM PLACER RENTAL
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[30px] sm:text-[42px] lg:text-[48px] xl:text-[52px] font-semibold text-white font-heading leading-[1.12] tracking-tight max-w-[700px]"
            style={{ textShadow: '0 2px 14px rgba(0,0,0,0.28)' }}
          >
            Building With Strength. <br className="hidden sm:inline" />
            <span className="text-[#F5A54A]">Delivering With Responsibility.</span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base lg:text-[17px] text-white/88 font-body leading-relaxed max-w-[560px]"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.22)' }}
          >
            End-to-end construction execution for developers, contractors and institutional projects, backed by skilled manpower, disciplined site management and reliable execution.
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
              className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading font-semibold rounded-[12px] transition-all uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(201,111,27,0.40)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
            >
              <span>Request a Quotation</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            {/* Secondary Button */}
            <Link
              to="/projects"
              className="px-6 sm:px-7 py-3 sm:py-3.5 bg-white/12 hover:bg-white/22 text-white border-2 border-white/55 hover:border-white font-heading font-semibold rounded-[12px] transition-all uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 focus:outline-hidden focus:ring-2 focus:ring-white backdrop-blur-sm"
            >
              <Building2 className="w-4 h-4" />
              <span>View Our Projects</span>
            </Link>
          </motion.div>

          {/* Factual Capability Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-3 border-t border-white/20 grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 text-xs text-white/90 font-body"
          >
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#F5A54A] shrink-0" />
              <span className="font-semibold text-[11px] sm:text-xs">RCC Execution</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#F5A54A] shrink-0" />
              <span className="font-semibold text-[11px] sm:text-xs">Skilled Workforce</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#F5A54A] shrink-0" />
              <span className="font-semibold text-[11px] sm:text-xs">Machinery Support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F5A54A] shrink-0" />
              <span className="font-semibold text-[11px] sm:text-xs">Safety-Focused Execution</span>
            </div>
            <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
              <MapPin className="w-3.5 h-3.5 text-[#F5A54A] shrink-0" />
              <span className="font-semibold text-[11px] sm:text-xs">Maharashtra</span>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
