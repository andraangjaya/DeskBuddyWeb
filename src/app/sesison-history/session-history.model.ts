export interface SessionHistory {
  id?: number;
  session: number;
  timeStarted: string;
  timeFinished: string | null;
  status: string;
  firstName: string;
  lastName: string;
  totalDistraction: number;
}
