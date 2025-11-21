"use client";
import type { Registre } from "@types";
import { DayDisplay } from "./DayDisplay";
import { SummaryCard } from "./SummaryCard";
import useSwr from "swr";
import { createContext, useContext } from "react";
import type { PropsWithChildren } from "react";
import { getEspLastRegistreClient } from "@utils";
type Props = { registre: Registre };
const default_registre: Registre = {
  date: "",
  humidity: 0,
  level: 0,
  pH: 0,
  soil: 0,
  temperature: 0,
};
const SECONDS_INTERVAL = 1 * 1000;
const Context = createContext<Registre>(default_registre);
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
        const prevDate = prev?.date ?? "";
        const nextDate = next?.date ?? "";
        return prevDate === nextDate;
      },
    }
  );
  return <Context.Provider value={clientData}>{children}</Context.Provider>;
}
export function SumamryHome() {
  const registre = useContext(Context);
  return (
    <>
      <DayDisplay day={registre.date} />
      <div className="flex p-2 justify-evenly flex-wrap gap-2">
        <SummaryCard icon="humidity" body={registre.soil} desc="ambiente" />
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
