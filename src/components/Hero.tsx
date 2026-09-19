import React from 'react';
import { Phone, MapPin, ChevronDown, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center bg-[#121214] text-white overflow-hidden pt-20"
    >
      {/* Background Image with subtle cinematic dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85"
          alt="Vijay Guest House Bhabua comfortable stay near Bus Stand"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Balanced multi-stop dark gradient for impeccable legibility and premium warm aura */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/75 to-[#121214]/65" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Location & Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/40 text-[#EBE6DD] text-xs sm:text-sm font-medium mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Bus Stand Road, Akhalaspur, Bhabua, Bihar</span>
        </div>

        {/* Business Subtitle */}
        <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#C5A880] font-sans font-semibold mb-3">
          {BUSINESS_INFO.name} • {BUSINESS_INFO.hindiName}
        </span>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
          Comfortable Stay. <br className="hidden sm:inline" />
          <span className="text-[#F3EFEA] font-normal italic">Convenient Location.</span>
        </h1>

        {/* Short Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#D8D4CC] max-w-2xl font-sans font-light leading-relaxed mb-10">
          A comfortable guest house in Bhabua, conveniently located near the bus stand for peaceful transit and practical accommodation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12">
          {/* Primary CTA: Call Now */}
          <a
            id="hero-primary-cta-call"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold uppercase tracking-wider text-[#121214] bg-[#C5A880] hover:bg-[#D6BC95] active:scale-98 transition-all shadow-lg shadow-[#C5A880]/20"
          >
            <Phone className="w-4 h-4 text-[#121214]" />
            <span>Call Now</span>
          </a>

          {/* Secondary CTA: Get Directions */}
          <a
            id="hero-secondary-cta-directions"
            href={BUSINESS_INFO.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all"
          >
            <MapPin className="w-4 h-4 text-[#C5A880]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Key Real Highlights (Strictly factual) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-white/10 text-left w-full max-w-2xl">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#E0DDD5]">
            <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
            <span>Close to Bus Stand</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#E0DDD5]">
            <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
            <span>Cooperative Staff</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-xs sm:text-sm text-[#E0DDD5]">
            <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
            <span>Practical & Restful</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        id="hero-scroll-indicator"
        aria-label="Scroll down to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/60 hover:text-[#C5A880] transition-colors group cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-1 font-sans opacity-75">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce opacity-80 group-hover:opacity-100" />
      </a>
    </section>
  );
};
