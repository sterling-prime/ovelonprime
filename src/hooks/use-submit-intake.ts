import { useState, useCallback } from "react";

interface SubmitResult {
  success: boolean;
  referenceId?: string;
  pdfAttached?: boolean;
  error?: string;
  errorCode?: string;
}

interface UseSubmitIntakeOptions {
  onSuccess?: (result: SubmitResult) => void;
  onError?: (error: string, errorCode?: string) => void;
  maxRetries?: number;
}

/**
 * Custom hook for robust intake form submission
 * Handles iOS Safari quirks, retry logic, and proper error handling
 */
export function useSubmitIntake(options: UseSubmitIntakeOptions = {}) {
  const { onSuccess, onError, maxRetries = 1 } = options;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastError, setLastError] = useState<string | null>(null);

  const submit = useCallback(async (payload: any): Promise<SubmitResult> => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
    const isDev = import.meta.env.DEV;
    
    setIsSubmitting(true);
    setLastError(null);

    let attempt = 0;
    let lastAttemptError: Error | null = null;

    while (attempt <= maxRetries) {
      attempt++;
      
      if (isDev) {
        console.log(`[Intake Submit] Attempt ${attempt}/${maxRetries + 1}`, {
          url: `${API_URL}/api/request-review`,
          payloadSize: JSON.stringify(payload).length,
        });
      }

      try {
        // Create abort controller for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

        const response = await fetch(`${API_URL}/api/request-review`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            // Safari-specific: avoid cache issues
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
          },
          body: JSON.stringify({ data: payload }),
          signal: controller.signal,
          // Important for Safari: don't send credentials unless needed
          credentials: "omit",
          // Ensure request completes even if page navigates (Safari)
          keepalive: true,
        });

        clearTimeout(timeoutId);

        if (isDev) {
          console.log(`[Intake Submit] Response status: ${response.status}`);
        }

        // Handle non-OK responses
        if (!response.ok) {
          let errorMessage = "Server error";
          let errorCode = `HTTP_${response.status}`;

          try {
            const errorData = await response.json();
            errorMessage = errorData.error || errorData.message || errorMessage;
            errorCode = errorData.code || errorCode;
            
            if (isDev) {
              console.error("[Intake Submit] Server error response:", errorData);
            }
          } catch {
            // Response wasn't JSON, use status text
            errorMessage = response.statusText || errorMessage;
          }

          // Don't retry client errors (4xx) except 429 (rate limit)
          if (response.status >= 400 && response.status < 500 && response.status !== 429) {
            throw new Error(errorMessage);
          }

          // Retry server errors (5xx) and rate limits
          lastAttemptError = new Error(errorMessage);
          
          if (attempt <= maxRetries) {
            // Wait before retry with exponential backoff
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
            continue;
          }
          
          throw lastAttemptError;
        }

        // Parse successful response
        const responseData = await response.json();

        if (isDev) {
          console.log("[Intake Submit] Success:", {
            referenceId: responseData.referenceId,
            pdfAttached: responseData.pdfAttached,
          });
        }

        const result: SubmitResult = {
          success: true,
          referenceId: responseData.referenceId,
          pdfAttached: responseData.pdfAttached,
        };

        setIsSubmitting(false);
        onSuccess?.(result);
        return result;

      } catch (error) {
        lastAttemptError = error instanceof Error ? error : new Error(String(error));

        if (isDev) {
          console.error(`[Intake Submit] Attempt ${attempt} failed:`, lastAttemptError.message);
        }

        // Handle abort/timeout specifically
        if (lastAttemptError.name === "AbortError") {
          lastAttemptError = new Error("Request timed out. Please check your connection and try again.");
        }

        // Handle network errors (common on mobile)
        if (lastAttemptError.message === "Failed to fetch" || lastAttemptError.message.includes("NetworkError")) {
          lastAttemptError = new Error("Network connection failed. Please check your internet connection.");
        }

        // If we have retries left, continue
        if (attempt <= maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
          continue;
        }
      }
    }

    // All retries exhausted
    const errorMessage = lastAttemptError?.message || "Failed to submit request";
    setLastError(errorMessage);
    setIsSubmitting(false);
    onError?.(errorMessage);

    return {
      success: false,
      error: errorMessage,
    };
  }, [maxRetries, onSuccess, onError]);

  return {
    submit,
    isSubmitting,
    lastError,
    clearError: () => setLastError(null),
  };
}
