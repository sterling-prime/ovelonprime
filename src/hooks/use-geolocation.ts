import { useState, useEffect, useCallback } from "react";

interface GeoLocation {
  country: string;
  countryCode: string;
  city: string;
  confidence: "high" | "medium" | "low";
}

interface UseGeolocationResult {
  location: GeoLocation | null;
  isLoading: boolean;
  error: string | null;
}

// Free IP geolocation service - no API key required, GDPR compliant
const IP_SERVICES = [
  {
    url: "https://ipapi.co/json/",
    parse: (data: any): GeoLocation => ({
      country: data.country_name || "",
      countryCode: data.country_code || "",
      city: data.city || "",
      confidence: data.city ? "high" : "medium",
    }),
  },
  {
    url: "https://ipwho.is/",
    parse: (data: any): GeoLocation => ({
      country: data.country || "",
      countryCode: data.country_code || "",
      city: data.city || "",
      confidence: data.city ? "high" : "medium",
    }),
  },
];

export const useGeolocation = (): UseGeolocationResult => {
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLocation = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    for (const service of IP_SERVICES) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const response = await fetch(service.url, {
          signal: controller.signal,
          headers: {
            Accept: "application/json",
          },
        });

        clearTimeout(timeoutId);

        if (!response.ok) continue;

        const data = await response.json();
        const parsed = service.parse(data);

        if (parsed.country) {
          setLocation(parsed);
          setIsLoading(false);
          return;
        }
      } catch {
        // Try next service
        continue;
      }
    }

    // All services failed - graceful fallback
    setError("Location detection unavailable");
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchLocation();
  }, [fetchLocation]);

  return { location, isLoading, error };
};
