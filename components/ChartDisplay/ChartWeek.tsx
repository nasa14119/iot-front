import { ChartBar } from "@components/ChartBar";
import { useControlsWeek, useDataDate } from "@components/ChartDisplay/store";
import { addDay, format, weekEnd } from "@formkit/tempo";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiDatabase2Fill,
} from "@remixicon/react";
import { HistoryRegistre } from "@types";
import { getEspHistory } from "@utils";
import { CSSProperties } from "react";
import useSWR from "swr";

type Props = {
  item: keyof HistoryRegistre;
  color?: string;
};
export function ChartWeek({ color, ...rest }: Props) {
  const colorBar = color ?? "var(--color-neutral-400)";
  const { next, prev } = useControlsWeek();
  const date = useDataDate();
  const end = format(weekEnd(date), "DD/MM/YY", "es");
  const params = new URLSearchParams({ date: end });
  const { data, isLoading } = useSWR(
    `/api/registres/week?${params.toString()}`,
    getEspHistory
  );

  if (isLoading)
    return (
      <div className="w-full aspect-video flex flex-col py-5 rounded-xl bg-card border shadow-sm">
        <div className="relative px-6 ">
          <h2 className="font-semibold">Semana</h2>
          <span className="text-muted-foreground text-sm">
            {format(addDay(date, -6), "DD/MM/YY", "es")} al{" "}
            {format(date, "DD/MM/YY", "es")}
          </span>
          <div className=" absolute top-2 right-5 flex">
            <RiArrowLeftSLine
              className=" text-(--arrow-color) "
              onClick={prev}
              style={{ "--arrow-color": colorBar } as CSSProperties}
            />
            <RiArrowRightSLine
              className=" text-(--arrow-color)"
              onClick={next}
              style={{ "--arrow-color": colorBar } as CSSProperties}
            />
          </div>
        </div>
        <div className="flex px-6 aspect-video justify-evenly items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="w-10 h-4/5 loading bg-neutral-200"
              style={{ "--duration-loading": `${i * 100}ms` } as CSSProperties}
            ></span>
          ))}
        </div>
      </div>
    );
  if (!data)
    return (
      <div className="w-full aspect-video flex flex-col py-5 rounded-xl bg-card border shadow-sm">
        <div className="relative px-6 ">
          <h2 className="font-semibold">Semana</h2>
          <span className="text-muted-foreground text-sm">
            {format(addDay(date, -6), "DD/MM/YY", "es")} al{" "}
            {format(date, "DD/MM/YY", "es")}
          </span>
          <div className=" absolute top-2 right-5 flex">
            <RiArrowLeftSLine
              className=" text-(--arrow-color) "
              onClick={prev}
              style={{ "--arrow-color": colorBar } as CSSProperties}
            />
            <RiArrowRightSLine
              className=" text-(--arrow-color)"
              onClick={next}
              style={{ "--arrow-color": colorBar } as CSSProperties}
            />
          </div>
        </div>
        <div className="flex flex-col px-6 aspect-video justify-center items-center">
          <RiDatabase2Fill className="size-20" />
          <span className="font-medium text-xl">Empty Data</span>
        </div>
      </div>
    );
  return (
    <ChartBar
      data={data}
      color={color}
      {...rest}
      title="Semana"
      next={next}
      prev={prev}
    />
  );
}
