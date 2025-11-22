export interface Registre {
  date: string;
  temperature: number;
  humidity: number;
  level: number;
  soil: number;
  pH: number;
}
export interface FetchError {
  status: number;
  error?: string;
}
