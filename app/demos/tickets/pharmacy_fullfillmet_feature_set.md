HealthPlatform Pharmacy Fulfillment Feature - Complete Ticket Set
Project Overview
Multi-pharmacy fulfillment system enabling systematic prescription creation workflow across three pharmacy partners (Crafted RX, RX Outreach, TXPM/Greenwich) for both subscription and one-time purchase medications.

Phase 1: Foundation Tickets

MT-1716: FS - Store Admin - Physical Product Builder - Add Pharmacy Partner Selection
User Story:
As a Store Administrator,
I want to select pharmacy partners for products during creation and editing,
So that I can manage fulfillment relationships and ensure proper prescription routing to the appropriate pharmacy partner.
Business Requirements:

Add pharmacy partner selection field to product creation and editing forms
Default selection should be "Select a Pharmacy…" with validation error if not selected on save
Display pharmacy partner information in prescription requirement notifications
Migrate all existing products without pharmacy partner assignment to "RX Outreach"

Acceptance Criteria:

Pharmacy Partner dropdown field appears in highlighted blue section with options: "Crafted RX", "RX Outreach", "TXPM/Greenwich", "Empower Pharmacy", "Patient Choice Pharmacy"
Blue section styling matches interface design with blue-50 background and blue-200 border
When prescription requirement is enabled, yellow notice displays: "This product will require provider approval and will be fulfilled through the selected pharmacy partner: [Pharmacy Name]"
Pharmacy partner selection saves to product record and persists on form reload
Database schema updated to store pharmacy partner information for all products
API endpoints updated to handle pharmacy partner data in product creation and update requests
Validation error displays if pharmacy not selected: "Please select a pharmacy partner for this product"


MT-1600: BE - ShipStation Integration - Verify Product Type Filtering for New Product Types
User Story:
As a pharmacy partner receiving orders through ShipStation integration,
I want to only receive medication/prescription products for fulfillment,
So that I don't receive lab products or membership products that cannot be physically fulfilled.
Business Requirements:

ShipStation Custom Store XML endpoint must exclude membership products from order export
ShipStation Custom Store XML endpoint must exclude lab products (Choose Health) from order export
Only medication/prescription products should appear in ShipStation for pharmacy partner fulfillment
Mixed orders containing both medication and excluded product types should only show medication items in XML

Acceptance Criteria:

Service products do not appear in any ShipStation Custom Store XML response
Membership products do not appear in any ShipStation Custom Store XML response
Lab products do not appear in any ShipStation Custom Store XML response
Medication products continue to appear in ShipStation Custom Store XML response as expected
Orders containing only excluded product types do not appear in ShipStation XML
Mixed orders show only the medication items in ShipStation XML
Existing medication fulfillment workflow remains unchanged


MT-1729: BE - ShipStation Integration - Implement Multi-Pharmacy Order Filtering Service
User Story:
As a backend developer implementing multiple pharmacy ShipStation endpoints,
I want a shared service that filters orders by pharmacy assignments,
So that each pharmacy only receives orders for their assigned products.
Business Requirements:

Create shared filtering logic using product pharmacy assignments from MT-1716
Handle mixed orders by filtering line items to show only relevant pharmacy's products
Integrate with existing product type filtering from MT-1600
Support subscription fill identification (F-2, F-3, etc.) for refill tracking

Acceptance Criteria:

Filtering service accepts pharmacy partner identifier ("Crafted RX", "RX Outreach", "TXPM/Greenwich") and returns matching orders
Orders with products assigned to multiple pharmacies return only line items for specified pharmacy
Orders containing only products assigned to other pharmacies are excluded entirely
Service integrates with MT-1600 filtering to exclude membership products and lab products
Subscription IDs preserve fill number format (F-1, F-2, F-3, etc.) for pharmacy refill identification
Mixed orders maintain order-level customer and shipping data while filtering line items
Service handles date range filtering and pagination for ShipStation GET requests
Performance optimized for large order volumes and frequent API calls
Service handles both subscription orders (HP-1020-S-1) and one-time purchases (#HP-1250-OTP-1)


MT-1737: FS - Store/Doctor Admin - Subscriptions - Add Fulfillment Pharmacy Display to Subscription Detail View
User Story:
As a Store Admin or Doctor Admin,
I want to see which pharmacy partner will fulfill a subscription's orders,
So that I can understand the fulfillment workflow and ensure proper prescription routing.
Business Requirements:

Display pharmacy partner information inherited from the product in subscription detail views
Ensure pharmacy partner data flows from product creation to subscription records
Support both Store Admin and Doctor Admin interfaces with identical functionality

Acceptance Criteria:

Fulfillment Pharmacy field displays in subscription detail view with standard field styling matching other fields
Field shows pharmacy partner name (Crafted RX, RX Outreach, TXPM/Greenwich, Empower Pharmacy, Patient Choice Pharmacy)
Field appears after Dosage field and before Quantity field in the subscription detail layout
When subscription is created from product purchase, pharmacy partner is automatically inherited from product record
Existing subscriptions without pharmacy partner data default to "Crafted RX" when viewed
Database schema updated to store pharmacy_partner field in subscriptions table
API endpoints return pharmacy partner data in subscription detail responses
Both Store Admin and Doctor Admin subscription detail views display identical pharmacy information
Field is display-only (no editing capability in initial implementation)
Database migration backfills existing subscription records with pharmacy partner from associated product


Phase 2: Core Prescription Fulfillment System

MT-1875: BE - Doctor Admin - Complete Prescription Fulfillment System
User Story:
As a Doctor Admin user,
I want approved medications from both subscriptions and one-time purchases to automatically appear in a fulfillment queue with prescription tracking,
So that I can systematically create prescriptions in DoseSpot without missing or duplicating medications.
Business Requirements:

Add prescription tracking to both subscription and one-time purchase data models
Auto-populate fulfillment queue when orders are approved
Provide unified API for retrieving approved medications grouped by pharmacy
Support prescription status updates to prevent duplicate prescription creation

Acceptance Criteria:

Database adds prescription tracking fields to both subscription and one-time purchase tables: prescription_sent_date (datetime), prescription_sent_by (provider_id), prescription_fulfillment_status (enum)
Prescription status enum values: "Ready to Send", "Sent to Pharmacy", "Filled", "Completed"
When subscription status changes to "Active", medication automatically added to fulfillment queue with "Ready to Send" status
When one-time purchase status changes to "Active", medication automatically added to fulfillment queue with "Ready to Send" status
Membership products (subscriptions or one-time purchases) do not appear in fulfillment queue
API endpoint returns approved medications grouped by pharmacy: "Crafted RX", "RX Outreach", "TXPM/Greenwich"
API response includes: order ID (HP-1020-S-1 or #HP-1250-OTP-1), order type (Subscription/One-Time Purchase), medication name, dosage, quantity, supply, pharmacy assignment, pharmacy notes, dispensing notes, approval date, prescriber
Bulk status update endpoint accepts array of medication IDs for "Mark Sent" operations
Individual status update endpoint for single medication status changes
Foreign key relationship between prescription_sent_by and provider table
Migration handles existing active subscriptions and one-time purchases appropriately
Medications marked "Sent to Pharmacy" do not reappear in future queue requests
Subscription cancellation removes medications from fulfillment queue
Error handling for orphaned fulfillment records without valid subscriptions


MT-1876: FE - Doctor Admin - Complete Pharmacy Fulfillment Interface
User Story:
As a Doctor Admin user,
I want to see approved medications grouped by pharmacy above DoseSpot with pharmacy notes and copy-to-clipboard functionality,
So that I can work systematically through pharmacy partners and easily transfer prescription details into DoseSpot.
Business Requirements:

Display approved medications grouped by pharmacy partner above DoseSpot iframe
Show prescription fulfillment status and enable status tracking workflow
Display pharmacy notes and dispensing notes with copy-to-clipboard functionality
Support both subscription and one-time purchase medications in unified interface

Acceptance Criteria:

Component positioned directly above DoseSpot iframe in Doctor Admin Treatments tab
DoseSpot iframe size remains unchanged, component added above
Header shows "X of 3 pharmacy orders" with progress indicators (Green=completed, Blue=current, Gray=pending)
Current pharmacy name prominently displayed: "Crafted RX", "RX Outreach", "TXPM/Greenwich"
Table columns display: Order ID, Order Type, Medication, Pharmacy, Status, Pharmacy Notes, Dispensing Notes, Approval Date, Actions
Order ID column shows subscription format (HP-1020-S-1) and one-time purchase format (#HP-1250-OTP-1)
Order Type badge displays "Subscription" (blue) or "One-Time Purchase" (purple)
Pharmacy Notes column displays with copy-to-clipboard icon when content exists
Dispensing Notes column displays with copy-to-clipboard icon when content exists
Clicking copy icon copies full note text to clipboard with "Copied!" feedback for 2 seconds
Empty note fields display "--" with no copy icon
Copy functionality works across Chrome, Firefox, Safari, Edge browsers
Individual "Mark Sent" buttons for each medication
Bulk "Mark Sent (X)" button for selected medications
Auto-advance to next pharmacy when all current medications marked as sent
Previous/Next pharmacy navigation buttons with completion validation
Prescription Status field displays in subscription detail view with status badges
Status badges: Blue (Ready to Send), Yellow (Sent to Pharmacy), Green (Filled), Gray (No prescription required)
Membership subscriptions show "No prescription required" instead of status
Table responsive with horizontal scroll on smaller screens
Workflow instruction displays: "Send all medications for [Pharmacy] through DoseSpot below, then mark each as sent above"


MT-1874: FE - Doctor Admin - Pharmacy Fulfillment - Add Pharmacy Notes Display with Copy to Clipboard
User Story:
As a Doctor Admin user,
I want to see pharmacy notes and dispensing notes for each medication in the fulfillment queue with copy-to-clipboard functionality,
So that I can easily transfer detailed instructions into DoseSpot without manual retyping.
Business Requirements:

Display pharmacy notes and dispensing notes inherited from product configuration
Provide copy-to-clipboard functionality for quick DoseSpot entry
Support both subscription and one-time purchase medications
Integrate with existing pharmacy fulfillment queue workflow

Acceptance Criteria:

Pharmacy Notes column displays in fulfillment queue table with full text content
Dispensing Notes column displays in fulfillment queue table with full text content
Copy-to-clipboard icon appears next to both note fields when content exists
Clicking copy icon copies full note text to system clipboard
Visual feedback shows "Copied!" notification for 2 seconds after successful copy
Copy icon changes to checkmark icon during feedback period
Empty note fields display "--" with no copy icon
Notes display correctly for both subscription medications (HP-1020-S-1) and one-time purchases (#HP-1250-OTP-1)
Copy functionality works across all supported browsers (Chrome, Firefox, Safari, Edge)
Notes content preserves line breaks and formatting when copied
Table remains responsive with additional columns on smaller screens


Phase 3: ShipStation Integration

MT-1877: BE - ShipStation Integration - Multi-Pharmacy XML Export System
User Story:
As a pharmacy technician at any of our three pharmacy partners,
I want to receive medication orders through dedicated ShipStation Custom Store endpoints,
So that I can fulfill prescriptions assigned to our specific pharmacy.
Business Requirements:

Create three ShipStation Custom Stores for all pharmacy partners
Generate XML exports using unified filtering logic for pharmacy-specific products
Support both subscription and one-time purchase orders in all pharmacy feeds
Include refill tracking and pharmacy identification for all partners

Acceptance Criteria:

ShipStation Setup: Create three Custom Stores in ShipStation admin: "HealthPlatform Crafted RX", "HealthPlatform RXO", "HealthPlatform TXPM"
Store Configuration: Configure endpoints /api/shipstation/hedfirst-crafted-rx, /api/shipstation/hedfirst-rxo, /api/shipstation/hedfirst-txpm
Authentication Setup: Configure unique Basic HTTP credentials for each pharmacy Custom Store
Status Mapping: Map order statuses for all pharmacies (Unpaid, Paid, Shipped, Cancelled, On-Hold)
Each endpoint filters orders by pharmacy assignment using shared filtering service from MT-1729
XML includes both subscription orders (HP-1020-S-1) and one-time purchases (#HP-1250-OTP-1)
Uses product type filtering from MT-1600 to exclude membership and lab products from all pharmacy feeds
OrderNumber includes fill sequence (F-1, F-2, etc.) for subscription orders
F-2+ subscription orders include "-REFILL" suffix in OrderNumber
Item names formatted with HP prefix for all pharmacies (e.g., "HP-Sumatriptan 45mg")
F-2+ subscription orders include "-REFILL" suffix in item names (e.g., "HP-Sumatriptan 45mg-REFILL")
CustomField1 populated with pharmacy name ("Crafted RX", "RX Outreach", "TXPM/Greenwich")
CustomField2 populated with disease state for context
Pagination support with pages attribute in XML response for all endpoints
Returns empty XML structure when no matching orders found for date range
Test Connection: All three Custom Stores pass ShipStation "Test Connection" validation
Support ShipStation standard parameters (action=export, start_date, end_date, page)


MT-1878: BE - ShipStation Integration - Multi-Pharmacy Shipment Notification System
User Story:
As a system administrator,
I want to receive and process shipment notifications from all three pharmacy partners via ShipStation,
So that our system stays updated with fulfillment status and pharmacy feedback.
Business Requirements:

Handle POST requests from ShipStation when any pharmacy ships orders
Update order status and capture tracking information for both subscriptions and one-time purchases
Extract and store pharmacy notes for medical staff review from all pharmacy partners
Trigger patient notifications with shipping details regardless of pharmacy

Acceptance Criteria:

POST endpoints configured: /api/shipstation/hedfirst-crafted-rx, /api/shipstation/hedfirst-rxo, /api/shipstation/hedfirst-txpm
All endpoints accept ShipNotice XML with action=shipnotify
System identifies orders using OrderNumber/OrderID for both subscription (HP-1020-S-1) and one-time purchase (#HP-1250-OTP-1) formats
Order status updated to "Shipped" with tracking number and carrier information for all order types
ShipDate, TrackingNumber, and Carrier data stored for patient notifications
Pharmacy notes extracted from CustomerNotes, InternalNotes, and NotesToCustomer fields
CustomField data captured and linked to patient record with pharmacy source identification
Notes timestamped and flagged for doctor review in patient record
Returns 200 HTTP status code to confirm successful processing for all endpoints
Failed processing attempts logged with error details including pharmacy source
Patient notification triggered with tracking information regardless of originating pharmacy
Subscription refill tracking preserves fill sequence information (F-1, F-2, etc.)
Unified notification format regardless of which pharmacy fulfilled the order
Error handling for malformed XML or missing required fields