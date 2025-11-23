Frontend Ticket
Title: Add "Past Orders" Tab to Patient Subscriptions Interface
User Story:
As a patient viewing my subscriptions, I want to see a separate "Past Orders" tab so that I can access my historical orders (canceled, denied, completed, expired) without them cluttering my active subscription view.
Business Requirements:

Clean up the primary subscription tabs (Treatments, Non-Prescriptions, Membership) by removing non-active orders
Provide patients with complete transparency and access to their order history when needed
Reduce patient anxiety and confusion caused by seeing denied/failed orders mixed with active subscriptions
Maintain consistent UI patterns with existing tabs
Support all existing order status types in the new tab

Acceptance Criteria:

 Add "Past Orders" as the fourth tab in the subscription interface
 Tab should appear after "Membership" tab in the navigation
 "Past Orders" tab displays all orders with statuses: Denied, Canceled, Completed, Expired, Failed, Discontinued
 Table uses streamlined column structure: Master Order, Product, Order/Fill Date, Status, Value, Actions
 Remove "Billing Cycle" and "Next Billed Date" columns from Past Orders table (not applicable to historical orders)
 Status badges use appropriate color coding for each past order type
 Include explanatory text under product name showing reason for past status (e.g., "Denied by provider - dosage concerns")
 Actions menu (⋮) remains functional for past orders
 Tab switching preserves existing functionality
 Responsive design works on mobile and tablet
 Empty state displays appropriate message if no past orders exist
 Loading states work correctly when switching to Past Orders tab


Backend Ticket
Title: Implement Past Orders Filtering and Data Layer Support
User Story:
As a system, I need to properly categorize and serve past orders separately from active orders so that the frontend can display a clean "Past Orders" tab while maintaining access to complete order history.
Business Requirements:

Define clear business logic for what constitutes a "past order" vs active order
Ensure audit trail and compliance requirements are maintained for all order statuses
Support efficient querying of past orders without impacting active order performance
Maintain data integrity and consistency across order state transitions
Enable proper filtering for patient privacy (patients should only see their own past orders)

Acceptance Criteria:

 Implement backend support for past orders data retrieval
 Define "past orders" as orders with statuses: denied, canceled, completed, expired, failed, discontinued, transferred
 Modify existing subscription data layer to exclude past orders by default from active subscription queries
 Past orders data should return same structure as active subscription data
 Include cancellation_reason or status_reason field in past orders response for display under product name
 Implement proper pagination for past orders (default 50 items, max 200)
 Support filtering past orders by status type and date ranges
 Ensure proper authorization - patients can only access their own past orders
 Past orders are ordered by most recent first (descending order_date)
 Add database indexes for efficient past order queries
 Update order state transition logic to properly categorize new orders as "past" when appropriate
 Maintain backward compatibility - existing consumers are not affected
 Add appropriate logging for past order access for audit purposes
 Performance: Past orders query executes in <200ms for typical patient
 Add unit tests covering all past order status types and edge cases
 Add integration tests for past orders functionality