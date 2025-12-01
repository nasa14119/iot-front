"use client";
import { useHistoryData } from "@components/HistoryProvider";
import { HistoryRegistre } from "@types";
import { ChartBar } from "../ChartBar";
import { ChartWeek } from "./ChartWeek";
import { ChartMonth } from "./ChartMonth";

type Props = {
  item: keyof HistoryRegistre;
  title: string;
  color?: string;
};

export function ChartsDisplay({ item, title, ...rest }: Props) {
  const data = useHistoryData();
  return (
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
  );
}
