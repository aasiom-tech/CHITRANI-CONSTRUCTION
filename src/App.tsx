import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import { AdminLayout } from './layouts/AdminLayout';
import { ProtectedRoute } from './components/admin/ProtectedRoute';

// Public route-level code splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const EquipmentPage = lazy(() => import('./pages/EquipmentPage').then(m => ({ default: m.EquipmentPage })));
const EquipmentDetailPage = lazy(() => import('./pages/EquipmentDetailPage').then(m => ({ default: m.EquipmentDetailPage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustriesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const RequestQuotePage = lazy(() => import('./pages/RequestQuotePage').then(m => ({ default: m.RequestQuotePage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage').then(m => ({ default: m.TermsConditionsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Admin route-level code splitting
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage').then(m => ({ default: m.AdminLoginPage })));
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage').then(m => ({ default: m.AdminDashboardPage })));

const PageFallback: React.FC = () => (
  <div className="min-h-[60vh] bg-[#EADBC8] flex items-center justify-center p-4">
    <div className="flex items-center gap-3 px-6 py-3.5 bg-white rounded-[14px] border border-[#E8DDD0] shadow-sm text-xs font-heading font-semibold text-[#3D352D]">
      <span className="w-4 h-4 rounded-full border-2 border-[#C96F1B] border-t-transparent animate-spin" />
      <span>Loading Chitrani Construction...</span>
    </div>
  </div>
);

const AdminFallback: React.FC = () => (
  <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
    <div className="flex items-center gap-3 px-6 py-3.5 bg-white rounded-[14px] border border-[#E8DDD0] shadow-sm text-xs font-semibold text-[#3D352D]">
      <span className="w-4 h-4 rounded-full border-2 border-[#C96F1B] border-t-transparent animate-spin" />
      <span>Loading...</span>
    </div>
  </div>
);

export function App() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <Routes>
          {/* Public website */}
          <Route element={<RootLayout />}>
            <Route element={<Suspense fallback={<PageFallback />}><Outlet /></Suspense>}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/equipment" element={<EquipmentPage />} />
              <Route path="/equipment/:slug" element={<EquipmentDetailPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/request-quote" element={<RequestQuotePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
            </Route>
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>

          {/* Admin portal */}
          <Route path="/admin/login" element={<Suspense fallback={<AdminFallback />}><AdminLoginPage /></Suspense>} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Suspense fallback={<AdminFallback />}><AdminDashboardPage /></Suspense>} />
          </Route>
        </Routes>
      </AdminAuthProvider>
    </BrowserRouter>
  );
}

export default App;
