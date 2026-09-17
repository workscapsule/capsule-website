import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { EnquiryFormData } from '../../types';
import confetti from 'canvas-confetti';
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck } from 'lucide-react';

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    altMobileNumber: '',
    email: '',
    locationAddress: '',
    source: 'Free Consultation',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.firstName.trim()) errs.firstName = 'First Name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last Name is required';

    const cleanMobile = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      errs.mobileNumber = 'Enter a valid 10-digit mobile number';
    }

    const cleanAlt = formData.altMobileNumber.replace(/\D/g, '');
    if (!cleanAlt || cleanAlt.length < 10) {
      errs.altMobileNumber = 'Enter a valid alternative 10-digit number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address';
    }

    if (!formData.locationAddress.trim()) {
      errs.locationAddress = 'Location / Address is required';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit enquiry. Please try again.');
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#B86D43', '#0A0A0A', '#F7F3ED', '#C59A6F'],
        });
      } catch (_) {}
    } catch (err: any) {
      setIsSubmitting(false);
      setApiError(err.message || 'Something went wrong while connecting to our email service. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      mobileNumber: '',
      altMobileNumber: '',
      email: '',
      locationAddress: '',
      source: 'Free Consultation',
    });
    setErrors({});
    setIsSuccess(false);
    setApiError(null);
  };

  return (
    <section id="consultation" className="py-16 sm:py-24 bg-brand-ivory relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Form Header */}
        <SectionHeader
          label="FREE CONSULTATION & ESTIMATE"
          title="LET'S BUILD YOUR"
          highlight="VISION TOGETHER."
          subtitle="Tell us about your space. Our senior project team will review your requirements and schedule a complimentary site inspection."
          centered
        />

        {/* Lead Form Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-brand-border relative mt-8">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4 animate-reveal">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-brand-black">
                ENQUIRY SUBMITTED!
              </h3>

              <div className="p-4 rounded-xl bg-brand-cream/60 border border-brand-copper/30 max-w-md mx-auto">
                <p className="text-sm font-semibold text-brand-black leading-relaxed">
                  Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.
                </p>
              </div>

              <p className="text-xs text-brand-muted max-w-md mx-auto leading-relaxed pt-1">
                Your enquiry details have been delivered directly to the <strong>Capsule Company</strong> official team. We will reach out to <strong>{formData.mobileNumber}</strong> or <strong>{formData.email}</strong> shortly.
              </p>

              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-brand-black text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-brand-copper transition-all shadow-md"
                >
                  SUBMIT ANOTHER ENQUIRY
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {apiError && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{apiError}</span>
                </div>
              )}

              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5">
                    First Name <span className="text-brand-copper">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Enter first name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.firstName
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-brand-border focus:border-brand-copper bg-brand-cream/30'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5">
                    Last Name <span className="text-brand-copper">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Enter last name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.lastName
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-brand-border focus:border-brand-copper bg-brand-cream/30'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Mobile Number & Alternative Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5">
                    Mobile Number <span className="text-brand-copper">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.mobileNumber
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-brand-border focus:border-brand-copper bg-brand-cream/30'
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.mobileNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5">
                    Alternative Mobile Number <span className="text-brand-copper">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.altMobileNumber}
                    onChange={(e) => setFormData({ ...formData, altMobileNumber: e.target.value })}
                    placeholder="+91 91234 56789"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.altMobileNumber
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-brand-border focus:border-brand-copper bg-brand-cream/30'
                    }`}
                  />
                  {errors.altMobileNumber && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.altMobileNumber}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5">
                  Email Address <span className="text-brand-copper">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-500 bg-red-50/20'
                      : 'border-brand-border focus:border-brand-copper bg-brand-cream/30'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Row 4: Location / Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5">
                  Location / Address <span className="text-brand-copper">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.locationAddress}
                  onChange={(e) => setFormData({ ...formData, locationAddress: e.target.value })}
                  placeholder="e.g., #42, 3rd Cross, Indiranagar / Hebbal, Bengaluru"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors resize-none ${
                    errors.locationAddress
                      ? 'border-red-500 bg-red-50/20'
                      : 'border-brand-border focus:border-brand-copper bg-brand-cream/30'
                  }`}
                />
                {errors.locationAddress && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.locationAddress}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-brand-black text-white text-xs font-extrabold uppercase tracking-widest hover:bg-brand-copper transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed group cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-brand-copper" />
                      <span>SUBMITTING ENQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT ENQUIRY</span>
                      <Send className="w-4 h-4 text-brand-copper group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-brand-muted mt-3">
                  <ShieldCheck className="w-4 h-4 text-brand-copper" />
                  <span>Sent directly to Capsule Company official email inbox. Zero spam guaranteed.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
