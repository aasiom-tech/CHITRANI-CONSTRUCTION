-- Create admin_users table for Chitrani Construction backend
-- Stores administrative user accounts with role-based access control and audit metadata
CREATE TABLE public.admin_users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    auth_user_id uuid NOT NULL UNIQUE,
    display_name text NOT NULL,
    role text NOT NULL,
    is_active boolean NOT NULL DEFAULT true,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add constraint for non-blank display_name
ALTER TABLE public.admin_users
ADD CONSTRAINT chk_admin_users_display_name_not_blank
CHECK (length(btrim(display_name)) > 0);

-- Add constraint for valid role values
ALTER TABLE public.admin_users
ADD CONSTRAINT chk_admin_users_role_valid
CHECK (role IN ('super_admin', 'admin', 'viewer'));

-- Foreign key reference to auth.users
ALTER TABLE public.admin_users
ADD CONSTRAINT fk_admin_users_auth_user
FOREIGN KEY (auth_user_id)
REFERENCES auth.users(id)
ON DELETE RESTRICT;

-- Indexes for performance
CREATE INDEX admin_users_role_idx ON public.admin_users (role);
CREATE INDEX admin_users_active_idx ON public.admin_users (is_active);
CREATE INDEX admin_users_role_active_idx ON public.admin_users (role, is_active);

-- Trigger to automatically update updated_at timestamp
CREATE TRIGGER set_admin_users_updated_at
BEFORE UPDATE ON public.admin_users
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Comments for admin_users table:
-- 1. UUID primary key using gen_random_uuid() for application-level UUID generation
-- 2. auth_user_id references auth.users(id) for authentication system integration
-- 3. role CHECK constraint limits values to super_admin, admin, viewer
-- 4. display_name NOT NULL with non-blank check ensures valid display names
-- 5. is_active boolean for soft deletion/status tracking
-- 6. created_at and updated_at timestamps for audit trail
COMMENT ON TABLE public.admin_users IS 'Administrative user accounts for backend administration';
COMMENT ON COLUMN public.admin_users.id IS 'Universally unique identifier (UUID) for the admin user';
COMMENT ON COLUMN public.admin_users.auth_user_id IS 'Foreign key referencing authentication system user';
COMMENT ON COLUMN public.admin_users.display_name IS 'Human-readable name for display purposes';
COMMENT ON COLUMN public.admin_users.role IS 'Role designation with specific allowed values';
COMMENT ON COLUMN public.admin_users.is_active IS 'Flag indicating if the admin user is currently active';
COMMENT ON COLUMN public.admin_users.created_at IS 'Timestamp when the admin user was created (UTC)';
COMMENT ON COLUMN public.admin_users.updated_at IS 'Timestamp when the admin user was last updated (UTC)';
COMMENT ON INDEX admin_users_role_idx IS 'Index for efficient role-based queries';
COMMENT ON INDEX admin_users_active_idx IS 'Index for efficient active user queries';
COMMENT ON INDEX admin_users_role_active_idx IS 'Composite index for role and active status queries';
-- RLS intentionally deferred to the dedicated security phase