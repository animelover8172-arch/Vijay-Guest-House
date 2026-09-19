import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, Navigation, Clock, CheckCircle2, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    notes: '',
  });
  const [inquirySent, setInquirySent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Vijay Guest House, my name is ${formData.name || 'Guest'}. I would like to inquire about room availability for stay in Bhabua on ${formData.date || 'upcoming dates'}. Contact: ${formData.phone || 'N/A'}. Details: ${formData.notes || 'Room inquiry'}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918873887314?text=${encoded}`, '_blank');
    setInquirySent(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FCFBF9] text-[#1D1D20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Information Column (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A6885F]">
                Direct Inquiries & Bookings
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141416] tracking-tight mt-2 mb-4">
                Plan Your Stay
              </h2>
              <p className="text-base text-[#5E5A54] font-sans font-light leading-relaxed">
                Connect with our front desk directly for instantaneous room availability, directions assistance, and tariff information.
              </p>
            </div>

            {/* Address & Contact Cards */}
            <div className="space-y-4">
              {/* Business Identification */}
              <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E5E0D5] flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#EBE5DA] text-[#A6885F] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#141416]">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs font-sans text-[#7A766F] mb-1">
                    {BUSINESS_INFO.hindiName}
                  </p>
                  <p className="text-sm text-[#4A4742] leading-relaxed">
                    {BUSINESS_INFO.address.street}, <br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                  </p>
                </div>
              </div>

              {/* Phone Direct */}
              <div className="p-6 rounded-2xl bg-[#F6F4EE] border border-[#E5E0D5] flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#EBE5DA] text-[#A6885F] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7A766F]">
                    Direct Telephone
                  </h3>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="font-serif text-2xl font-bold text-[#141416] hover:text-[#A6885F] transition-colors mt-0.5 block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-[#5E5A54] mt-1">
                    Front desk on-site assistance for room availability
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons: Call Now, Get Directions, WhatsApp */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                id="contact-btn-call-now"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#121214] bg-[#C5A880] hover:bg-[#D6BC95] transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                id="contact-btn-get-directions"
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-[#141416] bg-[#F0EBE0] hover:bg-[#E7E1D4] border border-[#DDD5C5] transition-all"
              >
                <Navigation className="w-4 h-4 text-[#A6885F]" />
                <span>Get Directions</span>
              </a>

              <a
                id="contact-btn-whatsapp"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Inquiry Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#F9F8F5] p-6 sm:p-10 rounded-3xl border border-[#E7E2D8] shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#141416] mb-2">
              Send a Quick Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6760] mb-6 font-light">
              Submit your tentative travel dates and we will open a pre-filled direct WhatsApp or phone prompt for fast response.
            </p>

            {inquirySent ? (
              <div className="p-6 rounded-2xl bg-[#EBF5EE] border border-[#C5E1D0] text-emerald-900 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold">Inquiry Prepared!</h4>
                <p className="text-xs text-emerald-800">
                  Your details have been formatted. You can also dial our front desk anytime at{' '}
                  <strong>{BUSINESS_INFO.phone}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setInquirySent(false)}
                  className="mt-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-medium text-[#4A4742] mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="inquiry-name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCD5C8] bg-[#FCFBF9] text-sm text-[#141416] placeholder-[#9E9A92] focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inquiry-phone" className="block text-xs font-medium text-[#4A4742] mb-1.5 uppercase tracking-wider">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      id="inquiry-phone"
                      required
                      placeholder="e.g. 09876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCD5C8] bg-[#FCFBF9] text-sm text-[#141416] placeholder-[#9E9A92] focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry-date" className="block text-xs font-medium text-[#4A4742] mb-1.5 uppercase tracking-wider">
                      Intended Stay Date
                    </label>
                    <input
                      type="date"
                      id="inquiry-date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCD5C8] bg-[#FCFBF9] text-sm text-[#141416] focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-notes" className="block text-xs font-medium text-[#4A4742] mb-1.5 uppercase tracking-wider">
                    Inquiry Notes (Optional)
                  </label>
                  <textarea
                    id="inquiry-notes"
                    rows={3}
                    placeholder="Number of guests, approximate arrival time, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCD5C8] bg-[#FCFBF9] text-sm text-[#141416] placeholder-[#9E9A92] focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="inquiry-submit-btn"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#121214] bg-[#C5A880] hover:bg-[#D6BC95] active:scale-99 transition-all shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send WhatsApp Inquiry</span>
                </button>

                <p className="text-[11px] text-center text-[#7A766F] pt-1">
                  Instant inquiry to 088738 87314 • No upfront fees
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
