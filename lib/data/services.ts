import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    slug: "structural-architectural-design",
    name: "Structural & Architectural Design",
    shortDescription:
      "Precision-engineered blueprints and architectural plans that bring your vision to life — from initial concept to construction-ready drawings.",
    fullDescription:
      "Our design team combines structural engineering expertise with architectural creativity to produce comprehensive plans that are both beautiful and buildable. Every drawing is prepared to meet Kenyan building codes and local authority requirements, ensuring smooth approval and a seamless path to construction.",
    scope: [
      "Architectural floor plans and elevations",
      "Structural engineering drawings",
      "3D visualisations and renders",
      "Bill of quantities preparation",
      "Local authority approval submissions",
      "Site layout and landscaping plans",
    ],
    benefits: [
      "Designs optimised for the Kenyan climate and locally available materials",
      "Fast turnaround on NCA and county council approval documentation",
      "Fully integrated structural and architectural team — single point of contact",
    ],
    icon: "📐",
    heroImage: "/images/designs/3d-render-porch-entry.jpg",
    relatedServices: ["build-and-fabricate", "survey-works"],
    ctaText: "Request a design consultation",
  },
  {
    id: "2",
    slug: "build-and-fabricate",
    name: "Build & Fabricate",
    shortDescription:
      "Full-cycle construction from foundations to roofing — residential homes, commercial buildings, and everything in between, built to last generations.",
    fullDescription:
      "We manage the complete construction process, coordinating all trades and materials to deliver your project on time and on budget. Our experienced site teams bring collective experience across Kenyan construction, from substructure to roof.",
    scope: [
      "Substructure and foundation works",
      "Superstructure and walling",
      "Roofing and waterproofing",
      "Joinery, metalwork and fabrication",
      "Site management and coordination",
      "Project scheduling and progress reporting",
    ],
    benefits: [
      "Single point of accountability for your entire build",
      "Transparent cost tracking and weekly progress reports",
      "Qualified and vetted construction teams on every site",
    ],
    icon: "🏗️",
    heroImage: "/images/projects/residential-house-roofed.jpg",
    relatedServices: ["structural-architectural-design", "finishing-works"],
    ctaText: "Start your build",
  },
  {
    id: "3",
    slug: "finishing-works",
    name: "Finishing Works",
    shortDescription:
      "The details that transform a structure into a home. Tiling, plastering, painting, ceiling works and all internal finishes executed to perfection.",
    fullDescription:
      "Our finishing teams are specialists in delivering the high-quality interior and exterior finishes that define the character of your building. We source quality materials and apply meticulous craftsmanship to every surface.",
    scope: [
      "Plastering and screeding",
      "Wall and floor tiling",
      "Painting, texture and decorative finishes",
      "False ceiling installation",
      "Carpentry and built-in fittings",
      "External cladding and rendering",
    ],
    benefits: [
      "Experienced tradespeople for each finishing discipline",
      "Material procurement support and competitive bulk pricing",
      "Defects liability period with follow-up service visits",
    ],
    icon: "🪟",
    heroImage: "/images/interiors/interior-kitchen-completed.jpg",
    relatedServices: ["build-and-fabricate", "plumbing-electrical"],
    ctaText: "Get a finishes quote",
  },
  {
    id: "4",
    slug: "renovation-works",
    name: "Renovation Works",
    shortDescription:
      "Breathe new life into existing structures. From single-room makeovers to full building refurbishments — restoring, upgrading and transforming spaces.",
    fullDescription:
      "Renovation requires a unique skill set: understanding existing structures, managing disruption and delivering transformation without starting from scratch. Our teams are experienced in occupied-building renovations across Nairobi and Kiambu, minimising disruption while maximising results.",
    scope: [
      "Structural alterations and extensions",
      "Kitchen and bathroom remodelling",
      "Re-roofing and waterproofing remediation",
      "Façade and external upgrades",
      "Floor replacement and levelling",
      "Full internal strip-out and refurbishment",
    ],
    benefits: [
      "Minimal disruption to occupants during works",
      "Honest assessment of existing structural condition before committing",
      "Cost-effective phased renovation planning to suit your budget",
    ],
    icon: "🔨",
    heroImage: "/images/projects/residential-walling-windows.jpg",
    relatedServices: ["finishing-works", "plumbing-electrical"],
    ctaText: "Plan your renovation",
  },
  {
    id: "5",
    slug: "survey-works",
    name: "Survey Works",
    shortDescription:
      "Accurate land surveys, setting-out and topographic mapping — the foundational data that every successful construction project depends on.",
    fullDescription:
      "Precise survey data is the bedrock of any construction project. Our licensed surveyors provide all forms of land and construction surveys using modern GPS and total station equipment, serving clients across Nairobi, Kiambu and Murang'a.",
    scope: [
      "Topographic and boundary surveys",
      "Construction setting-out",
      "Building and infrastructure as-built surveys",
      "Volume and quantity surveys",
      "GPS and total station surveys",
      "Survey data processing and CAD drawings",
    ],
    benefits: [
      "Licensed and insured survey professionals",
      "Fast mobilisation across all three service counties",
      "Digital deliverables in all standard formats — DWG, PDF, CSV",
    ],
    icon: "📏",
    heroImage: "/images/services/survey-site-nairobi.jpg",
    relatedServices: ["structural-architectural-design", "build-and-fabricate"],
    ctaText: "Book a survey",
  },
  {
    id: "6",
    slug: "plumbing-electrical",
    name: "Plumbing & Electrical",
    shortDescription:
      "Full MEP installations for new builds and retrofits — water systems, drainage, power distribution, lighting and solar-ready electrical works.",
    fullDescription:
      "Our certified plumbers and electrical engineers handle the complete mechanical and electrical scope of your project, from design through installation and commissioning. All works comply with Kenya Power standards and local authority requirements.",
    scope: [
      "Cold and hot water supply systems",
      "Drainage and waste systems",
      "Electrical distribution boards and wiring",
      "Lighting design and installation",
      "Solar PV and battery-ready electrical preparation",
      "Borehole pump and water tank installations",
    ],
    benefits: [
      "Electricians licensed by the Energy and Petroleum Regulatory Authority (EPRA)",
      "Water systems designed for local supply conditions and pressure",
      "Full warranty on all installations with post-completion support",
    ],
    icon: "⚡",
    heroImage: "/images/interiors/interior-false-ceiling-led.jpg",
    relatedServices: ["build-and-fabricate", "finishing-works"],
    ctaText: "Get an MEP quote",
  },
  {
    id: "7",
    slug: "equipment-leasing",
    name: "Construction Equipment Leasing",
    shortDescription:
      "Access professional-grade construction equipment without the capital outlay. Flexible daily and weekly hire with full operator support available.",
    fullDescription:
      "Our equipment leasing division provides contractors, developers and self-builders with access to well-maintained construction machinery. All equipment is regularly serviced and available with or without a trained operator. We deliver and collect within Nairobi and Kiambu.",
    scope: [
      "Earthmoving — excavators and loaders",
      "Lifting — mobile cranes and hoists",
      "Concrete equipment — mixers and pumps",
      "Scaffolding systems — ringlock and frame",
      "Compaction equipment — plate compactors",
      "Operator provision on request",
    ],
    benefits: [
      "Flexible short and long-term hire terms — no long lock-in periods",
      "24-hour breakdown support for hire equipment on site",
      "Delivery and collection within Nairobi and Kiambu service area",
    ],
    icon: "🚜",
    heroImage: "/images/equipment/concrete-mixer-site.jpg",
    relatedServices: ["build-and-fabricate", "survey-works"],
    ctaText: "View equipment catalog",
  },
];
