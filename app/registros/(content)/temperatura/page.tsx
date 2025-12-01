import { ChartsDisplay } from "@components/ChartDisplay";

export default function Temperature({}) {
  return (
    <ChartsDisplay
      item="temperature"
      title="Temperatura"
      color="var(--color-red-600)"
    />
  );
}
