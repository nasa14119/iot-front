import { SumamryHome } from "../components/SummaryHome";
import { RegistreContext } from "../components/RegistreProvider";
import { FancyLink } from "../components/FancyLink";
import { getEspLastRegistre } from "@fetch";
import { ErrorSummary } from "../components/ErrorSummary";
import { Carrusel } from "../components/Carrusel";
import { BannerServer } from "@components/notificaciones/BannerServer";
import { Suspense } from "react";
import { LoadingBanner } from "@components/notificaciones/LoadingBanner";
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
      <Suspense fallback={<LoadingBanner />}>
        <BannerServer />
      </Suspense>
      <FancyLink href="/registros" className="text-xl font-semibold my-2">
        Registros
      </FancyLink>
      <Carrusel />
    </main>
  );
}
export const revalidate = 3;
