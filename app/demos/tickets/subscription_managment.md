Ticket 1: Enhanced Subscription Details View
Title: FE - Prescriber Admin - Subscription Details - Expand Information Display for Clinical Decision Making
User Story:
As a prescriber,
I want to see comprehensive subscription details including medication composition, treatment specifications, and patient instructions,
So that I can make informed approval decisions without needing to enter edit mode.
Business Requirements:

Display complete medication composition with individual dosages in structured format
Show all prescription details including treatment type, treatment use, and supply information
Present patient directions and pharmacy notes in readable text format
Organize information into logical sections matching clinical workflow

Acceptance Criteria:

Product Details section displays: Product name, form factor, disease state, treatment type
Medication Composition section shows individual medication cards with name and exact dosage
Prescription Details section includes: quantity, supply duration, refills, treatment use, billing information
Instructions section displays patient directions and pharmacy notes in bordered text areas
Information is sectioned with visual separators and clear headings
Status field displays "Awaiting Review" in orange text for pending subscriptions
All data displays current subscription values without edit capability
Layout maintains consistent spacing and typography with existing admin interface


Ticket 2: Frontend - Edit Request Interface
Title: FE - Prescriber Admin - Subscription Edit - Implement Edit Request Form Interface
User Story:
As a prescriber,
I want to edit subscription details including dosages, quantities, and instructions,
So that I can modify prescriptions to meet specific patient needs before approval.
Business Requirements:

Provide editable interface for prescription modifications with clear field distinction
Show original values for reference during editing process
Support three-dot menu action for optional variant creation
Implement save and cancel actions without automatic approval

Acceptance Criteria:

Header displays "Edit Subscription Request" with back navigation to details view
Three-dot menu in top right shows "Save as new variant" option in dropdown
Read-only fields (product name, form factor, disease state, medication names) display with gray background and disabled state
Editable fields include: treatment type dropdown, individual medication dosages and units, quantity, supply duration, refills, treatment use dropdown, patient directions textarea, pharmacy notes textarea
Original values display below editable fields as italic gray text: "Original: [value]"
Treatment use dropdown includes all options: Abortive/PRN, Abortive/Fixed Schedule, Adjunctive/Daily, etc.
Bottom action buttons show "Save Changes" (blue) and "Cancel" (gray)
Form validation prevents negative values for numeric fields
Save Changes returns to subscription details view
Cancel discards changes and returns to subscription details view


Ticket 3: Backend - Edit Request Data Management
Title: BE - Prescriber Admin - Subscription Edit - Implement Subscription Override Data Handling
User Story:
As a prescriber,
I want my subscription edits to be saved as overrides to the original prescription,
So that modified prescriptions maintain traceability to their source variants while allowing clinical customization.
Business Requirements:

Implement subscription-level data storage for edited prescription details
Maintain relationship between subscription and original variant for audit purposes
Support retrieval of both original variant data and subscription overrides for display
Handle data persistence for modified dosages, quantities, instructions, and treatment specifications

Acceptance Criteria:

Subscription edit saves create override records without modifying original variant data
API returns combined view of variant base data plus subscription overrides for display
Subscription overrides include: individual medication dosages and units, quantity, supply duration, refills, treatment type, treatment use, patient directions, pharmacy notes
Original variant data remains unchanged when subscription edits are saved
System tracks which fields have been overridden at subscription level
Edit saves maintain audit trail showing original variant reference
Data retrieval supports both subscription details view and edit form population

Technical Notes:

Implementation approach may require evaluation of current subscription data architecture
Consider whether subscription override data should be stored as separate fields, JSON overrides, or other structure
Determine impact on existing subscription queries and related system components
Assess if changes require database schema modifications or can utilize existing structures


Ticket 4: Frontend - Save as New Variant Action
Title: FE - Prescriber Admin - Variant Creation - Implement Save as New Variant from Subscription Edit
User Story:
As a prescriber,
I want to save my subscription edits as a new product variant,
So that this customized medication combination becomes available for future prescriptions.
Business Requirements:

Add "Save as new variant" action to edit request three-dot menu
Provide confirmation feedback when variant creation is initiated
Maintain current edit session while processing variant creation
Return to subscription details view after variant creation

Acceptance Criteria:

Three-dot menu in edit request header includes "Save as new variant" option
Clicking "Save as new variant" triggers variant creation with current edit form values
Success feedback shows message: "New variant created successfully"
Action creates variant with "Show on store" set to false (hidden from public catalog)
Variant creation uses current form values for: medication dosages and units, quantity, supply duration, treatment type, treatment use
Action does not modify current subscription or approve/deny status
User returns to subscription details view after variant creation
Three-dot dropdown closes after action selection


Ticket 5: Backend - New Variant Creation from Subscription
Title: BE - Prescriber Admin - Variant Creation - Implement Variant Generation from Subscription Edits
User Story:
As a prescriber,
I want my customized subscription edits to create new product variants automatically,
So that these clinical modifications become available in the product catalog for future use.
Business Requirements:

Generate new product variants based on subscription edit form values
Set new variants as hidden from public store catalog by default
Maintain original product association while creating new variant record
Support variant creation without impacting current subscription approval workflow

Acceptance Criteria:

API endpoint accepts subscription edit data and creates new variant record
New variant includes: base product reference, form factor, individual medication dosages and units, quantity, supply duration, treatment type, treatment use
Variant creation sets "Show on store" field to false for all new variants
Generated variants receive unique SKU following existing naming conventions
New variant inherits base product information: disease state, form factor, medication names
Variant creation maintains pricing structure from original variant
Creation process validates medication combinations and dosage ranges
API returns success confirmation when variant is created
Process does not modify original variant or subscription data

Technical Notes:

Implementation may require analysis of current variant creation workflow and database structure
Consider impact on existing product catalog and variant management systems
Evaluate if new variants require additional approval workflow before becoming available
Determine if variant naming/SKU generation needs modification to handle provider-created variants

These tickets acknowledge the potential need for subscription architecture changes while giving developers the technical decision-making authority. They focus on business requirements and user experience without prescribing specific implementation approaches.RetryYou know what? In the edit form, let's  Offer a drop-down of the product variants, and it will update all of the product the edit subscription request items. For this use case, come up with a variant of this medication where it's double the dosage percentages. And then let's put that drop-down above the product details. It's just a drop-down that allows you to select from the variants that are already in our system.2 stepsDevised strategy for handling variant selection in edit form.Now I need to add a function to handle variant selection changes and update the edit form data accordingly.Plotted variant dropdown placement in product edit view.Now I need to add the variant dropdown to the UI above the Product Details section in the edit view.Great! I've added the variant selection dropdown. Now let me update the relevant ticket to include this new functionality:
Updated Ticket 2: Frontend - Edit Request Interface
Title: FE - Prescriber Admin - Subscription Edit - Implement Edit Request Form Interface
User Story:
As a prescriber,
I want to edit subscription details including selecting different product variants, modifying dosages, quantities, and instructions,
So that I can modify prescriptions to meet specific patient needs before approval.
Business Requirements:

Provide variant selection dropdown that updates all form fields automatically
Provide editable interface for prescription modifications with clear field distinction
Show original values for reference during editing process
Support three-dot menu action for optional variant creation
Implement save and cancel actions without automatic approval

Acceptance Criteria:

Header displays "Edit Subscription Request" with back navigation to details view
"Select Product Variant" section appears above Product Details with dropdown showing available variants
Variant dropdown displays format: "[Variant Name] - [Medication 1] [dose][unit] + [Medication 2] [dose][unit] + [Medication 3] [dose][unit]"
Selecting different variant automatically populates all form fields with variant's values
Helper text below dropdown states: "Changing variant will update all form fields with the selected variant's values"
Three-dot menu in top right shows "Save as new variant" option in dropdown
Read-only fields (product name, form factor, disease state, medication names) display with gray background and disabled state
Editable fields include: treatment type dropdown, individual medication dosages and units, quantity, supply duration, refills, treatment use dropdown, patient directions textarea, pharmacy notes textarea
Original values display below editable fields as italic gray text: "Original: [value]"
Treatment use dropdown includes all options: Abortive/PRN, Abortive/Fixed Schedule, Adjunctive/Daily, etc.
Bottom action buttons show "Save Changes" (blue) and "Cancel" (gray)
Form validation prevents negative values for numeric fields
Save Changes returns to subscription details view
Cancel discards changes and returns to subscription details view

The artifact now shows a functional variant selection dropdown that allows prescribers to quickly switch between different strength variants of the same medication, automatically updating all form fields. This makes it much easier to adjust prescriptions by selecting from pre-existing variants rather than manually editing individual dosages.