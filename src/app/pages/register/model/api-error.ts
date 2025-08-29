
export interface ApiError {
  timestamp: string;
  status: number;
  error: string;
  details: { [key: string]: string };
}