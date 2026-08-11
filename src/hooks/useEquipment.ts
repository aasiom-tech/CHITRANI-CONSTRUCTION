import { useEffect, useState } from "react";
import { publicFetch, PublicApiError } from "../lib/public-api";
import type { EquipmentListItem, EquipmentDetail } from "../types/api";

export function useEquipmentList(category?: string) {
  const [data, setData] = useState<EquipmentListItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const query = category ? `?category=${encodeURIComponent(category)}` : "";
      const result = await publicFetch<EquipmentListItem[]>(`/api/v1/equipment${query}`);
      setData(result);
    } catch {
      setError("Equipment information is temporarily unavailable. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, [category]);

  return { data, loading, error, retry: fetchData };
}

export function useEquipmentBySlug(slug: string | undefined) {
  const [data, setData] = useState<EquipmentDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) { setLoading(false); return; }
    let active = true;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await publicFetch<EquipmentDetail>(`/api/v1/equipment/${encodeURIComponent(slug)}`);
        if (active) setData(result);
      } catch (err) {
        if (active) {
          if (err instanceof PublicApiError && err.status === 404) {
            setData(null);
          } else {
            setError("Equipment information is temporarily unavailable. Please try again.");
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
