import React, { useRef, useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Truck, ShieldCheck, CheckCircle2, Send } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { companyConfig } from '../../config/companyConfig';

export const ContactScrollingSideCards: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number>(0);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 24 });

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      const idx = Math.min(Math.floor(latest * 4), 3);
      if (idx >= 0 && idx < 4) {
        setActiveCard(idx);
      }
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;
    setSubmitted(true);
  };

  const sideCards = [
    {
      id: 0,
      number: '01',
      badge: 'PHONE & EMAIL',
      title: 'Direct Contact',
      detail1: `Primary: ${companyConfig.phone}`,
      detail2: `Secondary: ${companyConfig.secondaryPhone}`,
      detail3: `Email: ${companyConfig.email}`,
      icon: Phone
    },
    {
      id: 1,
      number: '02',
      badge: 'OPERATING BASE',
      title: 'Mumbai Office',
      detail1: companyConfig.operatingOffice,
      detail2: 'Servicing Mumbai Metropolitan Region (MMR)',
      detail3: 'Mon–Sat: 9:00 AM – 7:00 PM',
      icon: MapPin
    },
    {
      id: 2,
      number: '03',
      badge: 'REGISTERED OFFICE',
      title: 'Jalgaon Office',
      detail1: companyConfig.registeredOffice,
      detail2: 'Supporting North Maharashtra infrastructure',
      detail3: `GSTIN: ${companyConfig.gstin}`,
      icon: MapPin
    },
    {
      id: 3,
      number: '04',
      badge: 'MACHINERY DISPATCH',
      title: 'Equipment Enquiry',
      detail1: 'Putzmeister M42-5 Concrete Boom Placer',
      detail2: '42m Vertical Reach · 90 m³ Capacity',
      detail3: 'Operator + Helper included with monthly rental',
      icon: Truck
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 bg-[#FFFFFF] text-[#3D352D] border-b border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EEE5] text-[#C96F1B] border border-[#E8DDD0] font-heading text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#C96F1B]" />
            <span>EXACT CONTACT SCROLLING CARDS</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#3D352D] tracking-tight">
            Send an Enquiry or Visit Our Offices
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E4E] font-body leading-relaxed">
            Fill out the project enquiry form on the left while reviewing our coordinates on the right.
          </p>
        </div>

        {/* SPLIT LAYOUT WITH SCROLLING STICKY SIDE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: LONG CONTACT FORM */}
          <div className="lg:col-span-7 bg-[#F5EEE5] p-8 sm:p-10 rounded-3xl border border-[#E8DDD0] shadow-md space-y-6">
            <div className="border-b border-[#E8DDD0] pb-4 space-y-1">
              <span className="font-specs text-xs text-[#C96F1B] font-extrabold uppercase tracking-widest block">
                PROJECT ENQUIRY FORM
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#3D352D]">
                Get in Touch with Chitrani Construction
              </h3>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 font-body text-xs sm:text-sm">
                <div>
                  <label className="block font-heading font-semibold text-[#3D352D] uppercase tracking-wider mb-2">
                    Full Name <span className="text-[#C96F1B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full p-3.5 rounded-xl bg-white border border-[#E8DDD0] text-[#3D352D] focus:outline-none focus:ring-2 focus:ring-[#C96F1B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-semibold text-[#3D352D] uppercase tracking-wider mb-2">
                      Mobile Number <span className="text-[#C96F1B]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 9833706666"
                      className="w-full p-3.5 rounded-xl bg-white border border-[#E8DDD0] text-[#3D352D] focus:outline-none focus:ring-2 focus:ring-[#C96F1B]"
                    />
                  </div>

                  <div>
                    <label className="block font-heading font-semibold text-[#3D352D] uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rajesh@company.com"
                      className="w-full p-3.5 rounded-xl bg-white border border-[#E8DDD0] text-[#3D352D] focus:outline-none focus:ring-2 focus:ring-[#C96F1B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-semibold text-[#3D352D] uppercase tracking-wider mb-2">
                    Project Requirement Details <span className="text-[#C96F1B]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your site location, RCC civil work scope, or Putzmeister M42-5 equipment rental period..."
                    className="w-full p-3.5 rounded-xl bg-white border border-[#E8DDD0] text-[#3D352D] focus:outline-none focus:ring-2 focus:ring-[#C96F1B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            ) : (
              <div className="p-6 bg-white rounded-2xl border border-green-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                <h4 className="font-heading font-bold text-lg text-[#3D352D]">Enquiry Received</h4>
                <p className="text-xs text-[#6B5E4E] font-body">
                  Thank you. Our site engineering team will review your requirement and reach out shortly.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: STICKY SCROLLING CARDS (Desktop sticky top-36 / Mobile standard stack) */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-4">
            <span className="font-specs text-xs text-[#C96F1B] font-extrabold uppercase tracking-widest block mb-2">
              CONTACT COORDINATES &amp; OFFICES
            </span>

            {sideCards.map((card) => {
              const isActive = activeCard === card.id;
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    scale: isActive ? 1.02 : 0.98,
                    opacity: isActive ? 1 : 0.85,
                    borderColor: isActive ? '#C96F1B' : '#E8DDD0'
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onClick={() => setActiveCard(card.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer space-y-3 shadow-xs ${
                    isActive
                      ? 'bg-white border-[#C96F1B] shadow-md ring-2 ring-[#C96F1B]/30'
                      : 'bg-[#F5EEE5] border-[#E8DDD0] hover:bg-white hover:border-[#C96F1B]/40'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-[#E8DDD0] pb-2">
                    <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#3D352D]">
                      <Icon className="w-4 h-4 text-[#C96F1B]" />
                      <span>{card.title}</span>
                    </div>
                    <span className="font-specs text-[11px] font-bold text-[#C96F1B]">
                      {card.number}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs font-body text-[#6B5E4E]">
                    <p className="font-semibold text-[#3D352D]">{card.detail1}</p>
                    <p>{card.detail2}</p>
                    <p className="text-[11px] text-[#C96F1B] font-semibold">{card.detail3}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
