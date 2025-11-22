Product Management & Configuration
PM-001: Add Escalating Dose Protocol Treatment Type
Add "Escalating dose protocol" option to treatment type dropdown and implement conditional form field display logic when selected.
PM-002: Implement Protocol Configuration Fields for Product Variants
Add protocol-specific fields to variant forms: current dosage, phase duration, billing cycle (days), billing offset, auto-advance toggle, next variant selection.
PM-003: Create Variant-to-Variant Association Table
Design and implement database join table to link product variants for protocol progression (variant_id → next_variant_id relationship).
PM-004: Backend API for Protocol Variant Relationships
Create CRUD endpoints for managing variant progression relationships and validation logic to prevent circular references.
Payment System Overhaul
PAY-001: Implement Custom Billing Cycle Configuration
Replace fixed billing cycle dropdowns with configurable "every X days" system supporting 28-day and other custom intervals.
PAY-002: PayTheory GraphQL Integration for Scheduled One-Time Payments
Integrate PayTheory GraphQL API for automated one-time payment processing instead of recurring billing subscriptions.
PAY-003: Payment Scheduling Engine
Build system to calculate and schedule payment dates based on custom billing cycles with configurable lead time offsets.
PAY-004: Payment Processing Cron Job
Create scheduled job to process due payments, handle failures, and trigger subscription progression logic.
Subscription Protocol Engine
SUB-001: Protocol Progression Logic Backend
Implement core engine to determine when/how to advance patients through protocol phases based on variant relationships.
SUB-002: Maintenance vs Escalation Detection
Create logic to differentiate between escalation progression (variant A → variant B) and maintenance mode (variant A → variant A).
SUB-003: Next Subscription Instance Creation
Build system to automatically create new subscription instances for next protocol phase while maintaining billing continuity.
SUB-004: Protocol State Management
Track protocol progress, phase completion, and transition history for each patient subscription.
Frontend Subscription Management
UI-001: Enhanced Subscription Details Interface
Update subscription pages to display protocol-specific information: current phase, timeline, next progression date.
UI-002: Protocol Timeline Visualization
Create visual progress tracking showing completed phases, current phase, and upcoming phases with dates.
UI-003: Maintenance Transition Controls
Add "Transition to Maintenance" button and modal for doctor-initiated protocol changes.
UI-004: Protocol-Aware Pause/Resume Functionality
Modify existing pause/resume to preserve protocol state and timeline positioning.
Data Migration & Validation
DATA-001: Existing Subscription Migration Strategy
Plan and execute migration of existing subscriptions to support new protocol fields without disruption.
DATA-002: Protocol Configuration Validation
Implement business rules validation to ensure protocol chains are complete and prevent invalid configurations.
DATA-003: Payment Cycle Migration for Existing Products
Convert existing fixed billing cycles to new configurable system while maintaining current customer schedules.
This breakdown covers all major components while keeping tickets focused and deliverable. Each ticket addresses specific functionality without creating dependencies that would block parallel development work.