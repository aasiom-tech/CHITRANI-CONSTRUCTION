import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Truck, CheckCircle, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import { equipmentData } from '../data/equipment';
import { EquipmentItem } from '../types';

export const Equipment: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const navigate = useNavigate();

  const categories = [
    { label: 'All Machinery', key: 'All' },
    { label: 'Concrete Equipment', key: 'Concrete Boom Placer' },
  ];

  const filteredEquipment = equipmentData.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const handleRentalClick = (item: EquipmentItem) => {
    navigate(`/request-quote?requirement=Equipment+Rental&equipment=${encodeURIComponent(item.name)}`);
  };

  return (
    <section id="equipment" className="py-16 sm:py-24 bg-white text-[#2D2D2D] border-t border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="font-display text-xs text-[#FFB300] font-bold tracking-wider uppercase block mb-2">
            MACHINERY FLEET & PLANT RENTAL
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2D2D2D] tracking-tight">
            Construction Equipment Rental Fleet
          </h2>
          <p className="mt-3 text-base text-[#5D5D5D] font-body">
            High-efficiency concrete pumps, heavy excavators, cranes, mixers, and site utilities with experienced operators.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-md font-heading text-xs tracking-wider uppercase transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.key
                  ? 'bg-[#FFB300] text-white font-bold shadow-xs'
                  : 'bg-[#F9F7F2] text-[#5D5D5D] hover:text-[#2D2D2D] border border-[#E7E7E7]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-[20px] overflow-hidden border border-[#E7E7E7] hover:-translate-y-1 hover:border-[#FFB300] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between group shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
            >
              {/* Image & Status Badge */}
              <div className="relative h-48 overflow-hidden bg-[#F9F7F2]">
                <img 
                  src={item.image} 
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 text-[#2D2D2D] border border-[#E7E7E7] font-display text-xs font-bold uppercase tracking-wider shadow-xs">
                    <Truck className="w-3.5 h-3.5 text-[#FFB300]" />
                    <span>{item.category}</span>
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md font-display text-xs font-bold uppercase shadow-xs bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Available for Deployment</span>
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#2D2D2D] mb-2 leading-snug group-hover:text-[#FFB300] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#5D5D5D] font-body mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tech Specs */}
                  <div className="bg-[#F9F7F2] p-3 rounded-md border border-[#E7E7E7] space-y-1.5 text-xs font-body mb-4">
                    <div className="flex justify-between items-center text-[#5D5D5D]">
                      <span className="text-[11px] text-[#7D7D7D] font-heading uppercase">Capacity / Output:</span>
                      <span className="font-bold text-[#2D2D2D]">{item.capacity}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#5D5D5D]">
                      <span className="text-[11px] text-[#7D7D7D] font-heading uppercase">Boom Reach:</span>
                      <span className="font-bold text-[#2D2D2D]">{item.boomReach}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#5D5D5D] pt-1.5 border-t border-[#E7E7E7]">
                      <span className="text-[11px] text-[#7D7D7D] font-heading uppercase flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#FFB300]" /> Rental Structure:
                      </span>
                      <span className="text-[11px] text-[#FFB300] font-bold font-heading">{item.rentalStructure}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    to={`/equipment/${item.id}`}
                    className="py-3 px-3 rounded-md bg-[#F9F7F2] hover:bg-[#E7E7E7] border border-[#E7E7E7] text-[#2D2D2D] font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Specs</span>
                    <ArrowUpRight className="w-4 h-4 text-[#FFB300]" />
                  </Link>

                  <button
                    onClick={() => handleRentalClick(item)}
                    className="flex-1 py-3 px-4 rounded-md bg-[#FFB300] hover:bg-[#E59A00] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>Request Rental</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
