import React, { useState, useEffect } from 'react';
import { ViewRoute, CoGuest } from '../types';
import { 
  ACCOMMODATION_OPTIONS, 
  PHYSICIAN_TIER_OPTIONS, 
  GLOBAL_SERVICE_TIERS 
} from '../data/privilegesData';
import { 
  getStoredCoGuests, 
  setStoredCoGuests, 
  getStoredConfig, 
  setStoredConfig, 
  OrderConfig 
} from '../utils/storage';
import { 
  Lock, 
  Users, 
  UserPlus, 
  ArrowRight, 
  AlertTriangle, 
  HeartPulse, 
  Brain, 
  Sparkles,
  BedDouble,
  Stethoscope,
  Crown
} from 'lucide-react';

interface Part2ViewProps {
  onNavigate: (route: ViewRoute) => void;
}

export const Part2View: React.FC<Part2ViewProps> = ({ onNavigate }) => {
  const [headCount, setHeadCount] = useState<number>(1);
  const [selectedAccommodation, setSelectedAccommodation] = useState<string>('cliffside-villa');
  const [selectedPhysician, setSelectedPhysician] = useState<string>('consilium-tier');
  const [selectedServiceTier, setSelectedServiceTier] = useState<string>('tier-grand');
  const [stayDurationDays, setStayDurationDays] = useState<number>(7);

  // Co-guests dynamic array
  const [coGuests, setCoGuests] = useState<CoGuest[]>([]);
  const [validationError, setValidationError] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const existingConfig = getStoredConfig();
    if (existingConfig) {
      setHeadCount(existingConfig.headCount || 1);
      setSelectedAccommodation(existingConfig.accommodationId || 'cliffside-villa');
      setSelectedPhysician(existingConfig.physicianTierId || 'consilium-tier');
      setSelectedServiceTier(existingConfig.serviceTierId || 'tier-grand');
      setStayDurationDays(existingConfig.stayDurationDays || 7);
    }

    const existingGuests = getStoredCoGuests();
    if (existingGuests && existingGuests.length > 0) {
      setCoGuests(existingGuests);
    }
  }, []);

  // Synchronize co-guests array when headCount changes
  useEffect(() => {
    const neededCoGuestsCount = Math.max(0, headCount - 1);
    setCoGuests(prev => {
      const updated: CoGuest[] = [];
      for (let i = 0; i < neededCoGuestsCount; i++) {
        if (prev[i]) {
          updated.push({ ...prev[i], guestNumber: i + 1 });
        } else {
          updated.push({
            id: `guest-${i + 1}-${Date.now()}`,
            guestNumber: i + 1,
            name: '',
            address: '',
            age: '',
            contact: '',
            adultVerified: true,
            infectiousDiseaseStatus: false,
            mentalWellnessStatus: false,
            specializedCareStatus: false
          });
        }
      }
      return updated;
    });
  }, [headCount]);

  const handleGuestFieldChange = (index: number, field: keyof CoGuest, value: any) => {
    setCoGuests(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
    setValidationError('');
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate co-guests if headCount > 1
    if (headCount > 1) {
      for (let i = 0; i < coGuests.length; i++) {
        const guest = coGuests[i];
        if (!guest.name.trim()) {
          setValidationError(`Please supply full legal name for Co-Guest Number ${i + 1}.`);
          return;
        }
        if (!guest.age || parseInt(guest.age) < 1) {
          setValidationError(`Please specify valid age for Co-Guest Number ${i + 1}.`);
          return;
        }
      }
    }

    // Save config into local storage
    const newConfig: OrderConfig = {
      headCount,
      accommodationId: selectedAccommodation,
      physicianTierId: selectedPhysician,
      serviceTierId: selectedServiceTier,
      stayDurationDays
    };
    setStoredConfig(newConfig);

    // Save coGuests into aegis_co_guests_list
    setStoredCoGuests(coGuests);

    // Route to Part 3
    onNavigate('part3');
  };

  // Dynamic billing flag status indicator
  const hasMentalWellnessFlag = coGuests.some(g => g.mentalWellnessStatus);
  const hasSpecializedCareFlag = coGuests.some(g => g.specializedCareStatus);

  return (
    <div className="w-full min-h-[85vh] py-16 px-6 sm:px-12 max-w-5xl mx-auto">
      {/* Funnel Stage Header */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#c5a059]/40 bg-[#0e0e14] mb-3">
          <Lock className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="text-[11px] font-mono-telemetry text-[#c5a059] uppercase tracking-widest">
            TUNNEL STAGE 2 &bull; CRITERIA & GUEST MATRIX
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#f4f4f8]">
          Part 2: Clinical Criteria & Dynamic Guest Injection
        </h1>
        <p className="text-xs sm:text-sm text-[#8c8c9e] mt-2 max-w-2xl mx-auto leading-relaxed">
          Configure clinical parameters, select residential accommodations, and inject secondary co-guests. 
          Dynamic risk flags automatically set programmatic compounding billing rules.
        </p>

        {/* Stepper indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-8 h-1.5 rounded-xs bg-[#c5a059]"></div>
          <div className="w-8 h-1.5 rounded-xs bg-[#c5a059]"></div>
          <div className="w-8 h-1.5 rounded-xs bg-[#222230]"></div>
          <div className="w-8 h-1.5 rounded-xs bg-[#222230]"></div>
          <div className="w-8 h-1.5 rounded-xs bg-[#222230]"></div>
        </div>
      </div>

      <form onSubmit={handleNext} className="space-y-12">
        {/* SECTION 1: Base Fields Selection */}
        <div className="border border-[#1f1f2e] bg-[#0c0c14] p-8 sm:p-10 rounded-sm shadow-xl space-y-8">
          <div>
            <span className="text-xs font-mono-telemetry text-[#c5a059] uppercase tracking-widest block mb-1">
              FIELD 1 OF 4 &bull; TOTAL RETINUE
            </span>
            <h2 className="text-xl font-serif-luxury text-[#f4f4f8] font-semibold">
              Total Retinue Head Count
            </h2>
            <p className="text-xs text-[#8e8e9e] mt-1">
              Selecting more than 1 patron dynamically triggers the native JS DOM sub-form loop below.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {[1, 2, 3, 4, 5, 6].map((count) => (
                <button
                  type="button"
                  key={count}
                  onClick={() => setHeadCount(count)}
                  className={`w-12 h-12 rounded-sm border font-mono-telemetry text-sm font-bold transition-all cursor-pointer ${
                    headCount === count
                      ? 'border-[#c5a059] bg-[#c5a059]/20 text-[#f7e7c4] shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                      : 'border-[#262636] bg-[#12121a] text-[#8e8e9e] hover:border-[#444458]'
                  }`}
                >
                  {count}
                </button>
              ))}
              <span className="text-xs text-[#727284] font-mono-telemetry ml-2">
                {headCount === 1 ? 'Primary Applicant Only' : `${headCount - 1} Co-Guest(s) will be injected below`}
              </span>
            </div>
          </div>

          {/* Accommodation Selection */}
          <div className="pt-6 border-t border-[#1a1a26]">
            <div className="flex items-center gap-2 mb-4">
              <BedDouble className="w-4 h-4 text-[#c5a059]" />
              <h3 className="text-sm font-mono-telemetry uppercase tracking-wider text-[#c5a059]">
                Accommodation Category
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ACCOMMODATION_OPTIONS.map((acc) => (
                <div
                  key={acc.id}
                  onClick={() => setSelectedAccommodation(acc.id)}
                  className={`p-5 rounded-sm border cursor-pointer transition-all ${
                    selectedAccommodation === acc.id
                      ? 'border-[#c5a059] bg-[#141420] shadow-[0_0_20px_rgba(197,160,89,0.15)]'
                      : 'border-[#222230] bg-[#0e0e16] hover:border-[#38384e]'
                  }`}
                >
                  <span className="font-mono-telemetry text-xs text-[#c5a059] font-bold block">
                    ${acc.pricePerNight.toLocaleString()} / Night
                  </span>
                  <h4 className="font-serif-luxury text-base text-[#f0f0f5] font-semibold mt-1">
                    {acc.title}
                  </h4>
                  <p className="text-xs text-[#828294] mt-2 line-clamp-3 leading-relaxed">
                    {acc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Attending Physician Tier */}
          <div className="pt-6 border-t border-[#1a1a26]">
            <div className="flex items-center gap-2 mb-4">
              <Stethoscope className="w-4 h-4 text-[#c5a059]" />
              <h3 className="text-sm font-mono-telemetry uppercase tracking-wider text-[#c5a059]">
                Attending Physician Council Tier
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PHYSICIAN_TIER_OPTIONS.map((phy) => (
                <div
                  key={phy.id}
                  onClick={() => setSelectedPhysician(phy.id)}
                  className={`p-5 rounded-sm border cursor-pointer transition-all ${
                    selectedPhysician === phy.id
                      ? 'border-[#c5a059] bg-[#141420] shadow-[0_0_20px_rgba(197,160,89,0.15)]'
                      : 'border-[#222230] bg-[#0e0e16] hover:border-[#38384e]'
                  }`}
                >
                  <span className="font-mono-telemetry text-xs text-[#c5a059] font-bold block">
                    ${phy.pricePerDay.toLocaleString()} / Day
                  </span>
                  <h4 className="font-serif-luxury text-base text-[#f0f0f5] font-semibold mt-1">
                    {phy.title}
                  </h4>
                  <p className="text-xs text-[#828294] mt-2 line-clamp-3 leading-relaxed">
                    {phy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Global Service Tier */}
          <div className="pt-6 border-t border-[#1a1a26]">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-4 h-4 text-[#c5a059]" />
              <h3 className="text-sm font-mono-telemetry uppercase tracking-wider text-[#c5a059]">
                Global Service Tier
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {GLOBAL_SERVICE_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  onClick={() => setSelectedServiceTier(tier.id)}
                  className={`p-5 rounded-sm border cursor-pointer transition-all ${
                    selectedServiceTier === tier.id
                      ? 'border-[#c5a059] bg-[#141420] shadow-[0_0_20px_rgba(197,160,89,0.15)]'
                      : 'border-[#222230] bg-[#0e0e16] hover:border-[#38384e]'
                  }`}
                >
                  <span className="font-mono-telemetry text-xs text-[#c5a059] font-bold block">
                    ${tier.basePrice.toLocaleString()} Base
                  </span>
                  <h4 className="font-serif-luxury text-base text-[#f0f0f5] font-semibold mt-1">
                    {tier.title}
                  </h4>
                  <p className="text-xs text-[#828294] mt-2 line-clamp-3 leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2 & 2.2: DYNAMIC JS DOM GUEST INJECTION LOOP */}
        {headCount > 1 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#222230] pb-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#c5a059]" />
                <div>
                  <h3 className="text-xl font-serif-luxury text-[#f4f4f8] font-semibold">
                    Dynamic Guest Registration Loop ({coGuests.length} Co-Guests)
                  </h3>
                  <p className="text-xs text-[#8c8c9e]">
                    Sequential sub-forms automatically injected by DOM listener based on Head Count = {headCount}.
                  </p>
                </div>
              </div>

              {(hasMentalWellnessFlag || hasSpecializedCareFlag) && (
                <div className="px-3 py-1 bg-[#241708] border border-[#c5a059] rounded-xs text-[11px] font-mono-telemetry text-[#dfc282] animate-pulse">
                  DYNAMIC COMPOUND BILLING ACTIVE
                </div>
              )}
            </div>

            {validationError && (
              <div className="p-4 bg-[#2b1212] border border-[#ff5555]/40 text-[#ffb0b0] text-xs flex items-center gap-3 rounded-xs font-mono-telemetry">
                <AlertTriangle className="w-4 h-4 text-[#ff5555] shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {coGuests.map((guest, idx) => (
              <div 
                key={guest.id || idx}
                className="border border-[#262638] bg-[#0d0d16] p-6 sm:p-8 rounded-sm relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#1c1c28] mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1b1b26] border border-[#c5a059] text-[11px] font-mono-telemetry text-[#c5a059] flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <h4 className="font-serif-luxury text-base text-[#f0f0f5] font-semibold">
                      Co-Guest Number {idx + 1}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono-telemetry text-[#767688]">
                    CO-GUEST SERIAL #{idx + 1}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-mono-telemetry uppercase text-[#c5a059] mb-1.5">
                      Legal Full Name *
                    </label>
                    <input
                      type="text"
                      value={guest.name}
                      onChange={(e) => handleGuestFieldChange(idx, 'name', e.target.value)}
                      placeholder="e.g. Lady Vivienne Vance"
                      className="w-full bg-[#12121b] border border-[#222230] focus:border-[#c5a059] focus:outline-none text-xs text-[#f0f0f5] px-3.5 py-2.5 rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-telemetry uppercase text-[#c5a059] mb-1.5">
                      Age *
                    </label>
                    <input
                      type="number"
                      value={guest.age}
                      onChange={(e) => handleGuestFieldChange(idx, 'age', e.target.value)}
                      placeholder="e.g. 38"
                      className="w-full bg-[#12121b] border border-[#222230] focus:border-[#c5a059] focus:outline-none text-xs text-[#f0f0f5] px-3.5 py-2.5 rounded-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-[11px] font-mono-telemetry uppercase text-[#88889a] mb-1.5">
                      Residential Address
                    </label>
                    <input
                      type="text"
                      value={guest.address}
                      onChange={(e) => handleGuestFieldChange(idx, 'address', e.target.value)}
                      placeholder="City, Sovereign Territory"
                      className="w-full bg-[#12121b] border border-[#222230] focus:border-[#c5a059] focus:outline-none text-xs text-[#f0f0f5] px-3.5 py-2.5 rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-telemetry uppercase text-[#88889a] mb-1.5">
                      Contact Email / Mobile
                    </label>
                    <input
                      type="text"
                      value={guest.contact}
                      onChange={(e) => handleGuestFieldChange(idx, 'contact', e.target.value)}
                      placeholder="contact@sovereign.ch"
                      className="w-full bg-[#12121b] border border-[#222230] focus:border-[#c5a059] focus:outline-none text-xs text-[#f0f0f5] px-3.5 py-2.5 rounded-xs"
                    />
                  </div>
                </div>

                {/* Specific Checkboxes */}
                <div className="p-4 bg-[#101018] border border-[#1e1e2c] rounded-xs space-y-3">
                  <span className="text-[10px] font-mono-telemetry text-[#8c6d32] uppercase tracking-wider block">
                    CLINICAL & BILLING FLAG AUDIT
                  </span>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={guest.infectiousDiseaseStatus}
                      onChange={(e) => handleGuestFieldChange(idx, 'infectiousDiseaseStatus', e.target.checked)}
                      className="accent-[#c5a059] w-4 h-4 cursor-pointer"
                    />
                    <span className="text-xs text-[#b0b0c0] group-hover:text-white">
                      Infectious Disease Status Flag (Triggers pre-arrival 48-hr quarantine isolation suite)
                    </span>
                  </label>

                  {/* Mental Wellness Status Flag: Compounding billing flag */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={guest.mentalWellnessStatus}
                      onChange={(e) => handleGuestFieldChange(idx, 'mentalWellnessStatus', e.target.checked)}
                      className="accent-[#c5a059] w-4 h-4 cursor-pointer"
                    />
                    <div className="text-xs">
                      <span className="text-[#b0b0c0] group-hover:text-white font-medium">
                        Mental Wellness Protocol Status Flag
                      </span>
                      <span className="text-[11px] font-mono-telemetry text-[#dfc282] block">
                        Requires dedicated psychiatric sovereign orderly. Programmatic surcharge: +25% compounding in Part 5.
                      </span>
                    </div>
                  </label>

                  {/* Specialized Disability/Care Status Flag: Compounding billing flag */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={guest.specializedCareStatus}
                      onChange={(e) => handleGuestFieldChange(idx, 'specializedCareStatus', e.target.checked)}
                      className="accent-[#c5a059] w-4 h-4 cursor-pointer"
                    />
                    <div className="text-xs">
                      <span className="text-[#b0b0c0] group-hover:text-white font-medium">
                        Specialized Disability / Acute Intensive Care Status Flag
                      </span>
                      <span className="text-[11px] font-mono-telemetry text-[#dfc282] block">
                        Requires specialized mobility hydrofoil & dual acute nurse escort. Programmatic surcharge: +35% compounding in Part 5.
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dynamic Billing Impact Warning Banner */}
        {(hasMentalWellnessFlag || hasSpecializedCareFlag) && (
          <div className="p-5 bg-[#1a1208] border border-[#c5a059]/60 rounded-xs flex items-start gap-4">
            <AlertTriangle className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
            <div className="text-xs text-[#e8d5b5] leading-relaxed">
              <strong className="text-[#f7e7c4] block mb-1">
                BILLING FLAGS COMMITTED TO COMPILATION MATRIX
              </strong>
              One or more co-guests have active clinical status flags. In accordance with AEGIS Sovereign Statutes, 
              these flags trigger specialized sovereign orderlies and ICU infrastructure. The resulting total pricing 
              will be <strong>exponentially compounded</strong> and verified in Part 5.
            </div>
          </div>
        )}

        {/* Submit Actions */}
        <div className="pt-6 border-t border-[#1a1a26] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] font-mono-telemetry text-[#68687a]">
            Serializing into <code className="text-[#c5a059]">aegis_co_guests_list</code>
          </span>

          <button
            type="submit"
            className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-[#c5a059] to-[#9e7d38] text-[#07070a] font-serif-luxury text-xs tracking-[0.2em] uppercase font-bold hover:from-[#dfc282] hover:to-[#b08d42] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(197,160,89,0.3)] cursor-pointer"
          >
            <span>Proceed to Part 3: Royal Privileges</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
