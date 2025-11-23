import { format } from "@formkit/tempo";
import { RiPlantLine } from "@remixicon/react";
import type { Registre } from "@types";
type Props = { day: Registre["date"] };

export function DayDisplay({ day }: Props) {
  const name = format(day, "dddd", "es");
  const date = format(day, "DD/MM/YYYY");
  const hour = format(day, "h:mm a", "en");
  return (
    <div className="my-2 flex items-center px-2">
      <div>
        <div className="text-xs">Ultimo registro:</div>
        <div className="flex gap-2 capitalize font-semibold items-center">
          <span className="text-lg">{name}</span>
          <span>-</span>
          <span>{date}</span>
          <span className="lowercase">{hour}</span>
        </div>
      </div>
      <RiPlantLine className="size-8 mx-auto" />
    </div>
  );
}
