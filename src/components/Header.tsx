import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, HardHat, Phone } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';
import { MobileDrawer, navItems } from './MobileDrawer';

export const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-4 sm:top-6 lg:top-7 z-50 w-[92%] max-w-7xl mx-auto bg-white/94 backdrop-blur-[18px] border border-[#E8DDD0] rounded-[22px] text-[#3D352D] transition-all shadow-md">
        <div className="px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Left: Mobile Toggle & Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={isDrawerOpen}
              className="lg:hidden p-2.5 rounded-xl bg-[#F5EEE5] hover:bg-[#C96F1B] text-[#3D352D] hover:text-white transition-colors border border-[#E8DDD0] active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
            >
              <Menu className="w-5 h-5 text-[#C96F1B] group-hover:text-white" />
            </button>

            <Link 
              to="/" 
              className="flex items-center gap-3 group focus:outline-hidden"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#C96F1B] flex items-center justify-center font-bold text-white rounded-xl shadow-xs group-hover:bg-[#B35E17] transition-colors">
                <HardHat className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-semibold text-base sm:text-lg tracking-tight text-[#3D352D] group-hover:text-[#C96F1B] transition-colors block leading-none uppercase">
                  CHITRANI <span className="text-[#C96F1B]">CONSTRUCTION</span>
                </span>
                <span className="font-body text-[10px] text-[#7E7267] block font-medium tracking-wider leading-tight uppercase mt-1">
                  CONTRACTING & BOOM PLACER RENTAL
                </span>
              </div>
            </Link>
          </div>

          {/* Center/Right: Desktop Nav */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs font-heading font-semibold uppercase tracking-wider text-[#3D352D]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));

              if (item.isCta) {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="ml-2 px-5 py-2.5 bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading font-semibold tracking-wider uppercase transition-all rounded-[12px] shadow-[0_10px_30px_rgba(201,111,27,0.25)] active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`py-1.5 transition-all ${
                    isActive 
                      ? 'text-[#C96F1B] font-semibold border-b-2 border-[#C96F1B]' 
                      : 'text-[#3D352D] hover:text-[#C96F1B]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Mobile Quick Call */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              aria-label={`Call ${companyConfig.name}`}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-body text-xs font-bold uppercase shadow-xs transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">Call</span>
            </a>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </>
  );
};
