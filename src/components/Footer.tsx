import React from 'react';
import { ShieldCheck, Anchor, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050507] border-t border-[#1a1a24] py-10 px-6 sm:px-12 text-[#8e8e9c] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#c5a059]/40 flex items-center justify-center bg-[#0c0c12]">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
          </div>
          <div className="text-left">
            <span className="font-serif-luxury text-sm tracking-[0.2em] text-[#e2e2e8] block">
              AEGIS ISLAND MEDICAL
            </span>
            <span className="text-[10px] tracking-widest uppercase font-mono-telemetry text-[#8c6d32]">
              Sovereign Offshore Sanctuary &bull; 4°11&apos;32&quot;S 154°22&apos;09&quot;E
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#a0a0b2] font-mono-telemetry">
          <span className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#c5a059]" /> Zero-Cloud Air-Gapped
          </span>
          <span className="flex items-center gap-1.5">
            <Anchor className="w-3.5 h-3.5 text-[#c5a059]" /> Sovereign Naval Escort
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#14141c] text-center">
        <p className="text-xs sm:text-sm tracking-wide text-[#b5b5c8] font-medium selection:bg-[#c5a059]/40">
          Copyright 2026 AEGIS Island Medical | Authorized By Rayaan Tasnim | Powered by IDAI Universe.
        </p>
        <p className="text-[10px] text-[#5e5e70] mt-2 font-mono-telemetry uppercase tracking-wider">
          Classified Sovereign Enclave &bull; Strictly Sovereign Jurisdiction &bull; All Maritime Rights Reserved
        </p>
      </div>
    </footer>
  );
};
