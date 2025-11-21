# Product Management Philosophy & Approach

## Career Journey: From Hospitality to Healthcare PM

### Act 1: Hospitality to Tech (2016-2021)

Started in hospitality as a barista at Philz Coffee, progressed to Team Leader managing staff and operations. During COVID-19 lockdowns, decided to pursue career change into technology rather than return to hospitality.

**Key Transition**:
- Enrolled in LEARN Academy coding bootcamp (2020)
- Completed 480+ hours of hands-on full-stack development training
- Brief mobile development internship at Victorise (struggled with complex algorithms)
- Mother passed awaytook time to grieve
- Returned to LEARN Academy as instructor to solidify fundamentals while recovering

### Act 2: Software Engineer to Solutions Engineer (2021-2024)

Transitioned from bootcamp instructor to junior software engineer at Rugiet Health telehealth startup. As company evolved and spun out B2B SaaS platform (CompoundLive), naturally moved into hybrid role:
- 25% engineering on Rugiet patient platform
- 75% solutions engineering for CompoundLive enterprise clients

**Discovery**: Loved the intersection of technical and business problem-solving. The retention project at Rugiet revealed my passion was deciding **what to build**, not just **how to build it**.

### Act 3: Product Management in Healthcare (2024-2025)

Leveraged deep telehealth domain expertise and technical background to transition into product management. Led product strategy for new healthcare AI platform (Hedfirst/Teligant) from concept to beta launch. Coordinated engineering team through 150+ features in 9 months while managing complex healthcare regulatory requirements.

## What Makes Me Different as a PM

### Healthcare Domain Depth (3 Years Focused Experience)

**Regulatory Expertise**:
- Achieved LegitScript healthcare certification independently
- Navigate HIPAA compliance, multi-state prescription requirements, pharmacy network coordination
- Understand medical record retention policies (7-year requirement)
- Can read medical terminology, disease state classifications, medication protocols

**Healthcare Operations Understanding**:
- E-prescribing workflows (DoseSpot/SureScripts)
- Compounding pharmacy operations
- Clinical documentation requirements
- Provider credentialing and network management

**Product Scale in Healthcare**:
- Managed 499 medication catalog across 20+ disease states
- Classified products with complete regulatory compliance
- Built consultation services for 39 disease states
- Coordinated 4+ pharmacy partners for multi-state fulfillment

### Technical Credibility (Engineering Background + Ongoing Prototyping)

**API Integration Expertise**:
- Read API documentation and extract implementation requirements
- Integrated 8+ healthcare APIs: DoseSpot, SureScripts, Choose Health, PayTheory, ShipStation, LegitScript, AWS Bedrock, Zoom
- Understand authentication, rate limits, webhook processing, error handling

**Prototype Development**:
- Build functional React prototypes demonstrating complex workflows
- Examples: pharmacy fulfillment queue, appointment scheduling flow, clinical review interface
- Enable engineers to see exact requirements before development
- Reduce implementation ambiguity dramatically

**Database Schema Design**:
- Design schemas for complex healthcare data
- Examples: Order hierarchy system, patient profiles, subscription management, lab results storage
- Understand constraints, indexing, relationships, normalization trade-offs

**Technical Specification Writing**:
- Write specs engineers respect because they understand constraints
- Not just business wishesactual implementable requirements with edge cases
- Created 24-ticket epic (appointment system) with proper scoping and dependencies
- Built NestJS PostgreSQL migrations for production data updates

### Rapid Execution in Startup Environments

**Velocity Demonstrated**:
- Shipped 150+ features in 9 months coordinating 4-person engineering team
- Platform launch concept-to-production in 9 months (August 4th, 2025 go-live)
- Individual features: pharmacy fulfillment (2-3 weeks), lab integration (3-4 weeks), appointments (5-6 weeks)

**Scoping & Planning**:
- Created 24-ticket epic (appointment system) with proper scoping
- Designed foundational systems (order hierarchy) enabling future features without architectural changes
- Built interactive prototypes reducing engineering back-and-forth

**Cross-Functional Coordination**:
- Managed relationships with pharmacy partners, medical director, contracted providers
- Coordinated compliance vendors (LegitScript), third-party APIs (DoseSpot, Choose Health, PayTheory)
- Aligned engineering team, executive stakeholders, operational staff

### Full-Cycle Healthcare Product Experience

**Engineering (Building)**:
- Built features in Ruby on Rails at Rugiet Health
- Understand implementation complexity and technical constraints
- Can debug production issues and read logs

**Solutions (Implementing)**:
- Helped enterprise clients deploy CompoundLive platform
- Reduced deployment time from 5 months to 5 weeks through reusable frameworks
- Created compliance documentation and integration patterns

**Product (Defining)**:
- Led product strategy for Hedfirst from concept through launch
- Defined complete feature roadmap and prioritization
- Coordinated all aspects of platform development and go-live

**Empathy Gained**:
This full-cycle experience gives me empathy for all stakeholders and understanding of complete product lifecyclenot just one perspective.

### Regulatory Compliance Navigation

**LegitScript Certification**:
- Led certification process independently with minimal executive oversight
- Managed all documentation and compliance requirements
- Achieved successful approval on first submission

**HIPAA Compliance Architecture**:
- Designed HIPAA-compliant AI integration (Claude 4 Sonnet via AWS Bedrock with BAA and zero retention)
- Built cross-tenant data transfer with explicit patient consent
- Created audit logging for all patient data access
- Implemented 7-year medical record storage requirements

**Multi-State Prescription Requirements**:
- Managed 48-state prescription fulfillment
- Understood pharmacy network coordination across state regulations
- Navigated controlled substance restrictions by state
- Coordinated pharmacy partner specialization by region

### Strategic Product Architecture

**Order Hierarchy System**:
- Designed 3-tier structure handling complex healthcare transactions
- System now used platform-wide for all product types
- Enabled future features (appointments) to integrate cleanly without architecture changes

**Universal AI Medical Assessment Template**:
- Created 13-section clinical framework
- Integrated AI (Claude 4 Sonnet) with HIPAA compliance
- Achieved 92% diagnostic accuracy vs 74-76% physician baseline

**Disease State Classification**:
- Architected 499 medications across 20+ therapeutic categories
- Enabled product expansion and targeted treatment protocols
- Created foundation for 39 disease state consultation services

**Multi-Tenant SaaS Platform**:
- Designed architecture supporting white-label deployments
- Schema-per-tenant isolation ensuring HIPAA compliance
- AWS ECS-based deployment with Docker containers

## Core PM Principles

### 1. Outcomes Over Outputs

**Belief**: A 35% retention increase beats shipping 50 features.

**How I Measure Success**:
- Problems solved (not tickets closed)
- Value created (revenue, retention, satisfaction)
- Patient outcomes (prescriptions fulfilled, diagnostic accuracy)
- Business impact (deal closures, deployment time reduction)

**Example**:
At Rugiet, didn't just implement the feature request on the Jira ticket. Analyzed data, identified root cause (subscription inflexibility), proposed solution based on insights. Result: 35% retention increase.

### 2. Root Cause Analysis First

**Belief**: When retention drops, I don't ship the feature on the ticket. I analyze data, talk to users, and identify the actual problem before building anything.

**Process**:
1. **Pause before implementing**: Question whether requirements solve the right problem
2. **Analyze data**: SQL queries, user behavior patterns, churn analysis
3. **Talk to stakeholders**: Support teams, actual users, operational staff
4. **Identify root cause**: Distinguish symptoms from real problems
5. **Propose solution**: Based on insights, not assumptions
6. **Validate hypothesis**: Prototype, test, measure

**Example**:
Choose Health lab integration. Request was "add lab testing." Root cause analysis revealed patients were guessing at treatments without baseline biomarker data. Solution wasn't just integrationit was comprehensive diagnostic capability enabling evidence-based treatment.

### 3. Process Over Speed

**Belief**: Reusable frameworks beat custom solutions. Cutting deployment from 5 months to 5 weeks wasn't about coding fasterit was about better processes.

**How This Shows Up**:
- **At CompoundLive**: Built reusable integration frameworks instead of custom implementations per client
- **At Hedfirst**: Created order hierarchy system enabling all future product types vs. product-specific solutions
- **In Development**: Interactive prototypes reduce back-and-forth more than rushing to code

**Example**:
CompoundLive pharmacy integration. First two clients: 4 weeks custom work each. Investment in reusable framework: 6 weeks. Next three clients: 1 week configuration each. Better process paid off after 2 clients.

### 4. Operational Reality Wins

**Belief**: I shadow doctors, coordinate with pharmacies, and understand fulfillment logistics. The best product strategy accounts for how things actually work, not how they should work in theory.

**How I Build Operational Understanding**:
- Shadow users in their actual workflows
- Talk to operational staff (pharmacy partners, providers, customer support)
- Understand constraints (state regulations, pharmacy capacity, provider availability)
- Design for reality, not ideal scenarios

**Example**:
Pharmacy fulfillment workflow. Could have built automated routing AI. Reality: doctors need manual override for clinical judgment, different pharmacies have different specialties, systematic process with flexibility beats full automation.

### 5. Stakeholder Translation

**Belief**: I bridge clinical stakeholders, engineers, and business leaders. Teaching background makes me fluent in translating complex concepts for different audiences.

**How This Manifests**:
- **To Engineers**: Write detailed technical specs with edge cases and data models
- **To Executives**: Present business impact, revenue implications, strategic positioning
- **To Clinical Stakeholders**: Speak in terms of patient outcomes, clinical workflows, regulatory compliance
- **To Clients**: Demonstrate platform capabilities, explain compliance features, set realistic expectations

**Example**:
LegitScript certification required translating technical platform architecture into healthcare compliance documentation, then translating compliance requirements back to engineering team as implementable specs.

### 6. Prototype-Driven Development

**Belief**: Interactive React prototypes eliminate weeks of back-and-forth. Showing is faster than explaining when coordinating cross-functional teams.

**How I Use Prototypes**:
1. **Early in process**: Before writing detailed specs, build clickable prototype
2. **Stakeholder alignment**: Show exact workflow to executives, doctors, designers
3. **Engineering clarity**: Engineers see exact requirements vs. interpreting written specs
4. **Validation**: Test with users before committing to full development

**Impact**:
- Pharmacy fulfillment workflow: Prototype showed exact queue system, status management, override capability
- Appointment scheduling: Prototype demonstrated complete patient flow from purchase to confirmation
- Clinical review tab: Prototype enabled redesign validation before engineering work began

**Tools**: React, Next.js, Vercel hosting, Figma mockup integration

## What "Outcomes-Driven" Actually Means

### Real Example: Lab Integration Decision at Hedfirst

**The Feature Request**: "Add lab testing so patients can track biomarkers"

**The Outcome Question**: "What patient problem does this solve, and how do we measure if it's working?"

**The Research**:
- Shadowed doctors for 2 days observing patient consultations
- Analyzed patient data to understand treatment decision patterns
- Discovered most patients guessing at treatments without knowing baseline biomarker levels

**The Real Problem**: Patients spending money on treatments that may not address their actual deficiencies. No objective data to guide treatment decisions.

**The Solution**: Choose Health lab integration enabling:
- At-home blood testing for comprehensive metabolic panels
- Objective biomarker data (not self-reported symptoms)
- Evidence-based treatment recommendations
- Ongoing tracking for treatment efficacy

**The Result**:
- 40% of patients ordered labs (strong adoption)
- 60% revealed deficiencies they weren't aware of (validated problem)
- Treatment recommendations shifted based on objective data (improved outcomes)
- Platform positioning transformed from symptom treatment to comprehensive health monitoring

**Measurable Outcome**: Didn't just "ship feature"solved measurable problem with trackable patient outcomes.

## The Healthcare PM Skillset

Based on 3 years building telehealth platforms, here's what separates good healthcare PMs from great ones:

### Technical Literacy

**Can Read API Docs**:
- Analyze endpoints, authentication methods, rate limits
- Identify integration requirements without engineering hand-holding
- Understand webhook processing, error handling, retry logic
- Extract data models and required fields

**Understand Data Models**:
- Design database schemas for complex healthcare data
- Understand relationships, constraints, normalization
- Can write SQL queries to analyze user behavior
- Know difference between transactional and analytical queries

**Write Specs Developers Don't Need to Clarify 10 Times**:
- Include edge cases and error scenarios
- Specify data types, validation rules, constraints
- Provide concrete examples, not just descriptions
- Understand technical feasibility and constraints

### Operational Empathy

**Understands Clinical Workflows**:
- How doctors actually review patients (not how it should work in theory)
- Time constraints providers face (can't spend 30 minutes per patient)
- Clinical decision-making process (evidence-based medicine)
- Provider credentialing and licensing requirements

**Pharmacy Fulfillment Reality**:
- Different pharmacies specialize in different compounds
- State regulations affect which pharmacies can fulfill where
- Compounding takes timecan't promise overnight delivery
- Pharmacy capacity constraints during high-demand periods

**Regulatory Requirements Beyond Surface Level**:
- HIPAA isn't just "encrypt the data"it's comprehensive data governance
- SOC 2 controls require organizational processes, not just technical implementation
- State pharmacy boards have real authority and enforcement
- LegitScript certification requires ongoing monitoring compliance

### Compliance Fluency

**HIPAA**:
- Business Associate Agreements (BAA) with all vendors handling PHI
- Encryption at rest and in transit
- Audit logging for all patient data access
- Patient consent workflows for data sharing
- Breach notification procedures

**SOC 2**:
- Control framework (security, availability, confidentiality)
- Evidence collection for audits
- Organizational policies and procedures
- Vendor management and third-party risk assessment

**State Pharmacy Boards**:
- Multi-state prescription requirements
- Controlled substance restrictions by state
- Telemedicine prescribing regulations
- Pharmacy licensure requirements

### Data-Driven Decision Making

**Analyzes Metrics**:
- User behavior patterns (where do patients drop off?)
- Retention and churn analysis (why are people leaving?)
- Feature adoption (are users actually using this?)
- Business impact (revenue, satisfaction, operational efficiency)

**Identifies Root Causes**:
- SQL queries to understand patterns
- Support ticket analysis for common issues
- User interviews to understand motivations
- A/B testing to validate hypotheses

**Validates Hypotheses Before Building**:
- Prototype and test with users
- Analyze existing data for evidence
- Start with MVP to validate direction
- Measure outcomes, not just outputs

### Stakeholder Translation

**Bridges Clinical, Technical, and Business Perspectives**:
- Translates clinical workflow requirements into technical specifications
- Explains technical constraints to non-technical executives
- Presents business impact to justify engineering investment
- Communicates compliance requirements across all stakeholders

**Without Losing Meaning**:
- Maintains nuance when translating between domains
- Asks clarifying questions rather than assuming
- Validates understanding with stakeholders
- Documents decisions and rationale

### Reusable Thinking

**Builds Frameworks and Processes, Not Just Features**:
- Order hierarchy system (used across all product types)
- Integration patterns (accelerated each subsequent API)
- Compliance documentation templates (reused across clients)
- Testing procedures (standardized QA approach)

**Examples**:
- **CompoundLive**: Reusable integration frameworks reduced deployment from 5 months to 5 weeks
- **Hedfirst**: Order hierarchy designed early enabled appointment system to integrate cleanly 6 months later
- **Both**: Compliance documentation templates accelerated client implementations

## Why Healthcare PM Is Different

### Compliance Isn't a CheckboxIt's a Design Constraint

**How Most PMs Treat Compliance**: Something you bolt on after building features.

**How Healthcare PMs Must Treat Compliance**: Foundational design decisions enabling everything else.

**Examples**:
- **HIPAA isn't optional**: Every feature touching patient data needs encryption, audit logging, access controls from day one. You can't retrofit security.
- **State pharmacy boards have real authority**: Can shut you down if you violate rules. Compliance isn't optional.
- **SOC 2 takes 6+ months**: Enterprise clients won't sign until certified. Not a featureit's a business requirement.

**At Hedfirst**:
- Built HIPAA compliance into architecture from beginning
- Cross-tenant data isolation as foundational design decision
- Explicit consent workflows for data transfer
- Comprehensive audit logging enabled everything else

### Operational Workflows Matter More Than Features

**The Prescription Routing Example**:

More valuable than any fancy AI feature. Here's why:

**Real Workflow**:
1. Patient orders prescription for weight management medication
2. System checks: Is medication available? What pharmacy fulfills? Does state allow shipment?
3. Doctor prescribes via DoseSpot e-prescribing system
4. Prescription routes to correct pharmacy based on medication type, state restrictions, inventory
5. Pharmacy fulfills, ships to patient via ShipStation integration

**If Any Step Fails**: Patient doesn't get medication.

**Impact**: No amount of beautiful UI compensates for broken operational workflows. We achieved **zero prescription routing errors** across 200+ monthly prescriptions because we obsessed over operational reality, not just feature lists.

### Technical Depth Enables Better Product Decisions

**What Technical Depth Enables**:

**Reading API Documentation**:
- When integrating DoseSpot, Choose Health, PayTheory: analyze endpoints, understand rate limits, design integration architecture myself
- Don't need engineering team to "translate" API docs into requirements
- Can identify integration challenges before assigning to engineers

**Writing Implementable Specs**:
- Engineers don't come back with 10 clarifying questions
- Understand data models, edge cases, technical constraints
- Include error scenarios and validation rules
- Specify exactly what to build, not vague descriptions

**Debugging Production Issues**:
- When lab results aren't syncing via webhooks: read logs, trace API calls, identify root causes
- Don't need to wait for engineering investigation to understand problem
- Can triage severity and communicate clearly to stakeholders

**Realistic Timelines**:
- Know difference between "change a config" (1 day) and "rebuild data architecture" (2 weeks)
- Can push back on unrealistic executive demands with credibility
- Provide accurate estimates for planning and stakeholder management

## Strategic Thinking Examples

### Foundational System Design: Order Hierarchy

**The Challenge**: Healthcare transactions have complex structures (medications with recurring fills, consultations with multiple appointments, lab kits with separate ordering and results, memberships with ongoing benefits).

**Poor Approach**: Build product-specific solutions for each type.
- Medication orders: custom numbering and billing logic
- Consultation orders: separate system
- Lab orders: another separate system
- Result: Fragmented systems, inconsistent customer service experience

**Strategic Approach**: Design unified hierarchy handling all product types.

**The System**:
```
Master Order: #HF-XXXX
    Subscriptions: #HF-XXXX-S-Y (with fills #HF-XXXX-S-Y-F-Z)
    Consultations: #HF-XXXX-C-Y
    Lab Kits: #HF-XXXX-L-Y
    Appointments: #HF-XXXX-A-Y (with instances #HF-XXXX-A-Y-A-Z)
    Memberships: #HF-XXXX-M-Y
```

**Strategic Benefit**:
- Single system handles all current and future product types
- Appointment system added 6 months later integrated cleanly (no architecture changes)
- Customer service has unified tracking across all order types
- Billing logic clearly tied to order structure

**Lesson**: Investment in strategic architecture pays exponential returns. Getting this right early enabled rapid feature development later.

### Reusable Frameworks: CompoundLive Integration Patterns

**The Challenge**: Each enterprise client needed custom pharmacy, payment, and compliance integrations.

**Poor Approach**: Build custom integration for each client.
- Client A pharmacy integration: 4 weeks
- Client B pharmacy integration: 4 weeks (relearning same patterns)
- Client C pharmacy integration: 4 weeks (repeating mistakes)

**Strategic Approach**: Build reusable integration framework accepting configuration.

**The Framework**:
- Standardized API wrapper for common operations
- Configuration files for vendor-specific endpoints
- Reusable error handling and retry logic
- Template workflows with customization points

**Math**:
- Reusable framework: 6 weeks upfront investment
- Configuring for Client C, D, E: 1 week each
- Break-even after 2 clients, exponential returns afterward

**Strategic Benefit**:
- Deployment time: 5 months ’ 5 weeks (10x improvement)
- Engineering team focuses on new features, not repetitive integration
- Quality improves through reusable, tested components

**Lesson**: The fastest way to ship isn't more featuresit's better processes.

## Artifacts & Examples

### Interactive Prototypes Built

**Pharmacy Fulfillment Workflow** (React prototype):
- Visual queue showing 4 pharmacy partners
- "Mark Sent" status management with auto-advancement
- Manual override capability with clinical justification field
- Complete audit trail display
- Engineers implemented directly from prototype

**Appointment Scheduling Flow** (React prototype):
- Empty state with purchase prompt
- Calendar interface with provider availability
- Time selection and details entry
- Confirmation screen with calendar invite
- Demonstrated complete patient journey end-to-end

**Clinical Review Tab Redesign** (React prototype):
- Unified interface showing medications, documents, AI investigations, lab results, pharmacy fulfillment
- Tab-less design reducing cognitive load
- Real-time status updates and notifications
- Validated complete workflow before engineering work

### Technical Specifications Written

**Epic MT-1602: Provider Appointment System** (24 tickets):
- 10 backend tickets: Zoom API, scheduler mapping, token creation, appointment management
- 9 frontend tickets: UI across Patient Admin, Doctor Admin, Store Admin
- 4 tab indicator tickets: notification badges, status synchronization
- 1 testing ticket: end-to-end validation

**Choose Health Lab Integration** (13 tickets):
- Patient portal Labs tab (kit ordering, registration, tracking, results)
- Store admin lab management (panel selection, patient tracking)
- Backend webhook processing (automated result delivery)
- Data schemas (7-year retention compliance)

**Pharmacy Fulfillment Workflow** (12 tickets):
- Phase 1: Routing system foundation (6 tickets)
- Phase 2: Clinical review integration (6 tickets)
- Detailed acceptance criteria with edge cases
- Coordinated across frontend, backend, and admin interfaces

### Database Migrations Built

**Disease State Classification** (NestJS PostgreSQL migration):
- CSV processing for 499 medications across 20+ disease states
- Comprehensive error handling and validation
- Logging for audit trail
- Batch operation handling

## Looking Forward

After 3 years in telehealth, I've learned that healthcare technology is one of the few domains where product decisions have measurable real-world impact.

**When you ship a prescription routing workflow** that enables 48-state fulfillment with zero errors, that's not just a metricit's real patients receiving care.

**When you achieve 92% diagnostic accuracy** with AI enhancement vs 74-76% physician baseline, that's not just a featureit's better patient outcomes.

**When you integrate lab testing** and 40% of patients discover deficiencies they weren't aware of, that's not just adoptionit's life-changing health insights.

This is why I'm passionate about healthcare product management. The impact is real, measurable, and meaningful.
