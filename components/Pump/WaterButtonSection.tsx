"use client";

import { WaterBtn } from "@components/Pump/WaterBtn";

export function WaterButtonSection() {
  return (
    <section className="px-2 my-2">
      <div className="flex justify-between items-center bg-blue-500/10 px-6 py-2 rounded-4xl">
        <h2 className="font-semibold">Regar las plantas</h2>
        <WaterBtn />
      </div>
    </section>
  );
}
