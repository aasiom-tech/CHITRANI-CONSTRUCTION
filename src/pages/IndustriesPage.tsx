import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { industriesData } from '../data/industries';
import { FinalCTA } from '../components/FinalCTA';
import { Building2, Landmark, Truck, CheckCircle2, ArrowRight, FileText } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Building2,
  Landmark,
  Truck
};

export const IndustriesPage: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Industries Served | Real Estate, Infrastructure, Equipment Support | Chitrani Construction"
        description="Chitrani Construction serves Real Estate, Infrastructure, and Main Contractors across Maharashtra with RCC civil contracting and Putzmeister concrete boom placer rentals."
        canonical="https://chitraniconstruction.com/industries"
      />

      <PageHeader
        title="Industries We Support"
        subtitle="Specialized structural contracting and concrete boom placer rental support for developers, civil infrastructure authorities, and prime main contractors."
        badge="TARGET SECTORS"
      />

      <section className="py-16 sm:py-24 bg-[#F5F2EB] text-[#181A1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-xs text-[#A9472B] font-bold uppercase tracking-widest block">
              [SECTOR EXPERTISE]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#181A1B]">
              Verified Sector Focus
            </h2>
            <p className="text-sm text-[#666A6C] leading-relaxed">
              We focus specifically on three core domain areas where our engineering leadership and Putzmeister machinery deliver maximum value.
            </p>
          </div>

          {/* Alternating Industry Panels */}
          <div className="space-y-12">
            {industriesData.map((ind, index) => {
              const IconComp = iconMap[ind.iconName] || Building2;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={ind.id}
                  className="bg-white rounded-xs border border-[#D8D4CC] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-6 relative bg-[#181A1B] min-h-[320px] lg:min-h-[420px] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={ind.image}
                      alt={ind.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181A1B] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-4 left-4 bg-[#242729] text-[#E3AA20] p-2.5 rounded-xs border border-[#73787A]/30">
                      <IconComp className="w-6 h-6 text-[#A9472B]" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white p-4 bg-[#242729]/90 backdrop-blur-xs rounded-xs border border-[#73787A]/30">
                      <span className="font-mono text-xs text-[#E3AA20] font-bold uppercase">
                        SECTOR 0{index + 1}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-white">
                        {ind.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F5F2EB] text-[#A9472B] font-mono text-[11px] font-bold uppercase rounded-xs border border-[#D8D4CC]">
                        <IconComp className="w-3.5 h-3.5" />
                        <span>SECTOR CAPABILITY</span>
                      </div>

                      <h3 className="text-2xl font-bold font-heading text-[#181A1B]">
                        {ind.name}
                      </h3>

                      <p className="text-sm text-[#666A6C] leading-relaxed">
                        {ind.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#D8D4CC]">
                        <h4 className="font-mono text-xs text-[#181A1B] font-bold uppercase tracking-wider">
                          [KEY EXECUTION SCOPE]
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {ind.capabilities.map((cap, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-2 text-xs text-[#181A1B] font-mono">
                              <CheckCircle2 className="w-4 h-4 text-[#A9472B] shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#D8D4CC]">
                      <Link
                        to={`/request-quote?requirement=${encodeURIComponent(ind.name)}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#A9472B] hover:bg-[#7F3422] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#E3AA20]" />
                        <span>Request Quote for {ind.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#E3AA20]" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
