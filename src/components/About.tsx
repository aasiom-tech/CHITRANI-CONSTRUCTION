import React from 'react';
import { Target, Compass, ShieldCheck, HardHat } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';
import capabilityImg from '../assets/images/chitrani-construction-capability.png';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0A192F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-orange-400 font-bold tracking-widest uppercase block mb-3">
            [01. CORPORATE OVERVIEW]
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Engineering Precision. Scalable Infrastructure.
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            {companyConfig.name} is a multidisciplinary construction contracts, civil engineering, and equipment rental enterprise. We specialize in structural contract execution, heavy concrete logistics, and high-capacity machinery deployment for complex public and private sector projects.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={capabilityImg} 
                alt="Chitrani Construction safety helmet, structural blueprints and digital building model at an active construction site"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
                className="w-full h-[320px] sm:h-[420px] object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-[#112240]/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center gap-2 text-orange-400 font-mono text-xs font-bold mb-1">
                  <HardHat className="w-4 h-4" />
                  <span>[SAFETY & QUALITY FIRST]</span>
                </div>
                <p className="text-xs text-slate-400">
                  Zero-harm safety policy, IS-compliant testing, and continuous quality audits across all project sites.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Vision, Principles */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-sm bg-[#112240] border border-white/5 hover:border-orange-500/50 transition-all">
                <div className="w-10 h-10 rounded-sm bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">Our Mission</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  To deliver robust civil infrastructure and turnkey construction contracts on schedule, backed by a modern machinery fleet and rigorous quality control.
                </p>
              </div>

              <div className="p-6 rounded-sm bg-[#112240] border border-white/5 hover:border-orange-500/50 transition-all">
                <div className="w-10 h-10 rounded-sm bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">Our Vision</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  To be the most trusted infrastructure development partner for government agencies, corporate developers, and high-scale contractors across the region.
                </p>
              </div>
            </div>

            {/* Core Commitments */}
            <div className="p-6 rounded-sm bg-[#112240] border border-white/10 text-white space-y-4">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-400" />
                <span>Our Core Operating Commitments</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="space-y-1">
                  <div className="font-mono text-orange-400 font-bold">[Safety Commitment]</div>
                  <p className="text-slate-400">Mandatory EHS protocols, PPE enforcement, daily site toolbox talks, and hazard assessments.</p>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-orange-400 font-bold">[Quality Framework]</div>
                  <p className="text-slate-400">Third-party concrete testing, slump tests, retention checks, and cube strength verification.</p>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-orange-400 font-bold">[Equipment Reliability]</div>
                  <p className="text-slate-400">Dedicated mobile mechanics, preventive maintenance logs, and 24/7 breakdown support.</p>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-orange-400 font-bold">[Financial Discipline]</div>
                  <p className="text-slate-400">Transparent billing, BOQ adherence, milestone reporting, and contractual compliance.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

