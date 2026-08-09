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
2. **SDK Verification**: Token is validated against Supabase Auth using the server SDK.
3. **User Record Lookup**: User's UUID is looked up in the `admin_users` table to confirm `is_active = true` and retrieve assigned `role`.
4. **Role Middleware Enforcement**: Route-level middleware (e.g. `requireRole(['admin', 'super_admin'])`) evaluates permissions before executing controller logic.

---

## 5. Key Security Boundaries & Rules

- **Service-Role Key Isolation**: The Supabase `service_role` key bypasses RLS and possesses master database privileges. It must remain strictly encapsulated inside backend server environment secrets (`.env`) and must **NEVER** be committed to Git or exposed to client-side bundles.
- **Sanitized Errors**: Authentication failures return standard HTTP `401 Unauthorized` or `403 Forbidden` JSON envelopes without revealing internal implementation details.
