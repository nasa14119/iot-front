"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shad/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@shad/components/ui/chart";
import { HistoryRegistre } from "@types";
import { format, parse } from "@formkit/tempo";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { CSSProperties } from "react";

export const description = "A bar chart";

type Props = {
  data: HistoryRegistre[];
  item: keyof HistoryRegistre;
  color?: string;
  title: string;
  next?: (() => void) | null;
  prev?: (() => void) | null;
};
export function ChartBar({
  data,
  item,
  color,
  title,
  next = null,
  prev = null,
}: Props) {
  const colorBar = color ?? "var(--color-neutral-400)";
  const chartConfig = {
    [item]: {
      label: item,
      color: colorBar,
    },
  } satisfies ChartConfig;
  return (
    <Card>
      <CardHeader className="relative">
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {data.at(0)?.date} al {data.at(-1)?.date}
        </CardDescription>
        <span className="absolute top-1 right-5 flex">
          {prev != null && (
            <RiArrowLeftSLine
              className=" text-(--arrow-color) size-6"
              onClick={prev}
              style={{ "--arrow-color": colorBar } as CSSProperties}
            />
          )}
          {next != null && (
            <RiArrowRightSLine
              className=" text-(--arrow-color) size-6"
              onClick={next}
              style={{ "--arrow-color": colorBar } as CSSProperties}
            />
          )}
        </span>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={"date"}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(v) =>
                format(parse(v, "D/M/YY", "es"), "D/M", "es")
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={item} fill={colorBar} radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
