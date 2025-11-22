Ticket 1: Template Library Management
Title: FS - Store Admin - HealthPlatform AI Settings - Implement Medical Template Library Management
User Story:
As a store administrator,
I want to create, edit, and manage medical documentation templates in the HealthPlatform AI settings,
So that clinical staff can access standardized documentation formats during AI conversations.
Business Requirements:

Add Template Library section to Store Settings > HealthPlatform AI tab
Enable template creation with name and markdown content fields
Support template editing and deletion with confirmation
Display template list with preview and modification dates

Acceptance Criteria:

Template Library section appears below existing AI Configuration settings
"New Template" button opens modal with two fields: Template Name (required, max 100 characters) and Template Content (required, max 5000 characters)
Template content field displays as monospace font with placeholder text "Enter your template content in markdown format..."
Save button disabled when Template Name is empty or exceeds character limit
Template names must be unique; duplicate names show error: "A template with this name already exists. Please choose a different name."
Template list displays: template name, last modified date (format: YYYY-MM-DD), and content preview (first 150 characters with "..." truncation)
Edit button opens modal pre-populated with existing template data
Delete button shows confirmation dialog: "Are you sure you want to delete this template? This action cannot be undone."
Empty state displays: "No templates created yet. Click 'New Template' to get started."
Templates persist in database and reload on page refresh
Character counter displays below content field showing "[current]/5000"


Ticket 2: Slash Command Template Insertion
Title: FE - Doctor Admin - HealthPlatform AI Chat - Implement Slash Command Template Insertion
User Story:
As a prescriber,
I want to type slash commands like "/assessment" in the AI chat to quickly insert medical templates,
So that I can structure my documentation requests without interrupting my clinical workflow.
Business Requirements:

Detect slash commands in chat input field in real-time
Display template suggestions dropdown when typing "/" followed by text
Insert selected template content into chat input at cursor position
Support keyboard navigation for template selection

Acceptance Criteria:

Typing "/" followed by one or more characters triggers suggestion dropdown positioned above input field
Dropdown filters templates by matching text after "/" against template names (case-insensitive)
Dropdown displays: command format (e.g., "/patientassessment"), template display name, and "Insert template" label in blue text
Arrow Up/Down keys navigate suggestions with visual highlight (blue background, blue left border)
Enter or Tab key inserts selected template content, replacing the slash command text
Escape key closes dropdown without selection
Clicking suggestion with mouse inserts template content
Dropdown shows "No templates found" when no matches exist for search term
Maximum 5 suggestions displayed at once; additional matches accessible via scroll
Dropdown footer displays hint: "Use / for templates • ↑↓ to navigate • ↵ to select • Esc to cancel"
Template insertion maintains cursor position at end of inserted content
Multiple templates can be inserted in same message


Ticket 3: @ Mention Context Selection System
Title: FE - Doctor Admin - HealthPlatform AI Chat - Implement @ Mention Patient Context Selection
User Story:
As a prescriber,
I want to type @ mentions like "@labs" to quickly access and select patient data for AI context,
So that I can provide comprehensive patient information to the AI for better clinical analysis.
Business Requirements:

Detect @ mentions in chat input field in real-time
Display context category suggestions when typing "@"
Open context selection modal when category is selected
Support keyboard navigation for category selection

Acceptance Criteria:

Typing "@" displays all available context categories in suggestion dropdown
Typing "@" followed by characters filters categories by matching text (case-insensitive)
Context categories include: @transcripts, @labs, @documents, @questionnaires, @demographics, @orders, @patient-uploads
Each suggestion displays: command (e.g., "@labs"), description (e.g., "Choose Health lab results"), item count badge, and "Open selection" label in green text
Arrow Up/Down keys navigate suggestions with visual highlight
Enter or Tab key opens context selection modal for selected category
@ command text is removed from input when modal opens
Escape key closes dropdown without action
Dropdown footer displays hint: "Use @ for context • ↑↓ to navigate • ↵ to select • Esc to cancel"
Categories with zero items show count badge as "0"


Ticket 4: Patient Context Selection Modal
Title: FE - Doctor Admin - HealthPlatform AI Chat - Implement Patient Context Selection Modal
User Story:
As a prescriber,
I want to browse and select specific patient documents from organized categories,
So that I can choose exactly which patient data the AI should reference in its analysis.
Business Requirements:

Display tabbed modal interface for browsing patient data categories
Enable individual item selection with checkbox behavior
Support horizontal scrolling for category tabs on smaller screens
Show item details including name, date, and preview text

Acceptance Criteria:

Modal opens with title "Add Patient Context" and close (X) button in header
Category tabs display horizontally: Transcripts, Lab Results, Documents, Questionnaires, Demographics, Orders, Patient Uploads
Each tab shows icon, category name, and item count badge
Tabs scroll horizontally when they exceed modal width; scrollbar hidden
Active tab shows blue underline and blue text color
Content area displays selectable cards for each item in active category
Each card shows: category icon, item name (bold), date, and preview text (when available)
Clicking card toggles selection state; selected cards show blue border, blue background tint, and checkmark icon
Footer displays selection count: "[N] items selected"
"Cancel" button closes modal without applying changes
"Apply Context" button closes modal and adds selected items to persistent context
Empty category displays: "No [category name] available for this patient"
Maximum 5 items selectable per modal session; attempting to select more shows message: "Maximum 5 items can be selected at once"


Ticket 5: Persistent Context Chips Display
Title: FE - Doctor Admin - HealthPlatform AI Chat - Implement Persistent Context Chips
User Story:
As a prescriber,
I want to see which patient data is actively included in my AI conversation as removable chips,
So that I can track and manage what context the AI is using throughout my clinical session.
Business Requirements:

Display selected context items as color-coded chips above chat input
Enable chip removal with single click
Persist context selection throughout conversation session
Include context data in AI API requests

Acceptance Criteria:

Context chips appear in horizontal row above chat input field when items are selected
Each chip displays: category icon, item name, date in parentheses, and remove (X) button
Chips are color-coded by category:

Transcripts: blue background (bg-blue-100, text-blue-800)
Labs: emerald background (bg-emerald-100, text-emerald-800)
Documents: green background (bg-green-100, text-green-800)
Questionnaires: purple background (bg-purple-100, text-purple-800)
Demographics: orange background (bg-orange-100, text-orange-800)
Orders: indigo background (bg-indigo-100, text-indigo-800)
Patient Uploads: pink background (bg-pink-100, text-pink-800)


Clicking X button on chip removes item from context immediately
Chips wrap to multiple rows if they exceed container width
Context persists across messages within same chat session
Starting new chat clears all context chips
When context items are selected, info banner appears in chat area: "Active Context ([N] items) - The AI will reference this patient data in responses."
Context chip data included in API request body when sending messages to Claude


Ticket 6: Plus Button Context Access
Title: FE - Doctor Admin - HealthPlatform AI Chat - Add Plus Button for Context Modal Access
User Story:
As a prescriber,
I want to click a plus button to open the context selection modal,
So that I can visually browse patient data without memorizing @ commands.
Business Requirements:

Add plus button adjacent to send button in chat input area
Open context selection modal on click
Provide visual affordance for context management

Acceptance Criteria:

Plus (+) button appears between text input and send button
Button displays gray border with plus icon; hover state shows light gray background
Clicking button opens Patient Context Selection Modal (same modal as @ mention system)
Button includes tooltip on hover: "Add patient context"
Button remains enabled regardless of input field content
Modal opens to first tab (Transcripts) by default when accessed via plus button


Ticket 7: Choose Health Lab Results Integration
Title: BE - Doctor Admin - HealthPlatform AI Chat - Integrate Choose Health Lab Results for Context Selection
User Story:
As a prescriber,
I want to select Choose Health lab results as AI conversation context,
So that the AI can analyze the patient's lab values when providing clinical recommendations.
Business Requirements:

Fetch Choose Health lab results from existing API integration
Format lab panel data for display in context selection modal
Include lab values in AI context payload

Acceptance Criteria:

Lab Results tab in context modal displays all Choose Health panels for current patient
Each lab panel card shows: panel name (e.g., "Comprehensive Panel"), test date, and panel description
Lab panels sorted by date (most recent first)
Selected lab panel data formatted as structured text for AI context including: panel name, test date, individual test names with values and reference ranges
API request to Claude includes lab data in context when lab panels selected
Loading state displays "Loading lab results..." while fetching from Choose Health API
Error state displays: "Unable to load lab results. Please try again." with retry option
Patients with no Choose Health orders show: "No lab results available. Lab tests can be ordered through the HealthPlatform platform."