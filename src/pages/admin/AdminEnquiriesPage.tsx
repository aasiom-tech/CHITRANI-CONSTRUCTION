import React, { useEffect, useState, useCallback } from "react";
import { useAdminAuth } from "../../hooks/useAdminAuth";
import { apiFetch, ApiError } from "../../lib/api";
import type {
  AdminEnquiryListResponse,
  AdminEnquiryStatus,
} from "../../types/admin";
import { Search, Filter, ChevronLeft, ChevronRight, Loader2, AlertCircle, RefreshCw } from "lucide-react";

export const AdminEnquiriesPage: React.FC = () => {
  const { admin, signOut } = useAdminAuth();
  const [data, setData] = useState<AdminEnquiryListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [statusFilter, setStatusFilter] = useState<AdminEnquiryStatus | "all">("all");

  const fetchEnquiries = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
      });
      if (statusFilter !== "all") {
        params.set("status", statusFilter);
      }
      const result = await apiFetch<AdminEnquiryListResponse>(`/api/v1/admin/enquiries?${params.toString()}`);
      setData(result);
    } catch (err) {
      if (err instanceof ApiError && (err.status === 401 || err.status === 403)) {
        await signOut();
        return;
      }
      setError("Enquiries could not be loaded. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [page, limit, statusFilter, signOut]);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  const handleRetry = () => {
    fetchEnquiries();
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && data && newPage <= Math.ceil(data.total / limit)) {
      setPage(newPage);
    }
  };

  const handleFilterChange = (newStatus: AdminEnquiryStatus | "all") => {
    setStatusFilter(newStatus);
    setPage(1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: AdminEnquiryStatus) => {
    switch (status) {
      case "new": return "bg-blue-50 text-blue-700 border-blue-200";
      case "contacted": return "bg-amber-50 text-amber-700 border-amber-200";
      case "qualified": return "bg-green-50 text-green-700 border-green-200";
      case "closed": return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  return (
    <div className="max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#3D352D] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
            Enquiries
          </h1>
          <p className="text-sm text-[#6B5E4E]">
            Manage and track all contact enquiries.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-white rounded-2xl border border-[#E8DDD0] p-4 mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9D9287]" size={18} />
          <input
            type="text"
            placeholder="Search by reference, name, email..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#E8DDD0] bg-white text-[#3D352D] placeholder-[#9D9287] focus:outline-none focus:ring-2 focus:ring-[#C96F1B]/20 focus:border-[#C96F1B]"
            disabled={true}
            title="Search not yet implemented"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="text-[#9D9287]" size={18} />
          <select
            value={statusFilter}
            onChange={(e) => handleFilterChange(e.target.value as AdminEnquiryStatus | "all")}
            className="px-3 py-2.5 rounded-lg border border-[#E8DDD0] bg-white text-[#3D352D] focus:outline-none focus:ring-2 focus:ring-[#C96F1B]/20 focus:border-[#C96F1B] text-sm font-medium"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6 flex items-start gap-3">
          <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
          <div className="flex-1">
            <p className="text-sm font-medium text-red-800">{error}</p>
          </div>
          <button
            onClick={handleRetry}
            className="flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-900 px-3 py-1.5 rounded-lg border border-red-300 hover:bg-red-100 transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <RefreshCw size={14} />
            Retry
          </button>
        </div>
      )}

      {/* Loading state */}
      {loading && !data && (
        <div className="bg-white rounded-2xl border border-[#E8DDD0] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F5EEE5] border-b border-[#E8DDD0]">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#9D9287] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>Reference</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#9D9287] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#9D9287] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>Contact</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#9D9287] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#9D9287] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>Received</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#9D9287] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-[#E8DDD0] animate-pulse">
                    <td className="px-4 py-3"><div className="h-4 bg-[#F5EEE5] rounded w-24" /></td>
                    <td className="px-4 py-3"><div className="h-4 bg-[#F5EEE5] rounded w-32" /></td>
                    <td className="px-4 py-3"><div className="h-4 bg-[#F5EEE5] rounded w-40" /></td>
                    <td className="px-4 py-3"><div className="h-4 bg-[#F5EEE5] rounded w-20" /></td>
                    <td className="px-4 py-3"><div className="h-4 bg-[#F5EEE5] rounded w-28" /></td>
                    <td className="px-4 py-3"><div className="h-4 bg-[#F5EEE5] rounded w-16" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty state / Data */}
      {!loading && data && (
        <>
          {data.items.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#E8DDD0] p-12 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#F5EEE5] flex items-center justify-center mb-4">
                <span className="text-2xl">📭</span>
              </div>
              <h3 className="text-lg font-semibold text-[#3D352D] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {statusFilter !== "all" ? `No ${statusFilter} enquiries` : "No enquiries yet"}
              </h3>
              <p className="text-sm text-[#9D9287]">
                {statusFilter !== "all"
                  ? `There are no enquiries with status "${statusFilter}".`
                  : "When enquiries are submitted, they will appear here."}
              </p>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-2xl border border-[#E8DDD0] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#F5EEE5] border-b border-[#E8DDD0]">
                        <th className="px-4 py-3 text-left text-xs font-semibold text-[#9D9287] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>Reference</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-[#9D9287] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>Name</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-[#9D9287] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>Contact</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-[#9D9287] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>Status</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-[#9D9287] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>Received</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-[#9D9287] uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8DDD0]">
                      {data.items.map((enquiry) => (
                        <tr key={enquiry.id} className="hover:bg-[#FDFBF7] transition-colors">
                          <td className="px-4 py-3">
                            <span className="font-mono text-sm font-medium text-[#3D352D]">{enquiry.referenceNumber}</span>
                          </td>
                          <td className="px-4 py-3">
                            <div>
                              <p className="font-medium text-[#3D352D]">{enquiry.name}</p>
                              {enquiry.company && (
                                <p className="text-xs text-[#9D9287]">{enquiry.company}</p>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="text-sm text-[#6B5E4E]">
                              <p>{enquiry.email}</p>
                              <p className="text-xs text-[#9D9287]">{enquiry.phone}</p>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(enquiry.status)}`} style={{ fontFamily: "var(--font-heading)" }}>
                              {enquiry.status.charAt(0).toUpperCase() + enquiry.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-[#6B5E4E]">
                            {new Date(enquiry.createdAt).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </td>
                          <td className="px-4 py-3">
                            <a
                              href={`/admin/enquiries/${enquiry.id}`}
                              className="inline-flex items-center gap-1 text-sm font-semibold text-[#C96F1B] hover:text-[#B35F18] transition-colors"
                              style={{ fontFamily: "var(--font-heading)" }}
                            >
                              View
                              <ChevronRight size={14} />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pagination */}
              {data.total > limit && (
                <div className="flex items-center justify-between mt-6 px-1">
                  <div className="text-sm text-[#9D9287]">
                    Showing {(page - 1) * limit + 1} to {Math.min(page * limit, data.total)} of {data.total} enquiries
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePageChange(page - 1)}
                      disabled={page === 1}
                      className="px-3 py-1.5 rounded-lg border border-[#E8DDD0] bg-white text-[#6B5E4E] font-medium hover:bg-[#F5EEE5] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="px-3 py-1.5 text-sm font-medium text-[#3D352D]" style={{ fontFamily: "var(--font-heading)" }}>
                      Page {page} of {Math.ceil(data.total / limit)}
                    </span>
                    <button
                      onClick={() => handlePageChange(page + 1)}
                      disabled={page >= Math.ceil(data.total / limit)}
                      className="px-3 py-1.5 rounded-lg border border-[#E8DDD0] bg-white text-[#6B5E4E] font-medium hover:bg-[#F5EEE5] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};