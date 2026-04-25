# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for **JW ProBuild**, a construction company targeting bank-mandated inspection repairs for multi-family properties. The site serves two primary audiences:
1. **Property owners/managers** facing foreclosure risk due to failed lender inspections
2. **Lending institutions** seeking qualified contractor partnerships

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Components**: React Server Components (Client Components only when interactive)
- **Forms**: GoHighLevel embedded forms via `<GHLFormEmbed />` wrapper
- **Animations**: CSS keyframes (Tailwind utilities); no Framer Motion installed
- **Tracking**: Google Tag Manager + WhatConverts (call tracking, dynamic number swap)
- **Hosting**: Vercel (standard SSR/SSG; no static export)

## Design System

### Brand Colors
- **Primary Yellow**: `#FFD700` (Gold) - Primary CTAs, accents, brand elements
- **Black**: `#000000` - Headers, navigation, primary text
- **White**: `#FFFFFF` - Clean backgrounds, contrast
- **Dark Gray**: `#1F2937` - Secondary text, structural elements
- **Success Green**: `#10B981` - Completion indicators
- **Urgency Red**: `#EF4444` - Timeline-critical alerts (use sparingly)
- **Background**: `#FAFAFA` (Soft off-white) and `#FFFEF7` (Warm white with yellow tint)

### Color Usage Philosophy
- **30% Yellow**: CTAs, accents, logo areas
- **40% Black/Charcoal**: Text, headers, navigation
- **30% White/Warm White**: Backgrounds, breathing room
- High contrast design for authority and urgency
- Yellow commands attention, black conveys trust

### Typography
- **Font**: 'Inter' for all text (headings and body)
- **Heading Weights**: 700 (H1-H2), 600 (H3-H4), 500 (emphasis)
- **Body Weight**: 400 (regular), 500 (medium emphasis)
- **Base Size**: 16px, key sections use 18px
- **Scale**: H1: 3.5rem → 2rem mobile, H2: 2.5rem → 1.75rem mobile

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1440px

## Site Architecture

### Critical Pages & Features

**1. Landing Page (`/get-quote`)** - PRIMARY CONVERSION PAGE
- Split-screen layout: sticky form (right), content (left)
- Comprehensive lead capture form with:
  - Property address, type, size
  - Inspection deadline (date picker)
  - Repair types (checkboxes with icons)
  - Urgency indicator
- AI chat widget (bottom-right, fixed)
- Minimal navigation to reduce distraction

**2. Homepage (`/`)**
- Hero: "Bank-Mandated Inspection Repairs Done Right, On Time"
- Sections: Problem → Consequences → Solution → Services → Lender Partnerships → Process → Testimonials → CTA
- Dual-audience messaging (property owners + lenders)

**3. AI Chat Component** (Sitewide)
- Fixed bottom-right position (60px from bottom, 30px from right)
- Yellow (#FFD700) circular icon with JW ProBuild logo
- Full-screen on mobile, 400x600px window on desktop
- Capabilities:
  - Answer service questions
  - Qualify leads (property type, urgency, repairs needed)
  - Book appointments via calendar integration
  - Provide lender inspection education
- Auto-triggers: 30s engagement, scroll to 50%, form field focus, exit intent
- Pre-trained on JW ProBuild services and lender inspection FAQ

**4. Other Key Pages**
- `/services` - Comprehensive repair capabilities by category
- `/lenders` - Partnership recruitment for lending institutions
- `/process` - Interactive timeline visualization
- `/about` - Credibility and licensing information
- `/case-studies` - Before/after project showcases
- `/resources` - Educational content about lender inspections
- `/contact` - Multiple contact methods + emergency quote form

## Component Architecture

### Key Reusable Components

**Forms**
- All forms use React Hook Form + Zod validation
- Shared form components: DatePicker, PropertyTypeSelect, RepairCheckboxGroup
- Form submissions integrate with CRM/email notifications
- Spam protection on all forms

**AI Chat Widget**
- Isolated component, injectable on any page
- OpenAI GPT-4 API integration
- Context-aware based on current page
- Lead capture integrated into conversation flow
- Calendar integration for appointment booking

**CTAs**
- Primary: Yellow background (#FFD700), black text, 56px height
- Secondary: Black outlined, white background
- Emergency CTA: Red accent for urgent situations
- All CTAs mobile-optimized with touch targets

**Trust Elements**
- Credibility badges: "Licensed • Insured • Certified"
- Rotating trust bar in header
- License/certification displays
- Testimonial cards

## Development Practices

### Component Development
- Use React Server Components by default
- Client Components only when interactivity required (forms, animations, chat)
- Co-locate components with their page when page-specific
- Shared components in `/components` directory
- Each component has its own folder with index file and styles

### Styling Approach
- Tailwind CSS utility-first
- Custom classes only for complex repeated patterns
- Color palette defined in `tailwind.config.js`
- Use `clsx` or `cn` utility for conditional classes
- Dark mode support not required for this project

### Forms
- All validation schemas in `/lib/schemas`
- Form handlers use server actions when possible
- Client-side validation for immediate feedback
- Error messages contextual and helpful
- Submit buttons show loading state

### Performance
- Images: WebP format, lazy loading, proper sizing
- Fonts: Preload Inter font, subset if needed
- Code splitting: Dynamic imports for heavy components (chat widget, calendar)
- Lighthouse targets: 90+ score, LCP < 2.5s, CLS < 0.1

### AI Chat Implementation
- OpenAI API calls from server-side API routes (not client)
- Conversation history stored in session/local storage
- Rate limiting to prevent abuse
- Fallback responses when API unavailable
- Training content loaded from `/lib/ai-training-data.js`

### Appointment Booking
- Calendly embed preferred for simplicity
- Alternative: Cal.com for self-hosted control
- Integration via iframe or API depending on service
- Confirmation emails automated
- Calendar syncs with JW ProBuild's scheduling system

## Messaging & Tone

### Voice Characteristics
- **Authoritative**: Expert in lender inspection processes
- **Urgent but Calming**: Acknowledge timeline pressure without creating panic
- **Professional**: Serious business for serious situations
- **Clear**: No jargon, direct communication
- **Helpful**: Guide property owners through uncertainty

### Key Messaging
- Focus on **foreclosure prevention** (high stakes)
- Emphasize **one-stop capability** (all trades, one contractor)
- Highlight **timeline expertise** (understand lender deadlines)
- Demonstrate **specialized knowledge** (niche in bank-mandated repairs)
- Build **dual-audience strategy** (property owners + lender partnerships)

### Avoid Generic Construction Clichés
- ❌ "Best in the business" → ✅ "Licensed for all trade work on multi-family properties"
- ❌ Stock construction photos → ✅ Real before/after project photos
- ❌ Generic "trusted" claims → ✅ "Partnered with 15+ lending institutions"
- ❌ "Award-winning" → ✅ "Average completion: 60% faster than lender deadlines"

## SEO Strategy

### Target Keywords
- "bank inspection repairs [location]"
- "lender mandated repairs multi-family"
- "apartment complex inspection compliance"
- "emergency inspection repairs"
- "multi-family property inspection contractor"

### Content Strategy
- Educational blog posts about lender inspections
- Case studies for long-tail SEO
- Local SEO optimization via Google Business Profile
- Schema markup for services, reviews, local business

## Analytics & Tracking

### Key Metrics
- Form submissions (primary conversion)
- Phone number clicks (trackable via GA4)
- AI chat engagement and lead qualification rate
- Time on site and pages per session
- Traffic sources (organic, paid, direct, referral)
- Lender inquiry submissions (partnership requests)

### Conversion Funnel
1. Landing page visit
2. Form engagement or chat interaction
3. Lead submission
4. Follow-up contact within 2 hours
5. Quote provided within 24 hours

## Project Structure

```
/app
  /page.tsx                 # Homepage
  /layout.tsx               # Root layout (GTM + WhatConverts injected here)
  /globals.css
  /get-quote/page.tsx       # Primary lead-capture page (uses GHLFormEmbed)
  /services/page.tsx
  /lenders/page.tsx
  /process/page.tsx
  /about/page.tsx
  /contact/page.tsx
  /privacy/page.tsx         # Placeholder
  /terms/page.tsx           # Placeholder
/components
  /forms
    /GHLFormEmbed.tsx       # GoHighLevel form wrapper, takes formId prop
  /home                     # Home page sections (one-off)
  /layout
    /Header.tsx, Footer.tsx
  /ui
    /Logo.tsx, StickyMobileCTA.tsx
/content
  /home.ts                  # Typed content for the home page (Hero modeled in Phase 1)
/lib
  /analytics.ts             # pushEvent() helper for dataLayer
  /ghl-form-ids.ts          # Typed form ID constants from env
```

## Critical Implementation Notes

### AI Chat Pre-Training
The AI chat must be pre-loaded with:
- JW ProBuild service descriptions (from `/services`)
- Typical repair timelines by category
- Lender inspection process explanation (from resources)
- Common violations and what they mean
- Qualification questions (property type, urgency, repairs)
- Appointment booking trigger phrases

### Lead Capture Form Priority Fields
Most critical for qualification:
1. Property address (required)
2. Inspection deadline (required) - drives urgency
3. Property type (required) - affects scope
4. Repair types needed (required) - checkboxes for quick selection
5. "This is urgent" checkbox - routing priority

### Mobile-First Considerations
- Click-to-call phone number (tap to dial)
- Sticky CTA button on mobile (fixed bottom)
- Chat widget: full-screen overlay on mobile
- Form: Stack vertically, fixed submit button on scroll
- Touch targets minimum 44x44px

### Performance Considerations
- Chat widget lazy-loaded after initial page render
- Calendar integration loaded on-demand
- Images optimized (WebP, proper dimensions)
- Framer Motion animations hardware-accelerated
- Form validation debounced for performance

## Launch Checklist Priorities

Before launch, verify:
1. All forms submit successfully and send notifications
2. AI chat responds correctly to common questions
3. Appointment booking integration works end-to-end
4. Phone numbers clickable on mobile
5. SSL certificate and security headers configured
6. Analytics tracking verified (forms, phone clicks, chat)
7. Mobile responsiveness on iOS and Android
8. Cross-browser testing (Chrome, Safari, Firefox, Edge)
9. Accessibility: keyboard navigation, screen readers
10. Page speed: Lighthouse score 90+

## Unique Differentiators to Emphasize

This is NOT a generic construction website. Every decision should reinforce:
1. **Niche specialization**: Bank-mandated repairs (not general construction)
2. **Urgency**: Timeline-driven compliance (foreclosure prevention)
3. **Dual audience**: Property owners AND lender partnerships
4. **One-stop solution**: All trades, one contractor (comprehensive capability)
5. **Expertise**: Deep knowledge of lender inspection process

The yellow/black color scheme, combined with specific messaging about foreclosure prevention and lender partnerships, creates a unique positioning that stands out from generic construction websites.
