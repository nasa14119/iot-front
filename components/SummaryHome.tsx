"use client";
import { DayDisplay } from "./DayDisplay";
import { useRegistre } from "./RegistreProvider";
import { SummaryCard } from "./SummaryCard";

export function SumamryHome() {
  const registre = useRegistre();
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
