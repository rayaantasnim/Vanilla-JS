import { AccommodationOption, PhysicianTierOption, GlobalServiceTierOption, RoyalPrivilege } from '../types';

export const ACCOMMODATION_OPTIONS: AccommodationOption[] = [
  {
    id: 'lagoon-pavilion',
    title: 'Sovereign Overwater Lagoon Pavilion',
    pricePerNight: 65000,
    description: 'Cantilevered directly over the turquoise coral lagoon, featuring private glass-bottom recovery lounge, Finnish dry cedar sauna, 4°C saltwater cryo-plunge basin, and private hydrofoil docking slip.',
    features: ['380 sq. meters private footprint', 'Direct seawater thermal plunge', 'Air-gapped acoustic study suite', '24/7 dedicated sovereign butler']
  },
  {
    id: 'cliffside-villa',
    title: 'Cliffside Obsidian Villa & Surgery Spa',
    pricePerNight: 120000,
    description: 'Carved into the volcanic basalt cliff with panoramic 270° Pacific horizon views. Includes an in-villa Class-100 micro-surgical recovery chamber, hyperbaric oxygen suite, and infinity mineral spring pool.',
    features: ['650 sq. meters tiered estate', 'Private surgical recovery suite', 'Geothermal lithium spring grotto', 'Dedicated clinical concierge & sommelier']
  },
  {
    id: 'sanctuary-citadel',
    title: 'Sovereign Sanctuary Citadel',
    pricePerNight: 240000,
    description: 'The pinnacle of global seclusion: an ultra-hardened subterranean and beachfront compound with private helipad, deep-sea submersible dock, blast-resistant blast shelter, and private operating theater.',
    features: ['1,400 sq. meters private compound', 'Private rooftop helipad & sub dock', 'Personal dual-station robotic surgery suite', 'Master executive chef & 6 medical fellows']
  }
];

export const PHYSICIAN_TIER_OPTIONS: PhysicianTierOption[] = [
  {
    id: 'fellow-tier',
    title: 'Chief Medical Officer & Personal Clinical Fellow',
    pricePerDay: 30000,
    roster: '1 Senior Attending Surgeon + 1 Dedicated Longevity Fellow',
    description: 'Direct bedside management by the Chief Medical Officer and an assigned clinical fellow providing continuous 24-hour vital biotelemetry oversight and daily metabolic protocol adjustments.'
  },
  {
    id: 'consilium-tier',
    title: 'Royal Consilium of 3 Senior Specialists',
    pricePerDay: 65000,
    roster: 'Epigeneticist, Interventional Cardiologist & Neuro-Regenerative Surgeon',
    description: 'A dedicated triumvirate of world-leading surgical authorities meeting twice daily to review real-time metabolomic readouts, calibrate cellular infusions, and guide physiological restoration.'
  },
  {
    id: 'laureate-tier',
    title: 'Sovereign Immortal Laureate Council of 7 Authorities',
    pricePerDay: 140000,
    roster: 'Consortium of 7 International Department Heads & Nobel-Nominated Clinicians',
    description: 'Unprecedented clinical supremacy: an entire sovereign cabinet of seven global authorities in genomics, cellular senescence, cardiopulmonary dynamics, and neural preservation devoted exclusively to your residency.'
  }
];

export const GLOBAL_SERVICE_TIERS: GlobalServiceTierOption[] = [
  {
    id: 'tier-imperial',
    title: 'Imperial Sovereign Clinical Tier',
    basePrice: 150000,
    privilegesSummary: 'Includes full baseline tomographic scanning, complete whole-genome sequencing, daily hyperbaric oxygen sessions, and custom epigenetic infusion series.',
    description: 'The baseline sovereign protocol establishing profound cellular renewal, metabolic re-sensitization, and systemic heavy-metal detoxification.'
  },
  {
    id: 'tier-grand',
    title: 'Grand Sovereign Dynasty Tier',
    basePrice: 320000,
    privilegesSummary: 'Expands into autologous stem cell expansion (300M cells), telomerase reactivation therapy, deep-tissue robotic rejuvenation, and personal Michelin molecular dining.',
    description: 'An aggressive multi-modal longevity intervention designed to turn back biological age indicators by five to seven chronological years.'
  },
  {
    id: 'tier-supreme',
    title: 'Sovereign Supreme Immortal Tier',
    basePrice: 650000,
    privilegesSummary: 'Full-spectrum biological overhaul: Yamanaka factor vector micro-infusions, autologous mitochondrial transplant, total biome reconstruction, and permanent biobank cryo-custody.',
    description: 'The apex of human cellular engineering: an exhaustive regenerative overhaul backed by lifetime sovereign medical asylum rights and perpetual health monitoring.'
  }
];

export const ROYAL_PRIVILEGES_LIST: RoyalPrivilege[] = [
  {
    id: 'priv-01',
    name: 'Whole-Genome High-Depth Telomere Sequencing',
    category: 'clinical',
    price: 35000,
    badge: 'Clinical Primacy',
    description: 'Ultra-deep 100x whole-genome sequencing paired with single-cell telomere length distribution mapping across twenty leukocyte subsets.'
  },
  {
    id: 'priv-02',
    name: 'Autologous Mesenchymal Stem Cell Mobilization',
    category: 'clinical',
    price: 95000,
    badge: 'Cellular Medicine',
    description: 'Harvesting, clean-room expansion, and intravenous plus intra-articular micro-infusion of 250 million autologous mesenchymal stem cells.'
  },
  {
    id: 'priv-03',
    name: 'Hyperbaric Oxygen Chamber Daily Protocols (3.0 ATA)',
    category: 'clinical',
    price: 25000,
    badge: 'Hyper-Oxygenation',
    description: 'Two-hour daily sessions inside our pressurized crystal chamber breathing 100% medical oxygen to trigger systemic angiogenesis and collagen rebuild.'
  },
  {
    id: 'priv-04',
    name: 'Continuous Neuro-Cognitive EEG & Vagal Stabilization',
    category: 'clinical',
    price: 20000,
    badge: 'Neurological Tuning',
    description: 'Subconscious theta-frequency synchronization, real-time auditory entrainment, and transcutaneous vagus nerve micro-current therapy.'
  },
  {
    id: 'priv-05',
    name: 'Subterranean Magnesium Floatarium Unlimited Access',
    category: 'enclave',
    price: 15000,
    badge: 'Sensory Seclusion',
    description: 'Unrestricted private sessions in Olympic-grade floatation pools containing 1,200 kg of pure medical-grade Epsom salts at skin temperature.'
  },
  {
    id: 'priv-06',
    name: 'Submersible Deep-Sea Marine Exploration Dives',
    category: 'enclave',
    price: 45000,
    badge: 'Oceanic Sovereignty',
    description: 'Piloted deep-water dives aboard our titanium research submarine down to 1,000 meters into the pristine volcanic oceanic trench.'
  },
  {
    id: 'priv-07',
    name: 'Dedicated Michelin Molecular Gastronomy Chef',
    category: 'gastronomy',
    price: 38000,
    badge: 'Bespoke Nutrition',
    description: 'Personalized culinary brigade preparing three daily bespoke meals matched down to the milligram of therapeutic micronutrients and polyphenols.'
  },
  {
    id: 'priv-08',
    name: 'Private Helipad Access & Sovereign Air Transit Shuttle',
    category: 'logistics',
    price: 50000,
    badge: 'Sovereign Transit',
    description: 'Direct helicopter transfers from regional hubs aboard our luxury twin-engine Sikorsky S-92 with priority air traffic corridor clearance.'
  },
  {
    id: 'priv-09',
    name: 'Liquid Nitrogen Biobank Custodial Trust (10-Year)',
    category: 'clinical',
    price: 60000,
    badge: 'Cryo-Custody',
    description: 'Long-term storage of harvested youthful stem cells and fibroblasts in our gravity-cooled subterranean liquid nitrogen bio-vault.'
  },
  {
    id: 'priv-10',
    name: 'Grand Cru Subterranean Wine Vault Sommelier Allocations',
    category: 'gastronomy',
    price: 32000,
    badge: 'Rare Vintages',
    description: 'Curated tastings of rare grand cru and biodynamic vintages certified for metabolic safety following clinical liver clearance.'
  },
  {
    id: 'priv-11',
    name: 'Sovereign Naval Escort & Outer Reef Mooring Buoy',
    category: 'logistics',
    price: 40000,
    badge: 'Maritime Defense',
    description: 'Dedicated sovereign patrol cutter protection and priority deep-water mooring for personal superyachts up to 120 meters length.'
  },
  {
    id: 'priv-12',
    name: 'Bespoke Wardrobe Tailoring in Rare Mulberry Silks',
    category: 'enclave',
    price: 18000,
    badge: 'Royal Attires',
    description: 'Three complete personalized sets of the Imperial Obsidian Robe and Cashmere Tunic tailored by master artisans to take home.'
  }
];
