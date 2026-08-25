import { useEffect, useState } from 'react';

/**
 * Real visitor count read from the GoatCounter API
 * (https://www.goatcounter.com/help/api).
 *
 * Requires two environment variables in .env.local (never committed):
 *   VITE_GOATCOUNTER_SITE      - your GoatCounter site code
 *   VITE_GOATCOUNTER_API_TOKEN - a GoatCounter API token
 *
 * When either is missing (or the API is unreachable) the hook returns
 * null and the footer hides the counter instead of showing fake data.
 * This is a read-only GET; page views themselves are counted by the
 * tracker script loaded in src/lib/analytics.ts.
 */
export function useVisitorCount(): number | null {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const site = import.meta.env.VITE_GOATCOUNTER_SITE;
    const token = import.meta.env.VITE_GOATCOUNTER_API_TOKEN;

    if (!site || !token) return;

    const start = '2015-01-01'; // all-time range
    const end = new Date().toISOString().slice(0, 10);
    let cancelled = false;

    fetch(`https://${site}.goatcounter.com/api/v0/stats/total?start=${start}&end=${end}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: { total?: number }) => {
        if (!cancelled && typeof data?.total === 'number') {
          setCount(data.total);
        }
      })
      .catch(() => {
        // Unreachable or unauthorized — leave hidden rather than fake it.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return count;
}
