# Admin Order Creation Modal - Jira Tickets

## Epic Overview
Enable Store Admins and Prescribers to create comprehensive patient orders containing multiple product types (prescriptions, consultations, memberships, lab tests) from within the patient profile, with intelligent consultation auto-add logic and flexible cart management.

---

## Ticket 1: Backend API Foundation

**Title:** BE - Store Admin - Orders - Implement Order Creation API with Multi-Item Support

**User Story:**

As a store administrator,
I want to create patient orders containing multiple product types through a single API call,
So that I can efficiently build comprehensive orders without multiple separate transactions.

**Business Requirements:**

- Create order endpoint accepting array of child items with varying product types
- Generate parent order ID (HP-XXXX) with appropriate child item IDs (subscriptions, one-time purchases)
- Validate product/variant combinations and patient eligibility before order creation
- Return complete order summary with payment breakdown by charge timing

**Acceptance Criteria:**

- POST /api/orders/create accepts patient_id, items array, shipping_address_id, and payment_method_id
- Each item in array includes product_type, product_id, variant_id, and quantity
- Response includes generated order_id in format "HP-[sequential number]"
- Subscription items generate child IDs in format "HP-XXXX-S-1"
- API validates that prescription items have valid disease state associations
- Invalid product/variant combinations return error: "Invalid product configuration. Please verify product and variant selection."
- Missing required fields return error: "Required field missing: [field_name]"
- Successful creation returns full order object with payment_breakdown containing immediate_charges, pending_approval, and recurring_charges arrays

---

## Ticket 2: Frontend Modal Structure

**Title:** FE - Store Admin - Patient Orders - Implement Order Creation Modal with Single Column Layout

**User Story:**

As a store administrator,
I want to access an order creation modal from a patient's Orders tab,
So that I can build and review orders in a clean, scrollable interface.

**Business Requirements:**

- Add "New order" button to patient Orders tab that opens modal
- Implement single-column modal layout with product selection above order summary
- Display patient context (name) in modal header with close functionality
- Support vertical scrolling for longer order lists

**Acceptance Criteria:**

- "New order" button appears in Orders tab header with blue styling and plus icon
- Modal opens centered with dark overlay background
- Modal header displays "Create New Order" with patient name and X close button
- Modal content scrolls vertically when content exceeds viewport (max-height: 90vh)
- Modal closes when clicking X button or pressing Escape key
- Modal width is max-w-2xl (672px) for comfortable reading
- Order ID displays as "HP-[auto-generated]" in gray text until order creation

---

## Ticket 3: Product Selection Interface

**Title:** FE - Store Admin - Patient Orders - Implement Cascading Product Selection Dropdowns

**User Story:**

As a store administrator,
I want to select products through intuitive cascading dropdowns,
So that I can navigate product categories and variants efficiently.

**Business Requirements:**

- Implement product type dropdown with conditional disease state display
- Filter products based on selected disease state for applicable product types
- Display variant options with pricing and billing type indicators
- Include quantity input for applicable products

**Acceptance Criteria:**

- Product Type dropdown displays options: "Physical Products (Prescriptions)", "Services & Consultations", "Memberships", "Lab Tests"
- Disease State dropdown appears only for Physical Products and Services
- Disease State options include: "Migraine", "Weight Management", "Men's Health", "Women's Health", "General Health"
- Product dropdown filters to show only products matching selected disease state
- Memberships and Lab Tests skip disease state selection and show products directly
- Variant dropdown displays format: "[variant name] - $[price][/cycle or /month if recurring]"
- Quantity input appears after variant selection with minimum value of 1
- "Add to Order" button enables only when product and variant are selected
- Button click adds item to cart and resets all selection fields to empty state

---

## Ticket 4: Product Search Functionality

**Title:** FE - Store Admin - Patient Orders - Implement Quick Product Search with Cross-Category Results

**User Story:**

As a store administrator,
I want to search for products by name across all categories,
So that I can quickly find and add products without navigating multiple dropdowns.

**Business Requirements:**

- Add search input above category dropdowns with real-time results
- Search across all product types and display results with category badges
- Highlight matching text in search results
- Auto-populate selection fields when search result is selected

**Acceptance Criteria:**

- Search input displays placeholder: "Type to search products (e.g., 'Sumatriptan', 'Weight', 'Men's')..."
- Search results appear after typing 2+ characters
- Results dropdown shows maximum 8 matching products
- Each result displays product name, disease state (if applicable), and product type badge
- Matching text highlighted with yellow background (bg-yellow-200)
- Results header shows count: "[X] product(s) found"
- Clicking result sets product_type, disease_state, and product fields automatically
- Variant dropdown receives focus after search selection
- X button in search field clears search and closes results
- Clicking outside results dropdown or pressing Escape closes it
- No results message displays: "No products found matching '[search term]'"
- Divider text "— or browse categories —" separates search from dropdowns

---

## Ticket 5: Auto-Consultation Logic

**Title:** BE - Store Admin - Patient Orders - Implement Consultation Auto-Add with Patient History Check

**User Story:**

As a store administrator,
I want consultations automatically added when adding prescriptions for new disease states,
So that clinical compliance requirements are met without manual tracking.

**Business Requirements:**

- Check patient consultation history when prescription items are added to cart
- Auto-add disease-state-specific consultation if no consultation exists within past year
- Track consultation history updates during cart building session
- Support consultation removal with history state management

**Acceptance Criteria:**

- Adding prescription checks patient_consultation_history for matching disease_state
- If no consultation within 365 days, system auto-adds corresponding consultation:
  - Migraine → Migraine Consultation ($25)
  - Weight Management → Weight Management Consultation ($75)
  - Men's Health → Men's Health Consultation ($50)
  - Women's Health → Women's Health Consultation ($60)
- Auto-added consultations include isAutoAdded: true flag in item data
- Consultation history updates in session when consultation is auto-added
- Removing auto-added consultation resets history to allow re-triggering
- Adding second prescription in same disease state does not add duplicate consultation
- Removing last prescription in disease state also removes its auto-added consultation
- Non-prescription products (memberships, lab tests, services) do not trigger auto-add logic

---

## Ticket 6: Cart Display and Management

**Title:** FE - Store Admin - Patient Orders - Implement Order Summary with Item Management

**User Story:**

As a store administrator,
I want to view and manage items in my order before creation,
So that I can review, modify, and remove items as needed.

**Business Requirements:**

- Display cart items with product details, pricing, and type badges
- Visually distinguish auto-added consultations from manually added items
- Support item removal with appropriate consultation cleanup
- Show contextual messages for items requiring approval

**Acceptance Criteria:**

- Empty cart displays dashed border box with text: "No items added yet"
- Each cart item displays in bordered card with product name, variant, quantity, and price
- Product type badge uses color coding: Physical (blue), Service (green), Membership (purple), Lab (yellow)
- Auto-added items display with blue background (bg-blue-50) and border (border-blue-200)
- Auto-added items show "(Auto-added)" label next to product name
- Auto-added items show message: "Required consultation for [disease state] prescriptions"
- Prescription subscriptions show amber message: "Requires prescriber approval before billing"
- Delete button (trash icon) appears for all items including auto-added
- Deleting auto-added consultation updates consultation history state
- Deleting last prescription in disease state also removes associated auto-added consultation
- Price displays with appropriate suffix: "/cycle" for subscriptions, "/month" for recurring memberships

---

## Ticket 7: Payment Breakdown and Order Completion

**Title:** FE - Store Admin - Patient Orders - Implement Payment Breakdown and Order Creation Flow

**User Story:**

As a store administrator,
I want to see a clear breakdown of charges by timing and complete the order,
So that I understand what will be charged immediately versus after approval.

**Business Requirements:**

- Display payment breakdown organized by charge timing
- Show shipping and payment method selection when required
- Validate required fields before enabling order creation
- Provide clear order creation button with disabled state handling

**Acceptance Criteria:**

- Payment Breakdown section appears below cart items with header "Payment Breakdown"
- Immediate Charges section shows total with label "Due at checkout" for one-time non-prescription items
- Pending Approval section lists prescription subscriptions with label "Charged after prescriber approval"
- Subscription Charges section shows recurring prescription items with "/cycle" pricing
- Recurring Charges section shows membership items with "/month" pricing and label "Starts after initial payment"
- Shipping Address dropdown appears only when cart contains physical products or lab tests
- Shipping options display patient's saved addresses with "Select shipping address" placeholder
- Payment Method dropdown appears only when cart contains items requiring immediate payment
- Payment options display patient's saved cards in format "**** **** **** [last 4] ([brand])"
- "Create Order" button spans full width with blue styling
- Button disabled (gray, cursor-not-allowed) when: cart empty, shipping required but not selected, payment required but not selected
- Button enabled when all required fields are complete

---

## Ticket 8: Integration and Error Handling

**Title:** FS - Store Admin - Patient Orders - Implement Order Creation Integration with Error Handling

**User Story:**

As a store administrator,
I want order creation to handle errors gracefully and provide clear feedback,
So that I can resolve issues and successfully complete orders.

**Business Requirements:**

- Connect frontend modal to order creation API endpoint
- Handle success state with order confirmation and modal close
- Display appropriate error messages for various failure scenarios
- Preserve cart state during transient errors

**Acceptance Criteria:**

- Clicking "Create Order" sends POST request to /api/orders/create with cart data
- Loading state displays on button during API call: "Creating Order..."
- Successful creation closes modal and refreshes Orders tab to show new order
- Success toast notification displays: "Order HP-[XXXX] created successfully"
- Network error displays message: "Unable to connect. Please check your internet connection and try again."
- Server error (500) displays message: "Something went wrong. Please try again later."
- Validation error displays specific message from API response
- Inventory error displays message: "One or more items are currently unavailable. Please review your order."
- Cart state preserved on error to allow retry without re-adding items
- Error messages display in red alert box above "Create Order" button

---

## Implementation Sequence

**Phase 1 - Foundation (Sprint 1):**
- Ticket 1: Backend API
- Ticket 2: Modal Structure

**Phase 2 - Core Functionality (Sprint 1-2):**
- Ticket 3: Product Selection
- Ticket 6: Cart Display

**Phase 3 - Enhanced Features (Sprint 2):**
- Ticket 4: Product Search
- Ticket 5: Auto-Consultation Logic

**Phase 4 - Completion (Sprint 2):**
- Ticket 7: Payment Breakdown
- Ticket 8: Integration and Error Handling

---

## Dependencies

- Existing patient profile and Orders tab infrastructure
- Product catalog API with disease state associations
- Patient consultation history API
- Patient saved addresses and payment methods APIs
- PayTheory integration for subscription/recurring item handling

---

## Success Metrics

- Order creation time reduced by 50% compared to current subscription-only flow
- Admin can create multi-item orders without leaving patient profile
- Auto-consultation compliance rate maintained at 100% for new disease state prescriptions
- Error rate for order creation below 2%
