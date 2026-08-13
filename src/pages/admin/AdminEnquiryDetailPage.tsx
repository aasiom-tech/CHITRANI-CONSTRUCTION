import React, { useEffect, useState, useCallback } from "react";
import { useAdminAuth } from "../../hooks/useAdminAuth";
import { apiFetch, ApiError } from "../../lib/api";
import type {
  AdminEnquiryDetailResponse,
  AdminEnquiryStatus,
  AdminEnquiryStatusUpdateResponse,
} from "../../types/admin";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Briefcase,
  Calendar,
  Clock,
  Loader2,
  AlertCircle,
  RefreshCw,
  ChevronLeft,
  Save,
  Edit2,
  X,
  MessageSquare,
  History,
  User,
} from "lucide-react";

export const AdminEnquiryDetailPage: React.FC = () => {
  const { admin, signOut } = useAdminAuth();
  const [detail, setDetail] = useState<AdminEnquiryDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusLoading, setStatusLoading] = useState(false);
  const [noteLoading, setNoteLoading] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [noteError, setNoteError] = useState<string | null>(null);

  const enquiryId = window.location.pathname.split("/").pop() || "";

  const fetchDetail = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch<AdminEnquiryDetailResponse>(`/api/v1/admin/enquiries/${enquiryId}`);
      setDetail(data);
    } catch (err) {
      if (err instanceof ApiError && (err.status === 401 || err.status === 403)) {
        await signOut();
        return;
      }
      if (err instanceof ApiError && err.status === 404) {
        setError("Enquiry not found.");
        return;
      }
      setError("Enquiry details could not be loaded. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [enquiryId, signOut]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

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

  const handleStatusUpdate = async (newStatus: AdminEnquiryStatus) => {
    if (!detail) return;
    if (newStatus === detail.enquiry.status) return;

    setStatusLoading(true);
    setError(null);
    try {
      const result = await apiFetch<AdminEnquiryStatusUpdateResponse>(`/api/v1/admin/enquiries/${enquiryId}/status`, {
        method: "PATCH",
        body: { status: newStatus },
      });

      // If changed=false, it was a no-op (same status)
      if (!result.changed) {
        return;
      }

      // Refresh detail and history
      await fetchDetail();
    } catch (err) {
      if (err instanceof ApiError && (err.status === 401 || err.status === 403)) {
        await signOut();
        return;
      }
      if (err instanceof ApiError && err.body?.error?.message) {
        setError(err.body.error.message);
      } else {
        setError("Failed to update status. Please try again.");
      }
    } finally {
      setStatusLoading(false);
    }
  };

  const handleAddNote = async () => {
    const trimmed = noteText.trim();
    if (!trimmed) {
      setNoteError("Note cannot be empty.");
      return;
    }
    if (trimmed.length > 5000) {
      setNoteError("Note is too long (max 5000 characters).");
      return;
    }

    setNoteLoading(true);
    setNoteError(null);
    try {
      await apiFetch(`/api/v1/admin/enquiries/${enquiryId}/notes`, {
        method: "POST",
        body: { note: trimmed },
      });

      setNoteText("");
      await fetchDetail();
    } catch (err) {
      if (err instanceof ApiError && (err.status === 401 || err.status === 403)) {
        await signOut();
        return;
      }
      if (err instanceof ApiError && err.body?.error?.message) {
        setNoteError(err.body.error.message);
      } else {
        setNoteError("Failed to add note. Please try again.");
      }
    } finally {
      setNoteLoading(false);
    }
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="max-w-4xl">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-[#F5EEE5] rounded w-1/3" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="h-12 bg-[#F5EEE5] rounded" />
            <div className="h-12 bg-[#F5EEE5] rounded" />
          </div>
          <div className="h-32 bg-[#F5EEE5] rounded" />
          <div className="h-32 bg-[#F5EEE5] rounded" />
          <div className="h-32 bg-[#F5EEE5] rounded" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-3">
          <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
          <div className="flex-1">
            <p className="text-sm font-medium text-red-800">{error}</p>
          </div>
          <button
            onClick={fetchDetail}
            className="flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-900 px-3 py-1.5 rounded-lg border border-red-300 hover:bg-red-100 transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <RefreshCw size={14} />
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!detail) return null;

  const { enquiry, notes, statusHistory } = detail;
  const isWritable = admin && (admin.role === "admin" || admin.role === "super_admin");
  const statuses: AdminEnquiryStatus[] = ["new", "contacted", "qualified", "closed"];

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <a
            href="/admin/enquiries"
            className="p-2 rounded-lg text-[#6B5E4E] hover:bg-[#F5EEE5] hover:text-[#3D352D] transition-colors"
          >
            <ChevronLeft size={20} />
          </a>
          <div>
            <h1 className="text-2xl font-bold text-[#3D352D]" style={{ fontFamily: "var(--font-heading)" }}>
              {enquiry.referenceNumber}
            </h1>
            <p className="text-sm text-[#6B5E4E]">{enquiry.name}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${getStatusColor(enquiry.status)}`} style={{ fontFamily: "var(--font-heading)" }}>
            {enquiry.status.charAt(0).toUpperCase() + enquiry.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Error toast */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-sm font-medium text-red-800 flex-1">{error}</p>
          <button onClick={() => setError(null)} className="text-red-500 hover:text-red-700">
            <X size={18} />
          </button>
        </div>
      )}

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Enquiry details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact & Message */}
          <div className="bg-white rounded-2xl border border-[#E8DDD0] p-6">
            <h2 className="text-lg font-bold text-[#3D352D] mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
              <Mail size={20} className="text-[#C96F1B]" />
              Contact & Message
            </h2>
            <dl className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <dt className="text-xs font-semibold text-[#9D9287] uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-heading)" }}>Name</dt>
                  <dd className="text-[#3D352D]">{enquiry.name}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-[#9D9287] uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-heading)" }}>Company</dt>
                  <dd className="text-[#6B5E4E]">{enquiry.company ?? "—"}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-[#9D9287] uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-heading)" }}>Email</dt>
                  <dd className="text-[#3D352D]">{enquiry.email}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-[#9D9287] uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-heading)" }}>Phone</dt>
                  <dd className="text-[#3D352D]">{enquiry.phone}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold text-[#9D9287] uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-heading)" }}>Project Location</dt>
                  <dd className="text-[#6B5E4E]">{enquiry.projectLocation ?? "—"}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold text-[#9D9287] uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-heading)" }}>Division / Service</dt>
                  <dd className="text-[#6B5E4E]">
                    {enquiry.division && enquiry.service ? (
                      <span>{enquiry.division.name} / {enquiry.service.name}</span>
                    ) : enquiry.division ? (
                      <span>{enquiry.division.name}</span>
                    ) : enquiry.service ? (
                      <span>{enquiry.service.name}</span>
                    ) : (
                      "—"
                    )}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Message */}
          <div className="bg-white rounded-2xl border border-[#E8DDD0] p-6">
            <h2 className="text-lg font-bold text-[#3D352D] mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
              <MessageSquare size={20} className="text-[#C96F1B]" />
              Message
            </h2>
            <div className="bg-[#F5EEE5] rounded-xl p-4 whitespace-pre-wrap text-[#3D352D]">
              {enquiry.message}
            </div>
          </div>

          {/* Timestamps */}
          <div className="bg-white rounded-2xl border border-[#E8DDD0] p-6">
            <h2 className="text-lg font-bold text-[#3D352D] mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
              <Clock size={20} className="text-[#C96F1B]" />
              Timestamps
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <dt className="text-xs font-semibold text-[#9D9287] uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-heading)" }}>Received</dt>
                <dd className="text-[#3D352D] flex items-center gap-2">
                  <Calendar size={14} className="text-[#9D9287]" />
                  {formatDateTime(enquiry.createdAt)}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-[#9D9287] uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-heading)" }}>Last Updated</dt>
                <dd className="text-[#3D352D] flex items-center gap-2">
                  <Clock size={14} className="text-[#9D9287]" />
                  {formatDateTime(enquiry.updatedAt)}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Right column - Status, Notes, History */}
        <div className="space-y-6">
          {/* Status Management */}
          <div className="bg-white rounded-2xl border border-[#E8DDD0] p-6">
            <h2 className="text-lg font-bold text-[#3D352D] mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
              <History size={20} className="text-[#C96F1B]" />
              Status Management
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#9D9287] uppercase tracking-wider mb-2 block" style={{ fontFamily: "var(--font-heading)" }}>
                  Current Status
                </label>
                <span className={`px-4 py-2 rounded-lg border font-semibold ${getStatusColor(enquiry.status)} text-base`} style={{ fontFamily: "var(--font-heading)" }}>
                  {enquiry.status.charAt(0).toUpperCase() + enquiry.status.slice(1)}
                </span>
              </div>

              {isWritable ? (
                <div>
                  <label className="text-xs font-semibold text-[#9D9287] uppercase tracking-wider mb-2 block" style={{ fontFamily: "var(--font-heading)" }}>
                    Change Status
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {statuses.map((s) => (
                      <button
                        key={s}
                        onClick={() => handleStatusUpdate(s)}
                        disabled={statusLoading || s === enquiry.status}
                        className={`px-3 py-2.5 rounded-lg border font-medium transition-all text-sm ${
                          s === enquiry.status
                            ? getStatusColor(s)
                            : "border-[#E8DDD0] bg-white text-[#6B5E4E] hover:bg-[#F5EEE5] hover:border-[#C96F1B] hover:text-[#C96F1B]"
                        } ${statusLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {statusLoading && s === enquiry.status ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin inline-block mr-1" />
                            Saving...
                          </>
                        ) : (
                          s.charAt(0).toUpperCase() + s.slice(1)
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-sm text-[#9D9287] italic">
                  Viewer role — status changes are read-only.
                </div>
              )}
            </div>
          </div>

          {/* Internal Notes */}
          <div className="bg-white rounded-2xl border border-[#E8DDD0] p-6">
            <h2 className="text-lg font-bold text-[#3D352D] mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
              <MessageSquare size={20} className="text-[#C96F1B]" />
              Internal Notes
            </h2>

            {isWritable ? (
              <div className="space-y-3">
                <textarea
                  value={noteText}
                  onChange={(e) => { setNoteText(e.target.value); setNoteError(null); }}
                  placeholder="Add an internal note..."
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border text-[#3D352D] placeholder-[#9D9287] focus:outline-none focus:ring-2 focus:ring-[#C96F1B]/20 focus:border-[#C96F1B] ${noteError ? "border-red-300" : "border-[#E8DDD0]"} transition-colors`}
                  style={{ fontFamily: "var(--font-heading)" }}
                />
                {noteError && <p className="text-xs text-red-600">{noteError}</p>}
                <button
                  onClick={handleAddNote}
                  disabled={noteLoading || !noteText.trim()}
                  className="px-4 py-2 rounded-lg bg-[#C96F1B] text-white font-semibold hover:bg-[#B35F18] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {noteLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin inline-block mr-1.5" />
                      Adding...
                    </>
                  ) : (
                    <>
                      <MessageSquare size={16} className="inline-block mr-1.5" />
                      Add Note
                    </>
                  )}
                </button>
              </div>
            ) : (
              <p className="text-sm text-[#9D9287] italic">
                Viewer role — notes are read-only.
              </p>
            )}

            {notes.length > 0 && (
              <div className="mt-6 space-y-4">
                {notes.map((note) => (
                  <div key={note.id} className="bg-[#F5EEE5] rounded-xl p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-[#9D9287]" />
                        <span className="text-sm font-medium text-[#3D352D]">
                          {note.authorName ?? "Unknown Admin"}
                        </span>
                        {note.authorRole && (
                          <span className="px-2 py-0.5 rounded text-xs font-semibold bg-white text-[#6B5E4E] border border-[#E8DDD0]">
                            {note.authorRole.charAt(0).toUpperCase() + note.authorRole.slice(1)}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#9D9287] whitespace-nowrap">
                        {formatDateTime(note.createdAt)}
                      </span>
                    </div>
                    <p className="text-[#3D352D] whitespace-pre-wrap">{note.note}</p>
                  </div>
                ))}
              </div>
            )}

            {notes.length === 0 && (
              <p className="text-sm text-[#9D9287] italic mt-4">No internal notes yet.</p>
            )}
          </div>

          {/* Status History */}
          <div className="bg-white rounded-2xl border border-[#E8DDD0] p-6">
            <h2 className="text-lg font-bold text-[#3D352D] mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
              <History size={20} className="text-[#C96F1B]" />
              Status History
            </h2>

            {statusHistory.length > 0 ? (
              <div className="space-y-3">
                {statusHistory.map((entry, index) => (
                  <div key={entry.id} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${index === 0 ? "bg-blue-50" : "bg-[#F5EEE5]"}`}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(entry.oldStatus ?? "new")}`} style={{ fontFamily: "var(--font-heading)" }}>
                          {entry.oldStatus ? entry.oldStatus.charAt(0).toUpperCase() + entry.oldStatus.slice(1) : "—"}
                        </span>
                        <span className="text-[#9D9287]">→</span>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(entry.newStatus)}`} style={{ fontFamily: "var(--font-heading)" }}>
                          {entry.newStatus.charAt(0).toUpperCase() + entry.newStatus.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#9D9287] mt-1">
                        <Clock size={12} />
                        <span>{formatDateTime(entry.changedAt)}</span>
                        {entry.actorName && (
                          <>
                            <span>•</span>
                            <span>by {entry.actorName}</span>
                            {entry.actorRole && (
                              <>
                                <span>•</span>
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-white text-[#6B5E4E] border border-[#E8DDD0]">
                                  {entry.actorRole}
                                </span>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-[#9D9287] italic">No status history recorded.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};