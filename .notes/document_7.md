Contact & Online Presence
Location: Leander, Texas
 Phone: +1-858-525-1411
 Email: walkertexasaustin@gmail.com
 LinkedIn: linkedin.com/in/walkeratx
 Portfolio: hirethiswalker.com

Career Summary
5 years in technology (2020-2025), with focused trajectory from bootcamp graduate → software engineer → technical product manager specializing in healthcare technology. Deep expertise in telehealth platforms, healthcare regulatory compliance (HIPAA, LegitScript, multi-state requirements), and rapid product development in early-stage startup environments.
Most Recent Achievement: Led product strategy for complete healthcare AI platform (Teligant/Hedfirst) from concept to production launch in 9 months. Shipped 150+ features across pharmacy fulfillment, AI integration, lab testing, appointment scheduling, and membership management. Platform launched August 4th, 2025 with 499 medications, 39 disease states, and comprehensive AI-powered diagnostic capabilities achieving 92% accuracy (vs 74-76% for physicians alone per Stanford Medicine).
Target Role: Mid-level Technical Product Manager in healthcare technology
 Target Salary: $150,000 (realistic range $120K-150K depending on company stage and location)
 Key Strengths: Healthcare domain expertise with 3 years telehealth experience, technical fluency (can read API docs and build functional prototypes), rapid execution in ambiguous startup environments, regulatory compliance navigation (HIPAA, LegitScript, multi-state prescribing)
Unique Combination: Engineering background + healthcare domain depth + proven ability to ship complex features quickly in regulated environments. Can translate clinical workflow requirements into technical specifications, coordinate engineering teams without formal authority, and navigate regulatory requirements that block most PMs without healthcare experience.

Professional Experience Timeline
Technical Product Manager | Hedfirst/Teligant | Sept 2024 - Sept 2025 (9 months)
Company Context: Healthcare AI platform built from scratch. Multi-tenant SaaS architecture (Teligant) powering direct-to-consumer telehealth brand (Hedfirst) with native AI diagnostic capabilities, compounding pharmacy network integration, and HIPAA-compliant data processing.
Platform Scale at Launch (August 4th, 2025):
499 medications classified across 20+ disease states
39 disease state consultation services
25 beta patients in AI Care Membership program
Multi-state prescription fulfillment across 48 states
Integration with 4+ pharmacy partners
$499/year membership model with $750 expected patient lifetime value
Reporting Structure:
Reported to: Kelly Smith (CEO) and Daria Smith (COO)
Direct reports: None (matrixed coordination)
Team coordination: 4 engineers + 1 CTO + shared product responsibility with Daria Smith
Third-party vendor management: DoseSpot, Choose Health, PayTheory, LegitScript, SureScripts, ShipStation
Compensation:
Paid employee (significantly below market rate)
No equity
Officially titled "Apprentice" but functionally served as Technical Product Manager
Role Split:
0% hands-on coding for production (prohibited from writing implementation code)
30% Jira ticket writing and sprint planning
30% prototype creation and design validation
20% third-party vendor coordination and API analysis
20% requirements definition and technical specification writing
What Actually Happened: After leaving CompoundLive/Rugiet (acquired by ListenCo), I proposed to Kelly Smith that I could help him build a next-generation telehealth platform incorporating everything I'd learned about what worked and what didn't in CompoundLive. The vision was to create a sophisticated multi-tenant healthcare SaaS platform with native AI capabilities, better clinical workflows, and more flexible product configuration. Used no IP from previous work - this was entirely new architecture and vision.
We built Teligant (the underlying SaaS platform) and Hedfirst (the first brand/implementation) from concept to production launch in 9 months. I shipped 150+ features across patient experience, doctor workflows, store administration, pharmacy integration, lab testing, AI assessment, and membership management. Platform successfully launched August 4th, 2025 with real patients, live prescriptions, and operational pharmacy fulfillment.
Why I Left: Company completed initial platform build and achieved production launch. Due to funding constraints and strategic uncertainty about go-to-market approach (company hadn't finalized strategy between prescription sales, membership model, or AI diagnostic focus), team was reduced from 6 people to 1-2 people for beta operations. I was let go mid-September 2025 along with most of the engineering team as company entered operational phase requiring less development velocity. Still technically available on contract basis but haven't been contacted since departure.
Product had some fundamental viability concerns: initial AI diagnostic protocol was taking 8 hours per patient interaction, making it challenging to scale without significant process optimization.
Major Projects & Accomplishments:
1. Platform Architecture & Launch (Aug 2024 - Aug 2025)
Defined multi-tenant SaaS architecture (Teligant) enabling multiple healthcare brands on single platform
Each tenant receives isolated instances: patient portal, doctor portal, admin dashboard, API endpoints
AWS ECS-based deployment with separate Docker containers for each service layer
Built cross-tenant patient data transfer with explicit HIPAA-compliant consent workflow
Architecture enables: Rapid white-label deployment, isolated tenant data, scalable infrastructure
Launch milestone: Successfully launched Hedfirst to production on August 4th, 2025 with live patients
My role: Defined complete technical architecture, coordinated all third-party integrations, managed go-live readiness
2. Order Hierarchy System
Problem: Healthcare transactions have complex structures (medications with recurring fills, consultations with multiple appointments, lab tests with results, memberships with benefits)
Solution: Created three-tier order hierarchy system with parent orders and typed sub-categories
Structure:
Master order: #HF-XXXX
Sub-categories: -S (subscriptions), -C (consultations), -L (lab kits), -A (appointments), -M (memberships)
Sub-sub categories: -F (medication fills), -A (appointment instances)
Business logic: Single checkout can create multiple sub-category items, each with appropriate billing and fulfillment workflows
Example: Order #HF-2009 containing membership (#HF-2009-M-1), consultation (#HF-2009-C-1), medication subscription (#HF-2009-S-1), lab kit (#HF-2009-L-1)
Outcome: Enables complex healthcare transaction tracking, subscription management, and customer service workflows
My role: Designed complete system architecture, defined numbering conventions, specified billing triggers
3. Disease State Classification & Product Catalog (Dec 2024 - Jan 2025)
Scope: Classified 499 medications across 20+ therapeutic disease state categories
Categories included: Peptide Therapy, Weight Loss, Hair Growth, Sexual Wellness, Mental Health, Migraine, Sleep/Insomnia, Thyroid Function, Pain Management, Cardiovascular, Diabetes, Dermatology, Hormone Balance, and 7+ others
Marketing deliverables: Created badges, subtitles, and 2-sentence descriptions for all 39 disease states
Technical implementation: Built NestJS PostgreSQL migration to update product disease states from CSV data with comprehensive error handling and logging
Business impact: Enabled disease state-based product organization, improved patient navigation, created foundation for targeted treatment protocols
My role: Led complete medication classification project, created all marketing materials, built database migration tooling
4. Pharmacy Fulfillment Workflow System
Problem: Doctors manually entering prescriptions with no systematic guidance across 4 pharmacy partners (Crafted RX, Greenwich/Texas Performance Meds, Outreach RX, patient local pharmacy). Risk of missed prescriptions, duplicate sends, no audit trail.
Solution: Created pharmacy-by-pharmacy queue workflow component positioned above DoseSpot iframe
Features: Systematic pharmacy selection, "Mark Sent" status management, auto-advancement through pharmacy list, manual override capability, complete audit trail
Implementation: 12 Jira tickets across 2 sprint cycles (Phase 1: routing system, Phase 2: clinical review integration)
Outcome: Eliminated prescription routing errors, created systematic fulfillment process, established foundation for clinical review workflow
Timeline: 2-3 weeks from concept to production
My role: Defined all requirements, wrote all tickets with acceptance criteria, coordinated with pharmacy partners, created interactive React prototype demonstrating workflow
5. Clinical Review Tab Transformation
Strategic shift: Transformed doctor workflow from subscription-focused administrative interface to clinical-focused comprehensive patient review system
New unified interface: Medications, documents, AI investigations, lab results, and pharmacy fulfillment in single clinical context
Preserved functionality: Maintained all existing pharmacy fulfillment capabilities while repositioning as clinical tools
Business impact: Aligned product with clinical workflow expectations, improved provider experience, positioned platform for comprehensive care delivery
My role: Defined strategic vision for workflow transformation, specified new tab architecture, coordinated design and engineering implementation
6. Choose Health Lab Testing Integration
Business impact: Expanded Hedfirst from migraine-focused platform to comprehensive health monitoring and diagnostic capabilities
API integration: 7 REST endpoints plus webhook system for real-time lab results
Patient workflow: Kit ordering → registration → sample collection → tracking → results delivery → provider review
Admin functionality: Choose Health panel selection, patient lab management, results integration with patient profiles
Compliance: HIPAA-compliant data storage with 7-year retention requirement for medical records
Implementation: 13 Jira tickets across patient portal (Labs tab), store admin (lab management), backend (webhook processing), and results viewing interfaces
Product catalog: 6 lab test panels targeting complex conditions (Comprehensive Metabolic Health, Inflammation & Immune Function, Hormone Balance panels), priced $99-$145
Strategic positioning: Integrated lab testing with AI Medical Assessment Membership to provide comprehensive diagnostic capabilities
My role: Analyzed designer mockups, studied API documentation, created complete implementation roadmap, defined data schemas and webhook handlers, wrote all technical specifications
7. Provider Appointment System (Epic MT-1602)
Business requirement: Enable patients to purchase and schedule provider appointments, support membership benefits (2 free appointments annually), integrate HIPAA-compliant video conferencing
Appointment token system: Purchased appointments create tokens requiring scheduling, tokens show "Needs Scheduling" status, maintain appointment lifecycle tracking
Zoom API integration: HIPAA-compliant video conferencing with automated meeting creation and calendar invitation delivery
Complete patient flow: Empty state → purchase modal → appointment token → scheduling calendar → time selection → details entry → confirmation with calendar invite
Implementation scope: 24 Jira tickets across backend systems, frontend UI, Doctor Admin, Patient Admin, and Store Admin
Coverage areas: Backend (Zoom API, scheduler mapping, token creation, appointment management), Frontend (UI across all admin interfaces), Tab indicators (notification badges for appointment updates)
Order integration: Appointments use standalone A category (#HF-XXXX-A-Y), integrated with order hierarchy system, supports both free membership appointments and paid follow-ups
My role: Designed complete patient flow from mockups, created all 24 implementation tickets with acceptance criteria, defined order numbering integration, specified Zoom API requirements, built interactive React prototype demonstrating end-to-end workflow
8. Membership Product & PayTheory Billing Integration
Product: AI Care Membership at $499/year (regular $699) with comprehensive benefits
Included benefits: 2 free provider appointments ($90-180 value), free Core Metabolic Lab Kit ($85 value), unlimited patient concierge messaging ($200+ monthly value), AI Medical Assessment ($500 value), waived prescription fees ($40+ per order)
PayTheory integration: Recurring billing processor supporting flexible billing cycles (30-365 days)
Subscription architecture: Membership cycle system (0=one-time, 1=2 total charges, 23=24 total charges maximum), future charge pre-generation pattern (F-1, F-2, F-3), subscription ID format (#[Order-ID]-S-1)
Database design: Subscription table with billing cycle column, supply column showing dashes for membership products, separation of billing cycle from supply duration
Membership benefits system: Configuration interface for unlimited vs counted benefits, error handling for unlimited benefits + cart functionality, patient dashboard display of active benefits
Payment timing: Memberships charged at checkout (only product type with upfront payment), medications charged only after provider approval
Beta launch: August 2025 offering 25 spots at $29.99 (94% discount from $699 regular price), post-beta pricing $499 annual
My role: Designed complete subscription lifecycle, defined billing logic and database schema, specified PayTheory integration requirements, created membership benefits configuration system, wrote implementation tickets
9. DoseSpot E-Prescribing & SureScripts Integration
Purpose: HIPAA-compliant electronic prescribing for non-controlled substances across multiple states
Integration scope: DoseSpot embedded iframe for prescription creation, SureScripts network connectivity for pharmacy transmission, provider access management
Medication database: 499+ medication protocols with dosage variants, form factors, and compounding specifications
Product variant enhancements: Added Pharmacy Notes and Patient Directions fields to each variant, direct alignment with DoseSpot prescription workflow (Pharmacy Notes populate pharmacy notes field, Patient Directions populate patient directions field in DoseSpot)
Workflow: Provider approval triggers both payment processing and prescription creation in DoseSpot, DoseSpot transmits prescriptions via SureScripts to partner pharmacies
Prescription status: One-way workflow from platform to DoseSpot, status updates not currently operational
My role: Coordinated directly with DoseSpot vendor, defined integration requirements, specified prescription workflow, enhanced product variant system to support prescribing needs
10. LegitScript Healthcare Certification
Purpose: Third-party healthcare regulatory compliance certification required for operating telehealth across multiple states
Certification: Successfully achieved LegitScript certification for hedfirst.com as certified pharmacy and telemedicine provider
Scope: Multi-state regulatory compliance documentation, healthcare industry standards adherence, ongoing monitoring requirements
Compliance framework: Built comprehensive regulatory compliance framework ensuring platform meets healthcare certification standards
My role: Led certification process with minimal executive oversight, managed all documentation, coordinated with LegitScript compliance team, responded to certification requirements, achieved successful approval
11. Universal AI Medical Assessment System
Clinical framework: Created 13-section template serving as operational backbone for all AI Medical Assessments
Sections: Patient Information, Visit Summary, Medical History, Current Symptoms, Laboratory Studies, Diagnostic Imaging, AI Pattern Recognition & Analysis, Comprehensive Diagnostic Assessment, Risk Stratification & Prevention, Comprehensive Treatment Plan, Monitoring & Follow-Up Protocol, Patient Education & Empowerment, Provider Documentation & Approval
AI integration: Claude 4 Sonnet via AWS Bedrock for pattern recognition and diagnostic assistance, direct Anthropic connection with Business Associate Agreement (BAA) and zero retention policy for HIPAA compliance
Store Admin AI Chat: Integrated Claude 4 Sonnet into Store Admin interface for patient analysis, treatment planning, clinical brief generation, document generation with full patient profile context
Assessment workflow: Store admin creates assessment documents, version control (v1, v2, v3), status management (Waiting for approval, Approved), provider review and approval process, file uploader for patient documents (PDF/DOC/DOCX up to 10MB)
Stanford Medicine benchmark: Platform achieves 92% diagnostic accuracy with AI enhancement vs 74-76% for physicians alone
Multi-phase treatment planning: Immediate (0-30 days), primary (1-6 months), long-term (6 months - 2 years)
Differential diagnosis: Ranking with probability percentages and confidence levels
My role: Designed complete assessment template structure, specified AI integration requirements including HIPAA compliance, defined workflow across store admin and doctor admin interfaces, created document management system with version control
12. ShipStation Fulfillment Integration
Purpose: Order management and shipping coordination for medication delivery from pharmacy partners to patients
Integration approach: Custom Store connection with web endpoint for order import via GET calls and shipment notifications via POST calls
Status mappings: Unpaid, Paid, Shipped, Cancelled, On-Hold with case-sensitive field requirements
Multi-pharmacy architecture: Created backend tickets for product type filtering, multi-pharmacy order filtering service, XML export system for separate pharmacy endpoints, shipment notification handling
Alternative approach explored: Direct ShipStation API implementation vs pull-based Custom Store integration, built local project successfully submitting orders using API keys
Configuration proposal: Store Admin ShipStation tab with API credentials, pharmacy-to-store mappings for streamlined setup
My role: Analyzed existing Custom Store integration, created 4 backend implementation tickets, researched API alternative approach, specified configuration interface for store admin
13. Product Management System & Variant Architecture
Product types: 5 categories - Physical products, Services (Initial/Follow-up Consultations), Bundles, Memberships, Lab Tests
Product configuration: Name, subtitle, badge, auto-generated slug, marketing description, disease state, treatment type/use, prescription flag, up to 7 images
Ingredient management: Unlimited ingredients per product for compounding medications, all variants inherit all ingredients, cannot create partial variants
Variant system: Minimum one variant per product, store visibility control, provider dropdown access for hidden variants, pharmacy/dispensing notes per variant
Interface redesign: Organized products by type (prescription medications, non-prescription medications, consultations, labs, memberships, appointments), disease state sorting for physical products, leveraged subscription table design patterns
My role: Defined product type taxonomy, specified variant architecture and ingredient inheritance rules, designed Store Admin products interface organization
14. Consultation Services & Disease State Access Model
Initial Consultation Services: Disease state-specific asynchronous consultations automatically bundled with first medication purchase
Access model: Payment approval for one medication in disease state grants access to ALL medications in that category for one year
39 disease states: Complete consultation portfolio with marketing descriptions and subtitles, asynchronous consultation prefix ("An asynchronous consultation with our licensed medical providers regarding...")
Follow-up Consultations: 30-minute provider appointments exclusive to members at $99 each, phone or video based on state requirements
Lab review sessions: 15-minute review sessions with patient concierge or medical provider included with lab kit purchases
My role: Designed consultation service model and disease state access architecture, created all marketing materials for 39 disease states, specified automated bundling logic
15. Multi-party Encrypted Internal  Messaging System
Architecture: Multi-party chat rooms containing patient, all store admins (customer care), and assigned provider (if selected)
Patient-facing labels: "Customer care messages" for store admin chats, "Dr. messages" for provider chats
Store admin functionality: Announce entry to chat with "Patient concierge has entered the chat" notification, serve as patient onboarding and support specialists
Integration: Messaging accessible across patient dashboard, Doctor Admin patient profiles, Store Admin patient profiles
My role: Defined messaging architecture, specified multi-party room logic, designed patient-facing interface in dashboard redesign
16. Patient Dashboard Redesign
Strategic goal: Consolidate existing services into unified patient interface, improve access to AI Medical Assessment, orders, lab results, appointments, and messaging
Dashboard sections: AI Medical Assessment Member status, order history with status tracking (In progress, Processes, Canceled), AI medical assessment documents with download capability, labs section with test tracking and results (Complete Blood Panel, Hormone Panel, Vitamin D Level), two-way messaging with doctors and customer care, appointments management
Design reference: "ala. Function Health's" style for modern healthcare dashboard aesthetics
Status: Design stage, represents planned consolidation of patient experience
My role: Analyzed existing patient touchpoints, documented requirements for consolidated dashboard, specified functional requirements across all service areas
17. Store Admin Portal Navigation & Patient Profiles
Navigation structure: Dashboard, Messages, Products, Orders and Services (sub-categories: All orders, Consultations, Subscriptions, One-time purchases), Store settings, Medical Care (Upselling), Patients, Users (Admins, Doctors)
Patient profiles: 13 primary tabs covering all aspects of care - Patient overview, Consultations, Subscriptions, Hedfirst AI, Lab Tests, Orders, Payments, Payment History, Questionnaires, Messages, Appointments, History, Notes
Hedfirst AI tab: 6 sub-tabs - Chat, Uploaded Files, AI Assessments, Interviews, Transcripts, Patient Check-in
AI Chat system: Persistent chat history with named conversation sessions, model selection (Claude Sonnet 4 / Opus 4), configurable parameters (Max tokens: 8000, Temperature: 1, Thinking budget: 2000), patient analysis and treatment planning capabilities
Store admin role: Dual function as patient concierges with real-time sales monitoring, comprehensive patient management, AI-assisted clinical documentation
My role: Documented complete Store Admin interface structure, specified patient profile tab architecture, defined AI chat system requirements and configuration
Technical Skills Demonstrated:
Healthcare API integration: DoseSpot (e-prescribing), SureScripts (pharmacy network), Choose Health (7 REST endpoints + webhooks), PayTheory (recurring billing), ShipStation (fulfillment), LegitScript (compliance certification)
AI/ML integration: Claude 4 Sonnet via AWS Bedrock with HIPAA BAA, zero retention policy configuration, context management, prompt engineering for clinical use cases
Database schema design: Order hierarchy system (3-tier structure), subscription management, patient data models, lab results storage with 7-year retention, medication catalog (499 products)
Healthcare compliance: HIPAA data processing and storage, multi-state regulatory requirements, LegitScript certification management, medical record retention policies
Product requirement documentation: Jira epic creation (24-ticket appointment system), user story writing with acceptance criteria, technical specification from API documentation
Prototype development: React/Next.js functional prototypes on Vercel demonstrating complex workflows (pharmacy fulfillment, appointment scheduling, clinical review interface, membership benefits)
Stakeholder coordination: Pharmacy partners, third-party vendors (DoseSpot, Choose Health, PayTheory, LegitScript), medical director, contracted providers, engineering team, executive leadership
System architecture: Multi-tenant SaaS platform design, AWS ECS deployment architecture, Docker containerization, API endpoint design, webhook processing
Data migration: NestJS PostgreSQL migrations for product updates, CSV processing with error handling and logging, batch data operations
Marketing & content: Created badges, subtitles, descriptions for 39 disease states, product detail page content for 499 medications, clinical framework documentation
Tools Used Daily:
Project management: Jira (24-ticket epics, sprint planning, backlog prioritization), Confluence (technical documentation, API specifications)
Design & prototyping: Figma (mockup analysis, design review), Vercel (React prototype hosting), custom React artifacts (workflow demonstration)
Communication: Slack (team coordination, vendor management), Zoom (stakeholder meetings)
Development: Git/GitHub (code review of prototypes), VSCode (prototype development), Claude AI (documentation, prototype generation)
Healthcare platforms: DoseSpot (prescription management), LegitScript (compliance portal), Choose Health API documentation
What I Would Highlight:
Breadth and depth: Shipped 150+ features across 17 major project areas in 9 months - from pharmacy fulfillment to AI integration to lab testing to appointment scheduling
Technical sophistication: Successfully integrated 8+ third-party healthcare APIs with complex compliance requirements (HIPAA, BAA, SureScripts, LegitScript)
Strategic product decisions: Designed order hierarchy system used across entire platform, created disease state classification for 499 medications, architected multi-tenant platform supporting multiple healthcare brands
Healthcare domain mastery: Achieved LegitScript certification, navigated multi-state prescription requirements, designed HIPAA-compliant data architecture, managed pharmacy network coordination
Speed of execution: Concept to production launch in 9 months with comprehensive feature set spanning e-commerce, clinical workflows, AI integration, and regulatory compliance
Product launch success: Platform launched August 4th, 2025 to real patients with live prescriptions, operational pharmacy fulfillment, and functioning AI assessment system
Cross-functional coordination: Managed relationships with pharmacy partners, medical director, contracted providers, compliance vendors, engineering team, and executive stakeholders
Prototype-driven development: Created interactive React prototypes for complex workflows, enabling engineers to see exact implementation requirements before development began
What I Would Minimize:
"Apprentice" framing: Drop this terminology entirely - I was functionally a Technical Product Manager regardless of the title - I did end up dropping this from LinkedIn. 
Short tenure: Frame as "project completion" rather than premature departure - we achieved platform launch and entered operational phase
Limited patient traction: 25 beta patients is early-stage, but platform successfully launched and is operational with real prescriptions being fulfilled
Product viability concerns: AI diagnostic taking 8 hours per patient is a process optimization challenge, not a fundamental platform failure
Compensation: Being significantly underpaid isn't relevant to showcasing the work quality and scope
Difficult work environment: Doesn't need to be mentioned in professional materials - focus on accomplishments, not interpersonal dynamics
Lack of formal authority: Coordinated engineering team effectively without direct reports - this demonstrates influence and leadership

Solutions Engineer | CompoundLive | Feb 2023 - Sept 2024 (19 months)
Company Context: B2B SaaS white-label telehealth platform. Spun out from Rugiet Health to let other brands launch their own prescription telehealth services. Parent company: Onyx MP Growth. Later acquired by ListenCo.
Time Allocation: 75% of my working hours (simultaneous with Rugiet engineering role)
Role Description: Client-facing technical role supporting enterprise healthcare clients implementing CompoundLive platform. Responsible for solution design, custom implementations, technical documentation, and serving as liaison between clients and product development team.
Key Responsibilities:
Client Implementation & Support
Designed and demonstrated tailored telehealth solutions for enterprise clients
Conducted technical discovery and validation sessions during sales cycles
Established technical feasibility and implementation roadmaps for complex healthcare compliance requirements
Created custom configurations for client-specific needs (intake forms, branding, workflow customization)
Technical Documentation & Communication
Developed comprehensive technical documentation including API guides and integration workflows
Conducted technical presentations and product demonstrations to C-level executives
Created client-facing materials explaining platform capabilities and compliance features
Maintained documentation on platform updates and new feature releases
Product Development Liaison
Translated client requirements into technical specifications for engineering team
Collected client feedback and advocated for product improvements
Tested new features and integrations before client rollout
Helped prioritize product roadmap based on client needs
Bespoke Customization
Made custom changes/updates to platform for specific client requirements
Worked directly in codebase to implement client-specific features (had some coding access in this role)
Ensured customizations maintained HIPAA compliance and platform integrity
Claimed Metrics (from resume):
"30% improvement in client satisfaction" (internal reviews)
"Reduced deployment time by 70% through streamlined integration frameworks" (from 5 months to 5 weeks)
"Contributing to 25% increase in deal closure rates through effective technical requirement translation"
Reality Check on Metrics: These came from my resume/LinkedIn but I don't have hard data to back them up. I did work with enterprise clients, I did help close deals, and implementations definitely got faster as we refined our process, but exact percentages are estimates.
Number of Clients: Unknown exactly, but worked with multiple enterprise healthcare clients implementing white-label telehealth platforms. Client types included other telehealth startups and established healthcare brands expanding into DTC prescription services.
Tools & Technologies:
CompoundLive platform (Ruby on Rails backend, React frontend)
AWS (platform hosting)
ClickUp (project management)
Slack (client communication)
Various healthcare APIs (DoseSpot, pharmacy networks, payment processors)
Skills Demonstrated:
Enterprise client management
Technical solution design
Healthcare compliance explanation (HIPAA, SOC 2, PCI DSS)
Sales enablement
Technical documentation
Client training and onboarding
Cross-functional coordination between sales, product, and engineering
What Worked:
Became the trusted technical advisor for multiple enterprise clients
Successfully helped close deals by establishing technical credibility
Learned how to translate business requirements into technical specifications
Developed deep understanding of telehealth platform operations
What Was Challenging:
Balancing client demands with product roadmap priorities
Managing expectations when platform had limitations
Working simultaneously with engineering role (context switching)

Software Engineer | Rugiet Health (Onyx MP Growth) | Feb 2023 - Sept 2024 (19 months)
Company Context: Direct-to-consumer telehealth platform focused on men's health (sexual health, hormone optimization). Platform called "Bufo V2". Same parent company (Onyx MP Growth) that owned CompoundLive. Later acquired by ListenCo.
Time Allocation: 25% of my working hours (simultaneous with CompoundLive Solutions Engineer role)
Title: IC2 Software Engineer (Individual Contributor, Level 2 - junior/mid-level)
Role Description: Junior full-stack engineer working on Ruby on Rails telehealth platform. Shipped approximately 25% of ticket volume compared to other engineers due to time split with Solutions Engineer role.
What Actually Happened: This was my first real software engineering job post-bootcamp (aside from LEARN Academy instructor role). I was hired as junior engineer at Rugiet, then as CompoundLive spun up as B2B SaaS offering, I transitioned to spending most of my time on Solutions Engineering for CompoundLive clients while maintaining some engineering work on Rugiet platform.
Both roles were in same building, same office, same parent company. I would code in the morning, then jump on client calls in the afternoon, then back to code reviews or tickets.
Technical Contributions:
Feature Development
Implemented product features using Ruby on Rails, Stimulus.js (JavaScript framework), and PostgreSQL
Developed custom solutions for multi-client customization workflows
Built features that enabled successful onboarding for 5 of 6 new enterprise clients (per my resume - this was likely CompoundLive clients, not Rugiet customers)
Healthcare Compliance
Led HIPAA-compliant development practices during code reviews
Resulted in claimed "8% reduction in security-related bug reports" (per resume, can't verify exact number)
Learned healthcare data handling best practices
API Integration Work
Integrated OpenWeather API for delivery optimization (package shipping)
Claimed "10% reduction in shipping overhead" (per resume, likely estimate)
Built internal Sales CRM to optimize customer relationship management
Agile Process Improvement
Championed implementation of 2-week sprint cycles with structured retrospectives
Claimed "16% increase in sprint point completion" (per resume, likely estimate)
Participated in daily standups, sprint planning, retrospectives
Team Structure:
Part of 10+ person engineering team
Participated in code reviews
Some mentoring of more junior team members (though I was only IC2 myself)
Used ClickUp for project management and ticket tracking
Tech Stack:
Ruby on Rails (backend)
Stimulus.js / JavaScript (frontend)
PostgreSQL (database)
Git/GitHub (version control)
AWS (infrastructure)
HIPAA-compliant data processing practices
Skills Demonstrated:
Full-stack web development
Healthcare application development
HIPAA compliance implementation
API integration
Agile/Scrum methodology
Code review practices
Database design (PostgreSQL)
What Worked:
Successfully transitioned from bootcamp grad/instructor to professional engineer
Learned Ruby on Rails in production environment
Gained healthcare domain expertise
Developed understanding of telehealth platform architecture
What Was Challenging:
Balancing two roles (engineering + solutions)
Only shipping 25% of normal ticket volume made me feel less productive than other engineers
Context switching between coding and client work
Junior level meant limited architecture decision-making authority
Why I Left: Parent company (Onyx MP Growth) was acquired by ListenCo. After acquisition process completed, I decided to pursue the Hedfirst/Teligant opportunity with Kelly Smith instead of staying with the acquired entity.

Full Stack Web Development Lead Instructor | LEARN Academy | Apr 2021 - Feb 2023 (23 months)
Company Context: Coding bootcamp in Austin, Texas teaching full-stack web development. Intensive 3-month program with 480+ hours of hands-on training.
Career Progression:
Associate Instructor: Apr 2021 - Jan 2022 (10 months)
Lead Instructor: Jan 2022 - Feb 2023 (13 months)
Role Description: Led comprehensive technical education program delivering full-stack development training. Progressed from assistant instructor to lead instructor responsible for curriculum delivery, student assessment, and team mentorship.
Key Responsibilities:
Curriculum Development & Delivery
Designed and delivered 120+ comprehensive lectures covering:
React (frontend framework)
Ruby on Rails (backend framework)
JavaScript (programming language)
Node.js (JavaScript runtime)
PostgreSQL (database)
RESTful API development
Git/GitHub (version control)
Object-oriented programming principles
HTML5 & CSS (web fundamentals)
Student Assessment & Mentorship
Conducted 200+ code reviews across multiple cohorts
Managed 450+ student assessments via GitHub Classroom
Administered 50+ technical interviews with actionable feedback
Taught 170+ students across 9 cohorts
Team Leadership (as Lead Instructor)
Mentored assistant instructors on classroom management and technical knowledge development
Coordinated curriculum improvements based on student outcomes
Maintained teaching quality and consistency across cohorts
Outcomes:
95% student satisfaction rate
85% student transition rate into tech roles within 6 months of graduation
Why This Role Matters: This wasn't just teaching - I was reinforcing my own technical fundamentals by teaching them. I learned how to explain complex concepts clearly, how to debug other people's code, and how to mentor junior developers. These skills directly translated to my later roles in Solutions Engineering and Product Management where I needed to explain technical concepts to non-technical stakeholders.
Why I Left: Wanted to transition back into hands-on software engineering. Got offer from Rugiet Health and took it to gain real-world production experience.

Full Stack Mobile Developer (Intern) | Victorise | Aug 2020 - Jan 2021 (6 months)
Company Context: Startup building React Native mobile application for mountain biking, integrated with augmented reality wearables.
Role: Full-stack intern working on mobile app development
Key Project: Dead reckoning algorithm for mountain biking paths
Worked with GPS-recorded mountain biking trails
Developed time estimation algorithms based on recorded paths
Implemented trail visualization in React Native application
Attempted to calculate position estimation for riders on trails
Tech Stack:
React Native (mobile framework)
Node.js (backend)
MongoDB (database)
GPS data processing
Augmented reality integration concepts
Skills Developed:
Mobile app development
Algorithm development
GPS data manipulation
Real-world application of computer science concepts
Reality Check: This was really hard. I was a bootcamp grad with 5 months of training trying to build complex algorithms for GPS positioning. I struggled but learned a lot about working on technically challenging problems beyond my skill level.
Why I Left: My mother passed away. I took 6 months off from work to grieve and process. When I returned to job searching, I went back to LEARN Academy as an instructor rather than continuing in mobile development.

Full Stack Web Developer | LEARN Academy | Apr 2020 - Aug 2020 (5 months)
Company Context: Student at coding bootcamp learning full-stack web development
Program Details:
Fully remote full-stack web development bootcamp
480+ hours of hands-on coding experience over 3 months
Created 15+ web development projects
Completed 1 Capstone project
Delivered 1 TechTalk presentation
Technologies Learned:
React (frontend)
Ruby on Rails (backend)
JavaScript
PostgreSQL (database)
HTML5 & CSS
Git/GitHub
Full-stack development principles
Computer science fundamentals
Why This Matters: This was my entry into tech. Before this, I was a team leader at Philz Coffee with no technical background. This bootcamp gave me the foundation for everything that followed.

Team Leader | Philz Coffee | Nov 2016 - Apr 2020 (3.5 years)
Company Context: Specialty coffee company focused on personalized customer experience
Career Progression:
Barista: May 2016 - Mar 2020
Team Leader: Nov 2016 - Apr 2020
Locations: Del Mar & Huntington Beach, California
Skills Developed:
Team leadership and coordination
Customer service excellence
Training and mentoring staff
Operations management
High-pressure environment management
People skills that later translated to stakeholder management
Why I Left: COVID-19 lockdowns began. I decided to pursue a career change into technology rather than return to hospitality post-pandemic. Enrolled in LEARN Academy coding bootcamp.

Education
Full Stack Web Development Certificate
 LEARN Academy | 2020
 San Diego, California
Core Technologies: React, Ruby on Rails, JavaScript, SQL, Git, PostgreSQL, RESTful API Development
Note: This is my only formal technical education. No CS degree. Everything else learned on the job or self-taught.

Technical Skills Inventory
Programming Languages & Frameworks
Proficient:
JavaScript (5 years)
React (5 years)
Ruby on Rails (3 years)
SQL/PostgreSQL (5 years)
HTML5/CSS3 (5 years)
Familiar:
Next.js (used for prototyping)
Node.js (bootcamp + early projects)
Stimulus.js (used at Rugiet)
Tools & Platforms
Daily Use:
Jira (product management, sprint planning)
Confluence (documentation)
Slack (communication)
Git/GitHub (version control)
ClickUp (project management at Rugiet/CompoundLive)
Regular Use:
AWS (platform understanding, not infrastructure expertise)
Figma (reviewing designs, not creating)
Vercel (hosting prototypes)
Experienced With:
Docker (basic understanding)
PostgreSQL (database design)
Healthcare-Specific Technologies
DoseSpot (e-prescribing platform) - API integration and coordination
Surescripts (prescription network) - understanding of protocols
Choose Health API (lab testing integration)
LegitScript (regulatory compliance platform)
ShipStation (fulfillment integration)
PayTheory (payment processing)
Product Management Skills
Jira epic and ticket creation
User story writing with acceptance criteria
Sprint planning and backlog management
API documentation analysis and requirements extraction
Database schema design
Technical specification writing
Stakeholder coordination
Regulatory compliance translation (HIPAA, LegitScript, SOC 2)
Healthcare Domain Knowledge
HIPAA compliance requirements
Telehealth platform operations
E-prescribing workflows (non-controlled substances)
Pharmacy network coordination
Healthcare regulatory landscape (state-by-state)
Clinical workflow understanding
Provider network management concepts
Healthcare data standards (basic understanding)

Key Projects Portfolio (Interview Talking Points)
1. Complete Healthcare Platform Launch (Hedfirst/Teligant) ⭐⭐⭐
Situation: Kelly Smith (founder with background at Starbucks, MGM Resorts, Athletic Greens) wanted to build next-generation telehealth platform incorporating AI diagnostic capabilities, compounding pharmacy network, and comprehensive patient care - going beyond limitations of existing telehealth platforms.
Task: Lead product strategy for building complete multi-tenant healthcare SaaS platform from concept to production launch, coordinating engineering team, managing third-party integrations, ensuring regulatory compliance, and delivering production-ready platform serving real patients.
Action:
Defined multi-tenant SaaS architecture (Teligant) enabling white-label deployment for multiple healthcare brands
Designed order hierarchy system (3-tier structure with parent orders and typed sub-categories) handling complex healthcare transactions
Coordinated 8+ third-party API integrations: DoseSpot (e-prescribing), SureScripts (pharmacy network), Choose Health (lab testing with 7 endpoints + webhooks), PayTheory (recurring billing), ShipStation (fulfillment), LegitScript (compliance)
Led LegitScript certification process for multi-state healthcare operations
Classified 499 medications across 20+ disease states with complete marketing materials for 39 disease state consultation services
Created Universal AI Medical Assessment template (13-section clinical framework) integrating Claude 4 Sonnet via AWS Bedrock with HIPAA BAA
Shipped 150+ features across patient experience, doctor workflows, store administration, pharmacy integration, lab testing, AI assessment, and membership management
Built interactive React prototypes demonstrating complex workflows for engineering team
Result:
Platform launched August 4th, 2025 to real patients with live prescriptions and operational pharmacy fulfillment
25 beta patients in AI Care Membership program at launch
499 medications operational across multi-state prescription network
39 disease state consultation services with complete product catalog
Platform achieves 92% diagnostic accuracy with AI enhancement (Stanford Medicine benchmark: 74-76% for physicians alone)
Successfully navigated HIPAA compliance, LegitScript certification, multi-state regulatory requirements
Created scalable multi-tenant architecture supporting future white-label deployments
What I Learned:
Healthcare product development requires balancing clinical workflow requirements with regulatory compliance and technical feasibility simultaneously
Interactive prototypes dramatically reduce implementation ambiguity - engineers can see exact requirements before writing code
Third-party API integrations in healthcare are rarely plug-and-play; each requires deep understanding of data models, compliance requirements, and vendor-specific quirks
Strategic product decisions early (like order hierarchy system) create foundation that either enables or constrains everything built afterward
Speed matters in startups, but getting regulatory compliance right the first time is non-negotiable in healthcare
2. Pharmacy Fulfillment Workflow System ⭐⭐⭐
Situation: Doctors were manually creating prescriptions in DoseSpot with no systematic guidance on which pharmacy partner to use across 4 options (Crafted RX, Greenwich/Texas Performance Meds, Outreach RX, patient local pharmacy). This created prescription routing errors, missed prescriptions, duplicate sends to multiple pharmacies, and no audit trail for customer service.
Task: Design workflow system guiding doctors through systematic prescription routing without disrupting existing DoseSpot integration, while maintaining flexibility for manual overrides when needed.
Action:
Analyzed current workflow pain points through direct observation and doctor feedback
Designed pharmacy-by-pharmacy queue component positioned above DoseSpot iframe as manual workflow bridge
Created systematic pharmacy selection with "Mark Sent" status management and auto-advancement
Specified complete audit trail for prescription fulfillment tracking
Wrote 12 Jira tickets across 2 sprint cycles with detailed acceptance criteria
Built interactive React prototype demonstrating exact workflow for engineering team
Coordinated requirements with pharmacy partners
Planned two-phase rollout: Phase 1 (routing system) establishing foundation, Phase 2 (clinical review integration) for future enhancement
Result:
Eliminated prescription routing errors across pharmacy network
Created complete audit trail enabling customer service to track prescription status
Delivered functional system in 2-3 weeks from concept to production
Established foundation for later Clinical Review Tab transformation
Zero disruption to existing DoseSpot workflow during implementation
Pharmacy partners could track prescription routing systematically
What I Learned:
Sometimes the best solution isn't the most elegant - a "bridge" workflow can solve immediate problems while preserving future flexibility
Direct observation of user workflows reveals pain points that stakeholders don't articulate in requirements discussions
Interactive prototypes are worth the investment - engineers understood requirements immediately vs. weeks of back-and-forth on tickets
Phased rollout strategy allows delivering immediate value while building foundation for strategic improvements
Healthcare workflows must balance systematic processes with clinical judgment override capability
3. Order Hierarchy System (Platform Foundation) ⭐⭐⭐
Situation: Healthcare transactions have inherently complex structures: medications have recurring monthly fills, consultations spawn multiple appointments over time, memberships grant ongoing benefits, lab kits have separate ordering and results phases. Existing simple order numbering couldn't represent these relationships, making customer service tracking impossible and billing logic fragile.
Task: Design order hierarchy system that could represent complex healthcare transaction structures, maintain relationships between parent orders and recurring instances, enable customer service tracking, support automated billing triggers, and scale to future product types.
Action:
Analyzed all existing and planned product types to understand relationship patterns
Designed 3-tier hierarchy: Master order (#HF-XXXX) → Sub-categories (#HF-XXXX-X-Y) → Sub-sub categories (#HF-XXXX-X-Y-Z-W)
Defined sub-category types: -S (subscriptions), -C (consultations), -L (lab kits), -A (appointments), -M (memberships)
Specified sub-sub category types: -F (medication fills), -A (appointment instances) for recurring events
Created business logic for single checkout creating multiple sub-category items with sequential numbering
Defined billing triggers tied to order hierarchy (memberships charged at checkout, medications charged after provider approval)
Documented complete system architecture and numbering conventions
Worked with engineering on database schema implementation
Result:
Order hierarchy system successfully handles all product types across platform
Single checkout can create: membership, consultation, medication subscription, lab kit - all properly numbered and tracked
Customer service can trace complete order lifecycle including recurring instances
Billing logic clearly tied to order structure and approval workflows
System scaled to support appointment token addition 6 months after initial design
Appointment numbering (#HF-XXXX-A-Y) integrated cleanly into existing architecture
Complete audit trail for healthcare transactions supporting regulatory requirements
What I Learned:
Foundational system design decisions have cascading impact - getting this right early enabled rapid feature development later
Healthcare business logic is inherently complex; trying to oversimplify creates more problems than it solves
Good architecture should make future requirements feel natural, not forced - appointment integration working cleanly validated the design
Numbering conventions seem trivial but become critical for customer service and operational teams
Designing for "what we might need" (not just current requirements) pays off when done thoughtfully
4. Choose Health Lab Testing Integration ⭐⭐
Situation: Hedfirst was positioned as migraine-focused telehealth platform, limiting market opportunity and patient lifetime value. Leadership wanted to expand into comprehensive health monitoring and diagnostic capabilities, requiring integration with at-home lab testing provider Choose Health.
Task: Integrate Choose Health API enabling patients to order lab kits, register samples, track shipments, receive results, and have providers review findings - all within Hedfirst platform experience. Transform platform positioning from single-condition treatment to comprehensive health partner.
Action:
Analyzed complex designer mockups and broke down into discrete implementation phases
Studied Choose Health API documentation: 7 REST endpoints plus webhook system for real-time result delivery
Designed patient portal Labs tab: kit ordering, registration workflow, tracking integration, results viewing with 7-year retention
Created store admin lab management: Choose Health panel selection, patient lab tracking, results integration with patient profiles
Specified webhook processing requirements for automated result delivery and provider notifications
Defined HIPAA-compliant data storage architecture meeting 7-year medical record retention requirement
Created product catalog content for 6 lab test panels targeting complex conditions (Comprehensive Metabolic Health $99, Inflammation & Immune Function $125, Hormone Balance $145, etc.)
Wrote 13 implementation tickets across design, backend, admin interfaces, and patient experience
Integrated lab testing with AI Medical Assessment Membership for comprehensive diagnostic capabilities
Result:
Created entirely new revenue stream through lab testing partnership (pricing $99-$145 per panel)
Transformed Hedfirst positioning from migraine treatment to comprehensive health monitoring platform
Established foundation for preventive care and ongoing patient health tracking
Enabled AI Medical Assessment to incorporate actual diagnostic data vs. self-reported symptoms only
Positioned platform for expansion into multiple disease states with objective testing capability
Built scalable architecture supporting additional lab panel additions
What I Learned:
Strategic product decisions (like lab integration) require understanding business positioning impact, not just technical implementation
Healthcare integrations require meticulous attention to compliance requirements - 7-year retention isn't negotiable
API documentation quality varies dramatically; some vendors require extensive clarification conversations
Breaking complex features into discrete phases prevents engineering team overwhelm and enables iterative delivery
Product catalog content matters - lab test descriptions needed to communicate value to patients unfamiliar with metabolic panels
5. Provider Appointment System (24-Ticket Epic) ⭐⭐
Situation: AI Care Membership included 2 free provider appointments annually, but platform had no scheduling system. Patients needed ability to purchase additional follow-up appointments. Required HIPAA-compliant video conferencing, appointment lifecycle management, and integration with existing order hierarchy and membership benefits systems.
Task: Design and specify complete appointment system spanning appointment tokens, scheduling interface, Zoom API integration, order number assignment, and cross-platform appointment management across Patient Admin, Doctor Admin, and Store Admin.
Action:
Designed complete patient flow from mockup analysis: empty state → purchase modal → appointment token → scheduling calendar → time selection → details entry → confirmation
Created appointment token system where purchased appointments require scheduling, tokens maintain lifecycle status (Needs Scheduling, Scheduled, Completed, Cancelled)
Integrated appointments into order hierarchy as standalone A category (#HF-XXXX-A-Y) working for both free membership appointments and paid follow-ups
Specified Zoom API integration requirements for HIPAA-compliant video conferencing with automated meeting creation and calendar invitations
Wrote Epic MT-1602 containing 24 implementation tickets across:
Backend: Zoom API setup, provider scheduler mapping, token creation, appointment management (10 tickets)
Frontend: UI across Patient Admin, Doctor Admin, Store Admin (9 tickets)
Tab indicators: Notification badges for appointment updates across interfaces (4 tickets)
Testing: Zoom integration, scheduling flow, appointment lifecycle (1 ticket)
Built interactive React prototype demonstrating end-to-end patient appointment flow
Coordinated implementation across 3 admin interfaces ensuring consistent experience
Result:
Complete appointment system delivered enabling membership benefit fulfillment and additional revenue through follow-up purchases
Appointment tokens automatically created when membership purchased (2 per membership)
Order numbers assigned at token creation enabling customer service tracking through entire lifecycle
Zoom integration providing HIPAA-compliant video conferencing
Cross-platform coverage ensuring appointments manageable from Patient Admin (self-service), Doctor Admin (provider view), and Store Admin (concierge support)
System integrated cleanly with existing order hierarchy without architectural changes
What I Learned:
Breaking large features into properly-scoped tickets is skill requiring deep understanding of system architecture and dependencies
24 tickets sounds like overengineering, but each ticket had clear scope and delivered specific value - better than 3 massive tickets
Interactive prototypes demonstrating end-to-end flows are invaluable for complex multi-system features
Cross-platform features require thinking through all user perspectives simultaneously (patient, provider, admin)
Getting order numbering integration right early saved weeks of rework later

Career Narrative & Positioning
The Story Arc
Act 1: Hospitality to Tech (2016-2021) Started in hospitality, became a team leader, then made career pivot into technology during COVID. Attended coding bootcamp, completed internship, lost mother, returned as bootcamp instructor to solidify fundamentals while recovering.
Act 2: Software Engineer to Solutions Engineer (2021-2024) Transitioned from instructor to junior software engineer at telehealth startup (Rugiet). As company evolved and spun out B2B SaaS platform (CompoundLive), naturally moved into hybrid role: 25% engineering, 75% solutions engineering. Discovered I loved the intersection of technical and business problem-solving.
Act 3: Product Management in Healthcare (2024-2025) Leveraged deep telehealth domain expertise and technical background to transition into product management. Led product strategy for new healthcare AI platform (Hedfirst/Teligant) from concept to beta launch. Coordinated engineering team through 150+ features in 9 months while managing complex healthcare regulatory requirements.
What's Next: Looking for mid-level Technical Product Manager role at healthcare technology company where I can leverage my unique combination of engineering background + healthcare domain expertise + rapid execution capability.
Unique Value Proposition
What makes me different from other PM candidates:
Healthcare Domain Depth (3 years focused experience):


Achieved LegitScript healthcare certification independently
Navigate HIPAA compliance, multi-state prescription requirements, pharmacy network coordination, medical record retention policies
Understand e-prescribing workflows (DoseSpot/SureScripts), compounding pharmacy operations, clinical documentation requirements
Can read medical terminology, disease state classifications, medication protocols
Managed 499 medication catalog across 20+ disease states with complete regulatory compliance
Technical Credibility (engineering background + ongoing prototype development):


Read API documentation and extract implementation requirements (integrated 8+ healthcare APIs)
Build functional React prototypes demonstrating complex workflows (pharmacy fulfillment, appointment scheduling, clinical review interfaces)
Design database schemas for complex healthcare data (order hierarchies, patient profiles, subscription management)
Write technical specifications engineers respect because they understand constraints, not just business wishes
Created NestJS PostgreSQL migrations for production data updates
Rapid Execution in Startup Environments:


Shipped 150+ features in 9 months coordinating 4-person engineering team
Platform launch concept-to-production in 9 months (August 4th, 2025 go-live)
Created 24-ticket epic (appointment system) with proper scoping and dependencies
Designed foundational systems (order hierarchy) enabling future features without architectural changes
Built interactive prototypes reducing implementation ambiguity and engineering back-and-forth
Full-Cycle Healthcare Product Experience:


Engineering (building): Built features in Ruby on Rails at Rugiet Health
Solutions (implementing): Helped enterprise clients deploy CompoundLive platform
Product (defining): Led product strategy for Hedfirst from concept through launch
This gives me empathy for all stakeholders and understanding of complete product lifecycle
Regulatory Compliance Navigation:


Led LegitScript certification process independently
Designed HIPAA-compliant AI integration (Claude 4 Sonnet via AWS Bedrock with BAA and zero retention)
Managed multi-state prescription requirements across 48 states
Understood pharmacy network coordination, controlled substance restrictions, medical record retention
Created compliance documentation for 7-year medical record storage requirements
Strategic Product Architecture:


Designed order hierarchy system handling complex healthcare transactions (3-tier structure now used platform-wide)
Created Universal AI Medical Assessment template (13-section clinical framework)
Architected disease state classification for 499 medications enabling future product expansion
Built multi-tenant SaaS platform supporting white-label deployments
Concrete Examples:
API Integration Depth: Integrated DoseSpot (e-prescribing), SureScripts (pharmacy network), Choose Health (7 endpoints + webhooks), PayTheory (recurring billing), ShipStation (fulfillment), LegitScript (compliance)
Prototype Quality: Built functional React prototypes on Vercel demonstrating pharmacy fulfillment workflow, appointment scheduling flow, clinical review interface - engineers could implement directly from prototypes
Healthcare Sophistication: Classified 499 medications across disease states, created marketing materials for 39 disease state consultation services, achieved LegitScript certification
Technical Specification Writing: 24-ticket epic for appointment system with clear scoping, 13 tickets for lab integration, 12 tickets for pharmacy fulfillment - all delivered successfully
Speed: Platform launch in 9 months with comprehensive feature set spanning e-commerce, clinical workflows, AI integration, regulatory compliance
Honest Assessment of Limitations
Where I'm still developing:
Only 2 years of true product management experience
Haven't worked at large tech companies (all startups/small companies)
Limited experience with successful, scaled products (Hedfirst only reached 25 beta patients)
No formal product management education or certification
Haven't managed people directly (coordinated teams but no direct reports)
What I need in my next role:
Senior PM mentor who can help me level up
Company with some product-market fit (not pure 0-to-1 startup)
Clear product processes I can learn from
Healthcare domain so I can leverage existing expertise

Interview Preparation
How to Explain Short Tenure at Hedfirst
Question: "You were only at Hedfirst for 9 months. What happened?"
Answer: "Hedfirst was an early-stage startup building a healthcare AI platform from concept to production. I joined specifically for the intensive build phase - we went from initial architecture to production launch on August 4th, 2025 in just 9 months. During that time, I shipped 150+ features spanning pharmacy fulfillment, AI integration, lab testing, appointment scheduling, and membership management. We successfully launched with 499 medications across 39 disease states, achieved LegitScript certification, and got real patients using the platform with live prescriptions being fulfilled.
Once we completed the platform build and launched to production with beta patients, the company made a strategic decision to reduce the team to minimal operational staff while they refined their go-to-market strategy and secured next funding round. That's a normal startup inflection point - moving from intensive build phase to operational phase requires different team composition. I was part of the team reduction along with most of the engineering team, which gave me a clean opportunity to look for a role where I can work on a more established product with clearer product-market fit and growth trajectory."
Key elements:
Frame as successful project completion (concept to launch in 9 months)
Emphasize scope of work (150+ features, complex integrations, regulatory compliance)
Acknowledge startup reality (funding-driven team changes are normal)
Show you learned from experience
Redirect to what you're looking for next (established product, clearer PMF)
Don't badmouth the company or leadership
Follow-up if they ask about platform success: "We launched with 25 beta patients to validate the AI diagnostic process and membership model. The platform was fully functional - prescriptions were being fulfilled, AI assessments were being generated, patients were using the service. The challenge was that the AI diagnostic process was taking longer than anticipated (8 hours per patient interaction), which required process optimization before scaling marketing investment. That's actually a common early-stage healthcare AI challenge - the technology works, but operational workflows need refinement for scale. The company wanted to figure that out with a smaller team before expanding."
How to Explain Simultaneous Roles at Rugiet/CompoundLive
Question: "Your resume shows you worked as both a Software Engineer and Solutions Engineer simultaneously. How did that work?"
Answer: "That was actually a natural evolution. I started as a junior software engineer at Rugiet Health, which was a direct-to-consumer men's health telehealth platform. As we grew, the company saw demand from other healthcare brands wanting to launch their own telehealth services, so we spun out CompoundLive as a B2B SaaS platform. Because I understood the platform deeply from building it, I naturally moved into a client-facing role helping enterprise clients implement it. I was splitting my time about 25% engineering on the Rugiet product and 75% solutions engineering for CompoundLive clients. It was the same parent company, same office, same team - just two different roles serving different customer segments. It taught me a lot about seeing both sides of the platform: building features as an engineer and then helping clients actually use those features successfully."
Key elements:
Make it sound natural, not confusing
Show it was intentional company strategy
Emphasize learning from both perspectives
Demonstrates versatility
How to Position Engineering Background for PM Roles
Question: "You have an engineering background. Why transition to product management?"
Answer: "I realized through my Solutions Engineer role that I loved the strategic side as much as the execution side. When I was helping clients implement our platform, I wasn't just configuring settings - I was understanding their business problems, translating them into technical requirements, and working with our engineering team to prioritize solutions. I found myself thinking more about 'what should we build and why' rather than 'how do we build this specific feature.' My engineering background is a huge asset in product management because I can read API documentation, understand technical constraints, write detailed specifications, and have credible conversations with engineers about tradeoffs. But my passion is figuring out what problems to solve, not just solving them technically."
Key elements:
Show intentional transition, not rejection of engineering
Demonstrate PM mindset (what/why not just how)
Frame engineering background as advantage
Show self-awareness about interests
How to Address Lack of PM Training
Question: "You don't have formal product management training. How did you develop PM skills?"
Answer: "I learned product management by doing it in increasingly complex environments. At CompoundLive as Solutions Engineer, I was constantly translating client business requirements into technical specifications and managing stakeholder expectations across sales, engineering, and clients. That taught me the core PM skill of being the bridge between business and technical. At Hedfirst, I took that further - I was defining product strategy, writing detailed Jira tickets with acceptance criteria, coordinating a 4-person engineering team, managing regulatory compliance requirements, and working with third-party vendors like DoseSpot and LegitScript. I created prototypes, defined database schemas, analyzed API documentation, and planned sprint deliverables. I'd say I learned PM skills the way many people learn engineering - by shipping real products in production environments and learning from mistakes along the way. That said, I'm actively seeking to learn from experienced senior PMs and would love to work somewhere with established product processes I can absorb."
Key elements:
Show concrete PM work, not just theory
Demonstrate technical depth
Show humility and desire to learn
Frame lack of formal training as non-issue

Salary & Compensation Expectations
Target: $150,000 base salary
Realistic Range: $120,000 - $150,000 depending on:
Company stage (earlier stage = lower cash, possibly more equity)
Company location (remote vs. SF/NYC = pay difference)
Role level (Associate PM vs. Mid-level PM)
Healthcare domain (healthcare tech often pays less than pure tech)
Negotiation Strategy:
Lead with value, not desperation
Emphasize healthcare domain expertise (rare in PM population)
Highlight technical credibility (can prototype, read API docs, understand architecture)
Show rapid execution track record
Be willing to take $120-130K at right company with growth path
Minimum Acceptable: $110,000 (but only if exceptional learning opportunity)

Target Companies & Roles
Ideal Company Profile
Healthcare technology companies (telehealth, health tech, healthcare AI)
Series A/B funding stage (some validation, but still fast-moving)
Remote-first or Austin-based
20-200 employees (small enough to have impact, large enough to have structure)
Strong technical team I can learn from
Senior PM who can mentor me
Ideal Role Characteristics
Mid-level Technical Product Manager
Healthcare domain focus (leverage existing expertise)
Working with engineering teams to ship features
Some ambiguity but not complete 0-to-1 chaos
Clear product processes to learn from
Room for growth to senior PM level
Companies to Research
Healthcare AI/ML companies
Telehealth platforms (competitors to what I've built)
Health insurance tech companies
Clinical workflow optimization tools
Healthcare data platforms
Red Flags to Avoid
Pure 0-to-1 startups with no product-market fit (been there, done that)
Companies with no senior PM to learn from
Non-healthcare domains where I'd be starting from scratch on domain knowledge
Roles requiring 5+ years PM experience (stretch but not realistic)
Companies in financial distress

Current Status & Next Steps
As of September 29, 2025:
Left Hedfirst mid-September 2025 (approximately 2-3 weeks ago)
Recovering from COVID-19 and subsequent sinus infection (on Levofloxacin)
Actively interviewing but taking time to fully recover
Not under immediate financial pressure
Available for contract/fractional work if right opportunity
Recent Interviews:
Autonomize AI: Received positive feedback but role requirements changed to need prior authorization insurance experience (highly specific domain expertise, not general PM skills) - this wasn't a rejection of my qualifications but rather a shift in what they were hiring for
Recovery Timeline:
Have 2-3 more weeks to fully recover health-wise
Using recovery time for career development: creating portfolio documentation, potentially pursuing PM certification, building out LinkedIn presence
Ready for interviews but prioritizing recovery and thoughtful job search over rushed decisions
Job Search Strategy:
Targeting mid-level Technical Product Manager roles at healthcare technology companies
Focus on Series A/B startups (validated product, growth phase, but still fast-moving)
Seeking companies with senior PM mentorship and established product processes
Healthcare domain preferred to leverage existing expertise
Remote-first or Austin-based preferred
Realistic timeline: Secure role within 1-2 months once fully recovered
Career Development Options During Recovery:
Product management certification (considering but not immediately necessary)
Portfolio projects showcasing PM skills (this document is one example)
Networking in healthcare PM community through LinkedIn and industry events
Building comprehensive case studies from Hedfirst work for portfolio website
Reaching out to former colleagues and connections for introductions
Financial Situation:
Not under immediate pressure (have runway)
This allows for selective job search focusing on right fit vs. taking first offer
Open to contract/fractional work ($100-125/hour = $150K+ annually equivalent) as alternative to full-time if compelling opportunity
What I'm Looking For:
Company stage: Series A/B with some product-market fit (not pure 0-to-1 chaos)
Product type: Healthcare technology where I can leverage domain expertise
Team structure: Senior PM mentor available, established product processes to learn from
Role level: Mid-level Technical Product Manager (not junior, not senior)
Compensation: $120K-150K base salary range (healthcare tech realistic expectations)
Growth path: Clear path to senior PM level within 2-3 years
Culture: Fast-moving but not chaotic, values execution and learning
Red Flags to Avoid:
Pure 0-to-1 startups with no product-market fit (been there, experienced the funding challenges)
Companies with no senior PM to learn from
Non-healthcare domains where I'd be starting from scratch on domain knowledge
Roles requiring 5+ years PM experience (unrealistic for my background)
Companies in financial distress or without clear path to profitability
