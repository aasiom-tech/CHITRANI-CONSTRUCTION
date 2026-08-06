import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Home, 
  Info, 
  Wrench, 
  Truck, 
  FolderGit2, 
  Factory, 
  PhoneCall, 
  FileText,
  Phone,
  MessageSquare,
  HardHat
} from 'lucide-react';
import { companyConfig } from '../config/companyConfig';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: Info },
  { label: 'Services', href: '/services', icon: Wrench },
  { label: 'Projects', href: '/projects', icon: FolderGit2 },
  { label: 'Equipment', href: '/equipment', icon: Truck },
  { label: 'Industries', href: '/industries', icon: Factory },
  { label: 'Contact', href: '/contact', icon: PhoneCall },
  { label: 'Request Quote', href: '/request-quote', icon: FileText, isCta: true },
];

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div 
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        className="fixed inset-y-0 left-0 w-[min(85vw,340px)] bg-white text-[#2D2D2D] z-50 shadow-2xl flex flex-col border-r border-[#E7E7E7] animate-slide-right font-body"
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-[#E7E7E7] flex items-center justify-between bg-[#F9F7F2]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[10px] bg-[#FFB300] text-[#2D2D2D] flex items-center justify-center font-bold">
              <HardHat className="w-4 h-4 text-[#2D2D2D]" />
            </div>
            <div>
              <div className="font-heading text-[11px] text-[#FFB300] tracking-widest uppercase font-bold">NAVIGATION</div>
              <div className="font-bold font-heading text-base tracking-tight text-[#2D2D2D]">{companyConfig.shortName}</div>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-[10px] bg-white hover:bg-[#FFB300] text-[#2D2D2D] transition-colors border border-[#E7E7E7] focus:outline-hidden focus:ring-2 focus:ring-[#FFB300] min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5 text-[#2D2D2D]" />
          </button>
        </div>

        {/* Links List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));

            if (item.isCta) {
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  className="mt-4 flex items-center gap-3 px-4 py-3.5 rounded-[12px] bg-[#FFB300] hover:bg-[#E59A00] text-[#2D2D2D] font-heading text-xs font-bold uppercase tracking-wider shadow-xs transition-all min-h-[48px] focus:outline-hidden focus:ring-2 focus:ring-[#FFB300]"
                >
                  <Icon className="w-4 h-4 text-[#2D2D2D]" />
                  <span>{item.label}</span>
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-[10px] transition-all font-heading text-xs uppercase tracking-wider min-h-[44px] ${
                  isActive 
                    ? 'bg-[#F9F7F2] text-[#FFB300] font-bold border-l-3 border-[#FFB300]' 
                    : 'text-[#2D2D2D] hover:bg-[#F9F7F2] hover:text-[#FFB300]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#FFB300]' : 'text-[#7D7D7D]'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Footer Quick Connect */}
        <div className="p-4 border-t border-[#E7E7E7] bg-[#F9F7F2] space-y-2">
          <div className="font-heading text-[11px] text-[#7D7D7D] mb-1 uppercase tracking-wider font-semibold">DIRECT DISPATCH</div>
          <div className="grid grid-cols-2 gap-2">
            <a 
              href={`tel:${companyConfig.phoneRaw}`} 
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-[10px] bg-white hover:bg-[#FFB300] text-xs font-heading font-semibold text-[#2D2D2D] border border-[#E7E7E7] transition-colors uppercase min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#2D2D2D]" />
              <span>Call</span>
            </a>
            <a 
              href={`https://wa.me/${companyConfig.whatsappRaw}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-[10px] bg-white hover:bg-emerald-600 text-xs font-heading font-semibold text-emerald-700 hover:text-white border border-[#E7E7E7] transition-colors uppercase min-h-[44px]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
