import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, CheckCircle2, ArrowRight, FileText } from 'lucide-react';
import { useEquipmentList } from '../hooks/useEquipment';

export const Equipment: React.FC = () => {
  const { data: equipment, loading, error } = useEquipmentList();
  const item = equipment?.[0];

  if (loading) {
    return (
      <section id="equipment" className="py-16 sm:py-24 bg-[#F5EEE5] text-[#3D352D] border-t border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">EQUIPMENT SUPPORT</span>
            <div className="h-8 bg-[#F5EEE5] rounded w-2/3 mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[18px] border border-[#E8DDD0] overflow-hidden animate-pulse">
              <div className="aspect-[16/9] bg-[#F5EEE5]" />
              <div className="p-6 sm:p-8 space-y-4">
                <div className="h-6 bg-[#F5EEE5] rounded w-1/2" />
                <div className="h-4 bg-[#F5EEE5] rounded w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !item) return null;

  return (
    <section id="equipment" className="py-16 sm:py-24 bg-[#F5EEE5] text-[#3D352D] border-t border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-display text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
            EQUIPMENT SUPPORT
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#3D352D] tracking-tight">
            Concrete Placement Equipment for Construction Projects
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Chitrani Construction provides structured concrete boom placer rental for sites requiring high-capacity concrete-placement support.
          </p>
        </div>

        {/* Single Equipment Card Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[18px] border border-[#E8DDD0] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-[#C96F1B] motion-safe:hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C96F1B]/15 text-[#C96F1B] flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    {item.category?.name && (
                      <span className="text-[10px] font-heading font-semibold text-[#9D9287] uppercase tracking-wider block">
                        {item.category.name}
                      </span>
                    )}
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D] tracking-tight group-hover:text-[#C96F1B] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#6B5E4E] font-body leading-relaxed">
                  {item.description || 'Equipment details available on request.'}
                </p>

                <div className="pt-3 border-t border-[#E8DDD0] space-y-2.5">
                  <h4 className="font-heading text-xs text-[#3D352D] font-bold uppercase tracking-wider">
                    Verified Specifications
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B5E4E] font-body">
                    {item.manufacturer && (
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                        <span><strong>{item.manufacturer}</strong></span>
                      </li>
                    )}
                    {item.model && (
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                        <span>Model <strong>{item.model}</strong></span>
                      </li>
                    )}
                    {item.manufactureYear && (
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                        <span>Manufactured in <strong>{item.manufactureYear}</strong></span>
                      </li>
                    )}
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                      <span><strong>Operator and helper</strong> included</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to={`/equipment/${item.slug}`}
                className="w-full sm:w-1/2 py-3.5 px-5 rounded-lg bg-[#3D352D] hover:bg-[#2D2620] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <span>View Equipment Details</span>
                <ArrowRight className="w-4 h-4 text-[#C96F1B]" />
              </Link>

              <Link
                to="/request-quote?service=equipment-rental"
                className="w-full sm:w-1/2 py-3.5 px-5 rounded-lg bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>Request Rental Quote</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
