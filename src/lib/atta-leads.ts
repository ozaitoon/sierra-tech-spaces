export type AttaProductId =
  | "transformers"
  | "electrical-panels"
  | "gas-compressors"
  | "oxygen-nitrogen"
  | "civil-mechanical"
  | "facility-maintenance";

export type LeadStage =
  | "new-target"
  | "qualified"
  | "contacted"
  | "meeting-planned"
  | "quotation-needed"
  | "won"
  | "lost";

export type ScoreBreakdown = {
  industryFit: number;
  productFit: number;
  locationFit: number;
  contactability: number;
  companySignal: number;
  sourceConfidence: number;
};

export type AttaLead = {
  id: string;
  companyName: string;
  industry: string;
  segment: string;
  governorate: string;
  city: string;
  industrialZone: string;
  address: string;
  website: string;
  phone: string;
  email: string;
  linkedin?: string;
  sourceName: string;
  sourceUrl: string;
  sourceType: "Company website" | "Public directory" | "Public PDF" | "Search result";
  productsToPitch: AttaProductId[];
  fitScore: number;
  scoreBreakdown: ScoreBreakdown;
  confidence: "High" | "Medium" | "Needs verification";
  whyGoodFit: string;
  painSignals: string[];
  suggestedPitch: string;
  nextAction: string;
  expectedValue: "Low" | "Medium" | "High" | "Strategic";
  lastVerified: string;
};

export type PipelineDeal = {
  leadId: string;
  stage: LeadStage;
  expectedValue: string;
  probability: number;
  owner: string;
  relationshipStatus: string;
  lastTouch: string;
  nextFollowUp: string;
  notes: string;
  tasks: SalesTask[];
};

export type SalesTask = {
  id: string;
  leadId: string;
  title: string;
  dueDate: string;
  priority: "High" | "Medium" | "Low";
  channel: "Phone" | "Email" | "LinkedIn" | "Visit";
  status: "Open" | "Done";
};

export const attaProductLabels: Record<AttaProductId, string> = {
  transformers: "DATSAN transformers",
  "electrical-panels": "Electrical panels",
  "gas-compressors": "Gas compressors",
  "oxygen-nitrogen": "Oxygen / nitrogen generators",
  "civil-mechanical": "Civil / M&E contracting",
  "facility-maintenance": "Facility maintenance",
};

export const leadStages: { id: LeadStage; label: string; hint: string }[] = [
  { id: "new-target", label: "New target", hint: "Good lead, not contacted yet" },
  { id: "qualified", label: "Qualified", hint: "Right industry and buyer signal" },
  { id: "contacted", label: "Contacted", hint: "First call or email sent" },
  { id: "meeting-planned", label: "Meeting planned", hint: "Discovery or site visit booked" },
  { id: "quotation-needed", label: "Quotation needed", hint: "Scope exists, price next" },
  { id: "won", label: "Won", hint: "Converted to deal" },
  { id: "lost", label: "Lost", hint: "Not active now" },
];

export const attaLeads: AttaLead[] = [
  {
    id: "beta-electric",
    companyName: "Beta Electric Solutions",
    industry: "Electrical panels and industrial plants",
    segment: "Electrical manufacturer",
    governorate: "Giza / Monufia",
    city: "6th of October / Sadat City",
    industrialZone: "CPC Industrial Zone and 7th Industrial Zone",
    address: "CPC Industrial Zone, 6th of October, and Plot 7087/3, 7th Industrial Zone, El Sadat City",
    website: "https://www.betaelectric.co/",
    phone: "+20 122 212 2284",
    email: "info@betaelectric.co; sales@betaelectric.co",
    sourceName: "Beta Electric contact page",
    sourceUrl: "https://www.betaelectric.co/",
    sourceType: "Company website",
    productsToPitch: ["transformers", "electrical-panels", "civil-mechanical"],
    fitScore: 96,
    scoreBreakdown: { industryFit: 19, productFit: 20, locationFit: 18, contactability: 15, companySignal: 14, sourceConfidence: 10 },
    confidence: "High",
    whyGoodFit: "They manufacture electrical panels and operate industrial plants in two Egyptian industrial zones, making transformer supply and project partnership highly relevant.",
    painSignals: ["Panel manufacturing", "Multiple industrial plants", "Direct sales email", "Turkey export office"],
    suggestedPitch: "Position Atta as a DATSAN transformer and project-supply partner for panel jobs that need transformer availability, electrical materials, and site coordination.",
    nextAction: "Call sales, ask who handles transformer sourcing for industrial panel projects, then send the DATSAN catalog.",
    expectedValue: "Strategic",
    lastVerified: "2026-06-06",
  },
  {
    id: "innelso",
    companyName: "Innelso",
    industry: "Low-voltage panels and switchgear",
    segment: "Electrical manufacturer",
    governorate: "Sharqia",
    city: "10th of Ramadan",
    industrialZone: "10th of Ramadan industrial area",
    address: "10th of Ramadan City, Egypt",
    website: "https://innelso.com/",
    phone: "Verify on contact page",
    email: "Verify on contact page",
    sourceName: "Innelso company overview",
    sourceUrl: "https://innelso.com/",
    sourceType: "Company website",
    productsToPitch: ["transformers", "electrical-panels", "facility-maintenance"],
    fitScore: 93,
    scoreBreakdown: { industryFit: 20, productFit: 20, locationFit: 18, contactability: 9, companySignal: 16, sourceConfidence: 10 },
    confidence: "Medium",
    whyGoodFit: "They build low-voltage panels and supply chain solutions, so Atta can pitch transformers, electrical supply coordination, and maintenance support.",
    painSignals: ["Low-voltage panel manufacturing", "Installation services", "10th of Ramadan location", "Industrial clients"],
    suggestedPitch: "Lead with DATSAN transformer availability and ask whether they need a reliable transformer supplier for panel and EPC jobs.",
    nextAction: "Find procurement or sales contact from the site, then send a short partnership email.",
    expectedValue: "High",
    lastVerified: "2026-06-06",
  },
  {
    id: "powertronics",
    companyName: "Powertronics For Engineering Systems",
    industry: "Power management and energy systems",
    segment: "Engineering systems",
    governorate: "Sharqia",
    city: "10th of Ramadan",
    industrialZone: "Robeky industrial area",
    address: "Factory: Industries area, Robeky, 10th of Ramadan City",
    website: "https://powertronics-eg.com/contact-us/",
    phone: "+20 109 333 3435; +20 554 361 499",
    email: "Moustafa.ali@powertronics-eg.com",
    sourceName: "Powertronics contact page",
    sourceUrl: "https://powertronics-eg.com/contact-us/",
    sourceType: "Company website",
    productsToPitch: ["transformers", "gas-compressors", "civil-mechanical", "facility-maintenance"],
    fitScore: 92,
    scoreBreakdown: { industryFit: 18, productFit: 19, locationFit: 18, contactability: 15, companySignal: 13, sourceConfidence: 9 },
    confidence: "High",
    whyGoodFit: "Their services cover power management, transportation, transmission technology, energy storage, and distribution systems.",
    painSignals: ["Power transmission", "Energy storage and distribution", "Factory contact listed", "Engineering systems"],
    suggestedPitch: "Frame Atta as a supply-side ally for transformer projects, electrical materials, and field execution when their projects need local procurement speed.",
    nextAction: "Call the listed mobile and ask for engineering procurement or business development.",
    expectedValue: "High",
    lastVerified: "2026-06-06",
  },
  {
    id: "electromix",
    companyName: "ElectroMix",
    industry: "Low-voltage panels and automation",
    segment: "Electrical manufacturer",
    governorate: "Sharqia / Beni Suef",
    city: "10th of Ramadan / Beni Suef",
    industrialZone: "10th of Ramadan and El Rowad Industrial Complex",
    address: "Head office: 10th of Ramadan City, Magawra 29, Piece No.3",
    website: "https://www.electromix-egy.com/",
    phone: "+20 554 378 080; +20 101 837 8835",
    email: "Info@electromix-egy.com; Sales@electromix-egy.com",
    sourceName: "ElectroMix website",
    sourceUrl: "https://www.electromix-egy.com/",
    sourceType: "Company website",
    productsToPitch: ["transformers", "electrical-panels", "facility-maintenance"],
    fitScore: 91,
    scoreBreakdown: { industryFit: 19, productFit: 19, locationFit: 17, contactability: 15, companySignal: 12, sourceConfidence: 9 },
    confidence: "High",
    whyGoodFit: "They manufacture low-voltage and automation panels and export panels, making them a strong transformer and electrical-materials partner target.",
    painSignals: ["Panel manufacturing", "Automation projects", "Export growth", "Multiple phone numbers"],
    suggestedPitch: "Open with transformer sourcing for panel projects and offer a fast DATSAN availability check for current quotations.",
    nextAction: "Email sales with DATSAN transformer catalog and ask about current panel projects needing transformer supply.",
    expectedValue: "High",
    lastVerified: "2026-06-06",
  },
  {
    id: "watan-electric",
    companyName: "Watan Electric for Electrical Industries",
    industry: "Cable trays and low-voltage panels",
    segment: "Electrical manufacturer",
    governorate: "Sharqia",
    city: "10th of Ramadan",
    industrialZone: "Industrial Zone C6",
    address: "10th of Ramadan - Industrial Zone C6, Block 42",
    website: "https://www.watanelectric.com/indexenglish.php",
    phone: "+20 109 022 9065",
    email: "info@watanelectric.com",
    sourceName: "Watan Electric website",
    sourceUrl: "https://www.watanelectric.com/indexenglish.php",
    sourceType: "Company website",
    productsToPitch: ["transformers", "electrical-panels", "civil-mechanical"],
    fitScore: 90,
    scoreBreakdown: { industryFit: 18, productFit: 18, locationFit: 18, contactability: 15, companySignal: 12, sourceConfidence: 9 },
    confidence: "High",
    whyGoodFit: "They manufacture cable trays, trunks, ladders, and low-voltage panels, which often sit near transformer and distribution-board demand.",
    painSignals: ["Factories and branches", "Panel manufacturing", "Cable management", "WhatsApp mentioned"],
    suggestedPitch: "Pitch Atta as a transformer and electrical-supply partner that can support larger industrial distribution packages.",
    nextAction: "WhatsApp/call and ask whether they source transformers directly or through project contractors.",
    expectedValue: "High",
    lastVerified: "2026-06-06",
  },
  {
    id: "panorama-electric",
    companyName: "Panorama Electric",
    industry: "Electrical supplies and engineering products",
    segment: "Electrical manufacturer",
    governorate: "Giza",
    city: "6th of October",
    industrialZone: "Extension of 6th Industrial Zone",
    address: "Plot 102, Extension of 6th Zone, 6th of October City",
    website: "https://panorama-electric.com/",
    phone: "+20 122 319 6030",
    email: "sales@panorama-electric.com",
    sourceName: "Panorama Electric website",
    sourceUrl: "https://panorama-electric.com/",
    sourceType: "Company website",
    productsToPitch: ["transformers", "electrical-panels"],
    fitScore: 88,
    scoreBreakdown: { industryFit: 17, productFit: 18, locationFit: 17, contactability: 15, companySignal: 12, sourceConfidence: 9 },
    confidence: "High",
    whyGoodFit: "Their factory produces engineering products and lists current transformer and load-center products.",
    painSignals: ["Current transformer products", "High production volume", "6th October factory", "Sales email listed"],
    suggestedPitch: "Offer DATSAN transformer supply as an adjacent product line for their electrical supply customers and project requests.",
    nextAction: "Email sales with a distributor-style pitch and request a meeting with procurement or commercial manager.",
    expectedValue: "Medium",
    lastVerified: "2026-06-06",
  },
  {
    id: "peisco",
    companyName: "PEISCO",
    industry: "Petroleum and industrial services",
    segment: "Industrial services",
    governorate: "Giza",
    city: "Dokki",
    industrialZone: "Industrial service provider",
    address: "143 El Tahrir St., 9th Floor, Dokki, Giza",
    website: "https://peisco.com/",
    phone: "+20 2 3760 4538; +20 2 3749 2050",
    email: "info@peisco.com",
    sourceName: "PEISCO website",
    sourceUrl: "https://peisco.com/",
    sourceType: "Company website",
    productsToPitch: ["gas-compressors", "oxygen-nitrogen", "civil-mechanical", "facility-maintenance"],
    fitScore: 87,
    scoreBreakdown: { industryFit: 18, productFit: 18, locationFit: 12, contactability: 15, companySignal: 15, sourceConfidence: 9 },
    confidence: "High",
    whyGoodFit: "They serve power plants, oil and gas, chemical, fertilizer, petrochemical, sugar, and steel industries.",
    painSignals: ["Industrial services", "Oil and gas", "Power plants", "Mechanical machines and parts"],
    suggestedPitch: "Pitch Dalgakiran gas compressors and field maintenance support as an industrial-services extension.",
    nextAction: "Call and ask for the sales or sourcing manager handling oil and gas rotating equipment.",
    expectedValue: "Strategic",
    lastVerified: "2026-06-06",
  },
  {
    id: "eis-integrated-industrial",
    companyName: "Engineering Integrated Services",
    industry: "Mechanical and electrical industrial services",
    segment: "M&E contractor",
    governorate: "Giza",
    city: "6th of October",
    industrialZone: "CPC Industrial Park",
    address: "CPC industrial park, plot no. 32, 6th of October City",
    website: "https://engineering-eis.com/web/integrated-industrial/",
    phone: "+20 114 774 1571",
    email: "Info@engineering-eis.com",
    sourceName: "EIS integrated industrial page",
    sourceUrl: "https://engineering-eis.com/web/integrated-industrial/",
    sourceType: "Company website",
    productsToPitch: ["transformers", "civil-mechanical", "facility-maintenance"],
    fitScore: 86,
    scoreBreakdown: { industryFit: 18, productFit: 17, locationFit: 17, contactability: 15, companySignal: 10, sourceConfidence: 9 },
    confidence: "High",
    whyGoodFit: "They specialize in mechanical and electrical industrial services and mention power distribution for food and cardboard factories.",
    painSignals: ["Industrial M&E", "Power distribution", "Known clients listed", "CPC industrial location"],
    suggestedPitch: "Approach as a subcontracting and supply partner for transformers, electrical distribution, and site support.",
    nextAction: "Call and ask about upcoming M&E scopes where transformer supply or panel integration is needed.",
    expectedValue: "High",
    lastVerified: "2026-06-06",
  },
  {
    id: "epcw",
    companyName: "EPCW - Egyptian Prestressed Concrete Wires",
    industry: "Steel wires and construction materials",
    segment: "Heavy manufacturing",
    governorate: "Sharqia",
    city: "10th of Ramadan",
    industrialZone: "Industrial Zone A5",
    address: "Plot 151, Industrial Zone A5, 10th of Ramadan City",
    website: "https://epcw-eg.com/ar/contact",
    phone: "+20 55 441 3000; +20 100 214 4112",
    email: "Verify protected email on contact page",
    sourceName: "EPCW contact page",
    sourceUrl: "https://epcw-eg.com/ar/contact",
    sourceType: "Company website",
    productsToPitch: ["transformers", "gas-compressors", "facility-maintenance"],
    fitScore: 84,
    scoreBreakdown: { industryFit: 18, productFit: 15, locationFit: 18, contactability: 13, companySignal: 12, sourceConfidence: 8 },
    confidence: "Medium",
    whyGoodFit: "Steel-wire production is power-heavy and maintenance-sensitive, which fits transformer reliability and facility maintenance conversations.",
    painSignals: ["Steel production", "Infrastructure products", "Factory in 10th of Ramadan", "Quote-request motion"],
    suggestedPitch: "Start with transformer health, spare capacity, and maintenance risk for heavy manufacturing operations.",
    nextAction: "Call the main number and ask for maintenance or procurement.",
    expectedValue: "High",
    lastVerified: "2026-06-06",
  },
  {
    id: "kcg-textile",
    companyName: "KCG Textile Egypt",
    industry: "Textile manufacturing",
    segment: "Factory",
    governorate: "Sharqia",
    city: "10th of Ramadan",
    industrialZone: "A6 Industrial Zone",
    address: "A6 Industrial Zone, 10th of Ramadan, Sharqia",
    website: "https://kcgtextile.com/contact.html",
    phone: "+20 554 410 774",
    email: "info@kcgtextile.com",
    sourceName: "KCG Textile contact page",
    sourceUrl: "https://kcgtextile.com/contact.html",
    sourceType: "Company website",
    productsToPitch: ["transformers", "oxygen-nitrogen", "facility-maintenance"],
    fitScore: 82,
    scoreBreakdown: { industryFit: 16, productFit: 15, locationFit: 18, contactability: 15, companySignal: 10, sourceConfidence: 8 },
    confidence: "High",
    whyGoodFit: "Vertical textile production uses power-intensive weaving, dyeing, finishing, and plant utilities.",
    painSignals: ["In-house production", "Dyeing and finishing", "Industrial zone factory", "Direct contact listed"],
    suggestedPitch: "Lead with transformer reliability and backup utility planning for power-heavy textile operations.",
    nextAction: "Email operations/procurement angle and ask if they have planned electrical upgrades this year.",
    expectedValue: "Medium",
    lastVerified: "2026-06-06",
  },
  {
    id: "elkaaid-plastics",
    companyName: "El Kaaid For Plastic Industries",
    industry: "Plastic manufacturing",
    segment: "Factory",
    governorate: "Sharqia",
    city: "10th of Ramadan",
    industrialZone: "Industrial Zone A2",
    address: "Plot 11/7, Industrial Zone A2, 10th of Ramadan",
    website: "https://elkaaid.com/contact/",
    phone: "+20 100 280 1752",
    email: "info@elkaaid.com; sales@elkaaid.com",
    sourceName: "El Kaaid contact page",
    sourceUrl: "https://elkaaid.com/contact/",
    sourceType: "Company website",
    productsToPitch: ["transformers", "gas-compressors", "facility-maintenance"],
    fitScore: 81,
    scoreBreakdown: { industryFit: 16, productFit: 15, locationFit: 18, contactability: 15, companySignal: 9, sourceConfidence: 8 },
    confidence: "High",
    whyGoodFit: "Large plastic production factories rely on continuous power and plant maintenance; they also list purchasing contacts.",
    painSignals: ["Plastic production", "Purchasing department number", "Long-running factory", "Quote request"],
    suggestedPitch: "Pitch transformer reliability, spare capacity checks, and industrial maintenance support to reduce production downtime.",
    nextAction: "Call purchasing and ask whether electrical upgrades or compressor maintenance are planned.",
    expectedValue: "Medium",
    lastVerified: "2026-06-06",
  },
  {
    id: "kema-farben",
    companyName: "Kema Farben Egypt",
    industry: "Paints and coatings",
    segment: "Chemical factory",
    governorate: "Sharqia",
    city: "10th of Ramadan",
    industrialZone: "Industrial Zone A3",
    address: "Industrial Zone A3, Block 5/92, 10th of Ramadan City",
    website: "https://www.kemafarbeneg.com/contactus.php",
    phone: "+20 55 433 2560; +20 111 707 2277",
    email: "Melegy@kemafarbeneg.com; Mahmoudmelegy@kemafarbeneg.com",
    sourceName: "Kema Farben contact page",
    sourceUrl: "https://www.kemafarbeneg.com/contactus.php",
    sourceType: "Company website",
    productsToPitch: ["transformers", "oxygen-nitrogen", "gas-compressors", "facility-maintenance"],
    fitScore: 80,
    scoreBreakdown: { industryFit: 16, productFit: 16, locationFit: 18, contactability: 15, companySignal: 7, sourceConfidence: 8 },
    confidence: "High",
    whyGoodFit: "Paint and coating factories are utility-sensitive and may need compressed air/gas systems, stable power, and maintenance.",
    painSignals: ["Chemical production", "Factory location", "Multiple direct contacts", "Industrial zone"],
    suggestedPitch: "Position Atta around plant utility reliability: transformers, compressor supply, and maintenance support.",
    nextAction: "Email the listed contacts with a short maintenance and utility upgrade offer.",
    expectedValue: "Medium",
    lastVerified: "2026-06-06",
  },
  {
    id: "namaa-fragrances",
    companyName: "Namaa Flavors & Fragrances",
    industry: "Flavors and fragrances",
    segment: "Chemical factory",
    governorate: "Sharqia",
    city: "10th of Ramadan",
    industrialZone: "Industrial Zone",
    address: "Industrial Zone, Plot 157B, 10th of Ramadan City",
    website: "https://www.namaa-ff.com/contact/",
    phone: "+20 102 333 0434; +20 2 2670 3977",
    email: "info@namaa-ff.com",
    sourceName: "Namaa contact page",
    sourceUrl: "https://www.namaa-ff.com/contact/",
    sourceType: "Company website",
    productsToPitch: ["oxygen-nitrogen", "gas-compressors", "facility-maintenance"],
    fitScore: 78,
    scoreBreakdown: { industryFit: 15, productFit: 16, locationFit: 17, contactability: 15, companySignal: 7, sourceConfidence: 8 },
    confidence: "High",
    whyGoodFit: "Chemical and fragrance production can require gas, compressed air, and reliable utility support.",
    painSignals: ["Factory in industrial zone", "Mobile/WhatsApp field", "Chemical-style production", "HQ plus factory"],
    suggestedPitch: "Lead with nitrogen generator and gas/compressor utility reliability, then mention Atta maintenance support.",
    nextAction: "Use WhatsApp/mobile first and ask for the plant utilities or maintenance manager.",
    expectedValue: "Medium",
    lastVerified: "2026-06-06",
  },
  {
    id: "omega-egypt",
    companyName: "Omega Egypt for Supply & Metal Processing",
    industry: "Metal processing",
    segment: "Factory",
    governorate: "Sharqia",
    city: "10th of Ramadan",
    industrialZone: "Industrial Region A6",
    address: "Factory: 10th of Ramadan City Industrial Region A6",
    website: "https://www.egypt-omega.com/contact",
    phone: "+20 2 2773 9343; +20 100 250 9691",
    email: "Verify through contact form",
    sourceName: "Omega Egypt contact page",
    sourceUrl: "https://www.egypt-omega.com/contact",
    sourceType: "Company website",
    productsToPitch: ["transformers", "civil-mechanical", "facility-maintenance"],
    fitScore: 77,
    scoreBreakdown: { industryFit: 15, productFit: 14, locationFit: 18, contactability: 12, companySignal: 10, sourceConfidence: 8 },
    confidence: "Medium",
    whyGoodFit: "Metal processing is power-heavy and can need electrical upgrades, site support, and facility maintenance.",
    painSignals: ["Metal processing", "Factory in A6 industrial region", "Direct mobile listed", "Industrial supply"],
    suggestedPitch: "Open with power reliability and maintenance support for metal processing lines.",
    nextAction: "Call mobile and ask for factory maintenance/procurement contact.",
    expectedValue: "Medium",
    lastVerified: "2026-06-06",
  },
  {
    id: "arcosteel",
    companyName: "ARCOSTEEL",
    industry: "Special steel manufacturing",
    segment: "Heavy manufacturing",
    governorate: "Monufia",
    city: "Sadat City",
    industrialZone: "5th Industrial Zone",
    address: "5th Industrial Zone, Sadat City",
    website: "https://arcosteel.com.eg/",
    phone: "Verify from catalog/contact page",
    email: "Verify from catalog/contact page",
    sourceName: "ARCOSTEEL public catalog",
    sourceUrl: "https://arcosteel.com.eg/uploads/media_center/catalogs/Arcosteel%20Catalog.pdf",
    sourceType: "Public PDF",
    productsToPitch: ["transformers", "gas-compressors", "facility-maintenance", "civil-mechanical"],
    fitScore: 75,
    scoreBreakdown: { industryFit: 19, productFit: 17, locationFit: 16, contactability: 4, companySignal: 12, sourceConfidence: 7 },
    confidence: "Needs verification",
    whyGoodFit: "Special steel manufacturing has strong power, maintenance, and utility needs, but contact details need manual verification.",
    painSignals: ["140,000-ton designed capacity noted in public catalog", "Steel production", "Sadat City industrial zone", "Export activity"],
    suggestedPitch: "Target maintenance or utilities leadership with transformer capacity, compressor reliability, and shutdown-support messaging.",
    nextAction: "Verify current contact details before outreach, then call maintenance/procurement.",
    expectedValue: "Strategic",
    lastVerified: "2026-06-06",
  },
  {
    id: "shahba-group",
    companyName: "Shahba Group",
    industry: "PVC rolls and non-woven fabric",
    segment: "Factory",
    governorate: "Sharqia",
    city: "10th of Ramadan",
    industrialZone: "Zezenia new Industrial Zone",
    address: "Zezenia new Industrial Zone, 10th of Ramadan City",
    website: "https://shahba-eg.com/contact/",
    phone: "+20 55 433 4300; +20 100 792 6152",
    email: "info@shahba-eg.com",
    sourceName: "Shahba contact page",
    sourceUrl: "https://shahba-eg.com/contact/",
    sourceType: "Company website",
    productsToPitch: ["transformers", "facility-maintenance", "gas-compressors"],
    fitScore: 74,
    scoreBreakdown: { industryFit: 14, productFit: 14, locationFit: 18, contactability: 15, companySignal: 5, sourceConfidence: 8 },
    confidence: "High",
    whyGoodFit: "PVC and non-woven manufacturing depends on continuous production, making reliability and facility maintenance a relevant entry point.",
    painSignals: ["Factory contact", "Export contact", "Plastic/fabric production", "Industrial zone"],
    suggestedPitch: "Offer a maintenance-first conversation around preventing production downtime, then introduce transformer and compressor support.",
    nextAction: "Call factory contact and ask for maintenance manager.",
    expectedValue: "Medium",
    lastVerified: "2026-06-06",
  },
];

export const initialPipelineDeals: PipelineDeal[] = [
  {
    leadId: "beta-electric",
    stage: "qualified",
    expectedValue: "EGP 1.5M - 4M",
    probability: 42,
    owner: "Youssef",
    relationshipStatus: "Partner candidate",
    lastTouch: "Not contacted",
    nextFollowUp: "2026-06-09",
    notes: "Best first account for a transformer and electrical-supply partnership conversation.",
    tasks: [
      {
        id: "task-beta-1",
        leadId: "beta-electric",
        title: "Send DATSAN transformer catalog and ask for sourcing owner",
        dueDate: "2026-06-09",
        priority: "High",
        channel: "Email",
        status: "Open",
      },
    ],
  },
  {
    leadId: "peisco",
    stage: "new-target",
    expectedValue: "EGP 2M - 6M",
    probability: 30,
    owner: "Omar",
    relationshipStatus: "Strategic account",
    lastTouch: "Not contacted",
    nextFollowUp: "2026-06-10",
    notes: "Strong fit for compressor, oil and gas support, and maintenance work.",
    tasks: [
      {
        id: "task-peisco-1",
        leadId: "peisco",
        title: "Call and ask for rotating equipment or procurement manager",
        dueDate: "2026-06-10",
        priority: "High",
        channel: "Phone",
        status: "Open",
      },
    ],
  },
  {
    leadId: "electromix",
    stage: "contacted",
    expectedValue: "EGP 750K - 2M",
    probability: 35,
    owner: "Nabih",
    relationshipStatus: "Panel partner",
    lastTouch: "Intro email drafted",
    nextFollowUp: "2026-06-11",
    notes: "Good partner account for panel-related transformer sourcing.",
    tasks: [
      {
        id: "task-electromix-1",
        leadId: "electromix",
        title: "Follow up on transformer availability email",
        dueDate: "2026-06-11",
        priority: "Medium",
        channel: "Phone",
        status: "Open",
      },
    ],
  },
];

export function getLeadById(id: string) {
  return attaLeads.find((lead) => lead.id === id);
}
