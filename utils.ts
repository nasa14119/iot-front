import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { Registre, FetchError, Registres, HistoryRegistre } from "@types";
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
  let res;
  try {
    res = await fetch(`api/registres`);
  } catch {
    throw error(500);
  }
  if (res.status === 204) throw error(res.status);
  if (!res.ok) throw error(res.status);
  const esp = await res.json();
  return esp.data;
};
export const getEspHistory = async (
  url: string
): Promise<HistoryRegistre[] | null> => {
  let res;
  try {
    res = await fetch(url);
  } catch {
    throw error(500);
  }
  if (res.status === 204) throw error(res.status);
  if (!res.ok) throw error(res.status);
  const esp = await res.json();
  return esp.data;
};

export const round_two = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100;
