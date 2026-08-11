import { useEffect, useState } from "react";
import { publicFetch } from "../lib/public-api";
import type { BusinessDivision } from "../types/api";

export function useBusinessDivisions() {
  const [data, setData] = useState<BusinessDivision[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const result = await publicFetch<BusinessDivision[]>("/api/v1/business-divisions");
        if (active) setData(result);
      } catch {
        if (active) setError("Failed to load divisions");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  return { data, loading, error };
}
