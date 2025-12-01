"use client";
import { useHistoryData } from "@components/HistoryProvider";
import { HistoryRegistre } from "@types";
import { ChartBar } from "../ChartBar";
import { ChartWeek } from "./ChartWeek";
import { ChartMonth } from "./ChartMonth";
import { useDataStore, useResetDate } from "@components/ChartDisplay/store";
import { format } from "@formkit/tempo";

type Props = {
  item: keyof HistoryRegistre;
  title: string;
  color?: string;
};
function Reset() {
  const format_date = useDataStore();
  const reset = useResetDate();
  const today = new Date();
  if (format(today, "DD/MM/YY", "es") !== format_date)
    return (
      <div className="sticky top-12 inset-x-0 fade-in  z-50 sm:-mt-8 sm:top-2">
        <div className="max-w-[500px] mx-auto flex justify-start sm:justify-end px-2 pointer-events-none">
          <button
            className="rounded-4xl px-2 py-1 bg-neutral-200 pointer-events-auto font-semibold text-black/80"
            onClick={reset}
          >
            Ahora
          </button>
        </div>
      </div>
    );
}
export function ChartsDisplay({ item, title, ...rest }: Props) {
  const data = useHistoryData();
  return (
    <>
      <Reset />
      <main className="py-2 px-4 flex flex-col gap-y-2">
        <ChartWeek item={item} {...rest} />
        <ChartMonth item={item} {...rest} />
        <ChartBar
          data={data}
          item={item}
          {...rest}
          title={`Historico completo de ${title.toLowerCase()}`}
        />
      </main>
    </>
  );
}
