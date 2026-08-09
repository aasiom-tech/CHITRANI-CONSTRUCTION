# Database Schema Plan & Complete 28-Table Specification

This document provides the complete, locked database schema specifications for the Chitrani Construction backend platform running on Supabase PostgreSQL.

---

## 1. General Database Rules & Conventions

### Locked Architectural Schema Rules:
1. **Primary Keys**: All primary keys are `uuid` generated via PostgreSQL `gen_random_uuid()`.
2. **Timestamp Standard**: All date-time fields use `timestamptz` stored in UTC.
3. **Audit Timestamps**: All mutable business tables contain:
   - `created_at timestamptz NOT NULL DEFAULT now()`
   - `updated_at timestamptz NOT NULL DEFAULT now()`
4. **Soft Delete / Archival**: Content tables include:
   - `is_active boolean NOT NULL DEFAULT true`
   - `archived_at timestamptz nullable`
5. **Public Slugs**:
   - `NOT NULL`
   - `UNIQUE`
   - Lowercase URL-safe format enforced by CHECK constraint: `CHECK (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$')`
6. **No Native PostgreSQL ENUM Types**:
   - **Decision**: All workflow statuses and categorical states utilize `text + CHECK constraints`.
   - **Rationale**: Schema evolution and status additions in PostgreSQL `ENUM` types require complex DDL locks; `text + CHECK` constraints can be updated safely in zero-downtime migrations.

---

## 2. Master Table Inventory (28 Tables)

```
Catalog & Taxonomy (7):
  1. business_divisions
  2. services
  3. equipment_categories
  4. equipment
  5. equipment_specifications
  6. industries
  7. service_industries

Portfolio & Media (5):
  8. projects
  9. project_services
 10. project_industries
 11. media
 12. project_media
 13. service_media
 14. equipment_media

Dynamic Quote Form Engine (5):
 15. quote_form_templates
 16. quote_form_versions
 17. form_fields
 18. field_options
 19. field_conditions

Operations, Intake & Logs (11):
 20. admin_users
 21. contact_enquiries
 22. quote_requests
 23. quote_answers
 24. internal_notes
 25. enquiry_status_history
 26. quote_status_history
 27. audit_logs
 28. notification_logs
```

---

## 3. Comprehensive Table Specifications

### 1. Catalog & Taxonomy

#### `business_divisions`
Top-level commercial divisions (e.g., Civil Construction, Equipment Rental). These are initial configuration records, not hardcoded backend branches.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `name` text NOT NULL
- `slug` text NOT NULL UNIQUE CHECK (`slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'`)
- `description` text NULL
- `display_order` integer NOT NULL DEFAULT `0` CHECK (`display_order >= 0`)
- `is_active` boolean NOT NULL DEFAULT `true`
- `archived_at` timestamptz NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Indexes**: `UNIQUE (slug)`, `(is_active, display_order)`

#### `services`
Commercial service offerings (e.g. Concrete Boom Placer Rental, Structural Contracting).
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `division_id` uuid NOT NULL FK `business_divisions.id` ON DELETE RESTRICT
- `name` text NOT NULL
- `slug` text NOT NULL UNIQUE CHECK (`slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'`)
- `short_description` text NULL
- `full_description` text NULL
- `featured` boolean NOT NULL DEFAULT `false`
- `display_order` integer NOT NULL DEFAULT `0` CHECK (`display_order >= 0`)
- `is_active` boolean NOT NULL DEFAULT `true`
- `seo_title` text NULL
- `seo_description` text NULL
- `archived_at` timestamptz NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Indexes**: `UNIQUE (slug)`, `(division_id)`, `(is_active, display_order)`, `(division_id, is_active, display_order)`

#### `equipment_categories`
Classification for machinery fleet assets.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `name` text NOT NULL
- `slug` text NOT NULL UNIQUE CHECK (`slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'`)
- `description` text NULL
- `display_order` integer NOT NULL DEFAULT `0` CHECK (`display_order >= 0`)
- `is_active` boolean NOT NULL DEFAULT `true`
- `archived_at` timestamptz NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Indexes**: `UNIQUE (slug)`, `(is_active, display_order)`

#### `equipment`
Individual machinery assets offered for deployment.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `category_id` uuid NOT NULL FK `equipment_categories.id` ON DELETE RESTRICT
- `name` text NOT NULL
- `slug` text NOT NULL UNIQUE CHECK (`slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'`)
- `manufacturer` text NULL
- `model` text NULL
- `manufacture_year` integer NULL
- `description` text NULL
- `internal_status` text NOT NULL DEFAULT `'unknown'` CHECK (`internal_status IN ('unknown', 'available', 'assigned', 'maintenance', 'inactive')`)
- `public_status` text NOT NULL DEFAULT `'Availability subject to confirmation.'`
- `featured` boolean NOT NULL DEFAULT `false`
- `display_order` integer NOT NULL DEFAULT `0` CHECK (`display_order >= 0`)
- `is_active` boolean NOT NULL DEFAULT `true`
- `archived_at` timestamptz NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Rule**: `internal_status` is ADMIN-ONLY. Public API serializers expose `public_status` exclusively.
- **Indexes**: `UNIQUE (slug)`, `(category_id)`, `(internal_status)`, `(is_active, display_order)`, `(category_id, is_active, display_order)`

#### `equipment_specifications`
Flexible technical specification key-values for machinery. No hardcoded machine-specific columns.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `equipment_id` uuid NOT NULL FK `equipment.id` ON DELETE RESTRICT
- `specification_name` text NOT NULL
- `value` text NOT NULL
- `unit` text NULL
- `display_order` integer NOT NULL DEFAULT `0` CHECK (`display_order >= 0`)
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Indexes**: `(equipment_id)`, `(equipment_id, display_order)`

#### `industries`
Target market sectors (e.g. High-Rise Residential, Infrastructure).
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `name` text NOT NULL
- `slug` text NOT NULL UNIQUE CHECK (`slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'`)
- `short_description` text NULL
- `full_description` text NULL
- `image_id` uuid NULL FK `media.id` ON DELETE SET NULL
- `display_order` integer NOT NULL DEFAULT `0` CHECK (`display_order >= 0`)
- `is_active` boolean NOT NULL DEFAULT `true`
- `archived_at` timestamptz NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Indexes**: `UNIQUE (slug)`, `(is_active, display_order)`

#### `service_industries`
Junction mapping services to industry sectors.
- `service_id` uuid NOT NULL FK `services.id` ON DELETE CASCADE
- `industry_id` uuid NOT NULL FK `industries.id` ON DELETE CASCADE
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- **Primary Key**: `(service_id, industry_id)`
- **Rule**: `ON DELETE CASCADE` applies to relationship rows only; parent entities remain intact.
- **Indexes**: `(service_id)`, `(industry_id)`

---

### 2. Portfolio & Media

#### `projects`
Verified client engagements and documented commercial proposals.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `name` text NOT NULL
- `slug` text NOT NULL UNIQUE CHECK (`slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'`)
- `client_name` text NULL
- `location` text NULL
- `role` text NULL
- `short_description` text NULL
- `full_description` text NULL
- `project_status` text NOT NULL DEFAULT `'unknown'` CHECK (`project_status IN ('unknown', 'planned', 'active', 'on_hold', 'completed')`)
- `start_date` date NULL
- `scheduled_completion_date` date NULL
- `work_order_reference` text NULL
- `featured` boolean NOT NULL DEFAULT `false`
- `display_order` integer NOT NULL DEFAULT `0` CHECK (`display_order >= 0`)
- `is_active` boolean NOT NULL DEFAULT `true`
- `archived_at` timestamptz NULL
- `seo_title` text NULL
- `seo_description` text NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Indexes**: `UNIQUE (slug)`, `(project_status)`, `(is_active, display_order)`, `(created_at DESC)`

#### `project_services`
Junction mapping projects to services provided.
- `project_id` uuid NOT NULL FK `projects.id` ON DELETE CASCADE
- `service_id` uuid NOT NULL FK `services.id` ON DELETE CASCADE
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- **Primary Key**: `(project_id, service_id)`
- **Indexes**: `(project_id)`, `(service_id)`

#### `project_industries`
Junction mapping projects to target industries.
- `project_id` uuid NOT NULL FK `projects.id` ON DELETE CASCADE
- `industry_id` uuid NOT NULL FK `industries.id` ON DELETE CASCADE
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- **Primary Key**: `(project_id, industry_id)`
- **Indexes**: `(project_id)`, `(industry_id)`

#### `media`
Central media asset registry referencing Supabase Storage objects.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `bucket` text NOT NULL
- `storage_path` text NOT NULL
- `mime_type` text NOT NULL
- `file_size` bigint NOT NULL
- `width` integer NULL
- `height` integer NULL
- `alt_text` text NULL
- `caption` text NULL
- `visibility` text NOT NULL DEFAULT `'public'` CHECK (`visibility IN ('public', 'private', 'internal')`)
- `uploaded_by` uuid NULL FK `admin_users.id` ON DELETE SET NULL
- `is_active` boolean NOT NULL DEFAULT `true`
- `archived_at` timestamptz NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Constraint**: `UNIQUE (bucket, storage_path)`
- **Rule**: No static `public_url` column stored; URLs are derived from `bucket + storage_path`.
- **Indexes**: `(visibility)`, `(uploaded_by)`, `(created_at)`

#### `project_media`
Media relationship junction for projects.
- `project_id` uuid NOT NULL FK `projects.id` ON DELETE CASCADE
- `media_id` uuid NOT NULL FK `media.id` ON DELETE CASCADE
- `role` text NOT NULL CHECK (`role IN ('cover', 'gallery', 'inline')`)
- `display_order` integer NOT NULL DEFAULT `0` CHECK (`display_order >= 0`)
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- **Primary Key**: `(project_id, media_id, role)`

#### `service_media`
Media relationship junction for services.
- `service_id` uuid NOT NULL FK `services.id` ON DELETE CASCADE
- `media_id` uuid NOT NULL FK `media.id` ON DELETE CASCADE
- `role` text NOT NULL CHECK (`role IN ('cover', 'gallery', 'inline')`)
- `display_order` integer NOT NULL DEFAULT `0` CHECK (`display_order >= 0`)
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- **Primary Key**: `(service_id, media_id, role)`

#### `equipment_media`
Media relationship junction for equipment assets.
- `equipment_id` uuid NOT NULL FK `equipment.id` ON DELETE CASCADE
- `media_id` uuid NOT NULL FK `media.id` ON DELETE CASCADE
- `role` text NOT NULL CHECK (`role IN ('cover', 'gallery', 'inline')`)
- `display_order` integer NOT NULL DEFAULT `0` CHECK (`display_order >= 0`)
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- **Primary Key**: `(equipment_id, media_id, role)`

---

### 3. Dynamic Quote Form Engine (Versioned)

#### `quote_form_templates`
Master quote form entity tied to a specific service.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `service_id` uuid NOT NULL FK `services.id` ON DELETE RESTRICT
- `name` text NOT NULL
- `is_active` boolean NOT NULL DEFAULT `true`
- `archived_at` timestamptz NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Partial Unique Index**: `CREATE UNIQUE INDEX quote_form_templates_one_active_per_service_idx ON quote_form_templates(service_id) WHERE is_active = true AND archived_at IS NULL;`

#### `quote_form_versions`
Immutable version records for a quote form template.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `template_id` uuid NOT NULL FK `quote_form_templates.id` ON DELETE RESTRICT
- `version_number` integer NOT NULL CHECK (`version_number > 0`)
- `status` text NOT NULL DEFAULT `'draft'` CHECK (`status IN ('draft', 'published', 'archived')`)
- `published_at` timestamptz NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Constraints**: `UNIQUE (template_id, version_number)`, CHECK (`status <> 'published' OR published_at IS NOT NULL`)
- **Partial Unique Index**: `CREATE UNIQUE INDEX quote_form_versions_one_published_per_template_idx ON quote_form_versions(template_id) WHERE status = 'published';`
- **Immutability Helper**: `public.assert_quote_form_version_editable(version_uuid uuid)` raises unless the version exists with `status = 'draft'`. Used by mutation guards on `form_fields`, `field_options`, and `field_conditions` to block changes to published/archived versions.

#### `form_fields`
Individual form input definitions for a specific version.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `version_id` uuid NOT NULL FK `quote_form_versions.id` ON DELETE RESTRICT
- `field_key` text NOT NULL
- `label` text NOT NULL
- `input_type` text NOT NULL CHECK (`input_type IN ('text', 'textarea', 'number', 'date', 'select', 'radio', 'checkbox', 'email', 'phone')`)
- `data_type` text NOT NULL CHECK (`data_type IN ('string', 'number', 'boolean', 'date', 'array', 'object')`)
- `is_required` boolean NOT NULL DEFAULT `false`
- `placeholder` text NULL
- `help_text` text NULL
- `validation_rules` jsonb NOT NULL DEFAULT `'{}'`
- `display_order` integer NOT NULL DEFAULT `0` CHECK (`display_order >= 0`)
- `is_active` boolean NOT NULL DEFAULT `true`
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Constraint**: `UNIQUE (version_id, field_key)`
- **Indexes**: `(version_id)`, `(version_id, is_active, display_order)`

#### `field_options`
Selectable options for select, radio, or checkbox inputs.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `field_id` uuid NOT NULL FK `form_fields.id` ON DELETE RESTRICT
- `value` text NOT NULL
- `label` text NOT NULL
- `display_order` integer NOT NULL DEFAULT `0` CHECK (`display_order >= 0`)
- `is_active` boolean NOT NULL DEFAULT `true`
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Constraint**: `UNIQUE (field_id, value)`

#### `field_conditions`
Display logic rules governing dynamic field visibility.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `field_id` uuid NOT NULL FK `form_fields.id` ON DELETE RESTRICT
- `depends_on_field_id` uuid NOT NULL FK `form_fields.id` ON DELETE RESTRICT
- `operator` text NOT NULL CHECK (`operator IN ('equals', 'not_equals')`)
- `comparison_value` jsonb NOT NULL
- `action` text NOT NULL DEFAULT `'show'` CHECK (`action IN ('show')`)
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Application Validation Rule**: API layer MUST validate that `field_id` and `depends_on_field_id` belong to the exact same `version_id`.

---

### 4. Operations, Intake & Logs

#### `admin_users`
Administrative personnel profile record tied to Supabase Auth.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `auth_user_id` uuid NOT NULL UNIQUE
- `display_name` text NOT NULL
- `role` text NOT NULL CHECK (`role IN ('super_admin', 'admin', 'viewer')`)
- `is_active` boolean NOT NULL DEFAULT `true`
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Indexes**: `UNIQUE (auth_user_id)`

#### `contact_enquiries`
General contact web submissions.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `reference_number` text NOT NULL UNIQUE
- `name` text NOT NULL
- `company` text NULL
- `email` text NOT NULL
- `phone` text NOT NULL
- `division_id` uuid NULL FK `business_divisions.id` ON DELETE RESTRICT
- `service_id` uuid NULL FK `services.id` ON DELETE RESTRICT
- `project_location` text NULL
- `message` text NOT NULL
- `consent` boolean NOT NULL DEFAULT `false`
- `consent_at` timestamptz NULL
- `status` text NOT NULL DEFAULT `'new'` CHECK (`status IN ('new', 'contacted', 'qualified', 'closed')`)
- `assigned_to` uuid NULL FK `admin_users.id` ON DELETE SET NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Indexes**: `UNIQUE (reference_number)`, `(status)`, `(created_at)`, `(status, created_at DESC)`, `(assigned_to, status)`

#### `quote_requests`
Commercial quote requests submitted by clients.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `reference_number` text NOT NULL UNIQUE
- `division_id` uuid NOT NULL FK `business_divisions.id` ON DELETE RESTRICT
- `service_id` uuid NOT NULL FK `services.id` ON DELETE RESTRICT
- `template_id` uuid NOT NULL FK `quote_form_templates.id` ON DELETE RESTRICT
- `template_version_id` uuid NOT NULL FK `quote_form_versions.id` ON DELETE RESTRICT
- `template_version_number` integer NOT NULL
- `name` text NOT NULL
- `company` text NULL
- `email` text NOT NULL
- `phone` text NOT NULL
- `project_location` text NULL
- `preferred_start_date` date NULL
- `expected_duration` text NULL
- `message` text NULL
- `status` text NOT NULL DEFAULT `'new'` CHECK (`status IN ('new', 'under_review', 'clarification_required', 'quoted', 'won', 'lost', 'closed')`)
- `assigned_to` uuid NULL FK `admin_users.id` ON DELETE SET NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Indexes**: `UNIQUE (reference_number)`, `(status)`, `(service_id)`, `(template_version_id)`, `(status, created_at DESC)`, `(service_id, created_at DESC)`, `(assigned_to, status)`

#### `quote_answers`
Key-value answer snapshots capturing submitted inputs against field snapshots.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `quote_request_id` uuid NOT NULL FK `quote_requests.id` ON DELETE RESTRICT
- `field_id` uuid NOT NULL FK `form_fields.id` ON DELETE RESTRICT
- `field_key_snapshot` text NOT NULL
- `field_label_snapshot` text NOT NULL
- `field_type_snapshot` text NOT NULL
- `value_json` jsonb NOT NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- **Indexes**: `(quote_request_id)`, `(field_id)`

#### `internal_notes`
Internal operational comments attached to enquiries or quotes.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `enquiry_id` uuid NULL FK `contact_enquiries.id` ON DELETE RESTRICT
- `quote_request_id` uuid NULL FK `quote_requests.id` ON DELETE RESTRICT
- `note` text NOT NULL
- `created_by` uuid NOT NULL FK `admin_users.id` ON DELETE RESTRICT
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Constraint**: `CHECK ( (enquiry_id IS NOT NULL AND quote_request_id IS NULL) OR (enquiry_id IS NULL AND quote_request_id IS NOT NULL) )`
- **Rule**: Strictly confidential; never exposed via public APIs.
- **Indexes**: `(enquiry_id)`, `(quote_request_id)`, `(created_by)`, `(created_at)`

#### `enquiry_status_history`
Immutable status audit log for contact enquiries.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `enquiry_id` uuid NOT NULL FK `contact_enquiries.id` ON DELETE RESTRICT
- `old_status` text NULL
- `new_status` text NOT NULL
- `changed_by` uuid NULL FK `admin_users.id` ON DELETE SET NULL
- `note` text NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- **Indexes**: `(enquiry_id)`, `(created_at)`, `(enquiry_id, created_at DESC)`

#### `quote_status_history`
Immutable status audit log for commercial quote requests.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `quote_request_id` uuid NOT NULL FK `quote_requests.id` ON DELETE RESTRICT
- `old_status` text NULL
- `new_status` text NOT NULL
- `changed_by` uuid NULL FK `admin_users.id` ON DELETE SET NULL
- `note` text NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- **Indexes**: `(quote_request_id)`, `(created_at)`, `(quote_request_id, created_at DESC)`

#### `audit_logs`
System-wide administrative action logs.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `actor_admin_id` uuid NULL FK `admin_users.id` ON DELETE SET NULL
- `entity_type` text NOT NULL
- `entity_id` uuid NOT NULL
- `action` text NOT NULL
- `before_summary` jsonb NULL
- `after_summary` jsonb NULL
- `request_id` uuid NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- **Rule**: Must never store passwords, access tokens, service keys, or sensitive customer form bodies.
- **Indexes**: `(actor_admin_id)`, `(entity_type)`, `(entity_id)`, `(created_at)`, `(entity_type, entity_id)`

#### `notification_logs`
Delivery log for email notifications and system alerts.
- `id` uuid PK DEFAULT `gen_random_uuid()`
- `event_type` text NOT NULL
- `enquiry_id` uuid NULL FK `contact_enquiries.id` ON DELETE RESTRICT
- `quote_request_id` uuid NULL FK `quote_requests.id` ON DELETE RESTRICT
- `recipient` text NOT NULL
- `provider` text NOT NULL
- `provider_message_id` text NULL
- `delivery_status` text NOT NULL DEFAULT `'pending'` CHECK (`delivery_status IN ('pending', 'sent', 'delivered', 'failed')`)
- `error_summary` text NULL
- `created_at` timestamptz NOT NULL DEFAULT `now()`
- `updated_at` timestamptz NOT NULL DEFAULT `now()`
- **Constraint**: `CHECK ( enquiry_id IS NULL OR quote_request_id IS NULL )`
- **Indexes**: `(enquiry_id)`, `(quote_request_id)`, `(delivery_status)`, `(created_at)`, `(provider_message_id)`

---

## 4. Reference Number Strategy

Reference numbers are generated server-side using a collision-safe, formatted sequence pattern:
- **Contact Enquiries**: `CHI-ENQ-YYYY-XXXXXX` (e.g. `CHI-ENQ-2026-000101`)
- **Quote Requests**: `CHI-Q-YYYY-XXXXXX` (e.g. `CHI-Q-2026-000101`)

### Rules:
1. Enforced by `UNIQUE` database constraint.
2. Generated server-side inside PostgreSQL sequence/function or Express service layer.
3. Browser-provided reference numbers are **never trusted**.

---

## 5. Delete & Archival Matrix

| Category | Entities | Policy & Strategy |
| :--- | :--- | :--- |
| **Business Content** | `business_divisions`, `services`, `equipment_categories`, `equipment`, `industries`, `projects`, `quote_form_templates` | **Soft Delete / Archival**. Use `is_active = false` and `archived_at = now()`. Hard deletion is strictly prohibited once referenced. |
| **Historical Data** | `contact_enquiries`, `quote_requests`, `quote_answers`, `enquiry_status_history`, `quote_status_history`, `audit_logs`, `notification_logs` | **Immutable Operational Records**. Never cascade delete. `ON DELETE RESTRICT` enforced on foreign keys. |
| **Junction Records** | `service_industries`, `project_services`, `project_industries`, `project_media`, `service_media`, `equipment_media` | **Relationship row deletion**: For business-to-business junctions (e.g. `service_industries`, `project_services`, `project_industries`) `ON DELETE CASCADE` is acceptable because only mapping rows are removed. For media junctions (`project_media`, `service_media`, `equipment_media`), the `media_id` → `media.id` foreign key uses `ON DELETE RESTRICT` to prevent removing a media record that is still referenced; media must be explicitly unlinked/archived before deletion. |

---

## 6. Public / Private Column Classification

| Table | PUBLIC SAFE (Exposed via Public API) | ADMIN ONLY (Dashboard / Server Only) | SYSTEM ONLY (Internal Keys) |
| :--- | :--- | :--- | :--- |
| `services` | `name`, `slug`, `short_description`, `full_description`, `featured`, `seo_title`, `seo_description` | `is_active`, `archived_at`, `display_order` | `id`, `division_id`, `created_at`, `updated_at` |
| `equipment` | `name`, `slug`, `manufacturer`, `model`, `manufacture_year`, `description`, `public_status`, `featured` | `internal_status`, `is_active`, `archived_at` | `id`, `category_id`, `created_at`, `updated_at` |
| `projects` | `name`, `slug`, `client_name`, `location`, `role`, `short_description`, `full_description`, `project_status`, `featured`, `seo_title`, `seo_description` | `work_order_reference`, `start_date`, `scheduled_completion_date`, `is_active`, `archived_at` | `id`, `created_at`, `updated_at` |
| `contact_enquiries` | *None (Submissions return only reference_number)* | `name`, `company`, `email`, `phone`, `project_location`, `message`, `status`, `assigned_to` | `id`, `division_id`, `service_id`, `created_at`, `updated_at` |
| `quote_requests` | *None (Submissions return only reference_number)* | `name`, `company`, `email`, `phone`, `project_location`, `preferred_start_date`, `expected_duration`, `message`, `status`, `assigned_to` | `id`, `division_id`, `service_id`, `template_id`, `template_version_id`, `created_at`, `updated_at` |

---

## Migration Implementation Status

All migrations created so far are defined in SQL files under `backend/supabase/migrations/` but have NOT been executed against Supabase.

Status:

- 0001 — CREATED, NOT EXECUTED
- 0002 — CREATED, NOT EXECUTED
- 0003 — CREATED, NOT EXECUTED
- 0004 — CREATED, NOT EXECUTED
- 0005 — CREATED, NOT EXECUTED
- 0006 — CREATED, NOT EXECUTED
- 0007 — CREATED, NOT EXECUTED
- 0008 — CREATED, NOT EXECUTED
- 0009 — CREATED, NOT EXECUTED
- 0010 — CREATED, NOT EXECUTED
- 0011 — CREATED, NOT EXECUTED
- 0012 — CREATED, NOT EXECUTED
- 0013 — CREATED, NOT EXECUTED
- 0014 — CREATED, NOT EXECUTED
- 0015 — CREATED, NOT EXECUTED
- 0016 — CREATED, NOT EXECUTED
- 0017 — CREATED, NOT EXECUTED
- 0018 — CREATED, NOT EXECUTED
- 0019 — CREATED, NOT EXECUTED
- 0020 — CREATED, NOT EXECUTED
- 0021 — CREATED, NOT EXECUTED

0022-0027: CREATED, NOT EXECUTED

Seed data: CREATED, NOT EXECUTED

Verified initial seed records: 8

Industries: DEFERRED PENDING EXPLICIT BUSINESS APPROVAL

Supabase execution: NONE

All 28 planned application table definitions are represented in migrations.

0027 adds sequences/functions/defaults but does not add an application table.

## 7. Recommended Migration Dependency Order (27 Steps)

```
 1. 0001_initial_extensions_and_helpers.sql   (uuid-ossp / pgcrypto, timestamp triggers)
 2. 0002_create_business_divisions.sql
 3. 0003_create_services.sql
 4. 0004_create_equipment_categories.sql
 5. 0005_create_admin_users.sql
 6. 0006_create_media.sql
 7. 0007_create_equipment.sql
 8. 0008_create_equipment_specifications.sql
 9. 0009_create_industries.sql                (Foreign Key to media)
10. 0010_create_service_industries.sql
11. 0011_create_projects.sql
12. 0012_create_project_services_and_industries.sql
13. 0013_create_media_junctions.sql           (project_media, service_media, equipment_media)
14. 0014_create_quote_form_templates.sql
15. 0015_create_quote_form_versions.sql
16. 0016_create_form_fields.sql
17. 0017_create_field_options.sql
18. 0018_create_field_conditions.sql
19. 0019_create_contact_enquiries.sql
20. 0020_create_quote_requests.sql
21. 0021_create_quote_answers.sql
22. 0022_create_internal_notes.sql
23. 0023_create_enquiry_status_history.sql
24. 0024_create_quote_status_history.sql
25. 0025_create_audit_logs.sql
26. 0026_create_notification_logs.sql
27. 0027_create_reference_sequences.sql
```
