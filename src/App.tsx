/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Welcome } from './components/Welcome';
import { StayPillars } from './components/StayPillars';
import { RoomsSection } from './components/RoomsSection';
import { LocationAdvantage } from './components/LocationAdvantage';
import { Gallery } from './components/Gallery';
import { CustomerReviews } from './components/CustomerReviews';
import { ContactSection } from './components/ContactSection';
import { GoogleMapEmbed } from './components/GoogleMapEmbed';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'stay', 'rooms', 'location', 'gallery', 'reviews', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#1D1D20] selection:bg-[#C5A880]/25 selection:text-[#18181B] pb-16 sm:pb-0 font-sans">
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      <main id="main-content">
        {/* Cinematic Hotel Hero */}
        <Hero />

        {/* Welcome Editorial Section */}
        <Welcome />

        {/* Your Stay - 4 Factual Pillars */}
        <StayPillars />

        {/* Comfortable Rooms Placeholder Section */}
        <RoomsSection />

        {/* Location Advantage: Near Bhabua Bus Stand */}
        <LocationAdvantage />

        {/* Property Gallery & Lightbox */}
        <Gallery />

        {/* Guest Experiences: Genuine Reviews & Google Rating */}
        <CustomerReviews />

        {/* Plan Your Stay & Direct Inquiries */}
        <ContactSection />

        {/* Clean Google Map Embed */}
        <GoogleMapEmbed />
      </main>

      {/* Minimal Premium Footer with Developer Credit */}
      <Footer />

      {/* Floating Call / WhatsApp & Back to top controls */}
      <FloatingActions />
    </div>
  );
}
