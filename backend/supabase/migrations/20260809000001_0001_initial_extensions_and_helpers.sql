-- Enable the pgcrypto extension for UUID generation
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Shared function to automatically update the updated_at timestamp
-- This function will be attached to tables via triggers to update the updated_at column
-- before any UPDATE operation on a table
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Comments for the set_updated_at function:
-- 1. Timestamps use UTC-compatible timestamptz type for timezone-aware storage
-- 2. gen_random_uuid() is used for application UUID primary keys (not used in this migration)
-- 3. updated_at triggers will be attached to mutable tables during later migrations
COMMENT ON FUNCTION public.set_updated_at() IS 'Automatically updates updated_at timestamp to current time (UTC) before UPDATE operations';