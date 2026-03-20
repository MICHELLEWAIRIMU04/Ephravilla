import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "ruiru-apartment-complex",
    title: "Ruiru Apartment Complex",
    type: "residential",
    status: "ongoing",
    location: "Ruiru, Kiambu",
    year: 2024,
    shortDescription:
      "A 24-unit apartment development comprising 1 and 2-bedroom units. Foundation slab, walling and roofing progressing on schedule.",
    fullDescription:
      "The Ruiru Apartments project is a phased residential development on a 0.8-acre site. The project has progressed through substructure, ground-beam, foundation slab, masonry walling and roofing stages. Interior finishing works including kitchen fitting, tiling and carpentry are underway. The design incorporates rainwater harvesting and solar-ready electrical installations.",
    services: ["structural-architectural-design","build-and-fabricate","finishing-works","survey-works","plumbing-electrical"],
    images: {
      thumbnail: "/images/projects/residential-roofing-in-progress.jpg",
      hero:      "/images/projects/residential-house-roofed.jpg",
      gallery: [
        "/images/projects/residential-roofing-in-progress.jpg",
        "/images/projects/residential-house-roofed.jpg",
        "/images/projects/roofing-detail-corrugated.jpg",
        "/images/interiors/interior-false-ceiling-led.jpg",
        "/images/interiors/interior-kitchen-completed.jpg",
      ],
    },
    featured: true,
  },
  {
    id: "2",
    slug: "nairobi-commercial-development",
    title: "Nairobi Commercial Development",
    type: "commercial",
    status: "ongoing",
    location: "Nairobi",
    year: 2024,
    shortDescription:
      "A seven-storey commercial building — full structural works, upper floor walling, fitted rooms and balcony glazing now progressing.",
    fullDescription:
      "This multi-storey commercial development in Nairobi is a major structural undertaking. The project involves full structural design, concrete superstructure, column construction, upper-floor walling and MEP installations. Interior finishing includes floor tiling, large window glazing and balcony balustrade installation across multiple floors. The building has wide views across Nairobi from upper floors.",
    services: ["structural-architectural-design","build-and-fabricate","finishing-works","plumbing-electrical"],
    images: {
      thumbnail: "/images/projects/commercial-build-facade.jpg",
      hero:      "/images/interiors/apartment-balcony-city-view.jpg",
      gallery: [
        "/images/projects/commercial-build-facade.jpg",
        "/images/projects/multi-storey-scaffolding.jpg",
        "/images/projects/upper-floor-walling-nairobi.jpg",
        "/images/interiors/apartment-balcony-city-view.jpg",
        "/images/interiors/apartment-room-tiled.jpg",
        "/images/interiors/apartment-room-city-view.jpg",
        "/images/interiors/apartment-room-marble-tile.jpg",
      ],
    },
    featured: true,
  },
  {
    id: "3",
    slug: "kiambu-residential-build",
    title: "Kiambu Residential Build",
    type: "residential",
    status: "completed",
    location: "Kiambu County",
    year: 2024,
    shortDescription:
      "A full-cycle residential build — architectural 3D design, structural works, masonry, roofing and high-quality interior finishes.",
    fullDescription:
      "This residential project in Kiambu County showcases Ephravilla's full-cycle capability, from initial architectural design through to a fully finished home. The design was developed in 3D using our architectural visualisation software. Structural works included reinforced pad foundations, column starters, ground beams and masonry block walling. Interior finishing encompassed custom fitted wardrobes, kitchen fitting with subway-tile splashbacks and marble-effect floor tiling.",
    services: ["structural-architectural-design","build-and-fabricate","finishing-works","plumbing-electrical"],
    images: {
      thumbnail: "/images/designs/3d-render-porch-entry.jpg",
      hero:      "/images/designs/3d-render-front-elevation.jpg",
      gallery: [
        "/images/designs/3d-render-porch-entry.jpg",
        "/images/designs/3d-render-front-elevation.jpg",
        "/images/designs/3d-render-side-view.jpg",
        "/images/designs/3d-render-garden-view.jpg",
        "/images/projects/residential-walling-windows.jpg",
        "/images/projects/residential-house-at-dusk.jpg",
        "/images/interiors/wardrobe-sliding-doors.jpg",
        "/images/interiors/wardrobe-drawers-fitted.jpg",
      ],
    },
    featured: true,
  },
  {
    id: "4",
    slug: "apartment-interior-finishes",
    title: "Apartment Interior Finishing",
    type: "renovation",
    status: "completed",
    location: "Nairobi",
    year: 2024,
    shortDescription:
      "Full interior finishing package — false ceilings with LED lighting, kitchen fitting, bathroom tiling, wardrobes and floor tiles throughout.",
    fullDescription:
      "A comprehensive interior finishing contract covering multiple apartment units. Scope included gypsum false ceilings with LED strip and spot lighting, full kitchen fit-out with subway-tile splashbacks and custom joinery, bathroom tiling with marble-effect wall and floor tiles, built-in wardrobes with sliding doors and overhead storage, and marble-effect floor tiling throughout.",
    services: ["finishing-works","plumbing-electrical"],
    images: {
      thumbnail: "/images/interiors/interior-false-ceiling-led.jpg",
      hero:      "/images/interiors/false-ceiling-led-design.jpg",
      gallery: [
        "/images/interiors/interior-false-ceiling-led.jpg",
        "/images/interiors/false-ceiling-led-design.jpg",
        "/images/interiors/interior-kitchen-completed.jpg",
        "/images/interiors/kitchen-upper-cabinets-wip.jpg",
        "/images/interiors/kitchen-cabinets-fitting.jpg",
        "/images/interiors/kitchen-island-marble-top.jpg",
        "/images/interiors/kitchen-upper-cabinets-completed.jpg",
        "/images/interiors/kitchen-cabinet-interior.jpg",
        "/images/interiors/wardrobe-sliding-doors.jpg",
        "/images/interiors/bathroom-marble-tile-completed.jpg",
        "/images/interiors/bathroom-subway-tile-wip.jpg",
      ],
    },
    featured: false,
  },
  {
    id: "5",
    slug: "steel-fabrication-works",
    title: "Steel Fabrication Works",
    type: "renovation",
    status: "completed",
    location: "Nairobi & Kiambu",
    year: 2024,
    shortDescription:
      "Custom steel fabrication — security doors, ornate gates, CNC laser-cut screens, window frames and structural metalwork.",
    fullDescription:
      "Ephravilla's fabrication team produces high-quality custom metalwork to complement our construction projects. This portfolio of works includes ornate sliding gates with scroll and CNC laser-cut decorative panels, security doors in grey and brown finishes, geometric steel window frames, and structural metalwork. All pieces are fabricated in-house, primed and finish-painted before installation.",
    services: ["build-and-fabricate","finishing-works"],
    images: {
      thumbnail: "/images/fabrication/ornate-gate-fabrication.jpg",
      hero:      "/images/fabrication/cnc-laser-cut-door.jpg",
      gallery: [
        "/images/fabrication/ornate-gate-fabrication.jpg",
        "/images/fabrication/cnc-laser-cut-door.jpg",
        "/images/fabrication/steel-security-door-grey.jpg",
        "/images/fabrication/steel-double-door-brown.jpg",
        "/images/fabrication/steel-door-fabricated.jpg",
        "/images/fabrication/steel-window-frame-grey.jpg",
        "/images/fabrication/steel-window-frames-multiple.jpg",
      ],
    },
    featured: false,
  },
  {
    id: "6",
    slug: "foundation-concrete-works",
    title: "Multi-Site Foundation Works",
    type: "commercial",
    status: "completed",
    location: "Nairobi",
    year: 2024,
    shortDescription:
      "Pad foundations, ground beams, raft slabs and specialist circular tank foundations — reinforcement fixing and mass concrete works.",
    fullDescription:
      "A challenging multi-site foundation contract in Nairobi's red-soil terrain. Works ranged from reinforced pad foundations for column-frame structures, ground-beam and masonry substructure walling, large-format raft slab pours, and a specialist circular reinforced concrete tank foundation with complex radial rebar assembly. All sites were managed by Ephravilla's licensed site engineers.",
    services: ["structural-architectural-design","build-and-fabricate","survey-works"],
    images: {
      thumbnail: "/images/projects/pad-foundation-rebar.jpg",
      hero:      "/images/projects/foundation-concrete-pour.jpg",
      gallery: [
        "/images/projects/pad-foundation-rebar.jpg",
        "/images/projects/foundation-concrete-pour.jpg",
        "/images/projects/ground-beam-masonry-walling.jpg",
        "/images/projects/circular-tank-foundation-rebar.jpg",
        "/images/projects/foundation-rebar-inspection.jpg",
        "/images/projects/rebar-foundation-grid.jpg",
        "/images/projects/slab-pour-worker-wheelbarrow.jpg",
      ],
    },
    featured: false,
  },
  {
    id: "7",
    slug: "upper-floor-structural-works",
    title: "Upper Floor Structural Works",
    type: "commercial",
    status: "completed",
    location: "Nairobi",
    year: 2024,
    shortDescription:
      "Beam, column and suspended slab construction for upper floors — formwork, rebar fixing and in-situ concrete with mixer and hoist.",
    fullDescription:
      "A comprehensive upper-floor structural package covering timber formwork, reinforcement fixing for beams and two-way slabs, column starters and organised concrete pours using on-site mixer and crane hoist equipment. Our surveyor maintained setting-out and level control throughout, ensuring every floor was built to the correct elevation.",
    services: ["build-and-fabricate","structural-architectural-design","survey-works"],
    images: {
      thumbnail: "/images/projects/beam-slab-formwork.jpg",
      hero:      "/images/projects/mixer-crane-on-site.jpg",
      gallery: [
        "/images/projects/beam-slab-formwork.jpg",
        "/images/projects/mixer-crane-on-site.jpg",
        "/images/projects/upper-floor-walling-nairobi.jpg",
        "/images/projects/multi-storey-scaffolding.jpg",
        "/images/projects/large-slab-pour.jpg",
      ],
    },
    featured: false,
  },
  {
    id: "8",
    slug: "muranga-county-road-survey",
    title: "Murang'a County Survey Works",
    type: "survey",
    status: "completed",
    location: "Murang'a County",
    year: 2024,
    shortDescription:
      "Topographic surveys and construction setting-out using total station equipment — boundary establishment, excavation monitoring and cross-section profiling.",
    fullDescription:
      "Ephravilla's survey team deployed total station instruments to deliver comprehensive topographic survey and construction setting-out services across Murang'a and Nairobi. Works included GPS control network establishment, boundary surveys, construction setting-out on active excavation sites, and cross-section profiling. Full digital deliverables in AutoCAD and CSV formats.",
    services: ["survey-works"],
    images: {
      thumbnail: "/images/services/survey-total-station.jpg",
      hero:      "/images/services/survey-site-nairobi.jpg",
      gallery: [
        "/images/services/survey-total-station.jpg",
        "/images/services/survey-site-nairobi.jpg",
        "/images/services/survey-total-station-screen.jpg",
      ],
    },
    featured: false,
  },
  {
    id: "9",
    slug: "concrete-staircase-works",
    title: "Concrete Staircase & Specialist Works",
    type: "residential",
    status: "completed",
    location: "Kiambu",
    year: 2024,
    shortDescription:
      "In-situ concrete staircases — a straight-flight stair with timber formwork and a complex spiral staircase with radial rebar assembly.",
    fullDescription:
      "This project highlights Ephravilla's specialist concrete capability. Two staircases were delivered — a conventional straight-flight staircase cast in-situ with timber formwork and a distinctive spiral staircase with complex radial rebar assembly. The spiral required precise setting-out and formwork carpentry to achieve the curved profile. Both were finished to a high standard.",
    services: ["build-and-fabricate","structural-architectural-design"],
    images: {
      thumbnail: "/images/projects/concrete-staircase-formwork.jpg",
      hero:      "/images/projects/spiral-staircase-rebar.jpg",
      gallery: [
        "/images/projects/concrete-staircase-formwork.jpg",
        "/images/projects/spiral-staircase-rebar.jpg",
      ],
    },
    featured: false,
  },
  {
    id: "10",
    slug: "architectural-design-portfolio",
    title: "Architectural Design Portfolio",
    type: "residential",
    status: "completed",
    location: "Nairobi & Kiambu",
    year: 2024,
    shortDescription:
      "Full-service architectural design — from initial concept through 3D visualisation, floor plans and construction-ready drawings.",
    fullDescription:
      "Ephravilla's design team produces comprehensive architectural packages that bridge the gap between a client's vision and a buildable structure. This portfolio showcases our 3D visualisation capability, producing photorealistic renders from multiple angles to help clients see their future home before breaking ground. Deliverables include architectural floor plans, elevations, 3D renders and full structural drawings ready for local authority submission.",
    services: ["structural-architectural-design","survey-works"],
    images: {
      thumbnail: "/images/designs/3d-render-front-elevation.jpg",
      hero:      "/images/designs/3d-render-porch-entry.jpg",
      gallery: [
        "/images/designs/3d-render-front-elevation.jpg",
        "/images/designs/3d-render-porch-entry.jpg",
        "/images/designs/3d-render-side-view.jpg",
        "/images/designs/3d-render-garden-view.jpg",
        "/images/designs/architectural-floor-plan.jpg",
      ],
    },
    featured: false,
  },
];
