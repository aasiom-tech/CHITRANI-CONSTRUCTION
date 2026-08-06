import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Home, ChevronRight } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="404 Page Not Found | Chitrani Construction" 
        description="The requested page could not be found within the Chitrani Construction portal." 
      />
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F9F7F2] text-[#2D2D2D] py-24 px-4 text-center">
        <div className="max-w-md mx-auto space-y-6">
          
          <div className="w-20 h-20 rounded-2xl bg-[#FFB300]/15 border border-[#FFB300]/30 text-[#FFB300] flex items-center justify-center mx-auto shadow-md">
            <HardHat className="w-10 h-10 text-[#FFB300]" />
          </div>

          <div className="space-y-2">
            <span className="font-heading text-xs text-[#FFB300] font-bold tracking-widest uppercase block">
              ERROR 404 • PAGE NOT FOUND
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-[#2D2D2D]">
              Page Not Found
            </h1>
            <p className="text-sm text-[#5D5D5D] leading-relaxed font-body">
              The requested resource or page could not be found or may have been relocated within our construction portal.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 rounded-[12px] bg-[#FFB300] hover:bg-[#E59A00] text-[#2D2D2D] font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md focus:outline-hidden focus:ring-2 focus:ring-[#FFB300]"
            >
              <Home className="w-4 h-4 text-[#2D2D2D]" />
              <span>Return to Home</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto px-6 py-3 rounded-[12px] bg-white hover:bg-white/80 text-[#2D2D2D] border border-[#E7E7E7] font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#FFB300]"
            >
              <span>Browse Services</span>
              <ChevronRight className="w-4 h-4 text-[#FFB300]" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
