import React from 'react';
import { ViewRoute } from '../types';
import { 
  ShieldAlert, 
  Coins, 
  UserCheck, 
  Scale, 
  FileCheck2, 
  ArrowRight,
  AlertTriangle,
  Lock,
  Building2
} from 'lucide-react';

interface OrderGatewayViewProps {
  onNavigate: (route: ViewRoute) => void;
}

export const OrderGatewayView: React.FC<OrderGatewayViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#c5a059]/40 bg-[#0e0e14] mb-4">
          <Lock className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="text-[11px] font-mono-telemetry text-[#c5a059] uppercase tracking-widest">
            PREREQUISITE ENTRY PROTOCOL // STAGE 0
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#f4f4f8] tracking-wide">
          Sovereign Order Gateway
        </h1>
        <p className="text-xs sm:text-base text-[#9292a4] mt-4 leading-relaxed font-light">
          Admission into AEGIS Island Medical is governed strictly by sovereign international protocols. 
          Please examine the high-threshold financial commitments and sovereign screening standards below 
          before initializing the multi-part registration tunnel.
        </p>
      </div>

      {/* Two Prominent Data Verification Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Panel 1: Luxury Financial Balance Commitments */}
        <div className="p-8 sm:p-10 border border-[#c5a059]/40 bg-[#0d0d14] rounded-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-sm bg-[#161622] border border-[#c5a059] flex items-center justify-center text-[#c5a059]">
                <Coins className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono-telemetry uppercase tracking-widest text-[#8c6d32] block">
                  CAPITAL PREREQUISITE
                </span>
                <h2 className="text-xl font-serif-luxury text-[#f4f4f8] font-semibold">
                  Financial Escrow & Balance Verification
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#9292a4] leading-relaxed">
              <div className="p-4 bg-[#111118] border-l-2 border-[#c5a059] rounded-xs">
                <span className="font-mono-telemetry text-base font-bold text-[#f4f4f8] block">
                  $15,000,000 USD Minimum Liquid Escrow
                </span>
                <p className="text-xs text-[#828294] mt-1">
                  Primary applicants must demonstrate verifiable liquid capitalization or physical sovereign gold bullion allocation held in an approved tier-1 custodial bank or Swiss private vault.
                </p>
              </div>

              <p>
                All medical stays require upfront irrevocable wire transmission at least thirty days prior to tender arrival. 
                Because individualized surgical suites, specialized stem-cell expansion labs, and personalized peptide synthesizers 
                are locked for your exclusive tenure, deposits are non-refundable upon confirmation.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-mono-telemetry">
                <div className="p-3 bg-[#0a0a0f] border border-[#1e1e2c]">
                  <span className="text-[#c5a059] block font-semibold">Accepted Currencies</span>
                  <span className="text-[#b0b0c0]">USD, CHF, EUR, Physical Bullion</span>
                </div>
                <div className="p-3 bg-[#0a0a0f] border border-[#1e1e2c]">
                  <span className="text-[#c5a059] block font-semibold">Cancellation Grace</span>
                  <span className="text-[#b0b0c0]">Strict 0-Day Forfeiture</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1a1a26] flex items-center gap-2 text-xs font-mono-telemetry text-[#8c6d32]">
            <Building2 className="w-4 h-4 text-[#c5a059]" />
            <span>Monitored by Sovereign Treasury & Basel III Compliance</span>
          </div>
        </div>

        {/* Panel 2: Sovereign Background Screening Checks */}
        <div className="p-8 sm:p-10 border border-[#2d2d3e] bg-[#0d0d14] rounded-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#2d2d4e]/10 blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-sm bg-[#161622] border border-[#3b3b50] flex items-center justify-center text-[#c5a059]">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono-telemetry uppercase tracking-widest text-[#8c6d32] block">
                  SECURITY & DIPLOMATIC CLEARANCE
                </span>
                <h2 className="text-xl font-serif-luxury text-[#f4f4f8] font-semibold">
                  Sovereign Background Screening Checks
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#9292a4] leading-relaxed">
              <div className="p-4 bg-[#111118] border-l-2 border-[#52526c] rounded-xs">
                <span className="font-mono-telemetry text-base font-bold text-[#f4f4f8] block">
                  Interpol Blue Notice & Sovereign Sanction Audit
                </span>
                <p className="text-xs text-[#828294] mt-1">
                  All applicants and co-guests undergo background checks to ensure zero active criminal convictions, sanctions under international anti-money laundering laws, or hostile foreign intelligence affiliations.
                </p>
              </div>

              <p>
                To safeguard the privacy of world leaders and sovereign dynasties residing within our sanctuary, 
                any individual found to have illicit surveillance ties, media affiliation, or unverified financial origins 
                will be denied entry with instantaneous notification to their consular sponsor.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-mono-telemetry">
                <div className="p-3 bg-[#0a0a0f] border border-[#1e1e2c]">
                  <span className="text-[#c5a059] block font-semibold">Security Clearance</span>
                  <span className="text-[#b0b0c0]">Level-4 Sovereign Vet</span>
                </div>
                <div className="p-3 bg-[#0a0a0f] border border-[#1e1e2c]">
                  <span className="text-[#c5a059] block font-semibold">Biometric Audit</span>
                  <span className="text-[#b0b0c0]">Gait & Facial DNA Mesh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1a1a26] flex items-center gap-2 text-xs font-mono-telemetry text-[#8c6d32]">
            <Scale className="w-4 h-4 text-[#c5a059]" />
            <span>Regulated by AEGIS Sovereign Maritime Defense Consilium</span>
          </div>
        </div>
      </div>

      {/* Mandatory Regulatory Notice */}
      <div className="mb-14 p-6 bg-[#0a0a0f] border border-[#2a2a38] rounded-sm flex items-start gap-4">
        <AlertTriangle className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
        <div className="text-xs text-[#9696a8] leading-relaxed">
          <strong className="text-[#e2e2e8] block mb-1">
            SPATIAL LIMITATION WARNING: TUNNEL EXIT LOCKDOWN
          </strong>
          Upon clicking &quot;Order Now&quot;, you will enter the five-stage sovereign registration pathway (Parts 1 through 5). 
          To prevent incomplete clinical submissions and ensure data integrity, the global navigation bar and exit anchors 
          are <strong>completely omitted</strong> across all form stages. All data inputs are stored directly in your local browser storage.
        </div>
      </div>

      {/* Exclusive "Order Now" Action Button */}
      <div className="text-center">
        <button
          onClick={() => onNavigate('part1')}
          className="group relative inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-[#c5a059] via-[#dfc282] to-[#9e7d38] text-[#07070a] font-serif-luxury text-sm tracking-[0.25em] uppercase font-bold transition-all shadow-[0_0_35px_rgba(197,160,89,0.35)] hover:shadow-[0_0_55px_rgba(197,160,89,0.55)] hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Acknowledge Prerequisites & Order Now</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
        </button>
        <span className="text-[11px] font-mono-telemetry text-[#68687a] uppercase tracking-widest block mt-3">
          Transitioning to Navbar-Free Sovereign Registration Funnel
        </span>
      </div>
    </div>
  );
};
