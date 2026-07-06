export type AttaServiceIcon =
  | "hammer"
  | "wrench"
  | "zap"
  | "shield"
  | "circuit";

export type AttaService = {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  detail: string;
  bullets: string[];
  outcomes: string[];
  image: string;
  sourceLink: string;
  icon: AttaServiceIcon;
};

export type AttaProject = {
  slug: string;
  title: string;
  category: string;
  location: string;
  sector: string;
  scope: string;
  story: string;
  challenge: string;
  delivery: string[];
  outcomes: string[];
  images: string[];
  sourceLink: string;
};

export const attaServices: AttaService[] = [
  {
    id: "civil-works",
    title: "Civil Works",
    kicker: "Earthworks / concrete / roads",
    summary:
      "Industrial civil execution for oil, gas, utilities, and infrastructure sites where speed, access, and durability decide the outcome.",
    detail:
      "Atta handles site preparation, excavation, foundations, access roads, concrete works, and civil packages around strict field coordination and practical site constraints.",
    bullets: [
      "Excavation and earthworks",
      "Concrete foundations",
      "Access roads and site routes",
      "Industrial site development",
    ],
    outcomes: [
      "Cleaner handover between engineering and site execution",
      "Better control over field dependencies and access constraints",
      "Civil scopes packaged for petroleum and utility environments",
    ],
    image: "/atta/civil-detail-1.jpg",
    sourceLink: "https://atta-group.net/civil-works/",
    icon: "hammer",
  },
  {
    id: "mechanical-electrical",
    title: "Mechanical & Electrical",
    kicker: "Pipeline / tanks / M&E",
    summary:
      "One execution layer for mechanical and electrical work across petroleum facilities, pipelines, tanks, and field installations.",
    detail:
      "The offer combines manpower, materials, welding, calibration, installation, and site coordination for clients who need one accountable field team.",
    bullets: [
      "Pipeline welding",
      "Tank calibration",
      "M&E coordination",
      "Field installation support",
    ],
    outcomes: [
      "Less coordination friction between trades",
      "Faster mobilization for mixed mechanical and electrical scopes",
      "Field teams organized around practical petroleum-site delivery",
    ],
    image: "/atta/me-detail-2.jpg",
    sourceLink: "https://atta-group.net/mechanical-electrical/",
    icon: "wrench",
  },
  {
    id: "electrical-works",
    title: "Electrical Works",
    kicker: "Power / protection / systems",
    summary:
      "Electrical distribution, protection, installation, and maintenance support for industrial and energy-sector systems.",
    detail:
      "Atta positions electrical work as a reliability-critical discipline, covering power systems that must perform in demanding operating environments.",
    bullets: [
      "Power distribution",
      "Protection systems",
      "Electrical installation",
      "Maintenance support",
    ],
    outcomes: [
      "Electrical scopes tied directly to uptime and safety",
      "Procurement and installation handled with one project rhythm",
      "Clearer communication for project managers and site owners",
    ],
    image: "/atta/me-detail-1.webp",
    sourceLink: "https://atta-group.net/electrical-works/",
    icon: "zap",
  },
  {
    id: "facility-maintenance",
    title: "Facility Maintenance",
    kicker: "Reliability / repair / lifecycle",
    summary:
      "Maintenance planning, routine inspections, repair readiness, and long-term support for operating facilities.",
    detail:
      "The maintenance offer is framed as a reliability program: prevent small issues from becoming shutdowns, protect infrastructure life, and keep operations moving.",
    bullets: [
      "Routine inspections",
      "Complex repairs",
      "Operational efficiency",
      "Infrastructure longevity",
    ],
    outcomes: [
      "Reduced downtime exposure",
      "More predictable maintenance planning",
      "Lifecycle support for civil, mechanical, and electrical assets",
    ],
    image: "/atta/project-site.jpg",
    sourceLink: "https://atta-group.net/facility-maintenance/",
    icon: "shield",
  },
  {
    id: "transform-supplier",
    title: "Transformers & Electrical Supply",
    kicker: "Transformers / DATSAN / panels",
    summary:
      "Transformer supply, panels, electrical materials, logistics coordination, and procurement support built around project schedules.",
    detail:
      "Atta is presented as a practical transformer and electrical-supply partner for projects that need DATSAN distribution transformers, CSP transformers, isolation transformers, panels, and coordinated material logistics.",
    bullets: [
      "DATSAN Transformers",
      "Distribution transformers",
      "CSP and isolation transformers",
      "Electrical panels",
    ],
    outcomes: [
      "A stronger procurement reason to contact Atta early",
      "Supply and installation conversations under one commercial roof",
      "Transformer availability framed as a strategic advantage",
    ],
    image: "/atta/transform-detail-1.jpeg",
    sourceLink: "https://atta-group.net/transform-supplier/",
    icon: "circuit",
  },
];

export const attaProjects: AttaProject[] = [
  {
    slug: "overhead-transmission-line-civil-works",
    title: "Overhead transmission line civil works and pole-tie excavation",
    category: "Civil Works",
    location: "Transmission corridor",
    sector: "Power infrastructure",
    scope:
      "Required civil works for overhead transmission-line infrastructure, including excavation for pole ties.",
    story:
      "A field-heavy civil package supporting transmission infrastructure where excavation accuracy, route readiness, and dependable site execution matter.",
    challenge:
      "Transmission corridors leave little room for loose coordination. Civil teams have to protect the schedule while preparing pole-tie locations and supporting the wider utility package.",
    delivery: [
      "Pole-tie excavation and site preparation",
      "Civil support for overhead line infrastructure",
      "Field coordination across corridor access constraints",
      "Documentation-ready project presentation for future bids",
    ],
    outcomes: [
      "Makes Atta credible for utility and energy infrastructure scopes",
      "Shows civil execution beyond standard building work",
      "Gives procurement teams fast evidence of relevant field experience",
    ],
    sourceLink:
      "https://atta-group.net/portfolio/agreement-for-required-civil-works-of-over-head-transmission-line-and-excavation-for-pole-ties/",
    images: ["/atta/project-transmission-1.jpg", "/atta/project-transmission-2.jpg"],
  },
  {
    slug: "mechanical-works-agreement",
    title: "Mechanical works agreement",
    category: "Mechanical",
    location: "Petroleum site",
    sector: "Oil and gas",
    scope:
      "Mechanical execution package with field installation, fabrication support, and site coordination.",
    story:
      "A mechanical works package that positions Atta as a practical field contractor for petroleum-sector assets and demanding installation environments.",
    challenge:
      "Mechanical packages need execution discipline, material readiness, and teams who understand how site constraints affect installation speed.",
    delivery: [
      "Mechanical work execution",
      "Fabrication and field installation support",
      "Site coordination with petroleum operating requirements",
      "Practical supervision for manpower and material flow",
    ],
    outcomes: [
      "Reinforces Atta's petroleum-sector specialization",
      "Creates a stronger proof point for mixed mechanical packages",
      "Shows project managers that Atta can work inside active field conditions",
    ],
    sourceLink: "https://atta-group.net/portfolio/agreement-for-mechanical-works-agreemen/",
    images: ["/atta/project-mechanical-1.jpg", "/atta/project-mechanical-2.jpg"],
  },
  {
    slug: "borg-el-arab-charging-line-protection",
    title: "Charging-line protection at Borg El Arab electric speed train crossing",
    category: "Protection Works",
    location: "Borg El Arab",
    sector: "Transport energy interface",
    scope:
      "Protection works for charging lines where they cross the electric speed train path.",
    story:
      "A crossover infrastructure project where electrical charging lines and rail development meet, requiring protection work with a clear safety and continuity purpose.",
    challenge:
      "When charging lines cross a high-profile transport path, the work has to protect both the existing energy asset and the future mobility corridor.",
    delivery: [
      "Protection works for charging-line crossings",
      "Civil and utility interface coordination",
      "Execution around sensitive transport infrastructure",
      "Risk-aware field sequencing",
    ],
    outcomes: [
      "Shows Atta can operate around nationally important infrastructure",
      "Adds a distinctive transport-energy proof point",
      "Signals competence in protection and interface works",
    ],
    sourceLink:
      "https://atta-group.net/portfolio/protection-works-for-the-charging-lines-at-its-crossing-with-the-electric-speed-train-path-at-borg-el-arab/",
    images: ["/atta/project-borg-1.jpg", "/atta/project-borg-2.jpg"],
  },
  {
    slug: "abu-gharadig-tafla-access-road",
    title: "TAFLA access road construction at Abu Gharadig",
    category: "Civil Infrastructure",
    location: "Abu Gharadig",
    sector: "Petroleum access infrastructure",
    scope:
      "Construction of an 11 KM access road, 4 M width, 25 CM thickness at Abu Gharadig site.",
    story:
      "A measurable civil-infrastructure scope that turns a remote petroleum access challenge into a hard-number proof point.",
    challenge:
      "Remote field access roads decide whether people, materials, and equipment can move efficiently. The scope needed durable execution at meaningful length and thickness.",
    delivery: [
      "11 KM TAFLA road construction",
      "4 M route width",
      "25 CM construction thickness",
      "Civil access package for Abu Gharadig field operations",
    ],
    outcomes: [
      "Gives the portfolio a concrete, number-backed civil case",
      "Demonstrates Atta's ability to support remote petroleum operations",
      "Makes the project instantly understandable to procurement teams",
    ],
    sourceLink:
      "https://atta-group.net/portfolio/construction-of-access-tafla-road-with-11-km-length-4-m-width-and-25-cm-thickness-at-abu-gharadig-site/",
    images: ["/atta/project-road-detail-1.jpg", "/atta/project-road-detail-2.jpg"],
  },
  {
    slug: "oil-tank-calibration-mare-and-sand",
    title: "Oil tank calibration at Mare and Sand sites",
    category: "Calibration",
    location: "Mare and Sand",
    sector: "Oil storage",
    scope: "Calibration of oil tanks across petroleum operating sites.",
    story:
      "A precision-oriented petroleum support scope that adds reliability and measurement credibility to the Atta portfolio.",
    challenge:
      "Tank calibration affects inventory confidence, operational decisions, and compliance. The project needs careful site work, not just manpower.",
    delivery: [
      "Oil tank calibration",
      "Work across multiple operating sites",
      "Field measurement support",
      "Petroleum storage asset service",
    ],
    outcomes: [
      "Adds a technical maintenance proof point",
      "Broadens Atta's positioning beyond construction-only work",
      "Supports clients who care about operating accuracy and asset reliability",
    ],
    sourceLink:
      "https://atta-group.net/portfolio/calibration-of-oil-tanks-at-the-sites-of-mare-and-sand/",
    images: ["/atta/project-tank-detail-1.jpg", "/atta/project-tank-detail-2.jpg"],
  },
  {
    slug: "abu-al-gharadiq-six-inch-line-welding",
    title: "6-inch Schedule 80 line welding over 10 KM",
    category: "Pipeline Welding",
    location: "Abu Al-Gharadiq",
    sector: "Pipeline infrastructure",
    scope:
      "Welding works for a 6-inch Schedule 80 line, 10 KM long, in Abu Al-Gharadiq area.",
    story:
      "A pipeline welding project with enough specificity to become a flagship case study for mechanical and petroleum clients.",
    challenge:
      "Long-run pipeline welding demands repeatable quality, disciplined crews, and enough field rhythm to keep the route moving.",
    delivery: [
      "6-inch Schedule 80 line welding",
      "10 KM pipeline route",
      "Field welding execution",
      "Mechanical support for petroleum infrastructure",
    ],
    outcomes: [
      "Creates a high-value mechanical proof point",
      "Signals capability on long-distance petroleum line work",
      "Makes the mechanical service page more commercially believable",
    ],
    sourceLink:
      "https://atta-group.net/portfolio/welding-works-for-a-6inch-schedule-80-line-10-km-long-in-abu-al-gharadiq-area/",
    images: ["/atta/project-welding-detail-1.jpg", "/atta/project-welding-detail-2.jpg"],
  },
  {
    slug: "overhead-line-fabrication-hot-galvanizing",
    title: "Fabrication and hot galvanizing for overhead transmission line",
    category: "Fabrication",
    location: "Transmission infrastructure",
    sector: "Power infrastructure",
    scope:
      "Fabrication and hot galvanizing works supporting overhead transmission-line infrastructure.",
    story:
      "A fabrication-led utility project that expands Atta's image from field execution into preparation, protection, and durable infrastructure components.",
    challenge:
      "Transmission-line components have to be fabricated and protected for long service life before they ever reach the field.",
    delivery: [
      "Fabrication works",
      "Hot galvanizing",
      "Transmission-line component support",
      "Quality-oriented preparation for utility infrastructure",
    ],
    outcomes: [
      "Strengthens Atta's power infrastructure credibility",
      "Adds fabrication depth to the project portfolio",
      "Shows a lifecycle mindset from component preparation to field use",
    ],
    sourceLink:
      "https://atta-group.net/portfolio/fabrication-hot-galvanizing-works-of-over-head-transmission-line/",
    images: ["/atta/project-galvanizing-1.jpg", "/atta/project-galvanizing-2.jpg"],
  },
];

export const attaStats = [
  { value: "11+", label: "Years of specialized contracting presence" },
  { value: "07", label: "Portfolio cases rebuilt as sales-ready project pages" },
  { value: "05", label: "Core service lines for energy and infrastructure work" },
  { value: "03", label: "Regional markets in focus: Egypt, Saudi Arabia, and Libya" },
];

export function getAttaProject(slug: string) {
  return attaProjects.find((project) => project.slug === slug);
}
