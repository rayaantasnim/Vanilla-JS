import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ViewRoute } from '../types';
import { 
  X, 
  Home, 
  Compass, 
  Activity, 
  BookOpen, 
  Crown, 
  HelpCircle, 
  ShieldCheck, 
  Plane, 
  CheckCircle2,
  Lock
} from 'lucide-react';

interface NavbarProps {
  currentRoute: ViewRoute;
  onNavigate: (route: ViewRoute) => void;
}

interface DrawerItem {
  id: string;
  title: string;
  code: string;
  subtitle: string;
  route: ViewRoute;
  icon: React.ElementType;
  badge?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const drawerItems: DrawerItem[] = [
    {
      id: 'item-home',
      title: 'Sovereign Home',
      code: 'NAV-01',
      subtitle: 'Offshore Seclusion, Genomic Primacy & Sanctuary Overview',
      route: 'home',
      icon: Home,
      badge: 'Main Enclave'
    },
    {
      id: 'item-order',
      title: 'Sovereign Order',
      code: 'NAV-02',
      subtitle: 'Mandatory Financial Escrow & Background Screening Gateway',
      route: 'order',
      icon: Compass,
      badge: 'Prerequisite'
    },
    {
      id: 'item-services',
      title: 'Medical Services',
      code: 'NAV-03',
      subtitle: 'Telomere Reprogramming, Stem Cells & Robotic Surgical Suites',
      route: 'services',
      icon: Activity,
      badge: 'Clinical Primacy'
    },
    {
      id: 'item-rules',
      title: '50 Sovereign Rules',
      code: 'NAV-04',
      subtitle: 'Exclusive Single-Expansion Accordion of Sovereign Enclave Statutes',
      route: 'rules',
      icon: BookOpen,
      badge: 'Mandatory Statutes'
    },
    {
      id: 'item-attires',
      title: 'Royal Attires & Relics',
      code: 'NAV-05',
      subtitle: 'Mulberry Silks, 24K Gold Telemetry Torcs & Biometric Artifacts',
      route: 'royal-attires',
      icon: Crown,
      badge: 'Sovereign Wardrobe'
    },
    {
      id: 'item-faq',
      title: 'Clinical FAQ',
      code: 'NAV-06',
      subtitle: 'Comprehensive Directory of Seclusion, Surgery & Maritime Legalities',
      route: 'faq',
      icon: HelpCircle,
      badge: 'Full Directory'
    },
    {
      id: 'item-charter',
      title: 'Sovereign Charter',
      code: 'NAV-07',
      subtitle: 'Non-Municipal Legal Jurisdiction & Air-Gapped Genomic Protections',
      route: 'rules',
      icon: ShieldCheck,
      badge: 'Legal Shield'
    },
    {
      id: 'item-logistics',
      title: 'Aviation & Marine Fleet',
      code: 'NAV-08',
      subtitle: 'Gulfstream G700 Shuttles, Deep-Water Moorings & Rotorcraft',
      route: 'services',
      icon: Plane,
      badge: 'Transport Matrix'
    },
    {
      id: 'item-confirmation',
      title: 'Dossier Verification',
      code: 'NAV-09',
      subtitle: 'Review Existing Sovereign Booking Dossier & Biometric Clearance',
      route: 'confirmation',
      icon: CheckCircle2,
      badge: 'Patron Access'
    }
  ];

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      // GSAP slide in from right
      gsap.fromTo(
        drawerRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );

      // Stagger card items inside drawer
      if (cardsContainerRef.current) {
        gsap.fromTo(
          cardsContainerRef.current.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.05, ease: 'power2.out', delay: 0.15 }
        );
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    if (drawerRef.current) {
      gsap.to(drawerRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.35,
        ease: 'power3.in',
        onComplete: () => setIsOpen(false)
      });
    } else {
      setIsOpen(false);
    }
  };

  const handleItemClick = (route: ViewRoute) => {
    handleClose();
    setTimeout(() => {
      onNavigate(route);
    }, 250);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-[#070709]/90 backdrop-blur-md border-b border-[#1b1b24] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          {/* Brand Alignment: Left-aligned uppercase tracked text */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-sm border border-[#c5a059]/40 bg-[#0e0e14] flex items-center justify-center group-hover:border-[#c5a059] transition-colors">
              <span className="font-serif-luxury text-base text-[#c5a059] font-bold">A</span>
            </div>
            <div>
              <span className="font-serif-luxury text-base sm:text-lg font-bold tracking-[0.22em] text-[#f0f0f5] group-hover:text-[#c5a059] transition-colors uppercase block">
                AEGIS ISLAND MEDICAL
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#8a8a9a] font-mono-telemetry block">
                Sovereign Offshore Sanctuary
              </span>
            </div>
          </button>

          {/* Control Interface: Right-aligned luxury minimalist hamburger icon. No text anchors visible on raw navbar */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Sovereign Navigation Matrix"
            className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 p-2 rounded-sm border border-[#2a2a38] bg-[#0d0d12] hover:border-[#c5a059]/60 hover:bg-[#15151e] transition-all group focus:outline-none"
          >
            <span className="w-6 h-[1.5px] bg-[#e2e2e8] group-hover:bg-[#c5a059] transition-colors duration-200"></span>
            <span className="w-4 h-[1.5px] bg-[#c5a059] self-end group-hover:w-6 transition-all duration-200"></span>
            <span className="w-6 h-[1.5px] bg-[#e2e2e8] group-hover:bg-[#c5a059] transition-colors duration-200"></span>
          </button>
        </div>
      </header>

      {/* GSAP Full-Screen Overlay Drawer */}
      {isOpen && (
        <div 
          ref={drawerRef}
          className="fixed inset-0 z-50 bg-[#07070a]/98 backdrop-blur-2xl text-[#e2e2e8] flex flex-col overflow-y-auto selection:bg-[#c5a059]/40"
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Drawer Header */}
          <div className="sticky top-0 z-10 w-full bg-[#07070a]/95 border-b border-[#1f1f28] px-6 sm:px-12 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm border border-[#c5a059] flex items-center justify-center bg-[#12121a]">
                <Lock className="w-4 h-4 text-[#c5a059]" />
              </div>
              <div>
                <span className="font-serif-luxury text-sm sm:text-base tracking-[0.25em] uppercase text-[#e2e2e8] font-bold block">
                  AEGIS SOVEREIGN DIRECTORY MATRIX
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono-telemetry text-[#8c6d32]">
                  Air-Gapped Navigation &bull; Classified Domain
                </span>
              </div>
            </div>

            {/* Prominent Close (X) Button */}
            <button
              onClick={handleClose}
              aria-label="Close Navigation Drawer"
              className="w-12 h-12 flex items-center justify-center rounded-sm border border-[#333344] bg-[#12121a] hover:border-[#c5a059] hover:bg-[#1a1a24] text-[#c5a059] transition-all focus:outline-none group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Drawer Body - Responsive Matrix Layout */}
          <div className="flex-1 max-w-7xl w-full mx-auto p-6 sm:p-12">
            <div className="mb-8">
              <span className="text-xs font-mono-telemetry text-[#c5a059] tracking-widest uppercase block mb-1">
                // EXECUTIVE ENCLAVE MATRIX
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-[#f4f4f8] font-light">
                Select Sovereign Destination
              </h2>
            </div>

            {/* Matrix Grid: Desktop 3x3, Tablets 2x2, Mobile 1-column */}
            <div 
              ref={cardsContainerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {drawerItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = currentRoute === item.route;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item.route)}
                    className={`cursor-pointer p-6 rounded-sm border text-left transition-all duration-300 relative group overflow-hidden flex flex-col justify-between min-h-[190px] ${
                      isActive 
                        ? 'bg-[#14141e] border-[#c5a059] shadow-[0_0_25px_rgba(197,160,89,0.15)]' 
                        : 'bg-[#0d0d12]/90 border-[#1c1c28] hover:border-[#c5a059]/60 hover:bg-[#12121a]'
                    }`}
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-sm flex items-center justify-center border ${
                          isActive 
                            ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#f7e7c4]' 
                            : 'bg-[#151520] border-[#252535] text-[#c5a059] group-hover:border-[#c5a059]'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="font-mono-telemetry text-[11px] text-[#7a7a8e] group-hover:text-[#a0a0b8] transition-colors">
                          {item.code}
                        </span>
                      </div>

                      {item.badge && (
                        <span className="text-[10px] font-mono-telemetry px-2 py-0.5 rounded-xs uppercase tracking-wider bg-[#1c1c28] border border-[#2c2c3e] text-[#c5a059]">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Middle Content */}
                    <div className="mt-4">
                      <h3 className="font-serif-luxury text-lg text-[#f0f0f5] group-hover:text-[#c5a059] transition-colors font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#8e8e9e] mt-2 line-clamp-2 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Bottom Status */}
                    <div className="mt-4 pt-3 border-t border-[#181822] flex items-center justify-between text-[11px] font-mono-telemetry text-[#68687a]">
                      <span>{isActive ? 'CURRENT ACTIVE VIEW' : 'ENGAGE PROTOCOL'}</span>
                      <span className="text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity">
                        &rarr;
                      </span>
                    </div>

                    {/* Hover Gold Ambient Shimmer */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#c5a059]/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                );
              })}
            </div>

            {/* Quick Fast-Track Action to Order Gateway */}
            <div className="mt-12 p-6 rounded-sm border border-[#2a2a3c] bg-gradient-to-r from-[#101018] via-[#0e0e14] to-[#12121c] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono-telemetry text-[#c5a059] uppercase tracking-widest block">
                  FAST-TRACK ADMISSION
                </span>
                <h4 className="font-serif-luxury text-lg text-white font-medium mt-1">
                  Ready to Initiate Sovereign Prerequisite Order?
                </h4>
                <p className="text-xs text-[#8c8c9e] mt-1">
                  Enter the prerequisite financial verification gateway and proceed to the multi-stage registration funnel.
                </p>
              </div>
              <button
                onClick={() => handleItemClick('order')}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#c5a059] to-[#9e7d38] hover:from-[#d8b56d] hover:to-[#b08d42] text-[#07070a] font-serif-luxury text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)] whitespace-nowrap"
              >
                Enter Order Gateway
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
