import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { Registre, FetchError } from "@types";
export type RequestResponse = Promise<Registre | FetchError>;
export const tw = (...styles: ClassValue[]) => twMerge(clsx(styles));
export const error = (status: number): FetchError => ({ status });
export const getEspLastRegistreClient = async (): RequestResponse => {
  try {
    const res = await fetch(`api/registre`);
    if (!res.ok || !("json" in res)) return error(res.status);
    const esp = await res.json();
    return esp;
  } catch {
    return error(500);
  }
};
