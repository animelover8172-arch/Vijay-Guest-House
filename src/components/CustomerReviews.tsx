import React from 'react';
import { Star, ShieldCheck, MessageSquareQuote } from 'lucide-react';
import { BUSINESS_INFO, VERIFIED_REVIEWS } from '../data';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F6F4EE] border-t border-[#EBE6DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A6885F]">
            Transparent Feedback
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141416] tracking-tight mt-2 mb-4">
            Guest Experiences
          </h2>
          <p className="text-base text-[#615D56] font-sans font-light">
            Authentic and unmanipulated Google reviews shared by visitors who stayed at our Bhabua property.
          </p>

          {/* Genuine Google Rating Display */}
          <div className="mt-8 inline-flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-[#FCFBF9] border border-[#E2DDD3] shadow-sm">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-3xl font-bold text-[#141416]">
                3.0
              </span>
              <span className="text-sm font-medium text-[#7A766F]">/ 5</span>
            </div>

            <div className="h-8 w-px bg-[#E5E0D5]" />

            <div className="text-left">
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                ))}
                {[4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-[#D8D2C5]" />
                ))}
              </div>
              <span className="text-xs font-sans text-[#6B6760] font-medium block mt-0.5">
                3 Google reviews
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 pl-2 text-[11px] uppercase tracking-wider text-[#A6885F] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Listing</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              id={`review-card-${rev.id}`}
              className="bg-[#FCFBF9] p-7 rounded-2xl border border-[#E5E0D5] flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Header: Rating & Context */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating
                            ? 'fill-[#C5A880] text-[#C5A880]'
                            : 'text-[#D8D2C5]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-sans font-medium text-[#8C877E] px-2 py-0.5 rounded bg-[#F4EFE6]">
                    {rev.verifiedContext}
                  </span>
                </div>

                {/* Highlight Title */}
                <h3 className="font-serif text-lg font-bold text-[#141416] mb-3">
                  {rev.highlight}
                </h3>

                {/* Comment */}
                <p className="text-sm text-[#54504A] font-sans font-light leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#F0EBE0] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EAE4D8] flex items-center justify-center font-serif text-xs font-bold text-[#141416]">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#141416] font-sans">
                      {rev.author}
                    </h4>
                    <span className="text-[11px] text-[#8C877E] block">
                      {rev.timeAgo}
                    </span>
                  </div>
                </div>
                <MessageSquareQuote className="w-4 h-4 text-[#C5A880]/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Verified Notice */}
        <div className="mt-12 text-center text-xs text-[#7A766F] max-w-lg mx-auto font-sans font-light">
          We believe in complete transparency. Our guest house provides honest, clean transit accommodation and cooperative service for all visitors in Bhabua.
        </div>
      </div>
    </section>
  );
};
