"use client";
import { useRouter } from "next/navigation";
import { useRegistres } from "../../../components/RegistresProvider";
import { RegistrosHeader } from "../../../components/RegistrosHeader";
import { ChartDay } from "@components/ChartDay";
export default function RegistresMain() {
  const registres = useRegistres();
  const router = useRouter();
  return (
    <main className="min-h-dvh bg-white/90 h-fit">
      <RegistrosHeader title="registros" />
      <section className="flex gap-x-2 flex-wrap flex-col px-2 pb-20">
        <ChartDay
          registres={registres}
          topic="humidity"
          title="Humedad del Ambiente"
          color="var(--color-blue-950)"
          onClick={() => router.push("registros/humedad")}
        />
        <ChartDay
          registres={registres}
          topic="temperature"
          title="Temperatura del ambiente"
          color="var(--color-red-600)"
        />
        <ChartDay
          registres={registres}
          topic="soil"
          title="Humedad de las plantas"
          color="var(--color-green-600)"
        />
      </section>
    </main>
  );
}
