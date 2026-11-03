import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ViewRoute } from '../types';
import { 
  ShieldCheck, 
  Dna, 
  Compass, 
  Sparkles, 
  Anchor, 
  ArrowRight,
  Flame,
  Award
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (route: ViewRoute) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-fade'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div className="w-full pt-20">
      {/* Sovereign Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center px-6 sm:px-12 py-20 border-b border-[#1b1b26] overflow-hidden"
      >
        {/* Subtle Ambient Radial Backdrops */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#c5a059]/10 via-[#c5a059]/5 to-transparent blur-[140px] pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-t from-[#151525]/40 to-transparent blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="hero-fade inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#c5a059]/30 bg-[#0d0d14]/80 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></span>
            <span className="font-mono-telemetry text-xs tracking-[0.2em] text-[#c5a059] uppercase">
              SOVEREIGN MEDICAL ENCLAVE &bull; 4°11&apos;32&quot;S 154°22&apos;09&quot;E
            </span>
          </div>

          <h1 className="hero-fade font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.08em] text-[#f4f4f8] leading-[1.15] max-w-4xl mx-auto">
            THE ZENITH OF <span className="gold-gradient-text">SOVEREIGN</span> LONGEVITY MEDICINE
          </h1>

          <p className="hero-fade text-sm sm:text-lg text-[#9e9eaf] max-w-2xl mx-auto mt-6 leading-relaxed font-light">
            An ultra-exclusive offshore medical sanctuary situated beyond municipal jurisdiction. 
            Dedicated to deep cellular epigenetic reprogramming, autologous stem cell transplantation, 
            and absolute clinical seclusion for monarchs, founders, and sovereign leaders.
          </p>

          {/* Action CTAs */}
          <div className="hero-fade flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button
              onClick={() => onNavigate('order')}
              className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-[#c5a059] via-[#dfc282] to-[#9e7d38] text-[#07070a] font-serif-luxury text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-[0_0_30px_rgba(197,160,89,0.35)] hover:shadow-[0_0_45px_rgba(197,160,89,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Enter Order Gateway
            </button>

            <button
              onClick={() => onNavigate('rules')}
              className="w-full sm:w-auto px-8 py-4 border border-[#2d2d3e] bg-[#0c0c12]/80 hover:border-[#c5a059]/60 hover:bg-[#14141e] text-[#d6d6e2] font-serif-luxury text-xs tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2"
            >
              <span>Examine 50 Sovereign Rules</span>
              <ArrowRight className="w-4 h-4 text-[#c5a059]" />
            </button>
          </div>

          {/* Prestige Sovereign Telemetry Bar */}
          <div className="hero-fade grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-10 border-t border-[#181824] text-left">
            <div className="p-4 border-l border-[#c5a059]/40 bg-[#0a0a0f]/60">
              <span className="font-mono-telemetry text-xl sm:text-2xl font-bold text-[#f0f0f5] block">
                $4.2B USD
              </span>
              <span className="text-[11px] font-mono-telemetry uppercase text-[#7a7a8e] tracking-wider mt-1 block">
                Clinical Infrastructure
              </span>
            </div>
            <div className="p-4 border-l border-[#c5a059]/40 bg-[#0a0a0f]/60">
              <span className="font-mono-telemetry text-xl sm:text-2xl font-bold text-[#f0f0f5] block">
                0.001%
              </span>
              <span className="text-[11px] font-mono-telemetry uppercase text-[#7a7a8e] tracking-wider mt-1 block">
                Global Admission Rate
              </span>
            </div>
            <div className="p-4 border-l border-[#c5a059]/40 bg-[#0a0a0f]/60">
              <span className="font-mono-telemetry text-xl sm:text-2xl font-bold text-[#f0f0f5] block">
                100% AIR-GAP
              </span>
              <span className="text-[11px] font-mono-telemetry uppercase text-[#7a7a8e] tracking-wider mt-1 block">
                Zero Cloud Data Logging
              </span>
            </div>
            <div className="p-4 border-l border-[#c5a059]/40 bg-[#0a0a0f]/60">
              <span className="font-mono-telemetry text-xl sm:text-2xl font-bold text-[#f0f0f5] block">
                7-YEARS BIO
              </span>
              <span className="text-[11px] font-mono-telemetry uppercase text-[#7a7a8e] tracking-wider mt-1 block">
                Mean Epigenetic Reversal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ASSET GROUNDING TEMPLATE: Structured Media Rows with Mandatory 100+ Word Description Containers */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono-telemetry text-[#c5a059] uppercase tracking-widest block mb-2">
            // OFFSHORE CLINICAL TOPOGRAPHY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light text-[#f0f0f5]">
            Sovereign Facilities & Biometric Grounds
          </h2>
          <p className="text-sm text-[#8c8c9e] mt-4 leading-relaxed">
            Every square meter of AEGIS Island is fortified with electromagnetic shielding, autonomous acoustic damping, 
            and negative-pressure clean rooms engineered to facilitate undisturbed cellular rejuvenation.
          </p>
        </div>

        {/* Structured Row 1: The Sovereign Surgical Citadel */}
        <div className="mb-16 border border-[#1f1f2c] bg-[#0c0c12] rounded-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Media Placeholder Box */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 bg-[#12121c] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" 
                alt="AEGIS Island Sovereign Surgical Citadel"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#07070a]/80 backdrop-blur-md border border-[#c5a059]/40 text-[10px] font-mono-telemetry text-[#c5a059] uppercase tracking-widest">
                FACILITY DESIGNATION: AIM-CITADEL-ALPHA
              </div>
            </div>

            {/* Header Column */}
            <div className="lg:col-span-5 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1f1f2c]">
              <div>
                <span className="text-xs font-mono-telemetry text-[#8c6d32] uppercase tracking-widest block">
                  SUBTERRANEAN ROBOTIC THEATER
                </span>
                <h3 className="text-2xl font-serif-luxury text-[#f0f0f5] font-semibold mt-2">
                  The Sovereign Surgical Citadel
                </h3>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono-telemetry text-[#a5a5b8]">
                  <span className="px-2.5 py-1 bg-[#141420] border border-[#252536]">Class-100 Cleanroom</span>
                  <span className="px-2.5 py-1 bg-[#141420] border border-[#252536]">7-Tesla Intra-Op MRI</span>
                  <span className="px-2.5 py-1 bg-[#141420] border border-[#252536]">ECMO Continuous Standby</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#181824] flex items-center justify-between text-xs font-mono-telemetry text-[#767688]">
                <span>SOVEREIGN ARCHIVE ID</span>
                <span className="text-[#c5a059]">VOL-SURG-8902</span>
              </div>
            </div>
          </div>

          {/* MANDATORY 100+ WORD RICH DESCRIPTION CONTAINER */}
          <div className="p-8 bg-[#09090d] border-t border-[#1a1a24]">
            <span className="text-[11px] font-mono-telemetry text-[#c5a059] uppercase tracking-wider block mb-2">
              // ARCHITECTURAL & CLINICAL PROFILE [MANDATORY CONTEXT SPECIFICATION]
            </span>
            <p className="text-xs sm:text-sm text-[#9292a4] leading-relaxed font-light text-justify">
              Carved sixty meters into the monolithic basalt bedrock of AEGIS Island, the Sovereign Surgical Citadel provides an absolute sanctuary for life-extension interventions, autologous stem-cell expansion, and micro-vascular tissue restoration. The facility operates under negative-pressure HEPA-carbon filtered laminar airflow, cycling atmospheric scrubbers twenty-six times per hour to achieve Class-100 sterile particulate standards. Intra-operative dual-source photon-counting computed tomography and 7-Tesla whole-body magnetic resonance imaging permit sub-millimeter precision during micro-robotic vascular realignments. Because the citadel is entirely powered by isolated geothermal heat exchangers and backed by triple-redundant flywheel kinetic generators, surgical operations remain impervious to external weather disturbances, geopolitical disruptions, or terrestrial grid instabilities. More than forty distinguished surgical fellows and clinical specialists reside within the immediate compound, guaranteeing uninterrupted twenty-four-hour physiological oversight for all recovering patrons.
            </p>
          </div>
        </div>

        {/* Structured Row 2: Overwater Sovereign Recovery Lagoon */}
        <div className="border border-[#1f1f2c] bg-[#0c0c12] rounded-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Media Placeholder Box */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 bg-[#12121c] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80" 
                alt="AEGIS Overwater Sovereign Recovery Lagoon"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#07070a]/80 backdrop-blur-md border border-[#c5a059]/40 text-[10px] font-mono-telemetry text-[#c5a059] uppercase tracking-widest">
                FACILITY DESIGNATION: AIM-LAGOON-BETA
              </div>
            </div>

            {/* Header Column */}
            <div className="lg:col-span-5 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1f1f2c]">
              <div>
                <span className="text-xs font-mono-telemetry text-[#8c6d32] uppercase tracking-widest block">
                  EPIGENETIC CONVALESCENCE COMPOUND
                </span>
                <h3 className="text-2xl font-serif-luxury text-[#f0f0f5] font-semibold mt-2">
                  The Overwater Recovery Lagoon
                </h3>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono-telemetry text-[#a5a5b8]">
                  <span className="px-2.5 py-1 bg-[#141420] border border-[#252536]">Circadian Pink-Noise</span>
                  <span className="px-2.5 py-1 bg-[#141420] border border-[#252536]">4°C Seawater Cryo-Plunge</span>
                  <span className="px-2.5 py-1 bg-[#141420] border border-[#252536]">Faraday Shielded Study</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#181824] flex items-center justify-between text-xs font-mono-telemetry text-[#767688]">
                <span>SOVEREIGN ARCHIVE ID</span>
                <span className="text-[#c5a059]">VOL-LAGOON-3411</span>
              </div>
            </div>
          </div>

          {/* MANDATORY 100+ WORD RICH DESCRIPTION CONTAINER */}
          <div className="p-8 bg-[#09090d] border-t border-[#1a1a24]">
            <span className="text-[11px] font-mono-telemetry text-[#c5a059] uppercase tracking-wider block mb-2">
              // ARCHITECTURAL & CLINICAL PROFILE [MANDATORY CONTEXT SPECIFICATION]
            </span>
            <p className="text-xs sm:text-sm text-[#9292a4] leading-relaxed font-light text-justify">
              Suspended over pristine coral flats protected by outer barrier reefs, the Overwater Recovery Lagoon consists of twelve private sovereign pavilions designed for the post-procedure convalescence phase. Built from untreated African teak, volcanic basalt stone, and low-emissivity smart glass, each dwelling integrates a continuous seawater cryo-plunge pool maintained at exactly 4°C, flanked by Finnish dry cedar thermo-suites. The surrounding lagoon water is biologically replenished twice daily through natural tidal surges filtered by natural macro-algae beds. Acoustic insulation baffles limit internal sound levels to under twenty-five decibels, while circadian spectral light fixtures mimic the exact solar angle of the equatorial Pacific to stimulate deep delta-wave restorative sleep. Attending clinical orderlies access each pavilion via underwater glass corridors or silent electric water-tenders, ensuring that patient rest is preserved in total, undisturbed sovereign majesty.
            </p>
          </div>
        </div>
      </section>

      {/* Sovereign Pillars Grid */}
      <section className="border-t border-[#1b1b26] bg-[#08080c] py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono-telemetry text-[#c5a059] uppercase tracking-widest block mb-2">
              // SOVEREIGN FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-3xl font-serif-luxury font-light text-[#f0f0f5]">
              The Core Tenants of AEGIS Primacy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#1e1e2c] bg-[#0c0c12]/90 rounded-sm obsidian-card-hover">
              <div className="w-12 h-12 rounded-sm border border-[#c5a059]/40 bg-[#12121c] flex items-center justify-center mb-6 text-[#c5a059]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl text-[#f0f0f5] font-semibold mb-3">
                Non-Municipal Sovereignty
              </h3>
              <p className="text-xs text-[#8e8e9e] leading-relaxed">
                Operating beyond national court systems and bureaucratic drug lags, AEGIS provides unfettered clinical access to the latest genetic Yamanaka vectors, autologous stem cell expansions, and personalized cellular therapies under our exclusive sovereign charter.
              </p>
            </div>

            <div className="p-8 border border-[#1e1e2c] bg-[#0c0c12]/90 rounded-sm obsidian-card-hover">
              <div className="w-12 h-12 rounded-sm border border-[#c5a059]/40 bg-[#12121c] flex items-center justify-center mb-6 text-[#c5a059]">
                <Dna className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl text-[#f0f0f5] font-semibold mb-3">
                Genomic & Epigenetic Mastery
              </h3>
              <p className="text-xs text-[#8e8e9e] leading-relaxed">
                Utilizing ultra-deep 100x whole-genome sequencing and daily metabolic mass spectrometry, our Consilium calibrates micro-dosed peptide infusions and hyperbaric cycles that reverse cellular aging markers by an audited average of 7.2 biological years.
              </p>
            </div>

            <div className="p-8 border border-[#1e1e2c] bg-[#0c0c12]/90 rounded-sm obsidian-card-hover">
              <div className="w-12 h-12 rounded-sm border border-[#c5a059]/40 bg-[#12121c] flex items-center justify-center mb-6 text-[#c5a059]">
                <Anchor className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl text-[#f0f0f5] font-semibold mb-3">
                Absolute Air-Gapped Discretion
              </h3>
              <p className="text-xs text-[#8e8e9e] leading-relaxed">
                Zero cloud syncing, zero public telemetry, and a complete ban on commercial mobile handsets. All diagnostic ledgers are cryptographically air-gapped and handed to patrons on physical cold ledgers or incinerated to DoD standards upon departure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sovereign Prerequisite Call to Action */}
      <section className="py-20 px-6 sm:px-12 border-t border-[#1b1b26] bg-gradient-to-b from-[#0a0a0f] to-[#050508] text-center">
        <div className="max-w-4xl mx-auto p-10 sm:p-14 border border-[#c5a059]/30 bg-[#0d0d14] rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#c5a059]/5 blur-3xl pointer-events-none"></div>

          <span className="font-mono-telemetry text-xs text-[#c5a059] uppercase tracking-widest block mb-2">
            INITIATE ADMISSION SEQUENCE
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-luxury text-[#f4f4f8] font-bold">
            Access The Sovereign Order Gateway
          </h2>
          <p className="text-xs sm:text-sm text-[#9e9eb0] max-w-xl mx-auto mt-4 leading-relaxed">
            Prior to entering the five-stage registration tunnel, all applicants must review our strict prerequisite guidelines, 
            financial escrow requirements, and international sovereign background screening standards.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => onNavigate('order')}
              className="px-10 py-4 bg-gradient-to-r from-[#c5a059] to-[#8c6d32] text-[#07070a] font-serif-luxury text-xs tracking-[0.2em] uppercase font-bold hover:from-[#dfc282] hover:to-[#a6823c] transition-all shadow-[0_0_25px_rgba(197,160,89,0.3)]"
            >
              Review Prerequisite & Order Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
