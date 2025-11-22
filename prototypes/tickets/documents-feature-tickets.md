# Documents Feature - Jira Tickets

---

## TICKET 1

**Title:** FE - Patient Admin - Documents - Create Document List Navigation Item with Upload

**User Story:**
As a patient,
I want to view and upload documents in a dedicated Documents section,
So that I can access all my files and add new documents in one centralized location.

**Business Requirements:**
- Add "Documents" navigation item to patient admin left rail
- Display all documents uploaded by patient via questionnaire, chat, or direct upload
- Show document name, upload date, and source
- Provide upload functionality for patients to add documents directly
- Provide download functionality for each document

**Acceptance Criteria:**
- Documents navigation item appears in patient admin left rail
- Clicking Documents shows table with columns: Document Name, Upload Date, Source, Actions
- Table displays all documents uploaded through questionnaire, chat, and direct upload
- "Upload Document" button opens file upload modal
- Uploaded files appear in table with source labeled as "Patient"
- Download button allows patient to download individual documents
- Source column indicates "Questionnaire", "Chat", or "Patient"
- Documents sorted by upload date (newest first)
- File upload accepts PDF, DOC, DOCX up to 10MB each
- Success/error messages display for upload operations
- Empty state message with upload option when patient has no documents

---

## TICKET 2

**Title:** FE - Patient Admin - Patient Profile - Add Documents Tab with Bidirectional Upload

**User Story:**
As a store admin or doctor admin,
I want to view and upload documents in a patient's profile Documents tab,
So that I can share files with the patient and see all documents the patient has access to.

**Business Requirements:**
- Add "Documents" tab to patient profile interface (after existing tabs)
- Display all documents visible to the patient (from questionnaires, chat, patient uploads, and admin uploads)
- Provide upload functionality for admins to add documents to patient account
- Ensure bidirectional visibility (admin uploads visible to patient, patient uploads visible to admin)

**Acceptance Criteria:**
- "Documents" tab appears in patient profile tab navigation
- Documents tab shows table with columns: Document Name, Upload Date, Uploaded By, Actions
- "Upload Document" button allows admins to upload documents (PDF, DOC, DOCX up to 10MB)
- "Uploaded By" column shows "Patient", "Store Admin", or "Doctor Admin"
- All documents uploaded by admin automatically appear in patient's Documents section
- Download action available for all documents
- Delete action only available for admin-uploaded documents (not patient-uploaded)
- File upload accepts PDF, DOC, DOCX up to 10MB each
- Empty state message with upload option when no documents exist
- Success/error messages for upload and delete operations
