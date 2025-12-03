import { HistorialServer } from "@components/Pump/HistorialServer";
import { LastPump } from "@components/Pump/LastPump";
import { WaterButtonSection } from "@components/Pump/WaterButtonSection";
import { RegistrosHeader } from "@components/RegistrosHeader";

export default async function Riego() {
  return (
    <main>
      <RegistrosHeader />
      <LastPump />
      <WaterButtonSection />
      <HistorialServer />
    </main>
  );
}
