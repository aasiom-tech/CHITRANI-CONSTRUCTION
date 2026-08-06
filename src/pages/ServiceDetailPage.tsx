import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { servicesData } from '../data/services';
import { FinalCTA } from '../components/FinalCTA';
import { 
  Building2, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronLeft, 
  FileText,
  ShieldCheck,
  Wrench
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = servicesData.find(
    (s) => s.id === slug || s.slug === slug
  );

  if (!service) {
    return (
      <div className="py-24 bg-[#181A1B] text-white text-center">
        <div className="max-w-md mx-auto px-4 space-y-4">
          <Wrench className="w-16 h-16 text-[#E3AA20] mx-auto" />
          <h1 className="text-2xl font-bold font-heading">Service Not Found</h1>
          <p className="text-sm text-[#D9D7D1]">
            The requested service details could not be found or may have been relocated.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xs bg-[#A9472B] text-white font-mono text-xs font-bold uppercase tracking-wider"
          >
            <ChevronLeft className="w-4 h-4 text-[#E3AA20]" />
            <span>Back to All Services</span>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.slug === 'concrete-boom-placer-rental' ? Truck : Building2;
  const otherServices = servicesData.filter((s) => s.id !== service.id);

  return (
    <div>
      <SEO 
        title={`${service.title} | Chitrani Construction Services`}
        description={service.description}
        canonical={`https://chitraniconstruction.com/services/${service.slug}`}
      />

      <PageHeader
        title={service.title}
        subtitle={service.description}
        badge={service.category}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' }
        ]}
      />

      <section className="py-16 bg-[#F5F2EB] text-[#181A1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Info Area */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Header Visual & Overview */}
              <div className="bg-white rounded-xs border border-[#D8D4CC] p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xs bg-[#181A1B] text-[#E3AA20] flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#A9472B] font-bold uppercase tracking-wider">
                      [{service.category}]
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#181A1B] mt-1">
                      {service.title} Overview
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#666A6C] leading-relaxed">
                  {service.description} Our trained personnel and certified equipment ensure all project milestones are completed strictly according to technical specifications and safety codes.
                </p>

                <div className="relative h-64 sm:h-80 rounded-xs overflow-hidden border border-[#D8D4CC]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Technical Capabilities */}
              <div className="bg-white rounded-xs border border-[#D8D4CC] p-6 sm:p-8 space-y-4 shadow-xs">
                <h3 className="text-xl font-heading font-bold text-[#181A1B] border-b border-[#D8D4CC] pb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#A9472B]" />
                  <span>Technical Capabilities & Execution Scope</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.capabilities.map((cap, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 bg-[#F5F2EB] rounded-xs border border-[#D8D4CC] flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#A9472B] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#181A1B] font-mono font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Applications */}
              <div className="bg-white rounded-xs border border-[#D8D4CC] p-6 sm:p-8 space-y-4 shadow-xs">
                <h3 className="text-xl font-heading font-bold text-[#181A1B] border-b border-[#D8D4CC] pb-3">
                  Suitable Project Applications
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-[#181A1B]">
                  {service.applications.map((app, idx) => (
                    <div key={idx} className="p-3 bg-[#F5F2EB] rounded-xs border border-[#D8D4CC] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#A9472B]" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-[#181A1B] text-white p-6 sm:p-8 rounded-xs border border-[#242729] space-y-4 shadow-md">
                <div className="flex items-center gap-2 text-[#E3AA20] font-mono text-xs font-bold uppercase">
                  <FileText className="w-4 h-4 text-[#A9472B]" />
                  <span>DIRECT DISPATCH</span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white">
                  Request Quote for {service.title}
                </h3>

                <p className="text-xs text-[#D9D7D1] leading-relaxed">
                  Get custom rate proposals, equipment mobilization dates, and technical consultations for your project site.
                </p>

                <Link
                  to={`/request-quote?requirement=${encodeURIComponent(service.slug)}`}
                  className="w-full py-3.5 px-4 rounded-xs bg-[#A9472B] hover:bg-[#7F3422] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#E3AA20]"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4 text-[#E3AA20]" />
                </Link>
              </div>

              {/* Navigation to other services */}
              {otherServices.length > 0 && (
                <div className="bg-white p-6 rounded-xs border border-[#D8D4CC] space-y-3">
                  <h4 className="font-mono text-xs text-[#181A1B] font-bold uppercase tracking-wider">
                    [OTHER CAPABILITIES]
                  </h4>

                  <div className="space-y-2">
                    {otherServices.map((other) => (
                      <Link
                        key={other.id}
                        to={`/services/${other.slug}`}
                        className="block p-3 rounded-xs bg-[#F5F2EB] hover:bg-[#242729] hover:text-white border border-[#D8D4CC] text-xs text-[#181A1B] font-mono font-bold transition-colors"
                      >
                        {other.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
