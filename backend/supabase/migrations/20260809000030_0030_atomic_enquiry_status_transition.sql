-- Migration 0030: Atomic enquiry status transition
-- Performs status update + history insert in a single transaction
-- so that status changes cannot occur without a matching audit row.
--
-- SECURITY:
--   - SECURITY INVOKER (caller's privileges apply)
--   - PUBLIC/anon/authenticated EXECUTE revoked
--   - service_role EXECUTE granted (trusted server-side caller)
--
-- APPLICATION RESPONSIBILITY:
--   - Application middleware enforces viewer/admin/super_admin authorization
--   - This function still validates that the actor is an active admin_users row
--     so a compromised authenticated Supabase user without admin membership
--     cannot transition statuses even if they reach this function.

-- =============================================================================
-- A. ATOMIC ENQUIRY STATUS TRANSITION FUNCTION
-- =============================================================================

CREATE OR REPLACE FUNCTION public.transition_enquiry_status(
    enquiry_uuid uuid,
    requested_status text,
    actor_admin_uuid uuid,
    OUT enquiry_id uuid,
    OUT old_status text,
    OUT new_status text,
    OUT changed boolean,
    OUT history_id uuid
)
RETURNS record
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
DECLARE
    v_current_status text;
    v_actor_active boolean;
BEGIN
    -- 1. Validate requested status against the locked status set
    IF requested_status NOT IN ('new', 'contacted', 'qualified', 'closed') THEN
        RAISE EXCEPTION 'Invalid enquiry status: %', requested_status
            USING ERRCODE = '22023';
    END IF;

    -- 2. Validate actor corresponds to an ACTIVE admin_users row
    SELECT a.is_active
    INTO v_actor_active
    FROM public.admin_users AS a
    WHERE a.id = actor_admin_uuid;

    IF NOT FOUND OR v_actor_active IS DISTINCT FROM true THEN
        RAISE EXCEPTION 'Actor admin % is not an active admin', actor_admin_uuid
            USING ERRCODE = '42501';
    END IF;

    -- 3. Lock and read the enquiry row
    SELECT ce.status
    INTO v_current_status
    FROM public.contact_enquiries AS ce
    WHERE ce.id = enquiry_uuid
    FOR UPDATE;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Enquiry % does not exist', enquiry_uuid
            USING ERRCODE = 'P0002';
    END IF;

    -- 4. Set common output values
    enquiry_id := enquiry_uuid;
    old_status := v_current_status;

    -- 5. No-op when requested status equals current status
    IF v_current_status = requested_status THEN
        new_status := v_current_status;
        changed := false;
        history_id := NULL;
        RETURN;
    END IF;

    -- 6. Update the enquiry status
    UPDATE public.contact_enquiries
    SET status = requested_status,
        updated_at = now()
    WHERE id = enquiry_uuid;

    -- 7. Insert exactly one history row
    INSERT INTO public.enquiry_status_history (
        enquiry_id,
        old_status,
        new_status,
        changed_by,
        note
    )
    VALUES (
        enquiry_uuid,
        v_current_status,
        requested_status,
        actor_admin_uuid,
        NULL
    )
    RETURNING id INTO history_id;

    -- 8. Set final output values
    new_status := requested_status;
    changed := true;
END;
$$;

-- =============================================================================
-- B. SECURITY HARDENING
-- =============================================================================

-- Revoke PUBLIC EXECUTE (built-in default)
REVOKE EXECUTE ON FUNCTION public.transition_enquiry_status(uuid, text, uuid) FROM PUBLIC;

-- Explicitly revoke from client roles
REVOKE EXECUTE ON FUNCTION public.transition_enquiry_status(uuid, text, uuid) FROM anon;
REVOKE EXECUTE ON FUNCTION public.transition_enquiry_status(uuid, text, uuid) FROM authenticated;

-- Grant EXECUTE to service_role (trusted server-side caller)
GRANT EXECUTE ON FUNCTION public.transition_enquiry_status(uuid, text, uuid) TO service_role;

-- =============================================================================
-- C. COMMENTS
-- =============================================================================

COMMENT ON FUNCTION public.transition_enquiry_status(uuid, text, uuid) IS
    'Atomically transitions a contact_enquiries status and writes exactly one enquiry_status_history row. Same-status requests are a clean no-op. SECURITY INVOKER; service_role only.';