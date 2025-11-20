import { format } from "@formkit/tempo";
import { RiPlantLine } from "@remixicon/react";
import type { Registre } from "@types";
type Props = { day: Registre["date"] };

export function DayDisplay({ day }: Props) {
  const name = format(day, "dddd", "es");
  const date = format(day, "DD/MM/YYYY");
  return (
    <div className="flex gap-2 p-2 capitalize font-semibold items-center  ">
      <span className="text-lg">{name}</span>
      <span>-</span>
      <span>{date}</span>
      <RiPlantLine className="size-6" />
    </div>
  );
}
