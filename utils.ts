import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { Registre } from "@types";
export const tw = (...styles: ClassValue[]) => twMerge(clsx(styles));

export const getEspLastRegistre = async () => {
  const esp = await fetch(`${process.env.GATEWAY_PATH}/registre`);
  return (await esp.json()) as Registre;
};
export const getEspLastRegistreClient = async () => {
  const esp = await fetch(`api/registre`);
  return (await esp.json()) as Registre;
};
