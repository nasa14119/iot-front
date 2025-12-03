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
export type PumpRegistre = {
  stamp: string;
  success: "success" | "error" | "check";
  new_level: number;
  soil: number;
  can_water: boolean;
};
type NotificationData = {
  prioridad: "none" | "warning" | "error";
  source: "PUMP" | "MOTOR";
  message: string;
};
export type Notification = {
  id: string;
  stamp: Date;
  data: NotificationData;
};
