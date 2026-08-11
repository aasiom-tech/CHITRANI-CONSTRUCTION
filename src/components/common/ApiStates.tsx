import React from "react";
import { RefreshCw } from "lucide-react";

export const CardSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="bg-white rounded-2xl border border-[#E8DDD0] p-6 animate-pulse">
        <div className="h-4 bg-[#F5EEE5] rounded w-3/4 mb-3" />
        <div className="h-3 bg-[#F5EEE5] rounded w-full mb-2" />
        <div className="h-3 bg-[#F5EEE5] rounded w-2/3" />
      </div>
    ))}
  </div>
);

export const ApiError: React.FC<{ message: string; onRetry?: () => void }> = ({ message, onRetry }) => (
  <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
    <p className="text-sm text-red-700 mb-3">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-900 px-3 py-1.5 rounded-lg border border-red-300 hover:bg-red-100 transition-colors"
      >
        <RefreshCw size={14} />
        Retry
      </button>
    )}
  </div>
);

export const EmptyState: React.FC<{ message: string }> = ({ message }) => (
  <div className="bg-[#F5EEE5] rounded-2xl p-8 text-center">
    <p className="text-sm text-[#6B5E4E] italic">{message}</p>
  </div>
);
