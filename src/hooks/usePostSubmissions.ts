import { useState } from "react";
import type { SubmissionData } from "../types/SubmissionTypes";
import { postSubmitSubmission } from "../api/postSubmitSubmission";

export const usePostSubmission = () =>  {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = async (formData: SubmissionData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await postSubmitSubmission(formData);
      setSuccess(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error, success };
}
