"use client";
import type { Registre, Registres } from "@types";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
import { format } from "@formkit/tempo";
import { HTMLAttributes } from "react";

export const description = "A line chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
type Props = {
  registres: Registres;
  topic: keyof Registre;
  title: string;
  color?: string;
} & HTMLAttributes<HTMLDivElement>;
export function ChartDay({ registres, topic, title, color, ...rest }: Props) {
  const chartColor = color ?? "var(--color-neutral-400)";
  return (
    <Card className="my-2 shadow-none border border-black/10 gap-0" {...rest}>
      <CardHeader className="pb-1">
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Desde: {format(registres[0].date, "long", "es")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={registres}
            margin={{
              left: 14,
              right: 11,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value: Registre["date"]) =>
                format(value, "hh:mm", "es")
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey={topic}
              type="natural"
              stroke={chartColor}
              strokeWidth={2}
              dot={{
                fill: chartColor,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
