# Architecture Lock — Backend V1 Foundation

## 1. Executive Summary & Core Architectural Principle

This document locks the technical stack, architectural boundaries, and core design principles for the Chitrani Construction backend platform.

### Primary Architectural Principle:
> **"Build configuration, not branching logic."**

Concrete Construction Contracting and Equipment Rental are **initial configuration records** within a generic dynamic domain model. They are **NOT** permanent hard-coded backend branches.

The backend is explicitly designed to support future operational expansion—such as **Crane Rental**, **Excavator Rental**, **Infrastructure Contracting**, or **Demolition Services**—without:
- Adding new service-specific SQL table columns
- Creating separate quote tables per service
- Rewriting quote submission or processing flows
- Introducing service-specific `if/else` control flow branches in API controllers

---

## 2. Technical Stack Specifications

| Layer | Selection | Rationale / Rule |
| :--- | :--- | :--- |
| **Frontend** | Existing React + TypeScript + Vite | Existing website codebase remains untouched. |
| **Backend Runtime** | Node.js + Express + TypeScript | Lightweight, typed, production-ready REST container. |
| **Database** | Supabase PostgreSQL | Fully relational PostgreSQL database hosting 28 master tables. |
| **Authentication** | Supabase Auth | Administrative backend authentication ONLY. |
| **Storage** | Supabase Storage | Object storage for media, site photos, drawing files, and BOQ attachments. |
| **Validation** | Zod | Strict schema validation for incoming payload contracts. |
| **Email Service (Future)** | Resend or SMTP | Server-side notification service for quote submissions and alerts. |
| **API Protocol** | REST (`/api/v1`) | Versioned REST API layer returning standard JSON contracts. |
| **Database Access** | Supabase Server Client + Raw SQL Migrations | Direct typed query execution and raw migration control. |

### Strict ORM Ban:
> **NO ORM (Prisma, Drizzle, Sequelize, TypeORM, etc.) is allowed in V1.**
> Database access is governed exclusively by Supabase Server SDK and versioned SQL migration scripts in `backend/supabase/migrations`.

---

## 3. Database Schema Architecture (28 Master Tables)

The backend relational schema consists of **28 locked master tables** categorized into 4 core functional domains:
1. **Catalog & Taxonomy (7 tables)**: `business_divisions`, `services`, `equipment_categories`, `equipment`, `equipment_specifications`, `industries`, `service_industries`.
2. **Portfolio & Media (7 tables)**: `projects`, `project_services`, `project_industries`, `media`, `project_media`, `service_media`, `equipment_media`.
3. **Dynamic Quote Form Engine (5 tables)**: `quote_form_templates`, `quote_form_versions`, `form_fields`, `field_options`, `field_conditions`.
4. **Operations, Intake & Logs (9 tables)**: `admin_users`, `contact_enquiries`, `quote_requests`, `quote_answers`, `internal_notes`, `enquiry_status_history`, `quote_status_history`, `audit_logs`, `notification_logs`.

---

## 4. Dynamic Quote Form & Template Versioning Architecture

To support arbitrary business services and maintain complete historical quotation accuracy, quote forms utilize a dynamic versioned schema.

### Versioning Hierarchy:
```
Service (e.g. Concrete Boom Placer Rental)
  └── Quote Form Template
        └── Quote Form Version (v1.0.0 - Published)
              ├── Form Fields (e.g. Boom Reach, Concrete Volume)
              │     └── Field Options & Validations
              └── Field Display Conditions
```

### Immutable Versioning Rules:
1. **Historical Immutability**: A published `Quote Form Version` is **immutable**. It must NEVER be modified in place once quotes have been submitted against it.
2. **Evolution Flow**: When form fields or validation rules change:
   - Clone existing template structure into a new version (e.g. `v1.1.0`).
   - Modify fields, labels, options, or conditions on the draft version.
   - Publish the new version and deprecate/archive the previous version.
3. **Submission Snapshot**: Every submitted `Quote Request` records a frozen JSON snapshot of:
   - Template ID and Template Version ID
   - Field key, label, and type snapshot (`field_key_snapshot`, `field_label_snapshot`, `field_type_snapshot`)
   - Submitted values (`quote_answers`) and uploaded attachment metadata

### Historical Quote Rendering Rule:
> **CRITICAL ALIGNMENT RULE**: The Admin Quote Detail view MUST render historical answers primarily from `quote_answers` snapshots (`field_key_snapshot`, `field_label_snapshot`, `field_type_snapshot`, `value_json`).
> The application MUST NEVER reinterpret an old submitted quote using only the CURRENT active quote form template version.

---

## 5. Public / Private Data Boundary Guidelines

1. **Client Confidentiality**: Public APIs (`/api/v1/services`, `/api/v1/equipment`, `/api/v1/projects`) must NEVER expose:
   - Assigned sales representatives (`assigned_to`)
   - Internal staff notes (`internal_notes`)
   - Audit logs (`audit_logs`)
   - Internal maintenance status
   - Administrative user profiles or emails
   - Database/provider error tracebacks
2. **Equipment Status Separation**: Equipment items maintain two decoupled status indicators:
   - `public_status`: Available, On Rent, Reserved (visible on frontend).
   - `internal_status`: In Service, Inspection Pending, Maintenance Required, Decommissioned (strictly server-internal).
3. **Key Isolation**: Supabase Service-Role keys must **NEVER** be exposed to browser runtimes. They remain strictly encapsulated inside Node.js environment secrets.

---

## 6. Supabase Client Architecture

Two explicit Supabase client roles are maintained in `backend/src/lib/`:

| Client | File | Key Used | RLS | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Public** | `supabase-public.ts` | `SUPABASE_PUBLISHABLE_KEY` | Respected | Public API operations subject to normal RLS authorization |
| **Admin** | `supabase-admin.ts` | `SUPABASE_SECRET_KEY` | Bypassed | Server-only privileged operations after authorization/business validation |

### Rules:
1. Both clients are lazy-initialized on first use — the server starts without Supabase credentials.
2. The admin client bypasses RLS and therefore must **not** substitute for authorization or business validation.
3. Possession of the secret key is **not** itself Admin user authorization.
4. Future Admin authentication will verify identity server-side and check `admin_users` role before privileged operations.
5. Future public endpoints must still use Zod validation, business validation, rate limiting, and safe repository methods before persistence.

---

## 7. Database Security Baseline (Remote DEV)

**Deployment status:** 29/29 migrations applied, seed executed, lint clean.

### RLS Policy
- RLS enabled on all 28 application tables
- Zero public RLS policies — all API access mediated by Express backend
- anon/authenticated roles: revoked from all application tables and helper functions
- service_role: granted explicit access to application tables and helper functions

### Function Security
- Migration 0028: secured 15 helper functions (REVOKE EXECUTE FROM anon, authenticated; GRANT EXECUTE TO service_role)
- Migration 0029: hardened future postgres-created objects (TABLE/SEQUENCE/FUNCTION defaults to service_role only; EXECUTE revoked from PUBLIC)

### Supabase-Managed Defaults
- `supabase_admin` → anon/authenticated on public schema are infrastructure defaults — not removable
- Mitigated by zero public RLS policies (publishable key returns 401 on all application tables)
