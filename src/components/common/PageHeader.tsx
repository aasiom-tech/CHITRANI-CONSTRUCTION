import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumb?: BreadcrumbItem[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  breadcrumb = [{ label: 'Home', href: '/' }]
}) => {
  const breadcrumbItems = Array.isArray(breadcrumb)
    ? breadcrumb
    : [{ label: 'Home', href: '/' }];

  return (
    <section className="bg-[#EADBC8] text-[#3D352D] pt-20 pb-12 sm:pt-24 sm:pb-16 border-b border-[#E8DDD0] relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#6B5E4E 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 flex-wrap text-xs font-body text-[#6B5E4E]">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#7E7267]" />}
                {item.href ? (
                  <Link
                    to={item.href}
                    className="hover:text-[#C96F1B] transition-colors focus:outline-hidden focus:ring-1 focus:ring-[#C96F1B]"
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
              <span className="text-[#C96F1B] font-semibold truncate max-w-[200px] sm:max-w-none">{title}</span>
            </li>
          </ol>
        </nav>

        {/* Industrial Label Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-[#F5EEE5] border border-[#E8DDD0] text-[#C96F1B] font-heading text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[#3D352D] tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>

        {/* Accent Bar */}
        <div className="w-16 h-1 bg-[#C96F1B] my-4 rounded-full" />

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm sm:text-base text-[#6B5E4E] max-w-3xl leading-relaxed font-body">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
