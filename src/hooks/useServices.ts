import { useEffect, useState } from "react";
import { publicFetch, PublicApiError } from "../lib/public-api";
import type { ServiceSummary, ServiceDetail } from "../types/api";

export function useServices(divisionSlug?: string) {
  const [data, setData] = useState<ServiceSummary[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const query = divisionSlug ? `?divisionSlug=${encodeURIComponent(divisionSlug)}` : "";
      const result = await publicFetch<ServiceSummary[]>(`/api/v1/services${query}`);
      setData(result);
    } catch (err) {
      if (err instanceof PublicApiError) {
        setError("Service information is temporarily unavailable. Please try again.");
      } else {
        setError("Service information is temporarily unavailable. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, [divisionSlug]);

  return { data, loading, error, retry: fetchData };
}

export function useServiceBySlug(slug: string | undefined) {
  const [data, setData] = useState<ServiceDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) { setLoading(false); return; }
    let active = true;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await publicFetch<ServiceDetail>(`/api/v1/services/${encodeURIComponent(slug)}`);
        if (active) setData(result);
      } catch (err) {
        if (active) {
          if (err instanceof PublicApiError && err.status === 404) {
            setData(null);
          } else {
            setError("Service information is temporarily unavailable. Please try again.");
          }
        }
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, [slug]);

  return { data, loading, error };
}
