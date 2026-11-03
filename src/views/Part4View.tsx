import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ViewRoute, ConsentQuestion } from '../types';
import { CONSENT_QUESTIONS } from '../data/consentQuestions';
import { clearConsentProgress } from '../utils/storage';
import { 
  Lock, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight,
  ShieldX
} from 'lucide-react';

interface Part4ViewProps {
  onNavigate: (route: ViewRoute) => void;
}

export const Part4View: React.FC<Part4ViewProps> = ({ onNavigate }) => {
  // Current active question index (0 to 19)
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Modal / confirmation state when a non-compliant option is clicked
  const [showAreYouSure, setShowAreYouSure] = useState<boolean>(false);

  // Rejection lock state
  const [isRejected, setIsRejected] = useState<boolean>(false);

  // References for GSAP animation
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentageTextRef = useRef<HTMLSpanElement>(null);
  const questionCardRef = useRef<HTMLDivElement>(null);

  // Overhead Progress Calculation: 0% to 100% based on currentIndex
  const progressPercent = Math.round((currentIndex / CONSENT_QUESTIONS.length) * 100);

  // GSAP tween for the overhead progress bar whenever currentIndex or isRejected changes
  useEffect(() => {
    if (progressBarRef.current) {
      if (isRejected) {
        // Red visual lock state
        gsap.to(progressBarRef.current, {
          backgroundColor: '#ef4444',
          duration: 0.4
        });
      } else {
        const targetWidth = `${progressPercent}%`;
        gsap.to(progressBarRef.current, {
          width: targetWidth,
          backgroundColor: '#c5a059',
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    }
  }, [currentIndex, progressPercent, isRejected]);

  // Animate question transition with GSAP
  useEffect(() => {
    if (questionCardRef.current && !isRejected && !showAreYouSure) {
      gsap.fromTo(
        questionCardRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [currentIndex, isRejected, showAreYouSure]);

  const activeQuestion: ConsentQuestion = CONSENT_QUESTIONS[currentIndex];

  // User selects Compliant option
  const handleCompliantSelect = () => {
    if (currentIndex + 1 < CONSENT_QUESTIONS.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finished all 20 questions! Route to Part 5
      onNavigate('part5');
    }
  };

  // User selects Non-Compliant option -> Reveal "Are you sure?" block
  const handleNonCompliantSelect = () => {
    setShowAreYouSure(true);
  };

  // User confirms they are sure about rejecting protocol -> Enter Rejection lockdown
  const handleConfirmRejection = () => {
    setShowAreYouSure(false);
    setIsRejected(true);
  };

  // User backs out from "Are you sure?" -> Keep answering Question
  const handleCancelRejection = () => {
    setShowAreYouSure(false);
  };

  // "Try Again" Reset Logic:
  // Leaves Parts 1, 2, and 3 data completely intact in local storage,
  // clears Part 4 progress states, rendering the consent wizard back at Question 1 for a fresh attempt!
  const handleTryAgain = () => {
    clearConsentProgress();
    setIsRejected(false);
    setShowAreYouSure(false);
    setCurrentIndex(0);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full min-h-[85vh] py-16 px-6 sm:px-12 max-w-4xl mx-auto">
      {/* OVERHEAD GSAP PROGRESS CONTAINER */}
      <div className="mb-10 p-6 bg-[#0c0c14] border border-[#222232] rounded-sm shadow-xl">
        <div className="flex items-center justify-between mb-3 text-xs font-mono-telemetry">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isRejected ? 'bg-red-500 animate-ping' : 'bg-[#c5a059]'}`}></span>
            <span className="uppercase tracking-widest text-[#9e9eb0]">
              {isRejected ? 'SOVEREIGN PROGRESSION STATUS: LOCKED' : 'SOVEREIGN CONSENT WIZARD PROGRESS'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#727286]">QUESTION {currentIndex + 1} OF {CONSENT_QUESTIONS.length}</span>
            <span 
              ref={percentageTextRef}
              className={`font-bold font-mono-telemetry text-sm ${
                isRejected ? 'text-red-400' : 'text-[#c5a059]'
              }`}
            >
              {isRejected ? 'LOCKED' : `${progressPercent}%`}
            </span>
          </div>
        </div>

        {/* Progress track */}
        <div className="w-full h-3 bg-[#161622] rounded-full overflow-hidden p-0.5 border border-[#262638]">
          <div
            ref={progressBarRef}
            className="h-full rounded-full transition-all"
            style={{ width: `${progressPercent}%`, backgroundColor: '#c5a059' }}
          ></div>
        </div>
      </div>

      {/* STATE 1: REJECTION LOCKDOWN SCREEN */}
      {isRejected ? (
        <div className="p-8 sm:p-12 border-2 border-red-900/60 bg-[#140b0b] rounded-sm text-center shadow-[0_0_50px_rgba(239,68,68,0.2)] animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-red-950/60 border border-red-500/50 flex items-center justify-center mx-auto mb-6 text-red-400">
            <ShieldX className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono-telemetry uppercase tracking-widest text-red-400 block mb-2">
            // APPLICATION ADMISSION REJECTED //
          </span>

          <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f7e8e8] mb-4">
            We are sorry, your order cannot be processed.
          </h2>

          <p className="text-xs sm:text-sm text-[#d1aaaa] max-w-xl mx-auto leading-relaxed mb-6 font-light">
            Due to non-compliance with AEGIS Island Medical Sovereign Statutes, your admission profile 
            cannot be certified. Sovereign clinical, biological decontamination, and financial protocols 
            are non-negotiable prerequisites.
          </p>

          <div className="p-4 bg-[#1f1010] border border-red-900/40 rounded-xs max-w-lg mx-auto mb-8 text-left text-xs text-[#d8a8a8]">
            <p className="font-mono-telemetry text-[11px] uppercase tracking-wider text-red-300 mb-1">
              Statutory Non-Compliance Record:
            </p>
            <p>
              Rejected: <strong>{activeQuestion.title}</strong> ({activeQuestion.category})
            </p>
            <p className="text-[11px] text-[#aa8080] mt-1">
              Parts 1, 2, and 3 registration data remain securely cached in your local session.
            </p>
          </div>

          {/* Prominent "Try Again" Button */}
          <button
            onClick={handleTryAgain}
            className="px-10 py-4 bg-gradient-to-r from-red-600 via-red-500 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-serif-luxury text-xs tracking-[0.25em] uppercase font-bold transition-all shadow-[0_0_25px_rgba(239,68,68,0.4)] flex items-center justify-center gap-3 mx-auto cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again (Reset to Question 1)</span>
          </button>
        </div>
      ) : showAreYouSure ? (
        /* STATE 2: "ARE YOU SURE?" CONFIRMATION BLOCK */
        <div className="p-8 sm:p-12 border border-amber-600/50 bg-[#14100a] rounded-sm text-center shadow-2xl animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-amber-950/60 border border-amber-500/50 flex items-center justify-center mx-auto mb-5 text-amber-400">
            <AlertTriangle className="w-7 h-7" />
          </div>

          <span className="text-xs font-mono-telemetry uppercase tracking-widest text-amber-400 block mb-2">
            CRITICAL SOVEREIGN WARNING
          </span>

          <h2 className="text-2xl font-serif-luxury font-bold text-[#f7eedc] mb-3">
            Are you sure you wish to reject this sovereign protocol?
          </h2>

          <p className="text-xs sm:text-sm text-[#c8baa0] max-w-xl mx-auto leading-relaxed mb-6 font-light">
            Selecting this non-compliant response immediately terminates your application progress 
            and locks the registration tunnel. AEGIS Island Medical admits only patrons who grant 
            unconditional compliance to all twenty foundational statutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCancelRejection}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#1e1a12] border border-[#c5a059] hover:bg-[#2a2418] text-[#f7e7c4] font-serif-luxury text-xs tracking-[0.2em] uppercase font-semibold transition-all cursor-pointer"
            >
              Reconsider & Continue Consent
            </button>

            <button
              onClick={handleConfirmRejection}
              className="w-full sm:w-auto px-8 py-3.5 bg-red-950/80 border border-red-700 hover:bg-red-900 text-red-200 font-serif-luxury text-xs tracking-[0.2em] uppercase font-semibold transition-all cursor-pointer"
            >
              Confirm Rejection & Lock Order
            </button>
          </div>
        </div>
      ) : (
        /* STATE 3: ACTIVE PROTOCOL QUESTION CARD (One at a time) */
        <div 
          ref={questionCardRef}
          className="border border-[#1f1f2e] bg-[#0c0c14] p-8 sm:p-10 rounded-sm shadow-2xl"
        >
          {/* Question category & ordinal */}
          <div className="flex items-center justify-between pb-4 border-b border-[#1b1b26] mb-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-xs bg-[#1a1a26] border border-[#2a2a3c] text-[10px] font-mono-telemetry uppercase tracking-wider text-[#c5a059]">
                {activeQuestion.category}
              </span>
            </div>
            <span className="text-[11px] font-mono-telemetry text-[#767688]">
              STATUTE #{activeQuestion.id.toString().padStart(2, '0')} OF 20
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-serif-luxury text-[#f4f4f8] font-bold mb-4">
            {activeQuestion.title}
          </h2>

          <div className="p-5 bg-[#101018] border border-[#20202e] rounded-xs mb-6">
            <p className="text-xs sm:text-sm text-[#b0b0c2] leading-relaxed font-light text-justify">
              {activeQuestion.protocolDescription}
            </p>
          </div>

          <div className="mb-8 p-3 bg-[#181108] border-l-2 border-[#c5a059] text-[11px] font-mono-telemetry text-[#dfc282]">
            {activeQuestion.mandatoryWarning}
          </div>

          {/* Strict Interactive Choices */}
          <div className="space-y-4">
            {/* Compliant Option */}
            <button
              onClick={handleCompliantSelect}
              className="w-full p-5 rounded-sm border border-[#26263a] bg-[#101018] hover:border-[#c5a059] hover:bg-[#141422] text-left transition-all duration-200 flex items-center justify-between group cursor-pointer shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-full border border-[#444458] group-hover:border-[#c5a059] group-hover:bg-[#c5a059]/20 flex items-center justify-center transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#f0f0f5] group-hover:text-[#f4e8cf]">
                  {activeQuestion.compliantLabel}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            {/* Non-Compliant Option */}
            <button
              onClick={handleNonCompliantSelect}
              className="w-full p-4 rounded-sm border border-[#221616] bg-[#0e0909] hover:border-red-900 hover:bg-[#160c0c] text-left transition-all duration-200 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-full border border-[#4a2828] group-hover:border-red-500 flex items-center justify-center transition-colors">
                  <XCircle className="w-3.5 h-3.5 text-red-500 opacity-60 group-hover:opacity-100" />
                </div>
                <span className="text-xs text-[#a08282] group-hover:text-red-300">
                  {activeQuestion.nonCompliantLabel}
                </span>
              </div>
              <span className="text-[10px] font-mono-telemetry text-[#805050] uppercase tracking-wider">
                NON-COMPLIANT
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
