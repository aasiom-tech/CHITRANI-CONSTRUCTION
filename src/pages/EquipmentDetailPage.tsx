import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { equipmentData } from '../data/equipment';
import { FinalCTA } from '../components/FinalCTA';
import { 
  Truck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ChevronLeft, 
  ShieldAlert,
  ShieldCheck,
  FileText,
  Users
} from 'lucide-react';

export const EquipmentDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const item = equipmentData.find(
    (e) => e.id === slug || e.slug === slug || slug === 'putzmeister-m42-5'
  );

  if (!item) {
    return (
      <div className="py-24 bg-[#181A1B] text-white text-center">
        <div className="max-w-md mx-auto px-4 space-y-4">
          <ShieldAlert className="w-16 h-16 text-[#E3AA20] mx-auto" />
          <h1 className="text-2xl font-bold font-heading">Equipment Not Found</h1>
          <p className="text-sm text-[#D9D7D1]">
            The requested machinery specification could not be found or may have been relocated.
          </p>
          <Link
            to="/equipment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xs bg-[#A9472B] text-white font-mono text-xs font-bold uppercase tracking-wider"
          >
            <ChevronLeft className="w-4 h-4 text-[#E3AA20]" />
            <span>Back to Equipment Showcase</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SEO 
        title={`${item.name} Technical Specifications | Chitrani Construction`}
        description={`Technical specifications for ${item.name}. ${item.boomReach}, ${item.capacity}, BS6 AdBlue compliant with certified operator and helper.`}
        canonical={`https://chitraniconstruction.com/equipment/${item.slug}`}
      />

      <PageHeader
        title={item.name}
        subtitle={`${item.model} — ${item.boomReach} and ${item.capacity}. Includes operator and maintenance helper.`}
        badge={item.category}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Equipment Rental', href: '/equipment' }
        ]}
      />

      <section className="py-16 bg-[#F5F2EB] text-[#181A1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Machinery Specs */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Image Showcase */}
              <div className="relative rounded-xs overflow-hidden border border-[#D8D4CC] shadow-md bg-[#181A1B] h-[360px] sm:h-[440px]">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181A1B] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-xs bg-[#181A1B] text-[#E3AA20] border border-[#73787A]/30 font-mono text-xs font-bold uppercase flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5" />
                    <span>{item.category}</span>
                  </span>
                  <span className="px-3 py-1 rounded-xs bg-[#A9472B] text-white font-mono text-xs font-bold uppercase">
                    BS6 AdBlue Compliant
                  </span>
                </div>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="bg-white p-6 sm:p-8 rounded-xs border border-[#D8D4CC] space-y-6 shadow-xs">
                <h3 className="text-xl font-heading font-bold text-[#181A1B] border-b border-[#D8D4CC] pb-3">
                  Technical Specifications & Key Parameters
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
                  {item.keySpecs.map((spec, idx) => (
                    <div key={idx} className="bg-[#F5F2EB] p-3.5 rounded-xs border border-[#D8D4CC] space-y-1">
                      <div className="text-[#666A6C] text-[10px] uppercase font-semibold">[{spec.label}]:</div>
                      <div className="font-bold text-[#181A1B] text-sm">{spec.value}</div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-[#181A1B] text-white rounded-xs border border-[#242729] space-y-2">
                  <div className="font-mono text-xs text-[#E3AA20] font-bold uppercase flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#A9472B]" />
                    <span>Operator & Helper Included</span>
                  </div>
                  <p className="text-xs text-[#D9D7D1] leading-relaxed">
                    {item.operatorInclusion}. Dedicated site personnel ensure zero delay in boom unfolding, pipe coupling, and continuous concrete discharge.
                  </p>
                </div>

                <div className="pt-2 text-sm text-[#666A6C] leading-relaxed">
                  {item.description}
                </div>
              </div>

              {/* Scope & Deployment Terms */}
              <div className="bg-white p-6 sm:p-8 rounded-xs border border-[#D8D4CC] space-y-4 shadow-xs">
                <h3 className="text-lg font-heading font-bold text-[#181A1B] border-b border-[#D8D4CC] pb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#A9472B]" />
                  <span>Rental Terms & Client Scope Summary</span>
                </h3>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#181A1B] font-mono">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A9472B] shrink-0 mt-0.5" />
                    <span><strong>Rental Structure:</strong> {item.rentalStructure}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A9472B] shrink-0 mt-0.5" />
                    <span><strong>Mobilization:</strong> Rapid dispatch from Mumbai or Jalgaon operating hubs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A9472B] shrink-0 mt-0.5" />
                    <span><strong>Site Scope:</strong> Client to provide diesel, raw concrete delivery via transit mixers, and safe outrigger pad grounds.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Rental Inquiry */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-[#181A1B] text-white p-6 sm:p-8 rounded-xs border border-[#242729] space-y-4 shadow-md">
                <div className="flex items-center gap-2 text-[#E3AA20] font-mono text-xs font-bold uppercase">
                  <FileText className="w-4 h-4 text-[#A9472B]" />
                  <span>DIRECT RENTAL DISPATCH</span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white">
                  Rent {item.name}
                </h3>

                <p className="text-xs text-[#D9D7D1] leading-relaxed">
                  Request shift rates, monthly contract rates, and equipment mobilization dates for your site.
                </p>

                <Link
                  to={`/request-quote?requirement=concrete-boom-placer-rental&equipment=${encodeURIComponent(item.slug)}`}
                  className="w-full py-3.5 px-4 rounded-xs bg-[#A9472B] hover:bg-[#7F3422] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#E3AA20]"
                >
                  <span>Request Rental Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#E3AA20]" />
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
