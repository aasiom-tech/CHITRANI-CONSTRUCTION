import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, MapPin, Phone, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3D352D] text-white border-t border-[#E8DDD0]/20 pt-12 pb-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#E8DDD0]/20">
          
          {/* Col 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#C96F1B] text-white flex items-center justify-center font-bold">
                <HardHat className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-semibold text-xl tracking-tight text-white uppercase">
                CHITRANI <span className="text-[#C96F1B]">CONSTRUCTION</span>
              </span>
            </Link>

            <p className="text-xs text-[#D8CCBC] leading-relaxed font-body">
              Chitrani Construction provides structural contracting and concrete boom placer rental support for construction and infrastructure requirements across Maharashtra. Putzmeister M42-5 concrete boom placer rental with an operator and helper.
            </p>

            <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1 font-body text-[11px]">
              <div className="text-[#C96F1B] font-semibold flex items-center gap-1.5 uppercase font-heading">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C96F1B]" />
                <span>GST-Registered Enterprise</span>
              </div>
              <div className="text-[#D8CCBC]"><strong>GSTIN:</strong> 27CLUPB6299K2Z6</div>
              <div className="text-[#D8CCBC]"><strong>Legal Name:</strong> Mrunali Dipak Sonawane</div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h3 className="text-white font-heading font-semibold uppercase tracking-wider text-xs">
              Navigation
            </h3>
            <ul className="space-y-2 text-[#D8CCBC] font-body">
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
            <h3 className="text-white font-heading font-semibold uppercase tracking-wider text-xs">
              Core Capabilities
            </h3>
            <ul className="space-y-3 text-[#D8CCBC] font-body">
              <li>
                <Link to="/services/construction-contracting" className="hover:text-[#C96F1B] transition-colors block font-semibold text-white">
                  Construction Contracting
                </Link>
                <span className="text-[11px] text-[#9D9287]">Structural and civil construction support</span>
              </li>
              <li>
                <Link to="/services/concrete-boom-placer-rental" className="hover:text-[#C96F1B] transition-colors block font-semibold text-white">
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
          <div className="lg:col-span-3 space-y-3 text-xs text-[#D8CCBC] font-body">
            <h3 className="text-white font-heading font-semibold uppercase tracking-wider text-xs">
              Offices & Contact
            </h3>

            <div className="space-y-2">
              <div className="space-y-1">
                <div className="text-white font-heading font-semibold text-[11px] flex items-center gap-1 uppercase">
                  <MapPin className="w-3.5 h-3.5 text-[#C96F1B]" /> Operating Office (Mumbai):
                </div>
                <p className="text-[11px] text-[#D8CCBC] leading-tight pl-4">
                  Shop No. 13, Vijay Nagar Society, Sahar Road, Near D Mart, Andheri East, Mumbai – 400069
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-white font-heading font-semibold text-[11px] flex items-center gap-1 uppercase">
                  <MapPin className="w-3.5 h-3.5 text-[#C96F1B]" /> Registered Office (Jalgaon):
                </div>
                <p className="text-[11px] text-[#D8CCBC] leading-tight pl-4">
                  Plot No. 15, Gat No. 146, Nehru Nagar, Mahabal Road, Ramanand Nagar, Jalgaon, Maharashtra – 425001
                </p>
              </div>

              <div className="pt-2 space-y-1.5">
                <a 
                  href="tel:+919833706666" 
                  className="flex items-center gap-2 text-[#D8CCBC] hover:text-[#C96F1B] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C96F1B]" />
                  <span>+91 9833706666</span>
                </a>
                <a 
                  href="tel:+917387801051" 
                  className="flex items-center gap-2 text-[#D8CCBC] hover:text-[#C96F1B] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C96F1B]" />
                  <span>+91 73878 01051</span>
                </a>
                <a 
                  href="mailto:chitraniconstruction@gmail.com" 
                  className="flex items-center gap-2 text-[#D8CCBC] hover:text-[#C96F1B] transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C96F1B]" />
                  <span className="truncate">chitraniconstruction@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-[#7E7267]">
          <div>
            © {new Date().getFullYear()} Chitrani Construction (Mrunali Dipak Sonawane). All rights reserved.
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
