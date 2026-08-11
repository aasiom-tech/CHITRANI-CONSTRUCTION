import React from "react";
import { useAdminAuth } from "../../hooks/useAdminAuth";
import { ROLE_LABELS } from "../../types/admin";

export const AdminDashboardPage: React.FC = () => {
  const { admin } = useAdminAuth();

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-[#3D352D] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
        Admin Dashboard
      </h1>
      <p className="text-sm text-[#6B5E4E] mb-8">
        Welcome to the Chitrani Construction admin portal.
      </p>

      {/* Role card */}
      <div className="bg-white rounded-2xl border border-[#E8DDD0] p-6 mb-6">
        <p className="text-xs font-semibold text-[#9D9287] uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-heading)" }}>
          Current Role
        </p>
        <p className="text-lg font-bold text-[#3D352D]" style={{ fontFamily: "var(--font-heading)" }}>
          {admin ? ROLE_LABELS[admin.role] : "Loading..."}
        </p>
      </div>

      {/* Placeholder metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Enquiries", "Quotes", "Services", "Equipment", "Projects", "Industries"].map((label) => (
          <div
            key={label}
            className="bg-white rounded-2xl border border-[#E8DDD0] p-5"
          >
            <p className="text-xs font-semibold text-[#9D9287] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              {label}
            </p>
            <p className="text-sm text-[#6B5E4E] italic">
              Dashboard metrics will appear once connected.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
