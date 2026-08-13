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

  // Final Submission Handler
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
    <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* TERMINAL OPERATIONAL TOOL STAGE HEADER */}
        <div className="border-b-2 border-[#3D352D] pb-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-specs text-xs text-[#C96F1B] font-extrabold uppercase tracking-widest">
              TERMINAL OPERATIONAL QUOTATION TOOL
            </span>
            <span className="font-specs text-xs font-bold text-[#3D352D] bg-[#F5EEE5] px-3 py-1 rounded-full border border-[#E8DDD0]">
              STAGE 0{step} / 03 ACTIVE
            </span>
          </div>

          {/* Large Numbered Section Tabs */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <button
              type="button"
              onClick={() => { if (step > 1) setStep(1); }}
              className={`text-left py-3 border-t-4 transition-all cursor-pointer ${
                step === 1 ? 'border-[#C96F1B] text-[#3D352D]' : 'border-[#E8DDD0] text-[#7E7267] hover:text-[#3D352D]'
              }`}
            >
              <span className="font-specs font-bold text-xs block text-[#C96F1B]">01 REQUIREMENT</span>
              <span className="font-heading font-bold text-xs uppercase tracking-wider block">Contact &amp; Site</span>
            </button>

            <button
              type="button"
              onClick={() => { if (step === 3) setStep(2); }}
              className={`text-left py-3 border-t-4 transition-all cursor-pointer ${
                step === 2 ? 'border-[#C96F1B] text-[#3D352D]' : 'border-[#E8DDD0] text-[#7E7267] hover:text-[#3D352D]'
              }`}
            >
              <span className="font-specs font-bold text-xs block text-[#C96F1B]">02 SCOPE</span>
              <span className="font-heading font-bold text-xs uppercase tracking-wider block">Service Specifications</span>
            </button>

            <div
              className={`text-left py-3 border-t-4 transition-all ${
                step === 3 ? 'border-[#C96F1B] text-[#3D352D]' : 'border-[#E8DDD0] text-[#7E7267]'
              }`}
            >
              <span className="font-specs font-bold text-xs block text-[#C96F1B]">03 REVIEW</span>
              <span className="font-heading font-bold text-xs uppercase tracking-wider block">Transmit Brief</span>
            </div>
          </div>
        </div>

        {/* STEP 1: CONTACT & PROJECT LOCATION */}
        {step === 1 && (
          <div className="space-y-8">
            <div className="space-y-1 border-b border-[#E8DDD0] pb-4">
              <h3 ref={stepTitleRef} tabIndex={-1} className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D] focus:outline-hidden uppercase">
                01. CONTACT DETAILS &amp; SITE LOCATION
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body">
                Provide client contact information and exact site location coordinates.
              </p>
            </div>

            {/* Error Summary */}
            {Object.keys(errors).length > 0 && (
              <div role="alert" className="p-4 rounded-xl bg-[#FDECEC] border border-[#B42318] text-xs text-[#B42318] flex items-start gap-3 font-body">
                <AlertCircle className="w-5 h-5 text-[#B42318] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold text-sm">Please correct the following fields:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {Object.values(errors).map((err, idx) => <li key={idx}>{err}</li>)}
                  </ul>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label htmlFor="quote-fullname" className="block text-xs font-heading font-bold text-[#3D352D] uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  ref={fullNameRef}
                  id="quote-fullname"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Anand Deshmukh"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E8DDD0] bg-[#F5EEE5]/40 focus:bg-white focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/20 text-sm text-[#3D352D] outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="quote-company" className="block text-xs font-heading font-bold text-[#3D352D] uppercase tracking-wider">
                  Company Name (Optional)
                </label>
                <input
                  id="quote-company"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Deshmukh Developers Ltd"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E8DDD0] bg-[#F5EEE5]/40 focus:bg-white focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/20 text-sm text-[#3D352D] outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="quote-mobile" className="block text-xs font-heading font-bold text-[#3D352D] uppercase tracking-wider">
                  Mobile Number *
                </label>
                <input
                  ref={mobileRef}
                  id="quote-mobile"
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="+91 98337 06666"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E8DDD0] bg-[#F5EEE5]/40 focus:bg-white focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/20 text-sm text-[#3D352D] outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="quote-email" className="block text-xs font-heading font-bold text-[#3D352D] uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  ref={emailRef}
                  id="quote-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="anand@deshmukhdev.com"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E8DDD0] bg-[#F5EEE5]/40 focus:bg-white focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/20 text-sm text-[#3D352D] outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="quote-location" className="block text-xs font-heading font-bold text-[#3D352D] uppercase tracking-wider">
                Project Site Location *
              </label>
              <input
                ref={locationRef}
                id="quote-location"
                type="text"
                value={projectLocation}
                onChange={(e) => setProjectLocation(e.target.value)}
                placeholder="e.g. Kashinath Dhuru Marg, Mumbai – 400028"
                className="w-full px-4 py-3.5 rounded-xl border border-[#E8DDD0] bg-[#F5EEE5]/40 focus:bg-white focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/20 text-sm text-[#3D352D] outline-none transition-all"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleNextStep1}
                className="px-8 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Proceed to 02. Scope</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SERVICE REQUIREMENTS & COMMERCIAL DETAILS */}
        {step === 2 && (
          <div className="space-y-8">
            <div className="space-y-1 border-b border-[#E8DDD0] pb-4">
              <h3 ref={stepTitleRef} tabIndex={-1} className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D] focus:outline-hidden uppercase">
                02. SERVICE CATEGORY &amp; SCOPE SPECIFICATIONS
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body">
                Select your required construction service and enter project scope parameters.
              </p>
            </div>

            {/* Error Summary */}
            {Object.keys(errors).length > 0 && (
              <div role="alert" className="p-4 rounded-xl bg-[#FDECEC] border border-[#B42318] text-xs text-[#B42318] flex items-start gap-3 font-body">
                <AlertCircle className="w-5 h-5 text-[#B42318] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold text-sm">Please correct the following issues:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {Object.values(errors).map((err, idx) => <li key={idx}>{err}</li>)}
                  </ul>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="quote-service" className="block text-xs font-heading font-bold text-[#3D352D] uppercase tracking-wider">
                Required Service *
              </label>
              <select
                ref={serviceRef}
                id="quote-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-[#E8DDD0] bg-[#F5EEE5]/40 focus:bg-white focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/20 text-sm text-[#3D352D] outline-none transition-all cursor-pointer font-body"
              >
                <option value="RCC Work">RCC Work</option>
                <option value="Civil Work">Civil Work</option>
                <option value="Brickwork / Blockwork">Brickwork / Blockwork</option>
                <option value="Labour Contract">Labour Contract</option>
                <option value="Boom Placer Rental">Boom Placer Rental</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Detailed Requirement Message */}
            <div className="space-y-2">
              <label htmlFor="quote-message" className="block text-xs font-heading font-bold text-[#3D352D] uppercase tracking-wider">
                Detailed Project Description *
              </label>
              <textarea
                ref={messageRef}
                id="quote-message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe structural scope, concrete volume, timeline, or site access parameters..."
                className="w-full px-4 py-3.5 rounded-xl border border-[#E8DDD0] bg-[#F5EEE5]/40 focus:bg-white focus:border-[#C96F1B] focus:ring-2 focus:ring-[#C96F1B]/20 text-sm text-[#3D352D] outline-none transition-all resize-none font-body"
              />
            </div>

            {/* Navigation Actions */}
            <div className="pt-4 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3.5 rounded-xl bg-white border border-[#E8DDD0] text-[#3D352D] font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#F5EEE5] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to 01. Contact</span>
              </button>

              <button
                type="button"
                onClick={handleNextStep2}
                className="px-8 py-3.5 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Proceed to 03. Review Brief</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: REVIEW BRIEF & TRANSMIT */}
        {step === 3 && (
          <div className="space-y-8">
            <div className="space-y-1 border-b border-[#E8DDD0] pb-4">
              <h3 ref={stepTitleRef} tabIndex={-1} className="font-heading font-bold text-2xl sm:text-3xl text-[#3D352D] focus:outline-hidden uppercase">
                03. REVIEW PROJECT BRIEF &amp; TRANSMIT
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body">
                Review your complete project brief details before opening your email client to transmit the request.
              </p>
            </div>

            <div className="bg-[#F5EEE5] rounded-3xl border border-[#E8DDD0] p-6 sm:p-8 space-y-6 text-sm font-body">
              <div className="space-y-2 border-b border-[#E8DDD0] pb-4">
                <span className="font-specs font-bold text-xs text-[#C96F1B] uppercase tracking-wider block">
                  CLIENT DETAILS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#3D352D]">
                  <div><strong>Name:</strong> {fullName}</div>
                  <div><strong>Mobile:</strong> {mobileNumber}</div>
                  <div><strong>Email:</strong> {email}</div>
                  <div><strong>Location:</strong> {projectLocation}</div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-specs font-bold text-xs text-[#C96F1B] uppercase tracking-wider block">
                  SERVICE SCOPE
                </span>
                <div className="space-y-1 text-[#3D352D]">
                  <div><strong>Required Service:</strong> {service}</div>
                  <div><strong>Description:</strong> {message}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="button"
                onClick={handleBack}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-[#E8DDD0] text-[#3D352D] font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#F5EEE5] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to 02. Scope</span>
              </button>

              <button
                type="button"
                onClick={handleSendQuote}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 text-white" />
                <span>Open Email to Transmit Brief</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
