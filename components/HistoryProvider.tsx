"use client";
import { ErrorRegisters } from "@components/ErrorRegisters";
import { HistoryRegistre } from "@types";
import { PropsWithChildren, useContext } from "react";
import { createContext } from "react";

type Props = {
  registres: HistoryRegistre[] | null;
  status: number;
} & PropsWithChildren;
const Context = createContext<HistoryRegistre[]>([]);
export function HistoryProvider({ registres, status, children }: Props) {
  if (status != 200 || registres === null)
    return <ErrorRegisters status={status} />;
  return <Context.Provider value={registres}>{children}</Context.Provider>;
}
export const useHistoryData = () => {
  const data = useContext(Context);
  if (!data || data === null) new Error("Something went wrong");
  return data;
};
