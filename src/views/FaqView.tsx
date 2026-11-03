import React, { useState, useEffect } from 'react';
import { ViewRoute } from '../types';
import { FAQ_DATA } from '../data/faqData';
import { 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Compass, 
  FileText,
  Search,
  ArrowRight
} from 'lucide-react';

interface FaqViewProps {
  onNavigate: (route: ViewRoute) => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ onNavigate }) => {
  // Strict Single-Expansion Accordion State
  const [expandedFaqId, setExpandedFaqId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleToggleFaq = (id: number) => {
    setExpandedFaqId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = FAQ_DATA.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#c5a059]/40 bg-[#0e0e14] mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="text-[11px] font-mono-telemetry text-[#c5a059] uppercase tracking-widest">
            CLINICAL & SECLUSION DIRECTORY
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#f4f4f8] tracking-wide">
          Sovereign Inquiries & FAQ Directory
        </h1>
        <p className="text-xs sm:text-sm text-[#9292a4] mt-3 leading-relaxed font-light">
          Detailed technical, legal, and biosecurity disclosures regarding intake protocols, 
          continuous biotelemetry, and non-municipal offshore sovereign jurisprudence.
        </p>
      </div>

      {/* Search Input */}
      <div className="mb-8 relative">
        <Search className="w-4 h-4 text-[#727286] absolute left-4 top-3.5 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter clinical questions by keyword, topic, or statute reference..."
          className="w-full bg-[#0c0c14] border border-[#222232] focus:border-[#c5a059] focus:outline-none text-xs sm:text-sm text-[#f0f0f5] pl-11 pr-4 py-3 rounded-sm transition-colors"
        />
      </div>

      {/* FAQ Accordion List (Single-Expansion Logic) */}
      <div className="space-y-4">
        {filteredFaqs.map((item) => {
          const isOpen = expandedFaqId === item.id;

          return (
            <div
              key={item.id}
              className={`border rounded-sm transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'border-[#c5a059] bg-[#0e0e18] shadow-[0_0_25px_rgba(197,160,89,0.12)]' 
                  : 'border-[#1e1e2c] bg-[#09090f] hover:border-[#323244]'
              }`}
            >
              <button
                type="button"
                onClick={() => handleToggleFaq(item.id)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono-telemetry uppercase text-[#c5a059] tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono-telemetry text-[#68687a]">
                      &bull; {item.statuteReference}
                    </span>
                  </div>

                  <h3 className={`font-serif-luxury text-base sm:text-lg font-semibold transition-colors ${
                    isOpen ? 'text-[#f4e8cf]' : 'text-[#f0f0f5] group-hover:text-[#c5a059]'
                  }`}>
                    {item.question}
                  </h3>
                </div>

                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#c5a059] bg-[#221c12] text-[#c5a059] rotate-180' 
                    : 'border-[#262636] text-[#767688] group-hover:border-[#c5a059]'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Accordion Content Panel (100+ Words Response) */}
              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-[#1a1a28] animate-fadeIn">
                  <div className="p-5 bg-[#08080d] border border-[#181824] rounded-xs mb-3">
                    <span className="text-[10px] font-mono-telemetry text-[#8c6d32] uppercase tracking-widest block mb-2">
                      // AUTHORITATIVE SOVEREIGN COUNSEL RESPONSE
                    </span>
                    <p className="text-xs sm:text-sm text-[#9e9eb2] leading-relaxed font-light text-justify">
                      {item.answer}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono-telemetry text-[#68687a]">
                    <span>STATUTORY JURISPRUDENCE REFERENCE</span>
                    <span className="text-[#c5a059]">{item.statuteReference}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Gateway Transition Box */}
      <div className="mt-16 p-8 border border-[#c5a059]/30 bg-[#0d0d14] rounded-sm text-center">
        <h4 className="font-serif-luxury text-xl text-[#f4f4f8] font-bold">
          Ready to Begin Your Sovereign Clinical Evaluation?
        </h4>
        <p className="text-xs text-[#8c8c9e] max-w-xl mx-auto mt-2 leading-relaxed">
          Proceed to the prerequisite verification gateway and initiate your confidential application.
        </p>
        <button
          onClick={() => onNavigate('order')}
          className="mt-6 px-9 py-3.5 bg-gradient-to-r from-[#c5a059] to-[#9e7d38] text-[#07070a] font-serif-luxury text-xs tracking-[0.2em] uppercase font-bold hover:from-[#dfc282] hover:to-[#b08d42] transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)] cursor-pointer"
        >
          Access Sovereign Order Gateway
        </button>
      </div>
    </div>
  );
};
