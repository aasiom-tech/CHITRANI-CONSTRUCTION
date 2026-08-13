import React, { createContext, useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import { apiFetch, ApiError } from "../lib/api";
import type { AdminIdentity } from "../types/admin";
import type { Session } from "@supabase/supabase-js";

interface AdminAuthState {
  session: Session | null;
  admin: AdminIdentity | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<AdminIdentity | null>;
  signOut: () => Promise<void>;
}

export const AdminAuthContext = createContext<AdminAuthState | null>(null);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [admin, setAdmin] = useState<AdminIdentity | null>(null);
  const [loading, setLoading] = useState(true);
  const activeRef = useRef(true);

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
    activeRef.current = true;

    supabase.auth.getSession().then(async ({ data: { session: sess } }) => {
      if (!activeRef.current) return;
      if (sess) {
        const identity = await fetchAdmin(sess);
        if (!activeRef.current) return;
        setSession(sess);
        setAdmin(identity);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, sess) => {
      if (!activeRef.current) return;
      if (sess) {
        const identity = await fetchAdmin(sess);
        if (!activeRef.current) return;
        setSession(sess);
        setAdmin(identity);
      } else {
        setSession(null);
        setAdmin(null);
      }
      setLoading(false);
    });

    return () => {
      activeRef.current = false;
      subscription.unsubscribe();
    };
  }, [fetchAdmin]);

  const signIn = useCallback(async (email: string, password: string): Promise<AdminIdentity | null> => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    const { data: { session: sess } } = await supabase.auth.getSession();
    if (!sess) return null;

    const identity = await fetchAdmin(sess);
    setSession(sess);
    setAdmin(identity);
    return identity;
  }, [fetchAdmin]);

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
