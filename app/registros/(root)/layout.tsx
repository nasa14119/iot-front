import { getEspRegistresDay } from "@fetch";
import { PropsWithChildren } from "react";
import { RegistersProvider } from "../../../components/RegistresProvider";

type Props = PropsWithChildren;

export default async function layout({ children }: Props) {
  const [status, data] = await getEspRegistresDay();

  return (
    <RegistersProvider registres={data} status={status}>
      {children}
    </RegistersProvider>
  );
}
