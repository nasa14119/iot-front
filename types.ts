export interface Registre {
  date: string;
  temperature: number;
  humidity: number;
  level: number;
  soil: number;
  pH: number;
}
export type Registres = Omit<Registre, "level">[];
export interface FetchError {
  status: number;
  error?: string;
}
export interface CarrusselElement {
  href: string;
  title: string;
  desc: string;
  img: string;
  loader?: string;
}
export type HistoryRegistre = {
  date: string;
  humidity: number;
  stamp: string;
  temperature: number;
  soil: number;
  pH: number;
};
