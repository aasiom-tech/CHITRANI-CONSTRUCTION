import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Home, ChevronRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#0A192F] text-white py-24 px-4 text-center">
      <div className="max-w-md mx-auto space-y-6">
        
        <div className="w-20 h-20 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center mx-auto">
          <HardHat className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-orange-400 font-bold tracking-widest uppercase">
            [ERROR 404 • PAGE NOT FOUND]
          </span>
          <h1 className="text-4xl font-heading font-extrabold text-white">
            Site Zone Under Construction
          </h1>
          <p className="text-sm text-slate-400">
            The requested page or resource could not be found or has been relocated within our civil portal.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-sm bg-orange-600 hover:bg-orange-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto px-6 py-3 rounded-sm bg-[#112240] hover:bg-white/10 text-white border border-white/10 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <span>Browse Services</span>
            <ChevronRight className="w-4 h-4 text-orange-400" />
          </Link>
        </div>

      </div>
    </div>
  );
};
