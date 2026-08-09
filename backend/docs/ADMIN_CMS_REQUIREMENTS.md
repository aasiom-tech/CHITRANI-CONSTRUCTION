# Admin Dashboard & CMS Functional Requirements (Step 2.5 Alignment)

## 1. Executive Overview & System Boundary

The Chitrani Construction Administrative Dashboard is an internal operational management tool and Content Management System (CMS).

### Core System Principles:
- **Internal Only**: Restricted strictly to authorized internal administration personnel.
- **NOT a Customer Portal**: V1 does not host client login accounts, customer self-service portals, billing software, or public database management tools.
- **NOT an ERP / Generic Database Editor**: Business logic, workflow rules, validation schemas, and state transitions are governed strictly by the backend application layer.
- **Architectural Control Flow**:
  ```
  Admin UI (React Dashboard)
    └── Authenticated Requests (/api/v1/admin/*)
          └── Backend Authorization & JWT Token Validation
                └── Zod Input Validation
                      └── Service / Business Domain Logic
                            └── Repository / Database Access Layer
                                  └── Supabase PostgreSQL Database
  ```
- **Direct Browser Writes Banned**: Browser code MUST NEVER make direct privileged data-mutation writes to PostgreSQL tables. Supabase Row Level Security (RLS) acts as a defense-in-depth safety net, NOT as a substitute for backend API authorization.

---

## 2. Admin Navigation Modules

The Admin Dashboard interface organizes administrative operations into 13 locked functional modules:

1. **Dashboard**: High-level operational metrics and recent activity feeds.
2. **Enquiries**: Intake management, assignment, and status workflows for general contact inquiries.
3. **Quotes**: Commercial quote request intake, dynamic snapshot answer reviews, status transitions, and estimation notes.
4. **Business Divisions**: Catalog management for top-level commercial divisions.
5. **Services**: Service catalog management, division mapping, SEO attributes, and quote template associations.
6. **Equipment**:
   - Equipment Categories
   - Equipment Fleet Registry (`internal_status` vs `public_status`)
   - Equipment Specifications (Dynamic key-value parameters)
7. **Projects**: Portfolio management for confirmed engagements and client requirement records.
8. **Industries**: Sector taxonomy and industry mapping.
9. **Media Library**: Storage asset registry, metadata editing, visibility controls, and upload management.
10. **Quote Form Builder**: Dynamic form template versioning, field configuration, display conditions, and publication management.
11. **Admin Users**: Internal user administration, access control, and role assignments (`super_admin`, `admin`, `viewer`).
12. **Audit / Activity**: Immutable log inspection for security, system modifications, and admin actions.

---

## 3. Dynamic Slug & Content Publishing Rules

When creating catalog content (Business Divisions, Services, Equipment Categories, Equipment, Projects, Industries):
1. **Initial Slug Generation**: Slugs may be automatically generated from the item name upon initial draft creation.
2. **Post-Publication Slug Lock**: Changing the item name/title after publication MUST NOT automatically change the public `slug`.
3. **Explicit Slug Modification**: Slugs are permanent public routing handles. Modifying a slug requires an explicit, separate administrative action.
4. **Server-Side Validation**: All slug modifications MUST be validated server-side against the regex `^[a-z0-9]+(?:-[a-z0-9]+)*$` and checked for global uniqueness.

---

## 4. Module Operational Specifications

### A. Business Divisions & Services Management
- Admin can create, edit, activate, deactivate, archive, and adjust `display_order` for divisions and services.
- **Seed Records**: Construction Contracting and Equipment Rental are initial seed records in the database, NOT hardcoded frontend or backend logic branches.
- Service fields include `name`, `slug`, `division_id`, `short_description`, `full_description`, `featured`, `display_order`, `is_active`, `seo_title`, and `seo_description`.

### B. Equipment & Specification Management
- Admin manages category mapping, name, slug, manufacturer, model, manufacture year, description, `internal_status`, `public_status`, active/featured state, display order, and media attachments.
- Specs are managed as dynamic key-value rows (`specification_name`, `value`, `unit`, `display_order`). Adding new spec types requires zero database column migrations.
- `internal_status` is strictly confidential and never exposed via public APIs.

### C. Project Portfolio Management
- Admin manages project records (name, slug, client name, location, role, descriptions, project status, dates, work order references, featured state, and media).
- **Public Visibility Rules**:
  - `name`, `slug`, `short_description`, `full_description`, approved status text, and media are public-safe when active.
  - `work_order_reference` and `archived_at` are **ADMIN ONLY by default** and must never be exposed publicly.

### D. Dynamic Quote Form Builder
- Admin workflow: Select Business Division → Select Service → Select Quote Template → Version Management.
- Admin capabilities: Create draft version, add/edit/reorder fields, toggle required state, define select/radio options, set display conditions (`equals`, `not_equals`), preview public form, publish.
- Supported Field Types: `text`, `textarea`, `number`, `date`, `select`, `radio`, `checkbox`, `email`, `phone`.
- **Immutability & Historical Preservation**: Published versions are immutable. Updating a form requires cloning to a new draft version and publishing. Past submitted quote answers remain readable via historical snapshots regardless of template updates.

#### Confirmed Quote Form Builder Requirements (Step 3C)
The future Admin Quote Builder MUST support the full publication workflow:

1. **Create template** — one template per service (database-configured; services like Construction Contracting and Equipment Rental are NOT hardcoded branches).
2. **Create draft version** — all new/edited content starts as a draft version.
3. **Configure fields** — machine-readable `field_key`, label, input type, data type, placeholder, help text.
4. **Configure required state** — `is_required` toggle per field.
5. **Configure validation** — JSON `validation_rules` object per field; enforced server-side via the backend validator.
6. **Reorder fields** — `display_order` controls the rendered sequence.
7. **Configure options** — options attached to applicable input types (`select`, `radio`, `checkbox`); unsupported field types MUST be rejected by the backend.
8. **Configure simple conditions** — v1 supports only `equals` / `not_equals` with `action = 'show'`; the conditional field and dependency field MUST belong to the same version.
9. **Preview draft** — draft forms are previewable but never exposed publicly.
10. **Publish** — a version moves `draft → published`; only one published version may exist per template.
11. **Archive old version** — previously published versions are archived (`published → archived`) and preserved intact, never deleted.

**Viewer** role: read-only access to forms; cannot modify.
**Admin / Super Admin**: can create, edit, and publish forms according to the role policy.
**Immutable Published Content**: Once published, fields, labels, field keys, validation, options, and conditions MUST NOT be edited directly. Changes require cloning to a new draft version, editing, previewing, and re-publishing.

### E. Enquiry & Quote Request Administration
- **Contact Enquiries List**: Displays reference number (`CHI-ENQ-YYYY-XXXXXX`), received date, name, company, division/service, location, status, assignee.
- **Quote Requests List**: Displays reference number (`CHI-Q-YYYY-XXXXXX`), received timestamp, division, service, name, company, location, preferred start date, status, assignee.
- **Server-Side Pagination & Filtering**: Filter by status, division/service, assignee, date range. Search by reference, name, company, email, phone. SQL inputs are sanitized and parameterized server-side.
- **Historical Quote Detail Rule**: Quote details render submitted responses using `field_key_snapshot`, `field_label_snapshot`, `field_type_snapshot`, and `value_json` stored in `quote_answers`. The system MUST NEVER reinterpret historical quotes using only current active template configurations.

#### Confirmed Enquiry & Quote Detail Requirements (Step 3D1)

**Enquiry Detail** (from `contact_enquiries`) MUST include:
- Submitted contact information (name, company, email, phone)
- Requirement (division/service choice, project location, message)
- Reference number and received timestamp
- Consent information (consent flag and captured timestamp)
- Status and assignment
- Future history / internal notes (rendered from future `enquiry_status_history` / `internal_notes` tables — not yet created)

**Quote Detail** (from `quote_requests`) MUST include:
- Reference number
- Division / service
- Requester (name, company, email, phone)
- Common fields (project location, preferred start date, expected duration, message)
- Historical snapshot answers from `quote_answers` — rendered via `field_key_snapshot`, `field_label_snapshot`, `field_type_snapshot`, and `value_json`
- Status and assignment
- Future history / internal notes (future `quote_status_history` / `internal_notes` tables — not yet created)

**Dynamic answers rule**: Historical snapshot answers MUST be rendered from `quote_answers` rows. Dynamic answers MUST NOT be flattened into list-table columns or stored in any flat column structure. `quote_requests` reference number generation arrives in Step 3D2 (`CHI-Q-YYYY-XXXXXX`).

### F. Dashboard Operational Metrics
- Real-time operational metric counters:
  - New enquiries
  - New quote requests
  - Enquiries awaiting action
  - Quotes awaiting review
  - Active public services
  - Active equipment items
  - Recent administrative activity feed
- V1 excludes complex financial/revenue BI widgets.

### G. Media Library Administration
- Supports uploading, reusing, updating alt text/captions, viewing file size/mime type, and referencing media across projects, services, and equipment.
- Server validates MIME type, file extension, and maximum size. Executable scripts (`.exe`, `.sh`, `.php`, `.js`) are strictly rejected.
- Deleting media referenced by active published content is blocked or flagged with an explicit warning.
- Asset URLs are derived from `bucket + storage_path` (signed URLs generated as needed).

#### Media Deletion Workflow (Admin)

1. Admin selects one or more media assets to delete from the Media Library UI.
2. Backend performs a referential check across `project_media`, `service_media`, and `equipment_media` to find any active references.
3. If referenced by active published content, the backend returns a blocking warning listing referencing entities; deletion is not permitted until those references are explicitly unlinked or archived.
4. Admin may choose to unlink/archive references via approved Admin actions; each such change is recorded in the audit log.
5. Once media is unreferenced (no rows remain in junction tables), the backend permits physical deletion of the media record and optionally the object from storage according to policy.
6. All media deletion (or unlink) operations are recorded in the audit logs with `actor_admin_id`, `entity_type`, `entity_id`, `action`, and safe before/after summaries.

---

## 5. Audit Logging & Security Operations

### Audited Administrative Actions:
`create`, `update`, `status_change`, `assignment_change`, `activate`, `deactivate`, `archive`, `publish`, `upload`, `unlink`, `delete` (where allowed), `admin_role_change`, `admin_access_change`.

### Audit Log Constraints:
- Log records record: `actor_admin_id`, `action`, `entity_type`, `entity_id`, timestamp, `request_id`, and safe before/after summary.
- Audit logs MUST NEVER log passwords, access tokens, API keys, or sensitive customer form bodies.

---

## 6. Data Safety, Form UX & Environment Model

### Data Safety & Privacy:
- Personal customer data (email, phone, message contents) must never be printed to browser consoles, external analytics, or raw server logs.
- Multi-environment model: `Development`, `Staging / Preview`, `Production`. Development environments MUST NEVER use production enquiry/customer records as casual test data.

### Admin Form UX Standards:
- Form fields feature clear labels, required indicators, inline field validation error messaging, submit debouncing (prevent double submits), unsaved change warnings, and destructive action confirmation dialogs.
