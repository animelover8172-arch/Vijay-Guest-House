import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Close lightbox on Escape key and navigate with arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;

      if (e.key === 'Escape') {
        setActiveItem(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === activeItem.id);
        const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
        setActiveItem(GALLERY_ITEMS[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === activeItem.id);
        const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
        setActiveItem(GALLERY_ITEMS[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem]);

  const heroItem = GALLERY_ITEMS[0];
  const supportingItems = GALLERY_ITEMS.slice(1);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FCFBF9] text-[#1D1D20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A6885F]">
              Visual Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141416] tracking-tight mt-2">
              Property Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#615D56] font-sans font-light mt-2 max-w-xl">
              An authentic glimpse into the property, guest rooms, reception desk, and quiet surroundings.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#7A766F] font-sans">
            <ImageIcon className="w-4 h-4 text-[#A6885F]" />
            <span>Click any photo to open full-screen lightbox</span>
          </div>
        </div>

        {/* Modern Gallery Layout: Large Hero Image + Supporting Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Large Hero Showcase (7 cols) */}
          <div
            id={`gallery-item-${heroItem.id}`}
            onClick={() => setActiveItem(heroItem)}
            className="lg:col-span-7 group relative rounded-2xl overflow-hidden cursor-pointer shadow-md bg-[#EFECE6] border border-[#E5E0D5] min-h-[340px] sm:min-h-[440px]"
          >
            <img
              src={heroItem.url}
              alt={heroItem.alt}
              className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white flex items-end justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-[#C5A880]/90 text-[#121214] text-[10px] font-semibold uppercase tracking-wider mb-2">
                  {heroItem.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {heroItem.title}
                </h3>
              </div>
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-[#C5A880] group-hover:text-[#121214] transition-colors shrink-0">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Supporting Grid (5 cols: 2x2 grid) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {supportingItems.slice(0, 4).map((item) => (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => setActiveItem(item)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm bg-[#EFECE6] border border-[#E5E0D5] h-48 sm:h-52"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] text-[#E9D8B4] font-medium uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-sm font-semibold text-white line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                  <Maximize2 className="w-3.5 h-3.5 text-white/80 group-hover:text-[#C5A880] transition-colors shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Additional 5th supporting item if available spanning bottom */}
          {supportingItems.length > 4 && (
            <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {supportingItems.slice(4).map((item) => (
                <div
                  key={item.id}
                  id={`gallery-item-${item.id}`}
                  onClick={() => setActiveItem(item)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm bg-[#EFECE6] border border-[#E5E0D5] h-52 sm:h-60"
                >
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white flex items-end justify-between">
                    <div>
                      <span className="text-[10px] text-[#E9D8B4] font-medium uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-base font-semibold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <Maximize2 className="w-4 h-4 text-white/80 group-hover:text-[#C5A880] transition-colors shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          {/* Modal Close Button */}
          <button
            id="lightbox-close-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveItem(null);
            }}
            className="absolute top-5 right-5 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            id="lightbox-prev-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === activeItem.id);
              const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
              setActiveItem(GALLERY_ITEMS[prevIndex]);
            }}
            className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            id="lightbox-next-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === activeItem.id);
              const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
              setActiveItem(GALLERY_ITEMS[nextIndex]);
            }}
            className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeItem.url}
              alt={activeItem.alt}
              className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <div className="text-center mt-4 text-white">
              <span className="text-[11px] uppercase tracking-widest text-[#C5A880] font-sans">
                {activeItem.category} • Vijay Guest House
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-medium mt-1">
                {activeItem.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
