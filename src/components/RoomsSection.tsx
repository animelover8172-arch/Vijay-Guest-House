import React from 'react';
import { Phone, Check, HelpCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const RoomsSection: React.FC = () => {
  return (
    <section id="rooms" className="py-20 sm:py-28 bg-[#FCFBF9] text-[#1D1D20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A6885F]">
            Guest Accommodation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141416] tracking-tight mt-2 mb-4">
            Comfortable Rooms
          </h2>
          <p className="text-base sm:text-lg text-[#5E5A54] font-sans font-light leading-relaxed">
            Simple, practical accommodation designed for a convenient stay in Bhabua.
          </p>
        </div>

        {/* Realistic Room Presentation Cards (Placeholder Structure that respects no fake pricing/types) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Room Display 1 */}
          <div
            id="room-card-standard"
            className="group rounded-2xl overflow-hidden border border-[#E7E2D8] bg-[#F9F8F5] transition-all duration-300 hover:shadow-xl hover:border-[#C5A880]/50 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#EFECE6]">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
                  alt="Comfortable guest bedroom at Vijay Guest House"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-[#E9D8B4] font-medium border border-white/10">
                  Guest Accommodation
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#141416]">
                      Restful Guest Room
                    </h3>
                    <p className="text-xs text-[#7A766F] font-sans mt-0.5">
                      Designed for restful overnight transit & city visitors
                    </p>
                  </div>
                  <span className="shrink-0 text-xs px-3 py-1 rounded-full bg-[#EDE8DF] text-[#615D56] font-medium">
                    Available Upon Call
                  </span>
                </div>

                <p className="text-sm text-[#5E5A54] leading-relaxed mb-6 font-light">
                  Simple and comfortable room setting focused on delivering a clean, quiet space to recharge near the Bhabua bus stand.
                </p>

                <div className="space-y-2.5 pb-6 border-b border-[#EBE6DD] text-xs sm:text-sm text-[#4A4742]">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#A6885F]" />
                    <span>Comfortable bed & clean linens</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#A6885F]" />
                    <span>Peaceful resting atmosphere</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#A6885F]" />
                    <span>Prompt on-site staff assistance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#7A766F] block">Tariff Details</span>
                <span className="text-sm font-semibold text-[#141416]">
                  Contact us for room details
                </span>
              </div>
              <a
                id="rooms-call-availability-btn-1"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#121214] bg-[#C5A880] hover:bg-[#D6BC95] transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call for Availability</span>
              </a>
            </div>
          </div>

          {/* Room Display 2 */}
          <div
            id="room-card-twin"
            className="group rounded-2xl overflow-hidden border border-[#E7E2D8] bg-[#F9F8F5] transition-all duration-300 hover:shadow-xl hover:border-[#C5A880]/50 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#EFECE6]">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
                  alt="Practical room arrangement at Vijay Guest House"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-[#E9D8B4] font-medium border border-white/10">
                  Guest Accommodation
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#141416]">
                      Practical Twin Setup
                    </h3>
                    <p className="text-xs text-[#7A766F] font-sans mt-0.5">
                      Convenient configuration for traveling companions & colleagues
                    </p>
                  </div>
                  <span className="shrink-0 text-xs px-3 py-1 rounded-full bg-[#EDE8DF] text-[#615D56] font-medium">
                    Inquire for Dates
                  </span>
                </div>

                <p className="text-sm text-[#5E5A54] leading-relaxed mb-6 font-light">
                  Well-proportioned accommodation accommodating guests requiring straightforward amenities and immediate accessibility to city roads.
                </p>

                <div className="space-y-2.5 pb-6 border-b border-[#EBE6DD] text-xs sm:text-sm text-[#4A4742]">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#A6885F]" />
                    <span>Comfortable sleeping arrangement</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#A6885F]" />
                    <span>Direct access to transit hub</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#A6885F]" />
                    <span>Cooperative check-in support</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#7A766F] block">Tariff Details</span>
                <span className="text-sm font-semibold text-[#141416]">
                  Contact us for room details
                </span>
              </div>
              <a
                id="rooms-call-availability-btn-2"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#121214] bg-[#C5A880] hover:bg-[#D6BC95] transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call for Availability</span>
              </a>
            </div>
          </div>
        </div>

        {/* Room Transparency & Direct Inquiries Banner */}
        <div className="rounded-2xl bg-[#F4F0E8] border border-[#E4DFD4] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#EBE5DA] text-[#8C7049] shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-[#141416]">
                Need immediate room availability or tariff details?
              </h4>
              <p className="text-sm text-[#5E5A54] mt-1 font-light max-w-xl">
                Because rates and availability depend on travel schedules, please call our front desk directly at{' '}
                <strong className="text-[#141416] font-medium">{BUSINESS_INFO.phone}</strong> for real-time room confirmation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              id="rooms-inquiry-direct-call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-[#121214] bg-[#C5A880] hover:bg-[#D6BC95] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call 088738 87314</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
