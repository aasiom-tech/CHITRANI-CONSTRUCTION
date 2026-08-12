import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SEO } from '../components/common/SEO';
import { industriesData, PriyaIndustryItem } from '../data/industries';
import { Reveal, SectionEyebrow } from '../components/common/Motion';
import {
  ArrowRight,
  FileText,
  PhoneCall,
  CheckCircle2,
  Building2,
  Landmark,
  Truck,
  Building,
  Factory,
  Warehouse,
  GraduationCap,
  ChevronRight
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Landmark,
  Truck,
  Building,
  Factory,
  Warehouse,
  GraduationCap
};

export const IndustriesPage: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activeIndustry: PriyaIndustryItem = industriesData[selectedIndex];
  const IconComponent = iconMap[activeIndustry.iconName] || Building2;
  const isEvidenced = activeIndustry.evidenceLevel === 'evidenced';

  return (
    <div className="bg-[#FFFFFF] text-[#3D352D] min-h-screen">
      <SEO
        title="Sectors & Project Applications | Chitrani Construction"
        description="Explore construction and concrete boom placer rental capabilities across residential, civil infrastructure, commercial, and contractor support sectors."
        canonicalPath="/industries"
      />

      {/* 1. Page Header */}
      <PageHeader
        badge="SECTORS & APPLICATIONS"
        title="Construction Capabilities Across Project Types"
        subtitle="Chitrani Construction’s contracting, civil, structural, masonry, workforce and concrete-placement capabilities can support different construction requirements depending on project scope, site conditions and commercial agreement."
        accentType="industries"
        heroImage={industriesData[0].image}
        heroImageAlt="Residential construction sector visual"
      />

      {/* 2. Intro Section */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionEyebrow badge="PROJECT APPLICATIONS" className="justify-center mb-3" />
            <h2 className="font-heading font-semibold text-2xl sm:text-4xl text-[#3D352D] tracking-tight mb-4">
              Capabilities Aligned to Different Construction Requirements
            </h2>
            <p className="text-base sm:text-lg text-[#6B5E4E] font-body leading-relaxed max-w-3xl mx-auto">
              Construction projects vary by building type, execution scope, workforce requirement and equipment needs. Chitrani Construction’s service structure is designed to support project-specific requirements across building, civil and contractor-led construction contexts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. TERMINAL/CUBERTO INTERACTIVE IMAGE SWITCHER (Original Content Intact) */}
      <section className="py-20 sm:py-28 bg-[#F5EEE5] border-y border-[#E8DDD0]" aria-label="Sector Interactive Gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <SectionEyebrow badge="INTERACTIVE SECTOR SWITCHER" className="justify-center mb-3" />
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#3D352D]">
                Explore Sector Capabilities & Documented Scope
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E4E] font-body mt-2">
                Hover or click any sector below to inspect specific capabilities, descriptions, and verified project notices.
              </p>
            </Reveal>
          </div>

          {/* SPLIT INTERACTIVE SWITCHER CONTAINER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">

            {/* LEFT: VERTICAL STACK OF LARGE SECTOR NAMES */}
            <div className="lg:col-span-5 space-y-3">
              {industriesData.map((item: PriyaIndustryItem, idx: number) => {
                const isSelected = selectedIndex === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedIndex(idx)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#3D352D] text-white border-[#3D352D] shadow-xl translate-x-2'
                        : 'bg-white text-[#3D352D] border-[#E8DDD0] hover:border-[#C96F1B]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-specs font-bold text-xs ${isSelected ? 'text-[#C96F1B]' : 'text-[#7E7267]'}`}>
                        0{idx + 1}
                      </span>
                      <h3 className={`font-heading font-bold text-base sm:text-xl uppercase tracking-tight transition-colors ${
                        isSelected ? 'text-[#C96F1B]' : 'text-[#3D352D] group-hover:text-[#C96F1B]'
                      }`}>
                        {item.name}
                      </h3>
                    </div>

                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      isSelected ? 'text-[#C96F1B] translate-x-1' : 'text-[#7E7267] group-hover:translate-x-1'
                    }`} />
                  </div>
                );
              })}
            </div>

            {/* RIGHT: ONE LARGE VISUAL STAGE WITH DYNAMIC CONTENT & CUBERTO HOVER CURSOR */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#E8DDD0] shadow-xl space-y-6">

              {/* Unique Image Stage */}
              <div
                className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#3D352D] group"
              >
                <img
                  key={activeIndustry.id}
                  src={activeIndustry.image}
                  alt={activeIndustry.imageAlt || activeIndustry.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 animate-in fade-in duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-heading">
                  <span className={`px-3.5 py-1.5 rounded-full font-specs font-bold uppercase tracking-wider ${
                    isEvidenced ? 'bg-[#C96F1B] text-white' : 'bg-white/20 backdrop-blur-xs text-white border border-white/30'
                  }`}>
                    {isEvidenced ? 'EVIDENCED SECTOR' : 'APPLICABILITY SCOPE'}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-xs text-[#F5A54A] flex items-center justify-center border border-white/20">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Verified Title & Description */}
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D]">
                  {activeIndustry.name}
                </h3>
                <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
                  {activeIndustry.description}
                </p>
              </div>

              {/* Evidence Notice */}
              {activeIndustry.evidenceNotice && (
                <div className="p-4 bg-[#F5EEE5] rounded-xl border border-[#E8DDD0] text-xs font-specs text-[#C96F1B] leading-relaxed">
                  <strong>Notice:</strong> {activeIndustry.evidenceNotice}
                </div>
              )}

              {/* Verified Capabilities */}
              {activeIndustry.capabilities && activeIndustry.capabilities.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#E8DDD0]">
                  <span className="font-heading font-bold text-xs text-[#3D352D] uppercase tracking-wider block">
                    Core Sector Work Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeIndustry.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs font-body text-[#6B5E4E]">
                        <CheckCircle2 className="w-4 h-4 text-[#C96F1B] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Service Links */}
              {activeIndustry.relatedServiceLinks && activeIndustry.relatedServiceLinks.length > 0 && (
                <div className="pt-4 border-t border-[#E8DDD0] flex flex-wrap items-center gap-4">
                  {activeIndustry.relatedServiceLinks.map((lnk, lIdx) => (
                    <Link
                      key={lIdx}
                      to={lnk.href}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3D352D] hover:bg-[#2D2620] text-white font-specs font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      <span>{lnk.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C96F1B]" />
                    </Link>
                  ))}
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 4. Project Discussion CTA Section */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-[#3D352D] rounded-3xl p-8 sm:p-16 text-white text-center space-y-8 shadow-xl max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C96F1B]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <SectionEyebrow badge="PROJECT ENQUIRY" className="justify-center mb-1 text-[#C96F1B]" />
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Discuss Sector Requirements
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#D1C5B0] font-body leading-relaxed max-w-2xl mx-auto">
                Share your site location, project category and expected timeline so the relevant construction contracting or equipment deployment scope can be reviewed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
              <Link
                to="/request-quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                <FileText className="w-4 h-4" />
                <span>REQUEST A QUOTE</span>
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F5EEE5] hover:bg-[#EADBC8] text-[#3D352D] font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border border-[#E8DDD0] min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                <PhoneCall className="w-4 h-4 text-[#C96F1B]" />
                <span>CONTACT US</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
