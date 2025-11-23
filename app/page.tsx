import { RegistreContext, SumamryHome } from "../components/SummaryHome";
import { FancyLink } from "../components/FancyLink";
import { getEspLastRegistre } from "@fetch";
import { ErrorSummary } from "../components/ErrorSummary";
async function DataItem() {
  const data = await getEspLastRegistre();

  if (!data || "status" in data) return <ErrorSummary {...data} />;
  return (
    <RegistreContext registre={data}>
      <SumamryHome />
    </RegistreContext>
  );
}
export default function Home() {
  return (
    <main>
      <header className="p-2 text-center my-5">
        <h1 className="text-4xl font-bold">Resumen</h1>
      </header>
      <DataItem />
      <FancyLink href="/registres" className="text-xl font-semibold my-2">
        Registros
      </FancyLink>
    </main>
  );
}
export const revalidate = 3;
