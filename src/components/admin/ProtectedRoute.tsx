import React from "react";
import { Navigate } from "react-router-dom";
import { useAdminAuth } from "../../hooks/useAdminAuth";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { admin, loading } = useAdminAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex items-center gap-3 px-6 py-3.5 bg-[#F5EEE5] rounded-[14px] border border-[#E8DDD0] shadow-sm text-xs font-semibold text-[#3D352D]" style={{ fontFamily: "var(--font-heading)" }}>
          <span className="w-4 h-4 rounded-full border-2 border-[#C96F1B] border-t-transparent animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};
