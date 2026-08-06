import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Copy, 
  Check, 
  AlertCircle, 
  Loader2,
  Truck
} from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteFormProps {
  preselectedRequirement?: string;
  preselectedEquipment?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ 
  preselectedRequirement = 'Construction Contracting',
  preselectedEquipment = ''
}) => {
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState<QuoteFormData>({
    requirementType: preselectedRequirement,
    projectType: 'Commercial Building',
    siteLocation: '',
    approxArea: '',
    startDate: '',
    budgetRange: '₹50 Lakhs - ₹2 Crores',
    equipmentType: preselectedEquipment || 'Putzmeister M42-5 Concrete Boom Placer',
    quantity: 1,
    rentalDuration: 'Monthly Basis',
    requiredDate: '',
    fullName: '',
    companyName: '',
    mobileNumber: '',
    email: '',
    contactMethod: 'Phone',
    boqFileName: '',
    drawingFileName: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync external URL parameters
  useEffect(() => {
    if (preselectedRequirement) {
      let decoded = decodeURIComponent(preselectedRequirement);
      if (decoded.toLowerCase().includes('boom') || decoded.toLowerCase().includes('rental')) {
        setFormData(prev => ({ ...prev, requirementType: 'Concrete Boom Placer Rental' }));
      } else {
        setFormData(prev => ({ ...prev, requirementType: decoded }));
      }
    }
    if (preselectedEquipment) {
      setFormData(prev => ({ ...prev, equipmentType: 'Putzmeister M42-5 Concrete Boom Placer' }));
    }
  }, [preselectedRequirement, preselectedEquipment]);

  const isEquipmentRental = formData.requirementType.toLowerCase().includes('rental') || formData.requirementType.toLowerCase().includes('placer');
  const totalSteps = isEquipmentRental ? 5 : 4;

  const handleInputChange = (field: keyof QuoteFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const validateStep = (currentStep: number) => {
    const errs: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.requirementType) errs.requirementType = 'Please select a requirement category.';
    }

    if (currentStep === 2) {
      if (!formData.siteLocation.trim()) errs.siteLocation = 'Site Location is required.';
      if (!formData.approxArea.trim()) errs.approxArea = 'Approximate Area / Scope Volume is required.';
    }

    if (currentStep === 3 && isEquipmentRental) {
      if (!formData.equipmentType) errs.equipmentType = 'Equipment Type is required.';
      if (!formData.requiredDate) errs.requiredDate = 'Deployment required date is required.';
    }

    const isContactStep = (isEquipmentRental && currentStep === 4) || (!isEquipmentRental && currentStep === 3);
    if (isContactStep) {
      if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
      if (!formData.mobileNumber.trim()) {
        errs.mobileNumber = 'Mobile Number is required.';
      } else if (!/^[0-9+\s-]{8,15}$/.test(formData.mobileNumber.trim())) {
        errs.mobileNumber = 'Please enter a valid mobile number.';
      }
      if (!formData.email.trim()) {
        errs.email = 'Email address is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errs.email = 'Please enter a valid email address.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;

    if (!isEquipmentRental && step === 2) {
      setStep(3); // Contact step
    } else {
      setStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const ref = `CHIT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceNumber(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const copyRefToClipboard = () => {
    navigator.clipboard.writeText(referenceNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="quote" className="py-16 sm:py-24 bg-[#F9F7F2] text-[#2D2D2D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <span className="font-display text-xs text-[#FFB300] font-bold tracking-wider uppercase block">
            TENDER & ESTIMATION DESK
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2D2D2D] tracking-tight">
            Request a Formal Proposal
          </h2>
          <p className="text-sm text-[#5D5D5D] font-body max-w-xl mx-auto">
            Itemized BOQ estimation, concrete boom placer scheduling, and technical execution terms.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[20px] border border-[#E7E7E7] shadow-[0_15px_35px_rgba(0,0,0,0.08)] p-6 sm:p-10">
          
          {isSubmitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-bold text-2xl text-[#2D2D2D]">
                  Proposal Request Logged!
                </h3>
                <p className="text-sm text-[#5D5D5D] font-body max-w-md mx-auto">
                  Your enquiry has been received by Chitrani Construction's technical estimation team.
                </p>
              </div>

              {/* Reference Badge */}
              <div className="bg-[#2D2D2D] text-white p-5 rounded-[20px] border border-white/10 max-w-xs mx-auto space-y-2">
                <span className="font-display text-xs text-[#FFB300] block uppercase font-bold tracking-wider">
                  REFERENCE CODE
                </span>
                <div className="font-heading font-bold text-xl text-white tracking-widest flex items-center justify-center gap-2">
                  <span>{referenceNumber}</span>
                  <button
                    onClick={copyRefToClipboard}
                    className="p-1 rounded bg-white/10 hover:bg-white/20 text-white text-xs"
                    title="Copy Reference"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && <span className="text-[10px] text-emerald-400 block font-body">Copied to clipboard!</span>}
              </div>

              <p className="text-xs text-[#7D7D7D] font-body">
                Our civil engineer will contact <strong>{formData.fullName}</strong> at <strong>{formData.mobileNumber}</strong> or <strong>{formData.email}</strong> within 24 hours.
              </p>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                }}
                className="px-6 py-3 rounded-md bg-[#FFB300] hover:bg-[#E59A00] text-white font-heading text-xs font-bold uppercase tracking-wider shadow-xs"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div>
              {/* Progress Bar */}
              <div className="mb-8 space-y-2">
                <div className="flex justify-between items-center text-xs font-heading text-[#2D2D2D]">
                  <span className="text-[#FFB300] font-bold uppercase">
                    STEP {step} OF {totalSteps}
                  </span>
                  <span className="text-[#7D7D7D] font-body">
                    {Math.round((step / totalSteps) * 100)}% Completed
                  </span>
                </div>
                <div className="w-full h-2 bg-[#F9F7F2] rounded-full overflow-hidden border border-[#E7E7E7]">
                  <div 
                    className="h-full bg-[#FFB300] transition-all duration-300"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              {/* Error Banner */}
              {Object.keys(errors).length > 0 && (
                <div className="mb-6 p-3 rounded-md bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2 font-body">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Please fix the required fields:</strong>
                    <ul className="list-disc list-inside mt-1">
                      {Object.values(errors).map((e, idx) => <li key={idx}>{e}</li>)}
                    </ul>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* STEP 1: REQUIREMENT CATEGORY */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-lg text-[#2D2D2D]">
                      1. Select Your Requirement Category
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { title: 'Construction Contracting', desc: 'Civil RCC works, building construction, infrastructure contracting' },
                        { title: 'Concrete Boom Placer Rental', desc: 'Putzmeister M42-5 boom pump with certified operator & helper' },
                        { title: 'Subcontracting Partnership', desc: 'Specialized structural concrete & formwork package execution' },
                        { title: 'Turnkey Civil Package', desc: 'Full EPC civil & structural scope with material procurement' },
                      ].map((item) => (
                        <label
                          key={item.title}
                          className={`p-4 rounded-md border cursor-pointer transition-all flex items-start gap-3 ${
                            formData.requirementType === item.title
                              ? 'bg-[#2D2D2D] text-white border-[#2D2D2D]'
                              : 'bg-white border-[#D9D9D9] text-[#2D2D2D] hover:border-[#FFB300]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="requirementType"
                            value={item.title}
                            checked={formData.requirementType === item.title}
                            onChange={(e) => handleInputChange('requirementType', e.target.value)}
                            className="mt-1 text-[#FFB300] focus:ring-[#FFB300] accent-[#FFB300]"
                          />
                          <div>
                            <strong className={`block font-heading text-sm ${
                              formData.requirementType === item.title ? 'text-white' : 'text-[#2D2D2D]'
                            }`}>
                              {item.title}
                            </strong>
                            <span className={`text-xs font-body leading-snug block mt-0.5 ${
                              formData.requirementType === item.title ? 'text-[#D0D0D0]' : 'text-[#7D7D7D]'
                            }`}>
                              {item.desc}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: PROJECT DETAILS */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-lg text-[#2D2D2D]">
                      2. Project Location & Scope Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                          Project Sector
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => handleInputChange('projectType', e.target.value)}
                          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white border border-[#D9D9D9] text-[#2D2D2D] text-sm focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                        >
                          <option value="Real Estate & Housing">Real Estate & Residential Building</option>
                          <option value="Commercial Complex">Commercial & Office Complex</option>
                          <option value="Infrastructure Works">Infrastructure & Bridge / Flyover</option>
                          <option value="Industrial Plant">Industrial Facility / PEB Shed</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                          Budget Range
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white border border-[#D9D9D9] text-[#2D2D2D] text-sm focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                        >
                          <option value="< ₹50 Lakhs">&lt; ₹50 Lakhs</option>
                          <option value="₹50 Lakhs - ₹2 Crores">₹50 Lakhs - ₹2 Crores</option>
                          <option value="₹2 Crores - ₹10 Crores">₹2 Crores - ₹10 Crores</option>
                          <option value="₹10 Crores+">₹10 Crores+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                          Site Location / City *
                        </label>
                        <input
                          type="text"
                          value={formData.siteLocation}
                          onChange={(e) => handleInputChange('siteLocation', e.target.value)}
                          placeholder="e.g. Andheri East, Mumbai or Jalgaon"
                          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white border border-[#D9D9D9] text-[#2D2D2D] text-sm placeholder-[#999999] focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                          Approx Built-up Area / Volume *
                        </label>
                        <input
                          type="text"
                          value={formData.approxArea}
                          onChange={(e) => handleInputChange('approxArea', e.target.value)}
                          placeholder="e.g. 50,000 Sq.Ft or 1,200 Cu.M Concrete"
                          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white border border-[#D9D9D9] text-[#2D2D2D] text-sm placeholder-[#999999] focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                          Target Start Date
                        </label>
                        <input
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => handleInputChange('startDate', e.target.value)}
                          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white border border-[#D9D9D9] text-[#2D2D2D] text-sm focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: EQUIPMENT SPECIFICS (IF RENTAL) */}
                {step === 3 && isEquipmentRental && (
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-lg text-[#2D2D2D]">
                      3. Equipment Deployment Requirements
                    </h3>

                    <div className="p-4 bg-[#2D2D2D] text-white rounded-md border border-white/10 space-y-2 font-body">
                      <div className="font-heading text-xs text-[#FFB300] font-bold uppercase flex items-center gap-2">
                        <Truck className="w-4 h-4 text-[#FFB300]" />
                        <span>Putzmeister M42-5 Concrete Boom Placer</span>
                      </div>
                      <p className="text-xs text-[#D0D0D0]">
                        Includes 42m 5-arm RZ boom reach, 160 m³/h output, certified operator, and maintenance helper.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                          Rental Terms Structure
                        </label>
                        <select
                          value={formData.rentalDuration}
                          onChange={(e) => handleInputChange('rentalDuration', e.target.value)}
                          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white border border-[#D9D9D9] text-[#2D2D2D] text-sm focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                        >
                          <option value="Daily / Pour Basis">Daily / Pour Basis</option>
                          <option value="Monthly Contract Basis">Monthly Contract Basis</option>
                          <option value="Project Duration">Project Duration Contract</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                          Required Mobilization Date *
                        </label>
                        <input
                          type="date"
                          value={formData.requiredDate}
                          onChange={(e) => handleInputChange('requiredDate', e.target.value)}
                          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white border border-[#D9D9D9] text-[#2D2D2D] text-sm focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* CONTACT STEP */}
                {((isEquipmentRental && step === 4) || (!isEquipmentRental && step === 3)) && (
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-lg text-[#2D2D2D]">
                      {isEquipmentRental ? '4.' : '3.'} Client & Contact Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          placeholder="e.g. Anand Deshmukh"
                          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white border border-[#D9D9D9] text-[#2D2D2D] text-sm placeholder-[#999999] focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange('companyName', e.target.value)}
                          placeholder="e.g. Deshmukh Developers"
                          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white border border-[#D9D9D9] text-[#2D2D2D] text-sm placeholder-[#999999] focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.mobileNumber}
                          onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                          placeholder="+91 98337 06666"
                          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white border border-[#D9D9D9] text-[#2D2D2D] text-sm placeholder-[#999999] focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="anand@deshmukhdev.com"
                          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-white border border-[#D9D9D9] text-[#2D2D2D] text-sm placeholder-[#999999] focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* REVIEW & SUBMIT STEP */}
                {step === totalSteps && (
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-lg text-[#2D2D2D]">
                      {totalSteps}. Review Proposal Request Summary
                    </h3>

                    <div className="bg-[#2D2D2D] text-white p-5 rounded-md border border-white/10 space-y-3 text-xs font-body">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="font-heading text-[#7D7D7D] uppercase">CATEGORY:</span>
                        <strong className="text-[#FFB300] font-heading text-sm">{formData.requirementType}</strong>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#D0D0D0]">
                        <div>Location: <strong className="text-white">{formData.siteLocation}</strong></div>
                        <div>Sector: <strong className="text-white">{formData.projectType}</strong></div>
                        <div>Built-up / Volume: <strong className="text-white">{formData.approxArea}</strong></div>
                        <div>Budget: <strong className="text-white">{formData.budgetRange}</strong></div>
                      </div>

                      <div className="pt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#D0D0D0]">
                        <div>Contact Name: <strong className="text-white">{formData.fullName} ({formData.companyName || 'Individual'})</strong></div>
                        <div>Phone & Email: <strong className="text-white">{formData.mobileNumber} • {formData.email}</strong></div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-heading text-[#2D2D2D] font-medium mb-1 uppercase">
                        Additional Notes / Special Instructions
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                        placeholder="Mention site height elevation, concrete grade requirements, or specific access rules..."
                        className="w-full px-3.5 py-2.5 rounded-md bg-white border border-[#D9D9D9] text-[#2D2D2D] text-sm placeholder-[#999999] focus:outline-hidden focus:border-[#FFB300] focus:ring-2 focus:ring-[#FFB300]/30 transition-all"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="pt-4 border-t border-[#E7E7E7] flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2.5 rounded-md bg-[#F9F7F2] hover:bg-[#E7E7E7] text-[#2D2D2D] font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors min-h-[44px]"
                    >
                      <ArrowLeft className="w-4 h-4 text-[#FFB300]" />
                      <span>Back</span>
                    </button>
                  ) : <span />}

                  {step < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-md bg-[#2D2D2D] hover:bg-[#444444] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors min-h-[44px]"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-4 h-4 text-[#FFB300]" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-md bg-[#FFB300] hover:bg-[#E59A00] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors disabled:opacity-50 focus:outline-hidden focus:ring-2 focus:ring-[#F9C40F] shadow-xs min-h-[44px]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Generating Reference...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4 text-white" />
                          <span>Submit Proposal Request</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

              </form>
            </div>
          )}

          </div>

      </div>
    </section>
  );
};
