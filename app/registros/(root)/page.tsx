"use client";
import { useRegistres } from "../../../components/RegistresProvider";
import { ChartDay } from "@components/ChartDay";
import { HeaderRegistrosPage } from "@components/HeaderRegistrosPage";
export default function RegistresMain() {
  const registres = useRegistres();
  if (!registres) return null;
  return (
    <section className="min-h-dvh bg-white/90 h-fit">
      <HeaderRegistrosPage />
      <section className="flex gap-x-2 flex-wrap flex-col px-2 pb-20 gap-y-5 mt-2">
        <ChartDay
          registres={registres}
          topic="humidity"
          title="Humedad del Ambiente"
          color="var(--color-blue-950)"
          href="registros/humedad"
        />
        <ChartDay
          registres={registres}
          topic="temperature"
          title="Temperatura del Ambiente"
          color="var(--color-red-600)"
          href="registros/temperatura"
        />
        <ChartDay
          registres={registres}
          topic="soil"
          title="Humedad de las Plantas"
          color="var(--color-green-600)"
          href="registros/tierra"
        />
      </section>
    </section>
  );
}
