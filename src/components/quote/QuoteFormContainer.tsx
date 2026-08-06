import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  AlertCircle, 
  ExternalLink, 
  CheckCircle2, 
  Info,
  Edit3
} from 'lucide-react';
import { companyConfig } from '../../config/companyConfig';

interface QuoteFormContainerProps {
  initialRequirement: 'construction-contracting' | 'equipment-rental';
  onRequirementChange: (val: 'construction-contracting' | 'equipment-rental') => void;
}

export const QuoteFormContainer: React.FC<QuoteFormContainerProps> = ({
  initialRequirement,
  onRequirementChange
}) => {
  const [step, setStep] = useState<number>(2); // Start at Step 2 since Selector is Section 3

  // Common Fields
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectLocation, setProjectLocation] = useState('');
  const [projectType, setProjectType] = useState('Commercial Building');
  const [startDate, setStartDate] = useState('');
  const [expectedDuration, setExpectedDuration] = useState('');
  const [additionalMessage, setAdditionalMessage] = useState('');
  const [consent, setConsent] = useState(false);

  // Construction Contracting Fields
  const [constructionRequirement, setConstructionRequirement] = useState('Structural Construction Support');
  const [projectStage, setProjectStage] = useState('Quotation');
  const [siteArea, setSiteArea] = useState('');
  const [scopeSummary, setScopeSummary] = useState('');
  const [machineryCoordination, setMachineryCoordination] = useState('To Be Discussed');
  const [documentsAvailable, setDocumentsAvailable] = useState<string[]>([]);

  // Equipment Rental Fields
  const equipment = 'Putzmeister M42-5 Concrete Boom Placer';
  const [rentalStartDate, setRentalStartDate] = useState('');
  const [rentalDuration, setRentalDuration] = useState('');
  const [shiftRequirement, setShiftRequirement] = useState('One 12-Hour Shift');
  const [estimatedConcrete, setEstimatedConcrete] = useState('');
  const [pourType, setPourType] = useState('Large-Volume Pour');
  const [supportingEquipment, setSupportingEquipment] = useState('To Be Confirmed');
  const [fuelArrangement, setFuelArrangement] = useState('Needs Discussion');
  const [accommodationArrangement, setAccommodationArrangement] = useState('Needs Discussion');
  const [rentalNotes, setRentalNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPrepared, setIsPrepared] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const todayStr = new Date().toISOString().split('T')[0];

  // Ref for focus
  const stepTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (stepTitleRef.current) {
      stepTitleRef.current.focus();
    }
  }, [step]);

  const toggleDocument = (doc: string) => {
    setDocumentsAvailable(prev => 
      prev.includes(doc) ? prev.filter(d => d !== doc) : [...prev, doc]
    );
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};

    if (!fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!companyName.trim()) errs.companyName = 'Company Name is required.';

    const cleanPhone = phone.trim().replace(/[\s-]/g, '');
    const indianPhoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
    if (!phone.trim()) {
      errs.phone = 'Phone Number is required.';
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!emailRegex.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!projectLocation.trim()) errs.projectLocation = 'Project Location is required.';

    if (initialRequirement === 'construction-contracting') {
      if (!startDate) errs.startDate = 'Preferred Start Date is required.';
      else if (startDate < todayStr) errs.startDate = 'Start Date cannot be in the past.';
      if (!expectedDuration.trim()) errs.expectedDuration = 'Expected Duration is required.';
      if (!scopeSummary.trim()) errs.scopeSummary = 'Expected Scope Summary is required.';
    } else {
      if (!rentalStartDate) errs.rentalStartDate = 'Expected Rental Start Date is required.';
      else if (rentalStartDate < todayStr) errs.rentalStartDate = 'Start Date cannot be in the past.';
      if (!rentalDuration.trim()) errs.rentalDuration = 'Rental Duration is required.';
    }

    if (!consent) errs.consent = 'You must agree to the data usage terms to proceed.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleProceedToReview = () => {
    if (!validateStep2()) return;
    setStep(3);
  };

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    const reqLabel = initialRequirement === 'construction-contracting' 
      ? 'Construction Contracting' 
      : 'Concrete Boom Placer Rental';

    const subject = `Quote Request – ${reqLabel} – ${companyName.trim() || fullName.trim()}`;
    
    const bodyLines = [
      `Quote Request Details:`,
      `---------------------------------`,
      `Requirement: ${reqLabel}`,
      `Full Name: ${fullName.trim()}`,
      `Company: ${companyName.trim()}`,
      `Phone: ${phone.trim()}`,
      `Email: ${email.trim()}`,
      `Project Location: ${projectLocation.trim()}`,
      `Project Type: ${projectType}`,
    ];

    if (initialRequirement === 'construction-contracting') {
      bodyLines.push(
        `Preferred Start Date: ${startDate}`,
        `Expected Duration: ${expectedDuration.trim()}`,
        `Construction Requirement: ${constructionRequirement}`,
        `Current Project Stage: ${projectStage}`,
        `Site Area: ${siteArea.trim() || 'N/A'}`,
        `Machinery Coordination: ${machineryCoordination}`,
        `Documents Available: ${documentsAvailable.join(', ') || 'None'}`,
        `Scope Summary: ${scopeSummary.trim()}`,
        `Additional Message: ${additionalMessage.trim() || 'None'}`
      );
    } else {
      bodyLines.push(
        `Equipment: ${equipment}`,
        `Rental Start Date: ${rentalStartDate}`,
        `Rental Duration: ${rentalDuration.trim()}`,
        `Shift Requirement: ${shiftRequirement}`,
        `Estimated Concrete: ${estimatedConcrete.trim() || 'N/A'}`,
        `Pour Type: ${pourType}`,
        `Supporting Equipment: ${supportingEquipment}`,
        `Fuel & AdBlue: ${fuelArrangement}`,
        `Accommodation: ${accommodationArrangement}`,
        `Rental Notes: ${rentalNotes.trim() || 'None'}`,
        `Additional Message: ${additionalMessage.trim() || 'None'}`
      );
    }

    bodyLines.push(`---------------------------------`);

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(bodyLines.join('\n'));
    const url = `mailto:${companyConfig.email}?subject=${encodedSubject}&body=${encodedBody}`;

    setMailtoUrl(url);
    setIsPrepared(true);

    window.location.href = url;
  };

  return (
    <section className="py-20 sm:py-28 bg-[#EADBC8] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step Indicator Header */}
        <div className="bg-white rounded-[24px] border border-[#E8DDD0] p-6 sm:p-10 shadow-[0_20px_40px_rgba(61,53,45,0.06)] space-y-8">
          
          {/* Progress Bar */}
          <div className="space-y-3 border-b border-[#E8DDD0] pb-6">
            <div className="flex justify-between items-center text-xs font-heading">
              <span className="text-[#C96F1B] font-bold uppercase tracking-wider">
                STEP {step} OF 3
              </span>
              <span className="text-[#6B5E4E] font-body">
                {step === 1 ? 'Select Requirement' : step === 2 ? 'Project & Contact Details' : 'Review & Send'}
              </span>
            </div>
            
            <div className="w-full h-2.5 bg-[#F5EEE5] rounded-full overflow-hidden border border-[#E8DDD0]">
              <div 
                className="h-full bg-[#C96F1B] transition-all duration-300 rounded-full"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>

            <div className="flex items-center justify-between pt-1 text-[11px] font-heading font-semibold text-[#6B5E4E]">
              <button 
                type="button" 
                onClick={() => setStep(1)} 
                className={`hover:text-[#C96F1B] ${step === 1 ? 'text-[#C96F1B] font-bold' : ''}`}
              >
                1. Select Requirement
              </button>
              <button 
                type="button" 
                onClick={() => { if (step > 1) setStep(2); }} 
                className={`hover:text-[#C96F1B] ${step === 2 ? 'text-[#C96F1B] font-bold' : ''}`}
              >
                2. Project & Contact Details
              </button>
              <span className={step === 3 ? 'text-[#C96F1B] font-bold' : ''}>
                3. Review & Send
              </span>
            </div>
          </div>

          {/* STEP 1: REQUIREMENT SELECTOR EDIT TRIGGER */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 ref={stepTitleRef} tabIndex={-1} className="font-heading font-semibold text-xl text-[#3D352D] focus:outline-hidden">
                Step 1: Requirement Selected
              </h3>

              <div className="p-4 bg-[#F5EEE5] rounded-[14px] border border-[#E8DDD0] flex items-center justify-between">
                <div>
                  <span className="text-xs font-heading text-[#C96F1B] font-bold uppercase block">Selected Category:</span>
                  <strong className="text-base font-heading text-[#3D352D]">
                    {initialRequirement === 'construction-contracting' ? 'Construction Contracting' : 'Concrete Boom Placer Rental'}
                  </strong>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-[10px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider"
                >
                  Continue to Details
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PROJECT AND CONTACT DETAILS */}
          {step === 2 && (
            <form onSubmit={(e) => { e.preventDefault(); handleProceedToReview(); }} noValidate className="space-y-6">
              
              <h3 ref={stepTitleRef} tabIndex={-1} className="font-heading font-semibold text-xl text-[#3D352D] focus:outline-hidden">
                Step 2: Project & Contact Details
              </h3>

              {/* Error Summary */}
              {Object.keys(errors).length > 0 && (
                <div role="alert" className="p-4 rounded-[12px] bg-[#FDECEC] border border-[#B42318] text-xs text-[#B42318] flex items-start gap-3 font-body">
                  <AlertCircle className="w-5 h-5 text-[#B42318] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-sm">Please correct the following issues:</strong>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      {Object.values(errors).map((err, idx) => <li key={idx}>{err}</li>)}
                    </ul>
                  </div>
                </div>
              )}

              {/* COMMON CONTACT FIELDS */}
              <div className="space-y-4 pt-2">
                <span className="text-xs font-heading font-bold text-[#C96F1B] uppercase tracking-wider block border-b border-[#E8DDD0] pb-2">
                  CLIENT & CONTACT INFORMATION
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-fullname" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                      Full Name <span className="text-[#C96F1B]">*</span>
                    </label>
                    <input
                      id="quote-fullname"
                      type="text"
                      autoComplete="name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Anand Deshmukh"
                      className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                        errors.fullName ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-company" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                      Company Name <span className="text-[#C96F1B]">*</span>
                    </label>
                    <input
                      id="quote-company"
                      type="text"
                      autoComplete="organization"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Deshmukh Developers Pvt Ltd"
                      className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                        errors.companyName ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-phone" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                      Phone Number <span className="text-[#C96F1B]">*</span>
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 9833706666"
                      className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                        errors.phone ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-email" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                      Email Address <span className="text-[#C96F1B]">*</span>
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="anand@deshmukhdev.com"
                      className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                        errors.email ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* COMMON PROJECT FIELDS */}
              <div className="space-y-4 pt-4 border-t border-[#E8DDD0]">
                <span className="text-xs font-heading font-bold text-[#C96F1B] uppercase tracking-wider block">
                  PROJECT LOCATION & SECTOR
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-location" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                      Project Location <span className="text-[#C96F1B]">*</span>
                    </label>
                    <input
                      id="quote-location"
                      type="text"
                      autoComplete="street-address"
                      value={projectLocation}
                      onChange={(e) => setProjectLocation(e.target.value)}
                      placeholder="e.g. Bandra Kurla Complex, Mumbai"
                      className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                        errors.projectLocation ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-project-type" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                      Project Type <span className="text-[#C96F1B]">*</span>
                    </label>
                    <select
                      id="quote-project-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                    >
                      <option value="Residential Construction">Residential Construction</option>
                      <option value="Commercial Building">Commercial Building</option>
                      <option value="Infrastructure and Civil Works">Infrastructure and Civil Works</option>
                      <option value="Industrial or Manufacturing Facility">Industrial or Manufacturing Facility</option>
                      <option value="Warehouse or Logistics Facility">Warehouse or Logistics Facility</option>
                      <option value="Institutional Project">Institutional Project</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* REQUIREMENT-SPECIFIC FIELDS */}
              {initialRequirement === 'construction-contracting' ? (
                <div className="space-y-4 pt-4 border-t border-[#E8DDD0]">
                  <span className="text-xs font-heading font-bold text-[#C96F1B] uppercase tracking-wider block">
                    CONSTRUCTION CONTRACTING SPECIFICS
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contracting-req" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Construction Requirement
                      </label>
                      <select
                        id="contracting-req"
                        value={constructionRequirement}
                        onChange={(e) => setConstructionRequirement(e.target.value)}
                        className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                      >
                        <option value="Structural Construction Support">Structural Construction Support</option>
                        <option value="Civil Construction Requirement">Civil Construction Requirement</option>
                        <option value="Concrete-Intensive Construction">Concrete-Intensive Construction</option>
                        <option value="Site and Resource Coordination">Site and Resource Coordination</option>
                        <option value="Infrastructure-Linked Civil Support">Infrastructure-Linked Civil Support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contracting-stage" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Current Project Stage
                      </label>
                      <select
                        id="contracting-stage"
                        value={projectStage}
                        onChange={(e) => setProjectStage(e.target.value)}
                        className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                      >
                        <option value="Initial Enquiry">Initial Enquiry</option>
                        <option value="Planning">Planning</option>
                        <option value="Quotation">Quotation</option>
                        <option value="Mobilisation">Mobilisation</option>
                        <option value="Active Construction">Active Construction</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contracting-start" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Preferred Start Date <span className="text-[#C96F1B]">*</span>
                      </label>
                      <input
                        id="contracting-start"
                        type="date"
                        min={todayStr}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                          errors.startDate ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                        }`}
                      />
                    </div>

                    <div>
                      <label htmlFor="contracting-duration" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Expected Duration <span className="text-[#C96F1B]">*</span>
                      </label>
                      <input
                        id="contracting-duration"
                        type="text"
                        value={expectedDuration}
                        onChange={(e) => setExpectedDuration(e.target.value)}
                        placeholder="e.g. 6 Months or 1 Year"
                        className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                          errors.expectedDuration ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                        }`}
                      />
                    </div>

                    <div>
                      <label htmlFor="contracting-area" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Approximate Site Area (Optional)
                      </label>
                      <input
                        id="contracting-area"
                        type="text"
                        value={siteArea}
                        onChange={(e) => setSiteArea(e.target.value)}
                        placeholder="e.g. 45,000 sq.ft."
                        className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contracting-machinery" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Machinery Coordination Required
                      </label>
                      <select
                        id="contracting-machinery"
                        value={machineryCoordination}
                        onChange={(e) => setMachineryCoordination(e.target.value)}
                        className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="To Be Discussed">To Be Discussed</option>
                      </select>
                    </div>
                  </div>

                  {/* Supporting Documents Checklist */}
                  <div className="pt-2">
                    <label className="block text-xs font-heading font-semibold text-[#3D352D] mb-2 uppercase tracking-wider">
                      Supporting Documents Available
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-body">
                      {['Drawings', 'BOQ', 'Work Scope', 'Site Photographs', 'None Yet'].map((doc) => (
                        <label key={doc} className="flex items-center gap-2 p-2.5 rounded-[8px] bg-[#F5EEE5] border border-[#E8DDD0] cursor-pointer">
                          <input
                            type="checkbox"
                            checked={documentsAvailable.includes(doc)}
                            onChange={() => toggleDocument(doc)}
                            className="w-4 h-4 rounded-xs text-[#C96F1B] focus:ring-[#C96F1B]"
                          />
                          <span className="text-[#3D352D] font-medium">{doc}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Expected Scope Summary */}
                  <div>
                    <label htmlFor="contracting-scope" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                      Expected Scope Summary <span className="text-[#C96F1B]">*</span>
                    </label>
                    <textarea
                      id="contracting-scope"
                      rows={3}
                      value={scopeSummary}
                      onChange={(e) => setScopeSummary(e.target.value)}
                      placeholder="Outline structural requirements, raft foundations, RCC work..."
                      className={`w-full p-3.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                        errors.scopeSummary ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                      }`}
                    />
                  </div>
                </div>
              ) : (
                /* EQUIPMENT RENTAL SPECIFICS */
                <div className="space-y-4 pt-4 border-t border-[#E8DDD0]">
                  <span className="text-xs font-heading font-bold text-[#C96F1B] uppercase tracking-wider block">
                    EQUIPMENT RENTAL SPECIFICS
                  </span>

                  <div className="p-4 bg-[#F5EEE5] rounded-[12px] border border-[#E8DDD0] space-y-1">
                    <span className="text-[11px] font-heading font-semibold text-[#6B5E4E] uppercase">Equipment Required:</span>
                    <strong className="block font-heading text-sm text-[#C96F1B]">{equipment}</strong>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="rental-start" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Expected Rental Start Date <span className="text-[#C96F1B]">*</span>
                      </label>
                      <input
                        id="rental-start"
                        type="date"
                        min={todayStr}
                        value={rentalStartDate}
                        onChange={(e) => setRentalStartDate(e.target.value)}
                        className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                          errors.rentalStartDate ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                        }`}
                      />
                    </div>

                    <div>
                      <label htmlFor="rental-duration" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Rental Duration <span className="text-[#C96F1B]">*</span>
                      </label>
                      <input
                        id="rental-duration"
                        type="text"
                        value={rentalDuration}
                        onChange={(e) => setRentalDuration(e.target.value)}
                        placeholder="e.g. 3 Months or 26 Working Days"
                        className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                          errors.rentalDuration ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                        }`}
                      />
                    </div>

                    <div>
                      <label htmlFor="rental-shift" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Shift Requirement
                      </label>
                      <select
                        id="rental-shift"
                        value={shiftRequirement}
                        onChange={(e) => setShiftRequirement(e.target.value)}
                        className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                      >
                        <option value="One 12-Hour Shift">One 12-Hour Shift</option>
                        <option value="To Be Discussed">To Be Discussed</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="rental-concrete" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Estimated Concrete Requirement
                      </label>
                      <input
                        id="rental-concrete"
                        type="text"
                        value={estimatedConcrete}
                        onChange={(e) => setEstimatedConcrete(e.target.value)}
                        placeholder="e.g. 500 m³ / month"
                        className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="rental-pour" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Pour Type
                      </label>
                      <select
                        id="rental-pour"
                        value={pourType}
                        onChange={(e) => setPourType(e.target.value)}
                        className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                      >
                        <option value="High-Rise Placement">High-Rise Placement</option>
                        <option value="Large-Volume Pour">Large-Volume Pour</option>
                        <option value="Residential Building">Residential Building</option>
                        <option value="Commercial Building">Commercial Building</option>
                        <option value="Infrastructure-Related Work">Infrastructure-Related Work</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="rental-support" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Supporting Equipment Available
                      </label>
                      <select
                        id="rental-support"
                        value={supportingEquipment}
                        onChange={(e) => setSupportingEquipment(e.target.value)}
                        className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="To Be Confirmed">To Be Confirmed</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="rental-fuel" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Fuel and AdBlue Arrangement
                      </label>
                      <select
                        id="rental-fuel"
                        value={fuelArrangement}
                        onChange={(e) => setFuelArrangement(e.target.value)}
                        className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                      >
                        <option value="Client Can Arrange">Client Can Arrange</option>
                        <option value="Needs Discussion">Needs Discussion</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="rental-accommodation" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Operator Accommodation Arrangement
                      </label>
                      <select
                        id="rental-accommodation"
                        value={accommodationArrangement}
                        onChange={(e) => setAccommodationArrangement(e.target.value)}
                        className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                      >
                        <option value="Client Can Arrange">Client Can Arrange</option>
                        <option value="Needs Discussion">Needs Discussion</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="rental-notes" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                      Additional Rental Notes
                    </label>
                    <textarea
                      id="rental-notes"
                      rows={3}
                      value={rentalNotes}
                      onChange={(e) => setRentalNotes(e.target.value)}
                      placeholder="Specify site access constraints, boom clearance or specific site instructions..."
                      className="w-full p-3.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                    />
                  </div>

                  <div className="p-4 bg-[#F5EEE5] rounded-[12px] border border-[#E8DDD0] flex items-start gap-3 text-xs text-[#6B5E4E] font-body">
                    <Info className="w-4 h-4 text-[#C96F1B] shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      The final scope, availability, client responsibilities, rental conditions and commercial terms are confirmed in the written quotation or rental agreement. Availability is subject to confirmation for the requested project period.
                    </p>
                  </div>
                </div>
              )}

              {/* ADDITIONAL MESSAGE & CONSENT */}
              <div className="space-y-4 pt-4 border-t border-[#E8DDD0]">
                <div>
                  <label htmlFor="quote-message" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Additional Message / Comments (Optional)
                  </label>
                  <textarea
                    id="quote-message"
                    rows={3}
                    value={additionalMessage}
                    onChange={(e) => setAdditionalMessage(e.target.value)}
                    placeholder="Provide any additional project requirements or questions..."
                    className="w-full p-3.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                  />
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="w-4 h-4 rounded-xs border-[#D8CCBC] text-[#C96F1B] focus:ring-[#C96F1B] mt-0.5"
                    />
                    <span className="text-xs text-[#6B5E4E] font-body leading-tight">
                      I agree that Chitrani Construction may use the information provided to respond to this quotation request.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-[11px] text-[#B42318] mt-1 font-body flex items-center gap-1 pl-7">
                      <AlertCircle className="w-3 h-3 text-[#B42318]" />
                      <span>{errors.consent}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="pt-4 border-t border-[#E8DDD0] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-[12px] bg-[#F5EEE5] hover:bg-[#E8DDD0] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors min-h-[48px]"
                >
                  <ArrowLeft className="w-4 h-4 text-[#C96F1B]" />
                  <span>Back to Requirement</span>
                </button>

                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5 min-h-[48px]"
                >
                  <span>Review Summary</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

            </form>
          )}

          {/* STEP 3: REVIEW SUMMARY & HANDOFF */}
          {step === 3 && (
            <div className="space-y-6">
              
              <h3 ref={stepTitleRef} tabIndex={-1} className="font-heading font-semibold text-xl text-[#3D352D] focus:outline-hidden">
                Step 3: Review Quote Request Summary
              </h3>

              {isPrepared ? (
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#E8F4EA] border border-[#A5D6A7] text-[#2E7D32] space-y-4 font-body">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-[#2E7D32] shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-lg text-[#2E7D32]">Quote Request Prepared</h4>
                      <p className="text-xs text-[#2E7D32]">
                        Your email application should open automatically. Click the button below if you need to re-open the email application.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={mailtoUrl}
                      className="px-6 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                      <span>Open Email to Send Quote Request</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsPrepared(false)}
                      className="px-6 py-3.5 rounded-[12px] bg-white border border-[#D8CCBC] text-[#3D352D] hover:bg-[#F5EEE5] font-heading text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Edit Request Details
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  
                  {/* Summary Card */}
                  <div className="bg-[#F5EEE5] p-6 sm:p-8 rounded-[16px] border border-[#E8DDD0] space-y-4 text-xs font-body text-[#3D352D]">
                    <div className="flex items-center justify-between border-b border-[#E8DDD0] pb-3">
                      <span className="font-heading text-[#6B5E4E] font-semibold uppercase tracking-wider">
                        Requirement:
                      </span>
                      <div className="flex items-center gap-2">
                        <strong className="font-heading text-sm text-[#C96F1B]">
                          {initialRequirement === 'construction-contracting' ? 'Construction Contracting' : 'Concrete Boom Placer Rental'}
                        </strong>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="p-1 text-[#6B5E4E] hover:text-[#C96F1B]"
                          title="Edit Requirement"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#3D352D]">
                      <div><strong>Full Name:</strong> {fullName}</div>
                      <div><strong>Company:</strong> {companyName}</div>
                      <div><strong>Phone:</strong> {phone}</div>
                      <div><strong>Email:</strong> {email}</div>
                      <div><strong>Location:</strong> {projectLocation}</div>
                      <div><strong>Project Type:</strong> {projectType}</div>
                    </div>

                    {initialRequirement === 'construction-contracting' ? (
                      <div className="pt-3 border-t border-[#E8DDD0] grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div><strong>Requirement:</strong> {constructionRequirement}</div>
                        <div><strong>Stage:</strong> {projectStage}</div>
                        <div><strong>Start Date:</strong> {startDate}</div>
                        <div><strong>Duration:</strong> {expectedDuration}</div>
                        <div><strong>Machinery Coordination:</strong> {machineryCoordination}</div>
                        <div><strong>Documents:</strong> {documentsAvailable.join(', ') || 'None'}</div>
                        <div className="sm:col-span-2"><strong>Scope Summary:</strong> {scopeSummary}</div>
                      </div>
                    ) : (
                      <div className="pt-3 border-t border-[#E8DDD0] grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div><strong>Equipment:</strong> {equipment}</div>
                        <div><strong>Start Date:</strong> {rentalStartDate}</div>
                        <div><strong>Duration:</strong> {rentalDuration}</div>
                        <div><strong>Shift:</strong> {shiftRequirement}</div>
                        <div><strong>Concrete Volume:</strong> {estimatedConcrete || 'N/A'}</div>
                        <div><strong>Pour Type:</strong> {pourType}</div>
                      </div>
                    )}
                  </div>

                  {/* Submission Action */}
                  <div className="p-6 bg-white rounded-[16px] border border-[#E8DDD0] space-y-4">
                    <button
                      type="button"
                      onClick={handleSendQuote}
                      className="w-full py-4 px-6 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#C96F1B]"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                      <span>Open Email to Send Quote Request</span>
                    </button>
                    
                    <p className="text-[11px] text-[#6B5E4E] font-body text-center">
                      Your email application will open with the quotation details prepared. Review and send the email to complete the request.
                    </p>
                  </div>

                  {/* Navigation Back */}
                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-[10px] bg-[#F5EEE5] hover:bg-[#E8DDD0] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4 text-[#C96F1B]" />
                      <span>Edit Contact & Project Details</span>
                    </button>
                  </div>

                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
