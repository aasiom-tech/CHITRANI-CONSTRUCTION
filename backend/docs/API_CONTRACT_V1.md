# REST API Contract Specifications — V1

This document defines the public and administrative REST API contract specifications for the Chitrani Construction backend (`/api/v1`).

---

## 1. Response Envelope Standards

All REST API responses MUST follow a standardized JSON envelope structure.

### Standard Success Envelope (HTTP 200 / 201):
```json
{
  "success": true,
  "data": {},
  "meta": {
    "requestId": "req_8f92a11b",
    "timestamp": "2026-08-08T14:50:00Z"
  }
}
```

### Standard Error Envelope (HTTP 4xx / 5xx):
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Please check the submitted fields.",
    "fields": {
      "mobileNumber": ["Mobile number must be a valid 10-digit Indian phone number."]
    }
  },
  "meta": {
    "requestId": "req_8f92a11b",
    "timestamp": "2026-08-08T14:50:00Z"
  }
}
```

---

## 2. Public / Admin DTO Serializer Boundary

> **CRITICAL SECURITY RULE**: Backend response handlers MUST utilize explicit Data Transfer Object (DTO) serializers to isolate public payload data from administrative database attributes.

The backend MUST NEVER return raw database entity rows directly to public callers.

### Attributes Strictly Excluded from Public Response DTOs:
- `internal_status` (Equipment)
- `assigned_to` (Enquiries / Quotes)
- `internal_notes` (Operational comments)
- `work_order_reference` (Projects — Admin only by default)
- `audit_logs` & system metadata
- Admin user details & Auth UUIDs
- Provider error messages & stack traces
- Private environment secrets & service-role keys

---

## 3. HTTP Status Code Guidelines

| Status Code | Meaning | Usage |
| :--- | :--- | :--- |
| **200 OK** | Request succeeded | Standard GET read or POST query response. |
| **201 Created** | Entity created | Successful submission of contact forms or quote requests. |
| **400 Bad Request** | Validation failed | Malformed JSON or Zod schema validation errors. |
| **401 Unauthorized** | Authentication required | Missing or invalid Bearer token on protected admin routes. |
| **403 Forbidden** | Role permission denied | User lacks required role for requested action. |
| **404 Not Found** | Entity not found | Invalid route, service slug, or missing resource. |
| **409 Conflict** | State conflict | Duplicate resource submission or invalid transition. |
| **429 Too Many Requests** | Rate limit exceeded | Rate limiter triggered on public submit routes. |
| **500 Internal Error** | Server failure | Sanitized error response. **Raw DB or stack trace errors MUST NEVER be returned publicly.** |

---

## 4. Public API Endpoints (`/api/v1`)

### Catalog & Content Endpoints
- `GET /api/v1/business-divisions` — Active business divisions listing.
- `GET /api/v1/services` — Published services listing.
- `GET /api/v1/services/:slug` — Service detail by unique slug.
- `GET /api/v1/equipment` — Equipment listing (filtered by `public_status`).
- `GET /api/v1/equipment/:slug` — Equipment detail and public specs by slug.
- `GET /api/v1/projects` — Verified projects and client requirement summaries.
- `GET /api/v1/projects/:slug` — Project engagement detail by slug.
- `GET /api/v1/industries` — Target industry sectors listing.
- `GET /api/v1/quote-templates/:serviceSlug` — Active quote form configuration for a specific service (see Public Quote Template Boundary below). **Not implemented yet**; will be delivered with the quote submission feature.

### Public Quote Template Boundary (`GET /api/v1/quote-templates/:serviceSlug`)

> **Status**: DOCUMENTED ONLY — endpoint is NOT implemented in Step 3C. This section locks the data boundary for the future implementation.

The endpoint will eventually return **ONLY** the public-safe, currently live form configuration:

- Active service (that matches `serviceSlug`)
- Active template (`is_active = true` AND `archived_at IS NULL`)
- Current published quote form version (`status = 'published'`)
- Active fields (`is_active = true`), including `field_key`, `label`, `input_type`, `data_type`, `is_required`, `placeholder`, `help_text`, `validation_rules`
- Active options for each applicable field (`is_active = true`)
- Valid simple display conditions (`operator IN ('equals', 'not_equals')`, `action = 'show'`)

Ordering:

- Fields ordered by `display_order`
- Options ordered by `display_order`
- All nested groupings follow the parent ordering

MUST **NOT** return:

- Archived versions (`status = 'archived'`)
- Draft versions (`status = 'draft'`)
- Multiple active templates per service (the one-active-template-per-service invariant guarantees at most one)
- Internal database metadata (internal IDs beyond the minimal needed payload, `created_at`, `updated_at`, `is_active`, `archived_at`)
- Admin / audit data (e.g. `admin_users`, `audit_logs`, internal state machine metadata)

If the service slug is unknown or the service/template is not published-eligible, the endpoint returns HTTP 404 (not a malformed partial payload).

### Public Intake Endpoints
- `POST /api/v1/contact` — Submit general contact form enquiry (see Public Submission Boundary below). **Not implemented yet**; delivered with the intake feature.
- `POST /api/v1/quotes` — Submit dynamic quote request (see Public Submission Boundary below). **Not implemented yet**; delivered with the intake feature.

### Public Submission Boundary (`POST /api/v1/contact`, `POST /api/v1/quotes`)

> **Status**: DOCUMENTED ONLY — endpoints are NOT implemented in Step 3D1. This section locks the required behavior for the future implementation.

Both submission endpoints MUST:

1. **Validate with Zod** — request bodies are validated against strict schemas (including email/phone format and consent policy).
2. **Perform spam protection** — rate limiting / honeypot checks apply before a record is created.
3. **Store the database record FIRST** — the enquiry or quote request must persist successfully before any email delivery is attempted. An email provider failure MUST NOT cause the saved record to disappear.
4. **Return the generated reference number** — `CHI-ENQ-YYYY-XXXXXX` for contact, `CHI-Q-YYYY-XXXXXX` for quotes.
5. **Use the standard API envelope** — standard success/error envelope per Section 1.

`POST /api/v1/contact` creates a row in `contact_enquiries`. `POST /api/v1/quotes` creates a row in `quote_requests` plus immutable answer snapshots in `quote_answers`, and requires the selected form version to be published at submission time.

Public creation responses MUST **NOT** return:

- `assigned_to`
- internal operational data
- audit data
- admin information

A successful submission returns the reference number, a confirmation message, and safe metadata only.

---

## 5. Protected Admin API Endpoints (`/api/v1/admin/*`)

All `/api/v1/admin/*` endpoints require a valid Supabase Auth Bearer token in the `Authorization` header.

### Planned Admin Resource Endpoints:
- `/api/v1/admin/dashboard` — Operational metrics & recent activity feeds
- `/api/v1/admin/enquiries` — Enquiry list (server pagination/filters) & detail
- `/api/v1/admin/enquiries/:id/status` — Enquiry status transition & history logging
- `/api/v1/admin/enquiries/:id/notes` — Attach internal operational notes
- `/api/v1/admin/quotes` — Quote request list (server pagination/filters) & detail
- `/api/v1/admin/quotes/:id/status` — Quote status transition & history logging
- `/api/v1/admin/quotes/:id/notes` — Attach internal quote notes
- `/api/v1/admin/business-divisions` — Business division CRUD, reordering & activation
- `/api/v1/admin/services` — Service catalog CRUD & division mapping
- `/api/v1/admin/equipment-categories` — Equipment taxonomy CRUD
- `/api/v1/admin/equipment` — Equipment fleet CRUD (`internal_status` & `public_status`)
- `/api/v1/admin/equipment/:id/specs` — Dynamic equipment specs key-value manager
- `/api/v1/admin/projects` — Project portfolio CRUD & status management
- `/api/v1/admin/industries` — Industry sector taxonomy CRUD
- `/api/v1/admin/media` — Storage upload, metadata editing, asset linking & deletion checks
- `/api/v1/admin/quote-templates` — Dynamic form template versioning & field builder
- `/api/v1/admin/admin-users` — Administrative user management & role assignment (`super_admin` only)
- `/api/v1/admin/audit-logs` — Audit log inspection (`super_admin` only)
