import React from 'react';
import { MapPin, Users, HeartHandshake, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const Welcome: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FCFBF9] text-[#1D1D20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A6885F]">
                About The Property
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141416] tracking-tight leading-[1.2]">
                Welcome to <br />
                <span className="italic font-normal text-[#38383D]">Vijay Guest House</span>
              </h2>
              <p className="text-sm font-sans text-[#787570] tracking-wide">
                {BUSINESS_INFO.hindiName} • Bhabua, Kaimur (Bihar)
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#4A4742] leading-relaxed font-sans font-light">
              <p>
                Vijay Guest House offers simple, practical, and comfortable accommodation designed specifically for guests and transit travelers in Bhabua, Bihar.
              </p>
              <p>
                Conveniently situated on Bus Stand Road in Akhalaspur, our property provides seamless accessibility with close proximity to the Bhabua bus stand, allowing travelers to arrive and rest without strenuous intra-city commutes.
              </p>
              <p>
                With cooperative on-site staff dedicated to courteous support and a calm environment, we focus on delivering a comfortable and straightforward stay that respects your time and travel requirements.
              </p>
            </div>

            {/* Editorial Highlight Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#EAE6DE]">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F5F2EB] text-[#A6885F] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#141416]">
                    Close Proximity
                  </h3>
                  <p className="text-xs text-[#6E6A63] leading-normal mt-0.5">
                    Located near the Bhabua bus stand for effortless arrival and departure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F5F2EB] text-[#A6885F] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#141416]">
                    Cooperative Staff
                  </h3>
                  <p className="text-xs text-[#6E6A63] leading-normal mt-0.5">
                    Attentive, polite, and helpful assistance throughout your visit.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                id="about-call-inquiry-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#121214] bg-[#C5A880] hover:bg-[#D6BC95] transition-all shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <span className="text-xs text-[#7A766F]">
                Bus Stand Rd, Akhalaspur, Bhabua
              </span>
            </div>
          </div>

          {/* Premium Property Image beside content (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E7E2D8] bg-[#EFECE6] group">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85"
                alt="Vijay Guest House interior room and comfortable bedding"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-lg font-semibold text-[#E9D8B4]">
                      Vijay Guest House
                    </p>
                    <p className="text-xs text-white/80 font-sans">
                      Simple & Practical Accommodation
                    </p>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-white/15 text-xs font-medium text-white tracking-wide">
                    Bhabua
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative offset frame */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#C5A880]/30 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
