import React from 'react';
import { MapPin, Navigation, ExternalLink, Bus } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const GoogleMapEmbed: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#F6F4EE] border-t border-[#EBE6DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FCFBF9] rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A6885F]">
                Street Map & Navigation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141416] mt-1">
                How to Reach Us
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6760] mt-1 font-light">
                Bus Stand Rd, Akhalaspur, Bhabua, Bihar 821101
              </p>
            </div>

            <a
              id="map-external-google-maps-btn"
              href={BUSINESS_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-[#141416] bg-[#EDE7DC] hover:bg-[#E2DACB] border border-[#DDD5C5] transition-all self-start md:self-auto"
            >
              <Navigation className="w-4 h-4 text-[#A6885F]" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
            </a>
          </div>

          {/* Clean Map Container */}
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#E0DBD0] shadow-inner bg-[#EFECE6]">
            {/* Embed pointing to Bhabua Bus Stand Rd, Akhalaspur */}
            <iframe
              title="Vijay Guest House Bhabua Map Location"
              src="https://maps.google.com/maps?q=Bus%20Stand%20Rd%2C%20Akhalaspur%2C%20Bhabua%2C%20Bihar%20821101&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter contrast-95"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* In-Map Info Overlay Card */}
            <div className="absolute top-4 left-4 z-10 max-w-xs p-4 rounded-xl bg-[#141416]/90 backdrop-blur-md border border-white/15 text-white shadow-lg hidden sm:block">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white">
                    Vijay Guest House
                  </h4>
                  <p className="text-[11px] text-[#D8D4CC] mt-0.5">
                    Bus Stand Rd, Akhalaspur, Bhabua 821101
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-[10px] text-[#E9D8B4] font-medium">
                    <Bus className="w-3 h-3" />
                    <span>Near Bhabua Bus Stand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
