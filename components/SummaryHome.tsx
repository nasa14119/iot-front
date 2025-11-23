"use client";
import type { Registre } from "@types";
import { DayDisplay } from "./DayDisplay";
import { SummaryCard } from "./SummaryCard";
import useSwr from "swr";
import { createContext, useContext } from "react";
import type { PropsWithChildren } from "react";
import { getEspLastRegistreClient } from "@utils";
import { EMPTY_REGISTRE } from "../const";
import { ErrorSummary } from "./ErrorSummary";
type Props = { registre: Registre };
const SECONDS_INTERVAL = 1 * 1000;
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
export function SumamryHome() {
  const registre = useContext(Context);
  return (
    <>
      <DayDisplay day={registre.date} />
      <div className="flex p-2 justify-evenly flex-wrap gap-2">
        <SummaryCard icon="humidity" body={registre.humidity} desc="ambiente" />
        <SummaryCard
          icon="temperature"
          body={registre.temperature}
          desc="ambiente"
        />
        <SummaryCard icon="soil" body={registre.soil} desc="tierra" />
        <SummaryCard icon="level" body={registre.level} desc="bomba" />
        <SummaryCard icon="pH" body={registre.pH} />
      </div>
    </>
  );
}
