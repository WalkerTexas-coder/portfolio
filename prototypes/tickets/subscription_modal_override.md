Perfect! Now let me write the Jira tickets for this pricing override feature:

## Jira Ticket 1

**Title:** FE - Store Admin - Add New Subscription - Implement Pricing Override UI with Product Card Integration

**User Story:**
As a store administrator,
I want to override pricing for subscriptions in special circumstances,
So that I can create zero-cost or reduced-cost subscriptions when business requirements demand it.

**Business Requirements:**
• Add "Update Price" button within product variant display card
• Override fields expand inline within product card when activated  
• Show original price struck through when override is active
• Require both override price and justification reason for submission

**Acceptance Criteria:**
• "Update Price" button appears next to price in product variant card
• Clicking button toggles to "Override Active" state with amber styling
• Override price input accepts decimal values including 0.00
• Override reason textarea is required when override is enabled
• Original price shows struck through when override price is entered
• Override warning message: "Price override will be logged for audit purposes"
• Form validation prevents submission without both override price and reason
• Payment method section displays "Payment method not required for $0.00 subscriptions" when applicable
• Payment method dropdown is disabled when override price is 0.00

---

## Jira Ticket 2

**Title:** BE - Store Admin - Subscription Orders - Implement Pricing Override Business Logic and Data Management

**User Story:**
As a store administrator,
I want subscription pricing overrides to persist through the entire subscription lifecycle,
So that special pricing applies to all future refills automatically.

**Business Requirements:**
• Store override pricing separately from product variant pricing
• Override pricing must persist to all future subscription refills
• Support pricing override for all order types (subscriptions, one-time, lab kits, memberships)
• Maintain original variant pricing for audit and reporting purposes

**Acceptance Criteria:**
• Override price and reason are captured and stored with order/subscription
• Original product variant price is preserved unchanged  
• Future subscription refills automatically use override pricing
• Override data includes admin user, timestamp, and justification reason
• Zero-dollar orders are marked as valid and processable
• Override pricing applies regardless of order type (subscription, one-time, lab kit, membership)
• Database design allows for efficient querying of override vs standard pricing
• Override audit trail is maintained for compliance reporting

---

## Jira Ticket 3

**Title:** BE - Payment Processing - Implement Conditional PayTheory Integration for Override Pricing

**User Story:**
As a store administrator,
I want zero-dollar subscription orders to bypass payment processing but still grant access and fulfillment,
So that we can provide free treatments while maintaining normal fulfillment workflows.

**Business Requirements:**
• Skip PayTheory payment creation for zero-dollar orders
• Process fulfillment and access grants for zero-dollar orders
• Zero-dollar subscriptions still generate refill schedules without payments
• Non-zero override pricing follows standard PayTheory workflow

**Acceptance Criteria:**
• Orders with override_price = 0.00 bypass PayTheory payment creation
• Zero-dollar orders still trigger normal fulfillment workflows
• Zero-dollar subscription orders generate future refill schedule without payment events
• Orders with override_price > 0.00 process through standard PayTheory flow
• Access control systems recognize zero-dollar orders as valid and grant appropriate access
• Fulfillment systems process zero-dollar physical products for shipment
• Membership access is granted for zero-dollar membership subscriptions
• Payment failure logic does not apply to zero-dollar orders
• Subscription management interfaces correctly display zero-dollar subscription status

Jira Ticket 4
Title: FE - Store Admin - Order Details - Display Pricing Override Information and Audit History
User Story:
As a store administrator,
I want to see pricing override details on order detail pages,
So that I can verify override pricing decisions and maintain audit transparency.
Business Requirements:

Display original price vs override price in Order Summary section
Show override reason and admin details in dedicated section
Add pricing override event to History timeline with full audit details
Maintain clear visual distinction between standard and override pricing

Acceptance Criteria:

Order Summary "Product price" field shows both original and override pricing when applicable
Format: "$42.18 $0.00" (original price struck through, override price displayed)
New "Pricing Override" section appears between Order Summary and Payment Details when override exists
Pricing Override section displays:

"Override Price: $0.00"
"Original Price: $42.18"
"Reason: [override reason text]"
"Applied by: [Admin Name]"
"Applied on: [timestamp]"


History timeline includes pricing override event with format:

"[Date/Time] Pricing overridden by [Admin Name]"
"Original price: $42.18 → Override price: $0.00"
"Reason: [override reason text]"


Payment Details section reflects override pricing in subtotal and total calculations
Override information is clearly visually distinguished with amber/warning styling
Standard orders without overrides display normally without additional sections
Override details are read-only on order detail view