import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MobileActionBar } from '../components/MobileActionBar';
import { ScrollToTop } from '../components/common/ScrollToTop';

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#2D2D2D] flex flex-col font-body selection:bg-[#FFB300] selection:text-[#2D2D2D]">
      <ScrollToTop />
      
      {/* Accessibility Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FFB300] focus:text-[#2D2D2D] font-heading text-xs font-bold rounded-[10px] shadow-md"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Dynamic Route Outlet */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Bottom Bar on Mobile */}
      <MobileActionBar />
    </div>
  );
};
