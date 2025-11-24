"use client";
import type { Registre } from "@types";
import useSwr from "swr";
import { createContext, useContext } from "react";
import type { PropsWithChildren } from "react";
import { getEspLastRegistreClient } from "@utils";
import { EMPTY_REGISTRE } from "../const";
import { ErrorSummary } from "./ErrorSummary";
type Props = { registre: Registre };
const SECONDS_INTERVAL = 10 * 1000;
const Context = createContext<Registre>(EMPTY_REGISTRE);
export function RegistreContext({
  registre,
  children,
}: Props & PropsWithChildren) {
  const { data: clientData } = useSwr(
    "api/registre",
    getEspLastRegistreClient,
    {
      refreshInterval: SECONDS_INTERVAL,
      fallbackData: registre,
      compare: (prev, next) => {
        if (!prev && !next) return false;
        if (prev && next && "status" in next && "status" in prev) {
          return true;
        }
        if (!prev || "status" in prev) return false;
        if (!next || "status" in next) return true;
        return prev.date === next.date;
      },
    }
  );
  if ("status" in clientData) return <ErrorSummary {...clientData} />;
  return <Context.Provider value={clientData}>{children}</Context.Provider>;
}
export const useRegistre = () => {
  const constext = useContext(Context);
  if (!constext) throw new Error("Context unaccesible");
  return constext;
};
