export interface SubmissionData {
  projectName: string;
  school: string;
  contactPerson: string;
  email: string;
  province: string;
  className: string;
  description: string;
  level: number;
}

export interface SubmissionResult {
  id: number;
  projectName: string;
  submissionDate: string;
}

export interface SubmissionListData {
  projectName: string;
  school: string;
  description: string;
}