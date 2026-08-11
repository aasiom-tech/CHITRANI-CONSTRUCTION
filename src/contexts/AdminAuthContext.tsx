import React, { createContext, useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { apiFetch, ApiError } from "../lib/api";
import type { AdminIdentity } from "../types/admin";
import type { Session } from "@supabase/supabase-js";

interface AdminAuthState {
  session: Session | null;
  admin: AdminIdentity | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AdminAuthContext = createContext<AdminAuthState | null>(null);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [admin, setAdmin] = useState<AdminIdentity | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAdmin = useCallback(async (sess: Session): Promise<AdminIdentity | null> => {
    try {
      const identity = await apiFetch<AdminIdentity>("/api/v1/admin/me");
      return identity;
    } catch (err) {
      if (err instanceof ApiError && (err.status === 401 || err.status === 403)) {
        return null;
      }
      return null;
    }
  }, []);

  useEffect(() => {
    let active = true;

    supabase.auth.getSession().then(async ({ data: { session: sess } }) => {
      if (!active) return;
      if (sess) {
        const identity = await fetchAdmin(sess);
        if (!active) return;
        setSession(sess);
        setAdmin(identity);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, sess) => {
      if (!active) return;
      if (sess) {
        const identity = await fetchAdmin(sess);
        if (!active) return;
        setSession(sess);
        setAdmin(identity);
      } else {
        setSession(null);
        setAdmin(null);
      }
      setLoading(false);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [fetchAdmin]);

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setSession(null);
    setAdmin(null);
  }, []);

  return (
    <AdminAuthContext.Provider value={{ session, admin, loading, signIn, signOut }}>
      {children}
    </AdminAuthContext.Provider>
  );
}
