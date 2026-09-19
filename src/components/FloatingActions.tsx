import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageCircle, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          id="back-to-top-btn"
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-20 sm:bottom-8 right-5 z-40 p-3 rounded-full bg-[#141416]/90 hover:bg-[#141416] text-[#C5A880] hover:text-white border border-[#C5A880]/30 shadow-lg backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Quick Button (Desktop / Tablet) */}
      <aside aria-label="Quick contact" className="hidden sm:block fixed bottom-8 left-6 z-40">
        <a
          id="floating-whatsapp-btn"
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#121214]/90 hover:bg-[#121214] text-white border border-white/15 shadow-xl backdrop-blur-md transition-transform hover:scale-103 group"
          title="Chat with Vijay Guest House on WhatsApp"
        >
          <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
          <div className="text-left pr-1">
            <span className="text-[10px] text-[#A6885F] block uppercase tracking-wider font-semibold">
              Instant Inquiry
            </span>
            <span className="text-xs font-medium text-white">
              WhatsApp Us
            </span>
          </div>
        </a>
      </aside>

      {/* Mobile Bottom Quick Action Bar (Ensures seamless mobile experience) */}
      <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#141416]/98 backdrop-blur-lg border-t border-white/10 px-4 py-2.5 flex items-center gap-2.5 shadow-2xl">
        <a
          id="mobile-bottom-call-btn"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C5A880] text-[#121214] font-semibold text-xs uppercase tracking-wider shadow-md"
        >
          <Phone className="w-4 h-4" />
          <span>Call 088738 87314</span>
        </a>

        <a
          id="mobile-bottom-whatsapp-btn"
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <a
          id="mobile-bottom-directions-btn"
          href={BUSINESS_INFO.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-white/10 text-white border border-white/15 flex items-center justify-center"
          aria-label="Directions"
        >
          <Navigation className="w-4 h-4 text-[#C5A880]" />
        </a>
      </aside>
    </>
  );
};
