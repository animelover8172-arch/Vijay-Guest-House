import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress-bar"
        className="h-0.5 bg-gradient-to-r from-[#C5A880] to-[#E9D8B4] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Navbar container */}
      <nav
        id="main-navigation"
        className={`w-full transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#121214]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <a
              id="brand-logo-link"
              href="#home"
              className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded px-1"
            >
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-white group-hover:text-[#C5A880] transition-colors">
                  {BUSINESS_INFO.name}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] uppercase font-sans tracking-widest text-[#C5A880] border border-[#C5A880]/30 rounded">
                  Bhabua
                </span>
              </div>
              <span className="text-[11px] text-[#E0DDD5]/80 font-sans tracking-wider">
                {BUSINESS_INFO.hindiName} • Akhalaspur
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    id={`nav-link-${link.name.toLowerCase()}`}
                    href={link.href}
                    className={`text-sm font-medium transition-colors tracking-wide relative py-1 ${
                      isActive
                        ? 'text-[#C5A880]'
                        : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A880] rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Header Actions */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                id="header-cta-directions"
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 border border-white/15 transition-all"
                title="Open location in Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Bus Stand Rd</span>
              </a>

              <a
                id="header-cta-call"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#121214] bg-[#C5A880] hover:bg-[#D5BB93] active:scale-[0.98] transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                id="mobile-header-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="p-2 rounded-lg bg-[#C5A880] text-[#121214] focus:outline-none"
                aria-label="Call Vijay Guest House"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:text-[#C5A880] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="sm:hidden bg-[#141416]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-fadeIn"
          >
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm font-medium text-white/90 hover:text-[#C5A880] hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                id="mobile-drawer-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#121214] bg-[#C5A880] hover:bg-[#d6bc95]"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <a
                id="mobile-drawer-directions-btn"
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium text-white/90 bg-white/10 border border-white/15 hover:bg-white/15"
              >
                <MapPin className="w-4 h-4 text-[#C5A880]" />
                <span>Get Directions (Bus Stand Rd)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
