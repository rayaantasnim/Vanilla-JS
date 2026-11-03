import { SovereignRule } from '../types';

export const SOVEREIGN_RULES: SovereignRule[] = [
  // SECTION 1: TECH BANS (Rules 1 - 7)
  {
    id: 1,
    ruleCode: 'TB-01',
    category: 'Tech Bans',
    title: 'Absolute Cellular & Commercial RF Emitter Embargo',
    summary: 'Commercial smartphones, cellular transmitters, and unlicensed Wi-Fi equipment are confiscated at sovereign harbor checkpoint.',
    fullDescription: 'All commercial cellular handsets, smartbands, satellite communicators, and uncalibrated radio frequency transmitters are categorically prohibited across the sovereign boundaries of AEGIS Island. Upon arrival at the offshore marine reception terminal, guests are required to surrender all consumer electronics to the Sovereign Signals Command for secure biometric vault containment. AEGIS operates within a hermetically sealed Faraday radio-quiet bubble calibrated to protect high-sensitivity epigenetic sequencing arrays and neurological resonance monitors from electro-magnetic distortion. Non-sovereign frequency hopping is treated as an intentional security intrusion and triggers immediate quarantine. In-sanctuary communication is exclusively facilitated through hardwired optical crystal terminals located within designated sovereign study chambers.',
    enforcementProtocol: 'Instant confiscation, acoustic-chamber biometric audit, and 24-hour communication escrow.'
  },
  {
    id: 2,
    ruleCode: 'TB-02',
    category: 'Tech Bans',
    title: 'Zero Commercial Cloud Storage & Telemetry Syncing',
    summary: 'Prohibition of automated sync utilities to third-party cloud architectures (iCloud, Google Cloud, AWS, OneDrive).',
    fullDescription: 'Under Sovereign Medical Statute VII, any digital artifact created or viewed within the enclave must never interface with public commercial cloud infrastructure. Automated photo uploaders, background drive sync daemons, and operating system diagnostic telemetry collectors must be permanently disabled prior to boarding sovereign sea-tenders. The enclave provides its own internal air-gapped cryptographic repository. Any device discovered transmitting background packets toward public server IPs is immediately isolated by the autonomous perimeter network defense system, and all unencrypted storage sectors undergo cryptographic zero-fill erasure to defend the supreme anonymity of our attending patrons.',
    enforcementProtocol: 'Perimeter packet kill-switch, cryptographic zero-wipe of breached volumes, and mandatory security review.'
  },
  {
    id: 3,
    ruleCode: 'TB-03',
    category: 'Tech Bans',
    title: 'Ban on Optical Recording & Wearable Smart Lenses',
    summary: 'Strict prohibition of hidden pinhole lenses, smart eyewear, body cameras, and unverified smart contact optics.',
    fullDescription: 'Sovereign seclusion requires absolute spatial discretion for all international dignitaries, monarchs, and founders residing within the healing compound. Wearable optical devices including smart glasses, camera-equipped spectacle frames, augmented reality headsets, and non-certified biophotonic contact lenses are strictly banned. All personal luggage undergoes multi-spectrum X-ray and terahertz optical lens detection scans during maritime arrival. The unauthorized possession of any covert photographic or video recording instrument carries immediate expulsion from AEGIS Island Medical, complete forfeiture of sovereign deposits, and permanent blacklisting from all IDAI Universe allied medical domains.',
    enforcementProtocol: 'Terahertz lens inspection, permanent equipment forfeiture, and instant revocation of medical reservation.'
  },
  {
    id: 4,
    ruleCode: 'TB-04',
    category: 'Tech Bans',
    title: 'Prohibition of Commercial Drones & Aerial Micro-Robotics',
    summary: 'No private unmanned aerial vehicles, quadcopters, or autonomous micro-sensors are permitted within 12 nautical miles.',
    fullDescription: 'AEGIS Island Medical maintains an active electromagnetic and acoustic anti-drone umbrella extending twelve nautical miles seaward and twenty thousand feet vertically. Commercial quadcopters, hobbyist aerial drones, micro-sensor swarms, and autonomous tethered balloons are classified as hostile surveillance incursions. Any aerial system breaching the sovereign outer reef is intercepted via high-energy directional microwave neutralizing arrays and tractor grappling countermeasures. Guests are strictly instructed that personal recreational aerial photography is impossible within the sanctuary, as all autonomous flight software fails upon entering our active GPS-spoofed sovereign airspace.',
    enforcementProtocol: 'Autonomous microwave neutralization, maritime salvage destruction, and sovereign airspace breach citation.'
  },
  {
    id: 5,
    ruleCode: 'TB-05',
    category: 'Tech Bans',
    title: 'Exclusion of Unapproved Neural & Biometric Wearables',
    summary: 'Commercial smart rings, fitness trackers, and uncalibrated consumer EEG headbands must be removed.',
    fullDescription: 'Consumer fitness trackers, commercial smart rings, consumer sleep bands, and unregulated bio-impedance sensors introduce significant electrical artifacts into the island’s precision epigenetic telemetry arrays. Upon admission to the clinical pavilion, guests will exchange all consumer wearables for the official AEGIS 24K Gold Telemetry Torc or Obsidian Pulse Signet. These sovereign clinical relics interface directly with the attending physician’s continuous hemodynamics monitor via localized encrypted near-field optical pulses, providing medical-grade biometrics without leaking raw physiological telemetry to unvetted multinational consumer databases.',
    enforcementProtocol: 'Replacement with sovereign gold/obsidian medical relics, baseline sensor isolation, and continuous telemetry check.'
  },
  {
    id: 6,
    ruleCode: 'TB-06',
    category: 'Tech Bans',
    title: 'Prohibition of Rogue Wi-Fi Hotspots & Mesh Transceivers',
    summary: 'Personal cellular hotspots, LoRa long-range radios, and mesh network pucks are strictly barred.',
    fullDescription: 'The creation of private ad-hoc wireless networks, personal Wi-Fi hotspots, LoRa low-frequency transceivers, or decentralized mesh nodes within the residential pavilions is strictly forbidden. The island’s atmospheric architecture is deliberately maintained at an ultralow electromagnetic baseline to support deep-phase cellular mitochondrial restoration and parasympathetic stabilization. Spectrum monitoring sensors continuously triangulate any unregistered RF signal above -110 dBm. Operators of unauthorized transmitters will face immediate isolation of cottage electrical mains and a formal security interrogation by the Sovereign Marshal.',
    enforcementProtocol: 'Directional RF triangulation, cottage power isolation, and sovereign marshal compliance audit.'
  },
  {
    id: 7,
    ruleCode: 'TB-07',
    category: 'Tech Bans',
    title: 'Restriction on Non-Airgapped Computing Platforms',
    summary: 'Personal laptops brought for sovereign study must remain permanently disconnected from external modems.',
    fullDescription: 'Guests requiring access to personal computing machinery for business governance or sovereign statecraft may bring certified air-gapped laptops into their private study quarters. However, such hardware must be physically examined by the Sovereign Cyber Command prior to cottage placement. Hardware wireless cards and Bluetooth transceivers will be physically shuttered or disabled via sovereign tamper-evident Faraday sleeves. Any attempt to bridge island optical terminals to personal machines without written dispensation from the Chief Medical Officer constitutes a critical breach of the Sovereign Enclave Charter.',
    enforcementProtocol: 'Tamper-evident sealing, physical RF port deactivation, and mandatory sign-off from Chief Medical Officer.'
  },

  // SECTION 2: MEDICAL RULES (Rules 8 - 15)
  {
    id: 8,
    ruleCode: 'MR-08',
    category: 'Medical Rules',
    title: 'Mandatory Full-Spectrum Chemical Antimicrobial Mist Wash',
    summary: 'Compulsory non-toxic electrostatic biological decontamination upon crossing the offshore threshold.',
    fullDescription: 'Every incoming patron and permitted guest must undergo complete electrostatic decontamination misting at the Marine Quarantine Gateway prior to stepping onto island soil. The proprietary solution consists of aerosolized hypochlorous biocide, organic botanical enzymes, and lipid-envelope neutralizers designed to eradicate foreign pathogens, drug-resistant bacterial strains, and fungal spores without irritating human mucosal linings. Refusal to proceed through the decontaminating atmospheric tunnel will result in the immediate return of the arrival tender to international waters without clinical assessment or refund of escrow.',
    enforcementProtocol: 'Automated biometric gateway lockdown, 180-second mist cycle, and skin flora microbiological assay.'
  },
  {
    id: 9,
    ruleCode: 'MR-09',
    category: 'Medical Rules',
    title: 'Universal Optical & Tomographic Baseline Full-Body Scans',
    summary: 'Unconditional acceptance of initial clothing-free optical tomography and full-body volumetric MRI.',
    fullDescription: 'Precision longevity medicine demands flawless diagnostic baselines. Within three hours of arrival, each patient must enter the Sovereign Diagnostics Rotunda for clothing-free multi-spectral optical topography, dual-source photon-counting CT, and whole-body 7-Tesla volumetric MRI. These procedures establish exact volumetric measurements of visceral adipose distribution, arterial calcification, soft tissue symmetry, and cellular density gradients. Modesty concerns are addressed through gender-matched sovereign surgical fellows and automated shuttered scanning cubicles, but optical occlusion or garments of any kind are strictly prohibited during the scan.',
    enforcementProtocol: 'High-resolution voxel rendering, automated radiologist triage, and biometric baseline calibration.'
  },
  {
    id: 10,
    ruleCode: 'MR-10',
    category: 'Medical Rules',
    title: 'Absolute Surrender of External Pharmaceuticals & Supplements',
    summary: 'All external prescription drugs, nootropics, vitamins, and private supplements must be surrendered to the pharmacy.',
    fullDescription: 'All medications, vitamins, proprietary peptides, and holistic compounds brought by patients must be surrendered upon arrival to the Sovereign Apothecary. Our attending pharmacologists conduct mass-spectrometry purity verification on all surrendered compounds. While essential maintenance medications (such as critical cardiac regulators) will be re-issued in standardized sovereign packaging, all non-essential supplements and unverified nootropics are impounded for the duration of the visit. This ensures zero biochemical interference with the island’s intensive epigenetic reprogramming infusions and metabolic reset diets.',
    enforcementProtocol: 'Mass-spectrometer chemical assay, sovereign apothecary re-dispensing, and pharmaceutical lockbox storage.'
  },
  {
    id: 11,
    ruleCode: 'MR-11',
    category: 'Medical Rules',
    title: 'Unrestricted Cross-Gender Clinical Staffing Discretion',
    summary: 'Clinical procedures and surgical interventions are staffed based exclusively on specialized merit without gender constraints.',
    fullDescription: 'AEGIS Island Medical selects attending surgeons, anesthesiologists, nursing fellows, and physiological attendants based purely upon clinical distinction and peer-reviewed surgical mastery. Patients may not impose gender-based staffing restrictions for operating rooms, hyperbaric chambers, biological wash suites, or emergency clinical response teams. By entering the sovereign medical pathway, all applicants unconditionally acknowledge and consent that medical examinations, including intimate physical evaluations and catheterizations, will be conducted by the most qualified specialist available regardless of gender.',
    enforcementProtocol: 'Consilium operational discretion, zero-preference staffing mandate, and unified clinical protocol enforcement.'
  },
  {
    id: 12,
    ruleCode: 'MR-12',
    category: 'Medical Rules',
    title: 'Continuous Biotelemetry & Vagal Tone Monitoring',
    summary: 'Constant 24/7 telemetry tracking of heart rate variability, core temperature, and neurological states.',
    fullDescription: 'Patients must continuously wear their assigned sovereign biometric artifact throughout their tenure on AEGIS Island. Removing the device triggers an automated dispatch of the nearest sovereign wellness orderly to verify the patient’s physical integrity. The biometric stream monitors continuous electrocardiography, photoplethysmography, galvanic skin conductance, and core thermometry. These data points feed our predictive clinical neural network, allowing the Attending Consilium to anticipate vasovagal shifts, inflammatory spikes, or medication adverse reactions hours before clinical symptoms manifest.',
    enforcementProtocol: 'Real-time telemetry link, automated loss-of-signal dispatch, and continuous physiological logging.'
  },
  {
    id: 13,
    ruleCode: 'MR-13',
    category: 'Medical Rules',
    title: 'Mandatory Blood Chemistry & Epigenetic Biomarker Extraction',
    summary: 'Daily morning biological sampling including arterial micro-draws and venous metabolomic panels.',
    fullDescription: 'Every morning at 06:00 hours, a sovereign phlebotomy specialist visits the patient’s private pavilion to perform micro-volume venous blood sampling, salivary cortisol swabs, and urine metabolomic assays. These routine samples are non-negotiable prerequisites for the day’s tailored nutritional infusions, hyperbaric oxygen exposures, and peptide dosage calculations. Patients who decline morning clinical extraction will have all subsequent therapeutic interventions and spa access paused until baseline biological clearance is re-established.',
    enforcementProtocol: 'Daily 06:00 phlebotomy protocol, rapid micro-fluidic analysis, and dynamic infusion calibration.'
  },
  {
    id: 14,
    ruleCode: 'MR-14',
    category: 'Medical Rules',
    title: 'Sovereign Emergency Surgical Authority',
    summary: 'Unconditional advance medical proxy granted to the Chief Medical Officer for acute life-saving interventions.',
    fullDescription: 'In the event of acute medical emergencies, sudden cerebrovascular events, anaphylactic shock, or traumatic injury occurring within the sovereign territory, the Chief Medical Officer holds absolute legal and surgical proxy. The patient waives the requirement for external family notification or international consulate consultation prior to initiating life-saving surgical decompression, emergency cannulation, ECMO deployment, or trauma laparotomy. Our world-class trauma theater is fully self-sustaining with whole-blood cryo-banks and advanced robotic surgical suites.',
    enforcementProtocol: 'Pre-signed advance surgical proxy, robotic operating theater pre-clearance, and autonomous clinical governance.'
  },
  {
    id: 15,
    ruleCode: 'MR-15',
    category: 'Medical Rules',
    title: 'Mandatory Cellular De-Staging & Quarantine Protocols',
    summary: 'Immediate cottage-based containment if unexpected viral or bacterial mutations are detected.',
    fullDescription: 'If routine metabolomic or PCR diagnostics reveal an unexpected microbial contagion or biological mutation, the patient’s pavilion will instantly transition to negative-pressure bio-containment mode. Hermetic glass seals will engage automatically, and specialized HEPA-carbon air scrubbers will activate. During quarantine, all medical and nutritional supplies will be delivered via automated airlock ports. Quarantined guests will receive continuous telemedicine care and targeted antiviral cocktails until microbiological clearance is verified by two consecutive zero-pathogen genomic assays.',
    enforcementProtocol: 'Automated negative-pressure seal, airlock medical provisioning, and serial PCR validation.'
  },

  // SECTION 3: SOVEREIGN SECURITY (Rules 16 - 22)
  {
    id: 16,
    ruleCode: 'SS-16',
    category: 'Sovereign Security',
    title: 'Total Exclusion of Private Armed Mercenaries & Bodyguards',
    summary: 'Private security details, close protection personnel, and foreign armed escorts must disembark at the maritime perimeter.',
    fullDescription: 'AEGIS Island Medical exercises exclusive monopoly on security, intelligence, and physical protection within its territorial borders. Private executive protection teams, personal mercenaries, foreign military attaches, and armed bodyguards are strictly denied entry beyond the offshore anchorage. Personal security staff must remain quartered aboard their private vessels in the designated outer anchorage zone. The enclave is protected by our elite Sovereign Defense Corps, autonomous underwater acoustic sensors, and non-lethal perimeter denial arrays, guaranteeing a level of defense far superior to any commercial security detail.',
    enforcementProtocol: 'Armed perimeter disembarkation, sovereign security turnover, and offshore anchorage quarters for private staff.'
  },
  {
    id: 17,
    ruleCode: 'SS-17',
    category: 'Sovereign Security',
    title: 'Absolute Weapons & Kinetic Instrument Embargo',
    summary: 'Total ban on firearms, edged weapons, tactical knives, and personal defensive chemical sprays.',
    fullDescription: 'Under Sovereign Penal Statute IV, the possession of any firearm, projectile weapon, tactical blade exceeding three centimeters, electric stun baton, or chemical dispersal canister is an aggravated sovereign violation. All personal baggage and diplomatic pouches brought onto the island pass through automated neutron activation analysis and dual-energy radiography. Any discovered weaponry is cataloged, sealed in tamper-evident ballistic cases, and stored in the Marine Armory until the guest departs international waters. Attempted concealment results in instant expulsion and forfeiture of reservation rights.',
    enforcementProtocol: 'Neutron baggage analysis, marine armory impoundment, and immediate sovereign deportation.'
  },
  {
    id: 18,
    ruleCode: 'SS-18',
    category: 'Sovereign Security',
    title: 'Facial & Biometric Gait Recognition Mesh',
    summary: 'Ubiquitous biometric spatial awareness to prevent unauthorized zone crossings and guarantee patient safety.',
    fullDescription: 'To eliminate the necessity for cumbersome physical keycards or intrusive guard checkpoints, the island employs a discreet, ambient biometric recognition mesh. Infrared micro-apertures embedded in natural coral stone pillars and architectural bronze moldings continually verify patron identity via facial geometry and unique skeletal gait signatures. This ambient mesh grants frictionless access to authorized pavilions, gardens, and clinical theaters while softly chiming an acoustic warning if a guest inadvertently wanders near high-voltage energy substations or sensitive bio-clean laboratories.',
    enforcementProtocol: 'Ambient infrared mesh verification, frictionless access authorization, and zone-crossing telemetry.'
  },
  {
    id: 19,
    ruleCode: 'SS-19',
    category: 'Sovereign Security',
    title: 'Perimeter Maritime Buffer Zone & Sonar Interdiction',
    summary: 'Five-mile exclusion perimeter for unauthorized watercraft, yachts, and personal submersibles.',
    fullDescription: 'A five-nautical-mile maritime protection zone encircles AEGIS Island, marked by illuminated nautical telemetry buoys and monitored by 360-degree high-frequency synthetic aperture radar. Unregistered private yachts, tender craft, jet-skis, or private mini-submarines entering this security perimeter without prior sovereign clearance codes will be warned via marine VHF channel 16, followed by non-lethal acoustic hailing and sovereign fast-interception naval patrol tenders.',
    enforcementProtocol: 'High-frequency radar surveillance, long-range acoustic device hailing, and naval patrol boarding.'
  },
  {
    id: 20,
    ruleCode: 'SS-20',
    category: 'Sovereign Security',
    title: 'Randomized Sovereign Marshal Integrity Audits',
    summary: 'Routine security scans of luggage and cottage vestibules to guarantee zero prohibited contraband enters.',
    fullDescription: 'The Office of the Sovereign Marshal retains the right to conduct non-invasive electronic sweeps of pavilion vestibules and baggage transfer lockers at randomized intervals. These sweeps utilize volatile organic compound sniffers to detect illicit stimulants, unapproved synthetic peptides, or unauthorized telecommunications transmitters. These audits are conducted with utmost discretion and respect for privacy, ensuring the sovereign sanctuary remains untainted by black-market pharmaceuticals or corporate surveillance equipment.',
    enforcementProtocol: 'Electronic VOC sniffing sweeps, vestibule parcel scans, and confidential marshal audit reports.'
  },
  {
    id: 21,
    ruleCode: 'SS-21',
    category: 'Sovereign Security',
    title: 'Zero Tolerance for Verbal or Physical Staff Harassment',
    summary: 'Absolute requirement of civil dignity and respect toward all medical fellows, nurses, and attendants.',
    fullDescription: 'Patrons of AEGIS Island Medical, regardless of royal bloodline, diplomatic stature, or billionaire net worth, must interact with clinical personnel, medical fellows, and concierge attendants with supreme dignity. Demeaning behavior, verbal abuse, physical intimidation, or inappropriate advances toward medical staff are met with zero tolerance. A single substantiated violation leads to an immediate reprimand by the Sovereign Ethics Consilium, followed by compulsory relocation to a solitary clinical wing or permanent termination of the medical residency.',
    enforcementProtocol: 'Immediate Ethics Consilium review, clinical wing re-assignment, and potential unconditional expulsion.'
  },
  {
    id: 22,
    ruleCode: 'SS-22',
    category: 'Sovereign Security',
    title: 'Emergency Evacuation & Hardened Citadel Lockdown',
    summary: 'Automated bunker procedures in the event of severe Pacific meteorological or geopolitical events.',
    fullDescription: 'In the rare event of extreme tropical typhoons or geopolitical disturbances, all island residents will be escorted to the subterranean Sovereign Citadel carved directly into the basalt core of the island. The citadel features three months of independent atmospheric scrubbing, nuclear-grade blast doors, duplicate surgical theaters, and geothermal energy generators. During a Citadel Lockdown, all personal movement orders are issued directly by the Sovereign Commander, and compliance is mandatory for all guests and medical fellows without exception.',
    enforcementProtocol: 'Automated blast-door activation, subterranean biometric registration, and centralized command adherence.'
  },

  // SECTION 4: FLEET MANAGEMENT (Rules 23 - 29)
  {
    id: 23,
    ruleCode: 'FM-23',
    category: 'Fleet Management',
    title: 'Exclusive Use of Sovereign Electric & Hydrofoil Transports',
    summary: 'Personal internal combustion vehicles, gas golf carts, or uncertified personal conveyances are forbidden.',
    fullDescription: 'All land and lagoon transport across AEGIS Island is conducted exclusively via our fleet of whisper-quiet sovereign hydrofoil watercraft and autonomous electric obsidian shuttles. Personal gas-powered conveyances, personal scooters, or uncertified golf buggies are strictly banned to preserve pristine acoustic tranquility and zero-emission air purity. Shuttles are summoned on-demand via private cottage wall-consoles or voice request to the private butler, arriving at pavilion gates within three minutes.',
    enforcementProtocol: 'Zero-emission transport mandate, whisper-quiet electric drive regulation, and private concierge dispatch.'
  },
  {
    id: 24,
    ruleCode: 'FM-24',
    category: 'Fleet Management',
    title: 'Helipad Protocol & Night Aviation Restrictions',
    summary: 'Strict scheduling of helicopter transfers with mandatory noise-abatement flight corridors.',
    fullDescription: 'The AEGIS Helipad operates strictly between 07:00 and 21:00 hours to avoid disturbing regenerative sleep cycles and neuro-acoustic recovery therapies. All incoming helicopter flights must utilize twin-engine luxury craft equipped with noise-canceling rotor systems and approach through the South-Western Reef flight corridor. Night landings are strictly reserved for emergency medical evacuation flights authorized directly by the Chief Medical Officer.',
    enforcementProtocol: 'Corridor radar tracking, acoustic decibel monitoring, and emergency-only night exemption.'
  },
  {
    id: 25,
    ruleCode: 'FM-25',
    category: 'Fleet Management',
    title: 'Private Yacht Anchorage & Moorings Management',
    summary: 'Guest mega-yachts must anchor at designated outer moorings with greywater lock-valves sealed.',
    fullDescription: 'Guests arriving via private mega-yachts must moor at designated deep-water sovereign buoys located 1.5 nautical miles off the northern coral reef. Prior to anchoring, an AEGIS marine environmental officer will board the vessel to inspect and physically seal all blackwater and greywater discharge valves. Yachts must draw shore power from our submarine high-voltage cable or run certified Tier-4 low-emission generators. Yacht crew members must remain aboard unless granted specific day-passes to the harbor marina.',
    enforcementProtocol: 'Marine lock-valve sealing, submarine shore-power link, and crew perimeter pass verification.'
  },
  {
    id: 26,
    ruleCode: 'FM-26',
    category: 'Fleet Management',
    title: 'Submersible Fleet Operations & Marine Sanctuaries',
    summary: 'Regulated operational depths and strictly guided excursions for deep-sea exploration vessels.',
    fullDescription: 'AEGIS Island operates three sovereign research submersibles capable of descending into the nearby oceanic trench for deep-sea marine observation and hyperbaric sensory deprivation therapy. All submersible dives are piloted by certified sovereign deep-sea captains. Guests must never operate submersible craft independently. Dives are subject to strict marine sanctuary rules, prohibiting the touching or collection of benthic organisms, coral formations, or geological hydrothermal specimens.',
    enforcementProtocol: 'Certified sovereign pilot mandate, environmental telemetry logging, and marine sanctuary compliance.'
  },
  {
    id: 27,
    ruleCode: 'FM-27',
    category: 'Fleet Management',
    title: 'Harbor Tender Speed Limits & Wake Neutralization',
    summary: 'Strict 5-knot maximum speed inside the coral lagoon to protect underwater regenerative nursery beds.',
    fullDescription: 'All waterborne vessels operating within the inner lagoon and marina channels must adhere to a strict five-knot speed limit. The lagoon houses sensitive coral restoration nurseries, acoustic hydrophones, and sub-surface therapeutic floating pools that can be disrupted by vessel wakes. Any captain or tender pilot exceeding this threshold will have their vessel impounded at the outer marina and their maritime operating permit within sovereign waters permanently revoked.',
    enforcementProtocol: 'Laser Doppler speed checks, automatic wake penalty citations, and marina docking impoundment.'
  },
  {
    id: 28,
    ruleCode: 'FM-28',
    category: 'Fleet Management',
    title: 'Baggage Transfer & Automated Disinfection Shuttles',
    summary: 'Luggage is routed through dedicated subterranean robotic tunnels rather than surface roadways.',
    fullDescription: 'To maintain the optical elegance and sovereign peace of surface gardens, all guest luggage, medical cargo, and culinary provisions move through subterranean pneumatic and robotic transport tunnels. Upon tender arrival, luggage is transferred into hermetic sterilization pods, subjected to ultraviolet-C decontamination, and delivered directly to the guest’s pavilion dressing room within forty-five minutes of check-in, completely invisible to surface guests.',
    enforcementProtocol: 'Subterranean robotic routing, UV-C chamber disinfection, and automated dressing room delivery.'
  },
  {
    id: 29,
    ruleCode: 'FM-29',
    category: 'Fleet Management',
    title: 'Personal Watercraft & Jet-Ski Ban',
    summary: 'High-pitch recreational water toys are banned to preserve ocean acoustic hygiene for cetaceans.',
    fullDescription: 'Gasoline jet-skis, motorized hydro-boards, and high-pitch recreational watercraft are strictly forbidden anywhere in sovereign lagoon waters. Instead, guests have complimentary access to silent electric sea-scooters, carbon-fiber paddleboards, and human-powered sea kayaks. This rule preserves ocean acoustic hygiene, allowing wild dolphin pods and migrating humpback whales to frequent the lagoon reefs undisturbed throughout the year.',
    enforcementProtocol: 'Acoustic hydrophone monitoring, ban on gasoline watercraft, and electric equipment provision.'
  },

  // SECTION 5: RESIDENCY / COTTAGE RULES (Rules 30 - 36)
  {
    id: 30,
    ruleCode: 'RC-30',
    category: 'Residency/Cottage Rules',
    title: 'Strict Pavilion Noise Curfew & Circadian Acoustic Hygiene',
    summary: 'Zero external audio amplification between 21:00 and 08:00 to protect circadian melatonin cycles.',
    fullDescription: 'Every private sovereign pavilion and overwater cottage is acoustically isolated, yet outdoor terraces remain open to the gentle sounds of the Pacific surf. To foster restorative delta-wave sleep and cellular repair, external speakers, terrace entertainment, or loud conversations are prohibited between 21:00 and 08:00 hours. Pavilions are equipped with internal soundproofing and spatial acoustic speakers emitting calibrated pink-noise or 432 Hz restorative soundscapes synced to the patient’s personal circadian rhythm.',
    enforcementProtocol: 'Terrace decibel limiters, automated circadian soundscapes, and acoustic concierge courtesy notifications.'
  },
  {
    id: 31,
    ruleCode: 'RC-31',
    category: 'Residency/Cottage Rules',
    title: 'Controlled Dietary Ingestion & Room Service Monopolization',
    summary: 'No external foodstuffs, outside confectionery, or unapproved alcohol may be brought into the cottage.',
    fullDescription: 'All meals, snacks, elixirs, and beverages served in the private cottages are personally formulated by the patient’s attending physician and prepared by our Michelin-starred molecular nutrition team. Outside confectionery, private snack provisions, commercial packaged foods, and personal wine collections are strictly barred from the pavilions. Consuming unprescribed refined sugars or unmetered alcohol can disrupt hepatic clearance and invalidate sensitive metabolic markers being measured during the medical residency.',
    enforcementProtocol: 'Pantry verification sweeps, bespoke molecular kitchen menu lock, and metabolic purity enforcement.'
  },
  {
    id: 32,
    ruleCode: 'RC-32',
    category: 'Residency/Cottage Rules',
    title: 'Thermal Suite & Cryo-Plunge Safety Compliance',
    summary: 'Private cottage plunge pools and cedar saunas must be operated according to clinical time cards.',
    fullDescription: 'Each sovereign cottage includes a private infrared sauna, Finnish dry cedar room, and 4°C saltwater cryo-plunge basin. Patients must strictly adhere to the exposure schedules programmed into the cottage control tablet by their attending physiologist. Exceeding prescribed cryo-plunge durations or combining hyperthermia with heavy clinical sedatives is hazardous; emergency immersion sensors will trigger an alert if a patient remains in the cryo-basin past their personalized safety limit.',
    enforcementProtocol: 'Infrared occupancy sensors, automated thermal cutoffs, and direct nurse station telemetry alerts.'
  },
  {
    id: 33,
    ruleCode: 'RC-33',
    category: 'Residency/Cottage Rules',
    title: 'Mandatory Sovereign Relic Wardrobe On-Premises',
    summary: 'Guests must wear provided organic linen and bio-conductive silk garments in all common pavilions.',
    fullDescription: 'Within public island zones, dining atriums, and medical hallways, guests are required to wear the official AEGIS Royal Wardrobe layers—comprising organic unbleached bamboo linens, cashmere loungewear, or thermal nanoweave robes. Commercial logo wear, stiff denim, and synthetic micro-plastics are disallowed in common areas. This creates a unified visual aesthetic of regal calm and eliminates social signaling or fashion competition among our ultra-high-net-worth patrons.',
    enforcementProtocol: 'Regal wardrobe issuance, absence of commercial logos, and aesthetic decorum standard.'
  },
  {
    id: 34,
    ruleCode: 'RC-34',
    category: 'Residency/Cottage Rules',
    title: 'No Unauthorized Overnight Visitors in Private Pavilions',
    summary: 'Only pre-registered co-guests cleared in Part 2 of registration may reside in the accommodation.',
    fullDescription: 'Under Sovereign Residency Ordinance XII, only individuals explicitly named and cleared in the official `aegis_co_guests_list` registration may stay overnight in a private villa. Bringing unregistered third parties, personal flight crew, or yacht guests into the residential compounds is strictly forbidden. Any unauthorized individual detected by the biometric entry arch will be escorted off the island immediately by the Sovereign Guard, with the primary applicant facing significant administrative fines.',
    enforcementProtocol: 'Biometric doorway scanning, instant escort of unregistered visitors, and administrative billing levy.'
  },
  {
    id: 35,
    ruleCode: 'RC-35',
    category: 'Residency/Cottage Rules',
    title: 'Eco-Friendly Bio-Degradable Toiletries Requirement',
    summary: 'Only island-provided organic botanicals and zero-phosphate cleansers may be used in showers.',
    fullDescription: 'AEGIS Island treats 100% of its wastewater through proprietary biological membrane bioreactors before discharging pristine nutrient-balanced water into our coral reef gardens. Consequently, personal chemical shampoos, sulfate-laden body washes, and synthetic micro-bead soaps are prohibited in cottage bathrooms. Guests are provided with lavish bespoke botanical cleansers infused with rare Tahitian gardenia, volcanic ocean minerals, and cold-pressed marula oils formulated specifically for sensitive post-procedure skin.',
    enforcementProtocol: 'Zero-phosphate greywater inspection, provision of organic botanical grooming sets, and eco-drainage protection.'
  },
  {
    id: 36,
    ruleCode: 'RC-36',
    category: 'Residency/Cottage Rules',
    title: 'Smoking & Vaporizer Absolute Island Ban',
    summary: 'Zero combustion or aerosolized vaping permitted across all indoor, outdoor, and oceanfront zones.',
    fullDescription: 'Combustion tobacco products, cigars, herbal cigarettes, and e-cigarettes are strictly forbidden across every square meter of AEGIS Island, including private overwater balconies. Airborne particulates degrade clean air metrics and pose severe respiratory risks to patients undergoing pulmonary rejuvenation and post-anesthetic recovery. Dedicated nicotine replacement transdermal patches or sovereign herbal inhalers can be prescribed by the apothecary upon request for guests managing dependency.',
    enforcementProtocol: 'Optical smoke/aerosol laser detectors, $25,000 deep-cleaning sanitization levy, and medical reprimand.'
  },

  // SECTION 6: LIFESTYLE TOWERS (Rules 37 - 43)
  {
    id: 37,
    ruleCode: 'LT-37',
    category: 'Lifestyle Towers',
    title: 'Hyperbaric Oxygen Tower Induction Protocols',
    summary: 'Compulsory ear equalization training and strict flammable material screening before pressurization.',
    fullDescription: 'The multi-chamber Hyperbaric Oxygen Tower operates at pressures up to 3.0 ATA delivering 100% medical-grade oxygen to accelerate wound healing and stem cell mobilization. Prior to chamber entry, patients must strip of all metals, hairsprays, watches, and synthetic fibers to prevent static ignition. Guests must complete a certified middle-ear pressure equalization test conducted by our hyperbaric technicians. Anyone experiencing acute sinus blockage will be temporarily redirected to the ozone nebulization pavilion instead.',
    enforcementProtocol: 'Static-charge earth dissipation plate, pure cotton gown requirement, and certified technician monitoring.'
  },
  {
    id: 38,
    ruleCode: 'LT-38',
    category: 'Lifestyle Towers',
    title: 'Sensory Deprivation & Floatarium Decorum',
    summary: 'Silent contemplation protocols and mandatory pre-rinse before entering magnesium float pools.',
    fullDescription: 'The subterranean floatation rotunda features six Olympic-grade magnesium sulphate pools calibrated to exact human skin temperature (35.5°C). Patrons entering this sacred space must maintain absolute silence. A mandatory ten-minute hot shower using sovereign unperfumed soap must precede entry to maintain water clarity. The use of oils, suntan lotions, or hair styling products prior to floatation is prohibited, and floating sessions are monitored discreetly via underwater hydro-acoustic heart monitors.',
    enforcementProtocol: 'Pre-immersion shower verification, silent zone acoustic dampening, and hydro-acoustic safety link.'
  },
  {
    id: 39,
    ruleCode: 'LT-39',
    category: 'Lifestyle Towers',
    title: 'Molecular Dining Atrium Seating & Fasting Adherence',
    summary: 'Dining room access is calibrated strictly to the patient’s metabolic fasting and re-feeding schedule.',
    fullDescription: 'Dining reservations at the Celestial Atrium are coordinated automatically with the patient’s metabolic treatment schedule. If a patient is scheduled for intermittent fasting, cellular autophagy, or preparation for a sterile surgical procedure, the dining atrium host will gently deny admission and dispatch a nourishing electrolyte broth to the guest’s villa instead. Guests must honor their dietary prescriptions and not attempt to barter or order off-menu calories from adjoining tables.',
    enforcementProtocol: 'Automated biometric host terminal, synchronized fasting calendar, and physician dietary lock.'
  },
  {
    id: 40,
    ruleCode: 'LT-40',
    category: 'Lifestyle Towers',
    title: 'Sommelier Wine Vault & Metabolic Rationing',
    summary: 'Rare vintage wine tastings are restricted to patients with clinical hepatic green-status.',
    fullDescription: 'The AEGIS Subterranean Wine Vault contains over thirty thousand rare grand cru vintages, biodynamic champagnes, and historic single-malt spirits. However, alcohol consumption is treated as an active pharmacological exposure. Guests may only indulge in curated wine pairings if their morning hepatic panel, liver elastography, and inflammatory biomarkers reflect optimal "Green Status." Patients undergoing active stem cell colonization or peptide therapy will be served dealcoholized herbal distillations instead.',
    enforcementProtocol: 'Hepatic enzyme biomarker clearance, sommelier clinical authorization, and metabolic limit enforcement.'
  },
  {
    id: 41,
    ruleCode: 'LT-41',
    category: 'Lifestyle Towers',
    title: 'Fitness & Biomechanical Kinesiology Studio Supervision',
    summary: 'Independent free-weight lifting is prohibited; all sessions are guided by an accredited kinesiologist.',
    fullDescription: 'To eliminate the risk of musculoskeletal injury, joint strain, or cardiovascular over-exertion during intensive longevity regimens, patients may not use the high-performance biomechanical gym unassisted. All workouts are supervised one-on-one by a certified AEGIS exercise physiologist who monitors real-time lactic acid sensors, oxygen consumption, and eccentric muscle load. Personalized isometric, hypoxic, and EMS (electro-muscle stimulation) protocols are calibrated to optimize mitochondrial biogenesis.',
    enforcementProtocol: 'Compulsory physiologist escort, biometric load telemetry, and computerized resistance limits.'
  },
  {
    id: 42,
    ruleCode: 'LT-42',
    category: 'Lifestyle Towers',
    title: 'Thermal Mineral Spring Water Purity Standard',
    summary: 'No foreign soaps, therapeutic salts, or aromatic oils may be introduced into communal natural hot springs.',
    fullDescription: 'The island’s natural geothermal springs bubble up from deep subterranean volcanic vents, rich in bio-available sulfur, lithium, and silica. Guests soaking in the communal mineral grottos must never add personal bubble baths, bath bombs, or essential oils to the spring pools. The mineral composition is continuously tested every thirty minutes by automated robotic mass spectrometers to ensure exact therapeutic mineral ratios are sustained for optimal transdermal absorption.',
    enforcementProtocol: 'Automated mineral spectrometry, clean-soak ordinance, and natural spring integrity enforcement.'
  },
  {
    id: 43,
    ruleCode: 'LT-43',
    category: 'Lifestyle Towers',
    title: 'Sovereign Botanical Conservatory Quietude',
    summary: 'No voice communications or walking off established stone walkways in the rare orchid bioclimatic dome.',
    fullDescription: 'The 3-hectare Sovereign Botanical Conservatory houses endangered medicinal flora, prehistoric ferns, and over four hundred varieties of rare orchids. The atmosphere is saturated with beneficial plant phytoncides that stimulate natural killer cell activity and lower systemic cortisol. Visitors must remain on designated hand-carved basalt paths to protect delicate mycelial networks and must refrain from loud vocalizations or phone use while meditating in the floral pavilion.',
    enforcementProtocol: 'Guided basalt pathway rule, ambient acoustic monitoring, and botanical preservation compliance.'
  },

  // SECTION 7: LEGAL COMPLIANCES (Rules 44 - 50)
  {
    id: 44,
    ruleCode: 'LC-44',
    category: 'Legal Compliances',
    title: 'Exclusive Sovereign Jurisdiction & Civil Court Immunity',
    summary: 'All disputes are subject solely to the Sovereign Court of AEGIS Island under offshore maritime arbitration.',
    fullDescription: 'By entering the sovereign territory of AEGIS Island Medical, every applicant, guest, and sponsor irrevocably waives all rights to initiate civil lawsuits, medical malpractice claims, or legal litigation in foreign municipal courts—including courts in the United States, United Kingdom, European Union, or Switzerland. All contractual interpretations, procedural disagreements, or clinical disputes are submitted exclusively to the Sovereign Tribunal of AEGIS Island, composed of three retired international maritime judges sitting in closed sovereign arbitration.',
    enforcementProtocol: 'Pre-signed international jurisdiction waiver, offshore arbitration clause, and legal sovereign immunity.'
  },
  {
    id: 45,
    ruleCode: 'LC-45',
    category: 'Legal Compliances',
    title: 'Absolute Non-Disclosure of Fellow Patient Personas',
    summary: 'Perpetual confidentiality regarding the presence, identity, or medical conditions of other guests.',
    fullDescription: 'Every patron signs an ironclad Perpetual Sovereign Non-Disclosure Agreement prior to step-aboard approval. Acknowledging, referencing, or publicly revealing the identity, nationality, or presence of any other individual encountered on AEGIS Island—whether in memoirs, private correspondence, or media interviews—constitutes a liquidated damage breach assessed at $10,000,000 USD per violation. Our guests include heads of state, sovereign royalty, and technology leaders whose privacy is defended with absolute judicial tenacity.',
    enforcementProtocol: 'Perpetual NDA execution, $10,000,000 liquidated damages clause, and global legal enforcement.'
  },
  {
    id: 46,
    ruleCode: 'LC-46',
    category: 'Legal Compliances',
    title: 'DNA Sequencing Ownership & Genetic Data Destruction',
    summary: 'Guaranteed cryptographic incineration of patient genomic files upon departure unless archived by request.',
    fullDescription: 'Unlike commercial genomics platforms that commercialize or pool private DNA data, AEGIS Island Medical treats genetic code as sovereign personal property. Following the completion of the patient’s longevity program, the entire raw genomic sequencing dataset, epigenetic methylation maps, and gut microbiome analyses can either be transferred to a private offline cold-storage hardware ledger or cryptographically incinerated using DoD-grade data shredding standards. No genetic data is ever retained on internet-connected nodes.',
    enforcementProtocol: 'Offline hardware cold storage, certified DoD cryptographic shredding, and zero cloud retention.'
  },
  {
    id: 47,
    ruleCode: 'LC-47',
    category: 'Legal Compliances',
    title: 'Financial Settlement & Liquid Escrow Forfeiture Terms',
    summary: 'Strict non-refundable deposit terms and full escrow forfeiture upon willful protocol violation.',
    fullDescription: 'All medical reservations require full funding via sovereign bank wire transfer, gold bullion vault allocation, or verified cryptocurrency escrow at least thirty days prior to arrival. Due to the dedication of exclusive surgical teams, specialized cell cultures, and personalized pharmaceutical synthesis, cancellations within fourteen days are 100% non-refundable. Furthermore, any guest expelled for willful violations of sovereign safety or security rules forfeits all deposited funds without right of offset or counter-claim.',
    enforcementProtocol: 'Upfront irrevocable escrow wire, strict cancellation forfeiture, and rule-violation deposit seizure.'
  },
  {
    id: 48,
    ruleCode: 'LC-48',
    category: 'Legal Compliances',
    title: 'Sovereign Medical Biobank Participation Option',
    summary: 'Strict opt-in protocols for proprietary stem cell banking and cellular cryo-preservation.',
    fullDescription: 'Patients opting to store harvested mesenchymal stem cells, autologous lymphocytes, or youthful fibroblasts in the AEGIS Subterranean Liquid Nitrogen Biobank will enter into an independent Sovereign Custodial Trust. The tissue samples remain the exclusive legal property of the patient and their named sovereign heirs. The biobank operates under redundant liquid nitrogen supplies and gravity-fed backup refrigeration capable of preserving cellular viability for upwards of two centuries without grid power.',
    enforcementProtocol: 'Independent custodial trust agreement, cryogenic sample custody certificate, and redundant cryo-backup.'
  },
  {
    id: 49,
    ruleCode: 'LC-49',
    category: 'Legal Compliances',
    title: 'Anti-Money Laundering & Diplomatic Integrity Clearance',
    summary: 'Thorough forensic verification of all incoming capital through international anti-illicit finance matrices.',
    fullDescription: 'AEGIS Island Medical strictly complies with the highest standards of international anti-money laundering (AML) and counter-terrorist financing (CTF) verification. All funds wired for medical stays, villa purchases, or longevity retainers are scrutinized by sovereign forensic compliance officers utilizing decentralized chain-analytics and international banking sanctions databases. Capital originating from unverified origins or sanctioned jurisdictions will be frozen and reported to relevant sovereign authorities.',
    enforcementProtocol: 'Forensic blockchain analysis, sovereign AML compliance audit, and instant funds freezing on sanction matches.'
  },
  {
    id: 50,
    ruleCode: 'LC-50',
    category: 'Legal Compliances',
    title: 'Sovereign Expulsion & Immediate Maritime Deportation',
    summary: 'Absolute authority of the Sovereign Director to terminate residency and escort violators off the island.',
    fullDescription: 'The Sovereign Executive Director, in concurrence with the Chief Medical Officer, holds absolute summary authority to order the immediate deportation of any resident or co-guest whose conduct threatens the clinical integrity, biosecurity, or sovereign tranquility of AEGIS Island. Upon issuance of an Expulsion Decree, the guest will be packed by sovereign marshals, escorted to the harbor, and transported via high-speed security cutter to the nearest international airport or international maritime zone without further right of hearing.',
    enforcementProtocol: 'Summary Expulsion Decree, armed escort to international waters, and permanent biometric blacklist.'
  }
];
