/**
 * Home page content.
 *
 * Phase 1 example: only the Hero section is modeled. If this shape is
 * approved, Phase 2 will extend this file (and add sibling content/*.ts
 * files for other pages) and refactor the remaining components to consume
 * it. Until then, other home/* components keep their inline copy.
 */

export type CTA = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type Stat = {
  value: string;
  label: string;
};

export type HeroContent = {
  badges: string[];
  accentBadge: string;
  headline: {
    leading: string;
    accent: string;
  };
  subhead: string;
  ctas: CTA[];
  stats: Stat[];
};

export const heroContent: HeroContent = {
  badges: ["Licensed", "Insured", "Certified"],
  accentBadge: "Timeline-Sensitive Repairs",
  headline: {
    leading: "Bank-Mandated Inspection Repairs Done Right,",
    accent: "On Time",
  },
  subhead:
    "Licensed contractors for multi-family properties. One call. Complete compliance.",
  ctas: [
    { label: "Get Emergency Quote", href: "/get-quote", variant: "primary" },
    { label: "Learn About Our Process", href: "/process", variant: "secondary" },
  ],
  stats: [
    { value: "500+", label: "Properties Completed" },
    { value: "60%", label: "Faster Than Deadlines" },
    { value: "15+", label: "Lending Institutions" },
  ],
};
