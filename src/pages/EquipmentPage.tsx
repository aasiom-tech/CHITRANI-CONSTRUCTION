import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { equipmentData } from '../data/equipment';
import { FinalCTA } from '../components/FinalCTA';
import { 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Clock, 
  Users,
  Award
} from 'lucide-react';

export const EquipmentPage: React.FC = () => {
  const item = equipmentData[0]; // Putzmeister M42-5

  return (
    <div>
      <SEO 
        title="Putzmeister M42-5 Concrete Boom Placer Rental | Chitrani Construction"
        description="Rent Putzmeister M42-5 Concrete Boom Placer with certified operator and helper in Mumbai and Maharashtra. 42m vertical reach, 160 m3/h capacity, BS6 AdBlue compliant."
        canonical="https://chitraniconstruction.com/equipment"
      />

      <PageHeader
        title="Featured Equipment Rental"
        subtitle="High-capacity Putzmeister M42-5 Concrete Boom Placer complete with certified operator and helper crew for uninterrupted pours."
        badge="EQUIPMENT SHOWCASE"
      />

      <section className="py-16 sm:py-24 bg-[#F5F2EB] text-[#181A1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-xs text-[#A9472B] font-bold uppercase tracking-widest block">
              [AVAILABLE EQUIPMENT]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#181A1B]">
              Putzmeister M42-5 Concrete Boom Placer
            </h2>
            <p className="text-sm text-[#666A6C] leading-relaxed">
              Industrial concrete placement machinery deployed with full crew support across Maharashtra.
            </p>
          </div>

          {/* Machinery Showcase Card */}
          <div className="bg-white rounded-xs border border-[#D8D4CC] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 relative bg-[#181A1B] min-h-[360px] lg:min-h-full">
              <img
                src={item.image}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181A1B] via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-4 left-4 bg-[#242729] text-[#E3AA20] px-3 py-1 rounded-xs font-mono text-xs font-bold uppercase border border-[#73787A]/30">
                {item.category}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white p-4 bg-[#242729]/90 backdrop-blur-xs rounded-xs border border-[#73787A]/30 space-y-1">
                <div className="font-mono text-[10px] text-[#E3AA20] uppercase font-bold">
                  MODEL: {item.model}
                </div>
                <div className="font-heading font-bold text-xl text-white">
                  {item.name}
                </div>
              </div>
            </div>

            {/* Content & Specs Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F5F2EB] text-[#A9472B] font-mono text-[11px] font-bold uppercase rounded-xs border border-[#D8D4CC]">
                  <Truck className="w-3.5 h-3.5" />
                  <span>5-ARM RZ BOOM KINEMATICS</span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-[#181A1B]">
                  {item.name}
                </h3>

                <p className="text-sm text-[#666A6C] leading-relaxed">
                  {item.clientScopeSummary}
                </p>

                {/* Key Spec Matrix */}
                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs text-[#181A1B]">
                  <div className="p-3 bg-[#F5F2EB] rounded-xs border border-[#D8D4CC]">
                    <div className="text-[10px] text-[#666A6C] uppercase">Boom Reach:</div>
                    <div className="font-bold text-[#A9472B]">{item.boomReach}</div>
                  </div>

                  <div className="p-3 bg-[#F5F2EB] rounded-xs border border-[#D8D4CC]">
                    <div className="text-[10px] text-[#666A6C] uppercase">Output Capacity:</div>
                    <div className="font-bold">{item.capacity}</div>
                  </div>

                  <div className="p-3 bg-[#F5F2EB] rounded-xs border border-[#D8D4CC]">
                    <div className="text-[10px] text-[#666A6C] uppercase">Emission Standard:</div>
                    <div className="font-bold">{item.adBlueStatus}</div>
                  </div>

                  <div className="p-3 bg-[#F5F2EB] rounded-xs border border-[#D8D4CC]">
                    <div className="text-[10px] text-[#666A6C] uppercase">Crew Included:</div>
                    <div className="font-bold text-emerald-700">Operator & Helper</div>
                  </div>
                </div>

                {/* Rental Terms Highlight */}
                <div className="p-4 bg-[#181A1B] text-white rounded-xs border border-[#242729] space-y-1">
                  <div className="font-mono text-[10px] text-[#E3AA20] uppercase font-bold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#A9472B]" />
                    <span>Rental Terms & Structure</span>
                  </div>
                  <p className="text-xs text-[#D9D7D1]">
                    {item.rentalStructure}. Rapid site mobilization from Mumbai / Jalgaon dispatch hubs.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#D8D4CC] flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to={`/equipment/${item.slug}`}
                  className="w-full sm:w-1/2 py-3 px-4 bg-[#181A1B] hover:bg-[#242729] text-white font-mono text-xs font-bold uppercase tracking-wider text-center rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Full Technical Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E3AA20]" />
                </Link>

                <Link
                  to={`/request-quote?requirement=concrete-boom-placer-rental&equipment=${encodeURIComponent(item.slug)}`}
                  className="w-full sm:w-1/2 py-3 px-4 bg-[#A9472B] hover:bg-[#7F3422] text-white font-mono text-xs font-bold uppercase tracking-wider text-center rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-[#E3AA20]" />
                  <span>Request Rental CTA</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
