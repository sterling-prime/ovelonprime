import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface ContactPayload {
  firstName: string;
  lastName: string;
  businessName: string;
  businessEmail: string;
  requestDetails: string;
}

export interface SubmitContactResult {
  success: boolean;
  referenceId?: string;
  error?: string;
}

interface UseSubmitContactOptions {
  onSuccess?: (result: SubmitContactResult) => void;
  onError?: (error: string) => void;
}

export function useSubmitContact(options: UseSubmitContactOptions = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastError, setLastError] = useState<string | null>(null);

  const submit = useCallback(async (payload: ContactPayload): Promise<SubmitContactResult> => {
    setIsSubmitting(true);
    setLastError(null);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const { data, error } = await supabase.functions.invoke("submit-contact", {
        body: payload,
      });

      clearTimeout(timeoutId);

      if (error) {
        const errorMessage = error.message || "Failed to submit. Please try again.";
        setLastError(errorMessage);
        options.onError?.(errorMessage);
        return { success: false, error: errorMessage };
      }

      if (!data?.success) {
        const errorMessage = data?.error || "Submission failed. Please try again.";
        setLastError(errorMessage);
        options.onError?.(errorMessage);
        return { success: false, error: errorMessage };
      }

      const result: SubmitContactResult = {
        success: true,
        referenceId: data.referenceId,
      };

      options.onSuccess?.(result);
      return result;

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
      setLastError(errorMessage);
      options.onError?.(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  }, [options]);

  const clearError = useCallback(() => {
    setLastError(null);
  }, []);

  return {
    submit,
    isSubmitting,
    lastError,
    clearError,
  };
}
