import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { ViewRoute } from '../types';
import { getStoredCompletedOrder } from '../utils/storage';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Printer, 
  Compass, 
  Download, 
  QrCode, 
  Anchor, 
  Calendar, 
  User, 
  Building2,
  Lock,
  ArrowRight
} from 'lucide-react';

interface ConfirmationViewProps {
  onNavigate: (route: ViewRoute) => void;
}

export const ConfirmationView: React.FC<ConfirmationViewProps> = ({ onNavigate }) => {
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const existing = getStoredCompletedOrder();
    if (existing) {
      setOrder(existing);
    }

    // Trigger subtle gold/bronze celebration confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#c5a059', '#dfc282', '#ffffff', '#8c6d32']
      });
    } catch {
      // ignore
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const dossierId = order?.dossierNumber || 'AIM-2026-X4910-ALPHA';
  const applicantName = order?.applicant?.legalName || 'Sovereign Patron';
  const totalAmount = order?.pricing?.grandTotal ? `$${order.pricing.grandTotal.toLocaleString()} USD` : '$1,485,000 USD';

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-12 max-w-5xl mx-auto">
      {/* Header Badge */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#0f0e08] mb-4">
          <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
          <span className="text-xs font-mono-telemetry text-[#c5a059] uppercase tracking-widest font-semibold">
            SOVEREIGN RESERVATION AUTHORIZED // STATUS: RATIFIED
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#f4f4f8] tracking-wide">
          Sovereign Medical Dossier Confirmed
        </h1>
        <p className="text-xs sm:text-base text-[#9292a4] mt-3 leading-relaxed font-light">
          Your admission dossier has been air-gapped and committed to the AEGIS Island Medical Sovereign Registry. 
          Present this certificate and QR telemetry talisman upon tender rendezvous in international waters.
        </p>
      </div>

      {/* Sovereign Dossier Pass Certificate */}
      <div className="border-2 border-[#c5a059]/50 bg-gradient-to-b from-[#0e0e16] via-[#09090e] to-[#0d0d14] p-8 sm:p-12 rounded-sm shadow-[0_0_60px_rgba(197,160,89,0.15)] relative overflow-hidden mb-10">
        {/* Decorative Golden Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c5a059]"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c5a059]"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c5a059]"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c5a059]"></div>

        {/* Certificate Top Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-8 border-b border-[#222234] gap-6">
          <div className="text-center sm:text-left">
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.25em] text-[#f7e7c4] uppercase block">
              AEGIS ISLAND MEDICAL
            </span>
            <span className="text-[11px] font-mono-telemetry text-[#8c6d32] uppercase tracking-widest mt-1 block">
              Sovereign Offshore Medical Enclave &bull; Maritime Jurisdiction
            </span>
          </div>

          {/* Dossier Code Box */}
          <div className="px-5 py-3 rounded-xs border border-[#c5a059]/60 bg-[#14120a] text-center">
            <span className="text-[10px] font-mono-telemetry uppercase tracking-widest text-[#a08240] block">
              OFFICIAL DOSSIER CODE
            </span>
            <span className="font-mono-telemetry text-base sm:text-lg font-bold text-[#f7e7c4]">
              {dossierId}
            </span>
          </div>
        </div>

        {/* Certificate Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8">
          {/* Details Column */}
          <div className="md:col-span-8 space-y-5">
            <div>
              <span className="text-[10px] font-mono-telemetry uppercase tracking-widest text-[#8c6d32] block">
                PRIMARY PATRON NAME
              </span>
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#f4f4f8] font-semibold mt-1">
                {applicantName}
              </h2>
              <p className="text-xs text-[#8c8c9e] mt-1">
                Address: {order?.applicant?.permanentAddress || 'Authorized Sovereign Diplomatic Residence'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono-telemetry">
              <div className="p-3 bg-[#111118] border border-[#20202e] rounded-xs">
                <span className="text-[#8c6d32] block">Intake Retinue Size</span>
                <span className="text-[#f0f0f5] font-bold text-sm">
                  {order?.config?.headCount || 1} Patron(s) Cleared
                </span>
              </div>

              <div className="p-3 bg-[#111118] border border-[#20202e] rounded-xs">
                <span className="text-[#8c6d32] block">Total Liquid Commitment</span>
                <span className="text-[#c5a059] font-bold text-sm">
                  {totalAmount}
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#111118] border border-[#20202e] rounded-xs space-y-2 text-xs">
              <div className="flex justify-between text-[#8c8c9e]">
                <span>Offshore Coordinates:</span>
                <span className="font-mono-telemetry text-[#e2e2e8]">4°11&apos;32&quot;S 154°22&apos;09&quot;E</span>
              </div>
              <div className="flex justify-between text-[#8c8c9e]">
                <span>Naval Intercept Rendezvous:</span>
                <span className="font-mono-telemetry text-[#e2e2e8]">Outer Mooring Buoy #4-ALPHA</span>
              </div>
              <div className="flex justify-between text-[#8c8c9e]">
                <span>Decontamination Gate:</span>
                <span className="font-mono-telemetry text-[#c5a059]">Rotunda 180s Mist Cleared</span>
              </div>
            </div>
          </div>

          {/* QR Code & Biometric Talisman Box */}
          <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-[#08080c] border border-[#1f1f2e] rounded-xs text-center">
            {/* Synthetic Luxury Biometric Pass Grid */}
            <div className="w-36 h-36 border-2 border-[#c5a059]/60 p-2 bg-[#050508] rounded-xs flex items-center justify-center relative mb-4">
              <QrCode className="w-28 h-28 text-[#c5a059]" />
              <div className="absolute inset-0 border border-[#c5a059]/20 pointer-events-none"></div>
            </div>

            <span className="text-[10px] font-mono-telemetry uppercase tracking-widest text-[#8c6d32] block">
              BIOMETRIC CRYPTOGRAPHIC PASS
            </span>
            <span className="text-[11px] font-mono-telemetry text-[#767688] mt-1 block">
              Optical Near-Field Match Token
            </span>
          </div>
        </div>

        {/* Certificate Bottom Authority Seal */}
        <div className="pt-6 border-t border-[#222234] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c8c9e] gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#c5a059]" />
            <span>Authorized by Rayaan Tasnim &bull; Sovereign Registry of AEGIS Island</span>
          </div>

          <div className="font-mono-telemetry text-[11px] text-[#767688]">
            HASH: 8f9b2...01e9d-SHA256
          </div>
        </div>
      </div>

      {/* Post-Registration Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button
          onClick={handlePrint}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#141420] border border-[#303046] hover:border-[#c5a059] text-[#e2e2e8] font-serif-luxury text-xs tracking-[0.2em] uppercase font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Printer className="w-4 h-4 text-[#c5a059]" />
          <span>Print Sovereign Certificate</span>
        </button>

        <button
          onClick={() => onNavigate('rules')}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#0e0e14] border border-[#2a2a38] hover:border-[#c5a059]/60 text-[#c5a059] font-serif-luxury text-xs tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Review 50 Enclave Statutes</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
