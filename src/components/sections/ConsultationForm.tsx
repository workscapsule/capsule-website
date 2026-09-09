import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { LeadFormData } from '../../types';
import { companyConfig } from '../../config/company';
import confetti from 'canvas-confetti';
import { CheckCircle2, AlertCircle, Loader2, Phone, Calendar, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Construction',
    consultationType: 'Free Consultation',
    location: '',
    budget: '15L - 30L',
    preferredContact: 'WhatsApp',
    description: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof LeadFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    
    // Indian phone number regex
    const phoneClean = formData.phone.replace(/\D/g, '');
    if (!phoneClean || phoneClean.length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.location.trim()) {
      errs.location = 'Please mention your Bengaluru location (e.g., Hebbal, Indiranagar)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable form processing and storage
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('capsule_leads') || '[]');
        stored.push({
          ...formData,
          submittedAt: new Date().toISOString(),
          id: `lead_${Date.now()}`
        });
        localStorage.setItem('capsule_leads', JSON.stringify(stored));
      } catch (e) {
        console.warn('Storage disabled', e);
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B86D43', '#0A0A0A', '#F7F3ED', '#C59A6F']
        });
      } catch (err) {
        // Safe fallback
      }
    }, 1000);
  };

  return (
    <section id="consultation" className="py-20 sm:py-28 bg-brand-ivory relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Form Header */}
        <SectionHeader
          label="FREE CONSULTATION & FREE SITE VISIT"
          title="LET'S BUILD YOUR"
          highlight="VISION TOGETHER."
          subtitle="Tell us about your space. Our senior project engineers will review your requirements, schedule a complimentary site inspection, and prepare a preliminary concept."
          centered
        />

        {/* Lead Form Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-brand-border relative">
          
          {isSuccess ? (
            <div className="py-12 text-center space-y-4 animate-reveal">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-brand-black">
                REQUEST RECEIVED
              </h3>
              <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your request for a <strong>{formData.consultationType}</strong> in <strong>{formData.location}</strong> has been confirmed.
              </p>
              <p className="text-xs text-brand-copper font-medium">
                Our team will contact you shortly via {formData.preferredContact}.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(`Hi Capsule Company, I just submitted a consultation request for ${formData.fullName} (${formData.projectType} in ${formData.location}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] text-white text-xs font-bold tracking-widest uppercase rounded-full shadow hover:bg-[#1ebd59] transition-all"
                >
                  CHAT DIRECTLY ON WHATSAPP
                </a>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      projectType: 'Construction',
                      consultationType: 'Free Consultation',
                      location: '',
                      budget: '15L - 30L',
                      preferredContact: 'WhatsApp',
                      description: '',
                    });
                  }}
                  className="px-6 py-3 bg-brand-cream text-brand-black text-xs font-bold tracking-widest uppercase rounded-full hover:bg-brand-ivory border border-brand-border transition-all"
                >
                  SUBMIT ANOTHER REQUEST
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Consultation Type Selector Toggles */}
              <div className="flex flex-col sm:flex-row items-center gap-3 p-1.5 rounded-xl bg-brand-cream/70 border border-brand-border">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, consultationType: 'Free Consultation' })}
                  className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold tracking-wider uppercase transition-all ${
                    formData.consultationType === 'Free Consultation'
                      ? 'bg-brand-black text-white shadow-xs'
                      : 'text-brand-muted hover:text-brand-black'
                  }`}
                >
                  REQUEST FREE CONSULTATION
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, consultationType: 'Free Site Visit' })}
                  className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold tracking-wider uppercase transition-all ${
                    formData.consultationType === 'Free Site Visit'
                      ? 'bg-brand-copper text-white shadow-xs'
                      : 'text-brand-muted hover:text-brand-black'
                  }`}
                >
                  REQUEST FREE SITE VISIT
                </button>
              </div>

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5">
                    Full Name <span className="text-brand-copper">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-brand-border focus:border-brand-copper bg-brand-cream/30'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5">
                    Phone Number <span className="text-brand-copper">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-brand-border focus:border-brand-copper bg-brand-cream/30'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Bengaluru Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com (optional)"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-brand-border focus:border-brand-copper bg-brand-cream/30'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5">
                    Project Location in Bengaluru <span className="text-brand-copper">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g., Hebbal, Yelahanka, Indiranagar"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.location ? 'border-red-500 bg-red-50/20' : 'border-brand-border focus:border-brand-copper bg-brand-cream/30'
                    }`}
                  />
                  {errors.location && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Project Type & Approximate Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-copper bg-brand-cream/30 text-sm focus:outline-none"
                  >
                    <option value="Construction">Construction & Civil Works</option>
                    <option value="Interior">Turnkey Interior Design & Execution</option>
                    <option value="Modular Kitchen">Customized Modular Kitchen</option>
                    <option value="Carpentry">Carpentry & Custom Wardrobes</option>
                    <option value="Exterior">Exterior Facade & Elevations</option>
                    <option value="Renovation">Complete Home / Flat Renovation</option>
                    <option value="Other">Other Custom Space Requirement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5">
                    Approximate Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-copper bg-brand-cream/30 text-sm focus:outline-none"
                  >
                    <option value="Under 10L">Under ₹10 Lakhs</option>
                    <option value="10L - 25L">₹10 Lakhs - ₹25 Lakhs</option>
                    <option value="25L - 50L">₹25 Lakhs - ₹50 Lakhs</option>
                    <option value="50L - 1 Cr">₹50 Lakhs - ₹1 Crore</option>
                    <option value="Above 1 Cr">Above ₹1 Crore</option>
                    <option value="To Be Discussed">Prefer to discuss on site</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Preferred Contact Method */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex flex-wrap gap-4">
                  {(['WhatsApp', 'Phone', 'Email'] as const).map((method) => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer text-xs font-medium text-brand-black">
                      <input
                        type="radio"
                        name="preferredContact"
                        checked={formData.preferredContact === method}
                        onChange={() => setFormData({ ...formData, preferredContact: method })}
                        className="accent-brand-copper w-4 h-4"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 5: Project Description */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5">
                  Project Description or Specific Needs
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="e.g., 3BHK villa construction, modular kitchen with island, 20-year-old home renovation..."
                  className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-copper bg-brand-cream/30 text-sm focus:outline-none resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-black hover:bg-brand-copper text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>PROCESSING...</span>
                    </>
                  ) : (
                    <>
                      <span>{formData.consultationType === 'Free Site Visit' ? 'REQUEST FREE SITE VISIT' : 'REQUEST FREE CONSULTATION'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-xs text-brand-muted">
                  <ShieldCheck className="w-4 h-4 text-brand-copper" />
                  <span>No obligation • 100% Free consultation</span>
                </div>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
