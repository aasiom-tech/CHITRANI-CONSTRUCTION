# Operational Status Workflows & History Logging

This document defines the lifecycle states, transition workflows, and UI label mappings for client enquiries and commercial quote requests handled by the backend platform.

---

## 1. Contact Enquiry Workflow

Contact enquiries follow a simple lead-qualification lifecycle locked in Backend Revision Manual v1.1.

```
 [ new ]
    │
    ▼
 [ contacted ]
    │
    ▼
 [ qualified ]
    │
    ▼
 [ closed ]
```

### State Definitions & UI Display Labels:
| Database Status | Admin UI Display Label | Description |
| :--- | :--- | :--- |
| **`new`** | **New** | Newly submitted contact enquiry received via website API. |
| **`contacted`** | **Contacted** | Administrative team has initiated outreach (phone/email) with the enquirer. |
| **`qualified`** | **Qualified** | Requirements have been verified and assigned to relevant department/sales personnel. |
| **`closed`** | **Closed** | Lead has been resolved, converted to a quote request, or archived. |

> **Note**: Do NOT introduce an `in_review` database status for contact enquiries. Database statuses remain strictly locked to `new`, `contacted`, `qualified`, and `closed`.

---

## 2. Quote Request Workflow

Quote requests follow a formal commercial review lifecycle.

```
                     [ new ]
                        │
                        ▼
                [ under_review ]
                        │
             ┌──────────┴──────────┐
             ▼                     ▼
 [ clarification_required ]    [ quoted ]
             │                     │
             └──────────┬──────────┴──────────┬────────────────┐
                        ▼                     ▼                ▼
                     [ won ]               [ lost ]        [ closed ]
```

### State Definitions & UI Display Labels:
| Database Status | Admin UI Display Label | Description |
| :--- | :--- | :--- |
| **`new`** | **New** | New dynamic quote request submitted by a client. |
| **`under_review`** | **Under Review** | Estimating team is reviewing project requirements, drawing specs, and BOQ files. |
| **`clarification_required`** | **Clarification Required** | Additional technical or site detail requested from the client. |
| **`quoted`** | **Quoted** | Formal commercial quotation dispatched to client. |
| **`won`** | **Won** | Quotation accepted; contract awarded or equipment reserved. |
| **`lost`** | **Lost** | Quotation declined by client or awarded to competitor. |
| **`closed`** | **Closed** | Opportunity closed due to client inactivity or project cancellation. |

---

## 3. History Logging Requirement

Every state transition MUST automatically append an immutable record to the corresponding history table:
- Contact Enquiry Transitions → `enquiry_status_history`
- Quote Request Transitions → `quote_status_history`

### History Record Attributes:
- Reference ID (`enquiry_id` or `quote_request_id`)
- `previous_status`
- `new_status`
- `changed_by` (UUID of admin user performing transition)
- `change_reason` (Optional internal note)
- `created_at` (Timestamp)
