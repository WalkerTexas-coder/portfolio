# ShipStation API Integration - Complete Jira Tickets

## Epic: ShipStation Direct API Integration & Pharmacy Management System

---

## MT-1600: FS - Store Admin - Store Settings - Implement Pharmacy Management with ShipStation Integration

**User Story:**
As a store administrator,
I want to manage pharmacy partners and their ShipStation store mappings in Store Settings,
So that I can configure which ShipStation store receives orders for each pharmacy partner.

**Business Requirements:**
- Add "Pharmacies" tab to Store Settings with pharmacy partner management interface
- Store pharmacy details (name, address, phone, PIC, ShipStation store ID) for patient communication
- Provide ShipStation store ID mapping for automated order submission to correct pharmacy stores

**Acceptance Criteria:**
- New "Pharmacies" tab appears in Store Settings navigation alongside existing "Shipping rules" tab using top tab navigation pattern
- Add pharmacy form includes required fields: Pharmacy Name, Address, Phone Number, Pharmacist in Charge (PIC), ShipStation Store ID
- Form validation requires all fields with error message: "All fields are required to add a pharmacy"
- Pharmacy list displays all pharmacy details with edit/delete action buttons
- Edit functionality pre-populates form with existing pharmacy data for modification
- Delete functionality removes pharmacy with confirmation dialog: "Are you sure you want to delete [Pharmacy Name]? This action cannot be undone."
- Save button persists changes to database and updates Product Builder pharmacy dropdown
- Phone numbers stored for patient display during order fulfillment
- ShipStation Store ID validation ensures numeric format with error: "Store ID must be a valid number"
- Database schema includes pharmacies table with appropriate indexes and constraints
- **Integration with MT-1716**: Pharmacy list populates dropdown options in Product Builder pharmacy selection

---

## MT-1716: FS - Store Admin - Product Builder - Integrate Dynamic Pharmacy Selection

**User Story:**
As a store administrator,
I want to assign pharmacy partners to products during creation and editing from a managed list,
So that I can ensure proper prescription routing to the appropriate pharmacy partner.

**Business Requirements:**
- Integrate Product Builder with pharmacy data from MT-1600 Store Settings pharmacy management
- Require pharmacy assignment for prescription products with validation enforcement
- Display assigned pharmacy information in product prescription requirement notifications

**Acceptance Criteria:**
- Pharmacy Partner dropdown field appears in highlighted blue section with options dynamically populated from MT-1600 pharmacy management system
- Dropdown shows "Select a Pharmacy..." as default option
- Validation error displays on save if no pharmacy selected: "Pharmacy partner is required for prescription products"
- Blue section styling matches interface design with blue-50 background and blue-200 border
- When prescription requirement is enabled, yellow notice displays: "This product will require provider approval and will be fulfilled through the selected pharmacy partner: [Pharmacy Name]"
- Pharmacy partner selection saves to product record and persists on form reload
- **Migrate all existing products without pharmacy partner assignment to "RX Outreach"**
- Products database schema updated to include pharmacy_id foreign key linking to MT-1600 pharmacy records
- Product API endpoints (create/update) handle pharmacy assignment data in request/response
- Dropdown options refresh automatically when pharmacies are added/modified in MT-1600 without requiring page reload
- Non-prescription products (memberships, lab tests, services) do not require pharmacy assignment
- **Depends on MT-1600**: Requires pharmacy management system for data source

---

## MT-1897: FS - Store Admin - Product Variants - Add Pharmacy Notes and Patient Directions Fields

**User Story:**
As a store administrator,
I want to add pharmacy notes and patient directions to product variants,
So that providers can send complete compounding and dispensing instructions when creating prescriptions in DoseSpot.

**Business Requirements:**
- Add Pharmacy Notes text field to each product variant for internal pharmacy compounding instructions
- Add Patient Directions text field to each product variant for patient medication usage instructions
- Support text field storage and retrieval for all existing and new product variants

**Acceptance Criteria:**
- Pharmacy Notes field appears on product variant configuration with placeholder text "Insert Pharmacy Notes..."
- Patient Directions field appears on product variant configuration with placeholder text "Insert Patient Directions..."
- Both fields use same gray color as other light gray placeholder text in product variant interface
- Both fields accept multi-line text input with character limit of 750
- Fields save successfully when variant is created or updated
- Existing variants display empty fields that can be populated and saved
- API endpoints support storing and retrieving pharmacy_notes and patient_directions for each variant
- Database schema includes pharmacy_notes and patient_directions columns on product variants table
- Fields maintain data integrity across variant updates and product modifications

---

## MT-1737: FS - Store/Doctor Admin - Subscriptions - Add Fulfillment Pharmacy Display to Order Detail View

**User Story:**
As a store administrator or doctor administrator,
I want to see which pharmacy partner will fulfill a subscription or OTP order,
So that I can understand the fulfillment workflow and ensure proper prescription routing.

**Business Requirements:**
- Display pharmacy partner information inherited from the product in subscription detail views
- Ensure pharmacy partner data flows from product creation to subscription records
- Support both Store Admin and Doctor Admin interfaces with identical functionality

**Acceptance Criteria:**
- Fulfillment Pharmacy field displays with standard field styling matching other fields in subscription detail view
- Fulfillment Pharmacy field displays in OTP detail view with same styling
- Field shows pharmacy partner name (Crafted RX, RX Outreach, TXPM/Greenwich, Patient Choice Pharmacy)
- Field appears after Dosage field and before Quantity field in the subscription detail layout
- When subscription is created from product purchase, pharmacy partner is automatically inherited from product record
- Database schema updated to store pharmacy_partner field in subscriptions table
- API endpoints return pharmacy partner data in subscription detail responses
- Both Store Admin and Doctor Admin subscription detail views display identical pharmacy information
- Field is display-only (no editing capability in initial implementation)
- Database migration backfills existing subscription records with pharmacy partner from associated product

---

## MT-1875: BE - Doctor Admin - Prescription Fulfillment - Implement Complete Prescription Fulfillment System

**User Story:**
As a doctor administrator,
I want approved medications from both subscriptions and one-time purchases to automatically appear in a fulfillment queue with prescription tracking,
So that I can systematically create prescriptions in DoseSpot without missing or duplicating medications.

**Business Requirements:**
- Add prescription tracking to both subscription and one-time purchase data models
- Auto-populate fulfillment queue when orders are approved
- Provide unified API for retrieving approved medications grouped by pharmacy

**Acceptance Criteria:**
- Database adds prescription tracking fields to both subscription and one-time purchase tables: prescription_sent_date, prescription_sent_by, prescription_fulfillment_status
- Prescription status enum values: "Ready to Send", "Sent to Pharmacy", "Filled", "Completed"
- When subscription status changes to "Active", medication automatically added to fulfillment queue with "Ready to Send" status
- When one-time purchase status changes to "Active", medication automatically added to fulfillment queue with "Ready to Send" status
- Membership products (subscriptions or one-time purchases) do not appear in fulfillment queue
- API endpoint returns approved medications grouped by pharmacy: "Crafted RX", "RX Outreach", "TXPM/Greenwich"
- API response includes: order ID (HP-1020-S-1 or #HP-1250-OTP-1), order type, medication name, dosage, quantity, supply, pharmacy assignment, pharmacy notes, dispensing notes, approval date, prescriber
- Bulk status update endpoint accepts array of medication IDs for "Mark Sent" operations
- Individual status update endpoint for single medication status changes
- Foreign key relationship between prescription_sent_by and provider table
- Migration handles existing active subscriptions and one-time purchases appropriately
- **Refill Integration**: Refill orders appear in fulfillment queue when PayTheory status transitions from "Upcoming payment" to "Paid"

---

## MT-1876: FE - Doctor Admin - Prescription Fulfillment - Implement Complete Pharmacy Fulfillment Interface

**User Story:**
As a doctor administrator,
I want to see approved medications grouped by pharmacy above DoseSpot with pharmacy notes and copy-to-clipboard functionality,
So that I can work systematically through pharmacy partners and easily transfer prescription details into DoseSpot.

**Business Requirements:**
- Display approved medications grouped by pharmacy partner above DoseSpot iframe
- Show prescription fulfillment status and enable status tracking workflow
- Display pharmacy notes and dispensing notes with copy-to-clipboard functionality

**Acceptance Criteria:**
- Component positioned directly above DoseSpot iframe in Doctor Admin interface
- Header shows "X of 3 pharmacy orders" with progress indicators (Green=completed, Blue=current, Gray=pending)
- Current pharmacy name prominently displayed: "Crafted RX", "RX Outreach", "TXPM/Greenwich"
- Table displays: Order ID (HP-1020-S-1 or #HP-1250-OTP-1), Order Type badge (Subscription/One-Time Purchase), medication name, dosage, pharmacy badge, status, approval date, pharmacy notes, dispensing notes, actions
- Pharmacy Notes column displays with copy-to-clipboard icon when content exists
- Dispensing Notes column displays with copy-to-clipboard icon when content exists
- Clicking copy icon copies full note text to clipboard with "Copied!" feedback notification
- Empty note fields display "--" with no copy icon
- Individual "Mark Sent" buttons for each medication
- Bulk "Mark Sent (X)" button for selected medications
- Auto-advance to next pharmacy when all current medications marked as sent
- Prescription Status field displays in subscription detail view: "Ready to Send", "Sent to Pharmacy: [date] by [provider]", "No prescription required"
- Status badges: Blue (Ready to Send), Yellow (Sent to Pharmacy), Green (Filled), Gray (No prescription required)
- Previous/Next pharmacy navigation with completion validation
- Copy functionality works across all supported browsers
- Table remains responsive with horizontal scroll on smaller screens
- **Refill Display**: Refill orders (F-2, F-3, etc.) display with proper identification and support F-X-REFILL formatting when marking as sent

---

## MT-1729: BE - ShipStation Integration - Implement Direct API Order Submission with Pharmacy Routing

**User Story:**
As a system processing approved prescriptions,
I want to submit orders directly to ShipStation via API using pharmacy store mappings,
So that each pharmacy receives only their assigned orders in the awaiting shipment queue.

**Business Requirements:**
- Replace Custom Store XML endpoints with direct ShipStation API integration for order submission
- Submit orders when prescriptions are marked as "Sent to Pharmacy" using pharmacy store ID mapping from Store Settings
- Filter orders by product type (medication only) and pharmacy assignment before submission

**Acceptance Criteria:**
- ShipStation API integration submits orders using `/orders/createorder` endpoint with Basic HTTP authentication
- Orders filtered to include only medication/prescription products (exclude membership, lab, service products)
- Each order submitted to correct ShipStation store based on product pharmacy assignment from MT-1716 and Store Settings pharmacy management (MT-1600)
- Order numbers maintain existing format: subscription orders (HP-1020-S-1-F-1) and one-time purchases (#HP-1250-OTP-1)
- Refill orders (F-2+) include "-REFILL" suffix in item names for pharmacy identification
- Orders submitted to "awaiting_shipment" queue status in ShipStation
- Item names formatted with HP prefix for pharmacy identification (e.g., "HP-Sumatriptan 45mg")
- Customer and shipping address data properly formatted for ShipStation order structure
- Order payload includes internal notes with pharmacy name and processing metadata
- Error handling captures API failures with logging: "ShipStation API Error: [status code] - [error message]"
- Mixed orders split by pharmacy assignment - each pharmacy gets separate ShipStation order
- **Trigger**: "Mark Sent" action in MT-1876 triggers ShipStation API submission
- **Depends on MT-1600 and MT-1716** for pharmacy store mapping functionality

---

## MT-1877: BE - ShipStation Integration - Implement Unified Webhook Handler for Pharmacy Shipment Notifications

**User Story:**
As a system tracking order fulfillment,
I want to receive shipment notifications from all pharmacy partners via unified ShipStation webhook,
So that order status updates and patient notifications are processed regardless of which pharmacy fulfilled the order.

**Business Requirements:**
- Create single webhook endpoint to handle shipment notifications from all pharmacy ShipStation stores
- Update order status and capture tracking information for both subscription and one-time purchase orders
- Extract pharmacy notes and trigger patient notifications with shipping details

**Acceptance Criteria:**
- Single webhook endpoint `/api/webhooks/shipstation` accepts POST notifications from all pharmacy ShipStation stores
- Webhook processes SHIP_NOTIFY events using two-step pattern: receive payload → GET resource_url for full shipment details
- System identifies orders using OrderNumber format for both subscriptions (HP-1020-S-1-F-1) and one-time purchases (#HP-1250-OTP-1)
- Order status updated to "Shipped" with tracking number, carrier, and ship date information
- Shipment tracking data stored for patient notification system integration
- Pharmacy notes extracted from CustomerNotes, InternalNotes, and NotesToCustomer fields in shipment response
- Notes timestamped and flagged for doctor review in patient record with pharmacy source identification
- Returns 200 HTTP status within 10 seconds to confirm successful webhook processing
- Failed processing logged with error details: "Webhook Processing Error: [order_id] - [error message]"
- Patient notification triggered with tracking information regardless of originating pharmacy store
- Subscription refill tracking preserves fill sequence information (F-1, F-2, etc.) from order numbers
- Webhook authentication validates ShipStation source and processes legitimate notifications only
- Support for multiple webhook retries from ShipStation (up to 3 attempts per notification)

---

## MT-1878: BE - ShipStation Integration - Configure API Credentials and Webhook Setup

**User Story:**
As a system administrator,
I want to configure ShipStation API credentials and webhook subscriptions,
So that the direct API integration can communicate with ShipStation for order submission and shipment notifications.

**Business Requirements:**
- Configure ShipStation API credentials for production integration
- Set up webhook subscriptions for SHIP_NOTIFY events from all pharmacy stores
- Validate API connectivity and webhook processing functionality

**Acceptance Criteria:**
- ShipStation API key and secret configured in production environment with proper encryption
- API connection testing validates authentication and store access with success message: "ShipStation API connection successful"
- Connection failure displays error: "ShipStation API connection failed: [error details]"
- SHIP_NOTIFY webhook subscriptions created for all pharmacy ShipStation stores
- Webhook subscriptions point to `/api/webhooks/shipstation` endpoint with proper target URL
- Test order submission to each pharmacy store validates correct routing and queue placement
- Test webhook notifications validate proper payload processing and order status updates
- API rate limiting handled gracefully with retry logic (max 40 requests per minute per ShipStation limits)
- Production deployment includes environment-specific configuration management
- Documentation created for API credential rotation and webhook management procedures
- Integration testing validates end-to-end flow: prescription approval → order submission → webhook notification → status update
- **Depends on MT-1600 and MT-1716** for pharmacy store mapping functionality
- **Coordinates with MT-1729 and MT-1877** for complete API integration functionality

---

## Implementation Order

**Phase 1 - Foundation:**
1. MT-1600 (Pharmacy Management)
2. MT-1716 (Product Builder Integration)

**Phase 2 - Provider Experience:**
3. MT-1897 (Pharmacy Notes)
4. MT-1737 (Fulfillment Pharmacy Display)
5. MT-1875 (Backend Fulfillment System)
6. MT-1876 (Frontend Fulfillment Interface)

**Phase 3 - ShipStation Integration:**
7. MT-1729 (API Order Submission)
8. MT-1877 (Webhook Handler)
9. MT-1878 (API Configuration)

---

## Notes

**Refill Logic**: Comprehensive refill logic documentation exists elsewhere and does not need to be addressed in this implementation phase. The existing PayTheory recurring payment system handles all refill scheduling, payment validation, and status transitions. The ShipStation API integration hooks into existing status changes without requiring refill logic modifications.