import { useState, useEffect } from "react";
import type { SubmissionListData } from "../types/SubmissionTypes";
import { getAllSubmissions } from "../api/getAllSubmission"; // aggiorna il path corretto

export const useSubmissions = () => {
  const [submissions, setSubmissions] = useState<SubmissionListData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const data = await getAllSubmissions();
        setSubmissions(data);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
        setSubmissions(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  return { submissions, loading, error };
};
