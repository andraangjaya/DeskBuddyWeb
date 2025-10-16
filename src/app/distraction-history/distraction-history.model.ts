export interface DistractionHistoryModel{
  id?: number;
  session: number;
  firstName: string;
  lastName: string;
  distractions: number;
  distractionStart: string;
  distractionEnd: string | null;
  timeElapsed: string;
}
