import { Registre } from "@types";

export const EMPTY_REGISTRE: Registre = {
  date: "",
  humidity: 0,
  level: 0,
  pH: 0,
  soil: 0,
  temperature: 0,
} as const;
