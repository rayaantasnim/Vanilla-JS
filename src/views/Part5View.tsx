import React, { useState, useEffect } from 'react';
import { ViewRoute, ApplicantInfo, CoGuest } from '../types';
import { 
  getStoredApplicant, 
  getStoredCoGuests, 
  getStoredServices, 
  getStoredConfig, 
  computeBookingPrice, 
  setStoredCompletedOrder,
  PriceCompilation,
  OrderConfig
} from '../utils/storage';
import { 
  ACCOMMODATION_OPTIONS, 
  PHYSICIAN_TIER_OPTIONS, 
  GLOBAL_SERVICE_TIERS,
  ROYAL_PRIVILEGES_LIST
} from '../data/privilegesData';
import { 
  Lock, 
  Receipt, 
  ShieldCheck, 
  AlertTriangle, 
  Users, 
  Building2, 
  ArrowRight,
  FileText,
  CreditCard,
  Stamp
} from 'lucide-react';

interface Part5ViewProps {
  onNavigate: (route: ViewRoute) => void;
}

export const Part5View: React.FC<Part5ViewProps> = ({ onNavigate }) => {
  const [applicant, setApplicant] = useState<ApplicantInfo | null>(null);
  const [coGuests, setCoGuests] = useState<CoGuest[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [config, setConfig] = useState<OrderConfig>({
    headCount: 1,
    accommodationId: 'cliffside-villa',
    physicianTierId: 'consilium-tier',
    serviceTierId: 'tier-grand',
    stayDurationDays: 7
  });

  const [pricing, setPricing] = useState<PriceCompilation | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const app = getStoredApplicant();
    const guests = getStoredCoGuests();
    const services = getStoredServices();
    const cfg = getStoredConfig();

    setApplicant(app);
    setCoGuests(guests);
    setSelectedServices(services);
    setConfig(cfg);

    const computed = computeBookingPrice(cfg, guests, services);
    setPricing(computed);
  }, []);

  const handleAuthorizeBooking = () => {
    setIsSubmitting(true);

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const dossierNumber = `AIM-2026-X${randomSuffix}-ALPHA`;

    const completedPayload = {
      dossierNumber,
      timestamp: new Date().toISOString(),
      applicant,
      coGuests,
      selectedServices,
      config,
      pricing
    };

    setStoredCompletedOrder(completedPayload);

    setTimeout(() => {
      setIsSubmitting(false);
      onNavigate('confirmation');
    }, 1200);
  };

  const accommodation = ACCOMMODATION_OPTIONS.find(a => a.id === config.accommodationId) || ACCOMMODATION_OPTIONS[0];
  const physician = PHYSICIAN_TIER_OPTIONS.find(p => p.id === config.physicianTierId) || PHYSICIAN_TIER_OPTIONS[0];
  const serviceTier = GLOBAL_SERVICE_TIERS.find(s => s.id === config.serviceTierId) || GLOBAL_SERVICE_TIERS[0];

  return (
    <div className="w-full min-h-[85vh] py-16 px-6 sm:px-12 max-w-5xl mx-auto">
      {/* Funnel Stage Header */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#c5a059]/40 bg-[#0e0e14] mb-3">
          <Lock className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="text-[11px] font-mono-telemetry text-[#c5a059] uppercase tracking-widest">
            TUNNEL STAGE 5 OF 5 &bull; DYNAMIC PRICE COMPILATION
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#f4f4f8]">
          Part 5: Booking Summary & Sovereign Price Compilation
        </h1>
        <p className="text-xs sm:text-sm text-[#8c8c9e] mt-2 max-w-xl mx-auto leading-relaxed">
          Comprehensive synthesis of local storage keys, guest scaling arrays, and exponential risk compounding multipliers.
        </p>

        {/* Stepper indicator - all active */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-8 h-1.5 rounded-xs bg-[#c5a059]"></div>
          <div className="w-8 h-1.5 rounded-xs bg-[#c5a059]"></div>
          <div className="w-8 h-1.5 rounded-xs bg-[#c5a059]"></div>
          <div className="w-8 h-1.5 rounded-xs bg-[#c5a059]"></div>
          <div className="w-8 h-1.5 rounded-xs bg-[#c5a059]"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left Column: Dossier Credentials & Retinue Summary */}
        <div className="lg:col-span-5 space-y-6">
          {/* Applicant Card */}
          <div className="border border-[#222234] bg-[#0c0c14] p-6 rounded-sm">
            <span className="text-[10px] font-mono-telemetry uppercase tracking-wider text-[#8c6d32] block mb-2">
              PRIMARY APPLICANT
            </span>
            <h3 className="font-serif-luxury text-lg text-[#f4f4f8] font-semibold">
              {applicant?.legalName || 'Sovereign Patron'}
            </h3>
            <p className="text-xs text-[#8c8c9e] mt-1 leading-relaxed">
              {applicant?.permanentAddress || 'Classified Address'}
            </p>
            <div className="mt-4 pt-3 border-t border-[#181824] text-[11px] font-mono-telemetry text-[#767688] space-y-1">
              <div>Email: <span className="text-[#c5a059]">{applicant?.contactEmail || 'N/A'}</span></div>
              <div>Mobile: <span className="text-[#c5a059]">{applicant?.mobileNumber || 'N/A'}</span></div>
            </div>
          </div>

          {/* Retinue Overview */}
          <div className="border border-[#222234] bg-[#0c0c14] p-6 rounded-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono-telemetry uppercase tracking-wider text-[#8c6d32]">
                RETINUE CONFIGURATION
              </span>
              <span className="text-xs font-mono-telemetry text-[#c5a059]">
                {config.headCount} Total Person(s)
              </span>
            </div>

            <div className="space-y-2 text-xs text-[#a0a0b2]">
              <div className="flex justify-between py-1 border-b border-[#181824]">
                <span>Duration of Convalescence:</span>
                <span className="font-mono-telemetry text-white font-medium">{config.stayDurationDays} Nights</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#181824]">
                <span>Registered Co-Guests:</span>
                <span className="font-mono-telemetry text-white font-medium">{coGuests.length} Persons</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#181824]">
                <span>Selected Privileges:</span>
                <span className="font-mono-telemetry text-white font-medium">{selectedServices.length} Entitlements</span>
              </div>
            </div>

            {coGuests.length > 0 && (
              <div className="mt-4 pt-3 border-t border-[#181824]">
                <span className="text-[10px] font-mono-telemetry text-[#767688] uppercase block mb-2">
                  Co-Guest Retinue List:
                </span>
                <div className="space-y-1.5">
                  {coGuests.map((g, idx) => (
                    <div key={idx} className="text-xs flex items-center justify-between text-[#8e8e9e]">
                      <span>Guest #{idx + 1}: {g.name || 'Unnamed'} (Age {g.age})</span>
                      {(g.mentalWellnessStatus || g.specializedCareStatus) && (
                        <span className="text-[10px] font-mono-telemetry text-[#c5a059]">
                          [Flagged Care]
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Biological & Security Verification Stamp */}
          <div className="p-5 border border-[#c5a059]/30 bg-[#0e0e16] rounded-sm text-center">
            <Stamp className="w-8 h-8 text-[#c5a059] mx-auto mb-2 opacity-80" />
            <span className="font-serif-luxury text-sm font-semibold text-[#f4e8cf] block">
              20 Protocol Statutes Certified
            </span>
            <span className="text-[10px] font-mono-telemetry text-[#8c6d32] uppercase tracking-widest block mt-1">
              Part 4 Consent Wizard Verified &bull; 100% Compliant
            </span>
          </div>
        </div>

        {/* Right Column: Dynamic Price Compilation Itemized Invoice */}
        <div className="lg:col-span-7">
          <div className="border border-[#c5a059]/40 bg-[#0c0c14] p-8 sm:p-10 rounded-sm shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#222232] mb-6">
              <div className="flex items-center gap-3">
                <Receipt className="w-5 h-5 text-[#c5a059]" />
                <h3 className="font-serif-luxury text-xl font-bold text-[#f4f4f8]">
                  Sovereign Itemized Invoice
                </h3>
              </div>
              <span className="text-xs font-mono-telemetry text-[#c5a059]">
                CURRENCY: USD
              </span>
            </div>

            {pricing && (
              <div className="space-y-4 text-xs sm:text-sm">
                {/* 1. Accommodation */}
                <div className="flex justify-between items-start py-2 border-b border-[#181824]">
                  <div>
                    <span className="text-[#f0f0f5] font-medium block">
                      {accommodation.title}
                    </span>
                    <span className="text-[11px] font-mono-telemetry text-[#767688]">
                      ${accommodation.pricePerNight.toLocaleString()} &times; {config.stayDurationDays} Nights
                    </span>
                  </div>
                  <span className="font-mono-telemetry font-bold text-[#e2e2e8]">
                    ${pricing.accommodationSubtotal.toLocaleString()}
                  </span>
                </div>

                {/* 2. Physician Tier */}
                <div className="flex justify-between items-start py-2 border-b border-[#181824]">
                  <div>
                    <span className="text-[#f0f0f5] font-medium block">
                      {physician.title}
                    </span>
                    <span className="text-[11px] font-mono-telemetry text-[#767688]">
                      ${physician.pricePerDay.toLocaleString()} &times; {config.stayDurationDays} Days Dedicated Oversight
                    </span>
                  </div>
                  <span className="font-mono-telemetry font-bold text-[#e2e2e8]">
                    ${pricing.physicianSubtotal.toLocaleString()}
                  </span>
                </div>

                {/* 3. Global Service Tier */}
                <div className="flex justify-between items-start py-2 border-b border-[#181824]">
                  <div>
                    <span className="text-[#f0f0f5] font-medium block">
                      {serviceTier.title}
                    </span>
                    <span className="text-[11px] font-mono-telemetry text-[#767688]">
                      Fixed Base Clinical & Cellular Infusion Matrix
                    </span>
                  </div>
                  <span className="font-mono-telemetry font-bold text-[#e2e2e8]">
                    ${pricing.serviceTierSubtotal.toLocaleString()}
                  </span>
                </div>

                {/* 4. Co-Guests Base Scaling */}
                {pricing.coGuestsBaseSubtotal > 0 && (
                  <div className="flex justify-between items-start py-2 border-b border-[#181824]">
                    <div>
                      <span className="text-[#f0f0f5] font-medium block">
                        Co-Guest Screening & Retinue Harbor Passes
                      </span>
                      <span className="text-[11px] font-mono-telemetry text-[#767688]">
                        ${(45000).toLocaleString()} &times; {config.headCount - 1} Registered Co-Guests
                      </span>
                    </div>
                    <span className="font-mono-telemetry font-bold text-[#e2e2e8]">
                      ${pricing.coGuestsBaseSubtotal.toLocaleString()}
                    </span>
                  </div>
                )}

                {/* 5. Royal Privileges */}
                {pricing.servicesAddonsSubtotal > 0 && (
                  <div className="flex justify-between items-start py-2 border-b border-[#181824]">
                    <div>
                      <span className="text-[#f0f0f5] font-medium block">
                        Royal Privileges Entitlements ({selectedServices.length} Selected)
                      </span>
                      <span className="text-[11px] font-mono-telemetry text-[#767688]">
                        Submersible Dives, Telomere Sequencers & Molecular Chefs
                      </span>
                    </div>
                    <span className="font-mono-telemetry font-bold text-[#e2e2e8]">
                      ${pricing.servicesAddonsSubtotal.toLocaleString()}
                    </span>
                  </div>
                )}

                {/* 6. Sovereign Sanitation & Maritime Escrow */}
                <div className="flex justify-between items-start py-2 border-b border-[#181824]">
                  <div>
                    <span className="text-[#f0f0f5] font-medium block">
                      Biological Decontamination & Naval Escort Levy
                    </span>
                    <span className="text-[11px] font-mono-telemetry text-[#767688]">
                      Statute II Marine Mist Rotunda & Hydrofoil Transit
                    </span>
                  </div>
                  <span className="font-mono-telemetry font-bold text-[#e2e2e8]">
                    ${pricing.sanitationAndHarborLevy.toLocaleString()}
                  </span>
                </div>

                {/* Subtotal Before Compounding */}
                <div className="pt-2 flex justify-between items-center text-xs text-[#8c8c9e] font-mono-telemetry">
                  <span>Base Subtotal Before Risk Multipliers:</span>
                  <span>${pricing.subtotalBeforeSurcharges.toLocaleString()}</span>
                </div>

                {/* PROGRAMMATIC EXPONENTIAL COMPOUNDING SURCHARGES */}
                {(pricing.hasMentalWellnessFlag || pricing.hasSpecializedCareFlag) && (
                  <div className="p-4 bg-[#1e1509] border border-[#c5a059] rounded-xs space-y-2">
                    <div className="flex items-center gap-2 text-[#c5a059] font-mono-telemetry text-xs font-bold">
                      <AlertTriangle className="w-4 h-4" />
                      <span>PROGRAMMATIC COMPOUNDING SURCHARGES ACTIVE</span>
                    </div>

                    {pricing.hasMentalWellnessFlag && (
                      <div className="flex justify-between text-xs text-[#f4e8cf]">
                        <span>Mental Wellness Protocol Flag (+25% Dedicated Orderly):</span>
                        <span className="font-mono-telemetry">1.25&times; multiplier</span>
                      </div>
                    )}

                    {pricing.hasSpecializedCareFlag && (
                      <div className="flex justify-between text-xs text-[#f4e8cf]">
                        <span>Specialized Intensive Disability Care (+35% Dual Acute Escort):</span>
                        <span className="font-mono-telemetry">1.35&times; multiplier</span>
                      </div>
                    )}

                    <div className="pt-2 border-t border-[#403014] flex justify-between text-xs font-mono-telemetry text-[#dfc282] font-semibold">
                      <span>Combined Compounding Factor ({pricing.compoundingTotalMultiplier.toFixed(2)}&times;):</span>
                      <span>+${pricing.surchargeAmount.toLocaleString()} USD</span>
                    </div>
                  </div>
                )}

                {/* GRAND TOTAL ROW */}
                <div className="pt-6 mt-4 border-t-2 border-[#c5a059] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono-telemetry uppercase tracking-widest text-[#c5a059] block">
                      TOTAL SOVEREIGN LIQUID CAPITAL COMMITMENT
                    </span>
                    <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f7e8cf]">
                      ${pricing.grandTotal.toLocaleString()} <span className="text-sm font-normal text-[#8c6d32]">USD</span>
                    </span>
                  </div>

                  <div className="text-right text-[11px] font-mono-telemetry text-[#767688]">
                    <span>Wire Settlement</span>
                    <span className="block text-[#c5a059]">Irrevocable Escrow</span>
                  </div>
                </div>
              </div>
            )}

            {/* Authorize Action Button */}
            <div className="mt-8 pt-6 border-t border-[#181824]">
              <button
                onClick={handleAuthorizeBooking}
                disabled={isSubmitting}
                className="w-full py-5 bg-gradient-to-r from-[#c5a059] via-[#dfc282] to-[#9e7d38] text-[#07070a] font-serif-luxury text-sm tracking-[0.25em] uppercase font-bold transition-all shadow-[0_0_35px_rgba(197,160,89,0.35)] hover:shadow-[0_0_55px_rgba(197,160,89,0.55)] cursor-pointer flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Generating Sovereign Reservation Dossier...</span>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>Authorize & Confirm Sovereign Reservation</span>
                  </>
                )}
              </button>
              <span className="text-[10px] font-mono-telemetry text-[#68687a] uppercase tracking-widest block text-center mt-3">
                Commits booking to sovereign archives & generates biometric pass
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
