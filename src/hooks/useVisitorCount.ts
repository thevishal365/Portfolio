import { useEffect, useState } from 'react';

/**
 * Real visitor count read from GoatCounter's public counter endpoint
 * (https://www.goatcounter.com/help/visitor-counter).
 *
 * Uses the unauthenticated endpoint that becomes available once
 * "Allow adding visitor counts on your website" is enabled in the
 * GoatCounter site settings:
 *
 *   https://<site-code>.goatcounter.com/counter/TOTAL.json
 *
 * This requires no API token and sends CORS headers, so it is safe to
 * call directly from the browser. (The private /api/v0/stats/* API was
 * deliberately avoided: it would require baking a secret token into
 * the client bundle via VITE_* environment variables.)
 *
 * The site code defaults to "vishalkumar" and can be overridden with
 * VITE_GOATCOUNTER_SITE (optional; no env setup is required).
 *
 * The response is a formatted string such as "4" or "1,234". When the
 * endpoint is unreachable or misconfigured the hook returns null and
 * the footer hides the counter instead of showing fake data.
 */
export function useVisitorCount(): string | null {
  const [count, setCount] = useState<string | null>(null);

  useEffect(() => {
    const site = import.meta.env.VITE_GOATCOUNTER_SITE || 'vishalkumar';

    let cancelled = false;

    fetch(`https://${site}.goatcounter.com/counter/TOTAL.json`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: { count?: string }) => {
        if (!cancelled && typeof data?.count === 'string' && data.count.length > 0) {
          setCount(data.count);
        }
      })
      .catch(() => {
        // Unreachable or counts not allowed — leave hidden rather than fake it.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return count;
}
