import React, { useState, useRef } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  AlertCircle, 
  ExternalLink, 
  CheckCircle2, 
  Upload,
  FileText,
  X,
  Building2,
  Clock,
  ShieldCheck,
  Edit3
} from 'lucide-react';
import { companyConfig } from '../../config/companyConfig';

export type QuoteRequestPayload = {
  name: string;
  company?: string;
  designation?: string;
  mobile: string;
  email: string;
  projectName?: string;
  projectLocation: string;
  service: string;
  otherServiceDescription?: string;
  approximateSizeOrQuantity?: string;
  expectedStartDate?: string;
  message: string;
  selectedFileName?: string;
  selectedFileSize?: string;
  boomPlacer?: {
    rentalStartDate?: string;
    expectedDuration?: string;
    shiftRequirement?: string;
  };
  labour?: {
    approximateManpower?: string;
  };
};

interface QuoteFormContainerProps {
  initialRequirement?: 'construction-contracting' | 'equipment-rental';
}

export const QuoteFormContainer: React.FC<QuoteFormContainerProps> = ({
  initialRequirement = 'construction-contracting'
}) => {
  const [step, setStep] = useState<number>(1);

  // STEP 1: Contact & Project Info
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [designation, setDesignation] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectLocation, setProjectLocation] = useState('');

  // STEP 2: Service & Commercial Requirements
  const [service, setService] = useState<string>(
    initialRequirement === 'equipment-rental' ? 'Boom Placer Rental' : 'RCC Work'
  );
  const [otherServiceDesc, setOtherServiceDesc] = useState('');
  const [approxQuantity, setApproxQuantity] = useState('');
  const [expectedStartDate, setExpectedStartDate] = useState('');
  const [message, setMessage] = useState('');

  // Conditional - Boom Placer
  const [rentalStartDate, setRentalStartDate] = useState('');
  const [rentalDuration, setRentalDuration] = useState('');
  const [shiftRequirement, setShiftRequirement] = useState('One 12-Hour Shift');

  // Conditional - Labour Contract
  const [approxManpower, setApproxManpower] = useState('');

  // File Upload State (Frontend UI only)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  // Errors & Prepared Mailto State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPrepared, setIsPrepared] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  // Refs for focus management
  const fullNameRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const otherDescRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const stepTitleRef = useRef<HTMLHeadingElement>(null);

  const focusStepHeading = () => {
    if (stepTitleRef.current) {
      stepTitleRef.current.focus();
    }
  };

  // STEP 1 Validation
  const validateStep1 = (): boolean => {
    const errs: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Full Name is required (minimum 2 characters).';
    }

    const cleanMobile = mobileNumber.trim().replace(/[\s-]/g, '');
    const indianMobileRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
    if (!mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile Number is required.';
    } else if (!indianMobileRegex.test(cleanMobile)) {
      errs.mobileNumber = 'Please enter a valid 10-digit Indian mobile number (e.g. +91 9833706666).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!emailRegex.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!projectLocation.trim()) {
      errs.projectLocation = 'Project Location is required.';
    }

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      if (errs.fullName && fullNameRef.current) fullNameRef.current.focus();
      else if (errs.mobileNumber && mobileRef.current) mobileRef.current.focus();
      else if (errs.email && emailRef.current) emailRef.current.focus();
      else if (errs.projectLocation && locationRef.current) locationRef.current.focus();
      return false;
    }

    return true;
  };

  // STEP 2 Validation
  const validateStep2 = (): boolean => {
    const errs: Record<string, string> = {};

    if (!service) {
      errs.service = 'Please select a Required Service.';
    }

    if (service === 'Other' && !otherServiceDesc.trim()) {
      errs.otherServiceDesc = 'Please describe the required service.';
    }

    if (!message.trim() || message.trim().length < 10) {
      errs.message = 'Please describe your requirement in detail (minimum 10 characters).';
    }

    if (fileError) {
      errs.file = fileError;
    }

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      if (errs.service && serviceRef.current) serviceRef.current.focus();
      else if (errs.otherServiceDesc && otherDescRef.current) otherDescRef.current.focus();
      else if (errs.message && messageRef.current) messageRef.current.focus();
      return false;
    }

    return true;
  };

  const handleNextStep1 = () => {
    if (!validateStep1()) return;
    setStep(2);
    focusStepHeading();
  };

  const handleNextStep2 = () => {
    if (!validateStep2()) return;
    setStep(3);
    focusStepHeading();
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      focusStepHeading();
    }
  };

  // File Upload Handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const allowedExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'jpg', 'jpeg', 'png'];
    const fileExt = file.name.split('.').pop()?.toLowerCase() || '';

    if (!allowedExtensions.includes(fileExt)) {
      setFileError('Invalid file type. Allowed formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG.');
      setSelectedFile(null);
      return;
    }

    const maxSizeInBytes = 10 * 1024 * 1024; // 10 MB
    if (file.size > maxSizeInBytes) {
      setFileError('File size exceeds the 10 MB maximum limit.');
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  // Final Temporary Submission Handler
  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;

    const payload: QuoteRequestPayload = {
      name: fullName.trim(),
      company: companyName.trim() || undefined,
      designation: designation.trim() || undefined,
      mobile: mobileNumber.trim(),
      email: email.trim(),
      projectName: projectName.trim() || undefined,
      projectLocation: projectLocation.trim(),
      service,
      otherServiceDescription: service === 'Other' ? otherServiceDesc.trim() : undefined,
      approximateSizeOrQuantity: approxQuantity.trim() || undefined,
      expectedStartDate: expectedStartDate || undefined,
      message: message.trim(),
      selectedFileName: selectedFile ? selectedFile.name : undefined,
      selectedFileSize: selectedFile ? formatFileSize(selectedFile.size) : undefined,
      boomPlacer: service === 'Boom Placer Rental' ? {
        rentalStartDate: rentalStartDate || undefined,
        expectedDuration: rentalDuration.trim() || undefined,
        shiftRequirement: shiftRequirement || undefined
      } : undefined,
      labour: service === 'Labour Contract' ? {
        approximateManpower: approxManpower.trim() || undefined
      } : undefined
    };

    // Safe Mailto Payload Formatting
    const subject = `Quotation Request — Chitrani Construction — ${payload.service}`;
    const bodyLines: string[] = [
      `Quotation Request Details:`,
      `---------------------------------`,
      `Name: ${payload.name}`,
      `Company: ${payload.company || 'N/A'}`,
      `Designation: ${payload.designation || 'N/A'}`,
      `Mobile: ${payload.mobile}`,
      `Email: ${payload.email}`,
      `Project Name: ${payload.projectName || 'N/A'}`,
      `Project Location: ${payload.projectLocation}`,
      `Required Service: ${payload.service}${payload.otherServiceDescription ? ` (${payload.otherServiceDescription})` : ''}`,
      `Approx. Size/Quantity: ${payload.approximateSizeOrQuantity || 'N/A'}`,
      `Expected Start Date: ${payload.expectedStartDate || 'N/A'}`,
      `---------------------------------`
    ];

    if (payload.boomPlacer) {
      bodyLines.push(
        `Boom Placer Start Date: ${payload.boomPlacer.rentalStartDate || 'N/A'}`,
        `Boom Placer Duration: ${payload.boomPlacer.expectedDuration || 'N/A'}`,
        `Shift Requirement: ${payload.boomPlacer.shiftRequirement || 'N/A'}`,
        `---------------------------------`
      );
    }

    if (payload.labour) {
      bodyLines.push(
        `Approx. Manpower: ${payload.labour.approximateManpower || 'N/A'}`,
        `---------------------------------`
      );
    }

    bodyLines.push(
      `Detailed Requirement:`,
      `${payload.message}`,
      `---------------------------------`
    );

    if (payload.selectedFileName) {
      bodyLines.push(
        `Selected Document: ${payload.selectedFileName} (${payload.selectedFileSize})`,
        `[Note: Please manually attach this file before sending this email.]`,
        `---------------------------------`
      );
    }

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(bodyLines.join('\n'));
    const url = `mailto:${companyConfig.email}?subject=${encodedSubject}&body=${encodedBody}`;

    setMailtoUrl(url);
    setIsPrepared(true);

    window.location.href = url;
  };

  return (
    <section className="py-16 sm:py-24 bg-[#EADBC8] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step Container Card */}
        <div className="bg-white rounded-[24px] border border-[#E8DDD0] p-6 sm:p-10 shadow-[0_20px_40px_rgba(61,53,45,0.06)] space-y-8">
          
          {/* Progress Header */}
          <div className="space-y-3 border-b border-[#E8DDD0] pb-6">
            <div className="flex justify-between items-center text-xs font-heading">
              <span className="text-[#C96F1B] font-bold uppercase tracking-wider">
                STEP {step} OF 3
              </span>
              <span className="text-[#6B5E4E] font-body font-medium">
                {step === 1 && '1. Contact & Project Info'}
                {step === 2 && '2. Service Requirements'}
                {step === 3 && '3. Review & Send'}
              </span>
            </div>
            
            {/* Visual Bar */}
            <div className="w-full h-2.5 bg-[#F5EEE5] rounded-full overflow-hidden border border-[#E8DDD0]">
              <div 
                className="h-full bg-[#C96F1B] transition-all duration-300 rounded-full"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>

            {/* Clickable Step Tabs */}
            <div className="flex items-center justify-between pt-1 text-[11px] font-heading font-semibold text-[#6B5E4E]">
              <button
                type="button"
                onClick={() => { if (step > 1) setStep(1); }}
                className={`hover:text-[#C96F1B] ${step === 1 ? 'text-[#C96F1B] font-bold' : ''}`}
              >
                1. Contact &amp; Location
              </button>
              <button
                type="button"
                onClick={() => { if (step === 3) setStep(2); }}
                className={`hover:text-[#C96F1B] ${step === 2 ? 'text-[#C96F1B] font-bold' : ''}`}
              >
                2. Requirements &amp; Scope
              </button>
              <span className={step === 3 ? 'text-[#C96F1B] font-bold' : ''}>
                3. Review &amp; Send
              </span>
            </div>
          </div>

          {/* STEP 1: CONTACT & PROJECT INFO */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 ref={stepTitleRef} tabIndex={-1} className="font-heading font-semibold text-xl sm:text-2xl text-[#3D352D] focus:outline-hidden">
                  Step 1: Contact &amp; Project Location
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body">
                  Provide your contact details and the project site location.
                </p>
              </div>

              {/* Error Summary */}
              {Object.keys(errors).length > 0 && (
                <div role="alert" className="p-4 rounded-[12px] bg-[#FDECEC] border border-[#B42318] text-xs text-[#B42318] flex items-start gap-3 font-body">
                  <AlertCircle className="w-5 h-5 text-[#B42318] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-sm">Please correct the following fields:</strong>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      {Object.values(errors).map((err, idx) => <li key={idx}>{err}</li>)}
                    </ul>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-fullname" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Full Name <span className="text-[#C96F1B]">*</span>
                  </label>
                  <input
                    ref={fullNameRef}
                    id="quote-fullname"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Anand Deshmukh"
                    aria-invalid={!!errors.fullName}
                    className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                      errors.fullName ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-[#B42318] mt-1 font-body">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="quote-company" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Company Name (Optional)
                  </label>
                  <input
                    id="quote-company"
                    type="text"
                    autoComplete="organization"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Deshmukh Developers Ltd"
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="quote-designation" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Designation (Optional)
                  </label>
                  <input
                    id="quote-designation"
                    type="text"
                    autoComplete="organization-title"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    placeholder="e.g. Project Manager / Chief Engineer"
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="quote-mobile" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Mobile Number <span className="text-[#C96F1B]">*</span>
                  </label>
                  <input
                    ref={mobileRef}
                    id="quote-mobile"
                    type="tel"
                    autoComplete="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="+91 98337 06666"
                    aria-invalid={!!errors.mobileNumber}
                    className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                      errors.mobileNumber ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                    }`}
                  />
                  {errors.mobileNumber && <p className="text-[11px] text-[#B42318] mt-1 font-body">{errors.mobileNumber}</p>}
                </div>

                <div>
                  <label htmlFor="quote-email" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Email Address <span className="text-[#C96F1B]">*</span>
                  </label>
                  <input
                    ref={emailRef}
                    id="quote-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="anand@deshmukhdev.com"
                    aria-invalid={!!errors.email}
                    className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                      errors.email ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-[#B42318] mt-1 font-body">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="quote-project-name" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Project Name (Optional)
                  </label>
                  <input
                    id="quote-project-name"
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="e.g. Ocean Star Tower B"
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote-location" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                  Project Location <span className="text-[#C96F1B]">*</span>
                </label>
                <input
                  ref={locationRef}
                  id="quote-location"
                  type="text"
                  autoComplete="street-address"
                  value={projectLocation}
                  onChange={(e) => setProjectLocation(e.target.value)}
                  placeholder="e.g. Kashinath Dhuru Marg, Mumbai – 400028"
                  aria-invalid={!!errors.projectLocation}
                  className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                    errors.projectLocation ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                  }`}
                />
                {errors.projectLocation && <p className="text-[11px] text-[#B42318] mt-1 font-body">{errors.projectLocation}</p>}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep1}
                  className="px-8 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5 transition-all"
                >
                  <span>Continue to Step 2</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SERVICE REQUIREMENTS & COMMERCIAL DETAILS */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 ref={stepTitleRef} tabIndex={-1} className="font-heading font-semibold text-xl sm:text-2xl text-[#3D352D] focus:outline-hidden">
                  Step 2: Service &amp; Commercial Requirements
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body">
                  Select your required service and specify commercial details.
                </p>
              </div>

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

              {/* Service Selection Dropdown */}
              <div>
                <label htmlFor="quote-service" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                  Required Service <span className="text-[#C96F1B]">*</span>
                </label>
                <select
                  ref={serviceRef}
                  id="quote-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                >
                  <option value="RCC Work">RCC Work</option>
                  <option value="Civil Work">Civil Work</option>
                  <option value="Brickwork / Blockwork">Brickwork / Blockwork</option>
                  <option value="Labour Contract">Labour Contract</option>
                  <option value="Boom Placer Rental">Boom Placer Rental</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Conditional: Other Service Description */}
              {service === 'Other' && (
                <div>
                  <label htmlFor="quote-other-desc" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Describe Required Service <span className="text-[#C96F1B]">*</span>
                  </label>
                  <input
                    ref={otherDescRef}
                    id="quote-other-desc"
                    type="text"
                    value={otherServiceDesc}
                    onChange={(e) => setOtherServiceDesc(e.target.value)}
                    placeholder="Describe the specific construction requirement..."
                    className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all ${
                      errors.otherServiceDesc ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                    }`}
                  />
                  {errors.otherServiceDesc && <p className="text-[11px] text-[#B42318] mt-1 font-body">{errors.otherServiceDesc}</p>}
                </div>
              )}

              {/* Conditional: Boom Placer Options */}
              {service === 'Boom Placer Rental' && (
                <div className="p-5 rounded-[16px] bg-[#F5EEE5] border border-[#E8DDD0] space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8DDD0] pb-3">
                    <span className="font-heading text-xs font-bold text-[#C96F1B] uppercase tracking-wider flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      Boom Placer Specification (Putzmeister M42-5)
                    </span>
                    <span className="text-[10px] font-heading font-semibold px-2.5 py-1 rounded-[8px] bg-amber-100 text-amber-900 border border-amber-300 uppercase">
                      Availability subject to confirmation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <label htmlFor="quote-rental-start" className="block font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Rental Start Date (Optional)
                      </label>
                      <input
                        id="quote-rental-start"
                        type="date"
                        value={rentalStartDate}
                        onChange={(e) => setRentalStartDate(e.target.value)}
                        className="w-full min-h-[44px] px-3 py-2 rounded-[8px] bg-white border border-[#D8CCBC] text-[#3D352D] text-xs font-body"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-rental-duration" className="block font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Expected Duration (Optional)
                      </label>
                      <input
                        id="quote-rental-duration"
                        type="text"
                        value={rentalDuration}
                        onChange={(e) => setRentalDuration(e.target.value)}
                        placeholder="e.g. 1 month / 3 months"
                        className="w-full min-h-[44px] px-3 py-2 rounded-[8px] bg-white border border-[#D8CCBC] text-[#3D352D] text-xs font-body"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-shift-req" className="block font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                        Shift Requirement
                      </label>
                      <select
                        id="quote-shift-req"
                        value={shiftRequirement}
                        onChange={(e) => setShiftRequirement(e.target.value)}
                        className="w-full min-h-[44px] px-3 py-2 rounded-[8px] bg-white border border-[#D8CCBC] text-[#3D352D] text-xs font-body"
                      >
                        <option value="One 12-Hour Shift">One 12-Hour Shift</option>
                        <option value="Day Shift Only">Day Shift Only</option>
                        <option value="Night Shift Only">Night Shift Only</option>
                        <option value="To Be Discussed">To Be Discussed</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Conditional: Labour Contract Options */}
              {service === 'Labour Contract' && (
                <div className="p-5 rounded-[16px] bg-[#F5EEE5] border border-[#E8DDD0] space-y-3">
                  <span className="font-heading text-xs font-bold text-[#C96F1B] uppercase tracking-wider block">
                    Labour Contract Options
                  </span>
                  <div>
                    <label htmlFor="quote-manpower-req" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                      Approximate Manpower Requirement (Optional)
                    </label>
                    <input
                      id="quote-manpower-req"
                      type="text"
                      value={approxManpower}
                      onChange={(e) => setApproxManpower(e.target.value)}
                      placeholder="e.g. 20 masons & bar benders / To be discussed"
                      className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287]"
                    />
                  </div>
                </div>
              )}

              {/* Commercial Fields: Size/Quantity & Expected Start Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-quantity" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Approx. Project Size / Quantity (Optional)
                  </label>
                  <input
                    id="quote-quantity"
                    type="text"
                    value={approxQuantity}
                    onChange={(e) => setApproxQuantity(e.target.value)}
                    placeholder="e.g. built-up area, concrete quantity, manpower requirement or other relevant quantity"
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="quote-start-date" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                    Expected Start Date (Optional)
                  </label>
                  <input
                    id="quote-start-date"
                    type="date"
                    value={expectedStartDate}
                    onChange={(e) => setExpectedStartDate(e.target.value)}
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-[10px] bg-white text-[#3D352D] text-sm border border-[#D8CCBC] font-body focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all"
                  />
                </div>
              </div>

              {/* Detailed Requirement Message */}
              <div>
                <label htmlFor="quote-message" className="block text-xs font-heading font-semibold text-[#3D352D] mb-1 uppercase tracking-wider">
                  Detailed Requirement <span className="text-[#C96F1B]">*</span>
                </label>
                <textarea
                  ref={messageRef}
                  id="quote-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your site conditions, structural scope, concrete placement schedule or technical needs..."
                  aria-invalid={!!errors.message}
                  className={`w-full min-h-[120px] p-3.5 rounded-[10px] bg-white text-[#3D352D] text-sm border font-body placeholder-[#9D9287] focus:outline-hidden focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/30 transition-all resize-y ${
                    errors.message ? 'border-[#B42318]' : 'border-[#D8CCBC]'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-[#B42318] mt-1 font-body">{errors.message}</p>}
              </div>

              {/* Frontend File Upload Component UI */}
              <div className="p-5 rounded-[16px] bg-[#F5EEE5] border border-[#E8DDD0] space-y-3">
                <label htmlFor="quote-file" className="block text-xs font-heading font-semibold text-[#3D352D] uppercase tracking-wider">
                  Upload BOQ / Drawing / Requirement (Optional)
                </label>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <input
                    ref={fileInputRef}
                    id="quote-file"
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="sr-only"
                  />

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-5 py-2.5 rounded-[10px] bg-white border border-[#D8CCBC] hover:border-[#C96F1B] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xs transition-colors shrink-0"
                  >
                    <Upload className="w-4 h-4 text-[#C96F1B]" />
                    <span>{selectedFile ? 'Change Selected Document' : 'Choose File'}</span>
                  </button>

                  <span className="text-[11px] text-[#6B5E4E] font-body">
                    Formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG (Max 10 MB)
                  </span>
                </div>

                {/* Selected File Details */}
                {selectedFile && (
                  <div className="p-3 bg-white rounded-[10px] border border-[#A5D6A7] flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-[#3D352D] font-body truncate">
                      <FileText className="w-4 h-4 text-[#2E7D32] shrink-0" />
                      <span className="font-semibold truncate">{selectedFile.name}</span>
                      <span className="text-[#6B5E4E] text-[11px]">({formatFileSize(selectedFile.size)})</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-1 rounded-md text-[#6B5E4E] hover:text-[#B42318] hover:bg-red-50 transition-colors"
                      title="Remove file"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* File Validation Error */}
                {fileError && (
                  <p className="text-[11px] text-[#B42318] font-body flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-[#B42318]" />
                    <span>{fileError}</span>
                  </p>
                )}
              </div>

              {/* Navigation Actions */}
              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3.5 rounded-[12px] bg-white border border-[#D8CCBC] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-[#F5EEE5] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Step 1</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextStep2}
                  className="px-8 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5 transition-all"
                >
                  <span>Review Quotation</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: REVIEW & SEND */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 ref={stepTitleRef} tabIndex={-1} className="font-heading font-semibold text-xl sm:text-2xl text-[#3D352D] focus:outline-hidden">
                  Step 3: Review &amp; Send Quotation Request
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E4E] font-body">
                  Review your details before opening your email client to send the request.
                </p>
              </div>

              {isPrepared ? (
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#E8F4EA] border border-[#A5D6A7] text-[#2E7D32] space-y-4 font-body">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-[#2E7D32] shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-lg text-[#2E7D32]">Quotation Request Prepared</h4>
                      <p className="text-xs text-[#2E7D32]">
                        Your email application will open with the quotation details prepared. Review and send the email to complete your request.
                      </p>
                    </div>
                  </div>

                  {selectedFile && (
                    <div className="p-3.5 bg-amber-50 rounded-[10px] border border-amber-300 text-amber-900 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>
                        <strong>File Attachment Reminder:</strong> Please manually attach <strong>{selectedFile.name}</strong> to the email before clicking send.
                      </span>
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={mailtoUrl}
                      className="px-6 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                      <span>Open Email to Send Quotation Request</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsPrepared(false)}
                      className="px-6 py-3.5 rounded-[12px] bg-white border border-[#D8CCBC] text-[#3D352D] hover:bg-[#F5EEE5] font-heading text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Edit Quotation Details
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  
                  {/* File Attachment Guidance Warning if File Present */}
                  {selectedFile && (
                    <div className="p-4 rounded-[12px] bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-2 font-body">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <p>
                        <strong>Attachment Note:</strong> Your email application will open with the quotation text. Please attach <strong>{selectedFile.name}</strong> manually before sending.
                      </p>
                    </div>
                  )}

                  {/* Summary Grid */}
                  <div className="bg-[#F5EEE5] rounded-[18px] border border-[#E8DDD0] p-6 space-y-6 text-xs font-body">

                    {/* Contact & Project Info Group */}
                    <div className="space-y-3 pb-5 border-b border-[#E8DDD0]">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-[#C96F1B] uppercase tracking-wider text-[11px]">
                          Contact &amp; Location
                        </span>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-[#C96F1B] hover:underline font-heading font-semibold inline-flex items-center gap-1 text-[11px]"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#3D352D]">
                        <div><strong>Full Name:</strong> {fullName}</div>
                        {companyName && <div><strong>Company:</strong> {companyName}</div>}
                        {designation && <div><strong>Designation:</strong> {designation}</div>}
                        <div><strong>Mobile:</strong> {mobileNumber}</div>
                        <div><strong>Email:</strong> {email}</div>
                        {projectName && <div><strong>Project Name:</strong> {projectName}</div>}
                        <div className="sm:col-span-2"><strong>Project Location:</strong> {projectLocation}</div>
                      </div>
                    </div>

                    {/* Requirements Group */}
                    <div className="space-y-3 pb-5 border-b border-[#E8DDD0]">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-[#C96F1B] uppercase tracking-wider text-[11px]">
                          Service Requirements
                        </span>
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="text-[#C96F1B] hover:underline font-heading font-semibold inline-flex items-center gap-1 text-[11px]"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#3D352D]">
                        <div><strong>Required Service:</strong> {service}</div>
                        {service === 'Other' && otherServiceDesc && <div><strong>Description:</strong> {otherServiceDesc}</div>}
                        {approxQuantity && <div><strong>Approx. Quantity:</strong> {approxQuantity}</div>}
                        {expectedStartDate && <div><strong>Expected Start Date:</strong> {expectedStartDate}</div>}
                      </div>

                      {/* Boom Placer Details */}
                      {service === 'Boom Placer Rental' && (
                        <div className="p-3 bg-white rounded-[10px] border border-[#E8DDD0] space-y-1 text-[#3D352D]">
                          <div><strong>Boom Placer:</strong> Putzmeister M42-5</div>
                          {rentalStartDate && <div><strong>Rental Start Date:</strong> {rentalStartDate}</div>}
                          {rentalDuration && <div><strong>Expected Duration:</strong> {rentalDuration}</div>}
                          <div><strong>Shift Requirement:</strong> {shiftRequirement}</div>
                        </div>
                      )}

                      {/* Labour Details */}
                      {service === 'Labour Contract' && approxManpower && (
                        <div className="p-3 bg-white rounded-[10px] border border-[#E8DDD0] text-[#3D352D]">
                          <strong>Approx. Manpower Requirement:</strong> {approxManpower}
                        </div>
                      )}

                      <div className="space-y-1 pt-1">
                        <strong>Detailed Requirement:</strong>
                        <p className="p-3 bg-white rounded-[10px] border border-[#E8DDD0] text-[#3D352D] leading-relaxed whitespace-pre-line">
                          {message}
                        </p>
                      </div>
                    </div>

                    {/* Selected File Summary */}
                    {selectedFile && (
                      <div className="space-y-1">
                        <span className="font-heading font-bold text-[#C96F1B] uppercase tracking-wider text-[11px] block">
                          Document Selected
                        </span>
                        <div className="p-3 bg-white rounded-[10px] border border-[#E8DDD0] flex items-center gap-2 text-[#3D352D]">
                          <FileText className="w-4 h-4 text-[#C96F1B]" />
                          <span>{selectedFile.name} ({formatFileSize(selectedFile.size)})</span>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-[12px] bg-white border border-[#D8CCBC] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#F5EEE5] transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Step 2</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendQuote}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(201,111,27,0.25)] hover:-translate-y-0.5 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                      <span>Open Email to Request Quotation</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#9D9287] font-body text-center">
                    Your email application will open with the quotation details prepared. Review and send the email to complete your request.
                  </p>

                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
