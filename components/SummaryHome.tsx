import type { Registre } from "@types";
import { DayDisplay } from "./DayDisplay";
import { SummaryCard } from "./SummaryCard";
type Props = { registre: Registre };

export function SummaryHome({ registre }: Props) {
  return (
    <>
      <DayDisplay day={registre.date} />
      <div className="flex p-2 justify-evenly flex-wrap gap-y-2 *:mx-2">
        <SummaryCard icon="humidity" body={registre.soil} desc="ambiente" />
        <SummaryCard icon="temperature" body={registre.soil} desc="ambiente" />
        <SummaryCard icon="soil" body={registre.soil} desc="tierra" />
        <SummaryCard icon="level" body={registre.level} desc="bomba" />
        <SummaryCard icon="pH" body={registre.pH} />
      </div>
    </>
  );
}
