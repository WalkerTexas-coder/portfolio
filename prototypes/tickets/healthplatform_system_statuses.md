# HealthPlatform System Status Reference

## Main Order Statuses

**Lifecycle Progression:**
- **NULL** - Initial state, no processing started
- **FAILED** - Order creation or processing failed
- **NEW** - Order created successfully, pending processing
- **PROCESSING** - Order being processed through system workflows
- **AWAITING_REVIEW** - Requires clinical review and approval
- **APPROVED** - Clinically approved, ready for fulfillment
- **PAID** - Payment processed successfully
- **ACTIVE** - Order active and being fulfilled
- **SENT_TO_PHARMACY** - Prescription sent to pharmacy partner
- **ORDER_SHIPPED** - Package shipped to patient
- **PAUSED** - Temporarily suspended (user or admin action)
- **DENIED** - Clinically denied or rejected
- **EXPIRED** - Order expired without completion
- **CANCELED** - User or admin canceled order
- **COMPLETED** - Order fulfilled and delivered

## Sub-Order Statuses

### OTP (Over-the-Phone) Sub-Orders
- **NULL** - Not yet processed
- **FAILED** - Processing failure
- **NEW** - Created and ready for fulfillment
- **PAID** - Payment completed
- **SENT_TO_PHARMACY** - Sent for fulfillment
- **ORDER_SHIPPED** - Package shipped
- **COMPLETED** - Successfully delivered

### OTPRX (Prescription) Sub-Orders
- **NULL** - Initial state
- **FAILED** - Processing or approval failed
- **NEW** - Created, awaiting clinical review
- **AWAITING_REVIEW** - In clinical review queue
- **APPROVED** - Clinically approved for fulfillment
- **DENIED** - Clinical review denied
- **SENT_TO_PHARMACY** - Prescription sent to pharmacy
- **ORDER_SHIPPED** - Medication shipped
- **COMPLETED** - Delivered to patient

### Subscription Sub-Orders (S-#)
- **NULL** - Not yet activated
- **FAILED** - Subscription setup failed
- **NEW** - Created, pending activation
- **ACTIVE** - Subscription running normally
- **PAUSED** - Temporarily suspended
- **CANCELED** - Subscription terminated
- **COMPLETED** - Subscription cycle completed

### Refill Statuses
- **UPCOMING_PAYMENT** - Refill due, payment pending
- **PAID** - Refill payment processed
- **SENT_TO_PHARMACY** - Refill sent to pharmacy
- **ORDER_SHIPPED** - Refill package shipped
- **CANCELED** - Refill canceled
- **COMPLETED** - Refill delivered successfully

## Patient Statuses

**Account & Profile Management:**
- **PENDING** - Account creation in progress
- **ACTIVE** - Active patient account
- **INACTIVE** - Patient blocked by admin manually
- **BLOCKED** - Patient blocked due to wrong OTP authentication
- **DRAFT** - User entered email but hasn't started account creation
- **USER_CREATED** - Successfully checked out with an order
- **PASSWORD_SET** - Password established
- **PERSONAL_DATA_PROVIDED** - Profile information completed
- **ID_VERIFICATION_SENT** - Identity verification initiated
- **QUESTIONNAIRE_COMPLETED** - Health questionnaire finished
- **PATIENT_ACCEPTED** - Accepted into care program
- **ACTIVE_MEMBERSHIP** - Active membership status
- **DELETED** - Account deleted

## Provider Statuses

**Provider Account Management:**
- **PENDING** - Invite sent, pending acceptance
- **ACTIVE** - Invite accepted by the provider
- **INACTIVE** - Provider blocked by another admin manually
- **BLOCKED** - Provider blocked due to wrong OTP authentication

## External Integration Statuses

### PayTheory Payment Method
- **TOKENIZED** - Payment method successfully saved
- **ERROR** - Payment processing error

### ShipStation Fulfillment
- **AWAITING_SHIPMENT** - Order ready for shipping
- **SHIPPED** - Package in transit
- **PENDING_FULFILLMENT** - Awaiting fulfillment processing
- **ON_HOLD** - Shipment held for review
- **AWAITING_PAYMENT** - Payment required before shipment
- **CANCELED** - Shipping canceled

### ChooseHealth Lab Testing
- **AT_HOME** - Lab kit arrived at patient's location
- **TO_LAB** - Patient picked up kit and registered it
- **AT_LAB** - Lab received kit from patient
- **RESULT_AVAILABLE** - Lab processed patient's kit and provided results
- **RETURNED** - Something wrong with lab test or patient info, sent back
- **FAILURE** - Unknown error in processing

### Appointment Management
- **SCHEDULED** - Appointment booked and confirmed
- **COMPLETED** - Appointment finished
- **CANCELED** - Appointment canceled
- **NEEDS_SCHEDULING** - Appointment token purchased, needs scheduling
- **AWAITING_PROVIDER_ASSIGNMENT** - Provider assignment pending

## Administrative Statuses

### Admin Account Management
- **PENDING** - Invite sent, pending acceptance
- **ACTIVE** - Invite accepted by the admin
- **INACTIVE** - Admin blocked by another admin manually
- **BLOCKED** - Admin blocked due to wrong OTP authentication

### Consultation Statuses
- **NULL** - No consultation initiated
- **FAILED** - Consultation setup failed
- **NEW** - Consultation request created
- **PENDING** - Consultation scheduled, awaiting completion
- **PROCESSED** - Consultation completed
- **EXPIRED** - Consultation request expired

## Status Dependencies & Business Rules

### Prescription Workflow Gates
- Products with `requirePrescription=TRUE` → Must go through **AWAITING_REVIEW**
- Clinical approval required before **PAID** status for prescription items
- **DENIED** status terminates order processing

### Subscription Lifecycle Rules
- **ACTIVE** subscriptions generate automatic refills
- **PAUSED** status suspends billing but preserves subscription
- **CANCELED** status permanently terminates subscription

### Payment Status Dependencies
- **PAID** status required before pharmacy fulfillment
- Payment failures can trigger **PAUSED** or **CANCELED** statuses
- Refill payments must succeed for **ORDER_SHIPPED** status

### Integration Status Coordination
- ShipStation **SHIPPED** updates order to **ORDER_SHIPPED**
- PayTheory **ERROR** can trigger order **FAILED** status
- Lab **RESULT_AVAILABLE** triggers patient notification workflows

---

*Reference compiled from comprehensive system workflow documentation*