# Admin Dashboard & Backend Work Package Backlog

This document outlines the sequential development work packages (ADM-01 through ADM-20) for building out the backend platform and administrative dashboard.

---

## Development Work Packages

### Phase 1: Core Foundation & Security Infrastructure
- **ADM-01**: Admin Shell & Layout Framework (React Router, Dashboard Shell, Navigation Sidebar)
- **ADM-02**: Supabase Auth Integration & Token Handshake (Admin Login, JWT Management)
- **ADM-03**: Backend Express Role Middleware & Route Protection (`requireRole` checks for `super_admin`, `admin`, `viewer`)

### Phase 2: Operations & Intake Modules
- **ADM-04**: Operational Dashboard & Real-Time Activity Feed Widgets
- **ADM-05**: Contact Enquiries Module (List, Server Pagination, Filters, Status Transitions, Assignee)
- **ADM-06**: Commercial Quote Requests Module (List, Server Pagination, Dynamic Snapshot Viewer, Status Transitions)

### Phase 3: Catalog & Taxonomy CMS
- **ADM-07**: Business Divisions Management (List, Create, Edit, Reorder, Activate/Archive)
- **ADM-08**: Services Catalog Management (List, Create, Edit, Division Mapping, SEO Fields)
- **ADM-09**: Dynamic Quote Form Builder (Template Manager, Version Controller, Field/Condition Editor, Form Preview)

### Phase 4: Fleet, Portfolio & Media CMS
- **ADM-10**: Equipment Fleet Registry (`public_status` vs `internal_status`, Category Mapping)
- **ADM-11**: Dynamic Equipment Specifications Manager (Key-Value Spec Editor)
- **ADM-12**: Projects Portfolio Manager (Engagement Records, Client Details, Visibility Toggles)
- **ADM-13**: Industry Sector Manager (Taxonomy & Service Mapping)
- **ADM-14**: Media Library Manager (Supabase Storage Upload, Metadata Editor, Asset Re-use, Multi-Role Junctions)

### Phase 5: Administration, Security & Quality Assurance
- **ADM-15**: Admin Users & User Access Management (Account Invites, Role Assignment, Deactivation, Last Super Admin Invariant)
- **ADM-16**: Audit & Activity Log Viewer (System Activity Stream, Action Filters)
- **ADM-17**: Environment Configuration & Multi-Environment Isolation
- **ADM-18**: RLS Policy Hardening & Upload Security Scanners
- **ADM-19**: Staging Environment E2E Regression Testing
- **ADM-20**: Production Deployment, Database Backup Strategy & System Handover
