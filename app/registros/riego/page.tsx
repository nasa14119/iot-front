import { LastPump } from "@components/Pump/LastPump";
import { WaterButtonSection } from "@components/Pump/WaterButtonSection";
import { RegistrosHeader } from "@components/RegistrosHeader";

export default function Riego() {
  return (
    <main>
      <RegistrosHeader />
      <LastPump />
      <WaterButtonSection />
    </main>
  );
}
