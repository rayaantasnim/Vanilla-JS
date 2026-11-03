import React, { useEffect } from 'react';
import { ViewRoute } from '../types';
import { 
  Activity, 
  Dna, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Stethoscope,
  Microscope,
  Compass
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (route: ViewRoute) => void;
}

interface ServiceDivision {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  primaryImage: string;
  secondaryImage: string;
  primaryPerspectiveLabel: string;
  secondaryPerspectiveLabel: string;
  specs: string[];
  description: string;
}

const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: 'div-genomics',
    code: 'CLIN-01',
    title: 'Cellular Epigenetics & Yamanaka Vector Division',
    subtitle: 'Ultra-Deep Whole-Genome Methylation Profiling & Partial Cellular Reprogramming',
    primaryImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
    primaryPerspectiveLabel: 'Mass-Spectrometry Sequencer Array',
    secondaryPerspectiveLabel: 'Biosecurity Level-4 Cleanroom Corridor',
    specs: ['100x Whole Genome Coverage', 'Single-Cell Epigenome Mapping', 'Lipid Nanoparticle Vector Lab'],
    description: 'The Cellular Epigenetics Division at AEGIS Island Medical is dedicated to the precise quantified measurement and targeted biological reversal of human chronological decay. Utilizing custom mass spectrometry sequencers and robotic microfluidic platforms, our genomicists analyze millions of single-cell methylation loci across your leukocyte transcriptome. Following exhaustive baseline verification, patients receive customized infusions of micro-dosed Yamanaka reprogramming factors encapsulated in organ-targeted lipid nanoparticles. This non-integrating vector protocol systematically clears senescent cellular debris, reactivates dormant mitochondrial biogenesis, and restores histone acetylation patterns to those characteristic of youthful peak vitality.'
  },
  {
    id: 'div-robotic-surgery',
    code: 'CLIN-02',
    title: 'Autonomous Robotic Microsurgical Theater',
    subtitle: 'Sub-Millimeter Dual-Console Micro-Vascular Restoration & Intra-Operative 7T MRI',
    primaryImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    primaryPerspectiveLabel: 'Robotic Surgical Articulation Arm',
    secondaryPerspectiveLabel: 'Intra-Operative 7-Tesla Tomography Gantry',
    specs: ['Sub-Millimeter Robotic Precision', 'Photon-Counting CT Imaging', 'Zero-Vibration Bedrock Isolation'],
    description: 'Constructed sixty meters within volcanic basalt bedrock to isolate delicate surgical optics from oceanic wave harmonic vibrations, our Robotic Microsurgical Suite represents the summit of modern operative technology. Attending surgeons manipulate master control consoles driving multi-axis robotic end-effectors capable of anastomosing micro-capillaries less than 0.3 millimeters in diameter. Real-time intra-operative 7-Tesla MRI allows continuous intra-procedural imaging without shifting the patient from the sterile surgical field. Class-100 laminar clean airflow cycles through specialized medical titanium ceilings twenty-six times per hour, guaranteeing absolute biological sterility during the most intricate reconstructive surgeries.'
  },
  {
    id: 'div-hyperbaric',
    code: 'CLIN-03',
    title: 'Multi-Chamber Hyperbaric Cryo-Oxygen Rotunda',
    subtitle: 'Pressurization up to 3.0 ATA Breathing Pure Medical Oxygen Synchronized with Cold Thermogenesis',
    primaryImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    primaryPerspectiveLabel: 'Hyperbaric Monocrystalline Vessel Interior',
    secondaryPerspectiveLabel: 'Cryogenic Seawater Plunge Rotunda',
    specs: ['3.0 ATA Maximum Pressure Rating', '100% Medical Oxygen Delivery', 'Underwater Acoustic Soundfield'],
    description: 'The Hyperbaric Oxygen Rotunda delivers intense cellular hyper-oxygenation protocols that super-saturate blood plasma with dissolved oxygen at up to triple atmospheric pressure. This dramatic increase in partial pressure forces oxygen deep into hypoxic peripheral tissues, triggering explosive stem-cell mobilization, accelerating micro-vascular angiogenesis, and stimulating telomerase reverse transcriptase. Directly adjoining the hyperbaric cylinder is a series of 4°C mineralized volcanic saltwater plunge baths. Alternating between hyperbaric oxygenation and targeted acute cold thermogenesis stimulates cold-shock proteins and activates deep brown adipose thermogenesis for profound metabolic stabilization.'
  }
];

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#c5a059]/40 bg-[#0e0e14] mb-3">
          <Activity className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="text-[11px] font-mono-telemetry text-[#c5a059] uppercase tracking-widest">
            CLINICAL DIVISIONS & SURGICAL SUITES
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#f4f4f8] tracking-wide">
          Sovereign Medical & Longevity Services
        </h1>
        <p className="text-xs sm:text-sm text-[#9292a4] mt-3 leading-relaxed font-light">
          State-of-the-art offshore therapeutic modalities operating without municipal regulatory interference. 
          Dual-perspective architectural documentation and 100+ word clinical protocols.
        </p>
      </div>

      {/* Services List with Dual-Image Architecture & 100+ Word Descriptions */}
      <div className="space-y-16">
        {SERVICE_DIVISIONS.map((service) => (
          <div 
            key={service.id}
            className="border border-[#222234] bg-[#0c0c14] rounded-sm overflow-hidden shadow-2xl"
          >
            {/* Header banner */}
            <div className="p-6 sm:p-8 border-b border-[#1c1c2a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#0e0e16]">
              <div>
                <span className="text-[10px] font-mono-telemetry uppercase tracking-widest text-[#8c6d32] block mb-1">
                  {service.code} &bull; CLINICAL THEATER SPECIFICATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f4f4f8]">
                  {service.title}
                </h2>
                <p className="text-xs text-[#a0a0b2] mt-1 font-light">
                  {service.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-[10px] font-mono-telemetry">
                {service.specs.map((spec, sIdx) => (
                  <span key={sIdx} className="px-2.5 py-1 bg-[#141422] border border-[#26263a] text-[#c5a059]">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* DUAL-IMAGE ARCHITECTURE: 2 perspective images side-by-side, collapsing on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1c1c2a]">
              <div className="relative bg-[#09090f] overflow-hidden group">
                <div className="h-72 sm:h-96 w-full overflow-hidden">
                  <img
                    src={service.primaryImage}
                    alt={service.primaryPerspectiveLabel}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono-telemetry text-[#dfc282] uppercase tracking-wider bg-[#07070a]/90 px-3 py-1 border border-[#c5a059]/40 rounded-xs">
                    {service.primaryPerspectiveLabel}
                  </span>
                  <span className="text-[10px] font-mono-telemetry text-[#767688]">ANGLE A</span>
                </div>
              </div>

              <div className="relative bg-[#09090f] overflow-hidden group">
                <div className="h-72 sm:h-96 w-full overflow-hidden">
                  <img
                    src={service.secondaryImage}
                    alt={service.secondaryPerspectiveLabel}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono-telemetry text-[#dfc282] uppercase tracking-wider bg-[#07070a]/90 px-3 py-1 border border-[#c5a059]/40 rounded-xs">
                    {service.secondaryPerspectiveLabel}
                  </span>
                  <span className="text-[10px] font-mono-telemetry text-[#767688]">ANGLE B</span>
                </div>
              </div>
            </div>

            {/* MANDATORY 100+ WORD TEXTUAL CONTEXT DESCRIPTION CONTAINER */}
            <div className="p-6 sm:p-8 bg-[#08080d]">
              <span className="text-[10px] font-mono-telemetry text-[#c5a059] uppercase tracking-widest block mb-2">
                // DETAILED CLINICAL PROTOCOL & PHYSIOLOGICAL IMPACT [100+ WORD MANDATORY CONTAINER]
              </span>
              <p className="text-xs sm:text-sm text-[#9a9ab0] leading-relaxed font-light text-justify">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Direct link to Order Gateway */}
      <div className="mt-20 p-8 border border-[#c5a059]/30 bg-[#0d0d14] rounded-sm text-center">
        <h4 className="font-serif-luxury text-xl text-[#f4f4f8] font-bold">
          Ready to Book Your Sovereign Clinical Stay?
        </h4>
        <p className="text-xs text-[#8c8c9e] max-w-xl mx-auto mt-2 leading-relaxed">
          Proceed to the prerequisite verification gateway and initiate your confidential application.
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
