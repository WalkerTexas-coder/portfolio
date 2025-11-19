# Hedfirst - Product Features & Launch

## Platform Launch Overview

**Launch Date**: August 4th, 2025
**Timeline**: Concept to production in 9 months (September 2024 - August 2025)
**Scope**: 150+ features across patient experience, doctor workflows, admin dashboards, pharmacy integration, lab testing, AI assessment, and membership management

## Launch Metrics

**Product Catalog**:
- 499 medications across 20+ disease states
- 39 disease state consultation services
- 6 lab testing panels ($99-$145)
- AI Care Membership ($499/year)

**Operational Capabilities**:
- Multi-state prescription fulfillment (48 states)
- Integration with 4+ pharmacy partners
- HIPAA-compliant AI diagnostics (92% accuracy vs 74-76% physician baseline)
- Real-time lab result processing
- Automated recurring billing

**Beta Launch**:
- 25 initial patients
- $499/year membership model
- $750 expected patient lifetime value

## Major Product Features

### 1. Pharmacy Fulfillment Workflow System

**Problem**: Doctors manually entering prescriptions across 4 pharmacy partners (Crafted RX, Greenwich/Texas Performance Meds, Outreach RX, patient local pharmacy) with no systematic guidance. Risk of routing errors, duplicate sends, missed prescriptions, and no audit trail.

**Solution**: Created pharmacy-by-pharmacy queue workflow positioned above DoseSpot iframe serving as manual workflow bridge.

**Features**:
- Systematic pharmacy selection with visual queue
- "Mark Sent" status management with auto-advancement
- Manual override capability for clinical judgment
- Complete audit trail for customer service tracking
- Integration with Clinical Review Tab

**Implementation**:
- 12 Jira tickets across 2 sprint cycles
- Phase 1: Routing system foundation
- Phase 2: Clinical review integration
- Timeline: 2-3 weeks from concept to production

**Results**:
- Eliminated prescription routing errors across pharmacy network
- Zero routing mistakes across 200+ monthly prescriptions
- Complete audit trail enabled customer service excellence
- Foundation for future clinical workflow enhancements

**Artifacts**:
- Interactive React prototype demonstrating complete workflow
- 12 implementation tickets with acceptance criteria
- Pharmacy partner coordination documentation

---

### 2. Disease State Classification & Product Catalog

**Scope**: Classified 499 medications across 20+ therapeutic disease state categories

**Disease State Categories**:
- Peptide Therapy
- Weight Loss
- Hair Growth
- Sexual Wellness
- Mental Health
- Migraine
- Sleep/Insomnia
- Thyroid Function
- Pain Management
- Cardiovascular
- Diabetes
- Dermatology
- Hormone Balance
- (+7 additional categories)

**Marketing Deliverables**:
- Badges for all 39 disease states
- Subtitles for patient-facing navigation
- 2-sentence descriptions for each category
- Asynchronous consultation prefixes

**Technical Implementation**:
- NestJS PostgreSQL migration updating product disease states from CSV
- Comprehensive error handling and logging
- Data validation ensuring catalog integrity

**Business Impact**:
- Enabled disease state-based product organization
- Improved patient navigation and discovery
- Created foundation for targeted treatment protocols
- Supported 39 disease state consultation services

---

### 3. Clinical Review Tab Transformation

**Strategic Shift**: Transformed doctor workflow from subscription-focused administrative interface to clinical-focused comprehensive patient review system.

**Unified Clinical Interface**:
- **Medications**: Complete prescription history and approval workflow
- **Documents**: Patient-uploaded files and medical records
- **AI Investigations**: AI-generated assessments and diagnostic recommendations
- **Lab Results**: Choose Health integration with 7-year retention
- **Pharmacy Fulfillment**: Systematic prescription routing (preserved from previous workflow)

**Design Principle**: All clinical context in single interface eliminating tab-switching and cognitive load

**Business Impact**:
- Aligned product with clinical workflow expectations
- Improved provider experience and efficiency
- Positioned platform for comprehensive care delivery
- Preserved all pharmacy fulfillment capabilities while repositioning as clinical tools

---

### 4. Choose Health Lab Testing Integration

**Business Objective**: Expand Hedfirst from migraine-focused platform to comprehensive health monitoring and diagnostic capabilities.

**API Integration**:
- 7 REST endpoints for panel selection, kit ordering, registration, tracking
- Webhook system for real-time lab results delivery
- HIPAA-compliant data storage with 7-year retention requirement

**Patient Workflow**:
1. Kit ordering through patient portal Labs tab
2. Registration with personal and provider information
3. Sample collection with at-home kit
4. Shipment tracking integration
5. Results delivery via webhook
6. Provider review in Clinical Review Tab

**Admin Functionality**:
- Choose Health panel selection in Store Admin
- Patient lab management and tracking
- Results integration with patient profiles
- Provider notification system

**Product Catalog**:
- **Comprehensive Metabolic Health Panel**: $99
- **Inflammation & Immune Function Panel**: $125
- **Hormone Balance Panel**: $145
- (+3 additional panels)

**Implementation Scope**:
- 13 Jira tickets across patient portal, store admin, backend, results viewing
- Webhook processing for automated result delivery
- Data schemas supporting 7-year medical record retention

**Strategic Impact**:
- Created new revenue stream (pricing $99-$145 per panel)
- Transformed positioning from single-condition treatment to comprehensive health monitoring
- Enabled AI Medical Assessment to incorporate objective diagnostic data vs self-reported symptoms only
- Positioned platform for expansion into preventive care

---

### 5. Provider Appointment System (Epic MT-1602)

**Business Requirement**: Enable patients to purchase and schedule provider appointments, support membership benefits (2 free appointments annually), integrate HIPAA-compliant video conferencing.

**Appointment Token System**:
- Purchased appointments create tokens requiring scheduling
- Tokens maintain lifecycle status: Needs Scheduling, Scheduled, Completed, Cancelled
- Appointment tracking through order hierarchy (#HF-XXXX-A-Y)

**Zoom API Integration**:
- HIPAA-compliant video conferencing
- Automated meeting creation
- Calendar invitation delivery
- Provider-patient connection management

**Complete Patient Flow**:
1. Empty state with purchase prompt
2. Purchase modal for appointment selection
3. Appointment token creation
4. Scheduling calendar interface
5. Time selection with provider availability
6. Details entry (reason for visit, phone/video preference)
7. Confirmation with automated calendar invite

**Implementation Scope - 24 Jira Tickets**:

**Backend (10 tickets)**:
- Zoom API setup and configuration
- Provider scheduler mapping
- Appointment token creation
- Appointment lifecycle management
- Meeting generation and invite delivery

**Frontend (9 tickets)**:
- Patient Admin appointment interface
- Doctor Admin appointment view
- Store Admin appointment management
- Cross-platform UI consistency

**Tab Indicators (4 tickets)**:
- Notification badges for appointment updates
- Real-time status synchronization
- Admin alert system

**Testing (1 ticket)**:
- Zoom integration validation
- Scheduling flow end-to-end testing
- Appointment lifecycle verification

**Order Integration**:
- Appointments use standalone A category (#HF-XXXX-A-Y)
- Supports both free membership appointments and paid follow-ups
- Order numbers assigned at token creation enabling complete customer service tracking

**Results**:
- Complete appointment system enabling membership benefit fulfillment
- Automated token creation when membership purchased (2 per membership)
- HIPAA-compliant video conferencing via Zoom
- Cross-platform management (Patient Admin self-service, Doctor Admin provider view, Store Admin concierge support)

---

### 6. AI Care Membership & PayTheory Billing Integration

**Product Details**:
- **Price**: $499/year (beta: $29.99 for 25 spots, regular: $699)
- **Value Proposition**: $1,000+ in included benefits

**Included Benefits**:
- 2 free provider appointments ($90-180 value)
- Free Core Metabolic Lab Kit ($85 value)
- Unlimited patient concierge messaging ($200+ monthly value)
- AI Medical Assessment ($500 value)
- Waived prescription fees ($40+ per order)

**PayTheory Integration**:
- Recurring billing processor supporting flexible cycles (30-365 days)
- Subscription architecture with cycle configuration (0=one-time, 1=2 charges, 23=24 charges max)
- Future charge pre-generation pattern (F-1, F-2, F-3)
- Subscription ID format: #[Order-ID]-S-1

**Database Design**:
- Subscription table with billing cycle column
- Supply column showing dashes for membership products (non-physical)
- Separation of billing cycle duration from supply duration

**Membership Benefits System**:
- Configuration interface for unlimited vs counted benefits
- Error handling for unlimited benefits + cart functionality
- Patient dashboard display of active benefits and usage tracking
- Automatic appointment token creation (2 per membership)

**Payment Timing Logic**:
- Memberships: Charged at checkout (only product type with upfront payment)
- Medications: Charged only after provider approval
- Consultations: Bundled automatically with first medication purchase

**Beta Launch Strategy**:
- August 2025: 25 spots at $29.99 (94% discount)
- Post-beta: $499 annual pricing
- Regular price: $699 annual (to create value perception)

---

### 7. DoseSpot E-Prescribing & SureScripts Integration

**Purpose**: HIPAA-compliant electronic prescribing for non-controlled substances across multiple states.

**Integration Scope**:
- DoseSpot embedded iframe for prescription creation
- SureScripts network connectivity for pharmacy transmission
- Provider access management
- Medication database integration (499+ protocols)

**Product Variant Enhancements**:
- **Pharmacy Notes field**: Populates pharmacy notes in DoseSpot (compounding instructions, special handling)
- **Patient Directions field**: Populates patient directions in DoseSpot (administration guidance, warnings)
- Direct alignment with DoseSpot prescription workflow

**Prescription Workflow**:
1. Patient purchases medication (creates order but no charge)
2. Initial consultation completed (bundled with first purchase)
3. Provider reviews patient in Clinical Review Tab
4. Provider approves prescription
5. Payment processing triggers automatically
6. Provider creates prescription in DoseSpot iframe
7. DoseSpot transmits via SureScripts to partner pharmacy
8. Pharmacy fulfills and ships via ShipStation

**Medication Database**:
- 499+ medication protocols with dosage variants
- Form factors: injections, oral medications, topical compounds, troches
- Compounding specifications with ingredient details

---

### 8. Universal AI Medical Assessment System

**Clinical Framework**: 13-section template serving as operational backbone for all AI Medical Assessments

**Assessment Sections**:
1. **Patient Information**: Demographics, contact, insurance
2. **Visit Summary**: Chief complaint, visit context
3. **Medical History**: Conditions, medications, allergies
4. **Current Symptoms**: Detailed symptom assessment
5. **Laboratory Studies**: Lab results integration
6. **Diagnostic Imaging**: Imaging reports (future enhancement)
7. **AI Pattern Recognition & Analysis**: Claude 4 Sonnet diagnostic assistance
8. **Comprehensive Diagnostic Assessment**: Multi-system evaluation
9. **Risk Stratification & Prevention**: Future risk identification
10. **Comprehensive Treatment Plan**: Multi-phase approach
11. **Monitoring & Follow-Up Protocol**: Ongoing care plan
12. **Patient Education & Empowerment**: Educational resources
13. **Provider Documentation & Approval**: Provider sign-off

**AI Integration**:
- **Model**: Claude 4 Sonnet via AWS Bedrock
- **Compliance**: HIPAA Business Associate Agreement (BAA)
- **Data Retention**: Zero retention policy (messages not stored by Anthropic)
- **Use Cases**: Pattern recognition, diagnostic assistance, treatment planning, clinical brief generation

**Store Admin AI Chat**:
- Integrated Claude 4 Sonnet into Store Admin interface
- Full patient profile context (medical history, lab results, medications, documents)
- Named conversation sessions with persistent chat history
- Model selection: Claude Sonnet 4 / Opus 4
- Configurable parameters: Max tokens (8000), Temperature (1), Thinking budget (2000)

**Assessment Workflow**:
1. Store admin creates assessment document from patient profile
2. AI generates initial clinical analysis
3. Version control system (v1, v2, v3) for iterations
4. Status management: Waiting for approval, Approved
5. Provider review in Doctor Admin
6. Provider approval and sign-off
7. Patient access to finalized assessment

**File Upload System**:
- Patient document upload: PDF/DOC/DOCX up to 10MB
- Uploaded Files tab in Store Admin
- AI chat can analyze uploaded documents with patient context

**Diagnostic Accuracy**:
- Platform achieves **92% diagnostic accuracy** with AI enhancement
- Stanford Medicine benchmark: **74-76%** for physicians alone
- 18-22% improvement over physician-only diagnosis

**Multi-Phase Treatment Planning**:
- **Immediate (0-30 days)**: Acute symptom management
- **Primary (1-6 months)**: Core treatment protocols
- **Long-term (6 months - 2 years)**: Preventive care and optimization

**Differential Diagnosis System**:
- Ranking with probability percentages
- Confidence levels for each diagnosis
- Evidence supporting each differential

---

### 9. LegitScript Healthcare Certification

**Purpose**: Third-party healthcare regulatory compliance certification required for operating telehealth across multiple states.

**Certification Achievement**: Successfully achieved LegitScript certification for hedfirst.com as certified pharmacy and telemedicine provider.

**Compliance Scope**:
- Multi-state regulatory compliance documentation
- Healthcare industry standards adherence
- Ongoing monitoring requirements
- State-by-state prescription regulations
- Pharmacy partner coordination

**Compliance Framework Built**:
- HIPAA data processing and storage architecture
- Medical record retention policies (7-year requirement)
- Prescription fulfillment audit trails
- Provider credentialing verification
- Patient consent workflows
- Cross-tenant data transfer protocols

**Certification Process**:
- Led certification with minimal executive oversight
- Managed all documentation requirements
- Coordinated with LegitScript compliance team
- Responded to certification questions and audits
- Achieved successful approval on first submission

---

### 10. ShipStation Fulfillment Integration

**Purpose**: Order management and shipping coordination for medication delivery from pharmacy partners to patients.

**Integration Approach**: Custom Store connection with web endpoint for pull-based order import and shipment notifications.

**Data Exchange**:
- **GET calls**: ShipStation pulls order data from Teligant endpoint
- **POST calls**: ShipStation sends shipment notifications (tracking numbers, carrier info)

**Status Mappings** (case-sensitive):
- Unpaid
- Paid
- Shipped
- Cancelled
- On-Hold

**Multi-Pharmacy Architecture**:
- Product type filtering service (medications vs labs vs consultations)
- Multi-pharmacy order filtering (route to correct fulfillment partner)
- XML export system for separate pharmacy endpoints
- Shipment notification handling with patient email triggers

**Configuration System Designed**:
- Store Admin ShipStation tab proposal
- API credentials management
- Pharmacy-to-store mappings
- Streamlined setup for new pharmacy partners

---

### 11. Product Management System & Variant Architecture

**Product Types** (5 categories):
1. **Physical Products**: Medications, compounds, supplies
2. **Services**: Initial consultations, follow-up consultations
3. **Bundles**: Medication + consultation + lab kit combinations
4. **Memberships**: AI Care Membership with recurring benefits
5. **Lab Tests**: Choose Health panels

**Product Configuration**:
- Name, subtitle, badge
- Auto-generated slug for URLs
- Marketing description (patient-facing)
- Disease state assignment
- Treatment type/use classification
- Prescription flag (controlled vs non-controlled)
- Up to 7 product images

**Ingredient Management for Compounding**:
- Unlimited ingredients per product
- All variants inherit all ingredients (cannot create partial variants)
- Ingredient details: name, dosage, unit of measure
- Compounding instructions in pharmacy notes

**Variant System**:
- Minimum one variant per product required
- Store visibility control (show/hide from patient view)
- Provider dropdown access for hidden variants (off-label prescribing)
- Pharmacy notes per variant (compounding specifications)
- Dispensing notes per variant (patient administration instructions)
- Pricing per variant with subscription cycle support

**Store Admin Products Interface**:
- Organized by product type:
  - Prescription medications
  - Non-prescription medications
  - Consultations
  - Labs
  - Memberships
  - Appointments
- Disease state sorting for physical products
- Leveraged subscription table design patterns for filtering

---

### 12. Consultation Services & Disease State Access Model

**Initial Consultation Services**: Disease state-specific asynchronous consultations automatically bundled with first medication purchase in each category.

**Access Model Logic**:
- Patient purchases first medication in disease state (e.g., Weight Loss)
- Consultation automatically added to order at checkout
- Payment approval grants **access to ALL medications** in that disease state for one year
- Patient can order any Weight Loss medication for next 12 months without additional consultation

**39 Disease State Consultations**:
- Complete portfolio with marketing descriptions
- Asynchronous consultation prefix: "An asynchronous consultation with our licensed medical providers regarding [disease state]..."
- Pricing bundled with first medication purchase (no separate consultation fee)

**Follow-Up Consultations**:
- 30-minute provider appointments exclusive to members
- $99 per appointment
- Phone or video based on state requirements
- Scheduled through Appointment System

**Lab Review Sessions**:
- 15-minute review sessions included with lab kit purchases
- Patient concierge or medical provider availability
- Results explanation and treatment recommendations

---

### 13. Multi-Party Encrypted Internal Messaging System

**Architecture**: Multi-party chat rooms containing patient, all store admins (customer care team), and assigned provider (if selected).

**Patient-Facing Labels**:
- **"Customer care messages"**: For store admin chats (patient concierge)
- **"Dr. messages"**: For provider chats (assigned medical provider)

**Store Admin Functionality**:
- Announce entry notification: "Patient concierge has entered the chat"
- Patient onboarding specialists
- Support for medication questions, billing issues, appointment scheduling
- Can escalate to medical provider when clinical questions arise

**Integration Touchpoints**:
- Patient Dashboard: Two-way messaging with doctors and customer care
- Doctor Admin: Patient profile Messages tab
- Store Admin: Patient profile Messages tab + global Messages navigation

**Message Threading**:
- Persistent chat history per patient
- Real-time delivery
- Read receipts
- File attachment support (future enhancement)

---

### 14. Patient Dashboard Redesign

**Strategic Goal**: Consolidate existing services into unified patient interface improving access to AI Medical Assessment, orders, lab results, appointments, and messaging.

**Dashboard Sections**:

**AI Medical Assessment Member Status**:
- Active membership indicator
- Benefits remaining (2 appointments, lab kit usage, etc.)
- Membership renewal date
- Upgrade prompts for non-members

**Order History**:
- Status tracking: In progress, Processed, Canceled
- Order details with itemized breakdown
- Reorder functionality for recurring medications
- Shipment tracking integration

**AI Medical Assessment Documents**:
- Completed assessments with download capability
- Assessment history and version tracking
- Provider approval status
- Direct link to book follow-up if recommended

**Labs Section**:
- Test tracking and scheduling
- Results viewing: Complete Blood Panel, Hormone Panel, Vitamin D Level
- Historical lab comparison
- Provider review status

**Two-Way Messaging**:
- Customer care messages (patient concierge)
- Dr. messages (medical provider)
- Message history and threading
- Real-time notifications

**Appointments Management**:
- Upcoming appointments with calendar integration
- Appointment history
- Rescheduling capability
- Video conference link access

**Design Reference**: "ala. Function Health's" modern healthcare dashboard aesthetics

---

### 15. Store Admin Portal Navigation & Patient Profiles

**Navigation Structure**:
- **Dashboard**: Overview metrics, recent activity
- **Messages**: Global messaging inbox
- **Products**: Product catalog management
- **Orders and Services**:
  - All orders
  - Consultations
  - Subscriptions
  - One-time purchases
- **Store Settings**: Configuration and customization
- **Medical Care (Upselling)**: Revenue optimization tools
- **Patients**: Patient directory
- **Users**:
  - Admins
  - Doctors

**Patient Profile Tabs** (13 tabs):
1. **Patient Overview**: Demographics, contact, insurance
2. **Consultations**: Disease state access, consultation history
3. **Subscriptions**: Recurring medications, cycle management
4. **Hedfirst AI**: 6 sub-tabs detailed below
5. **Lab Tests**: Choose Health panels, results, history
6. **Orders**: Complete order history with filtering
7. **Payments**: Payment methods, billing information
8. **Payment History**: Transaction log, invoices
9. **Questionnaires**: Intake forms, medical history
10. **Messages**: Internal messaging with patient
11. **Appointments**: Scheduling, appointment history
12. **History**: Activity log, audit trail
13. **Notes**: Internal staff notes (not visible to patient)

**Hedfirst AI Tab (6 sub-tabs)**:
1. **Chat**: Persistent AI chat with patient context
2. **Uploaded Files**: Patient documents (PDF/DOC/DOCX)
3. **AI Assessments**: Generated assessments with version control
4. **Interviews**: Structured patient interview transcripts
5. **Transcripts**: Call recordings and transcriptions
6. **Patient Check-in**: Pre-appointment forms and updates

**Store Admin Role**:
- Dual function as patient concierges
- Real-time sales monitoring
- Comprehensive patient management
- AI-assisted clinical documentation
- First-line patient support before provider escalation

---

## Key Learnings from Product Development

### What Worked Exceptionally Well

**Interactive Prototypes**:
- Reduced implementation ambiguity dramatically
- Engineers could see exact requirements before writing code
- Enabled product validation before development investment
- Created shared understanding across product, design, engineering

**Foundational System Design Early**:
- Order hierarchy system enabled all future features
- Disease state classification supported product expansion
- Multi-tenant architecture allowed rapid brand addition
- Investment in architecture paid dividends repeatedly

**Phased Rollout Strategy**:
- Pharmacy Fulfillment Phase 1 delivered immediate value
- Clinical Review Tab transformation preserved existing functionality
- Appointment system split across 24 well-scoped tickets
- Iterative delivery maintained momentum vs waterfall releases

### What Was Challenging

**Balancing Speed vs Quality**:
- Startup pressure for rapid feature delivery
- Regulatory compliance requiring thorough implementation
- Engineering quality standards vs shipping velocity
- Solution: Prototypes + detailed tickets reduced rework

**Managing Third-Party API Variance**:
- API documentation quality varied dramatically across vendors
- Some required extensive clarification beyond docs
- Integration patterns helped but each vendor had unique quirks
- DoseSpot iframe approach different from RESTful APIs

**State-by-State Prescription Regulations**:
- 48 states each with unique pharmacy requirements
- Controlled substance restrictions varying by state
- Required pharmacy partner specialization by region
- Solution: Multi-pharmacy routing system with systematic workflow

### If Building Again

**Automated Testing Investment Earlier**:
- Relied heavily on manual QA during rapid development phase
- Would invest in test automation from start
- Critical for pharmacy fulfillment and billing logic
- Enables confident iteration on complex workflows

**Feature Flags for Gradual Rollout**:
- Would build granular feature flags into platform
- Enable testing with subset of patients before full launch
- Reduce risk of breaking changes across all users
- Faster deployment cycles with safer rollouts

**Admin Tooling for Data Migrations Sooner**:
- Built admin tools reactively as needs arose
- Would create data migration framework earlier
- Disease state classification migration showed need
- Critical for ongoing product catalog management

**Documentation in Real-Time**:
- Documented architectural decisions retroactively
- Would maintain decision log during development
- Helps future team members understand rationale
- Prevents repeated debates over already-decided questions
