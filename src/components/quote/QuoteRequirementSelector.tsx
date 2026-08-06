import React from 'react';
import { Building2, Truck } from 'lucide-react';

interface QuoteRequirementSelectorProps {
  selectedRequirement: 'construction-contracting' | 'equipment-rental';
  onSelect: (val: 'construction-contracting' | 'equipment-rental') => void;
}

export const QuoteRequirementSelector: React.FC<QuoteRequirementSelectorProps> = ({
  selectedRequirement,
  onSelect,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-[#F5EEE5] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="text-center">
          <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block mb-1">
            REQUIREMENT CATEGORY
          </span>
          <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[#3D352D]">
            Select Requirement Type
          </h3>
        </div>

        <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <legend className="sr-only">Choose requirement type</legend>

          {/* Option 1: Construction Contracting */}
          <label
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                onSelect('construction-contracting');
              }
            }}
            className={`p-6 rounded-[18px] border-2 cursor-pointer transition-all flex items-start gap-4 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B] ${
              selectedRequirement === 'construction-contracting'
                ? 'bg-white border-[#C96F1B] shadow-[0_10px_30px_rgba(201,111,27,0.12)]'
                : 'bg-white/80 border-[#E8DDD0] hover:border-[#C96F1B]/50'
            }`}
          >
            <input
              type="radio"
              name="quoteRequirement"
              value="construction-contracting"
              checked={selectedRequirement === 'construction-contracting'}
              onChange={() => onSelect('construction-contracting')}
              className="w-4 h-4 text-[#C96F1B] focus:ring-[#C96F1B] accent-[#C96F1B] mt-1 shrink-0"
              aria-describedby="desc-contracting"
            />
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-[12px] bg-[#F5EEE5] text-[#C96F1B] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#C96F1B]" />
              </div>
              <strong className="block font-heading font-semibold text-lg text-[#3D352D]">
                Construction Contracting
              </strong>
              <p id="desc-contracting" className="text-xs text-[#6B5E4E] font-body leading-relaxed">
                Civil, structural or construction-support requirements for a project site.
              </p>
            </div>
          </label>

          {/* Option 2: Equipment Rental */}
          <label
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                onSelect('equipment-rental');
              }
            }}
            className={`p-6 rounded-[18px] border-2 cursor-pointer transition-all flex items-start gap-4 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B] ${
              selectedRequirement === 'equipment-rental'
                ? 'bg-white border-[#C96F1B] shadow-[0_10px_30px_rgba(201,111,27,0.12)]'
                : 'bg-white/80 border-[#E8DDD0] hover:border-[#C96F1B]/50'
            }`}
          >
            <input
              type="radio"
              name="quoteRequirement"
              value="equipment-rental"
              checked={selectedRequirement === 'equipment-rental'}
              onChange={() => onSelect('equipment-rental')}
              className="w-4 h-4 text-[#C96F1B] focus:ring-[#C96F1B] accent-[#C96F1B] mt-1 shrink-0"
              aria-describedby="desc-equipment"
            />
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-[12px] bg-[#F5EEE5] text-[#C96F1B] flex items-center justify-center">
                <Truck className="w-5 h-5 text-[#C96F1B]" />
              </div>
              <strong className="block font-heading font-semibold text-lg text-[#3D352D]">
                Equipment Rental
              </strong>
              <p id="desc-equipment" className="text-xs text-[#6B5E4E] font-body leading-relaxed">
                Putzmeister M42-5 concrete boom placer rental with an operator and helper.
              </p>
            </div>
          </label>

        </fieldset>

      </div>
    </section>
  );
};
