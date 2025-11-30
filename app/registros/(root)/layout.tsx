import { getEspRegistresDay } from "@fetch";
import { PropsWithChildren } from "react";
import { RegistersProvider } from "../../../components/RegistresProvider";
import { NavRegisters } from "@components/NavRegisters";
import { RegistrosHeader } from "@components/RegistrosHeader";

type Props = PropsWithChildren;

export default async function layout({ children }: Props) {
  const [status, data] = await getEspRegistresDay();
  return (
    <main className="min-h-dvh regiters-layout">
      <RegistrosHeader />
      <NavRegisters />
      <RegistersProvider registres={data} status={status}>
        {children}
      </RegistersProvider>
    </main>
  );
}
export const revalidate = 3;
