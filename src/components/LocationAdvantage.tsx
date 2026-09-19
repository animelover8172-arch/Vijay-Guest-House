import React from 'react';
import { MapPin, Navigation, Bus, Compass, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const LocationAdvantage: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#F6F4EE] border-t border-[#EBE6DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E0DBD0] bg-[#121214] group">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80"
                alt="Bus Stand Road Akhalaspur Bhabua area"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center group-hover:scale-103 transition-transform duration-700 opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* In-image overlay info card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-white">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#C5A880] text-[#121214] shrink-0">
                    <Bus className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#E9D8B4] font-medium block">
                      Primary Transit Benefit
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-white">
                      Near Bhabua Bus Stand
                    </h4>
                    <p className="text-xs text-[#D1CCC2] mt-1">
                      Located right along Bus Stand Road for rapid walking or vehicle connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle aesthetic backdrop border */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full rounded-2xl border border-[#C5A880]/35 -z-10" />
          </div>

          {/* Editorial Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A6885F]">
                Location Advantage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141416] tracking-tight leading-[1.2]">
                Stay Close to <br />
                <span className="italic font-normal text-[#38383D]">What Matters</span>
              </h2>
            </div>

            {/* Core Highlight Statement */}
            <div className="inline-block p-4 rounded-xl bg-[#EDE7DB] border border-[#DDD5C5]">
              <div className="flex items-center gap-2.5 text-[#141416] font-semibold text-base sm:text-lg">
                <MapPin className="w-5 h-5 text-[#8C7049]" />
                <span>Near Bhabua Bus Stand</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#4A4742] leading-relaxed font-sans font-light">
              Vijay Guest House is located on Bus Stand Road in Akhalaspur, Bhabua, making it convenient for guests travelling through the city.
            </p>

            <p className="text-sm sm:text-base text-[#5E5A54] leading-relaxed font-light">
              Whether you are passing through Kaimur district, visiting administrative offices, or arriving on night coach services, our prime placement saves valuable travel time and eliminates transit uncertainty.
            </p>

            {/* Factual Geographic Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-[#FCFBF9] border border-[#E5E0D5]">
                <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-[#141416]">
                  <Compass className="w-4 h-4 text-[#A6885F]" />
                  <span>Akhalaspur Vicinity</span>
                </div>
                <p className="text-xs text-[#6B6760]">
                  Convenient street-level road access on Bus Stand Rd with direct vehicle connectivity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FCFBF9] border border-[#E5E0D5]">
                <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-[#141416]">
                  <Navigation className="w-4 h-4 text-[#A6885F]" />
                  <span>Bhabua City Center</span>
                </div>
                <p className="text-xs text-[#6B6760]">
                  Effortless access to key town markets, local facilities, and administrative destinations.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <a
                id="location-cta-get-directions"
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-[#141416] hover:bg-[#25252A] transition-all shadow-md group"
              >
                <Navigation className="w-4 h-4 text-[#C5A880] group-hover:rotate-45 transition-transform" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
