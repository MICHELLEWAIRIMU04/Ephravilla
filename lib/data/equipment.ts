import type { Equipment } from "@/types";

export const equipment: Equipment[] = [
  {
    id: "1",
    name: "Concrete Mixer (Site Drum)",
    category: "concrete",
    description:
      "Diesel-powered drum concrete mixer as seen on our active sites. Produces consistent mixes for structural concrete applications including slabs, columns and beams.",
    specifications: {
      "Drum capacity": "500 litres",
      "Output":        "~12 m³/hour",
      "Engine":        "Diesel, 7.5 kW",
      "Drum speed":    "14–18 rpm",
      "Mobility":      "Towable / portable",
    },
    dailyRate:  "KES 4,500",
    weeklyRate: "KES 22,000",
    image: "/images/equipment/concrete-mixer-site.jpg",
    availability: "available",
    whatsappMessage:
      "Hello, I'd like to enquire about hiring the Concrete Mixer (Site Drum). Please advise on availability and terms.",
  },
  {
    id: "2",
    name: "Concrete Mixer (Transport Ready)",
    category: "concrete",
    description:
      "Our concrete mixers are available with delivery to your site via pickup truck. We load, transport and unload at your location within Nairobi and Kiambu.",
    specifications: {
      "Drum capacity": "500 litres",
      "Engine":        "Diesel",
      "Delivery":      "Included within service area",
      "Unloading":     "Ramp-assisted on-site",
    },
    dailyRate:  "KES 5,500",
    weeklyRate: "KES 26,000",
    image: "/images/equipment/mixer-transport-1.jpg",
    availability: "available",
    whatsappMessage:
      "Hello, I'd like to enquire about the Concrete Mixer with site delivery. Please advise on availability and terms.",
  },
  {
    id: "3",
    name: "Concrete Mixer with Hoist",
    category: "concrete",
    description:
      "Concrete mixer paired with a petrol-powered material hoist and a poker vibrator for multi-storey construction. Ideal for projects where concrete needs to be lifted to upper floors.",
    specifications: {
      "Mixer capacity":  "500 litres",
      "Hoist capacity":  "1 tonne",
      "Engine":          "Petrol",
      "Lift height":     "Up to 8 floors",
      "Suitable for":    "Multi-storey builds",
    },
    dailyRate:  "KES 12,000 (inclusive of operators,fuel and logistics fees)",
    
    image: "/images/projects/mixer-crane-on-site.jpg",
    availability: "available",
    whatsappMessage:
      "Hello, I'd like to enquire about the Concrete Mixer with Hoist. Please advise on availability and terms.",
  },
  {
    id: "4",
    name: "Mixer Delivery & Setup Service",
    category: "concrete",
    description:
      "Full mixer mobilisation service — we transport your hired mixer to site via pickup truck, unload using ramps, set it up and collect on completion of hire.",
    specifications: {
      "Service area":   "Nairobi & Kiambu",
      "Vehicle":        "Pickup truck",
      "Setup":          "Included",
      "Collection":     "Included",
    },
    dailyRate:  "KES 4,500",
    weeklyRate: "KES 27,000",
    image: "/images/equipment/mixer-delivery.jpg",
    availability: "available",
    whatsappMessage:
      "Hello, I'd like to enquire about the Mixer Delivery & Setup Service. Please advise on availability and terms.",
  },
  {
    id: "5",
    name: "Material Hoist (Green Electric)",
    category: "lifting",
    description:
      "Gasoline powered material hoist for lifting concrete, blocks and construction materials to upper floors on multi-storey sites. Operated from scaffolding platform.",
    specifications: {
      "Capacity":    "1 tonne",
      "Power":       "Gasolin powered engine Honda GX 270",
      "Colour":      "Green housing",
      "Application": "Multi-storey sites",
      "Scaffolding": "Required (not included)",
    },
    dailyRate:  "KES 6,500",
    weeklyRate: "KES 39,000",
    image: "/images/projects/multi-storey-scaffolding.jpg",
    availability: "available",
    whatsappMessage:
      "Hello, I'd like to enquire about the Material Hoist. Please advise on availability and terms.",
  },
  {
    id: "6",
    name: "Concrete Vibrator (50mm)",
    category: "concrete",
    description:
      "Gasoline powered vibrator with 50mm head for consolidating poured concrete in columns, beams and slabs. Reduces voids and improves structural integrity.",
    specifications: {
      "Head diameter": "50 mm",
      "Frequency":     "12,000 rpm",
      "Hose length":   "6 m",
      "Power":         "Gasoline , GX 160 engine",
    },
    dailyRate:  "KES 2,500",
    weeklyRate: "KES 15,000 (inclusive of operators and transport fees)",
    image: "/images/projects/foundation-concrete-pour.jpg",
    availability: "available",
    whatsappMessage:
      "Hello, I'd like to enquire about the Concrete Vibrator (50mm). Please advise on availability and terms.",
  },
  {
    id: "7",
    name: "Ringlock Scaffolding System",
    category: "scaffolding",
    description:
      "Modular ringlock scaffolding system, available in configurable bays up to 12m height. Supplied with all base plates, ledgers and decking boards.",
    specifications: {
      "Max height":         "12 m per lift",
      "Bay width":          "0.7–2.0 m",
      "Safe working load":  "2.0 kN/m²",
      "Material":           "Hot-dip galvanised steel",
    },
    dailyRate:  "KES 35 per m²",
    weeklyRate: "KES 160 per m²",
    image: "/images/projects/commercial-build-facade.jpg",
    availability: "available",
    whatsappMessage:
      "Hello, I'd like to enquire about scaffolding hire. Please advise on the area and height needed so we can provide a quote.",
  },
  {
    id: "8",
    name: "Plate Compactor (80kg)",
    category: "compaction",
    description:
      "80kg petrol-powered plate compactor for compacting granular fill, sub-base materials and paving bases prior to concrete pours.",
    specifications: {
      "Plate size":       "640 × 460 mm",
      "Compaction force": "15 kN",
      "Engine":           "Petrol, 4.0 kW",
      "Working speed":    "25 m/min",
    },
    dailyRate:  "KES 2,500",
    weeklyRate: "KES 12,000",
    image: "/images/projects/large-slab-pour.jpg",
    availability: "maintenance",
    whatsappMessage:
      "Hello, I'd like to enquire about the Plate Compactor (80kg). Please advise on availability and terms.",
  },
];
