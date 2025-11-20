import {
  RiDropFill,
  RiDropLine,
  RiFlaskFill,
  RiFlowerLine,
  RiTempColdLine,
} from "@remixicon/react";
import { Registre } from "@types";
import { ReactNode } from "react";

type IconKey = keyof Omit<Registre, "date">;
type Props = {
  icon: IconKey;
  body: number;
  desc?: string;
};
export const ICONS_SUMMARY: Record<IconKey, ReactNode> = {
  humidity: <RiDropFill />,
  pH: <RiFlaskFill />,
  level: <RiDropLine />,
  soil: <RiFlowerLine />,
  temperature: <RiTempColdLine />,
};
const parse_number = (key: IconKey, value: number) => {
  switch (key) {
    case "temperature":
      return `${value} °`;
    case "pH":
      return `${value} pH`;
    default:
      return `${value}%`;
  }
};
export function SummaryCard({ body, icon, desc }: Props) {
  return (
    <div className="flex flex-col bg-neutral-200 items-center p-2 rounded-xl size-20 justify-center">
      <span>{ICONS_SUMMARY[icon]}</span>
      <span className="text-center font-semibold">
        {parse_number(icon, body)}
      </span>
      {desc && desc.length >= 0 && (
        <span className="text-xs capitalize">{desc}</span>
      )}
    </div>
  );
}
