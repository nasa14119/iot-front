"use client";
import type { Registres } from "@types";
import { createContext, PropsWithChildren, useContext } from "react";
import { ErrorRegisters } from "./ErrorRegisters";
const Context = createContext<Registres | null>(null);
type Props = PropsWithChildren & {
  status: number;
  registres: Registres | null;
};
export function RegistersProvider({ registres, children, status }: Props) {
  if (!registres) return <ErrorRegisters status={status} />;
  return <Context.Provider value={registres}>{children}</Context.Provider>;
}
export const useRegistres = () => {
  const registres = useContext(Context);
  if (!registres) throw new Error("Context unaxesible");
  return registres;
};
