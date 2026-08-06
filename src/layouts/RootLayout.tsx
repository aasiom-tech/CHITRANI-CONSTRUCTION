import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MobileActionBar } from '../components/MobileActionBar';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { ErrorBoundary } from '../components/common/ErrorBoundary';

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#EADBC8] text-[#6B5E4E] flex flex-col font-body selection:bg-[#C96F1B] selection:text-white">
      <ScrollToTop />
      
      {/* Accessibility Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C96F1B] focus:text-white font-heading text-xs font-bold rounded-[10px] shadow-md"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Dynamic Route Outlet with Error Boundary */}
      <main id="main-content" className="flex-1">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Bottom Bar on Mobile */}
      <MobileActionBar />
    </div>
  );
};
