import React, { useEffect, useState } from "react";
import { useAdminAuth } from "../../hooks/useAdminAuth";
import { apiFetch, ApiError } from "../../lib/api";
import { ROLE_LABELS } from "../../types/admin";
import type { DashboardSummary } from "../../types/admin";
import { Mail, FileText, Wrench, Cog, FolderOpen, Factory, Building2, RefreshCw } from "lucide-react";

export const AdminDashboardPage: React.FC = () => {
  const { admin, signOut } = useAdminAuth();
  const [dashboard, setDashboard] = useState<DashboardSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboard = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch<DashboardSummary>("/api/v1/admin/dashboard");
      setDashboard(data);
    } catch (err) {
      if (err instanceof ApiError && (err.status === 401 || err.status === 403)) {
        await signOut();
        return;
      }
      setError("Dashboard data could not be loaded. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const catalog = dashboard?.catalog;
  const enquiries = dashboard?.enquiries;
  const quotes = dashboard?.quotes;

  return (
    <div className="max-w-5xl">
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

      {/* Error state */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6 flex items-start gap-3">
          <div className="flex-1">
            <p className="text-sm font-medium text-red-800">{error}</p>
          </div>
          <button
            onClick={fetchDashboard}
            className="flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-900 px-3 py-1.5 rounded-lg border border-red-300 hover:bg-red-100 transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <RefreshCw size={14} />
            Retry
          </button>
        </div>
      )}

      {/* Loading state */}
      {loading && !dashboard && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#E8DDD0] p-5 animate-pulse">
              <div className="h-3 bg-[#F5EEE5] rounded w-24 mb-3" />
              <div className="h-7 bg-[#F5EEE5] rounded w-16" />
            </div>
          ))}
        </div>
      )}

      {/* Dashboard content */}
      {dashboard && (
        <>
          {/* Primary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <MetricCard
              icon={<Mail size={18} />}
              label="New Enquiries"
              value={enquiries?.new ?? 0}
              emptyText="No new enquiries"
              to="/admin/enquiries?status=new"
            />
            <MetricCard
              icon={<Mail size={18} />}
              label="Total Enquiries"
              value={enquiries?.total ?? 0}
              emptyText="No enquiries received yet"
              to="/admin/enquiries"
            />
            <MetricCard
              icon={<FileText size={18} />}
              label="Quote Requests"
              value={quotes?.total ?? 0}
              emptyText="No quote requests received yet"
            />
            <MetricCard
              icon={<Cog size={18} />}
              label="Equipment"
              value={catalog?.equipment ?? 0}
            />
            <MetricCard
              icon={<Wrench size={18} />}
              label="Services"
              value={catalog?.services ?? 0}
            />
            <MetricCard
              icon={<FolderOpen size={18} />}
              label="Projects"
              value={catalog?.projects ?? 0}
              emptyText="No projects yet"
            />
          </div>

          {/* Secondary catalog */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <MetricCard
              icon={<Building2 size={18} />}
              label="Business Divisions"
              value={catalog?.businessDivisions ?? 0}
            />
            <MetricCard
              icon={<Factory size={18} />}
              label="Industries"
              value={catalog?.industries ?? 0}
              emptyText="No industries yet"
            />
          </div>

          {/* Enquiry status breakdown */}
          {enquiries && enquiries.total > 0 && (
            <div className="bg-white rounded-2xl border border-[#E8DDD0] p-6 mb-6">
              <h3 className="text-sm font-bold text-[#3D352D] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Enquiry Status
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <StatusPill label="New" count={enquiries.new} color="bg-blue-50 text-blue-700 border-blue-200" />
                <StatusPill label="Contacted" count={enquiries.contacted} color="bg-amber-50 text-amber-700 border-amber-200" />
                <StatusPill label="Qualified" count={enquiries.qualified} color="bg-green-50 text-green-700 border-green-200" />
                <StatusPill label="Closed" count={enquiries.closed} color="bg-gray-50 text-gray-600 border-gray-200" />
              </div>
            </div>
          )}

          {/* Quote status breakdown */}
          {quotes && quotes.total > 0 && (
            <div className="bg-white rounded-2xl border border-[#E8DDD0] p-6">
              <h3 className="text-sm font-bold text-[#3D352D] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Quote Status
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <StatusPill label="New" count={quotes.new} color="bg-blue-50 text-blue-700 border-blue-200" />
                <StatusPill label="Under Review" count={quotes.under_review} color="bg-amber-50 text-amber-700 border-amber-200" />
                <StatusPill label="Clarification" count={quotes.clarification_required} color="bg-orange-50 text-orange-700 border-orange-200" />
                <StatusPill label="Quoted" count={quotes.quoted} color="bg-purple-50 text-purple-700 border-purple-200" />
                <StatusPill label="Won" count={quotes.won} color="bg-green-50 text-green-700 border-green-200" />
                <StatusPill label="Lost" count={quotes.lost} color="bg-red-50 text-red-700 border-red-200" />
                <StatusPill label="Closed" count={quotes.closed} color="bg-gray-50 text-gray-600 border-gray-200" />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

function MetricCard({
  icon,
  label,
  value,
  emptyText,
  to,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  emptyText?: string;
  to?: string;
}) {
  const content = (
    <div className="bg-white rounded-2xl border border-[#E8DDD0] p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[#C96F1B]">{icon}</span>
        <p className="text-xs font-semibold text-[#9D9287] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
          {label}
        </p>
      </div>
      {value > 0 ? (
        <p className="text-2xl font-bold text-[#3D352D]" style={{ fontFamily: "var(--font-heading)" }}>
          {value}
        </p>
      ) : (
        <p className="text-sm text-[#9D9287] italic">
          {emptyText ?? "None"}
        </p>
      )}
    </div>
  );

  if (to) {
    return (
      <a href={to} className="block hover:shadow-md transition-shadow">
        {content}
      </a>
    );
  }

  return content;
}

function StatusPill({
  label,
  count,
  color,
}: {
  label: string;
  count: number;
  color: string;
}) {
  return (
    <div className={`px-3 py-2 rounded-lg border text-center ${color}`}>
      <p className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
        {count}
      </p>
      <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
        {label}
      </p>
    </div>
  );
}
