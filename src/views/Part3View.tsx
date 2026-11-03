import React, { useState, useEffect } from 'react';
import { ViewRoute } from '../types';
import { ROYAL_PRIVILEGES_LIST } from '../data/privilegesData';
import { getStoredServices, setStoredServices } from '../utils/storage';
import { Lock, CheckSquare, Square, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface Part3ViewProps {
  onNavigate: (route: ViewRoute) => void;
}

export const Part3View: React.FC<Part3ViewProps> = ({ onNavigate }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const existing = getStoredServices();
    if (existing && existing.length > 0) {
      setSelectedServices(existing);
    } else {
      // Default recommended sovereign options
      setSelectedServices(['priv-01', 'priv-02', 'priv-03']);
    }
  }, []);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    // Commit checked array to local storage under aegis_selected_services
    setStoredServices(selectedServices);
    onNavigate('part4');
  };

  const totalPrivilegesCost = selectedServices.reduce((sum, sId) => {
    const item = ROYAL_PRIVILEGES_LIST.find(p => p.id === sId);
    return sum + (item ? item.price : 0);
  }, 0);

  return (
    <div className="w-full min-h-[85vh] py-16 px-6 sm:px-12 max-w-5xl mx-auto">
      {/* Funnel Stage Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#c5a059]/40 bg-[#0e0e14] mb-3">
          <Lock className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="text-[11px] font-mono-telemetry text-[#c5a059] uppercase tracking-widest">
            TUNNEL STAGE 3 OF 5 &bull; PRIVILEGES MATRIX
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#f4f4f8]">
          Part 3: Royal Privileges Checklist
        </h1>
        <p className="text-xs sm:text-sm text-[#8c8c9e] mt-2 max-w-xl mx-auto leading-relaxed">
          Select clinical and enclave amenities to complement your sovereign residency.
        </p>

        {/* Stepper indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-8 h-1.5 rounded-xs bg-[#c5a059]"></div>
          <div className="w-8 h-1.5 rounded-xs bg-[#c5a059]"></div>
          <div className="w-8 h-1.5 rounded-xs bg-[#c5a059]"></div>
          <div className="w-8 h-1.5 rounded-xs bg-[#222230]"></div>
          <div className="w-8 h-1.5 rounded-xs bg-[#222230]"></div>
        </div>
      </div>

      {/* MANDATORY TOP NOTICE BANNER */}
      <div className="mb-10 p-6 bg-gradient-to-r from-[#14120a] via-[#1a170e] to-[#14120a] border border-[#c5a059] rounded-sm text-center shadow-[0_0_25px_rgba(197,160,89,0.12)]">
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#262010] border border-[#c5a059] text-[#c5a059] mb-2">
          <Sparkles className="w-4 h-4" />
        </div>
        <h2 className="font-serif-luxury text-base sm:text-lg text-[#f4e8cf] font-semibold tracking-wide">
          &ldquo;All registered guests are eligible to equally enjoy all the privileges checked in this service list.&rdquo;
        </h2>
        <span className="text-[11px] font-mono-telemetry text-[#b0965e] uppercase tracking-widest block mt-1">
          Sovereign Parity Ordinance &bull; Shared Retinue Entitlement
        </span>
      </div>

      {/* Checklist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {ROYAL_PRIVILEGES_LIST.map((item) => {
          const isSelected = selectedServices.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => toggleService(item.id)}
              className={`p-6 rounded-sm border cursor-pointer transition-all duration-200 flex flex-col justify-between group ${
                isSelected 
                  ? 'border-[#c5a059] bg-[#141420] shadow-[0_0_20px_rgba(197,160,89,0.12)]' 
                  : 'border-[#222230] bg-[#0c0c14] hover:border-[#3a3a4e] hover:bg-[#101018]'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-5 h-5 rounded-xs flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#c5a059] text-[#07070a]' : 'border border-[#444458] text-transparent'
                    }`}>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[10px] font-mono-telemetry uppercase tracking-wider text-[#8c6d32]">
                      {item.badge}
                    </span>
                  </div>

                  <span className="font-mono-telemetry text-sm font-bold text-[#c5a059]">
                    +${item.price.toLocaleString()}
                  </span>
                </div>

                <h3 className={`font-serif-luxury text-base font-semibold mt-1 transition-colors ${
                  isSelected ? 'text-[#f4e8cf]' : 'text-[#f0f0f5] group-hover:text-[#c5a059]'
                }`}>
                  {item.name}
                </h3>

                <p className="text-xs text-[#828294] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1a1a26] flex items-center justify-between text-[11px] font-mono-telemetry text-[#68687a]">
                <span>STATUS: {isSelected ? 'INCLUDED IN RETINUE' : 'CLICK TO ADD'}</span>
                <span className="text-[#c5a059]">{isSelected ? 'ACTIVE' : 'OPTIONAL'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Running Subtotal Bar */}
      <div className="p-6 bg-[#0e0e16] border border-[#262638] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-[10px] font-mono-telemetry uppercase text-[#8c6d32] tracking-wider block">
            SELECTED ROYAL PRIVILEGES
          </span>
          <span className="text-sm font-serif-luxury text-[#e2e2e8]">
            {selectedServices.length} Entitlements Selected
          </span>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono-telemetry text-[#767688] block">Privileges Subtotal:</span>
          <span className="font-mono-telemetry text-xl font-bold text-[#c5a059]">
            ${totalPrivilegesCost.toLocaleString()} USD
          </span>
        </div>
      </div>

      {/* Bottom Navigation Actions */}
      <div className="pt-6 border-t border-[#1a1a26] flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[11px] font-mono-telemetry text-[#68687a]">
          Committing array to <code className="text-[#c5a059]">aegis_selected_services</code>
        </span>

        <button
          onClick={handleNext}
          className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-[#c5a059] to-[#9e7d38] text-[#07070a] font-serif-luxury text-xs tracking-[0.2em] uppercase font-bold hover:from-[#dfc282] hover:to-[#b08d42] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(197,160,89,0.3)] cursor-pointer"
        >
          <span>Save Privileges & Enter Part 4 Consent Wizard</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
