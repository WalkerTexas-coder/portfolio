Ticket 1
Title: BE - Doctor Admin - Provider Licensing - Create Prescription Delegation API Endpoints
User Story:
As a prescriber,
I want the system to validate my licensing status when reviewing prescriptions,
So that I can only approve prescriptions in states where I am licensed to prescribe.
Business Requirements:

Create endpoint to check provider licensing against patient state
Create endpoint to retrieve providers licensed in a specific state
Create endpoint to submit prescription delegation request with required note

Acceptance Criteria:

GET /api/providers/licensing-check accepts provider_id and patient_state parameters
Response returns { isLicensed: boolean, licensedStates: string[] }
GET /api/providers/by-state/{state} returns array of providers licensed in that state
Response excludes requesting provider from results
POST /api/prescriptions/{id}/delegate accepts target_provider_id and delegation_note (required)
Delegation note must be minimum 20 characters; validation error message: "Delegation note must be at least 20 characters"
Empty delegation note returns error: "Clinical rationale is required when delegating prescriptions"
Successful delegation returns delegation_id and creates provider chat room
All endpoints require authenticated prescriber role


Ticket 2
Title: FE - Doctor Admin - Treatments - Implement Dynamic Approval Button Based on Provider Licensing
User Story:
As a prescriber,
I want to see the appropriate action button based on my licensing status,
So that I am guided toward compliant prescription workflows.
Business Requirements:

Display "Approve" button when provider is licensed in patient's state
Display "Send to another provider" button when provider is not licensed
Show licensing status indicator on prescription review screen

Acceptance Criteria:

On prescription detail page load, system checks provider licensing against patient state
If licensed: green "Approve" button displays with existing approval flow
If not licensed: indigo "Send to another provider" button displays in place of Approve
Yellow alert box displays when not licensed with text: "Provider Licensing Required - You are not licensed to prescribe in [STATE]. This prescription must be delegated to a state-licensed provider."
"Deny request" button displays in both scenarios
Provider licensing status displays in prescription detail: "Licensed in [STATE]" (green) or "Not licensed in [STATE]" (red)
Button state updates if patient state changes without page refresh


Ticket 3
Title: FE - Doctor Admin - Treatments - Build Provider Selection Delegation Modal
User Story:
As a prescriber,
I want to select from available state-licensed providers and provide context,
So that I can delegate prescriptions with appropriate clinical rationale.
Business Requirements:

Display modal with providers licensed in patient's state
Require clinical rationale note before delegation can complete
Show provider licensing details in selection list

Acceptance Criteria:

Clicking "Send to another provider" opens modal with title "Send to Licensed Provider"
Modal displays text field labeled "Delegation Note (Required)" with placeholder "Provide clinical rationale for this prescription..."
Modal displays section labeled "Select Provider Licensed in [STATE]"
Each provider option shows provider name and "Licensed in: [STATE1], [STATE2], [STATE3]"
Provider options are clickable cards with hover state
Clicking provider with empty delegation note shows validation: "Clinical rationale is required"
Clicking provider with valid note (20+ characters) submits delegation and closes modal
Cancel button closes modal without action
Loading state displays while delegation processes
Success redirects to confirmation screen


Ticket 4
Title: BE - Doctor Admin - RX Requests - Create Prescription Delegation Data Model and Queue
User Story:
As a prescribing provider,
I want delegated prescriptions to appear in a dedicated queue,
So that I can review and act on prescription requests from other providers.
Business Requirements:

Create prescription_delegations table to track delegation workflow
Create endpoint to retrieve delegated prescriptions for authenticated provider
Support delegation status tracking through approval/denial lifecycle

Acceptance Criteria:

prescription_delegations table includes: id, prescription_id, primary_provider_id, prescribing_provider_id, delegation_note, status (pending/approved/denied), denial_reason (nullable), provider_chat_id, created_at, updated_at
GET /api/rx-requests returns delegations where prescribing_provider_id matches authenticated user
Response includes patient name, state, medication, dosage, primary provider name, time_in_queue, delegation_note, chat_id
Results ordered by created_at ascending (oldest first)
Status filter parameter supports: pending, approved, denied, all
Default filter is pending
Count endpoint GET /api/rx-requests/count returns pending delegation count for nav badge


Ticket 5
Title: FE - Doctor Admin - Navigation - Add RX Requests to Left Rail
User Story:
As a prescribing provider,
I want to see delegated prescription requests in my navigation,
So that I can quickly access prescriptions awaiting my review.
Business Requirements:

Add RX Requests navigation item under Patients section
Display count badge showing pending delegations
Style consistently with existing navigation items

Acceptance Criteria:

"RX requests" appears below "Awaiting reviews" in left navigation under Patients
Blue count badge displays number of pending delegations
Badge updates when delegation count changes (polling every 60 seconds or websocket)
Clicking "RX requests" navigates to /panel/patients/rx-requests
Active state styling matches existing nav items (gray background)
RX requests nav item only displays for users with prescriber role


Ticket 6
Title: FE - Doctor Admin - RX Requests - Build RX Requests Queue Interface
User Story:
As a prescribing provider,
I want to view all delegated prescription requests in a table,
So that I can prioritize and act on pending prescriptions.
Business Requirements:

Display table of delegated prescriptions with relevant columns
Provide access to provider discussion chat from queue
Link to full prescription detail for review and action

Acceptance Criteria:

Page title: "RX Requests"
Table columns: Patient Name, State, Medication, From Provider, Time in Queue, Discussion, Actions
Patient Name links to patient prescription detail screen
Time in Queue displays relative time ("2 hours ago", "1 day ago")
Discussion column displays "Open Chat" link that opens provider chat modal
Actions column displays "Review" button linking to prescription detail
Empty state displays: "No pending prescription requests"
Table supports pagination with 25 items per page


Ticket 7
Title: FE - Doctor Admin - RX Requests - Build Prescription Detail Review Screen for Delegated Prescriptions
User Story:
As a prescribing provider,
I want to review complete patient and prescription context before making a decision,
So that I can make informed approval or denial decisions.
Business Requirements:

Display full patient context and prescription details
Show delegation note from primary provider
Provide approve and deny actions with appropriate workflows

Acceptance Criteria:

Screen displays patient overview tabs matching existing patient detail layout
Delegation context section displays: "Delegated by [Provider Name]" and delegation note
"Provider Discussion" button opens chat modal
Treatments tab shows prescription details matching existing subscription detail screen
"Approve" button displays (prescribing provider is licensed in patient state)
Clicking Approve shows confirmation modal: "Approve This Prescription and Authorize Charge? Once approved, the patient will have access to this product as part of their treatment plan. Please note: approving will immediately submit a credit card charge."
"Deny" button displays with red outline styling
Clicking Deny opens denial reason modal


Ticket 8
Title: FE - Doctor Admin - RX Requests - Build Denial Reason Modal
User Story:
As a prescribing provider,
I want to provide a reason when denying a delegated prescription,
So that the primary provider understands why the prescription was not approved.
Business Requirements:

Require denial reason selection before completing denial
Support predefined reasons and custom explanation
Notify primary provider of denial with reason

Acceptance Criteria:

Modal title: "Deny Prescription Request"
Radio button options for denial reason: "Clinical contraindication identified", "Insufficient patient information", "Recommend alternative medication", "Patient not appropriate candidate", "Other"
When "Other" selected, text area appears for custom reason (required, minimum 20 characters)
"Recommend alternative medication" selection shows text field: "Suggested alternative (optional)"
"Cancel" button closes modal without action
"Confirm Denial" button submits denial with selected reason
Confirm button disabled until reason selected (and custom text entered if Other)
Successful denial shows toast: "Prescription request denied. Primary provider has been notified."
Denial posts message to provider chat: "Prescription denied: [Reason]"


Ticket 9
Title: BE - Doctor Admin - Provider Chat - Create Provider Discussion Chat Room on Delegation
User Story:
As a provider,
I want a dedicated chat room created when prescriptions are delegated,
So that I can communicate with the other provider about the patient case.
Business Requirements:

Auto-create provider-only chat room when delegation occurs
Link chat room to prescription delegation record
Support real-time messaging between providers

Acceptance Criteria:

Chat room created automatically when POST /api/prescriptions/{id}/delegate succeeds
Chat room type: "provider_discussion" (distinct from patient chat rooms)
Chat room participants: primary_provider_id and prescribing_provider_id
Chat room linked to prescription_delegation record via provider_chat_id
Initial system message posted: "Prescription delegation chat created for [Patient Name] - [Medication]"
Delegation note posted as first message from primary provider
Chat room persists permanently for audit trail (no deletion)
GET /api/chats/{chat_id} returns messages for authenticated participants only


Ticket 10
Title: FE - Doctor Admin - Provider Chat - Build Provider Discussion Chat Modal
User Story:
As a provider,
I want to message the other provider about a delegated prescription,
So that I can ask questions or provide additional context.
Business Requirements:

Display chat interface in modal overlay
Show message history with sender attribution
Support real-time message sending

Acceptance Criteria:

Modal title: "Provider Discussion - [Patient Name]"
Close button in top right closes modal
Message history displays with sender name, message text, and timestamp
Messages ordered chronologically (oldest at top)
Text input at bottom with placeholder "Type your message..."
"Send" button submits message
Enter key submits message
New messages appear immediately after sending
Chat scrolls to bottom on open and when new messages arrive
Empty chat displays delegation note as first message
Modal accessible from RX Requests queue and prescription detail screen


Ticket 11
Title: BE - Doctor Admin - Patient History - Log Delegation Events to Patient Timeline
User Story:
As a provider,
I want delegation events recorded in patient history,
So that there is a complete audit trail of provider involvement.
Business Requirements:

Log delegation creation event with both providers
Log approval/denial events with acting provider
Display delegation events in existing patient History tab

Acceptance Criteria:

PRESCRIPTION_DELEGATED event logged when delegation created: "Prescription delegated from [Primary Provider] to [Prescribing Provider]"
PRESCRIPTION_DELEGATION_APPROVED event logged on approval: "Prescription approved by [Prescribing Provider]"
PRESCRIPTION_DELEGATION_DENIED event logged on denial: "Prescription denied by [Prescribing Provider]: [Reason]"
Events display in patient History tab with timestamp
Events include prescription/medication context
Events visible to both primary and prescribing providers


Ticket 12
Title: FE - Doctor Admin - Patient Overview - Display Multi-Provider Attribution
User Story:
As a provider viewing a patient profile,
I want to see both primary care provider and prescribing provider,
So that I understand the care team involvement.
Business Requirements:

Display primary care provider on patient overview
Display prescribing provider when different from primary
Show provider roles clearly

Acceptance Criteria:

Patient overview displays "Primary Care Provider: [Name]" (existing Assigned Provider field renamed)
When prescription has been delegated and approved, display "Prescribing Provider: [Name]"
Prescribing provider field only displays when different from primary care provider
Multiple prescribing providers display if patient has multiple delegated prescriptions
Field displays link to prescribing provider's profile (if accessible)