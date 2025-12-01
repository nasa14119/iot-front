import { ChartsDisplay } from "@components/ChartDisplay";

export default function Humedad({}) {
  return (
    <ChartsDisplay
      item="humidity"
      title="Humedad del Ambiente"
      color="var(--color-blue-950)"
    />
  );
}
