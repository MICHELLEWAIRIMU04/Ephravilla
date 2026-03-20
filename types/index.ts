/* ─────────────────────────────────────────────────────────────────────────────
   Ephravilla Construction — Type Definitions
   ───────────────────────────────────────────────────────────────────────────── */

export type ServiceSlug =
  | "structural-architectural-design"
  | "build-and-fabricate"
  | "finishing-works"
  | "renovation-works"
  | "survey-works"
  | "plumbing-electrical"
  | "equipment-leasing";

export type ProjectType   = "residential" | "commercial" | "renovation" | "survey";
export type ProjectStatus = "completed"   | "ongoing";

export type EquipmentCategory =
  | "earthmoving"
  | "lifting"
  | "concrete"
  | "scaffolding"
  | "compaction"
  | "general";

export type AvailabilityStatus = "available" | "on-lease" | "maintenance";

/* ─── Service ─────────────────────────────────────────────────────────────── */
export interface Service {
  id:               string;
  slug:             ServiceSlug;
  name:             string;
  shortDescription: string;
  fullDescription:  string;
  scope:            string[];
  benefits:         string[];
  icon:             string;
  heroImage:        string;
  relatedServices:  ServiceSlug[];
  ctaText:          string;
}

/* ─── Project ─────────────────────────────────────────────────────────────── */
export interface Project {
  id:               string;
  slug:             string;
  title:            string;
  type:             ProjectType;
  status:           ProjectStatus;
  location:         string;
  year:             number;
  shortDescription: string;
  fullDescription:  string;
  services:         ServiceSlug[];
  images: {
    thumbnail: string;
    hero:      string;
    gallery:   string[];
  };
  featured: boolean;
}

/* ─── Equipment ───────────────────────────────────────────────────────────── */
export interface Equipment {
  id:               string;
  name:             string;
  category:         EquipmentCategory;
  description:      string;
  specifications:   Record<string, string>;
  dailyRate?:       string;
  weeklyRate?:      string;
  image:            string;
  availability:     AvailabilityStatus;
  whatsappMessage:  string;
}

/* ─── Contact form ────────────────────────────────────────────────────────── */
export interface ContactFormData {
  name:         string;
  email:        string;
  phone?:       string;
  service?:     ServiceSlug;
  message:      string;
  projectType?: ProjectType;
}
