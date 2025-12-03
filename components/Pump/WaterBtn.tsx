"use client";
import { useValueWaterSetter, useWaterData } from "@components/Pump/store";
import { RiSeedlingFill } from "@remixicon/react";
import "ldrs/react/Ring.css";
import { Ring } from "ldrs/react";
import { useState } from "react";
import { tw } from "@utils";
function Loader() {
  return (
    <span className="size-5 grid place-content-center">
      <Ring size="15" stroke="1" bgOpacity="0" speed="2" color="white" />
    </span>
  );
}
export function WaterBtn() {
  const data = useWaterData();
  const setter = useValueWaterSetter();
  const [isLoading, setLoading] = useState(false);
  const disable = !data?.can_water || isLoading;
  const handleClick = async () => {
    setLoading(true);
    await fetch("/api/pump/trigger").catch(console.error);
    const res = await fetch("/api/pump").catch(() => {
      setter(null);
      return;
    });
    if (!res) {
      setLoading(false);
      return;
    }
    if (!res.ok || res.status === 204) {
      setter(null);
      return;
    }
    setter(await res.json());
    setLoading(false);
  };
  if (!data) return null;
  return (
    <button
      disabled={disable}
      onClick={handleClick}
      className={tw(
        "rounded-4xl w-fit py-1 bg-blue-500 text-white flex gap-x-2 px-4 items-center justify-between ",
        { "bg-blue-500/50": disable }
      )}
    >
      <span>Regar</span>
      {isLoading ? <Loader /> : <RiSeedlingFill className="size-5" />}
    </button>
  );
}
