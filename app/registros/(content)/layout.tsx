import { HistoryProvider } from "@components/HistoryProvider";
import { LoadingRegisters } from "@components/LoadingRegisters";
import { NavRegisters } from "@components/NavRegisters";
import { RegistrosHeader } from "@components/RegistrosHeader";
import { getHistory } from "@fetch";
import { PropsWithChildren, Suspense } from "react";
async function Data({ children }: PropsWithChildren) {
  const [status, data] = await getHistory();
  return (
    <HistoryProvider registres={data} status={status}>
      {children}
    </HistoryProvider>
  );
}
export default async function layout({ children }: PropsWithChildren) {
  return (
    <main className="regiters-layout min-h-dvh">
      <RegistrosHeader />
      <NavRegisters />
      <Suspense fallback={<LoadingRegisters />}>
        <Data>{children}</Data>
      </Suspense>
    </main>
  );
}
export const revalidate = 0;
