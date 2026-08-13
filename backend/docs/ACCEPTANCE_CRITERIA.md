# Backend & Admin Acceptance Criteria (Step 2.5)

This document establishes the acceptance criteria and verification tests required prior to production deployment of the backend and administration platform.

---

## Acceptance Test Inventory

1. **Super Admin Access Verification**:
   - *Test*: Active `super_admin` authenticates via Supabase Auth and accesses protected `/api/v1/admin/*` endpoints.
   - *Pass Criteria*: API returns HTTP 200 with admin user context.

2. **Inactive / Unknown Admin Rejection**:
   - *Test*: Deactivated or unlisted Auth user attempts to access `/api/v1/admin/*`.
   - *Pass Criteria*: API rejects request with HTTP 403 Forbidden.

3. **Viewer Role Mutation Defense**:
   - *Test*: User with `viewer` role submits a POST/PATCH/DELETE request to an admin route (e.g. `PATCH /api/v1/admin/enquiries/:id/status`).
   - *Pass Criteria*: Request fails with HTTP 403 Forbidden even if sent directly via API tools bypassing UI buttons.

4. **Admin Operational Scope**:
   - *Test*: User with `admin` role manages catalog content, equipment, projects, enquiries, and quotes.
   - *Pass Criteria*: All authorized mutations succeed with HTTP 200/201.

5. **Dynamic Schema Service Addition**:
   - *Test*: Add a new business division (e.g. "Infrastructure Contracting") and new service record via database/API.
   - *Pass Criteria*: New division and service appear in catalog APIs without requiring backend code changes or SQL schema modifications.

6. **Display Order Configuration**:
   - *Test*: Update `display_order` of a service or equipment item in the Admin CMS.
   - *Pass Criteria*: Public API and frontend catalog reflect updated ordering immediately without redeploying code.

7. **Dynamic Quote Form Generation**:
   - *Test*: Configure and publish a new form version with dynamic fields for a service.
   - *Pass Criteria*: Public `GET /api/v1/quote-templates/:serviceSlug` API returns the active form structure and validation rules.

8. **Historical Quote Snapshot Preservation**:
   - *Test*: Submit a quote request under Version 1. Modify the quote template to Version 2 (change field labels/types). Fetch Version 1 quote detail in Admin.
   - *Pass Criteria*: Admin quote detail renders original submitted answers using `quote_answers` snapshots without distortion from Version 2.

9. **Contact Enquiry Persistence & Resiliency**:
   - *Test*: Submit `POST /api/v1/contact`.
   - *Pass Criteria*: Record persists to `contact_enquiries` and `CHI-ENQ-YYYY-XXXXXX` reference number is returned regardless of downstream email dispatch status.

10. **Quote Submission Persistence**:
    - *Test*: Submit `POST /api/v1/quotes` with dynamic form answers.
    - *Pass Criteria*: Record persists to `quote_requests`, dynamic answers persist to `quote_answers`, and reference number `CHI-Q-YYYY-XXXXXX` is returned.

11. **Public API Data Leakage Isolation**:
    - *Test*: Inspect public API responses (`/api/v1/services`, `/api/v1/equipment`, `/api/v1/projects`).
    - *Pass Criteria*: No internal fields (`internal_status`, `assigned_to`, `internal_notes`, `work_order_reference`, provider errors) are exposed.

12. **Dynamic Equipment Specification Addition**:
    - *Test*: Add new technical specification key-values (e.g. `Maximum Reach: 42m`) to an equipment record.
    - *Pass Criteria*: Specs are saved and served without adding new database columns.

13. **Media Upload & Publishing**:
    - *Test*: Upload image asset to media library, associate role with a project, and set public visibility.
    - *Pass Criteria*: Media record created, storage path linked, and image URL derived correctly in public project payload.

14. **File Upload Security Validation**:
    - *Test*: Attempt uploading executable scripts (`.exe`, `.sh`, `.php`) or oversized files to public/admin upload endpoints.
    - *Pass Criteria*: API rejects upload with HTTP 400 Bad Request and validation error message.

15. **Public Form Rate Limiting & Spam Defense**:
    - *Test*: Send rapid automated POST requests to `/api/v1/contact` and `/api/v1/quotes`.
    - *Pass Criteria*: Rate limiter triggers and returns HTTP 429 Too Many Requests.

16. **Browser Bundle Secret Isolation**:
    - *Test*: Inspect compiled client assets and browser network logs.
    - *Pass Criteria*: No Supabase `service_role` key, database passwords, or private environment variables exist in client bundles.

17. **Sanitized Error Envelopes**:
    - *Test*: Trigger unhandled server exception or database query failure.
    - *Pass Criteria*: API returns standard JSON error envelope with HTTP 500 without leaking raw database tracebacks or stack traces.

18. **Direct RLS & API Defense**:
    - *Test*: Execute direct queries against PostgreSQL using anon/authenticated keys bypassing backend Express API.
    - *Pass Criteria*: Supabase RLS blocks unauthorized reads/writes to administrative tables.

19. **Audit Trail Completeness**:
    - *Test*: Perform administrative content update or status transition.
    - *Pass Criteria*: Immutable log entry created in `audit_logs` capturing actor ID, entity ID, action, and timestamp.

20. **Backup & Disaster Recovery Verification**:
    - *Test*: Execute automated PostgreSQL database backup dump and restore to staging environment.
    - *Pass Criteria*: Staging database restores completely with 100% data integrity.

21. **Staging Environment Validation**:
    - *Test*: Perform full end-to-end regression testing on Staging prior to production release.
    - *Pass Criteria*: All functional workflows pass on Staging environment.
