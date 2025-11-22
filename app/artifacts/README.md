# Meds.com/BlueChew Interview Artifacts

This directory contains interactive React artifacts built specifically for demonstrating product expansion capabilities to Meds.com/BlueChew during interviews.

## Overview

These artifacts showcase how BlueChew could expand from a single-disease platform (Sexual Health / ED) to a multi-disease platform including Weight Management with escalating dose protocols.

## Artifacts

### 1. Multi-Disease Selection Flow
**URL:** `/artifacts/bluechew-multi-disease-selection`

**Purpose:** Demonstrates product selection UX with disease state tabs and medication carousels

**Features:**
- Disease state selector: "Sexual Health" (existing) | "Weight Management" (proposed)
- Sexual Health medications: SIL, TAD, MAX (matching BlueChew's current offerings)
- Weight Management medications: SEMA (Compounded Semaglutide), TIRZ (Compounded Tirzepatide)
- Escalating dose protocol badges showing starting dosages
- Pricing display per month
- Interactive drawer navigation matching BlueChew's existing UI
- Fully responsive design

**Design System:**
- Matches BlueChew's actual UI from their production site
- Dark header with BLUECHEW branding
- Product cards with grayscale images and blue accent dots
- Clean, minimalist aesthetic
- Mobile-friendly hamburger menu and drawer

**Key Talking Points:**
- "I went through your actual checkout flow and noticed you're focused on 6 ED medication variations"
- "Here's what it could look like to add weight management as a second disease state"
- "The escalating dose protocol is something I built at Hedfirst—here's how it translates to your UX"

---

### 2. Multi-Subscription Patient Dashboard
**URL:** `/artifacts/bluechew-patient-dashboard`

**Purpose:** Demonstrates patient dashboard managing multiple concurrent subscriptions across different disease states

**Features:**
- Three subscription cards showing parallel journeys:
  1. **Sexual Health - Tadalafil:** Currently in Medical Review stage
  2. **Weight Management - Semaglutide:** Medical review approved, requires video consultation
  3. **Weight Management - Tirzepatide:** Phase 2 of escalating protocol, medication in transit

**Timeline Stages:**
- Choose Plan → Medical Profile → Checkout → Verification → Medical Review → Delivery
- Conditional steps for video consultations (required for weight management)
- Visual progress indicators with green checkmarks (completed), blue pulse (current), gray (upcoming)

**Protocol Information:**
- Phase progress bar (e.g., "Phase 2 of 4")
- Current dosage display
- Next dosage and advancement date
- Auto-advancing protocol indicator

**Actions:**
- Message Prescriber
- Schedule Video Call
- Track Shipment
- View Protocol Details
- Update Plan

**Design System:**
- Matches BlueChew's timeline visualization from their "MY PLANS" page
- Status badges with contextual colors (green/blue/orange)
- Banner messages for subscription status
- Clean card-based layout

**Key Talking Points:**
- "Right now your patients have one subscription at a time. Here's what it looks like to manage multiple concurrent subscriptions"
- "Each subscription has conditional next steps based on medical review outcomes"
- "Weight management subscriptions show protocol progression—patients can see exactly where they are in their treatment plan"
- "This is basically the order hierarchy system I built at Hedfirst, adapted to BlueChew's visual style"

---

## Technical Implementation

**Stack:**
- Next.js 15.2.4 (App Router)
- React 18 with TypeScript
- Tailwind CSS for styling
- Client-side interactive components (`'use client'`)

**Responsive Design:**
- Mobile-first approach
- Hamburger menu for mobile navigation
- Drawer navigation matching BlueChew's existing pattern
- Grid layouts adapt to screen size

**State Management:**
- React useState for UI interactions
- Drawer open/close state
- Disease state tab switching
- Timeline progress visualization

---

## How to Use During Interview

### Before Interview:
1. Test both pages locally at:
   - `http://localhost:3000/artifacts/bluechew-multi-disease-selection`
   - `http://localhost:3000/artifacts/bluechew-patient-dashboard`
2. Take screenshots if needed for presentation
3. Prepare talking points connecting these artifacts to your Hedfirst work

### During Interview:
- **Screen share option:** Pull up these pages and walk through the UX
- **Portfolio reference:** Send URLs after interview as follow-up
- **Conversation starter:** "I actually built interactive prototypes showing how BlueChew could expand into weight management—would you like to see them?"

### Key Messaging:
1. **Product Vision:** "I've been competing with BlueChew for 3 years and know your model well. Here's the next evolution."
2. **Technical Execution:** "I can prototype interactive UIs that match existing design systems—I did this same rapid prototyping at Hedfirst"
3. **Domain Expertise:** "These escalating dose protocols aren't theoretical—I built this exact system with auto-advancement, phase tracking, and billing cycle management"
4. **User Experience:** "The key is maintaining simplicity for patients while supporting operational complexity for providers"

---

## Related Project Mapping

These artifacts demonstrate projects from your experience:

**From Hedfirst/Teligant:**
- Escalating Dose Protocol System (product_form.tsx, protocal_subscription.tsx reference)
- Order Hierarchy System (multi-subscription management)
- Disease State Classification (499 medications across 39 disease states → 6 medications + weight management)
- PayTheory Billing Integration (flexible subscription architecture, phase-based billing)

**From Rugiet Health:**
- BlueChew competitor analysis (pricing, UX patterns, subscription model)
- Men's health telehealth domain expertise

**Direct Competitor Context:**
- "At Rugiet, we competed directly with BlueChew in men's sexual health"
- "I analyzed your pricing ($20-90/month), renewal flows, and upsell patterns"
- "When I built the multi-disease platform at Hedfirst, I incorporated learnings from what worked in that competitive landscape"

---

## Files

```
/app/artifacts/
├── README.md (this file)
├── bluechew-multi-disease-selection/
│   └── page.tsx (Disease state selector + medication carousel)
└── bluechew-patient-dashboard/
    └── page.tsx (Multi-subscription patient journey dashboard)
```

---

## Next Steps

If you want to enhance these artifacts:

1. **Add animation:** Framer Motion for carousel transitions
2. **Add data persistence:** LocalStorage to save selected medications
3. **Add detailed protocol view:** Modal showing full 4-phase protocol timeline
4. **Add messaging interface:** Mock provider messaging flow
5. **Add admin view:** Store admin dashboard for managing patient protocols
6. **Deploy to production:** Build and deploy to hirethiswalker.com for live demo

---

## Interview Prep Checklist

- [ ] Test both artifacts locally and verify all interactions work
- [ ] Review escalating dose protocol documentation (/.claude/escalating_dose_protocal/)
- [ ] Review Meds.com interview project mapping (/.claude/meds-interview-project-mapping.md)
- [ ] Prepare STAR-format story for escalating dose protocol implementation
- [ ] Practice explaining UX decisions (why tabs vs. dropdown, why protocol badges, etc.)
- [ ] Prepare questions about BlueChew's current tech stack and expansion plans
- [ ] Screenshot both artifacts in case of screen share issues
- [ ] Have URLs ready to send as follow-up after interview

---

**Built by Austin Walker | October 16, 2025**
**For Meds.com/BlueChew Senior Product Manager Interview**
