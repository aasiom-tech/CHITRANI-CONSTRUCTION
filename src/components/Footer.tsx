import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, MapPin, Phone, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EADBC8] text-[#3D352D] border-t border-[#D8CCBC] pt-12 pb-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#D8CCBC]">
          
          {/* Col 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#C96F1B] text-white flex items-center justify-center font-bold">
                <HardHat className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-semibold text-xl tracking-tight text-[#3D352D] uppercase">
                CHITRANI <span className="text-[#C96F1B]">CONSTRUCTION</span>
              </span>
            </Link>

            <p className="text-xs text-[#6B5E4E] leading-relaxed font-body">
              Chitrani Construction provides structural contracting and concrete boom placer rental support for construction and infrastructure requirements across Maharashtra. Putzmeister M42-5 concrete boom placer rental with an operator and helper.
            </p>

            <div className="bg-[rgba(201,111,27,0.14)] p-3 rounded-xl border border-[rgba(201,111,27,0.38)] space-y-1 font-body text-[11px]">
              <div className="text-[#3D352D] font-semibold flex items-center gap-1.5 uppercase font-heading">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C96F1B]" />
                <span>GST-Registered Enterprise</span>
              </div>
              <div className="text-[#6B5E4E]"><strong>GSTIN:</strong> {companyConfig.gstin}</div>
              <div className="text-[#6B5E4E]"><strong>Legal Name:</strong> {companyConfig.legalName}</div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h3 className="text-[#3D352D] font-heading font-semibold uppercase tracking-wider text-xs">
              Navigation
            </h3>
            <ul className="space-y-2 text-[#6B5E4E] font-body">
              <li><Link to="/" className="hover:text-[#C96F1B] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#C96F1B] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#C96F1B] transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-[#C96F1B] transition-colors">Ocean Star Project</Link></li>
              <li><Link to="/equipment" className="hover:text-[#C96F1B] transition-colors">Boom Placer Rental</Link></li>
              <li><Link to="/industries" className="hover:text-[#C96F1B] transition-colors">Industries Served</Link></li>
              <li><Link to="/contact" className="hover:text-[#C96F1B] transition-colors">Contact Office</Link></li>
              <li><Link to="/request-quote" className="hover:text-[#C96F1B] font-semibold text-[#C96F1B]">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Col 3: Services Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h3 className="text-[#3D352D] font-heading font-semibold uppercase tracking-wider text-xs">
              Core Capabilities
            </h3>
            <ul className="space-y-3 text-[#6B5E4E] font-body">
              <li>
                <Link to="/services/construction-contracting" className="hover:text-[#C96F1B] transition-colors block font-semibold text-[#3D352D]">
                  Construction Contracting
                </Link>
                <span className="text-[11px] text-[#9D9287]">Structural and civil construction support</span>
              </li>
              <li>
                <Link to="/services/concrete-boom-placer-rental" className="hover:text-[#C96F1B] transition-colors block font-semibold text-[#3D352D]">
                  Concrete Boom Placer Rental
                </Link>
                <span className="text-[11px] text-[#9D9287]">Putzmeister M42-5 with operator & helper</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white text-xs font-heading font-semibold uppercase tracking-wider transition-colors shadow-[0_10px_30px_rgba(201,111,27,0.25)]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </Link>
            </div>
          </div>

          {/* Col 4: Corporate Offices & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs text-[#6B5E4E] font-body">
            <h3 className="text-[#3D352D] font-heading font-semibold uppercase tracking-wider text-xs">
              Offices & Contact
            </h3>

            <div className="space-y-2">
              <div className="space-y-1">
                <div className="text-[#3D352D] font-heading font-semibold text-[11px] flex items-center gap-1 uppercase">
                  <MapPin className="w-3.5 h-3.5 text-[#C96F1B]" /> Operating Office (Mumbai):
                </div>
                <p className="text-[11px] text-[#6B5E4E] leading-tight pl-4">
                  {companyConfig.operatingOffice}
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-[#3D352D] font-heading font-semibold text-[11px] flex items-center gap-1 uppercase">
                  <MapPin className="w-3.5 h-3.5 text-[#C96F1B]" /> Registered Office (Jalgaon):
                </div>
                <p className="text-[11px] text-[#6B5E4E] leading-tight pl-4">
                  {companyConfig.registeredOffice}
                </p>
              </div>

              <div className="pt-2 space-y-1.5">
                <a 
                  href={`tel:${companyConfig.phoneRaw}`} 
                  className="flex items-center gap-2 text-[#6B5E4E] hover:text-[#C96F1B] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C96F1B]" />
                  <span>{companyConfig.phone}</span>
                </a>
                <a 
                  href={`tel:${companyConfig.secondaryPhoneRaw}`} 
                  className="flex items-center gap-2 text-[#6B5E4E] hover:text-[#C96F1B] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C96F1B]" />
                  <span>{companyConfig.secondaryPhone}</span>
                </a>
                <a 
                  href={`mailto:${companyConfig.email}`} 
                  className="flex items-center gap-2 text-[#6B5E4E] hover:text-[#C96F1B] transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C96F1B]" />
                  <span className="truncate">{companyConfig.email}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-[#7E7267]">
          <div>
            © {new Date().getFullYear()} Chitrani Construction ({companyConfig.legalName}). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-[#C96F1B] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-[#C96F1B] transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
