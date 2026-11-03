import { ApplicantInfo, CoGuest } from '../types';
import { ACCOMMODATION_OPTIONS, PHYSICIAN_TIER_OPTIONS, GLOBAL_SERVICE_TIERS, ROYAL_PRIVILEGES_LIST } from '../data/privilegesData';

const KEY_APPLICANT = 'aegis_applicant_info';
const KEY_CO_GUESTS = 'aegis_co_guests_list';
const KEY_SERVICES = 'aegis_selected_services';
const KEY_CONFIG = 'aegis_order_config';
const KEY_COMPLETED_ORDER = 'aegis_completed_order';

export interface OrderConfig {
  headCount: number;
  accommodationId: string;
  physicianTierId: string;
  serviceTierId: string;
  stayDurationDays: number;
}

export const getStoredApplicant = (): ApplicantInfo | null => {
  try {
    const raw = localStorage.getItem(KEY_APPLICANT);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const setStoredApplicant = (info: ApplicantInfo): void => {
  localStorage.setItem(KEY_APPLICANT, JSON.stringify(info));
};

export const getStoredCoGuests = (): CoGuest[] => {
  try {
    const raw = localStorage.getItem(KEY_CO_GUESTS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const setStoredCoGuests = (guests: CoGuest[]): void => {
  localStorage.setItem(KEY_CO_GUESTS, JSON.stringify(guests));
};

export const getStoredServices = (): string[] => {
  try {
    const raw = localStorage.getItem(KEY_SERVICES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const setStoredServices = (serviceIds: string[]): void => {
  localStorage.setItem(KEY_SERVICES, JSON.stringify(serviceIds));
};

export const getStoredConfig = (): OrderConfig => {
  try {
    const raw = localStorage.getItem(KEY_CONFIG);
    if (raw) return JSON.parse(raw);
  } catch {
    // fallback
  }
  return {
    headCount: 1,
    accommodationId: 'cliffside-villa',
    physicianTierId: 'consilium-tier',
    serviceTierId: 'tier-grand',
    stayDurationDays: 7
  };
};

export const setStoredConfig = (config: OrderConfig): void => {
  localStorage.setItem(KEY_CONFIG, JSON.stringify(config));
};

export const getStoredCompletedOrder = () => {
  try {
    const raw = localStorage.getItem(KEY_COMPLETED_ORDER);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const setStoredCompletedOrder = (order: any): void => {
  localStorage.setItem(KEY_COMPLETED_ORDER, JSON.stringify(order));
};

export const clearConsentProgress = (): void => {
  sessionStorage.removeItem('aegis_consent_current_q');
  sessionStorage.removeItem('aegis_consent_answers');
};

export interface PriceCompilation {
  accommodationSubtotal: number;
  physicianSubtotal: number;
  serviceTierSubtotal: number;
  coGuestsBaseSubtotal: number;
  servicesAddonsSubtotal: number;
  sanitationAndHarborLevy: number;
  hasMentalWellnessFlag: boolean;
  hasSpecializedCareFlag: boolean;
  mentalWellnessMultiplier: number;
  specializedCareMultiplier: number;
  compoundingTotalMultiplier: number;
  subtotalBeforeSurcharges: number;
  surchargeAmount: number;
  grandTotal: number;
}

export const computeBookingPrice = (
  config: OrderConfig,
  coGuests: CoGuest[],
  selectedServices: string[]
): PriceCompilation => {
  const accommodation = ACCOMMODATION_OPTIONS.find(a => a.id === config.accommodationId) || ACCOMMODATION_OPTIONS[0];
  const physician = PHYSICIAN_TIER_OPTIONS.find(p => p.id === config.physicianTierId) || PHYSICIAN_TIER_OPTIONS[0];
  const serviceTier = GLOBAL_SERVICE_TIERS.find(s => s.id === config.serviceTierId) || GLOBAL_SERVICE_TIERS[0];

  const days = config.stayDurationDays || 7;
  const accommodationSubtotal = accommodation.pricePerNight * days;
  const physicianSubtotal = physician.pricePerDay * days;
  const serviceTierSubtotal = serviceTier.basePrice;

  // Base fee per co-guest: $45,000 for sovereign logistics, screening & bio-clearance
  const coGuestsCount = Math.max(0, config.headCount - 1);
  const coGuestsBaseSubtotal = coGuestsCount * 45000;

  // Calculate selected services
  const servicesAddonsSubtotal = selectedServices.reduce((sum, sId) => {
    const privilege = ROYAL_PRIVILEGES_LIST.find(p => p.id === sId);
    return sum + (privilege ? privilege.price : 0);
  }, 0);

  const sanitationAndHarborLevy = 50000;

  // Check dynamic billing flags from Part 2 co-guests
  const hasMentalWellnessFlag = coGuests.some(g => g.mentalWellnessStatus);
  const hasSpecializedCareFlag = coGuests.some(g => g.specializedCareStatus);

  // Compounding multipliers:
  // Mental wellness requires dedicated psychiatric sovereign orderly + constant neurological monitoring: 1.25x
  // Specialized disability/care requires dedicated acute nursing + adapted hydrofoil & surgical lifters: 1.35x
  let multiplier = 1.0;
  let mentalWellnessMultiplier = 1.0;
  let specializedCareMultiplier = 1.0;

  if (hasMentalWellnessFlag) {
    mentalWellnessMultiplier = 1.25;
    multiplier *= mentalWellnessMultiplier;
  }
  if (hasSpecializedCareFlag) {
    specializedCareMultiplier = 1.35;
    multiplier *= specializedCareMultiplier;
  }

  const subtotalBeforeSurcharges = 
    accommodationSubtotal + 
    physicianSubtotal + 
    serviceTierSubtotal + 
    coGuestsBaseSubtotal + 
    servicesAddonsSubtotal + 
    sanitationAndHarborLevy;

  const grandTotal = Math.round(subtotalBeforeSurcharges * multiplier);
  const surchargeAmount = grandTotal - subtotalBeforeSurcharges;

  return {
    accommodationSubtotal,
    physicianSubtotal,
    serviceTierSubtotal,
    coGuestsBaseSubtotal,
    servicesAddonsSubtotal,
    sanitationAndHarborLevy,
    hasMentalWellnessFlag,
    hasSpecializedCareFlag,
    mentalWellnessMultiplier,
    specializedCareMultiplier,
    compoundingTotalMultiplier: multiplier,
    subtotalBeforeSurcharges,
    surchargeAmount,
    grandTotal
  };
};
