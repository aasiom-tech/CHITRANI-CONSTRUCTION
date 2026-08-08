import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export type HeaderAccentType =
  | 'about'
  | 'services'
  | 'projects'
  | 'equipment'
  | 'industries'
  | 'contact'
  | 'quote'
  | 'legal';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumb?: BreadcrumbItem[];
  accentType?: HeaderAccentType;
  meta?: string;
  heroImage?: string;
  heroImageAlt?: string;
  customRightVisual?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  breadcrumb = [{ label: 'Home', href: '/' }],
  accentType,
  meta,
  heroImage,
  heroImageAlt,
  customRightVisual
}) => {
  const shouldReduceMotion = useReducedMotion();
  const breadcrumbItems = Array.isArray(breadcrumb)
    ? breadcrumb
    : [{ label: 'Home', href: '/' }];

  // Infer accent type and meta if not explicitly provided
  const resolvedAccentType = accentType || inferAccentType(badge, title);
  const resolvedMeta = meta || inferMeta(badge, title);

  const hasRightSideContent = Boolean(heroImage || customRightVisual);

  return (
    <section className="bg-[#F5EEE5] text-[#3D352D] pt-[112px] pb-14 sm:pt-[124px] sm:pb-16 lg:pb-20 border-b border-[#E8DDD0] relative overflow-hidden transition-all duration-300">
      {/* Background Soft Radial Ambient Glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(201,111,27,0.08),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Architectural Dot Matrix Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(#6B5E4E 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Reusable Architectural Vector Motif SVG (Right Side Ambient Line Accent) */}
      <div
        className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block opacity-[0.06] text-[#3D352D]"
        aria-hidden="true"
      >
        <ArchitecturalMotifSvg accentType={resolvedAccentType} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 ${hasRightSideContent ? 'lg:grid-cols-12 gap-8 lg:gap-12 items-center' : ''}`}>
          {/* Left Column / Main Content */}
          <div className={`${hasRightSideContent ? 'lg:col-span-7' : 'max-w-4xl'} space-y-4`}>
            {/* Breadcrumb Navigation */}
            <motion.nav
              initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              aria-label="Breadcrumb"
              className="mb-3"
            >
              <ol className="flex items-center gap-1.5 flex-wrap text-xs font-body text-[#6B5E4E]">
                {breadcrumbItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-1.5">
                    {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#7E7267]" />}
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="hover:text-[#C96F1B] transition-colors focus:outline-hidden focus:ring-1 focus:ring-[#C96F1B] rounded-xs"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-[#3D352D] font-semibold">{item.label}</span>
                    )}
                  </li>
                ))}
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#7E7267]" />
                  <span className="text-[#C96F1B] font-semibold truncate max-w-[200px] sm:max-w-none">
                    {title}
                  </span>
                </li>
              </ol>
            </motion.nav>

            {/* Industrial Eyebrow Badge */}
            {badge && (
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-white/90 border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider shadow-2xs backdrop-blur-xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
                <span>{badge}</span>
              </motion.div>
            )}

            {/* H1 Heading */}
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-heading font-semibold text-[#3D352D] tracking-tight leading-[1.16] max-w-3xl"
            >
              {title}
            </motion.h1>

            {/* Two-Part Integrated Accent Line */}
            <div className="flex items-center gap-1.5 py-1" aria-hidden="true">
              <motion.div
                initial={shouldReduceMotion ? false : { width: 0 }}
                animate={{ width: '88px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-[#C96F1B] rounded-full"
              />
              <motion.div
                initial={shouldReduceMotion ? false : { width: 0 }}
                animate={{ width: '40px' }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="h-0.5 bg-[#6B5E4E]/30 rounded-full"
              />
            </div>

            {/* Subtitle / Description */}
            {subtitle && (
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-sm sm:text-base lg:text-lg text-[#6B5E4E] max-w-3xl leading-relaxed font-body"
              >
                {subtitle}
              </motion.p>
            )}

            {/* Optional Verified Micro-Info Strip */}
            {resolvedMeta && (
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="pt-2"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#C96F1B]/10 border border-[#C96F1B]/20 text-[#C96F1B] text-[11px] font-heading font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C96F1B]" />
                  <span>{resolvedMeta}</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column / Page-Specific Visual Component or Custom Node */}
          {customRightVisual ? (
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {customRightVisual}
            </div>
          ) : heroImage ? (
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 20, scale: 1.02 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-5 relative mt-6 lg:mt-0"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DDD0] bg-[#F5EEE5] shadow-md group aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] max-h-[240px] sm:max-h-[320px] lg:max-h-[360px]">
                <img
                  src={heroImage}
                  alt={heroImageAlt || `${title} construction visual representation`}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />

                {/* Soft Gradient Fade into Cream Background */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#F5EEE5] via-transparent to-transparent pointer-events-none opacity-40 lg:opacity-60"
                  aria-hidden="true"
                />

                {/* Corner Architectural Accent */}
                <div className="absolute top-3 left-3 text-[#C96F1B]/40 pointer-events-none" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 6V2H6" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <div className="absolute bottom-3 right-3 text-[#C96F1B]/40 pointer-events-none" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M18 14V18H14" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

// Helper: Infer Accent Type
function inferAccentType(badge?: string, title?: string): HeaderAccentType {
  const text = `${badge || ''} ${title || ''}`.toUpperCase();
  if (text.includes('CONTACT') || text.includes('CONVERSATION')) return 'contact';
  if (text.includes('ABOUT')) return 'about';
  if (text.includes('SERVICE') || text.includes('CONTRACTING')) return 'services';
  if (text.includes('PROJECT') || text.includes('OCEAN STAR')) return 'projects';
  if (text.includes('EQUIPMENT') || text.includes('BOOM') || text.includes('PUTZMEISTER')) return 'equipment';
  if (text.includes('SECTOR') || text.includes('INDUSTR')) return 'industries';
  if (text.includes('QUOTE') || text.includes('REQUIREMENT')) return 'quote';
  if (text.includes('PRIVACY') || text.includes('TERMS') || text.includes('LEGAL')) return 'legal';
  return 'about';
}

// Helper: Infer Micro-Info Strip
function inferMeta(badge?: string, title?: string): string | undefined {
  const text = `${badge || ''} ${title || ''}`.toUpperCase();
  if (text.includes('SERVICE') && !text.includes('RENTAL SERVICE')) return '6 SERVICE CATEGORIES';
  if (text.includes('BOOM') || text.includes('PUTZMEISTER') || text.includes('CONCRETE BOOM PLACER RENTAL')) {
    return 'PUTZMEISTER M42-5 · 42 M REACH';
  }
  if (text.includes('PROJECT') || text.includes('OCEAN STAR')) return 'OCEAN STAR · MUMBAI';
  if (text.includes('SECTOR') || text.includes('INDUSTR')) return '7 APPLICATION CATEGORIES';
  return undefined;
}

// Helper component to render abstract architectural SVG accents
const ArchitecturalMotifSvg: React.FC<{ accentType: HeaderAccentType }> = ({ accentType }) => {
  return (
    <svg
      width="340"
      height="260"
      viewBox="0 0 340 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <path d="M10 10 H70 V70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M330 10 H270 V70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M10 250 H70 V190" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M330 250 H270 V190" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />

      <line x1="20" y1="130" x2="320" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="170" y1="20" x2="170" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.6" />

      <line x1="70" y1="125" x2="70" y2="135" stroke="currentColor" strokeWidth="1.5" />
      <line x1="120" y1="125" x2="120" y2="135" stroke="currentColor" strokeWidth="1.5" />
      <line x1="220" y1="125" x2="220" y2="135" stroke="currentColor" strokeWidth="1.5" />
      <line x1="270" y1="125" x2="270" y2="135" stroke="currentColor" strokeWidth="1.5" />

      {accentType === 'about' && (
        <>
          <rect x="90" y="50" width="160" height="160" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="90" y1="90" x2="250" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="90" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="90" y1="170" x2="250" y2="170" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="170" cy="130" r="55" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        </>
      )}

      {accentType === 'services' && (
        <>
          <rect x="60" y="40" width="220" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="80" y="100" width="180" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="100" y="160" width="140" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="170" y1="40" x2="170" y2="200" stroke="currentColor" strokeWidth="1.5" />
        </>
      )}

      {accentType === 'projects' && (
        <>
          <line x1="170" y1="30" x2="170" y2="230" stroke="currentColor" strokeWidth="2" />
          <circle cx="170" cy="60" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="170" cy="130" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="170" cy="200" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="120" y1="60" x2="220" y2="60" stroke="currentColor" strokeWidth="1" />
          <line x1="100" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.5" />
          <line x1="120" y1="200" x2="220" y2="200" stroke="currentColor" strokeWidth="1" />
        </>
      )}

      {accentType === 'equipment' && (
        <>
          <path d="M50 190 A 130 130 0 0 1 290 190" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <line x1="170" y1="130" x2="260" y2="70" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="170" cy="130" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="260" cy="70" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <text x="220" y="55" fill="currentColor" fontSize="12" fontFamily="sans-serif" opacity="0.9">42m</text>
        </>
      )}

      {accentType === 'industries' && (
        <>
          <rect x="70" y="40" width="60" height="50" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="140" y="40" width="60" height="50" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="210" y="40" width="60" height="50" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="70" y="100" width="60" height="50" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="140" y="100" width="60" height="50" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="210" y="100" width="60" height="50" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="70" y="160" width="60" height="50" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="140" y="160" width="60" height="50" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="210" y="160" width="60" height="50" stroke="currentColor" strokeWidth="1" fill="none" />
        </>
      )}

      {accentType === 'contact' && (
        <>
          <circle cx="170" cy="130" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none" />
          <circle cx="170" cy="130" r="45" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="170" cy="130" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="170" y1="40" x2="170" y2="220" stroke="currentColor" strokeWidth="1" />
          <line x1="80" y1="130" x2="260" y2="130" stroke="currentColor" strokeWidth="1" />
        </>
      )}

      {accentType === 'quote' && (
        <>
          <rect x="90" y="35" width="160" height="190" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="115" y1="65" x2="225" y2="65" stroke="currentColor" strokeWidth="1.5" />
          <line x1="115" y1="95" x2="225" y2="95" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="115" y1="125" x2="225" y2="125" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="115" y1="155" x2="225" y2="155" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="115" y1="185" x2="185" y2="185" stroke="currentColor" strokeWidth="1.5" />
        </>
      )}

      {accentType === 'legal' && (
        <>
          <rect x="80" y="40" width="180" height="180" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="90" y="50" width="160" height="160" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" fill="none" />
          <line x1="80" y1="130" x2="260" y2="130" stroke="currentColor" strokeWidth="1" />
          <circle cx="170" cy="130" r="30" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </>
      )}
    </svg>
  );
};
