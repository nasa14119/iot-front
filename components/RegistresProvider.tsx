"use client";
import type { Registres } from "@types";
import { createContext, PropsWithChildren, useContext } from "react";
import { ErrorRegisters } from "./ErrorRegisters";
import { useDayRegistres } from "../hooks/useDayRegistres";
const Context = createContext<Registres | null>(null);
type Props = PropsWithChildren & {
  status: number;
  registres: Registres | null;
};
export function RegistersProvider({ registres, children, status }: Props) {
  const [data, , error] = useDayRegistres(registres ?? undefined);
  if (!registres && status === 204) return <ErrorRegisters status={status} />;
  if (error || !registres) return <ErrorRegisters {...error} />;
  return <Context.Provider value={data}>{children}</Context.Provider>;
}
export const useRegistres = () => {
  const registres = useContext(Context);
  if (!registres) throw new Error("Context unaxesible");
  return registres;
};
