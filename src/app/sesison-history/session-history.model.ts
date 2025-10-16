export interface SessionHistory {
  id?: number;
  session: number;
  timeStarted: string; // ISO date string, e.g. "2025-10-15T12:12:52.553197Z"
  timeFinished: string | null; // null if session still in progress
  status: string; // or adjust based on your backend
  firstName: string;
  lastName: string;
  totalDistraction: number;
}
