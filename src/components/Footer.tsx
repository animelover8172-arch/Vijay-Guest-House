import React from 'react';
import { Phone, MapPin, MessageCircle, Heart, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Stay', href: '#stay' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Location', href: '#location' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#121214] text-[#E0DDD5] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-xs text-[#C5A880] tracking-widest font-sans font-medium uppercase">
                {BUSINESS_INFO.hindiName} • Bhabua, Bihar
              </p>
            </div>

            <p className="text-sm text-[#A8A49D] font-light max-w-sm leading-relaxed">
              A comfortable guest house in Bhabua, conveniently located near the bus stand on Bus Stand Road in Akhalaspur. Simple, practical accommodation with cooperative staff.
            </p>

            <div className="pt-2 text-xs text-[#827E78]">
              Google Rating: <span className="text-white font-medium">3.0 / 5</span> (3 Google reviews)
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-[#C4C0B8]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#C5A880] transition-colors py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm text-[#C4C0B8]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-1" />
                <span>
                  {BUSINESS_INFO.address.street}, <br />
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="hover:text-[#C5A880] font-medium transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                id="footer-call-cta"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#121214] bg-[#C5A880] hover:bg-[#D5BB93] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              <a
                id="footer-directions-cta"
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white/90 bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Developer Credit & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8E8A84]">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>

          {/* Mandatory Developer Credit */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center md:text-right space-y-1">
            <div className="text-white/90 font-medium flex items-center justify-center md:justify-end gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Created by RoadsideDeveloper</span>
            </div>
            <div className="text-[11px] text-[#A6885F]">
              🌐 Designed & Developed by RoadsideDeveloper
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3 text-[11px] pt-0.5">
              <a
                href={BUSINESS_INFO.developerCredits.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4C0B8] hover:text-[#25D366] transition-colors inline-flex items-center gap-1"
              >
                <MessageCircle className="w-3 h-3 text-[#25D366]" />
                <span>WhatsApp: {BUSINESS_INFO.developerCredits.whatsapp}</span>
              </a>
              <span>•</span>
              <a
                href={BUSINESS_INFO.developerCredits.callUrl}
                className="text-[#C4C0B8] hover:text-[#C5A880] transition-colors inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-[#C5A880]" />
                <span>Call: {BUSINESS_INFO.developerCredits.call}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
