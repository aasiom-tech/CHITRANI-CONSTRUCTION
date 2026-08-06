import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MobileActionBar } from '../components/MobileActionBar';
import { ScrollToTop } from '../components/common/ScrollToTop';

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A192F] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      <ScrollToTop />
      
      {/* Accessibility Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-white font-mono text-xs font-bold rounded-sm"
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
