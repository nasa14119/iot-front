import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { FetchError, Registre } from "@types";
type RequestResponse = Promise<Registre | FetchError>;
export const tw = (...styles: ClassValue[]) => twMerge(clsx(styles));
const error = (status: number): FetchError => ({ status });
export const getEspLastRegistre = async (): RequestResponse => {
  try {
    const esp = await fetch(`${process.env.GATEWAY_PATH}/registre`).catch(
      () => {
        throw { code: "FETCH" };
      }
    );
    if (esp.status === 204) return error(204);
    if (!esp.ok) return error(esp.status);
    return await esp.json();
  } catch (e) {
    const err = e as Record<string, string>;
    if (err?.code === "FETCH") return error(503);
    return error(500);
  }
};
export const getEspLastRegistreClient = async (): RequestResponse => {
  try {
    const esp = await fetch(`api/registre`);
    if (esp.status !== 200 || !("json" in esp)) return error(esp.status);
    return await esp.json();
  } catch (_) {
    return error(500);
  }
};
