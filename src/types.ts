export type ViewRoute = 
  | 'home' 
  | 'order' 
  | 'services' 
  | 'rules' 
  | 'royal-attires' 
  | 'faq' 
  | 'part1' 
  | 'part2' 
  | 'part3' 
  | 'part4' 
  | 'part5' 
  | 'confirmation';

export interface ApplicantInfo {
  legalName: string;
  permanentAddress: string;
  contactEmail: string;
  mobileNumber: string;
  passportNumber?: string;
  emergencyContact?: string;
}

export interface CoGuest {
  id: string;
  guestNumber: number;
  name: string;
  address: string;
  age: string;
  contact: string;
  adultVerified: boolean;
  infectiousDiseaseStatus: boolean;
  mentalWellnessStatus: boolean;
  specializedCareStatus: boolean;
}

export interface AccommodationOption {
  id: string;
  title: string;
  pricePerNight: number;
  description: string;
  features: string[];
}

export interface PhysicianTierOption {
  id: string;
  title: string;
  pricePerDay: number;
  description: string;
  roster: string;
}

export interface GlobalServiceTierOption {
  id: string;
  title: string;
  basePrice: number;
  description: string;
  privilegesSummary: string;
}

export interface RoyalPrivilege {
  id: string;
  name: string;
  category: 'clinical' | 'enclave' | 'logistics' | 'gastronomy';
  price: number;
  badge: string;
  description: string;
}

export interface ConsentQuestion {
  id: number;
  category: string;
  title: string;
  protocolDescription: string;
  mandatoryWarning: string;
  compliantLabel: string;
  nonCompliantLabel: string;
}

export interface SovereignRule {
  id: number;
  ruleCode: string;
  category: 'Tech Bans' | 'Medical Rules' | 'Sovereign Security' | 'Fleet Management' | 'Residency/Cottage Rules' | 'Lifestyle Towers' | 'Legal Compliances';
  title: string;
  summary: string;
  fullDescription: string;
  enforcementProtocol: string;
}

export interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
  statuteReference: string;
}

export interface RoyalAttireItem {
  id: string;
  category: 'Cloths' | 'Jewelries' | 'Accessories';
  title: string;
  subtitle: string;
  primaryImage: string;
  secondaryImage: string;
  primaryPerspectiveLabel: string;
  secondaryPerspectiveLabel: string;
  description: string;
  materials: string[];
  biometricSpecs: string;
}
