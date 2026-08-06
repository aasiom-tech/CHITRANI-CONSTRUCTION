import React from 'react';
import { FileText, ShieldCheck } from 'lucide-react';
import { companyConfig } from '../../config/companyConfig';

export const AboutLegalInformation: React.FC = () => {
  const legalDetails = [
    { label: 'Trade Name', value: companyConfig.name },
    { label: 'Legal Name', value: companyConfig.legalName },
    { label: 'Business Constitution', value: 'Sole Proprietorship' },
    { label: 'GSTIN', value: companyConfig.gstin, isHighlight: true },
    { label: 'GST Registration Type', value: 'Regular' },
    { label: 'GST Registration Effective From', value: '06 June 2026' },
    { label: 'Registered State', value: 'Maharashtra' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-2">
            REGISTERED BUSINESS DETAILS
          </span>
          <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight">
            Business Information
          </h2>
        </div>

        {/* Structured Legal Information Panel */}
        <div className="bg-white rounded-[20px] border border-[#E8DDD0] p-7 sm:p-10 shadow-[0_10px_30px_rgba(61,53,45,0.04)] max-w-4xl mx-auto space-y-6">
          
          {/* Header Row with GST Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8DDD0] gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[12px] bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#C96F1B]" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-[#3D352D]">Commercial Registration</h3>
                <p className="text-xs text-[#6B5E4E] font-body">Official enterprise registration details recorded under GST authority.</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] bg-[#E8F4EA] border border-[#A5D6A7] text-[#2E7D32] font-heading text-xs font-semibold uppercase tracking-wider w-fit">
              <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
              <span>GST-Registered Enterprise</span>
            </div>
          </div>

          {/* Structured Definition / Data Table */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body">
            {legalDetails.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-[#F5EEE5] rounded-[12px] border border-[#E8DDD0] space-y-1"
              >
                <dt className="text-[#6B5E4E] font-heading font-semibold text-[11px] uppercase tracking-wider">
                  {item.label}:
                </dt>
                <dd className={`font-semibold text-sm ${item.isHighlight ? 'text-[#C96F1B] font-specs tracking-wide font-bold' : 'text-[#3D352D]'}`}>
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

        </div>

      </div>
    </section>
  );
};
