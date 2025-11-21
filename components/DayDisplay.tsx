import { format } from "@formkit/tempo";
import { RiPlantLine } from "@remixicon/react";
import type { Registre } from "@types";
type Props = { day: Registre["date"] };

export function DayDisplay({ day }: Props) {
  const name = format(day, "dddd", "es");
  const date = format(day, "DD/MM/YYYY");
  const hour = format(day, "h:mm a", "en");
  return (
    <div className="my-2 flex items-center">
      <div>
        <div className="px-2 text-xs">Ultimo registro:</div>
        <div className="flex gap-2 px-2 capitalize font-semibold items-center">
          <span className="text-lg">{name}</span>
          <span>-</span>
          <span>{date}</span>
          <span className="lowercase">{hour}</span>
        </div>
      </div>
      <RiPlantLine className="size-8 ml-auto mr-8" />
    </div>
  );
}
