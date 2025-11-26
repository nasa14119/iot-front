"use client";
import type { Registre } from "@types";
import { createContext, useContext } from "react";
import type { PropsWithChildren } from "react";
import { EMPTY_REGISTRE } from "../const";
import { ErrorSummary } from "./ErrorSummary";
import { useCurrentRegistre } from "../hooks/useCurrentRegistre";
type Props = { registre: Registre };
const Context = createContext<{ registre: Registre; isLoading: boolean }>({
  registre: EMPTY_REGISTRE,
  isLoading: true,
});
export function RegistreContext({
  registre,
  children,
}: Props & PropsWithChildren) {
  const [data, isLoading, error] = useCurrentRegistre(registre);
  if (data === null) return <ErrorSummary isLoading={isLoading} {...error} />;
  return (
    <Context.Provider value={{ registre: data, isLoading }}>
      {children}
    </Context.Provider>
  );
}
export const useRegistre = () => {
  const constext = useContext(Context);
  if (!constext) throw new Error("Context unaccesible");
  return constext.registre;
};
export const useRegistreLoading = () => {
  const constext = useContext(Context);
  if (!constext) throw new Error("Context unaccesible");
  return constext.isLoading;
};
