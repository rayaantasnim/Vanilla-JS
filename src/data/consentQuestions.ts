import { ConsentQuestion } from '../types';

export const CONSENT_QUESTIONS: ConsentQuestion[] = [
  {
    id: 1,
    category: 'Financial Settlements',
    title: 'Irrevocable Escrow Funding & Deposit Forfeiture Protocol',
    protocolDescription: 'The applicant unconditionally confirms that all clinical bookings require a non-refundable financial escrow wire or sovereign bullion deposit transferred to AEGIS Island Medical Treasury thirty days prior to intake. In the event of applicant cancellation within fourteen days or summary expulsion for sovereign rule violations, 100% of the deposited funds are forfeited immediately without right of arbitration or judicial set-off.',
    mandatoryWarning: 'Statute VII Enforcement: Failure to grant unconditional financial forfeiture consent immediately terminates this application.',
    compliantLabel: 'I Unconditionally Consent & Acknowledge Full Escrow Forfeiture Terms',
    nonCompliantLabel: 'I Disagree / Object to Non-Refundable Deposit Forfeiture'
  },
  {
    id: 2,
    category: 'Clinical Nudity & Imaging',
    title: 'Unconditional Optical Tomography & Attire-Free Volumetric Scanning',
    protocolDescription: 'The applicant and all registered co-guests agree to disrobe completely within the Sovereign Diagnostics Rotunda for whole-body 7-Tesla volumetric MRI, photon-counting dual-source CT, and 360-degree laser-optical surface topography. Modesty covers or personal garments are strictly prohibited during imaging as they obstruct sub-millimeter adipose and micro-vascular mapping.',
    mandatoryWarning: 'Statute IV Enforcement: Incomplete optical baseline imaging prevents calibration of individualized cellular protocols.',
    compliantLabel: 'I Consent to Complete Attire-Free Diagnostic Tomography & Imaging',
    nonCompliantLabel: 'I Refuse Clothing-Free Imaging & Demand Partial Coverage'
  },
  {
    id: 3,
    category: 'Chemical Decontamination',
    title: 'Compulsory Aerosolized Chemical Antimicrobial Misting',
    protocolDescription: 'Prior to setting foot on sovereign island soil, all incoming patrons must enter the Marine Quarantine Decontamination Tunnel for a mandatory 180-second electrostatic mist cycle utilizing aerosolized hypochlorous biocide, volcanic minerals, and lipid envelope neutralizers designed to eradicate external pathogens, superbugs, and fungal spores.',
    mandatoryWarning: 'Statute II Enforcement: Biological decontamination is an uncompromised barrier for island bio-security.',
    compliantLabel: 'I Accept Mandatory Chemical Misting at the Offshore Quarantine Gateway',
    nonCompliantLabel: 'I Object to Chemical Mist Exposure & Request Exemption'
  },
  {
    id: 4,
    category: 'Cross-Gender Examinations',
    title: 'Merit-Based Medical Staffing Without Gender Constraints',
    protocolDescription: 'The applicant consents that all clinical procedures, physical inspections, catheterizations, hyperbaric operations, and surgical recoveries will be conducted by medical fellows and attending surgeons selected exclusively on clinical merit, credentials, and surgical seniority, without regard to patient gender preference.',
    mandatoryWarning: 'Statute IV Enforcement: Gender-based clinical staffing demands are strictly incompatible with sovereign hospital logistics.',
    compliantLabel: 'I Agree to Medical Examinations Conducted by Assigned Specialists Regardless of Gender',
    nonCompliantLabel: 'I Insist on Restricting Clinical Examiners by Gender'
  },
  {
    id: 5,
    category: 'Exclusion of Private Security',
    title: 'Total Embargo on Private Bodyguards & Personal Mercenaries',
    protocolDescription: 'The applicant agrees that all private bodyguards, armed protection details, and foreign security escorts will disembark at the maritime perimeter and remain aboard private yachts in the outer anchorage. The applicant accepts that AEGIS Sovereign Defense Corps holds exclusive jurisdiction and physical security monopoly across the island.',
    mandatoryWarning: 'Statute VI Enforcement: Private firearms and external armed personnel are classified as hostile incursions.',
    compliantLabel: 'I Agree to Leave Private Bodyguards Behind & Accept AEGIS Sovereign Security',
    nonCompliantLabel: 'I Refuse to Enter Without My Private Armed Protection Detail'
  },
  {
    id: 6,
    category: 'Biotelemetry Monitoring',
    title: 'Continuous 24/7 Biometric Artifact & Telemetry Adherence',
    protocolDescription: 'The applicant agrees to continuously wear the assigned AEGIS 24K Gold Telemetry Torc or Obsidian Pulse Signet at all times. Removing the artifact interrupts vital signs telemetry, triggering an immediate security dispatch to verify physical integrity and assess autonomic vitals.',
    mandatoryWarning: 'Statute V Enforcement: Continuous telemetry is mandatory for early warning of vasovagal or cardiac events.',
    compliantLabel: 'I Consent to 24/7 Wear of Sovereign Biometric Telemetry Artifacts',
    nonCompliantLabel: 'I Will Not Wear Uninterrupted Telemetry Tracking Artifacts'
  },
  {
    id: 7,
    category: 'Genomic Archival',
    title: 'Autologous Genomic Sequencing & Air-Gapped Archival Protocol',
    protocolDescription: 'The applicant consents to high-depth whole-genome DNA sequencing, whole-epigenome methylation profiling, and gut microbiome micro-array analysis. The resulting data will be stored exclusively in the air-gapped sovereign cryptographic vault and either delivered to the patron on physical cold storage or permanently destroyed upon departure.',
    mandatoryWarning: 'Statute IX Enforcement: Personalized longevity therapeutics require complete genetic mapping.',
    compliantLabel: 'I Authorize Comprehensive Genomic Sequencing & Air-Gapped Archival',
    nonCompliantLabel: 'I Refuse Genetic Sequencing and Epigenetic Tissue Profiling'
  },
  {
    id: 8,
    category: 'RF & Signal Blackout',
    title: 'Surrender of All Personal Cellular Devices & Satellite Communicators',
    protocolDescription: 'The applicant agrees to surrender all smartphones, satellite phones, smart glasses, smartwatches, and wireless transceivers into the sovereign Faraday vaults upon arrival. All communications from the island must take place via hardwired encrypted optical consoles in designated study suites.',
    mandatoryWarning: 'Statute I Enforcement: Electro-magnetic silence is essential for cellular mitochondrial stabilization.',
    compliantLabel: 'I Agree to Surrender All Commercial Electronics into Sovereign Vaults',
    nonCompliantLabel: 'I Demand to Keep and Use My Personal Cellular Phone'
  },
  {
    id: 9,
    category: 'Sovereign Legal Jurisdiction',
    title: 'Waiver of Foreign Municipal Courts & Exclusive Offshore Maritime Arbitration',
    protocolDescription: 'The applicant irrevocably waives all rights to pursue claims, medical malpractice suits, or civil disputes in foreign municipal jurisdictions (including United States, United Kingdom, European Union, and Swiss courts), submitting exclusively to the Sovereign Tribunal of AEGIS Island under closed maritime arbitration.',
    mandatoryWarning: 'Statute X Enforcement: Sovereign medical practices operate outside terrestrial municipal jurisdictions.',
    compliantLabel: 'I Irrevocably Waive Foreign Court Litigation & Accept Sovereign Arbitration',
    nonCompliantLabel: 'I Reserve the Right to File Lawsuits in Foreign Courts'
  },
  {
    id: 10,
    category: 'Emergency Surgical Proxy',
    title: 'Advance Medical Proxy to Chief Medical Officer for Acute Interventions',
    protocolDescription: 'In the event of an acute, life-threatening clinical event (such as acute aortic dissection, intracranial hemorrhage, or septic shock), the applicant grants the Chief Medical Officer full advance proxy to initiate invasive surgery, ECMO, or robotic resuscitation without waiting for family or diplomatic notification.',
    mandatoryWarning: 'Statute IV Enforcement: Immediate surgical intervention saves lives when seconds determine survival.',
    compliantLabel: 'I Grant Advance Life-Saving Surgical Authority to the Chief Medical Officer',
    nonCompliantLabel: 'I Refuse Emergency Surgical Proxy Without Prior Family Consultation'
  },
  {
    id: 11,
    category: 'Nutritional Monopolization',
    title: 'Absolute Adherence to Prescribed Molecular Nutrition & Elimination of Outside Food',
    protocolDescription: 'The applicant agrees that all foodstuffs, beverages, elixirs, and snacks consumed on the island will be prescribed by the attending physician and synthesized by the molecular culinary lab. No outside food, commercial snacks, or unprescribed alcohol may be brought into private villas.',
    mandatoryWarning: 'Statute VIII Enforcement: Outside sugars and inflammatory oils disrupt metabolic autophagic cycles.',
    compliantLabel: 'I Consent to Complete Nutritional Monopolization by Island Physicians',
    nonCompliantLabel: 'I Wish to Retain Personal Outside Food and Alcohol in My Villa'
  },
  {
    id: 12,
    category: 'Biological Sampling',
    title: 'Mandatory 06:00 Daily Phlebotomy & Metabolic Biomarker Extraction',
    protocolDescription: 'The applicant agrees to daily morning venous blood sampling, salivary hormone assays, and urine metabolomic panels performed at 06:00 hours in their private pavilion to calibrate daily peptide infusions, hyperbaric parameters, and therapeutic schedules.',
    mandatoryWarning: 'Statute III Enforcement: Precision longevity adjustments require fresh daily morning biological markers.',
    compliantLabel: 'I Agree to Daily 06:00 AM Phlebotomy and Biological Sampling',
    nonCompliantLabel: 'I Object to Daily Morning Blood Draws and Fluid Profiling'
  },
  {
    id: 13,
    category: 'Sovereign Wardrobe Mandate',
    title: 'Compulsory Wear of AEGIS Royal Attires in Public Enclave Spaces',
    protocolDescription: 'The applicant agrees to wear the provided AEGIS organic mulberry silk robes, cashmere tunics, and bio-conductive garments within public island atriums, dining halls, and gardens, strictly abstaining from commercial logo wear and synthetic fast-fashion garments.',
    mandatoryWarning: 'Statute V Enforcement: Wardrobe harmonization maintains egalitarian regal decorum.',
    compliantLabel: 'I Consent to Wearing Sovereign Royal Attires Across the Enclave',
    nonCompliantLabel: 'I Demand the Right to Wear My Own Designer Clothes in Public Spaces'
  },
  {
    id: 14,
    category: 'Confidentiality of Peers',
    title: 'Perpetual Non-Disclosure Agreement Regarding Fellow Patrons ($10M Liquidated Penalty)',
    protocolDescription: 'The applicant covenants never to record, photograph, mention, or publicly disclose the name, appearance, or presence of any other sovereign patient encountered on AEGIS Island. Any breach incurs an immediate liquidated damages penalty of $10,000,000 USD and global legal prosecution.',
    mandatoryWarning: 'Statute IX Enforcement: Sovereign dignity and absolute anonymity of international patrons is paramount.',
    compliantLabel: 'I Sign and Bind Myself to the Perpetual Non-Disclosure Agreement',
    nonCompliantLabel: 'I Refuse the Perpetual Non-Disclosure Agreement and Financial Penalties'
  },
  {
    id: 15,
    category: 'Cellular Reprogramming Vectors',
    title: 'Informed Consent for Autologous Stem Cell & Gene-Targeted Vector Injections',
    protocolDescription: 'The applicant grants clinical permission for the intravenous, intrathecal, or localized intra-articular administration of laboratory-expanded autologous mesenchymal stem cells, telomerase reverse-transcriptase modulators, and epigenetic Yamanaka factor vector micro-infusions.',
    mandatoryWarning: 'Statute III Enforcement: Regenerative medicine protocols require formal vector consent.',
    compliantLabel: 'I Consent to Cellular Reprogramming Vectors and Autologous Infusions',
    nonCompliantLabel: 'I Do Not Consent to Stem Cell or Epigenetic Vector Administration'
  },
  {
    id: 16,
    category: 'Quarantine & Isolation',
    title: 'Agreement to Immediate Negative-Pressure Pavilion Lockdown on Infection Detection',
    protocolDescription: 'If routine microbiological screening reveals an unexpected pathogenic infection or viral shed, the applicant agrees to immediate pavilion lockdown under negative air pressure with airlock food delivery until two consecutive negative PCR assays are confirmed.',
    mandatoryWarning: 'Statute II Enforcement: Enclave pathogen-free biome safety supersedes personal mobility desires.',
    compliantLabel: 'I Agree to Immediate Pavilion Quarantine if Pathogenic Shedding Occurs',
    nonCompliantLabel: 'I Will Not Comply with In-Villa Isolation or Negative-Pressure Lockdown'
  },
  {
    id: 17,
    category: 'Hyperbaric Pressurization',
    title: 'Informed Consent for Hyperbaric Oxygen Pressurization up to 3.0 ATA',
    protocolDescription: 'The applicant acknowledges and accepts the physiological risks of multi-atmosphere oxygen therapy up to 3.0 ATA, including middle-ear pressure equalizing requirements, temporary visual acuity shifts, and strict prohibitions on personal flammable items inside the chamber.',
    mandatoryWarning: 'Statute VIII Enforcement: Hyperbaric chambers accelerate cellular healing but require strict compliance.',
    compliantLabel: 'I Consent to Hyperbaric Oxygen Therapy and Safety Pressurization Protocols',
    nonCompliantLabel: 'I Decline Hyperbaric Oxygen Therapy and Pressurization Standards'
  },
  {
    id: 18,
    category: 'Biological Waste Disposal',
    title: 'Authorized Incineration of Excised Tissue & Surgical Biopsy Remains',
    protocolDescription: 'The applicant authorizes AEGIS Island Pathology to biologically inactivate and high-temperature plasma-incinerate all discarded surgical tissues, excised skin samples, and biological fluids to prevent illicit DNA harvesting by external entities.',
    mandatoryWarning: 'Statute IX Enforcement: Destruction of biological remnants protects against external genetic espionage.',
    compliantLabel: 'I Authorize Full Biological Inactivation and Plasma Incineration of Tissue',
    nonCompliantLabel: 'I Object to Incineration and Request Retention of Surgical Tissue'
  },
  {
    id: 19,
    category: 'Acoustic Rest Hours',
    title: 'Compliance with 21:00 to 08:00 Circadian Silence & Terraced Acoustic Hygiene',
    protocolDescription: 'The applicant agrees to maintain quiet within terrace pavilions between 21:00 and 08:00 hours, keeping exterior noise below 35 dB to allow all residents to enter deep delta-wave sleep cycles guided by localized 432 Hz frequency emitters.',
    mandatoryWarning: 'Statute V Enforcement: Circadian acoustic hygiene is essential for nocturnal cellular rejuvenation.',
    compliantLabel: 'I Agree to Observe Strict Circadian Acoustic Quiet Hours',
    nonCompliantLabel: 'I Disagree with Mandatory Curfew and Exterior Noise Limits'
  },
  {
    id: 20,
    category: 'Summary Expulsion Authority',
    title: 'Unconditional Acceptance of Sovereign Summary Expulsion Without Appeal',
    protocolDescription: 'The applicant acknowledges that the Sovereign Executive Director and Chief Medical Officer hold final, unilateral summary authority to terminate any residency, revoke island privileges, and order immediate maritime deportation for any breach of sovereign statutes, without judicial appeal.',
    mandatoryWarning: 'Statute X Enforcement: Sovereign governance requires absolute executive command over island territory.',
    compliantLabel: 'I Fully Recognize and Submit to Sovereign Summary Expulsion Authority',
    nonCompliantLabel: 'I Reject Summary Expulsion Authority and Demand Right of Appeal'
  }
];
