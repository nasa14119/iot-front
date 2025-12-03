"use client";
import { useValueWaterSetter, useWaterData } from "@components/Pump/store";
import { RiCheckFill, RiSeedlingFill } from "@remixicon/react";
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
export function CheckBtn() {
  const data = useWaterData();
  const setter = useValueWaterSetter();
  const [isLoading, setLoading] = useState(false);
  const disable = isLoading;
  const handleClick = async () => {
    setLoading(true);
    await fetch("/api/pump/check").catch(console.error);
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
  if (!data.can_water && data.success === "error")
    return (
      <button
        disabled={disable}
        onClick={handleClick}
        className={tw(
          "rounded-full w-fit p-1 bg-green-600 text-white flex gap-x-2 items-center justify-between ",
          { "opacity-20": disable }
        )}
      >
        {isLoading ? <Loader /> : <RiCheckFill className="size-5" />}
      </button>
    );
}
