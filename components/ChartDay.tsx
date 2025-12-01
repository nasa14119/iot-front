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
import { CSSProperties, HTMLAttributes } from "react";
import { RiArrowRightSLine } from "@remixicon/react";
import Link from "next/link";
import { useIndicator } from "@components/NavToday/store";

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
  href?: string;
} & HTMLAttributes<HTMLDivElement>;
export function ChartDay({
  registres,
  topic,
  title,
  color,
  href,
  ...rest
}: Props) {
  const chartColor = color ?? "var(--color-neutral-400)";
  const ref = useIndicator(href ?? "#");
  return (
    <Card
      className="shadow-none border border-black/10 gap-0"
      id={href && href.split("/").at(-1)}
      ref={ref}
      {...rest}
    >
      <CardHeader className="pb-1 relative">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="first-letter:uppercase">
          {format(registres[0].date, "full", "es")}
        </CardDescription>
        {href && (
          <Link href={href} className={`absolute right-5 size-8`}>
            <RiArrowRightSLine
              className=" text-(--arrow-color) "
              style={{ "--arrow-color": chartColor } as CSSProperties}
            />
          </Link>
        )}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={registres}
            margin={{
              top: 10,
              left: 17,
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
