import { z } from "zod";

export const leadFormSchema = z.object({
  // Property details
  propertyAddress: z.string().min(5, "Please enter a valid property address"),
  propertyType: z.enum([
    "apartment-complex",
    "senior-living",
    "student-housing",
    "affordable-housing",
    "other",
  ], {
    required_error: "Please select a property type",
  }),
  propertySize: z.string().min(1, "Please enter the number of units"),

  // Inspection details
  inspectionDeadline: z.string().min(1, "Please select your inspection deadline"),

  // Repair types needed
  repairTypes: z.array(z.string()).min(1, "Please select at least one repair type"),

  // Situation description
  currentSituation: z.string().min(10, "Please describe your situation (minimum 10 characters)"),

  // Contact information
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),

  // Urgency flag
  isUrgent: z.boolean().default(false),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export const propertyTypeLabels: Record<string, string> = {
  "apartment-complex": "Apartment Complex",
  "senior-living": "Senior Living Facility",
  "student-housing": "Student Housing",
  "affordable-housing": "Affordable Housing",
  "other": "Other Multi-Family Property",
};

export const repairTypeOptions = [
  { value: "roofing-structural", label: "Roofing/Structural", icon: "🏗️" },
  { value: "plumbing-electrical", label: "Plumbing/Electrical", icon: "⚡" },
  { value: "parking-concrete", label: "Parking/Concrete", icon: "🅿️" },
  { value: "hvac-mechanical", label: "HVAC/Mechanical", icon: "🔧" },
  { value: "fire-safety", label: "Fire Safety/Code Compliance", icon: "🔥" },
  { value: "interior-common-areas", label: "Interior/Common Areas", icon: "🏢" },
  { value: "other", label: "Other (specify in notes)", icon: "📋" },
];
