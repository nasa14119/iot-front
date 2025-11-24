import { format } from "@formkit/tempo";
import { RiPlantLine } from "@remixicon/react";
import type { Registre } from "@types";
import { useRegistreLoading } from "./RegistreProvider";
import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";
type Props = { day: Registre["date"] };

// Default values shown
<Ring size="40" stroke="5" bgOpacity="0" speed="2" color="black" />;
const Icon = () => {
  const isLoading = useRegistreLoading();
  if (isLoading)
    return <Ring size="30" stroke="1" bgOpacity="0" speed="2" color="black" />;
  return <RiPlantLine className="size-8" />;
};
export function DayDisplay({ day }: Props) {
  const name = format(day, "dddd", "es");
  const date = format(day, "DD/MM/YYYY");
  const hour = format(day, "h:mm a", "en");
  return (
    <div className="my-2 flex items-center px-2">
      <div className="w-full">
        <div className="text-xs">Ultimo registro:</div>
        <div className="flex gap-2 capitalize font-semibold items-center">
          <span className="text-lg">{name}</span>
          <span>-</span>
          <span>{date}</span>
          <span className="lowercase">{hour}</span>
        </div>
      </div>
      <Icon />
    </div>
  );
}
