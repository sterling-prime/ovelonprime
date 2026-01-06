import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

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
 * Uses Supabase Edge Function for server-side PDF generation and email
 */
export function useSubmitIntake(options: UseSubmitIntakeOptions = {}) {
  const { onSuccess, onError, maxRetries = 1 } = options;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastError, setLastError] = useState<string | null>(null);

  const submit = useCallback(async (payload: any): Promise<SubmitResult> => {
    const isDev = import.meta.env.DEV;
    
    setIsSubmitting(true);
    setLastError(null);

    let attempt = 0;
    let lastAttemptError: Error | null = null;

    while (attempt <= maxRetries) {
      attempt++;
      
      if (isDev) {
        console.log(`[Intake Submit] Attempt ${attempt}/${maxRetries + 1}`, {
          payloadSize: JSON.stringify(payload).length,
        });
      }

      try {
        // Create abort controller for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

        // Use Supabase Edge Function for submission
        const { data, error } = await supabase.functions.invoke("submit-intake", {
          body: { data: payload },
        });

        clearTimeout(timeoutId);

        if (error) {
          if (isDev) {
            console.error("[Intake Submit] Supabase function error:", error);
          }
          
          // Check if it's a retryable error (network or 5xx)
          const isRetryable = error.message?.includes("network") || 
                              error.message?.includes("timeout") ||
                              error.message?.includes("500");
          
          if (isRetryable && attempt <= maxRetries) {
            lastAttemptError = new Error(error.message || "Server error");
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
            continue;
          }
          
          throw new Error(error.message || "Failed to submit request");
        }

        // Handle explicit error in response data
        if (data && !data.success) {
          const errorMessage = data.error || "Submission failed";
          const errorCode = data.errorCode;
          
          if (isDev) {
            console.error("[Intake Submit] Server returned error:", { errorMessage, errorCode });
          }
          
          throw new Error(errorMessage);
        }

        if (isDev) {
          console.log("[Intake Submit] Success:", {
            referenceId: data?.referenceId,
            pdfAttached: data?.pdfAttached,
          });
        }

        const result: SubmitResult = {
          success: true,
          referenceId: data?.referenceId,
          pdfAttached: data?.pdfAttached,
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
        if (lastAttemptError.message === "Failed to fetch" || 
            lastAttemptError.message.includes("NetworkError") ||
            lastAttemptError.message.includes("network")) {
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
