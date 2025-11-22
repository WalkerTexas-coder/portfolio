# Product Pre-Read: Centralized Appointment Management

**Feature:** Store Admin Appointments View  
**Prepared by:** Austin Walker  
**Date:** November 21, 2025  
**Status:** Discovery / Concept Review

---

## Executive Summary

This document outlines a proposed new feature for the HealthPlatform Store Admin: a centralized view for managing all upcoming patient appointments. Currently, administrators must navigate to individual patient profiles to view and manage appointments, creating operational inefficiency as appointment volume scales.

---

## Problem Statement

**Current State:** Appointment information is only accessible within individual patient profiles. Admins must know which patient has an upcoming appointment and navigate to their profile to access appointment details or take action.

**Pain Points:**
- No visibility into total upcoming appointment volume
- Cannot identify appointments requiring attention (e.g., awaiting provider assignment) without checking individual profiles
- Inefficient workflow for daily appointment management
- No ability to search or filter appointments across patients
- Difficult to identify scheduling conflicts or gaps

**Impact:** Administrative overhead increases as patient volume grows. Staff cannot efficiently prepare for upcoming appointments or proactively address scheduling issues.

---

## Proposed Solution

Add a new "Appointments" section to the Store Admin left rail navigation that provides a centralized view of all upcoming appointments across all patients.

### Core Requirements

**Must Have:**
- Display all upcoming appointments in a single view
- Show patient name (linked to patient profile)
- Show appointment type, date, time, and duration
- Show appointment status (Scheduled, Awaiting provider assignment)
- Show assigned provider/host
- Enable search by patient name
- Enable filtering by status, date range, provider
- Provide quick actions: Join Meeting, Reschedule, Cancel

**Should Have:**
- Countdown timer showing time until appointment
- Sort functionality (by date, status, patient name)
- Timezone display
- Pagination for large appointment volumes

**Could Have:**
- Calendar integration view
- Export functionality
- Bulk actions (reschedule multiple, cancel multiple)
- Provider availability overlay

---

## Concept Options

We have identified three potential interface approaches. Each addresses the core requirements but optimizes for different use cases.

### Option A: Table View

A traditional data table with sortable columns displaying all appointment information in rows.

**Characteristics:**
- High information density
- Familiar spreadsheet-like interface
- Efficient for scanning large volumes of data
- Sortable and filterable columns
- Compact action buttons per row

**Best Suited For:**
- High appointment volumes (50+ per week)
- Users comfortable with data tables
- Quick scanning and sorting workflows
- Bulk management operations

**Trade-offs:**
- Less visual distinction between appointments
- Requires horizontal scrolling on smaller screens
- Can feel overwhelming with too many columns


### Option B: Card View

Individual cards for each appointment displaying key information with visual hierarchy.

**Characteristics:**
- Clear visual separation between appointments
- Rich detail display without scrolling
- Prominent status badges and countdown timers
- Mobile-friendly responsive layout
- Visually appealing interface

**Best Suited For:**
- Moderate appointment volumes (10-30 per week)
- Users who prefer visual interfaces
- Detailed appointment review workflows
- Touch/tablet interfaces

**Trade-offs:**
- Lower information density (fewer visible at once)
- More scrolling required for large volumes
- Takes more screen real estate per appointment


### Option C: Timeline View

Chronological list organized by date with visual timeline indicators.

**Characteristics:**
- Strong date-based organization
- Visual timeline showing appointment flow
- Color-coded status indicators on timeline
- Natural daily planning orientation
- Easy to see scheduling gaps

**Best Suited For:**
- Daily operational planning
- Identifying scheduling patterns
- Users who think chronologically
- Moderate to low appointment volumes

**Trade-offs:**
- Less efficient for searching specific appointments
- Harder to compare non-adjacent dates
- May require date navigation for future appointments

---

## Recommendation

**Primary View:** Table View (Option A) with toggle capability

**Rationale:** The table view provides the highest operational efficiency for the expected use case of appointment management at scale. However, providing a view toggle (similar to file explorer list/grid views) would allow users to switch to Card or Timeline views based on their preference or task.

**Suggested Implementation:**
1. Default to Table View
2. Include view toggle in toolbar (Table | Cards | Timeline)
3. Persist user's view preference

---

## Technical Considerations

**Data Requirements:**
- Appointment records with patient association
- Provider/host assignment data
- Status tracking
- Scheduling integration (Cal.com or existing scheduling system)

**Integration Points:**
- Existing patient profile appointment display
- Scheduling system (for Join Meeting functionality)
- Provider management system (for assignment workflows)

**Performance Considerations:**
- Pagination strategy for large datasets
- Real-time status updates
- Search indexing for patient/appointment lookup

---

## Open Questions for Discussion

1. **Volume expectations:** What is our projected appointment volume? This affects which view should be the default.

2. **Primary users:** Who will use this feature most—administrative staff, clinical coordinators, or providers? Different roles may have different workflow needs.

3. **Provider assignment workflow:** Should unassigned appointments have a quick-assign action directly from this view, or should users navigate to a separate assignment interface?

4. **Historical data:** Should this view only show upcoming appointments, or should there be a toggle for past appointments as well?

5. **Notification integration:** Should this view surface alerts for appointments starting soon or appointments missing required information?

6. **Mobile access:** Do admins need to access this view on mobile devices? This impacts which view options we prioritize.

---

## Next Steps

Following team review of this document:

1. Align on recommended approach or modifications
2. Prioritize feature requirements (must/should/could)
3. Define implementation phases
4. Create detailed tickets for development

---

## Appendix: Current State Reference

The current appointment display within a patient profile includes:
- Appointment type header
- Status badge (Scheduled / Awaiting provider assignment)
- Warning text for scheduling requirements
- Token ID for scheduling
- Schedule Now / Mark token as used actions
- Date range selector
- Scheduled appointment details: duration, date/time, timezone, host
- Countdown timer
- Join Meeting / Reschedule / Cancel actions

The centralized view should maintain feature parity with these individual profile capabilities while adding cross-patient visibility and management.
