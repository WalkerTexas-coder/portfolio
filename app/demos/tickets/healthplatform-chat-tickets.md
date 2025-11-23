# HealthPlatform AI Chat Enhancement - Revised Scope

## Ticket 1: Slash Command Template System [FULL STACK]

**Title:** FS - HealthPlatform AI - Template System - Add Slash Command Detection to Existing Chat Input

**User Story:**
As a clinical staff member,
I want to use slash commands in the existing chat input to insert medical templates,
So that I can quickly create standardized documentation.

**Business Requirements:**
• Add slash command detection to existing chat input field without disrupting current functionality
• Create template management system in store settings for admin configuration
• Display template suggestions dropdown above existing input field
• Insert template content into existing input for editing before sending

**Frontend Acceptance Criteria:**
• Typing "/" in existing chat input triggers template suggestion dropdown
• Dropdown positioned above existing input field without interfering with attachments/send buttons
• Templates filter by text after "/" (e.g., "/assess" shows assessment template)
• Arrow up/down navigation with Enter/Tab selection, Escape to cancel
• Template insertion replaces slash command text and maintains existing input functionality
• Dropdown works alongside existing file attachment and model selection features

**Backend Acceptance Criteria:**
• `GET /api/templates` returns available templates for current practice
• Templates returned with: id, name, label (slash command), content for dropdown filtering
• Existing template CRUD endpoints support chat functionality (see Ticket 6 for full CRUD requirements)

---

## Ticket 2: Patient Context @ Mention System [FULL STACK]

**Title:** FS - HealthPlatform AI - Context System - Add @ Mention Detection for Patient Data Categories

**User Story:**
As a clinical staff member,
I want to use @ mentions in the existing chat to reference patient data categories,
So that I can provide comprehensive context for AI analysis.

**Business Requirements:**
• Add @ mention detection to existing chat input alongside current functionality
• Support patient data categories and disease state product categories
• Display context suggestions dropdown using same pattern as slash commands
• Enable context category selection without disrupting existing chat features

**Frontend Acceptance Criteria:**
• Typing "@" in existing chat input triggers context suggestion dropdown
• Context suggestions: @labs, @transcripts, @questionnaires, @demographics, @orders, @documents, @uploads
• Product suggestions: @products-hormone, @products-peptide, @labkits
• Dropdown shows category name, icon, item count, preview text
• @ mention selection replaces text with "[Category Name] " reference
• Works alongside existing slash commands, file attachments, and send functionality

**Backend Acceptance Criteria:**
• `GET /api/patients/{id}/context-categories` returns available context categories with counts
• `GET /api/patients/{id}/labs` returns patient lab results formatted for Claude context
• `GET /api/patients/{id}/transcripts` returns visit transcripts
• `GET /api/patients/{id}/questionnaires` returns completed questionnaires
• `GET /api/patients/{id}/demographics` returns patient demographic data
• `GET /api/patients/{id}/orders` returns patient order history
• `GET /api/patients/{id}/documents` returns patient documents
• `GET /api/patients/{id}/uploads` returns patient uploaded files
• `GET /api/products/hormone-therapy` returns hormone therapy products
• `GET /api/products/peptide-therapy` returns peptide therapy products
• `GET /api/labkits` returns available lab kits

---

## Ticket 3: Context Selection Modal [FRONTEND ONLY]

**Title:** FE - HealthPlatform AI - Context Modal - Add Patient Data Selection Interface

**User Story:**
As a clinical staff member,
I want to browse patient data categories through a modal interface,
So that I can select context beyond @ mention shortcuts.

**Business Requirements:**
• Add context selection modal accessible from existing chat interface
• Organize context by tabs with item counts using existing backend endpoints
• Support multi-selection and integrate with context management system
• Modal design consistent with existing HealthPlatform interface patterns

**Acceptance Criteria:**
• New button/icon near existing attachment button opens context modal
• Modal tabs: Patient Data, Store Products, Lab Kits
• Patient Data subtabs: Labs, Transcripts, Questionnaires, Demographics, Orders, Documents, Uploads
• Store Products subtabs: Hormone Therapy, Peptide Therapy
• Tab headers show item counts from existing API endpoints
• Items display with type icons, names, dates, preview text
• Multi-select toggles with visual feedback (blue border, checkmarks)
• "Apply Context" adds selections to context management system
• Modal uses existing API endpoints from Ticket 2

---

## Ticket 4: Context Chips Display [FRONTEND ONLY]

**Title:** FE - HealthPlatform AI - Context Management - Add Context Chips Below Chat Input

**User Story:**
As a clinical staff member,
I want to see active context categories visually below the chat input,
So that I can track what data the AI will reference.

**Business Requirements:**
• Add context chips display area below existing chat input field
• Show selected context from both @ mentions and modal selections
• Provide visual indicators and individual removal capability
• Integrate seamlessly with existing chat interface layout

**Acceptance Criteria:**
• Context chips area appears between existing chat messages and input field
• Chips show: colored icon, category name, item count, X removal button
• Color coding: labs=emerald, transcripts=blue, questionnaires=purple, products=blue, etc.
• "Active Context (X categories)" header when chips are present
• Individual chip removal updates context state
• Context persists across message sends (doesn't clear when sending)
• Area hidden when no context selected
• Chips wrap to multiple lines with proper spacing

---

## Ticket 5: Context-Aware Claude API Enhancement [BACKEND ONLY]

**Title:** BE - HealthPlatform AI - Claude Integration - Enhance Existing Claude API with Context Data

**User Story:**
As a clinical staff member,
I want the AI to reference my selected context categories in responses,
So that I receive comprehensive analysis based on relevant patient data.

**Business Requirements:**
• Enhance existing Claude API endpoint to include selected context data
• Fetch actual data for selected context categories when sending messages
• Include context in Claude API calls without disrupting existing functionality
• Maintain existing chat features (web search, thinking, file attachments)

**Backend Acceptance Criteria:**
• Existing Claude API endpoint enhanced to accept `context_categories` parameter
• When context categories provided, server fetches actual data using existing endpoints
• Context data formatted and included in Claude system prompt or message context
• Hormone therapy products included when @products-hormone selected
• Patient lab results included when @labs selected
• All existing Claude API functionality preserved (tokens, temperature, thinking, web search)
• Context data structured appropriately for Claude consumption
• API handles context data retrieval errors gracefully
• Existing chat features (file attachments, model selection) unaffected

---

## Implementation Summary

**Total Scope:** 5 tickets adding command detection and context management to existing functional chat system

**Frontend Work:** Adding command detection to existing input, context modal, context chips display
**Backend Work:** Template CRUD, patient data endpoints, product category endpoints, Claude API enhancement

**Existing Functionality Preserved:**
- Complete chat interface layout and navigation
- Message display with markdown rendering  
- Claude API integration with model selection
- File attachments and web search capabilities
- Chat history and session management
- Store settings integration