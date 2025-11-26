import { RiFlaskFill } from "@remixicon/react";
import { Registre } from "@types";
import { useCurrentRegistre } from "../hooks/useCurrentRegistre";

// type Props = {};
const LevelBomb = ({
  data,
  isLoading,
}: {
  data: Registre;
  isLoading: boolean;
}) => {
  const color = data.level < 30 ? "text-red-700" : "text-black";
  return (
    <div className="flex flex-col border border-black/10 rounded-2xl w-full px-[10%] justify-center">
      <span className="font-medium text-base">Nivel de la bomba</span>
      <span
        className={`font-semibold text-4xl ${color} ${
          isLoading ? "opacity-70" : "opacity-100"
        }`}
      >
        {data.level}%
      </span>
    </div>
  );
};
const Skeleton = () => {
  return (
    <section className="px-2 grid h-[15dvh] grid-cols-[1fr_auto] pt-2 gap-x-2">
      <div className="flex flex-col border border-black/10 rounded-2xl w-full px-[10%] justify-center">
        <span className="font-medium text-base">Nivel de la bomba</span>
        <span className="font-semibold text-4xl">00%</span>
      </div>
      <div className="size-full flex flex-col justify-center items-center border border-black/10 rounded-2xl aspect-square">
        <span className="font-thin text-xs">Tierra</span>
        <RiFlaskFill className="size-8 text-amber-800" />
        <span className="text-base font-medium">00 pH</span>
      </div>
    </section>
  );
};
export function HeaderRegistrosPage({}) {
  const [data, isLoading, error] = useCurrentRegistre();
  if (!data || error) return <Skeleton />;
  return (
    <section className="px-2 grid h-[15dvh] grid-cols-[1fr_auto] pt-2 gap-x-2">
      <LevelBomb data={data} isLoading={isLoading} />
      <div className="size-full flex flex-col justify-center items-center border border-black/10 rounded-2xl aspect-square">
        <span className="font-thin text-xs">Tierra</span>
        <RiFlaskFill className="size-8 text-amber-800" />
        <span
          className={`text-base font-medium ${
            isLoading ? "opacity-70" : "opacity-100"
          }`}
        >
          {data.pH} pH
        </span>
      </div>
    </section>
  );
}
