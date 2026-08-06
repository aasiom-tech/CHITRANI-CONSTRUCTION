import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { servicesData } from '../data/services';
import { FinalCTA } from '../components/FinalCTA';
import { Building2, Truck, ArrowRight, CheckCircle2, FileText } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Construction Contracting & Concrete Boom Placer Rental Services | Chitrani Construction"
        description="Explore Chitrani Construction services: Civil RCC contracting and Putzmeister M42-5 concrete boom placer rentals in Mumbai and Maharashtra."
        canonical="https://chitraniconstruction.com/services"
      />

      <PageHeader
        title="Services & Capabilities"
        subtitle="Turnkey structural civil contracting and high-capacity Putzmeister concrete boom placer rentals for commercial, residential, and infrastructure projects."
        badge="OUR CAPABILITIES"
      />

      <section className="py-16 sm:py-24 bg-[#F5F2EB] text-[#181A1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-xs text-[#A9472B] font-bold uppercase tracking-widest block">
              [VERIFIED SERVICES DIRECTORY]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#181A1B]">
              Core Operational Divisions
            </h2>
            <p className="text-sm text-[#666A6C] leading-relaxed">
              We specialize in structural construction execution and high-reach concrete placer deployment backed by certified technical personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xs border border-[#D8D4CC] shadow-xs hover:shadow-md transition-all flex flex-col overflow-hidden"
              >
                {/* Service Header Image */}
                <div className="relative h-60 bg-[#181A1B] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181A1B] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4 bg-[#242729] text-[#E3AA20] px-3 py-1 rounded-xs font-mono text-[10px] font-bold uppercase tracking-wider border border-[#73787A]/30">
                    {service.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold font-heading">{service.title}</h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-sm text-[#666A6C] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Capabilities */}
                  <div className="space-y-3 pt-2 border-t border-[#D8D4CC]">
                    <h4 className="font-mono text-xs text-[#181A1B] font-bold uppercase tracking-wider">
                      [CAPABILITIES & SCOPE]
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#181A1B]">
                          <CheckCircle2 className="w-4 h-4 text-[#A9472B] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suitable Applications */}
                  <div className="space-y-2 pt-2">
                    <h4 className="font-mono text-[11px] text-[#666A6C] uppercase tracking-wider">
                      Target Applications:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.applications.map((app, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 bg-[#F5F2EB] text-[#181A1B] font-mono text-[11px] border border-[#D8D4CC] rounded-xs"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 border-t border-[#D8D4CC] flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      to={`/services/${service.slug}`}
                      className="w-full sm:w-1/2 px-4 py-3 bg-[#181A1B] hover:bg-[#242729] text-white font-mono text-xs font-bold uppercase tracking-wider text-center rounded-xs transition-colors"
                    >
                      View Details
                    </Link>

                    <Link
                      to={`/request-quote?requirement=${encodeURIComponent(service.slug)}`}
                      className="w-full sm:w-1/2 px-4 py-3 bg-[#A9472B] hover:bg-[#7F3422] text-white font-mono text-xs font-bold uppercase tracking-wider text-center rounded-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#E3AA20]" />
                      <span>Request Quote</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
