import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, ArrowRight, MessageSquare } from 'lucide-react';

export const AboutFinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#EADBC8] text-[#3D352D] border-t border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Distinct Terracotta Feature Panel */}
        <div className="bg-[#C96F1B] rounded-[24px] border border-[#B35E17] p-8 sm:p-14 text-center space-y-6 shadow-[0_20px_40px_rgba(201,111,27,0.22)] relative overflow-hidden">
          
          {/* Subtle Grid Texture */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-white/15 border border-white/25 text-white mx-auto backdrop-blur-xs">
              <HardHat className="w-4 h-4 text-white" />
              <span className="font-heading text-xs font-bold tracking-wider uppercase text-white">
                START A CONVERSATION
              </span>
            </div>

            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-white tracking-tight max-w-3xl mx-auto leading-tight">
              Discuss Your Construction or Equipment Requirement
            </h2>

            <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-body leading-relaxed">
              Share your project location, construction requirement, equipment need and expected schedule with Chitrani Construction.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Link
                to="/request-quote"
                className="w-full sm:w-auto px-8 py-3.5 rounded-[12px] bg-white hover:bg-[#F5EEE5] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-[12px] bg-transparent border-2 border-white/85 text-white hover:bg-white hover:text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
