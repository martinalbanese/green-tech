import type { SubmissionListData } from "../types/SubmissionTypes";
import { BASE_URL } from "./config"

export const getAllSubmissions = async (): Promise<SubmissionListData[]> => {
    const response = await fetch(`${BASE_URL}/`, {
        method: "GET",
    });

    if(!response.ok) {
        throw new Error("rrore nel recupero delle submission");
    }

    return response.json();
}