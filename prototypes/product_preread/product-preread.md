# Multi-Provider Prescription Delegation System
## Product Pre-Read Document

**Prepared by:** Austin Walker  
**Date:** August 2025  
**Status:** Design Review  

---

## Executive Summary

As HealthPlatform expands telehealth services across multiple states, we face a compliance challenge: not every provider on our platform is licensed to prescribe medications in every state where our patients reside. This document outlines a proposed system for delegating prescription authority between providers while maintaining care continuity, compliance, and complete audit trails.

---

## The Problem

### Current State
When a patient submits an order requiring prescription medication, they enter the "Awaiting Review" queue. A single provider claims that patient, establishes the care relationship, and handles all aspects of care including prescription approval. The provider then writes prescriptions via their associated DoseSpot account.

### The Gap
Provider licensing is state-specific. When a patient in Arkansas is claimed by a provider licensed only in Texas, Florida, and California, that provider cannot legally write the prescription—even after reviewing the case and determining the medication is clinically appropriate.

### Business Impact
- Patients experience delays in receiving care
- Providers must manually coordinate handoffs outside the system
- No audit trail exists for provider-to-provider collaboration
- Scaling to 50-state coverage becomes operationally complex

---

## Proposed Solution

### Overview
Transform the single-provider model into a collaborative multi-provider system with two distinct roles:

**Primary Care Provider** - Owns the patient relationship, conducts clinical review, manages ongoing care, but may not be licensed in patient's state.

**Prescribing Provider** - Licensed in the patient's state, reviews delegated prescription requests, writes prescriptions via their own DoseSpot account.

### Key System Components

**1. Dynamic Approval Interface**
The prescription approval screen adapts based on provider licensing:
- If licensed in patient's state → Standard "Approve" button
- If not licensed → "Send to another provider" button replaces Approve

**2. Provider Selection Modal**
When delegating, the system displays only providers licensed in the patient's state. Primary provider must include a clinical rationale note explaining the prescription decision.

**3. RX Requests Queue**
New left rail navigation item under Patients. Prescribing providers see delegated prescription requests awaiting their review. Each request shows patient context, medication details, delegating provider, and time in queue.

**4. Provider Discussion Chat**
Auto-generated chat room created during delegation. Enables real-time collaboration between primary and prescribing providers. Serves as both communication tool and audit trail.

---

## How It Works

### Happy Path Flow

1. Patient in Arkansas submits order for Hair Growth medication
2. Dr. Walker (licensed TX, FL, CA) claims patient from Awaiting Review queue
3. Dr. Walker reviews medical questionnaire, determines Finasteride 1mg is appropriate
4. System detects Dr. Walker is not licensed in AR
5. "Send to another provider" button appears instead of "Approve"
6. Dr. Walker clicks button, sees modal with AR-licensed providers
7. Dr. Walker selects Dr. Chen, enters clinical rationale note
8. System creates provider chat room, sends request to Dr. Chen's RX Requests queue
9. Dr. Chen reviews patient file and delegation context
10. Dr. Chen approves prescription, writes in DoseSpot under her credentials
11. Patient receives medication; audit trail shows complete provider collaboration

---

## Why This Approach

### Alternatives Considered

**Option A: Restrict Patient Queue by Provider Licensing**
Providers only see patients in states where they're licensed.

*Rejected because:* Limits provider utilization, fragments patient care, doesn't solve the problem for patients in states with limited provider coverage.

**Option B: Automatic Provider Assignment**
System automatically routes prescriptions to licensed providers without primary provider involvement.

*Rejected because:* Removes clinical judgment from routing, could create liability issues, doesn't support provider collaboration.

**Option C: External Coordination (Current State)**
Providers coordinate handoffs via Slack, email, or phone.

*Rejected because:* No audit trail, inefficient, error-prone, doesn't scale.

### Why Our Approach Works
- Preserves clinical decision-making at every step
- Creates complete audit trail within existing patient history
- Leverages existing UI patterns (subscription detail screen, chat infrastructure)
- Scales efficiently as we add providers and states
- Supports regulatory compliance requirements

---

## Open Questions Requiring Team Input

### Patient Data Access Scope

**Question:** What level of patient file access should prescribing providers have?

| Option | During Review | After Decision |
|--------|---------------|----------------|
| A. Full Access | Complete patient profile | Ongoing care team member |
| B. Limited Access | Prescription-relevant only | Audit-only access |
| C. Hybrid | Full access | Time-limited, then audit-only |

**Recommendation:** Option C - Full access during review enables informed clinical decisions; time-limited access afterward balances continuity with privacy.

**Decision needed from:** Clinical Operations, Compliance

---

### Provider Authority Scope

**Question:** Can prescribing providers modify the requested medication/dosage, or only approve/deny as-requested?

| Option | Implications |
|--------|--------------|
| A. Approve/Deny Only | Faster processing, clearer accountability, denial requires reason |
| B. Full Modification | More flexibility, but blurs responsibility between providers |

**Recommendation:** Option A - Prescribing provider approves or denies as-requested. Denials require reason; disagreements handled through provider chat.

**Decision needed from:** Clinical Operations, Medical Director

---

### Patient Visibility

**Question:** Should patients see that multiple providers are involved in their care?

| Option | Patient Experience |
|--------|-------------------|
| A. Full Transparency | Patient overview shows both Primary Care Provider and Prescribing Provider |
| B. Simplified View | Patient sees only Primary Care Provider; delegation is internal |

**Recommendation:** Option A - Transparency builds trust and aligns with healthcare best practices.

**Decision needed from:** Product, Clinical Operations

---

### Post-Decision Workflow

**Question:** After prescribing provider approves, who handles patient follow-up questions about the medication?

| Option | Responsibility |
|--------|---------------|
| A. Primary Provider | Maintains single point of contact for patient |
| B. Prescribing Provider | Direct access to prescriber for medication questions |
| C. Either/Both | Patient chat room includes both providers |

**Recommendation:** Option C - Existing chat room structure already supports many-to-many. Both providers can respond as appropriate.

**Decision needed from:** Clinical Operations, Customer Experience

---

## Implementation Considerations

### Dependencies
- Provider licensing data must exist and be queryable by state
- Provider selection endpoint must filter by state licensing
- Chat room infrastructure must support provider-only rooms
- Patient history logging must capture delegation events

### Risks
- **Prescribing provider bottleneck:** If few providers are licensed in certain states, queues could back up
- **Communication gaps:** Delegation without adequate context could lead to denials
- **Audit complexity:** Multi-provider decisions require clear accountability tracking

### Mitigations
- Dashboard visibility into RX request queue depth by state
- Required delegation notes ensure context transfer
- Clear event logging with provider attribution

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Prescription fulfillment time | No increase vs. single-provider | Time from patient submission to prescription written |
| Delegation completion rate | >95% | Delegated requests that reach approval/denial |
| Provider communication | <4 hours average response | Time between messages in provider chat |
| Compliance | 100% | Prescriptions written by state-licensed provider |

---

## Next Steps

1. **Team Review:** Circulate pre-read, collect feedback on open questions
2. **Decision Meeting:** Resolve open questions with stakeholders
3. **Technical Review:** Engineering assessment of implementation approach
4. **Ticket Creation:** Break down into implementation tickets
5. **Design Review:** Validate prototype with clinical operations team

---

## Appendix

### Interactive Prototype
A clickable prototype demonstrating the complete workflow is available for review. Key screens include:
- Enhanced left rail with RX Requests navigation
- Dynamic approval interface with licensing detection
- Provider selection modal with delegation notes
- RX Requests queue view
- Provider discussion chat interface

### Related Documentation
- Provider Licensing Management (existing admin feature)
- DoseSpot Integration Overview
- Patient Chat Room Architecture
