import type { SubmissionData } from "../types/SubmissionTypes";
import { BASE_URL } from "./config"

export const postSubmitSubmission = async (data: SubmissionData) => {
    const response = await fetch(`${BASE_URL}/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if(!response.ok) {
        throw new Error("Errore durante la submit");
    }

    return response.json();
}