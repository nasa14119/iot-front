"use client";
import { PumpRow } from "@components/Pump/PumpRow";
import { useValueWaterSetter, useWaterData } from "@components/Pump/store";
import { RiDatabase2Line } from "@remixicon/react";
import { tw } from "@utils";
import { useEffect, useEffectEvent } from "react";
import useSWR from "swr";
const fetcher = async (url: string) => {
  let isOk = true;
  let res;
  try {
    res = await fetch(url);
    isOk = res.ok;
  } catch {
    return null;
  }
  if (!isOk) return null;
  return await res.json();
};
const REFRESH_COOLDOWN_SECONDS = 2;
export function LastPump({}) {
  const { data, isLoading } = useSWR("/api/pump", fetcher, {
    refreshInterval: REFRESH_COOLDOWN_SECONDS,
  });
  const stateData = useWaterData();
  const handleUpdate = useEffectEvent(useValueWaterSetter());
  useEffect(() => {
    handleUpdate(data);
  }, [data]);
  if (isLoading) {
    return (
      <section
        className={tw(
          "rounded-4xl bg-blue-100 px-5 mx-2 loading p-2 aspect-16/2"
        )}
      >
        <div className="h-full mx-2 bg-blue-900/20 rounded-4xl"></div>
      </section>
    );
  }
  return (
    <section
      className={tw(
        "rounded-4xl bg-blue-100 px-5 mx-2 py-2 aspect-16/2 flex items-center"
      )}
    >
      {stateData === null && (
        <div className="flex items-center font-semibold">
          <RiDatabase2Line className="size-8" />
          <span className="pl-2">Sin registros de agua</span>
        </div>
      )}
      {stateData !== null && <PumpRow data={stateData} />}
    </section>
  );
}
