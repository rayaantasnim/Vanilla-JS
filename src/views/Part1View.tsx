import React, { useState, useEffect } from 'react';
import { ViewRoute, ApplicantInfo } from '../types';
import { getStoredApplicant, setStoredApplicant } from '../utils/storage';
import { Shield, ArrowRight, Lock, User, MapPin, Mail, Phone, AlertCircle } from 'lucide-react';

interface Part1ViewProps {
  onNavigate: (route: ViewRoute) => void;
}

export const Part1View: React.FC<Part1ViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ApplicantInfo>({
    legalName: '',
    permanentAddress: '',
    contactEmail: '',
    mobileNumber: '',
    passportNumber: '',
    emergencyContact: ''
  });

  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const existing = getStoredApplicant();
    if (existing) {
      setFormData(existing);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMessage('');
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.legalName.trim()) {
      setErrorMessage('Legal Full Name is mandatory under Sovereign Intake Statute.');
      return;
    }
    if (!formData.permanentAddress.trim()) {
      setErrorMessage('Permanent Sovereign or Civil Address is required for background clearance.');
      return;
    }
    if (!formData.contactEmail.trim() || !formData.contactEmail.includes('@')) {
      setErrorMessage('A valid secure contact email address is required.');
      return;
    }
    if (!formData.mobileNumber.trim()) {
      setErrorMessage('Direct secure mobile contact number is required for urgent medical verification.');
      return;
    }

    // Save into localStorage key aegis_applicant_info
    setStoredApplicant(formData);

    // Route to Part 2
    onNavigate('part2');
  };

  return (
    <div className="w-full min-h-[85vh] py-16 px-6 sm:px-12 flex flex-col justify-between max-w-4xl mx-auto">
      <div>
        {/* Sovereign Funnel Header Indicator */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#c5a059]/40 bg-[#0e0e14] mb-3">
            <Lock className="w-3.5 h-3.5 text-[#c5a059]" />
            <span className="text-[11px] font-mono-telemetry text-[#c5a059] uppercase tracking-widest">
              TUNNEL STAGE 1 OF 5 &bull; STRICT ISOLATION MODE
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#f4f4f8]">
            Part 1: Primary Applicant Information
          </h1>
          <p className="text-xs sm:text-sm text-[#8c8c9e] mt-2 max-w-xl mx-auto leading-relaxed">
            Please register your permanent sovereign credentials. This data will be serialized locally 
            under <code className="text-[#c5a059] font-mono-telemetry">aegis_applicant_info</code> for clinical dossier generation.
          </p>

          {/* Stepper progress indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-8 h-1.5 rounded-xs bg-[#c5a059]"></div>
            <div className="w-8 h-1.5 rounded-xs bg-[#222230]"></div>
            <div className="w-8 h-1.5 rounded-xs bg-[#222230]"></div>
            <div className="w-8 h-1.5 rounded-xs bg-[#222230]"></div>
            <div className="w-8 h-1.5 rounded-xs bg-[#222230]"></div>
          </div>
        </div>

        {/* Input Form Card */}
        <div className="border border-[#1f1f2e] bg-[#0c0c14] p-8 sm:p-10 rounded-sm shadow-2xl">
          {errorMessage && (
            <div className="mb-6 p-4 bg-[#2b1212] border border-[#ff5555]/40 text-[#ffb0b0] text-xs flex items-center gap-3 rounded-xs font-mono-telemetry">
              <AlertCircle className="w-4 h-4 text-[#ff5555] shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleNext} className="space-y-6">
            <div>
              <label className="block text-xs font-mono-telemetry uppercase tracking-wider text-[#c5a059] mb-2">
                1. Legal Full Name (As Stated in Passport or Sovereign Credentials) *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#727284] absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  name="legalName"
                  value={formData.legalName}
                  onChange={handleChange}
                  placeholder="e.g. Lord Alistair Vance / Dr. Elena Rostova"
                  className="w-full bg-[#111118] border border-[#262636] focus:border-[#c5a059] focus:outline-none text-[#f4f4f8] text-sm pl-11 pr-4 py-3 rounded-xs transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-telemetry uppercase tracking-wider text-[#c5a059] mb-2">
                2. Permanent Sovereign or Civil Residential Address *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#727284] absolute left-3.5 top-3.5 pointer-events-none" />
                <textarea
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Street, Estate, City, Sovereign Territory / Country"
                  className="w-full bg-[#111118] border border-[#262636] focus:border-[#c5a059] focus:outline-none text-[#f4f4f8] text-sm pl-11 pr-4 py-3 rounded-xs transition-colors resize-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono-telemetry uppercase tracking-wider text-[#c5a059] mb-2">
                  3. Contact Email (Encrypted or Private Domain) *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#727284] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="patron@sovereign-holdings.ch"
                    className="w-full bg-[#111118] border border-[#262636] focus:border-[#c5a059] focus:outline-none text-[#f4f4f8] text-sm pl-11 pr-4 py-3 rounded-xs transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-telemetry uppercase tracking-wider text-[#c5a059] mb-2">
                  4. Secure Direct Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#727284] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="+41 22 555 0199"
                    className="w-full bg-[#111118] border border-[#262636] focus:border-[#c5a059] focus:outline-none text-[#f4f4f8] text-sm pl-11 pr-4 py-3 rounded-xs transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="block text-xs font-mono-telemetry uppercase tracking-wider text-[#828296] mb-2">
                  Passport or Diplomatic ID (Optional at this stage)
                </label>
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  placeholder="X8921004"
                  className="w-full bg-[#111118] border border-[#262636] focus:border-[#c5a059] focus:outline-none text-[#f4f4f8] text-sm px-4 py-3 rounded-xs transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-telemetry uppercase tracking-wider text-[#828296] mb-2">
                  Designated Emergency Medical Proxy
                </label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  placeholder="Full Name & Secure Telemetry Channel"
                  className="w-full bg-[#111118] border border-[#262636] focus:border-[#c5a059] focus:outline-none text-[#f4f4f8] text-sm px-4 py-3 rounded-xs transition-colors"
                />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-[#1a1a26] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] font-mono-telemetry text-[#68687a] flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#c5a059]" /> Air-gapped AES-256 client serialization
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-[#c5a059] to-[#9e7d38] text-[#07070a] font-serif-luxury text-xs tracking-[0.2em] uppercase font-bold hover:from-[#dfc282] hover:to-[#b08d42] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(197,160,89,0.3)] cursor-pointer"
              >
                <span>Serialize & Proceed to Part 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
