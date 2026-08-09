# Seed Data — Chitrani Construction Backend

## Overview

`backend/supabase/seed.sql` contains safe, verified initial configuration data for development.

**Status:** CREATED, EXECUTED (DEV)
**Remote DEV deployment:** COMPLETE — 8 records seeded, idempotent re-run verified.

---

## Seeded Records

| Table | Records | Notes |
|-------|---------|-------|
| `business_divisions` | 2 | Construction Contracting, Equipment Rental |
| `services` | 2 | Construction Contracting, Concrete Boom Placer Rental |
| `equipment_categories` | 1 | Concrete Boom Placers |
| `equipment` | 1 | Putzmeister M42-5 Concrete Boom Placer |
| `equipment_specifications` | 2 | Boom Reach (42 m), Capacity (90 m³) |

**Total seeded records: 8**

---

## Explicitly Deferred

The following will be added later through Admin/CMS configuration or integration phases:

| Category | Reason Deferred |
|----------|----------------|
| Industries | Pending explicit approved business confirmation — frontend contains mix of "evidenced" and "applicability" sectors, no approved company document confirms full list |
| Admin users | Auth integration required |
| Contact enquiries | Operational data, not seed |
| Quote requests | Operational data, not seed |
| Quote answers | Operational data, not seed |
| Internal notes | Operational data, not seed |
| Status histories | Operational data, not seed |
| Audit logs | Operational data, not seed |
| Notification logs | Operational data, not seed |
| Projects | CMS publication rules pending |
| Media assets | Supabase Storage not configured |
| Quote form templates/versions | Reconciliation with frontend pending |
| Form fields/options/conditions | Template configuration pending |
| Service-industry relationships | Matrix not locked |

---

## Notes

- The existing frontend industry list (`src/data/industries.ts`) is not being deleted or modified.
- Backend seed uses a stricter verified-fact threshold than frontend applicability content.
- The `industries` table schema remains ready for data when business confirmation is received.

---

## Seed Safety

- Uses `ON CONFLICT DO NOTHING` for idempotency
- Rerunning does not overwrite Admin edits
- No destructive operations (`TRUNCATE`, `DELETE`, `DROP`)
- No hard-coded UUIDs (resolves parent IDs by slug)
- No invented business descriptions (NULL where unspecified)
