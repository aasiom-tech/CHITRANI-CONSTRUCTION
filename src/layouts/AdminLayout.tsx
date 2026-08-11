import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../hooks/useAdminAuth";
import { ROLE_LABELS } from "../types/admin";
import {
  LayoutDashboard,
  Mail,
  FileText,
  Wrench,
  Cog,
  FolderOpen,
  Factory,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard", end: true },
  { to: "/admin/enquiries", icon: Mail, label: "Enquiries", disabled: false },
  { to: "/admin/quotes", icon: FileText, label: "Quotes", disabled: true },
  { to: "/admin/services", icon: Wrench, label: "Services", disabled: true },
  { to: "/admin/equipment", icon: Cog, label: "Equipment", disabled: true },
  { to: "/admin/projects", icon: FolderOpen, label: "Projects", disabled: true },
  { to: "/admin/industries", icon: Factory, label: "Industries", disabled: true },
];

export const AdminLayout: React.FC = () => {
  const { admin, signOut } = useAdminAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-[#E8DDD0] flex flex-col transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand */}
        <div className="px-6 py-5 border-b border-[#E8DDD0]">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-base font-bold text-[#3D352D]" style={{ fontFamily: "var(--font-heading)" }}>
                Chitrani
              </h1>
              <p className="text-[10px] font-semibold text-[#C96F1B] uppercase tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>
                Admin Portal
              </p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded-lg hover:bg-[#F5EEE5] text-[#6B5E4E]"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            if (item.disabled) {
              return (
                <div
                  key={item.to}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#9D9287] cursor-not-allowed"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <Icon size={18} className="opacity-40" />
                  <span>{item.label}</span>
                  <span className="ml-auto text-[9px] font-medium bg-[#F5EEE5] text-[#9D9287] px-1.5 py-0.5 rounded">
                    Soon
                  </span>
                </div>
              );
            }
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#C96F1B]/10 text-[#C96F1B]"
                      : "text-[#6B5E4E] hover:bg-[#F5EEE5]"
                  }`
                }
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Admin info + sign out */}
        <div className="px-3 py-4 border-t border-[#E8DDD0]">
          <div className="px-3 py-2 mb-2">
            <p className="text-xs font-semibold text-[#3D352D]" style={{ fontFamily: "var(--font-heading)" }}>
              {admin ? ROLE_LABELS[admin.role] : "Loading..."}
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#6B5E4E] hover:bg-[#F5EEE5] transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-[#E8DDD0] px-4 py-3 flex items-center gap-4 lg:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#F5EEE5] text-[#6B5E4E]"
          >
            <Menu size={20} />
          </button>
          <div className="flex-1" />
          <div className="text-right">
            <p className="text-xs font-semibold text-[#3D352D]" style={{ fontFamily: "var(--font-heading)" }}>
              {admin ? ROLE_LABELS[admin.role] : ""}
            </p>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
