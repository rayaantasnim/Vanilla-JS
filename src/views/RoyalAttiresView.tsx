import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ViewRoute, RoyalAttireItem } from '../types';
import { ROYAL_ATTIRES_DATA } from '../data/royalAttiresData';
import { 
  Crown, 
  Sparkles, 
  Layers, 
  Gem, 
  Eye, 
  ShieldCheck, 
  ArrowRight,
  Maximize2
} from 'lucide-react';

interface RoyalAttiresViewProps {
  onNavigate: (route: ViewRoute) => void;
}

type TabType = 'Cloths' | 'Jewelries' | 'Accessories';

export const RoyalAttiresView: React.FC<RoyalAttiresViewProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<TabType>('Cloths');
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animate items on tab switch with GSAP
  useEffect(() => {
    if (itemsContainerRef.current) {
      gsap.fromTo(
        itemsContainerRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

  const displayedItems = ROYAL_ATTIRES_DATA.filter(item => item.category === activeTab);

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#c5a059]/40 bg-[#0e0e14] mb-3">
          <Crown className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="text-[11px] font-mono-telemetry text-[#c5a059] uppercase tracking-widest">
            OFFICIAL SOVEREIGN WARDROBE & TELEMETRY ARTIFACTS
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#f4f4f8] tracking-wide">
          Royal Attires & Relics Directory
        </h1>
        <p className="text-xs sm:text-sm text-[#9292a4] mt-3 leading-relaxed font-light">
          Compulsory wardrobe layers, solid gold near-field biometric telemetry torcs, and intimate 
          zero-lux covers calibrated to protect parasympathetic cellular restoration.
        </p>

        {/* 3 Panels Tab Control: Cloths, Jewelries, Accessories */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setActiveTab('Cloths')}
            className={`px-6 py-3 rounded-xs border text-xs font-mono-telemetry uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'Cloths'
                ? 'border-[#c5a059] bg-[#1a1710] text-[#f4e8cf] font-bold shadow-[0_0_20px_rgba(197,160,89,0.2)]'
                : 'border-[#222232] bg-[#0c0c14] text-[#828294] hover:border-[#38384c]'
            }`}
          >
            <Layers className="w-4 h-4 text-[#c5a059]" />
            <span>Cloths (Wardrobe Layers)</span>
          </button>

          <button
            onClick={() => setActiveTab('Jewelries')}
            className={`px-6 py-3 rounded-xs border text-xs font-mono-telemetry uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'Jewelries'
                ? 'border-[#c5a059] bg-[#1a1710] text-[#f4e8cf] font-bold shadow-[0_0_20px_rgba(197,160,89,0.2)]'
                : 'border-[#222232] bg-[#0c0c14] text-[#828294] hover:border-[#38384c]'
            }`}
          >
            <Gem className="w-4 h-4 text-[#c5a059]" />
            <span>Jewelries (Biometric Artifacts)</span>
          </button>

          <button
            onClick={() => setActiveTab('Accessories')}
            className={`px-6 py-3 rounded-xs border text-xs font-mono-telemetry uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'Accessories'
                ? 'border-[#c5a059] bg-[#1a1710] text-[#f4e8cf] font-bold shadow-[0_0_20px_rgba(197,160,89,0.2)]'
                : 'border-[#222232] bg-[#0c0c14] text-[#828294] hover:border-[#38384c]'
            }`}
          >
            <Eye className="w-4 h-4 text-[#c5a059]" />
            <span>Accessories (Intimate Covers)</span>
          </button>
        </div>
      </div>

      {/* Directory Content List */}
      <div ref={itemsContainerRef} className="space-y-16">
        {displayedItems.map((item) => (
          <div 
            key={item.id}
            className="border border-[#222234] bg-[#0c0c14] rounded-sm overflow-hidden shadow-2xl"
          >
            {/* Title & Metadata Top Banner */}
            <div className="p-6 sm:p-8 border-b border-[#1c1c2a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-[#0d0d16] via-[#0b0b12] to-[#0d0d16]">
              <div>
                <span className="text-[10px] font-mono-telemetry uppercase tracking-widest text-[#8c6d32] block mb-1">
                  SOVEREIGN ARTIFACT PROFILE &bull; {item.category.toUpperCase()}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f4f4f8]">
                  {item.title}
                </h2>
                <p className="text-xs text-[#a0a0b2] mt-1 font-light">
                  {item.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-[10px] font-mono-telemetry">
                {item.materials.map((mat, mIdx) => (
                  <span key={mIdx} className="px-2.5 py-1 bg-[#141422] border border-[#26263a] text-[#c5a059]">
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* DUAL-IMAGE ARCHITECTURE: 
                Every item profile features a clean flex/grid containing placeholders for two high-resolution perspective images side-by-side, 
                collapsing into a single vertical stack on small screens! */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1c1c2a]">
              {/* Primary Perspective Image */}
              <div className="relative bg-[#09090f] overflow-hidden group">
                <div className="h-72 sm:h-96 w-full overflow-hidden">
                  <img
                    src={item.primaryImage}
                    alt={item.primaryPerspectiveLabel}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono-telemetry text-[#dfc282] uppercase tracking-wider bg-[#07070a]/90 px-3 py-1 border border-[#c5a059]/40 rounded-xs">
                    {item.primaryPerspectiveLabel}
                  </span>
                  <span className="text-[10px] font-mono-telemetry text-[#767688]">PERSPECTIVE I</span>
                </div>
              </div>

              {/* Secondary Perspective Image */}
              <div className="relative bg-[#09090f] overflow-hidden group">
                <div className="h-72 sm:h-96 w-full overflow-hidden">
                  <img
                    src={item.secondaryImage}
                    alt={item.secondaryPerspectiveLabel}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono-telemetry text-[#dfc282] uppercase tracking-wider bg-[#07070a]/90 px-3 py-1 border border-[#c5a059]/40 rounded-xs">
                    {item.secondaryPerspectiveLabel}
                  </span>
                  <span className="text-[10px] font-mono-telemetry text-[#767688]">PERSPECTIVE II</span>
                </div>
              </div>
            </div>

            {/* Biometric Specs Callout */}
            <div className="px-6 py-3 bg-[#11111a] border-t border-b border-[#1c1c2a] flex items-center gap-3 text-xs text-[#a5a5bc]">
              <Sparkles className="w-4 h-4 text-[#c5a059] shrink-0" />
              <div>
                <strong className="text-[#f4e8cf] font-mono-telemetry text-[11px] mr-2">BIOMETRIC SPECIFICATION:</strong>
                <span>{item.biometricSpecs}</span>
              </div>
            </div>

            {/* MANDATORY 100+ WORD TEXTUAL CONTEXT DESCRIPTION CONTAINER */}
            <div className="p-6 sm:p-8 bg-[#08080d]">
              <span className="text-[10px] font-mono-telemetry text-[#c5a059] uppercase tracking-widest block mb-2">
                // PHYSIOLOGICAL RATIONALE & THERAPEUTIC GROUNDING [100+ WORD MANDATORY CONTAINER]
              </span>
              <p className="text-xs sm:text-sm text-[#9a9ab0] leading-relaxed font-light text-justify">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA to Order Gateway */}
      <div className="mt-20 p-8 border border-[#2a2a3e] bg-[#0c0c14] rounded-sm text-center">
        <h4 className="font-serif-luxury text-xl text-[#f4f4f8] font-bold">
          Ready to Receive Your Sovereign Relic Wardrobe?
        </h4>
        <p className="text-xs text-[#8c8c9e] max-w-xl mx-auto mt-2 leading-relaxed">
          Wardrobe sizing and biometric artifact calibration are completed during Part 1 & Part 2 of intake.
        </p>
        <button
          onClick={() => onNavigate('order')}
          className="mt-6 px-9 py-3.5 bg-gradient-to-r from-[#c5a059] to-[#9e7d38] text-[#07070a] font-serif-luxury text-xs tracking-[0.2em] uppercase font-bold hover:from-[#dfc282] hover:to-[#b08d42] transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)] cursor-pointer"
        >
          Enter Sovereign Order Gateway
        </button>
      </div>
    </div>
  );
};
