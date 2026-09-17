import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck, Sparkles, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EnquiryFormData, EnquirySource } from '../../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSource?: EnquirySource;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialSource = 'Free Consultation',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    altMobileNumber: '',
    email: '',
    locationAddress: '',
    source: initialSource,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Sync source when initialSource changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        source: initialSource,
      }));
      setErrors({});
      setIsSuccess(false);
      setApiError(null);
    }
  }, [isOpen, initialSource]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    const cleanMobile = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      newErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
    }

    const cleanAlt = formData.altMobileNumber.replace(/\D/g, '');
    if (!cleanAlt || cleanAlt.length < 10) {
      newErrors.altMobileNumber = 'Enter a valid alternative 10-digit number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.locationAddress.trim()) {
      newErrors.locationAddress = 'Location / Address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

      // Trigger celebration confetti
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
      source: initialSource,
    });
    setErrors({});
    setIsSuccess(false);
    setApiError(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-brand-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-brand-border/80 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Accent Stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-black via-brand-copper to-brand-black" />

        {/* Modal Header */}
        <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-brand-border/60 bg-brand-cream/30">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-extrabold uppercase tracking-wider bg-brand-copper/15 text-brand-copper border border-brand-copper/30">
                <Sparkles className="w-3 h-3" /> {formData.source}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-brand-black uppercase tracking-tight">
              CAPSULE ENQUIRY FORM
            </h2>
            <p className="text-xs text-brand-muted mt-0.5">
              Please share your details below. All 6 fields are mandatory.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-brand-muted hover:text-brand-black hover:bg-brand-cream transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {isSuccess ? (
            /* Success State */
            <div className="py-6 sm:py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-brand-black uppercase tracking-tight">
                ENQUIRY SUBMITTED!
              </h3>

              <div className="p-4 rounded-xl bg-brand-cream/60 border border-brand-copper/30 max-w-md mx-auto">
                <p className="text-sm font-semibold text-brand-black leading-relaxed">
                  Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.
                </p>
              </div>

              <div className="text-xs text-brand-muted max-w-sm mx-auto space-y-1 pt-1">
                <p>
                  A notification has been sent directly to the <strong>Capsule Company</strong> team.
                </p>
                <p className="text-brand-copper font-medium">
                  We will reach out to <strong>{formData.mobileNumber}</strong> or <strong>{formData.email}</strong>.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-7 py-2.5 rounded-xl bg-brand-black text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-copper transition-all shadow-md"
                >
                  DONE / CLOSE
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-cream text-brand-black text-xs font-bold uppercase tracking-wider hover:bg-brand-ivory border border-brand-border transition-all"
                >
                  SUBMIT ANOTHER
                </button>
              </div>
            </div>
          ) : (
            /* 6-Field Form */
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {apiError && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{apiError}</span>
                </div>
              )}

              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black mb-1">
                    First Name <span className="text-brand-copper">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Enter first name"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.firstName
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-brand-border focus:border-brand-copper bg-brand-cream/20'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-[10.5px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black mb-1">
                    Last Name <span className="text-brand-copper">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Enter last name"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.lastName
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-brand-border focus:border-brand-copper bg-brand-cream/20'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-[10.5px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Mobile Number & Alternative Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black mb-1">
                    Mobile Number <span className="text-brand-copper">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.mobileNumber
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-brand-border focus:border-brand-copper bg-brand-cream/20'
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p className="text-[10.5px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.mobileNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black mb-1">
                    Alternative Mobile Number <span className="text-brand-copper">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.altMobileNumber}
                    onChange={(e) => setFormData({ ...formData, altMobileNumber: e.target.value })}
                    placeholder="+91 91234 56789"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.altMobileNumber
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-brand-border focus:border-brand-copper bg-brand-cream/20'
                    }`}
                  />
                  {errors.altMobileNumber && (
                    <p className="text-[10.5px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.altMobileNumber}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Email Address */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black mb-1">
                  Email Address <span className="text-brand-copper">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.name@example.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-500 bg-red-50/30'
                      : 'border-brand-border focus:border-brand-copper bg-brand-cream/20'
                  }`}
                />
                {errors.email && (
                  <p className="text-[10.5px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Row 4: Location / Address */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-black mb-1">
                  Location / Address <span className="text-brand-copper">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.locationAddress}
                  onChange={(e) => setFormData({ ...formData, locationAddress: e.target.value })}
                  placeholder="e.g., #42, 3rd Cross, Indiranagar / Hebbal, Bengaluru"
                  className={`w-full px-3.5 py-2 rounded-xl border text-sm focus:outline-none transition-colors resize-none ${
                    errors.locationAddress
                      ? 'border-red-500 bg-red-50/30'
                      : 'border-brand-border focus:border-brand-copper bg-brand-cream/20'
                  }`}
                />
                {errors.locationAddress && (
                  <p className="text-[10.5px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.locationAddress}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-black text-white text-xs font-extrabold uppercase tracking-widest hover:bg-brand-copper transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed group cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-brand-copper" />
                      <span>SUBMITTING ENQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT ENQUIRY</span>
                      <Send className="w-3.5 h-3.5 text-brand-copper group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-brand-muted mt-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-copper" />
                  <span>Sent directly &amp; securely to Capsule Company official team.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
