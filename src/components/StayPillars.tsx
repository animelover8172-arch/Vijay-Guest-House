import React from 'react';
import { Bed, Clock, MapPin, Users } from 'lucide-react';
import { STAY_PILLARS } from '../data';

export const StayPillars: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bed':
        return <Bed className="w-6 h-6 text-[#A6885F]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#A6885F]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#A6885F]" />;
      case 'Users':
      default:
        return <Users className="w-6 h-6 text-[#A6885F]" />;
    }
  };

  return (
    <section id="stay" className="py-20 bg-[#F6F4EE] border-y border-[#EBE6DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A6885F]">
            Guest House Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#141416] tracking-tight mt-2 mb-4">
            Your Stay
          </h2>
          <p className="text-base text-[#615D56] font-sans font-light">
            Founded on essential hospitality principles to ensure a restful, dependable stay for travelers in Bhabua.
          </p>
        </div>

        {/* 4 Pillars Grid (Comfort, Convenience, Location, Hospitality) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              id={`stay-pillar-${pillar.title.toLowerCase()}`}
              className="bg-[#FCFBF9] p-8 rounded-2xl border border-[#E5E0D5] hover:border-[#C5A880]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-[#F5F1E8] border border-[#EBE5DA] inline-flex items-center justify-center">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="text-xs font-serif italic text-[#A6885F]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#141416] mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#5E5A54] leading-relaxed font-sans font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0ECE4] text-[11px] font-medium uppercase tracking-widest text-[#9A7D54]">
                Essential Core
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
