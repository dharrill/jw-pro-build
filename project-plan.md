# JW ProBuild Website - Project Plan
## Bank-Oredered Inspection Repairs for Multi-Family Properties

### Executive Summary

JW ProBuild targets apartment complexes and large multi-family commercial properties requiring bank-mandated inspection repairs. The website serves as both a partner recruitment tool for lenders seeking qualified contractors and a lead generation platform for property owners facing urgent compliance deadlines.

**Core Value Proposition**: One-stop inspection repair services that prevent property foreclosure by meeting bank-mandated timelines with licensed, accredited expertise.

---

## 1. Target Audience

### Primary Audience: Property Owners & Property Management Companies
- **Pain Point**: Bank has issued inspection violations with strict timeline requirements
- **Risk**: Foreclosure if repairs not completed in time
- **Need**: Fast, reliable, licensed contractor who can handle ALL mandated repairs
- **Urgency Level**: HIGH - Timeline-driven compliance deadline

### Secondary Audience: Lenders & Banking Institutions
- **Pain Point**: Need reliable, accredited contractors for their borrowers' inspection repairs
- **Need**: Trusted partner network to refer property owners to
- **Criteria**: Licensed, insured, capable of handling comprehensive repair scopes

---

## 2. Design Philosophy

### Core Principles
1. **Urgency Without Panic**: Communicate time-sensitivity without creating fear
2. **Trust & Credibility**: Professional, authoritative, backed by certifications
3. **Comprehensive Solutions**: One-stop capability (not "contact 5 contractors")
4. **Clear Communication**: Build understanding of lender inspection process
5. **Streamlined Experience**: Remove friction in the quote/contact process

### Non-Generic Approach
- **Avoid**: Stock photos of construction workers, generic "We're the best" messaging
- **Instead**: Real project photos, specific lender compliance language, timeline urgency, foreclosure prevention messaging
- **Differentiation**: Focus on BANK-MANDATED repairs specifically (niche expertise)

---

## 3. Design System

### Color Palette

#### Primary Colors (Logo-Based)
- **Primary Yellow**: `#FFD700` (JW ProBuild brand yellow - Gold)
  - Primary brand color
  - Used for headers, primary CTAs, logos, accents
  - Golden yellow conveys value, quality, professionalism

- **White**: `#FFFFFF` (Clean, professional white)
  - Logo color, text on dark backgrounds
  - Negative space for breathing room

- **Black**: `#000000` (Text, structure)
  - Primary text color for maximum readability
  - Used for body text, navigation

#### Accent Colors
- **Dark Gray**: `#1F2937` (Deep charcoal)
  - Headings, strong text, structural elements
  - Provides contrast and hierarchy

- **Success Green**: `#10B981` (Compliance/completion green)
  - Signals successful completion, inspection passed
  - Used for completion indicators, success messages

- **Urgency Red**: `#EF4444` (Timeline critical indicator)
  - Only for urgent/timeline-critical messaging
  - Used sparingly for maximum impact

#### Neutral Palette
- **Background**: `#FAFAFA` (Soft off-white)
- **Text Primary**: `#1F2937` (Charcoal)
- **Text Secondary**: `#6B7280` (Medium gray)
- **Borders**: `#E5E7EB` (Light gray)
- **Subtle Background**: `#FFFEF7` (Warm white with yellow tint)

#### Gradient Overlays
- **Hero Gradient**: Linear gradient from `#000000` to transparent (dark overlay)
- **Yellow Gradient**: Subtle yellow-to-white gradient for brand touches

---

## 4. Typography

### Font Stack
- **Headings**: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
  - Modern, highly legible, professional
  - Weights: 700 (headings), 600 (subheadings), 500 (emphasis)
  
- **Body Text**: 'Inter', system-ui, sans-serif
  - Weights: 400 (regular), 500 (medium for emphasis)
  - Sizes: 16px base, 18px for key sections

- **Monospace** (Technical specs): 'SF Mono', 'Monaco', monospace

### Scale
- H1: 3.5rem (56px) - 2rem (32px) mobile
- H2: 2.5rem (40px) - 1.75rem (28px) mobile
- H3: 2rem (32px) - 1.5rem (24px) mobile
- H4: 1.5rem (24px) - 1.25rem (20px) mobile
- Body: 1rem (16px)
- Small: 0.875rem (14px)

---

## 5. Site Architecture

### Landing Page (/get-quote or /quote) - PRIMARY LEAD CAPTURE
**Goal**: Maximum conversion with split-screen form + AI chat

**Features**:
- Sticky lead capture form
- AI chat widget
- Minimal navigation distraction
- Single-focused conversion goal

### Homepage (/)
**Goal**: Immediately communicate expertise in bank-mandated repairs with urgent, trustworthy messaging

**Above the Fold**:
- Headline: "Bank-Mandated Inspection Repairs Done Right, On Time"
- Subheadline: "Licensed contractors for multi-family properties. One call. Complete compliance."
- Primary CTA: "Get Emergency Quote" (orange, prominent)
- Secondary CTA: "Learn About Our Process" (blue, outlined)

**Hero Visual**:
- Dark overlay on background image (apartment complex)
- Trust badges floating: "Licensed • Insured • Certified"
- Urgency indicator: "Timeline-Sensitive Repairs"

**Key Sections**:
1. **The Problem** (why lenders require inspections)
2. **What Happens Next** (the consequences of non-compliance)
3. **How We Help** (one-stop solution)
4. **Service Capabilities** (comprehensive repair types)
5. **Partner With Lenders** (for bank relationships)
6. **Process & Timeline** (typical engagement flow)
7. **Credibility/Testimonials** (social proof)
8. **Get Started** (CTA section)

### Landing Page (/quote or /get-quote)
**Goal**: High-converting lead capture with AI chat integration

**URL Options**: 
- Primary: `/get-quote` (most common search intent)
- Alternative: `/emergency-repairs` (urgency-focused)
- Canonical URL for SEO: `/get-quote`

**Layout Strategy**:
- Split screen design: Form on right (sticky), content on left
- AI chat widget positioned bottom-right
- Mobile: Stack content above form
- Minimal header navigation (logo, phone, hamburger menu)

**Visual Design**:
- **Background**: Warm white (#FFFEF7) to create subtle warmth from yellow
- **Content Side**: Black headlines, gray body text, yellow bullets
- **Form Side**: White card with black border, yellow submit button
- **Typographic Hierarchy**: Clear size differences for scanability

**Key Content (Left Side)**:

*Hero Section*:
- Headline: **"Bank-Mandated Inspection Repairs Done On Time"** (Black, 48px desktop)
- Subheadline: "Prevent foreclosure. Get compliant. Keep your property." (Gray, 18px)
- Yellow CTA: "Get Emergency Quote" (large, bold)

*Benefit List* (with yellow bullet points):
- ✓ Licensed for all trade work
- ✓ One-stop comprehensive repairs
- ✓ Average completion: 60% faster than deadlines
- ✓ Works with lender timelines
- ✓ 500+ multi-family properties completed

*Trust Elements*:
- Badges: "Licensed • Insured • Certified"
- "Partnered with 15+ lending institutions"
- "A+ BBB Rating" (if applicable)

*Timeline Urgency*:
- "Need urgent repairs? Get a quote within 24 hours."
- Prominent phone number

**Lead Capture Form (Right Side - Sticky on Desktop)**:
- **Container**: White card with shadow, black 2px border
- Property address (text input, required)
- Property type (dropdown: Apartment Complex, Senior Living, Student Housing, Affordable Housing, Other)
- Inspection deadline (date picker with clear label)
- Property size: "# of units" (number input)
- Repair types needed (checkboxes with icons):
  - ☐ Roofing/Structural
  - ☐ Plumbing/Electrical
  - ☐ Parking/Concrete
  - ☐ HVAC/Mechanical
  - ☐ Fire Safety/Code Compliance
  - ☐ Interior/Common Areas
  - ☐ Other (specify in notes)
- Current situation (textarea - "Describe your inspection violations")
- Name (text input, required)
- Email (email input, required)
- Phone (tel input, required)
- Priority: ☑ "This is urgent - deadline approaching" checkbox
- Privacy note: "Your information is secure and private"
- Submit button: Yellow (#FFD700), black text, bold, large (height: 56px)
- Disclaimer: "By submitting, you consent to being contacted by JW ProBuild about your property inspection repairs."

**Mobile Form Behavior**:
- Form appears after hero section
- Submit button is fixed to bottom of viewport when scrolling down
- Reduces need to scroll back up to submit

**AI Chat Feature**:
- **Purpose**: Answer quick questions, qualify leads, book appointments
- **Location**: Fixed bottom-right corner (60px from bottom, 30px from right)
- **Icon**: JW ProBuild logo or construction tool icon in yellow circle
- **Open State**: Compact chat window (400px wide, 600px tall max)
- **Mobile State**: Full-screen overlay when opened

**Capabilities**:
1. Instant answers about:
   - Services offered
   - Repair timelines
   - Pricing ranges
   - Lender inspection process
   - Qualifications
   
2. Qualification:
   - Captures property details
   - Urgency level
   - Repair types
   - Forward to sales team
  
3. Booking:
   - Show calendar availability
   - Book appointment directly
   - Send confirmations
  
4. FAQ:
   - Lender inspection questions
   - Common violations
   - Process education

**Chat Triggers** (Smart auto-open):
- After 30 seconds of engagement (reading content)
- On scroll to bottom (50% of page)
- On form field focus (asks if they need help)
- On page exit intent
- Every time: Can be dismissed but icon remains visible

**Chat Personality**:
- Professional but approachable
- Urgent but calm (matching brand)
- Empathetic (understands stress of foreclosure risk)
- Helpful and solution-oriented

**Chat Customization**:
- JW ProBuild branding on chat header
- Yellow accent colors on buttons/links
- Black text for readability
- Smooth animations on open/close

### Services Page (/services)
**Goal**: Demonstrate comprehensive repair capability

**Service Categories**:
- **Structural & Roofing**
  - Roof repairs/replacement
  - Structural assessments
  - Foundation work
  
- **Parking & Infrastructure**
  - Parking lot repairs
  - Concrete work
  - ADA compliance updates
  
- **Mechanical Systems**
  - HVAC inspection/repair
  - Plumbing systems
  - Electrical compliance
  
- **Safety & Code Compliance**
  - Fire safety systems
  - Emergency egress
  - Building code violations
  
- **Cosmetic & Common Areas**
  - Interior common areas
  - Exterior siding
  - Lobby/entry renovations

**Each Service Includes**:
- Specific repair types under category
- Typical timeline estimates
- Our approach to that type of work

### Lender Partnership Page (/lenders)
**Goal**: Recruit lenders to refer borrowers to JW ProBuild

**Key Content**:
- "Partner With JW ProBuild for Your Borrowers' Inspection Repairs"
- Benefits of working with JW ProBuild:
  - Fast turnaround
  - Comprehensive capability (no coordinating multiple contractors)
  - Licensed and insured
  - Clear communication
  - Proven track record
  
- **What Lenders Get**:
  - Updates on progress
  - Photos/documentation of completed work
  - Compliance verification
  - Reduced default risk
  
- **Referral Process**:
  - How to refer borrowers
  - What information we need
  - What happens next
  
- Contact form specifically for lenders

### Process/How It Works (/process)
**Goal**: Reduce uncertainty about the process

**Timeline Visualization**:

**Day 1-2**: Initial Assessment
- Contact received
- Documentation reviewed
- Site visit scheduled

**Day 3-5**: Site Evaluation
- Comprehensive inspection
- Repair scope defined
- Timeline established
- Quote provided

**Day 6-10**: Approval & Mobilization
- Quote approved
- Contracts finalized
- Crews mobilized
- Materials ordered

**Week 2-8**: Execution (varies by scope)
- Daily communication
- Progress updates
- Issue resolution

**Completion**: Inspection Pass
- Final inspection
- Documentation provided
- Lien releases
- Compliance confirmed

**Feature**: Interactive timeline with expandable details at each step

### About Page (/about)
**Goal**: Build credibility and trust

**Key Content**:
- Company history and expertise
- Team credentials
- Licensing information
- Insurance coverage
- Certifications
- Notable projects/portfolio
- Why we focus on bank-mandated repairs

### Case Studies (/case-studies)
**Goal**: Demonstrate past success

**Template for Each Case**:
- **Property**: [Type and location]
- **Inspection Issues**: Specific violations
- **Timeline Pressure**: Deadline given
- **Our Solution**: What we did
- **Timeline**: How quickly we completed
- **Result**: Inspection passed, property retained
- **Testimonial**: Quote from owner/property manager
- **Photos**: Before/after (key repairs)

### Resources Page (/resources)
**Goal**: Educate and establish expertise

**Content**:
- "Understanding Lender Inspections" (link to provided article as reference)
- "Common Violation Types"
- "Timeline Management for Compliance"
- "What to Expect During Repairs"
- "Preparing for Inspection"
- "Questions to Ask Your Contractor"

### Contact Page (/contact)
**Goal**: Convert visitors to leads

**Multiple Contact Methods**:
1. **Emergency Quote Form** (prominent)
   - Property address
   - Property type
   - Inspection deadline date
   - Priority level
   - Repair types needed (checkboxes)
   - Current situation description
   
2. **Phone**: Large, clickable number
3. **Email**: Simple mailto link
4. **Lender Inquiries**: Separate form for lender partnerships

**Feature**: Same AI chat widget as landing page

---

## 6. Unique Elements & Components

### "Timeline Crisis" Banner
- Appears on pages for property owners
- Copy: "Inspection deadline approaching? Get an emergency quote within 24 hours."
- CTA: "Request Urgent Quote"

### "Code Compliance Checklist"
- Interactive checklist showing common violations
- Visitors can check off their issues
- Generates a preliminary scope assessment

### "Fast Track" Service Tier
- Highlighted service: Expedited turnaround for urgent deadlines
- Premium pricing for timeline-critical work
- Separate landing page: /fast-track

### Credibility Bar (Header)
- Rotating trust indicators:
  - "Licensed General Contractor"
  - "Certified Insured Professionals"
  - "500+ Multi-Family Properties Repaired"
  - "A+ BBB Rating" (if applicable)

### Project Type Badges
- Visual indicators for property types:
  - Large Apartment Complex
  - Senior Living Facilities
  - Affordable Housing
  - Student Housing

---

## 7. Key Messaging

### Value Propositions

**For Property Owners**:
- "Don't lose your property. We handle ALL bank-mandated repairs."
- "One call. Complete compliance. On time."
- "Licensed, insured, experienced with lender timelines."

**For Lenders**:
- "Refer your borrowers to JW ProBuild for fast, compliant repairs."
- "Reduce default risk with our proven inspection repair service."
- "One-stop capability eliminates coordination headaches."

### Unique Selling Points
1. **Comprehensive**: One contractor for all mandated repairs
2. **Fast**: Understanding of lender timelines
3. **Licensed**: Fully licensed in all required trades
4. **Experienced**: Specialized in multi-family property repairs
5. **Reliable**: Clear communication, documented work
6. **Urgency-Capable**: Fast-track services for critical deadlines

### Emotional Triggers
- **Anxiety**: "Facing foreclosure if repairs aren't completed in time?"
- **Relief**: "Get compliant. Keep your property."
- **Trust**: "Used by leading lenders across [region]"
- **Confidence**: "We've completed 500+ multi-family inspection repairs"

---

## 8. Technical Specifications

### Technology Stack
- **Framework**: Next.js 14 (React, App Router)
- **Styling**: Tailwind CSS
- **Components**: React Server Components
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Analytics**: Google Analytics 4
- **Hosting**: Vercel

### Performance Targets
- Lighthouse Score: 90+
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

### SEO Strategy
- Target Keywords:
  - "bank inspection repairs"
  - "lender mandated repairs"
  - "multi-family inspection repairs"
  - "apartment complex inspection compliance"
  - "emergency inspection repairs"
  - [Location] + "inspection repair contractor"
  
- Content: Blog/resources section for SEO authority

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader optimization
- High contrast mode support
- Text alternatives for images

---

## 9. Content Strategy

### Tone of Voice
- **Authoritative**: We know lender inspection processes
- **Helpful**: We guide property owners through uncertainty
- **Urgent but Calming**: Timeline pressure without panic
- **Professional**: Serious business for serious situations
- **Clear**: No jargon, no ambiguity

### Content Pillars
1. **Education**: Help visitors understand the inspection process
2. **Urgency**: Communicate timeline importance
3. **Expertise**: Demonstrate specialized knowledge
4. **Results**: Show successful case studies
5. **Trust**: Build confidence in JW ProBuild

### Content Calendar (Post-Launch)
- Weekly blog posts:
  - "5 Most Common Lender Inspection Violations"
  - "How Long Do Inspection Repairs Typically Take?"
  - "Working With Your Lender During Repairs"
  - "When to Choose Fast-Track Inspection Repairs"
  - "Multi-Family vs. Commercial Property Inspections"

---

## 10. Conversion Optimization

### Primary Conversion Path
1. Visitor lands on homepage
2. Sees urgent messaging + service capability
3. Clicks "Get Emergency Quote"
4. Fills out form (minimal friction)
5. Receives confirmation
6. Gets contacted within 2 hours

### Trust Elements Throughout Funnel
- Licensed contractor badges
- Insurance certificates
- Certifications (General Contractor, various trades)
- BBB rating
- Client testimonials
- Project portfolio
- Years in business

### Micro-Conversions
- Phone number clicks (trackable)
- Email contact form submissions
- Resource download sign-ups
- Case study engagement

---

## 11. Competitive Differentiation

### What Makes JW ProBuild Different
1. **Specialized**: Focus exclusively on lender-mandated repairs
2. **Comprehensive**: Single contractor for entire scope
3. **Experienced**: Deep knowledge of multi-family properties
4. **Fast**: Understanding of lender deadlines
5. **Professional**: Clear process, communication, documentation
6. **Lender Partnerships**: Works with banks, not just property owners

### Avoid Competitive Clichés
- ❌ "Best in the business"
- ❌ "Trusted by thousands"
- ❌ "Award-winning service"
- ❌ Generic construction photos

### Instead, Use Specifics
- ✅ "Licensed to perform all trade work on multi-family properties"
- ✅ "Average completion time: 60% faster than lender deadlines"
- ✅ "Partnered with 15+ lending institutions"
- ✅ Real project photos with explanations

---

## 12. Color Implementation Guide

### Usage Hierarchy

#### Yellow (#FFD700) - Primary Brand
- Primary buttons and CTAs (large, bold)
- Navigation highlight on active page
- Section accents and highlights
- Logo backgrounds
- Hover states on interactive elements
- Important call-outs and attention-grabbing elements

#### Black - Structure & Authority
- Headers and primary text
- Navigation items
- Footer backgrounds (with yellow accents)
- Section dividers
- Body text (primary reading color)

#### Red (#EF4444) - Urgency
- Timeline critical indicators (sparingly used)
- Urgent deadline warnings
- Critical status alerts

#### Green (#10B981) - Success/Completion
- Success messages
- Completion indicators
- Progress bars (completed portion)
- "In compliance" badges

### Background Usage
- **Hero Sections**: Dark black with yellow accents, warm white (#FFFEF7) overlay
- **Content Sections**: Warm white (#FFFEF7) alternating with pure white (#FFFFFF) for readability
- **Alternating Sections**: Light gray (#F9FAFB) for visual separation
- **Testimonials**: White cards on warm white background
- **CTA Sections**: Yellow backgrounds with black text for high contrast

### Yellow/Black Aesthetic
- High contrast, bold, professional
- Yellow commands attention for CTAs
- Black conveys authority and trust
- White provides breathing room
- Modern, industrial feel perfect for construction/property management

### Visual References & Inspiration
The yellow/black palette creates:
- **Bold professionalism** (think Caterpillar, construction equipment brands)
- **Energy and urgency** (yellow = attention, black = serious)
- **Trust and authority** (black = established, dependable)
- **Stand out from competition** (most use blue; yellow is unique)

**Visual Examples to Avoid**:
- Too much yellow = overwhelming, cheap feeling
- Too much black = depressing, construction cliché
- Balance: Use yellow for action, black for text, white for breathing room

**Recommended Balance**:
- 30% Yellow (CTAs, accents, logo usage)
- 40% Black/Charcoal (text, headers, navigation)
- 30% White/Warm White (backgrounds, content cards, space)

### Typography Treatments with Yellow/Black
- **Headlines**: Black text on white/yellow backgrounds for maximum contrast
- **Yellow Headlines**: Use sparingly on dark backgrounds (hero sections)
- **CTAs**: Yellow background with black text (high contrast, strong action)
- **Borders**: Subtle gray for structure, yellow for important sections
- **Accents**: Yellow underlines, yellow bullets, yellow highlights on key text

---

## 13. Mobile Strategy

### Mobile-First Approach
- Responsive breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
  - Large Desktop: > 1440px

### Mobile-Specific Features
- Click-to-call phone number
- Sticky CTA button (floating)
- Simplified navigation (hamburger menu)
- Touch-optimized forms
- Optimized images (WebP format)

### Mobile Content Priority
1. Phone number (very prominent)
2. Emergency quote CTA
3. Service capability overview
4. Trust elements (licenses)
5. Process simplicity message

---

## 14. Launch Checklist

### Pre-Launch
- [ ] SSL certificate configured
- [ ] All images optimized (WebP, lazy loading)
- [ ] Forms tested with actual submissions
- [ ] Analytics configured and tested
- [ ] Mobile responsiveness verified on multiple devices
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility audit completed
- [ ] SEO meta tags and schema markup
- [ ] Loading speed optimization
- [ ] Security headers configured

### Content Requirements
- [ ] Homepage copy finalized
- [ ] Service descriptions complete
- [ ] Case studies (minimum 3)
- [ ] Team bios and credentials
- [ ] Licensing documentation
- [ ] Testimonials gathered
- [ ] Project photos curated
- [ ] Contact information verified

### Post-Launch
- [ ] Monitor analytics for traffic patterns
- [ ] Track form submissions and conversion rates
- [ ] Set up Google Search Console
- [ ] Implement retargeting pixel (if using ads)
- [ ] Monitor feedback and iterate

---

## 15. Success Metrics

### Key Performance Indicators
1. **Lead Generation**: Form submissions + phone calls
2. **Conversion Rate**: Visitors to leads (target: 3-5%)
3. **Engagement**: Time on site, pages per session
4. **Traffic Sources**: Organic vs. paid vs. direct
5. **Lender Inquiries**: Partnership requests
6. **Completion Rate**: Quote requests that become projects

### Quarterly Goals
- Month 1-3: 50 qualified leads
- Month 4-6: 100 qualified leads, 3 lender partnerships
- Month 7-9: 150 qualified leads, 10 lender partnerships
- Month 10-12: 200 qualified leads, 20 lender partnerships

---

## 16. Additional Recommendations

### Referral Program
- Incentivize past property owners to refer others
- "Refer a property manager, get X% off your next service"
- Lender referral program for institutional partners

### Local SEO
- Google Business Profile optimization
- Local directory listings
- Location-specific landing pages
- Review generation strategy

### Content Marketing
- YouTube channel: "Understanding lender inspections" video series
- LinkedIn presence: Thought leadership in multi-family repairs
- Email newsletter: Educational content + case studies

### Partnerships
- Property management software integrations
- Lender portal partnerships
- Real estate attorney referrals
- Commercial real estate broker relationships

---

## 17. Visual Identity Elements

### Logo Treatment
- Should include "JW ProBuild" prominently
- Optional tagline: "Bank-Mandated Repairs • On Time • Complete"
- Versions needed:
  - Full color (blue + orange)
  - Blue only
  - White (for dark backgrounds)
  - Icon only (for favicon)

### Photography Style
- Professional, well-lit property photos
- Before/after comparisons prominently featured
- Mix of exteriors, common areas, mechanical rooms
- Avoid staged/stock-looking images
- Show real work, real properties, real results

### Icon System
- Simple, line-style icons for services
- Consistent stroke weight (2px)
- Rounded corners for modern feel
- Color: Use blue for default, orange for emphasis

---

## 18. Technical Features

### Must-Have Features
1. **Fast Loading**: CDN hosting, optimized assets
2. **Contact Forms**: Spam protection, email notifications
3. **Mobile Optimization**: Responsive design throughout
4. **SEO**: Proper meta tags, schema markup
5. **Analytics**: Track user behavior and conversions
6. **AI Chat Integration**: Smart chat widget with appointment booking
7. **Landing Page**: Dedicated lead capture with form

### AI Chat Specifications

**Platform Options**:
1. **Custom OpenAI Integration** (Recommended)
   - GPT-4 API for intelligent responses
   - Custom training on lender inspection processes
   - Appointment booking via API integration
   - Lead capture and qualification

2. **Third-Party Solutions**:
   - Intercom (powerful but expensive)
   - Drift (good for B2B)
   - Tidio (affordable, AI-powered)
   - Custom solution using OpenAI

**AI Chat Capabilities**:
- Answer questions about:
  - What repairs JW ProBuild handles
  - Typical timeline for repairs
  - Pricing ballpark estimates
  - Lender inspection process
  - Qualifications and licensing
  - How to get started

- Qualify leads by asking:
  - Property type
  - Timeline urgency
  - Inspection deadline
  - Specific repair needs

- Book appointments:
  - Calendar integration (Calendly, Cal.com)
  - Send to client's calendar system
  - Confirmations via email/SMS

**Chat Behavior**:
- Auto-triggers: 30s engagement, form abandon, scroll bottom
- Dismissible but persistent
- Mobile: Always visible, sticky
- Personality: Professional, urgent but calm, helpful

**Implementation Notes**:
- Pre-train on lender inspection FAQ content
- Include JW ProBuild service specifics
- Fallback to human handoff for complex questions
- Track chat interactions in analytics
- Capture leads from chat (email, phone)

### Nice-to-Have Features
1. **Quote Calculator**: Rough estimate tool
2. **Client Portal**: For existing clients to track projects
3. **Resource Downloads**: PDFs, checklists
4. **SMS Notifications**: For urgent responses
5. **Video Integration**: Embedded explainer videos

---

## 19. AI Chat Implementation Details

### Chat Widget Design
- **Icon**: Construction-themed or JW ProBuild logo
- **Colors**: Yellow background (#FFD700) with black text/icons
- **Position**: Fixed bottom-right corner, never obscures main content
- **Animations**: Smooth entrance, bounce on new messages
- **Mobile**: Full-screen overlay on mobile, compact on desktop

### Chat Conversation Flow

**Initial Prompt** (Auto-sends when chat opens):
```
Hi! I'm here to help with your bank-mandated inspection repair questions. 
Are you dealing with a property that needs inspection repairs?

[Options: Yes, I need repairs / Just exploring / I'm a lender]
```

**Main Capabilities**:
1. **Service Information**
   - "What repairs do you handle?"
   - "How long do repairs usually take?"
   - "Are you licensed for multi-family properties?"

2. **Qualification**
   - Captures property type, timeline, repair needs
   - Routes to appropriate next step

3. **Booking**
   - Shows available appointment times
   - Syncs with JW ProBuild calendar
   - Sends confirmation via email/SMS

4. **FAQ Bot**
   - Answers common lender inspection questions
   - Provides educational content
   - Links to relevant resources

### AI Training Content
Pre-load the chat with:
- JW ProBuild service descriptions
- Typical timelines for different repair types
- Pricing ranges (general ballparks)
- Lender inspection process explanation
- How to prepare for an inspection
- Common violations and what they mean

### Appointment Booking Integration
**Recommended Services**:
- Calendly (easy integration, free tier available)
- Cal.com (open source, self-hosted option)
- Acuity Scheduling (professional features)
- Custom API integration with client's system

**Booking Flow**:
1. User requests appointment
2. AI confirms details (property type, urgency, repair needs)
3. Shows available time slots
4. User selects time
5. Calendly/calendar widget embedded
6. Booking confirmed
7. Email reminder sent

---

## Summary

This website is designed to position JW ProBuild as the go-to contractor for bank-mandated multi-family property inspection repairs. By combining urgency messaging with comprehensive service capability and dual audience targeting (property owners + lenders), the site creates a clear value proposition in a niche market.

The non-generic approach is achieved through:
- Specific language about lender inspections (not generic construction)
- Focus on foreclosure prevention (high-stakes messaging)
- Dual audience strategy (unique to industry)
- Timeline urgency without panic
- One-stop capability differentiation

The design balances professionalism with urgency, using JW ProBuild's yellow and black brand colors to create bold, high-contrast visuals that command attention while maintaining trust. The yellow/black palette creates a modern, industrial aesthetic perfect for construction and property management.

**Key Features**:
- Landing page with split-screen lead capture form
- AI chat for instant engagement and appointment booking
- Yellow/black/white color scheme matching logo
- Focus on bank-mandated repairs (niche expertise)
- Dual audience strategy (property owners + lenders)

**Next Steps**: 
1. Build AI chat component and integrate OpenAI API
2. Set up appointment booking system (Calendly or Cal.com)
3. Design landing page with sticky form
4. Develop homepage wireframe with yellow/black theme
5. Create component library and design system
6. Build key pages and iterate based on feedback
