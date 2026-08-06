import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, HardHat, Phone, ArrowRight } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';
import { MobileDrawer, navItems } from './MobileDrawer';

export type HeaderState = 'expanded' | 'compact' | 'hidden';

export const Header: React.FC = () => {
  const [headerState, setHeaderState] = useState<HeaderState>('expanded');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const location = useLocation();

  const prevScrollY = useRef(0);
  const accumulatedDelta = useRef(0);
  const ticking = useRef(false);
  const headerRef = useRef<HTMLElement>(null);

  // Smart scroll calculation with accumulated threshold
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - prevScrollY.current;

        // Reset accumulator if scroll direction reverses
        if ((delta > 0 && accumulatedDelta.current < 0) || (delta < 0 && accumulatedDelta.current > 0)) {
          accumulatedDelta.current = 0;
        }
        accumulatedDelta.current += delta;

        if (currentScrollY <= 60) {
          setHeaderState('expanded');
        } else if (currentScrollY > 60 && currentScrollY <= 180) {
          setHeaderState('compact');
        } else {
          // Deeper scroll > 180px
          if (accumulatedDelta.current > 10) {
            setHeaderState('hidden');
          } else if (accumulatedDelta.current < -8) {
            setHeaderState('compact');
          }
        }

        prevScrollY.current = currentScrollY;
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Route change reset
  useEffect(() => {
    setIsDrawerOpen(false);
    const currentScrollY = window.scrollY;
    if (currentScrollY <= 60) {
      setHeaderState('expanded');
    } else {
      setHeaderState('compact');
    }
  }, [location.pathname]);

  // Handle focus inside/outside header for keyboard accessibility
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (headerRef.current && !headerRef.current.contains(e.relatedTarget as Node)) {
      setIsFocused(false);
    }
  };

  // Determine effective header state with interaction overrides
  const isInteracting = isDrawerOpen || isHovered || isFocused;
  let effectiveState = headerState;

  if (isInteracting && headerState === 'hidden') {
    effectiveState = window.scrollY <= 60 ? 'expanded' : 'compact';
  }

  const isExpanded = effectiveState === 'expanded';

  return (
    <>
      <header
        ref={headerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`fixed inset-x-0 z-50 transition-all duration-320 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isExpanded
            ? 'top-[18px] w-[94%] max-w-[1440px] mx-auto rounded-[18px]'
            : effectiveState === 'compact'
            ? 'top-0 w-full rounded-none rounded-b-[16px]'
            : '-translate-y-[110%] top-0 w-full'
        }`}
      >
        {/* Inner Visual Shell */}
        <div
          className={`w-full bg-white/94 backdrop-blur-md text-[#3D352D] border border-[#E8DDD0] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-between px-4 sm:px-6 lg:px-8 ${
            isExpanded
              ? 'h-[84px] sm:h-[88px] rounded-[18px] shadow-[0_10px_30px_rgba(61,53,45,0.08)]'
              : 'h-[62px] sm:h-[66px] rounded-none rounded-b-[16px] shadow-[0_4px_20px_rgba(61,53,45,0.06)]'
          }`}
        >
          
          {/* Left: Brand Block */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={isDrawerOpen}
              className="lg:hidden p-2 rounded-[10px] bg-[#F5EEE5] hover:bg-[#C96F1B] hover:text-white text-[#3D352D] transition-colors border border-[#E8DDD0] active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B] min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-hidden"
              aria-label="Chitrani Construction Home"
            >
              {/* Logo Mark Icon - Smooth desktop collapse */}
              <div
                className={`bg-[#C96F1B] text-white flex items-center justify-center font-bold rounded-[12px] shadow-xs transition-all duration-260 ease-in-out shrink-0 ${
                  isExpanded
                    ? 'w-10 h-10 opacity-100 scale-100'
                    : 'w-8 h-8 lg:w-0 lg:h-0 lg:opacity-0 lg:scale-90 overflow-hidden'
                }`}
              >
                <HardHat className="w-5 h-5 text-white" />
              </div>

              {/* Company Title & Subtitle */}
              <div className="flex flex-col justify-center">
                <span
                  className={`font-heading font-bold tracking-tight text-[#3D352D] group-hover:text-[#C96F1B] transition-colors uppercase leading-none ${
                    isExpanded ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                  }`}
                >
                  CHITRANI <span className="text-[#C96F1B]">CONSTRUCTION</span>
                </span>

                {/* Subtitle - Smooth collapse in compact state */}
                <div
                  className={`overflow-hidden transition-all duration-260 ease-in-out ${
                    isExpanded ? 'max-h-6 opacity-100 mt-1' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  <span className="font-body text-[10px] sm:text-[11px] text-[#6B5E4E] block font-medium tracking-wider leading-none uppercase">
                    CONTRACTING & BOOM PLACER RENTAL
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-heading font-semibold uppercase tracking-wider text-[#3D352D]"
          >
            {navItems
              .filter((item) => !item.isCta)
              .map((item) => {
                const isActive =
                  location.pathname === item.href ||
                  (item.href !== '/' && location.pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative py-1.5 transition-colors duration-180 ${
                      isActive ? 'text-[#C96F1B] font-bold' : 'text-[#3D352D] hover:text-[#C96F1B]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#C96F1B] rounded-full animate-fade-in" />
                    )}
                  </Link>
                );
              })}
          </nav>

          {/* Right: Action Area */}
          <div className="flex items-center gap-3">
            {/* Desktop Request Quote Button */}
            <Link
              to="/request-quote"
              className={`hidden lg:inline-flex items-center justify-center gap-2 bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading font-bold uppercase tracking-wider transition-all duration-250 shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B] ${
                isExpanded
                  ? 'h-[46px] px-5 rounded-[12px] text-xs'
                  : 'h-[40px] px-4 rounded-[10px] text-xs'
              }`}
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>

            {/* Mobile Call Button */}
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              aria-label={`Call ${companyConfig.name}`}
              className="lg:hidden flex items-center gap-1.5 px-3.5 py-2 rounded-[10px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase shadow-xs transition-all active:scale-95 min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">Call</span>
            </a>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};
