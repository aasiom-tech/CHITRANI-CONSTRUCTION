import React from 'react';
import { Building2, Truck, ShieldCheck, MapPin } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';

export const Statistics: React.FC = () => {
  const stats = [
    {
      id: 'stat-gst',
      label: 'GST REGISTERED',
      value: companyConfig.gstin,
      subtext: 'Fully Tax Compliant Enterprise',
      icon: ShieldCheck,
    },
    {
      id: 'stat-machinery',
      label: 'PUTZMEISTER M42-5',
      value: '42 Meter',
      subtext: 'Vertical Boom Placer Reach',
      icon: Truck,
    },
    {
      id: 'stat-capacity',
      label: 'CONCRETE POUR RATE',
      value: '160 m³/h',
      subtext: 'High-Output Pumping Capacity',
      icon: Building2,
    },
    {
      id: 'stat-locations',
      label: 'STRATEGIC OFFICES',
      value: 'Mumbai & Jalgaon',
      subtext: 'Andheri East & Ramanand Nagar',
      icon: MapPin,
    },
  ];

  return (
    <section id="statistics" className="bg-[#F9F7F2] py-12 border-y border-[#E7E7E7] text-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div 
                key={stat.id}
                className="bg-white p-6 rounded-[20px] border border-[#E7E7E7] shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#FFB300] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-display text-xs text-[#FFB300] font-bold tracking-wider">
                    {stat.label}
                  </span>
                  <Icon className="w-5 h-5 text-[#FFB300]" />
                </div>
                <div>
                  <div className="font-heading font-bold text-xl sm:text-2xl text-[#2D2D2D] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#7D7D7D] font-body mt-1">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
