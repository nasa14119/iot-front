import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { Registre, FetchError, Registres } from "@types";
export type RequestResponse = Promise<Registre | FetchError>;
export type RequestResponseClient = Promise<Registre>;
export const tw = (...styles: ClassValue[]) => twMerge(clsx(styles));
export const error = (status: number): FetchError => ({ status });
export const getEspLastRegistreClient = async (): RequestResponseClient => {
  try {
    const res = await fetch(`api/registre`);
    if (!res.ok || !("json" in res)) throw error(res.status);
    const esp = await res.json();
    return esp;
  } catch {
    throw error(500);
  }
};
export const getEspLastRegistresClient = async (): Promise<Registres> => {
  try {
    const res = await fetch(`api/registres`);
    if (!res.ok || !("json" in res)) throw error(res.status);
    const esp = await res.json();
    return esp.data;
  } catch {
    throw error(500);
  }
};
