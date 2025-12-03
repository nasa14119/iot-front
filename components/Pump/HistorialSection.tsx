"use client";
import { Historial } from "@components/Pump/Historial";
import { useWaterRegisters } from "@components/Pump/PumpProvider";

export function HistorialSection() {
  const data = useWaterRegisters();
  if (data === null) return null;
  return (
    <>
      <h2 className="px-4 text-2xl font-bold py-4">Historial</h2>
      <div className="rounded-4xl bg-blue-50 px-5 mx-2 py-2 aspect-16/2 flex items-center flex-col">
        <Historial data={data} />
      </div>
    </>
  );
}
