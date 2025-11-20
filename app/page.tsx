import { Suspense } from "react";
import { SummaryHome } from "../components/SummaryHome";
import { Registre } from "@types";

const get_data = async (): Promise<Registre> => {
  return {
    date: "2025-11-19T16:10:36.860Z",
    temperature: 17,
    humidity: 20,
    level: 78,
    soil: 78,
    pH: 4,
  };
};
export default async function Home() {
  const data = await get_data();
  return (
    <main>
      <header className="p-2 text-center my-5">
        <h1 className="text-4xl font-bold">Resumen</h1>
      </header>
      <Suspense>
        <SummaryHome registre={data} />
      </Suspense>
    </main>
  );
}
