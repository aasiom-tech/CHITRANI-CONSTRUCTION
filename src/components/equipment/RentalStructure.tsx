import React from 'react';
import { Calendar, Clock, CheckCircle2, AlertCircle, UserCheck } from 'lucide-react';

export const RentalStructure: React.FC = () => {
  return (
    <div className="bg-white rounded-[18px] border border-[#E8DDD0] p-6 sm:p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="border-b border-[#E8DDD0] pb-4">
        <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
          Rental Structure
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm font-body">
        <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
          <Calendar className="w-4 h-4 text-[#C96F1B] shrink-0" />
          <span>Equipment supplied on monthly deployment</span>
        </div>
        <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
          <Clock className="w-4 h-4 text-[#C96F1B] shrink-0" />
          <span>One fixed 12-hour shift</span>
        </div>
        <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
          <span>26 working days per month</span>
        </div>
        <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
          <AlertCircle className="w-4 h-4 text-[#6B5E4E] shrink-0" />
          <span>Sundays excluded</span>
        </div>
        <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
          <UserCheck className="w-4 h-4 text-[#C96F1B] shrink-0" />
          <span>Operator included</span>
        </div>
        <div className="p-3.5 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] flex items-center gap-3">
          <UserCheck className="w-4 h-4 text-[#C96F1B] shrink-0" />
          <span>Helper included</span>
        </div>
      </div>

      <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs font-body text-[#6B5E4E] italic space-y-1">
        <p>Availability is subject to confirmation for the requested project period.</p>
        <p>Rental duration, mobilization, site conditions, and final commercial terms are confirmed in the written quotation.</p>
      </div>
    </div>
  );
};
