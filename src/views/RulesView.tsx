import React, { useState, useEffect } from 'react';
import { ViewRoute, SovereignRule } from '../types';
import { SOVEREIGN_RULES } from '../data/rulesData';
import { 
  BookOpen, 
  ChevronDown, 
  ShieldCheck, 
  Radio, 
  Stethoscope, 
  Shield, 
  Anchor, 
  Home, 
  Sparkles, 
  Scale,
  Search
} from 'lucide-react';

interface RulesViewProps {
  onNavigate: (route: ViewRoute) => void;
}

const CATEGORIES = [
  'All Sections',
  'Tech Bans',
  'Medical Rules',
  'Sovereign Security',
  'Fleet Management',
  'Residency/Cottage Rules',
  'Lifestyle Towers',
  'Legal Compliances'
] as const;

export const RulesView: React.FC<RulesViewProps> = ({ onNavigate }) => {
  // Strict Single-Expansion Accordion State: only one rule ID can be expanded at any time!
  const [expandedRuleId, setExpandedRuleId] = useState<number | null>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Sections');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Strict Single-Expansion Handler
  const handleToggleRule = (id: number) => {
    // If clicked item is already open, collapse it; otherwise open it and close any previously open item!
    setExpandedRuleId(prev => (prev === id ? null : id));
  };

  const filteredRules = SOVEREIGN_RULES.filter(rule => {
    const matchesCategory = selectedCategory === 'All Sections' || rule.category === selectedCategory;
    const matchesSearch = 
      rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.fullDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.ruleCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Tech Bans': return Radio;
      case 'Medical Rules': return Stethoscope;
      case 'Sovereign Security': return Shield;
      case 'Fleet Management': return Anchor;
      case 'Residency/Cottage Rules': return Home;
      case 'Lifestyle Towers': return Sparkles;
      case 'Legal Compliances': return Scale;
      default: return BookOpen;
    }
  };

  return (
    <div className="w-full pt-28 pb-24 px-6 sm:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#c5a059]/40 bg-[#0e0e14] mb-3">
          <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="text-[11px] font-mono-telemetry text-[#c5a059] uppercase tracking-widest">
            OFFICIAL SOVEREIGN STATUTE COMPENDIUM
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#f4f4f8] tracking-wide">
          The 50 Sovereign Rules & Enclave Statutes
        </h1>
        <p className="text-xs sm:text-sm text-[#9292a4] mt-3 leading-relaxed font-light">
          Strict single-expansion accordion directory governing life, medical practices, technological blackout, 
          and maritime law across the 45 sovereign hectares of AEGIS Island.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="mb-10 space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#727286] absolute left-4 top-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search within the 50 sovereign statutes by keyword, code (e.g. TB-01, MR-09), or topic..."
            className="w-full bg-[#0c0c14] border border-[#222232] focus:border-[#c5a059] focus:outline-none text-xs sm:text-sm text-[#f0f0f5] pl-11 pr-4 py-3 rounded-sm transition-colors"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xs border text-xs font-mono-telemetry uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'border-[#c5a059] bg-[#1a1710] text-[#f4e8cf] font-bold shadow-[0_0_15px_rgba(197,160,89,0.2)]'
                  : 'border-[#1e1e2c] bg-[#0c0c12] text-[#828294] hover:border-[#38384c] hover:text-[#c0c0d2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Showing count indicator */}
      <div className="flex items-center justify-between mb-6 text-xs font-mono-telemetry text-[#767688]">
        <span>DISPLAYING {filteredRules.length} OF 50 STATUTES</span>
        <span className="text-[#8c6d32]">STRICT SINGLE-EXPANSION ACTIVE</span>
      </div>

      {/* Accordion Infrastructure */}
      <div className="space-y-3.5">
        {filteredRules.map((rule) => {
          const isOpen = expandedRuleId === rule.id;
          const CategoryIcon = getCategoryIcon(rule.category);

          return (
            <div
              key={rule.id}
              className={`border rounded-sm transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'border-[#c5a059] bg-[#0f0f18] shadow-[0_0_30px_rgba(197,160,89,0.12)]' 
                  : 'border-[#1c1c28] bg-[#0a0a10] hover:border-[#333348]'
              }`}
            >
              {/* Accordion Header Bar */}
              <button
                type="button"
                onClick={() => handleToggleRule(rule.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
              >
                <div className="flex items-start sm:items-center gap-4">
                  {/* Category icon avatar */}
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center shrink-0 border transition-colors ${
                    isOpen 
                      ? 'border-[#c5a059] bg-[#221c12] text-[#c5a059]' 
                      : 'border-[#222232] bg-[#12121c] text-[#78788e] group-hover:border-[#c5a059]'
                  }`}>
                    <CategoryIcon className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono-telemetry text-xs font-bold text-[#c5a059]">
                        {rule.ruleCode}
                      </span>
                      <span className="text-[10px] font-mono-telemetry uppercase text-[#767688]">
                        &bull; {rule.category}
                      </span>
                    </div>

                    <h3 className={`font-serif-luxury text-base sm:text-lg font-semibold transition-colors ${
                      isOpen ? 'text-[#f4e8cf]' : 'text-[#f0f0f5] group-hover:text-[#c5a059]'
                    }`}>
                      {rule.title}
                    </h3>
                  </div>
                </div>

                {/* Expansion Indicator Arrow */}
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#c5a059] bg-[#221c12] text-[#c5a059] rotate-180' 
                    : 'border-[#262636] text-[#767688] group-hover:border-[#c5a059]'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* STRICT SINGLE-EXPANSION ACCORDION BODY (100+ Words Descriptive Panel) */}
              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-[#1a1a28] animate-fadeIn">
                  <div className="p-5 bg-[#09090e] border border-[#1b1b26] rounded-xs mb-4">
                    <span className="text-[10px] font-mono-telemetry text-[#8c6d32] uppercase tracking-widest block mb-2">
                      // STATUTORY PROTOCOL CLAUSE [MANDATORY 100+ WORD DESCRIPTIVE PANEL]
                    </span>
                    <p className="text-xs sm:text-sm text-[#9e9eb4] leading-relaxed font-light text-justify">
                      {rule.fullDescription}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono-telemetry text-[#828294] pt-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                      <span>Enforcement: <strong className="text-[#d8d8e8]">{rule.enforcementProtocol}</strong></span>
                    </div>
                    <span className="text-[11px] text-[#5e5e70]">AEGIS Maritime Lex Scripta</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA to Order Gateway */}
      <div className="mt-16 p-8 border border-[#2a2a3e] bg-[#0c0c14] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-serif-luxury text-lg text-[#f4f4f8] font-semibold">
            Ready to Acknowledge All 50 Statutes?
          </h4>
          <p className="text-xs text-[#8c8c9e] mt-1">
            The Sovereign Order Gateway awaits your prerequisite verification and admission credentials.
          </p>
        </div>

        <button
          onClick={() => onNavigate('order')}
          className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#c5a059] to-[#9e7d38] text-[#07070a] font-serif-luxury text-xs tracking-[0.2em] uppercase font-bold hover:from-[#dfc282] hover:to-[#b08d42] transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)] whitespace-nowrap cursor-pointer"
        >
          Proceed to Order Gateway
        </button>
      </div>
    </div>
  );
};
