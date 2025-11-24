"use client";
import { useRegistres } from "../../../components/RegistresProvider";
import { RegistrosHeader } from "../../../components/RegistrosHeader";
export default function RegistresMain() {
  const registres = useRegistres();
  return (
    <main className="min-h-dvh bg-white/90 h-fit">
      <RegistrosHeader title="registros" />
      <section className="flex gap-x-2 flex-wrap flex-col">
        {registres.map((registre) => (
          <div key={registre.date} className="flex gap-x-2">
            <span>{registre.temperature}</span>
            <span>{registre.humidity}</span>
            <span>{registre.soil}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
