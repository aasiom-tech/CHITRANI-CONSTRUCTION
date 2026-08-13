# Authentication & Authorization Model — V1

This document specifies the authentication model, administrative role definitions, authorization validation flows, and security guidelines for V1 backend APIs.

---

## 1. Scope & Strategy

1. **Admin Users Only**: Supabase Auth is utilized **strictly for internal administrative personnel**.
2. **No Customer Accounts**: V1 does NOT include customer logins, customer portals, or self-service client accounts. Public website visitors interact exclusively through public REST endpoints.
3. **Server-Side Authorization**: The browser client is **never trusted** for access control. All permissions are validated explicitly by the Node.js Express backend API.

---

## 2. Administrative Role Hierarchy & Permissions Matrix

| Operational Action | `viewer` | `admin` | `super_admin` |
| :--- | :---: | :---: | :---: |
| **Read Catalog Content (Divisions, Services, Equipment, Projects)** | Yes | Yes | Yes |
| **Read Enquiries, Quotes & History** | Yes | Yes | Yes |
| **Manage Catalog Content (Create, Edit, Reorder)** | **No** | Yes | Yes |
| **Manage Fleet Inventory (`internal_status`, `public_status`)** | **No** | Yes | Yes |
| **Manage Media Assets & Uploads** | **No** | Yes | Yes |
| **Transition Enquiry & Quote Statuses** | **No** | Yes | Yes |
| **Attach Internal Operational Notes** | **No** | Yes | Yes |
| **Configure & Publish Quote Form Templates** | **No** | Yes | Yes |
| **Manage Admin User Accounts & Invite Users** | **No** | **No** | Yes |
| **Assign / Modify Admin Roles** | **No** | **No** | Yes |
| **Inspect System Audit Logs** | **No** | **No** | Yes |

### Security Invariants:
1. **Viewer Mutation Defense**: `viewer` role accounts are strictly prohibited from performing any state-changing operations (`create`, `edit`, `delete`, `archive`, `activate`, `status_change`, `assign`, `upload`). This rule MUST be enforced at the Express route middleware layer—bypassing UI buttons via raw API calls will return HTTP 403 Forbidden.
2. **Unknown Role Policy**: Any token evaluating to an unrecognized or unmapped role is **DENIED BY DEFAULT** (HTTP 403 Forbidden).

---

## 3. Last Super Admin Protection Invariant

> **CRITICAL APPLICATION INVARIANT**: The server-side API MUST prevent deactivation, demotion, or deletion of the final active `super_admin` user account.

### Enforcement Rule:
Before executing an account deactivation, role demotion, or user deletion on an account with `role = 'super_admin'`:
1. Query `admin_users` to count active accounts where `role = 'super_admin'` AND `is_active = true`.
2. If count `<= 1`, the API MUST reject the operation with HTTP 409 Conflict: `"Cannot deactivate or demote the sole remaining active Super Admin."`

This invariant is documented for future admin-management service implementation. The reusable authorization middleware (`requireAdminRole`) provides the foundation; the specific last-super-admin check will be implemented in the admin user management routes.

---

## 4. Authorization Validation Flow

```
 Admin Frontend (React)
     │
     │ 1. Sign in via Supabase Auth
     ▼
 Supabase Auth Server ──( Returns JWT Access Token )──► Admin Frontend
                                                              │
                                                              │ 2. Request /api/v1/admin/*
                                                              │    Header: Authorization: Bearer <token>
                                                              ▼
                                                     Express Backend API
                                                              │
                                                              │ 3. Verify JWT with Supabase SDK
                                                              │ 4. Extract Auth User UUID
                                                              │ 5. Query `admin_users` table
                                                              │ 6. Check `is_active` & `role`
                                                              ▼
                                                 [ Allow Action / Reject 403 ]
```

### Protocol Requirements:
1. **Token Extraction**: Express authentication middleware extracts JWT from the `Authorization: Bearer <token>` header.
2. **SDK Verification**: Token is validated against Supabase Auth using the server SDK (`supabase.auth.getUser(jwt)`).
3. **User Record Lookup**: User's UUID is looked up in the `admin_users` table to confirm `is_active = true` and retrieve assigned `role`.
4. **Role Middleware Enforcement**: Route-level middleware (e.g. `requireAdminRole(['admin', 'super_admin'])`) evaluates permissions before executing controller logic.

### Implementation Details:
- **Authentication Middleware**: `requireAdminAuth` (in `src/middleware/require-admin-auth.ts`)
  - Validates `Authorization` header structure and Bearer scheme
  - Rejects empty/missing tokens with HTTP 401
  - Calls `supabase.auth.getUser(jwt)` using the publishable-key client for token verification
  - Looks up `admin_users` record using `auth_user_id` FK via service-role client (`getSupabaseAdminClient()`)
  - Verifies `is_active = true`
  - Attaches typed `AdminIdentity { authUserId, adminUserId, role }` to `req.admin`
- **Authorization Middleware**: `requireAdminRole(...allowedRoles)` (in `src/middleware/require-admin-role.ts`)
  - Accepts one or more explicitly allowed roles as variadic arguments
  - **`super_admin` is always allowed** for any non-empty allowedRoles list (global override)
  - For `admin` and `viewer`: role must be **explicitly present** in allowedRoles
  - Examples:
    - `requireAdminRole('super_admin')` → super_admin only
    - `requireAdminRole('admin')` → admin + super_admin
    - `requireAdminRole('viewer')` → viewer + super_admin
    - `requireAdminRole('admin', 'viewer')` → admin + viewer + super_admin
    - `requireAdminRole('super_admin', 'viewer')` → super_admin + viewer (NOT admin)
  - Returns HTTP 403 if authenticated user's role doesn't meet requirement
  - Empty allowedRoles list throws development error (programmer error)
  - Provides helper predicates `isSuperAdmin(req)`, `isAdminOrAbove(req)`

---

## 5. Key Security Boundaries & Rules

- **Service-Role Key Isolation**: The Supabase `service_role` key bypasses RLS and possesses master database privileges. It must remain strictly encapsulated inside backend server environment secrets (`.env`) and must **NEVER** be committed to Git or exposed to client-side bundles.
- **Sanitized Errors**: Authentication failures return standard HTTP `401 Unauthorized` or `403 Forbidden` JSON envelopes without revealing internal implementation details.
- **Role Source of Truth**: Role is **never** trusted from the client request body, query params, or JWT claims. It is **always** retrieved from the `admin_users` database record after successful Supabase Auth verification.
- **Authentication vs Authorization Separation**:
  - **Authentication** (401): Supabase user identity verified via `getUser(jwt)`
  - **Authorization** (403): `admin_users` record exists, is active, and has required role
- **Token Handling**: Bearer tokens are never logged, printed, or exposed in error responses.
- **Supabase Failure Handling**: Network/auth provider failures return sanitized 500 errors without exposing provider internals.

---

## 6. Error Response Codes

| Scenario | HTTP Status | Error Code |
| :--- | :---: | :--- |
| Missing `Authorization` header | 401 | `UNAUTHENTICATED` |
| Invalid Bearer scheme / empty token | 401 | `UNAUTHENTICATED` |
| Invalid/expired Supabase JWT | 401 | `UNAUTHENTICATED` |
| Supabase Auth unavailable | 500 | `INTERNAL_ERROR` |
| No `admin_users` record for auth user | 403 | `FORBIDDEN` |
| `admin_users.is_active = false` | 403 | `FORBIDDEN` |
| Role insufficient for endpoint | 403 | `FORBIDDEN` |
| Unknown/unmapped role | 403 | `FORBIDDEN` |

---

## 7. Admin Users Schema Reference

```sql
CREATE TABLE public.admin_users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    auth_user_id uuid NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE RESTRICT,
    display_name text NOT NULL CHECK (length(btrim(display_name)) > 0),
    role text NOT NULL CHECK (role IN ('super_admin', 'admin', 'viewer')),
    is_active boolean NOT NULL DEFAULT true,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);
```

- **Auth Mapping Column**: `auth_user_id` (FK → `auth.users.id`)
- **Active/Deactivation Mechanism**: `is_active` boolean (soft delete pattern)
- **Roles**: `super_admin`, `admin`, `viewer` (enforced by CHECK constraint)
- **No Auth Users Created**: Current remote `admin_users` count is 0. Supabase Auth users and `admin_users` rows are created separately during admin onboarding, not by this foundation code.

---

## 8. Future Admin Management Rules (Not Yet Implemented)

- **Last Super Admin Protection**: Must be enforced in admin user management routes before any deactivation/demotion/deletion of a `super_admin`.
- **Admin Invitation Flow**: Supabase Auth `inviteUserByEmail` + `admin_users` record creation (super_admin only).
- **Role Assignment**: Super_admin only, via dedicated `/api/v1/admin/admin-users` endpoints.
- **Audit Logging**: All admin user changes logged with `actor_admin_id`, `action`, `entity_type`, `entity_id`.