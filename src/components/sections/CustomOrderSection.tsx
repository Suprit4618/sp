import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, Clock, Copy, Check } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { InstagramIcon } from '../ui/InstagramIcon';

export interface CustomOrderSectionProps {
  prefilledCreationTitle?: string;
}

interface FormState {
  name: string;
  contactMethod: 'email' | 'instagram' | 'phone';
  contactValue: string;
  itemType: string;
  description: string;
  colors: string;
  targetDate: string;
  budgetRange: string;
  consent: boolean;
}

const INITIAL_FORM: FormState = {
  name: '',
  contactMethod: 'email',
  contactValue: '',
  itemType: 'clothing-redesign',
  description: '',
  colors: '',
  targetDate: '',
  budgetRange: '',
  consent: false,
};

export const CustomOrderSection: React.FC<CustomOrderSectionProps> = ({
  prefilledCreationTitle,
}) => {
  const [formData, setFormData] = useState<FormState>(() => ({
    ...INITIAL_FORM,
    description: prefilledCreationTitle
      ? `Hello! I would love to enquire about a custom piece inspired by "${prefilledCreationTitle}".`
      : '',
  }));

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.contactValue.trim()) {
      newErrors.contactValue = 'Please provide your contact handle or address.';
    } else if (
      formData.contactMethod === 'email' &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactValue)
    ) {
      newErrors.contactValue = 'Please enter a valid email address.';
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      newErrors.description = 'Please describe your idea in a few sentences (at least 10 characters).';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm that you agree to be contacted regarding this enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      // Simulate submission latency
      await new Promise((resolve) => setTimeout(resolve, 800));

      // In prototype development mode, store locally in session so user inputs are preserved
      try {
        const existing = JSON.parse(sessionStorage.getItem('pink_lunna_enquiries') || '[]');
        existing.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        sessionStorage.setItem('pink_lunna_enquiries', JSON.stringify(existing));
      } catch {
        // Storage fallback
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleCopySummary = () => {
    const summary = `Pink Lunna Custom Enquiry:\nName: ${formData.name}\nContact: ${formData.contactValue}\nItem: ${formData.itemType}\nIdea: ${formData.description}\nColors: ${formData.colors || 'Not specified'}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setStatus('idle');
  };

  return (
    <section id="custom-order" className="py-24 bg-transparent border-t border-[#DEC5A3]/40" aria-labelledby="custom-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B8442D] block">
            Bespoke Commissions
          </span>
          <h2 id="custom-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#301923]">
            Have something special in mind?
          </h2>
          <p className="text-sm text-[#533630] leading-relaxed font-sans">
            Every commission begins with a conversation about colors, meaningful botanicals, or personalized initials. Describe your idea below.
          </p>
        </div>

        {/* Form Container */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#F6EFE5]/95 backdrop-blur-xs border border-[#DEC5A3] shadow-soft-thread">
          {/* Transparent Prototype Notice */}
          <div className="mb-8 p-4 rounded-xl bg-[#DEC5A3]/25 border border-[#DEC5A3]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#301923]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B8442D] shrink-0" />
              <span>
                <strong>Atelier Commission Studio:</strong> For direct live enquiries right now, message{' '}
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium text-[#B8442D]"
                >
                  {SITE_CONFIG.instagramHandle}
                </a>{' '}
                on Instagram.
              </span>
            </div>
          </div>

          {status === 'success' ? (
            <div className="py-8 text-center space-y-6">
              <div className="w-14 h-14 rounded-full bg-[#DEC5A3]/30 text-[#B8442D] flex items-center justify-center mx-auto border border-[#DEC5A3]">
                <CheckCircle2 className="w-7 h-7 text-[#B8442D]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-3xl text-[#301923]">Enquiry Details Received</h3>
                <p className="text-sm text-[#533630] max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>! Your enquiry has been prepared. Because automated email delivery is not connected to a server backend, please send a quick message to our Instagram to ensure the artist receives your request directly. You can also copy your enquiry summary below.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-medium bg-[#DEC5A3]/30 text-[#301923] hover:bg-[#DEC5A3]/60 transition-colors border border-[#DEC5A3]"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Enquiry Summary'}</span>
                </button>

                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium bg-[#B8442D] text-white hover:bg-[#A33B26] shadow-soft-thread"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Open Instagram ({SITE_CONFIG.instagramHandle})</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-3 rounded-full text-xs font-medium text-[#533630] hover:text-[#301923]"
                >
                  Start Over
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>We encountered an issue recording your request. Please try again or reach out directly on Instagram.</p>
                </div>
              )}

              {/* Row 1: Name and Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-medium text-[#301923] mb-1.5">
                    Your Name <span className="text-[#B8442D]">*</span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#F6EFE5] border ${
                      errors.name ? 'border-red-400' : 'border-[#DEC5A3] focus:border-[#B8442D]'
                    } text-sm text-[#301923] focus:outline-none transition-colors`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-val" className="block text-xs font-medium text-[#301923] mb-1.5">
                    Contact Method (Email or Instagram) <span className="text-[#B8442D]">*</span>
                  </label>
                  <input
                    id="contact-val"
                    type="text"
                    required
                    value={formData.contactValue}
                    onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                    placeholder="e.g. maya@example.com or @maya_embroidery"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#F6EFE5] border ${
                      errors.contactValue ? 'border-red-400' : 'border-[#DEC5A3] focus:border-[#B8442D]'
                    } text-sm text-[#301923] focus:outline-none transition-colors`}
                  />
                  {errors.contactValue && <p className="mt-1 text-xs text-red-500">{errors.contactValue}</p>}
                </div>
              </div>

              {/* Row 2: Item Type & Target Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="item-type" className="block text-xs font-medium text-[#301923] mb-1.5">
                    Garment or Item Type
                  </label>
                  <select
                    id="item-type"
                    value={formData.itemType}
                    onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6EFE5] border border-[#DEC5A3] text-sm text-[#301923] focus:border-[#B8442D] focus:outline-none transition-colors"
                  >
                    <option value="clothing-redesign">Saree Redesign / Garment Upcycling</option>
                    <option value="clothing-embellishment">Personal Clothing / Kurti / Neckline</option>
                    <option value="linen-tote">Linen Tote or Bag</option>
                    <option value="embroidery-hoop">Framed Wall Hoop (Framed Art)</option>
                    <option value="accessory-pouch">Velvet Pouch or Hair Accessory</option>
                    <option value="other">Other Bespoke Idea</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="target-date" className="block text-xs font-medium text-[#301923] mb-1.5">
                    Desired Completion Date (Optional)
                  </label>
                  <input
                    id="target-date"
                    type="text"
                    value={formData.targetDate}
                    onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                    placeholder="e.g. In 3 weeks / For an anniversary"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6EFE5] border border-[#DEC5A3] text-sm text-[#301923] focus:border-[#B8442D] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Colors & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="colors" className="block text-xs font-medium text-[#301923] mb-1.5">
                    Preferred Palette or Thread Colors
                  </label>
                  <input
                    id="colors"
                    type="text"
                    value={formData.colors}
                    onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                    placeholder="e.g. Burnt orange, warm beige, and chocolate"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6EFE5] border border-[#DEC5A3] text-sm text-[#301923] focus:border-[#B8442D] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs font-medium text-[#301923] mb-1.5">
                    Budget Range (Optional)
                  </label>
                  <input
                    id="budget"
                    type="text"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    placeholder="e.g. Flexible / approx. budget"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6EFE5] border border-[#DEC5A3] text-sm text-[#301923] focus:border-[#B8442D] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Idea Description */}
              <div>
                <label htmlFor="description" className="block text-xs font-medium text-[#301923] mb-1.5">
                  Describe your idea, motifs, or special story <span className="text-[#B8442D]">*</span>
                </label>
                <textarea
                  id="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us what flowers, letters, or designs you envision, whether this is a gift, etc."
                  className={`w-full px-4 py-3 rounded-xl bg-[#F6EFE5] border ${
                    errors.description ? 'border-red-400' : 'border-[#DEC5A3] focus:border-[#B8442D]'
                  } text-sm text-[#301923] focus:outline-none transition-colors resize-y`}
                />
                {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded border-[#DEC5A3] text-[#B8442D] focus:ring-[#B8442D]"
                  />
                  <span className="text-xs text-[#533630]">
                    I agree to be contacted by Pink Lunna regarding this needlework commission enquiry.
                  </span>
                </label>
                {errors.consent && <p className="mt-1 text-xs text-red-500">{errors.consent}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium bg-[#B8442D] text-white hover:bg-[#A33B26] shadow-soft-thread transition-all disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Clock className="w-4 h-4 animate-spin" />
                      <span>Checking enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Commission Enquiry</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#533630] italic">
                  Crafted slowly by hand &bull; Enquiries are answered personally
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
