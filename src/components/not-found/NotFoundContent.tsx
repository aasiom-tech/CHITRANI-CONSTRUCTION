import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Phone, FileText, Truck, Building2 } from 'lucide-react';

export const NotFoundContent: React.FC = () => {
  return (
    <div className="min-h-[75vh] bg-[#EADBC8] text-[#3D352D] pt-[128px] pb-16 px-4 flex items-center justify-center relative overflow-hidden">
      
      {/* Blueprint Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#6B5E4E 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-2xl w-full mx-auto bg-white rounded-[24px] border border-[#E8DDD0] p-8 sm:p-12 text-center space-y-8 shadow-[0_20px_40px_rgba(61,53,45,0.06)] relative z-10">
        
        {/* Label Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider mx-auto">
          <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
          <span>PAGE NOT FOUND</span>
        </div>

        {/* Large 404 Display */}
        <div className="space-y-2">
          <span className="font-heading font-extrabold text-7xl sm:text-9xl text-[#C96F1B] tracking-tight block leading-none select-none">
            404
          </span>
          <h1 className="text-2xl sm:text-4xl font-heading font-semibold text-[#3D352D] tracking-tight">
            The Page You Requested Could Not Be Found
          </h1>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed max-w-lg mx-auto">
            The page may have moved, the address may be incorrect or the content may no longer be available.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
          >
            <Home className="w-4 h-4 text-white" />
            <span>Return Home</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-3.5 rounded-[12px] bg-white border-2 border-[#C96F1B] text-[#C96F1B] hover:bg-[#C96F1B] hover:text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Helpful Quick Links */}
        <div className="pt-6 border-t border-[#E8DDD0] space-y-3">
          <span className="text-xs font-heading font-bold text-[#6B5E4E] uppercase tracking-wider block">
            Or browse popular directory sections:
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-body">
            <Link 
              to="/contact" 
              className="p-3 rounded-[10px] bg-[#F5EEE5] hover:bg-[#E8DDD0] text-[#3D352D] hover:text-[#C96F1B] font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C96F1B]" />
              <span>Contact Us</span>
            </Link>

            <Link 
              to="/request-quote" 
              className="p-3 rounded-[10px] bg-[#F5EEE5] hover:bg-[#E8DDD0] text-[#3D352D] hover:text-[#C96F1B] font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#C96F1B]" />
              <span>Request Quote</span>
            </Link>

            <Link 
              to="/equipment" 
              className="p-3 rounded-[10px] bg-[#F5EEE5] hover:bg-[#E8DDD0] text-[#3D352D] hover:text-[#C96F1B] font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Truck className="w-3.5 h-3.5 text-[#C96F1B]" />
              <span>Equipment</span>
            </Link>

            <Link 
              to="/projects" 
              className="p-3 rounded-[10px] bg-[#F5EEE5] hover:bg-[#E8DDD0] text-[#3D352D] hover:text-[#C96F1B] font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Building2 className="w-3.5 h-3.5 text-[#C96F1B]" />
              <span>Projects</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
